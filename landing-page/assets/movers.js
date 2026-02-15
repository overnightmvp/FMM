/* ===== FORT MYERS LABOR ONLY MOVERS — JS =====
   Multi-step quote form · GA4 analytics · FAQ accordion
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

/* ===== SINGLE-PAGE QUOTE FORM ===== */
function initSinglePageForm() {
  const bedroomSel = document.getElementById('fmm-bedrooms');
  const moversDisplay = document.getElementById('fmm-movers-count');
  const hoursDisplay = document.getElementById('fmm-hours-count');
  const basePrice = document.getElementById('fmm-base-price');
  const totalPrice = document.getElementById('fmm-total-price');
  const priceDesc = document.getElementById('fmm-price-desc');
  const submitBtn = document.getElementById('fmm-submit-btn');
  const successEl = document.getElementById('fmm-form-success');
  const errorEl = document.getElementById('fmm-form-error');
  const form = document.getElementById('fmm-quote-form');

  let currentAddons = {};

  function getBedroomCount() {
    return bedroomSel ? bedroomSel.value : '2';
  }

  function calcTotal() {
    const br = getBedroomCount();
    const base = PRICING.bedrooms[br] ? PRICING.bedrooms[br].base : 400;
    let addonsTotal = 0;
    Object.entries(currentAddons).forEach(([key, val]) => {
      if (val && PRICING.addons[key]) addonsTotal += PRICING.addons[key].price;
    });
    return { base, addonsTotal, total: base + addonsTotal };
  }

  function updateDisplay() {
    const br = getBedroomCount();
    const data = PRICING.bedrooms[br] || PRICING.bedrooms['2'];
    const { base, addonsTotal, total } = calcTotal();

    if (moversDisplay) moversDisplay.textContent = data.movers + ' Movers';
    if (hoursDisplay) hoursDisplay.textContent = data.hours + ' Hours';
    if (priceDesc) priceDesc.textContent = 'Base (' + data.label + ', ' + data.movers + ' movers, ' + data.hours + ' hrs)';
    if (basePrice) basePrice.textContent = '$' + base;
    if (totalPrice) totalPrice.textContent = '$' + total;

    // sync hidden fields
    const hBedrooms = document.getElementById('fmm-h-bedrooms');
    const hTotal = document.getElementById('fmm-h-total');
    if (hBedrooms) hBedrooms.value = br;
    if (hTotal) hTotal.value = '$' + total;
  }

  if (bedroomSel) {
    bedroomSel.addEventListener('change', updateDisplay);
    updateDisplay();
  }

  // Addon checkboxes
  document.querySelectorAll('.upgrade-checkbox').forEach(function(cb) {
    cb.addEventListener('change', function() {
      const addon = this.dataset.addon;
      currentAddons[addon] = this.checked;
      updateDisplay();
      // update addons hidden field
      const selected = Object.entries(currentAddons)
        .filter(([k, v]) => v)
        .map(([k]) => PRICING.addons[k] ? PRICING.addons[k].label + ' ($' + PRICING.addons[k].price + ')' : k)
        .join(', ');
      const hAddons = document.getElementById('fmm-h-addons');
      if (hAddons) hAddons.value = selected;
    });
  });

  // Sync visible fields to hidden form fields on submit
  function syncHiddenFields() {
    const fields = ['name', 'email', 'phone', 'date', 'from', 'to'];
    fields.forEach(function(f) {
      const visible = document.getElementById('fmm-' + f);
      const hidden = document.getElementById('fmm-h-' + f);
      if (visible && hidden) hidden.value = visible.value;
    });
    const moveTypeSel = document.getElementById('fmm-move-type');
    const hMoveType = document.getElementById('fmm-h-move-type');
    if (moveTypeSel && hMoveType) hMoveType.value = moveTypeSel.value;
  }

  function validateSingleForm() {
    const required = ['fmm-name', 'fmm-email', 'fmm-phone', 'fmm-date', 'fmm-from', 'fmm-to'];
    let valid = true;
    required.forEach(function(id) {
      const el = document.getElementById(id);
      if (el) {
        const empty = !el.value.trim();
        el.classList.toggle('error', empty);
        if (empty) valid = false;
      }
    });
    // Phone validation
    const phoneEl = document.getElementById('fmm-phone');
    if (phoneEl && phoneEl.value) {
      const digits = phoneEl.value.replace(/\D/g, '');
      if (digits.length < 10) {
        phoneEl.classList.add('error');
        valid = false;
      }
    }
    return valid;
  }

  if (submitBtn) {
    submitBtn.addEventListener('click', function() {
      if (!validateSingleForm()) {
        submitBtn.textContent = 'Please fill in all fields 👆';
        setTimeout(function() { submitBtn.textContent = 'Get My Free Quote 🚚'; }, 2000);
        return;
      }
      syncHiddenFields();
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending... ⏳';

      const formData = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(function(res) {
        if (res.ok) {
          if (successEl) { successEl.style.display = 'block'; }
          form.style.display = 'none';
          // scroll to success
          if (successEl) successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // GA4 tracking
          if (typeof gtag !== 'undefined') {
            gtag('event', 'lead_generated', {
              event_category: 'form',
              event_label: 'quote_form_single_page',
              value: 75
            });
          }
        } else {
          throw new Error('Form submission failed');
        }
      }).catch(function() {
        if (errorEl) { errorEl.style.display = 'block'; }
        submitBtn.disabled = false;
        submitBtn.textContent = 'Get My Free Quote 🚚';
      });
    });
  }
}

