# QuietHome — Noise Level Database for Home Products

## Problem
No site compares home products across categories by actual decibel level.
Wirecutter mentions dB sometimes. RTINGS tests some products. But nobody
puts air purifiers, fans, keyboards, blenders, and vacuums on the same
dB scale so you can see your total "noise budget."

Apartment dwellers, remote workers, parents with babies, and noise-sensitive
people are left Googling "quietest air purifier" and trusting marketing claims.

## Solution
Database of 50+ home products with verified dB levels, filterable across
all categories. The world's only cross-category noise comparison site.

### Core features
1. **dB Comparison Table** — all products on one scale with reference points
   (30dB = whisper, 50dB = normal conversation, 70dB = vacuum)
2. **Noise Budget Calculator** — "if I run air purifier + fan + dishwasher,
   my apartment is at ~55dB total"
3. **Category Database** — air purifiers, fans, keyboards, blenders, washing
   machines, dishwashers, vacuums, coffee makers, hair dryers
4. **Filters** — by category, dB range, price, noise rating (whisper/quiet/moderate)

### Killer differentiators
- Cross-category dB comparison = world first
- Noise budget concept = nobody does this
- Japanese apartment context (thin walls, neighbor awareness)
- dB reference guide built into the UI

## Tech Stack
- GitHub Pages (static)
- Vanilla JS + Tailwind CSS
- data/products.json (existing, needs ASIN fill)
- GA4 + Clarity

## GitHub Repos
- humancronadmin/quiet-home (existing)

## MVP Scope (ASIN fill + SEO articles)
1. Fill all 50 amazon_asin fields via Amazon US search
2. Verify noise_db values against manufacturer specs
3. Add noise budget calculator (simple JS: select running products → sum dB)
4. 3 SEO articles:
   - "The Quietest Air Purifiers for Apartments (2026)"
   - "Silent Keyboards for Remote Workers"
   - "Your Apartment Noise Budget: How Loud Is Your Home?"

## Data Sources
- Manufacturer published dB specs
- RTINGS measured data (where available)
- r/homeimprovement, r/ApartmentLiving community reports
- Future: owner's own dB measurements (smartphone dB meter app)

## Revenue Model
- Amazon US affiliate (japantool-20)
- Premium quiet products = higher price points ($200-1000+ air purifiers)
- Noise-sensitive buyers willing to pay 20% more for quiet

## SEO Keywords
| Priority | Keyword | Est. Monthly Searches |
|---|---|---|
| Main | quietest air purifier | 2,900 |
| Main | quiet keyboard for office | 1,300 |
| Long-tail | quietest blender under 60db | 200 |
| Long-tail | low noise fan for bedroom | 400 |
| Long-tail | apartment noise reduction products | 300 |
| Long-tail | quiet washing machine for apartment | 820 |
