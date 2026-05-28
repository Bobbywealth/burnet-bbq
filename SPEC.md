# Burnet BBQ — New Website Spec

## Concept & Vision

A premium, dark-themed BBQ restaurant website that channels the fire and soul of Portuguese-American barbecue. The site should feel like walking into a high-end smokehouse — warm amber glows against deep charcoal backgrounds, smoky textures, and the kind of bold typography that makes your stomach growl. Four NJ locations, one unforgettable brand.

## Design Language

**Aesthetic direction:** Dark smokehouse luxury — think premium steakhouse meets Texas BBQ pit. Deep blacks and charcoals with ember-orange fire accents. Textured, not flat.

**Color palette:**
- Primary (Fire): `#E85D04` (ember orange)
- Secondary (Smoke): `#F48C06` (warm amber)
- Accent (Char): `#FFBA08` (golden highlight)
- Background: `#0D0D0D` (near black)
- Surface: `#1A1A1A` (dark card)
- Border: `#2A2A2A` (subtle divider)
- Text: `#FAFAFA` (off-white)
- Text muted: `#A3A3A3`

**Typography:**
- Headings: `Bebas Neue` — tall, impactful, BBQ poster vibe
- Subheadings: `Oswald` — bold, condensed
- Body: `Inter` — clean, readable

**Motion:**
- Hero: smoke particle animation (CSS), staggered text reveal
- Scroll: elements fade+slide up on intersection (IntersectionObserver)
- Hover: cards lift with shadow, buttons pulse glow
- Nav: smooth scroll, sticky header with backdrop blur on scroll

## Layout & Structure

Single-page with smooth-scroll sections:
1. **Hero** — Full-viewport video-style bg (CSS animated fire/smoke), logo, tagline, CTA
2. **About** — Story of Carlos Teixeira, fresh ingredients, 3-location trust signal
3. **Menu** — Filter tabs (Smoked Meats / Portuguese / Sides / Plates) with item cards (name, description, price badge)
4. **Locations** — 4 location cards with address, phone, hours, directions link
5. **Catering** — Bold CTA section with phone numbers per location
6. **Footer** — Logo, nav links, social icons, copyright

## Menu Items (verified from site + PDF page names)

### Smoked Meats
- Pulled Pork — $5.99/lb
- Beef Short Rib — $7.99/lb
- BBQ Chicken (half) — $8.99
- BBQ Chicken (whole) — $14.99
- Portuguese Sausage — $4.99
- Smokehouse Sausage — $4.99
- Pork Spare Ribs — $6.99/lb
- Baby Back Ribs — $9.99/lb

### Portuguese Specialties
- Feijoada — Market price
- Carne de Porco à Alentejana — Market price
- Roasted Portuguese Chicken — $14.99
- Chouriço Sandwich — $8.99

### Sides
- Portuguese Rice — $2.99
- Mac & Cheese — $3.49
- Collard Greens — $2.99
- Cornbread (4 pcs) — $3.99
- baked beans — $2.99

### Plates (include 2 sides)
- Pulled Pork Plate — $13.99
- Beef Short Rib Plate — $15.99
- BBQ Chicken Plate — $12.99
- Sausage Plate — $11.99

## Locations

1. **Burnet Ave (HQ)** — 1363 Burnet Ave, Union, NJ 07083 | (908) 687-0313
2. **Stuyvesant Ave** — 1275 Stuyvesant Ave, Union, NJ 07083 | (908) 688-8897
3. **Chancellor Ave** — 685 Chancellor Ave, Irvington, NJ 07111 | (973) 399-0404
4. **Hoffman Blvd** — 51 Hoffman Blvd, East Orange, NJ 07017 | (973) 675-4220

## Technical Approach

- **Static HTML/CSS/JS** — single `index.html` + `style.css` + `script.js`, no build step
- **Hosting:** Render static site
- **Font delivery:** Google Fonts CDN
- **Icons:** Inline SVG + Font Awesome CDN
- **No external JS frameworks** — vanilla for speed