/* ===== DOM READY ===== */
document.addEventListener('DOMContentLoaded', () => {
  initMultiStepForm();
  if (document.getElementById('fmm-bedrooms')) { initSinglePageForm(); }
  initFAQ();
  initScrollAnimations();
  initPhoneLinks();
  initMobileCTABar();
  trackPageView();
});

/* ===== PRICE CALCULATION ===== */
function calculateTotal() {
  const pricing = PRICING.bedrooms[state.selectedBedrooms];
  let total = pricing.base;
  state.selectedAddons.forEach(key => { total += PRICING.addons[key].price; });
  return total;
}

function updatePriceDisplay() {
  const pricing = PRICING.bedrooms[state.selectedBedrooms];
  const total   = calculateTotal();

  // Update all price estimate displays (step 1 card + hero card)
  document.querySelectorAll('.price-est-value').forEach(el => {
    el.textContent = `$${total}`;
  });

  // Update hero card price if present
  const heroPrice = document.getElementById('hero-price');
  if (heroPrice) heroPrice.textContent = `$${total}`;

  // Update step-2 breakdown
  const breakdownEl = document.getElementById('price-breakdown');
  if (breakdownEl) {
    const lines = [];
    lines.push({ label: `Base (${pricing.movers} movers, ${pricing.hours} hrs)`, amount: pricing.base });
    state.selectedAddons.forEach(key => {
      lines.push({ label: PRICING.addons[key].label, amount: PRICING.addons[key].price });
    });
    const lineHTML = lines.map(l => `
      <div class="price-line">
        <span>${l.label}</span>
        <span>$${l.amount}</span>
      </div>`).join('');
    breakdownEl.innerHTML = lineHTML + `
      <div class="price-line total">
        <span>Total Estimate</span>
        <span>$${total}</span>
      </div>`;
  }
}

