/* ===== FORT MYERS LABOR ONLY MOVERS — JS =====
   Form handling · Quote calculator · GA4 analytics · FAQ accordion
   ============================================================== */

'use strict';

/* ===== CONFIG ===== */
const CONFIG = {
  FORM_ENDPOINT: 'https://formspree.io/f/YOUR_FORM_ID',  // Replace with your Formspree ID
  PHONE_NUMBER:  '(904) 479-8844',
  PHONE_LINK:    'tel:+19044798844',
  GA4_ID:        'G-XXXXXXXXXX',  // Replace with your GA4 Measurement ID
  LEAD_VALUE:    75,              // $ per qualified lead (for GA4 conversion tracking)
};

/* ===== PRICING DATA ===== */
const PRICING = {
  bedrooms: {
    '1': { base: 300, movers: 2, hours: 3, label: '1 Bedroom' },
    '2': { base: 400, movers: 2, hours: 4, label: '2 Bedrooms' },
    '3': { base: 500, movers: 2, hours: 5, label: '3 Bedrooms' },
    '4': { base: 650, movers: 3, hours: 5, label: '4 Bedrooms' },
    '5': { base: 800, movers: 3, hours: 6, label: '5+ Bedrooms' },
  },
  addons: {
    truck:    { price: 150, label: 'Rental Truck (+24hr)' },
    assembly: { price: 75,  label: 'Bed Assembly/Disassembly' },
    stairs:   { price: 50,  label: 'Stairs Fee (per flight)' },
    packing:  { price: 100, label: 'Packing Service (1 room)' },
  }
};

/* ===== STATE ===== */
let state = {
  selectedBedrooms: '2',
  selectedAddons: new Set(),
};

/* ===== DOM READY ===== */
document.addEventListener('DOMContentLoaded', () => {
  initCalculator();
  initLeadForm();
  initFAQ();
  initScrollAnimations();
  initPhoneLinks();
  trackPageView();
});

/* ===== QUOTE CALCULATOR ===== */
function initCalculator() {
  const bedroomBtns = document.querySelectorAll('.bedroom-btn');
  const addonItems  = document.querySelectorAll('.addon-item');

  // Bedroom selection
  bedroomBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedBedrooms = btn.dataset.bedrooms;
      bedroomBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updatePrice();
      trackEvent('calculator_bedroom_select', { bedrooms: state.selectedBedrooms });
    });
  });

  // Addon toggles
  addonItems.forEach(item => {
    item.addEventListener('click', () => {
      const key = item.dataset.addon;
      if (state.selectedAddons.has(key)) {
        state.selectedAddons.delete(key);
        item.classList.remove('selected');
        item.querySelector('.addon-check').innerHTML = '';
      } else {
        state.selectedAddons.add(key);
        item.classList.add('selected');
        item.querySelector('.addon-check').innerHTML = '✓';
      }
      updatePrice();
      trackEvent('calculator_addon_toggle', { addon: key, selected: state.selectedAddons.has(key) });
    });
  });

  // Set default active state
  const defaultBtn = document.querySelector('[data-bedrooms="2"]');
  if (defaultBtn) defaultBtn.classList.add('active');

  updatePrice();
}

function updatePrice() {
  const pricing  = PRICING.bedrooms[state.selectedBedrooms];
  let total      = pricing.base;
  let addonTotal = 0;
  const lines    = [];

  lines.push({ label: `Base (${pricing.movers} movers, ${pricing.hours} hrs)`, amount: pricing.base });

  state.selectedAddons.forEach(key => {
    const addon = PRICING.addons[key];
    addonTotal += addon.price;
    lines.push({ label: addon.label, amount: addon.price });
  });

  total += addonTotal;

  // Update breakdown
  const breakdownEl = document.getElementById('price-breakdown');
  if (breakdownEl) {
    const lineHTML = lines.map(l => `
      <div class="price-line">
        <span>${l.label}</span>
        <span>$${l.amount}</span>
      </div>`).join('');
    breakdownEl.innerHTML = lineHTML + `
      <div class="price-line total">
        <span>Total Estimate</span>
        <span id="price-total">$${total}</span>
      </div>`;
  }

  // Update hero card if present
  const heroPrice = document.getElementById('hero-price');
  if (heroPrice) heroPrice.textContent = `$${total}`;
}

/* ===== LEAD FORM ===== */
function initLeadForm() {
  const forms = document.querySelectorAll('.lead-form');

  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await handleFormSubmit(form);
    });
  });
}

