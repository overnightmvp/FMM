---
created: 2026-02-12T20:51
title: Fix brand-system.html layout and prompt issues
area: docs
files:
  - docs/brand-system.html
---

## Problem

4 issues in docs/brand-system.html identified from browser review:
1. Section 1: Primary wordmark box not full-width — uses flex:1, should stack full-width same as secondary treatment. Full-width container is a global rule for .wordmark-box.
2. Section 4: SVG element cards (box, truck, star) overflow on mobile — white-space:pre in code-block causes horizontal bleed out of container.
3. Section 5: Photography brief uses different template (shoot brief + bullets) vs all other sections (MIDJOURNEY v6 / DALL-E 3 / IDEOGRAM format). Also has a </button"> typo (extra quote).
4. Section 5: Social Media + Display Ad prompts missing hex color codes — reference "navy" and "orange" as words only, not #1e3a8a/#f97316.

## Solution

All fixes in docs/brand-system.html:
1. .wordmark-row → flex-direction:column; .wordmark-box → width:100%; remove inline flex:1 from 2 boxes; remove redundant .wordmark-row mobile override
2. Add overflow:hidden + white-space:pre-wrap/word-break to .svg-card in mobile @media query
3. Replace photography brief section: rename label, rewrite content to MIDJOURNEY v6 / DALL-E 3 / IDEOGRAM / STOCK SEARCH format; fix </button"> typo
4. Add #1e3a8a/#f97316 hex codes to Social Media Creative + Google Display Ads MIDJOURNEY prompts; add IDEOGRAM variants to both sections