/* ===== MULTI-STEP FORM ===== */
function initMultiStepForm() {
  const form = document.getElementById('multistep-form');
  if (!form) return;

  let currentStep = 1;

  function goToStep(n) {
    // Update step dots
    document.querySelectorAll('.step-dot').forEach((dot, i) => {
      dot.classList.remove('active', 'done');
      if (i + 1 < n)  dot.classList.add('done');
      if (i + 1 === n) dot.classList.add('active');
    });
    // Show correct step panel
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    const step = document.getElementById(`step-${n}`);
    if (step) step.classList.add('active');
    currentStep = n;
    updatePriceDisplay();
  }

  // Bedroom selection — sync ALL bedroom-btn elements (hero card + step 1)
  document.querySelectorAll('.bedroom-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedBedrooms = btn.dataset.bedrooms;
      // Activate matching buttons everywhere, deactivate others
      document.querySelectorAll(`.bedroom-btn[data-bedrooms="${btn.dataset.bedrooms}"]`)
        .forEach(b => b.classList.add('active'));
      document.querySelectorAll(`.bedroom-btn:not([data-bedrooms="${btn.dataset.bedrooms}"])`)
        .forEach(b => b.classList.remove('active'));
      updatePriceDisplay();
      trackEvent('calculator_bedroom_select', { bedrooms: state.selectedBedrooms });
    });
  });

  // Addon toggles
  document.querySelectorAll('.addon-item').forEach(item => {
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
      updatePriceDisplay();
      trackEvent('calculator_addon_toggle', { addon: key, selected: state.selectedAddons.has(key) });
    });
  });

  // Step navigation buttons
  document.getElementById('next-1')?.addEventListener('click', () => {
    goToStep(2);
    trackEvent('multistep_next', { from: 1 });
  });
  document.getElementById('next-2')?.addEventListener('click', () => {
    goToStep(3);
    trackEvent('multistep_next', { from: 2 });
  });
  document.getElementById('back-2')?.addEventListener('click', () => {
    goToStep(1);
    trackEvent('multistep_back', { to: 1 });
  });
  document.getElementById('back-3')?.addEventListener('click', () => {
    goToStep(2);
    trackEvent('multistep_back', { to: 2 });
  });

  // Form submit (step 3)
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await handleFormSubmit(form);
  });

  // Set default bedroom active state (2 bedrooms)
  document.querySelectorAll('[data-bedrooms="2"]').forEach(b => b.classList.add('active'));

  goToStep(1);
}

/* ===== FORM SUBMISSION ===== */
async function handleFormSubmit(form) {
  const btn = form.querySelector('[type="submit"]');
  const originalText = btn.textContent;

  if (!validateForm(form)) return;

  btn.textContent = 'Sending...';
  btn.disabled = true;

  const data    = new FormData(form);
  const payload = Object.fromEntries(data.entries());

  // Attach pricing state
  payload.bedrooms        = state.selectedBedrooms;
  payload.addons          = Array.from(state.selectedAddons).join(', ') || 'None';
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
    showFormError(form, btn, originalText);
    trackEvent('form_error', { error: err.message });
  }
}

function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    if (!field.value.trim()) {
      field.style.borderColor = 'var(--color-warning)';
      valid = false;
    } else {
      field.style.borderColor = '';
    }
  });

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
  const wrap = form.closest('.multistep-wrap');
  if (wrap) {
    const progress = wrap.querySelector('.step-progress');
    if (progress) progress.style.display = 'none';
    wrap.querySelectorAll('.form-step').forEach(s => s.style.display = 'none');
    const successEl = wrap.querySelector('.form-success');
    if (successEl) successEl.classList.add('visible');
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

  if (!form.querySelector('.form-error-msg')) {
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

/* ===== STICKY MOBILE CTA BAR ===== */
function initMobileCTABar() {
  const bar = document.querySelector('.mobile-cta-bar');
  if (!bar) return;

  document.body.classList.add('has-mobile-bar');

  const formSection = document.getElementById('get-quote');
  if (formSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Hide bar when quote form is visible; show it otherwise
        bar.style.display = entry.isIntersecting ? 'none' : '';
      });
    }, { threshold: 0.2 });
    observer.observe(formSection);
  }
}

/* ===== FAQ ACCORDION ===== */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
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
  trackEvent('generate_lead', {
    currency: 'USD',
    value: CONFIG.LEAD_VALUE,
    lead_source: 'website_form',
    bedrooms: formData.bedrooms || state.selectedBedrooms,
    estimated_price: formData.estimated_price || calculateTotal(),
  });

  trackEvent('conversion', {
    send_to: CONFIG.GA4_ID,
    value: CONFIG.LEAD_VALUE,
    currency: 'USD',
  });
}