async function handleFormSubmit(form) {
  const btn = form.querySelector('[type="submit"]');
  const originalText = btn.textContent;

  // Validate
  if (!validateForm(form)) return;

  // Loading state
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());

  // Add calculator data
  const pricing = PRICING.bedrooms[state.selectedBedrooms];
  payload.bedrooms      = state.selectedBedrooms;
  payload.addons        = Array.from(state.selectedAddons).join(', ') || 'None';
  payload.estimated_price = calculateTotal();

  try {
    const res = await fetch(CONFIG.FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      showFormSuccess(form);
      trackLead(payload);
    } else {
      throw new Error('Server error');
    }
  } catch (err) {
    // Graceful fallback — show phone number
    showFormError(form, btn, originalText);
    trackEvent('form_error', { error: err.message });
  }
}

function calculateTotal() {
  const pricing = PRICING.bedrooms[state.selectedBedrooms];
  let total = pricing.base;
  state.selectedAddons.forEach(key => { total += PRICING.addons[key].price; });
  return total;
}

function validateForm(form) {
  let valid = true;
  const required = form.querySelectorAll('[required]');

  required.forEach(field => {
    const group = field.closest('.form-group');
    if (!field.value.trim()) {
      field.style.borderColor = 'var(--color-warning)';
      valid = false;
    } else {
      field.style.borderColor = '';
    }
  });

  // Phone format validation
  const phoneField = form.querySelector('[name="phone"]');
  if (phoneField && phoneField.value) {
    const cleaned = phoneField.value.replace(/\D/g, '');
    if (cleaned.length < 10) {
      phoneField.style.borderColor = 'var(--color-warning)';
      valid = false;
    }
  }

  return valid;
}

function showFormSuccess(form) {
  const successEl = form.closest('.form-wrap')?.querySelector('.form-success')
    || form.parentElement.querySelector('.form-success');

  if (successEl) {
    form.style.display = 'none';
    successEl.classList.add('visible');
  } else {
    form.innerHTML = `
      <div class="form-success visible">
        <div class="form-success-icon">✅</div>
        <h3>Quote Request Received!</h3>
        <p>We'll call you back within 10 minutes during business hours.<br>
           Or call us now: <a href="${CONFIG.PHONE_LINK}" style="color:var(--color-primary);font-weight:700">${CONFIG.PHONE_NUMBER}</a></p>
      </div>`;
  }
}

function showFormError(form, btn, originalText) {
  btn.textContent = originalText;
  btn.disabled = false;

  const existingError = form.querySelector('.form-error-msg');
  if (!existingError) {
    const msg = document.createElement('p');
    msg.className = 'form-error-msg';
    msg.style.cssText = 'color:var(--color-warning);font-size:var(--font-size-sm);text-align:center;margin-top:12px;';
    msg.innerHTML = `Submission failed. Please call us directly: <a href="${CONFIG.PHONE_LINK}" style="font-weight:700;color:var(--color-primary)">${CONFIG.PHONE_NUMBER}</a>`;
    form.appendChild(msg);
  }
}

/* ===== PHONE NUMBER FORMATTING ===== */
function initPhoneLinks() {
  document.querySelectorAll('input[name="phone"]').forEach(input => {
    input.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length >= 10) {
        val = `(${val.slice(0,3)}) ${val.slice(3,6)}-${val.slice(6,10)}`;
      }
      e.target.value = val;
    });
  });
}

/* ===== FAQ ACCORDION ===== */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Open clicked (unless it was already open)
      if (!isOpen) {
        item.classList.add('open');
        trackEvent('faq_open', { question: btn.textContent.trim().slice(0, 60) });
      }
    });
  });
}

/* ===== SCROLL ANIMATIONS ===== */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* ===== SMOOTH SCROLL for CTA buttons ===== */
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  e.preventDefault();
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Track CTA click
    trackEvent('cta_click', { target: link.getAttribute('href'), text: link.textContent.trim() });
  }
});

/* ===== GA4 ANALYTICS ===== */
function trackPageView() {
  if (typeof gtag === 'undefined') return;
  gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
  });
}

function trackEvent(eventName, params = {}) {
  if (typeof gtag === 'undefined') {
    console.log('[Analytics]', eventName, params);
    return;
  }
  gtag('event', eventName, params);
}

function trackLead(formData) {
  // GA4 conversion event — $75 lead value
  trackEvent('generate_lead', {
    currency: 'USD',
    value: CONFIG.LEAD_VALUE,
    lead_source: 'website_form',
    bedrooms: formData.bedrooms || state.selectedBedrooms,
    estimated_price: formData.estimated_price || calculateTotal(),
  });

  // Also fire standard conversion
  trackEvent('conversion', {
    send_to: CONFIG.GA4_ID,
    value: CONFIG.LEAD_VALUE,
    currency: 'USD',
  });
}
