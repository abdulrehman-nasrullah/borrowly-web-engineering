---
name: High-Contrast Rental Grid
colors:
  surface: '#fbf8fc'
  surface-dim: '#dcd9dd'
  surface-bright: '#fbf8fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f6'
  surface-container: '#f0edf1'
  surface-container-high: '#eae7eb'
  surface-container-highest: '#e4e1e5'
  on-surface: '#1b1b1e'
  on-surface-variant: '#5d3f3c'
  inverse-surface: '#303033'
  inverse-on-surface: '#f3f0f4'
  outline: '#926f6b'
  outline-variant: '#e6bdb8'
  surface-tint: '#c00014'
  primary: '#ae0011'
  on-primary: '#ffffff'
  primary-container: '#d71920'
  on-primary-container: '#ffece9'
  inverse-primary: '#ffb4ab'
  secondary: '#5f5e5f'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e3'
  on-secondary-container: '#656465'
  tertiary: '#555458'
  on-tertiary: '#ffffff'
  tertiary-container: '#6d6c70'
  on-tertiary-container: '#f2eff3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000d'
  secondary-fixed: '#e5e2e3'
  secondary-fixed-dim: '#c8c6c7'
  on-secondary-fixed: '#1c1b1c'
  on-secondary-fixed-variant: '#474647'
  tertiary-fixed: '#e4e1e6'
  tertiary-fixed-dim: '#c8c5ca'
  on-tertiary-fixed: '#1b1b1e'
  on-tertiary-fixed-variant: '#47464a'
  background: '#fbf8fc'
  on-background: '#1b1b1e'
  surface-variant: '#e4e1e5'
typography:
  display-hero:
    fontFamily: Barlow Condensed
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 58px
    letterSpacing: 0.02em
  display-hero-mobile:
    fontFamily: Barlow Condensed
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Barlow Condensed
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 38px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Barlow Condensed
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 30px
    letterSpacing: 0.03em
  headline-md:
    fontFamily: Barlow Condensed
    fontSize: 24px
    fontWeight: '800'
    lineHeight: 28px
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Barlow Condensed
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.02em
  price-display:
    fontFamily: Barlow Condensed
    fontSize: 26px
    fontWeight: '800'
    lineHeight: 26px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-xs:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system powers an open peer-to-peer equipment and goods rental marketplace operating in Pakistan. The brand personality balances utilitarian trust, physical grit, and sharp editorial confidence. It rejects decorative pastel fluff in favor of architectural rigor, high visual tension, and strict functional clarity.

The visual style is characterized by alternating rhythmic dark and light horizontal bands:
- Deep dark full-bleed zones (`#0B0B0C`) establish immersive hero headers, search modules, and transaction footers.
- Crisp light zones (`#F4F4F5` with pure white cards) provide high legibility for product exploration, item comparisons, and administrative detail views.
- High-contrast typography pairs ultra-condensed heavy display lettering with crystalline grotesque body copy.
- The interface feels tactical and immediate—built for direct peer transactions, transparent daily rates, and operational reliability across urban Pakistani logistics.

## Colors

Color is applied with strict architectural restraint. Rather than tinting UI surfaces, color is reserved for explicit interactive cues, system validation, and structural horizontal grounding rules.

### Theme Palette & Roles
- **Primary Red (`#D71920`):** Used deliberately for key call-to-actions, category active tabs, tag highlights, and section divider accent ticks. Hover state deepens to `#B5121A`. In dark container contexts requiring text legibility, text accent uses `#EF3340`.
- **Deep Black Surface (`#0B0B0C`):** Base canvas for inverted dark sections, hero modules, and top-tier navigational surfaces.
- **Dark Secondary Container (`#18181B`):** Dark mode cards, elevated modal headers, and nested dark panels.
- **Dark Structural Border (`#27272A`):** 1px structural dividing lines within dark containers.
- **Light Base Surface (`#F4F4F5`):** High-clarity backdrop for browsable content sections.
- **Pure White (`#FFFFFF`):** Base background for light surface cards, data tables, and input elements.
- **Light Structural Border (`#E4E4E7`):** Precision 1px dividers and card boundaries in light contexts.
- **Text & Foreground Hierarchy:** `#0B0B0C` (primary text on light), `#52525B` (supporting/secondary text on light), `#A1A1AA` (muted/caption text), and `#FFFFFF` (primary text on dark).

### Status Badges
Status indicators rely on strict high-contrast pairs designed for immediate recognition:
- **Pending:** `#FEF3C7` (background) / `#92400E` (text & border)
- **Accepted / Active:** `#DCFCE7` (background) / `#166534` (text & border)
- **Rejected / Cancelled:** `#FEE2E2` (background) / `#991B1B` (text & border)
- **Inactive / Expired:** `#F4F4F5` (background) / `#52525B` (text & border)

## Typography

The typography pairs mechanical industrial punch with rational Swiss functionality:
- **Headlines & Numerical Rates:** All primary headers, banner calls, section markers, and rate figures employ **Barlow Condensed** with heavy weights (700 and 800) in strict uppercase styling. Letterforms are tight, athletic, and authoritative.
- **Pricing Format:** Rental rates are rendered in Barlow Condensed as `Rs. X / day`, where the currency identifier `Rs.` and rate numeric use heavy condensed styling, while `/ day` transitions to neutral medium-weight Inter.
- **Body & Controls:** UI labels, inputs, transaction status flags, specs, and descriptive copy utilize **Inter** to ensure maximum legibility at small sizes and high pixel densities across mobile viewports.

## Layout & Spacing

The layout is built on a structured grid model alternating between full-bleed dark bands and contained light workspace canvases.

### Grid & Breakpoints
- **Desktop (1200px+):** 12-column grid with a maximum content container width of `1280px`, `1.5rem` (`24px`) gutters, and `4rem` outer canvas padding.
- **Tablet (768px – 1199px):** 8-column grid with `1rem` (`16px`) gutters and `2rem` outer margin padding.
- **Mobile (< 768px):** 4-column fluid layout with `1rem` outer margin padding and `0.75rem` (`12px`) column gaps.

### Section Banding
Content flows in stacked horizontal layers:
1. Top black utility header and hero navigation strip.
2. Neutral grey (`#F4F4F5`) catalog grid area holding cards.
3. Dark feature/verification strip (`#0B0B0C`) for trust guarantees and peer protocols.
4. Product matrices and management dashboard sections.
5. Inverted utility footer.

## Elevation & Depth

Visual depth avoids soft gradients or blurry drop-shadows. Hierarchy is communicated through crisp borders, solid structural planes, and precise edge contrast.

- **Crisp Structural Outlines:** Surfaces are bounded by strict 1px solid borders (`#E4E4E7` on light panels, `#27272A` on dark panels).
- **Surface Layering:** Elevated surfaces sit on a direct contrast step. On the dark canvas, cards lift from `#0B0B0C` to `#18181B`. On the light canvas, white (`#FFFFFF`) cards lift cleanly against the light background (`#F4F4F5`).
- **Zero-Blur Hover Shift:** State changes are communicated via subtle upward physical displacement (`translateY(-2px)`) and border-color transitions to `#D71920` or neutral black, rather than through heavy drop-shadows. A restrained tactical shadow (`0 4px 0 0 #0B0B0C` or `0 2px 8px rgba(0,0,0,0.06)`) is allowed exclusively on primary action buttons or floating booking bars.

## Shapes

The design language is strictly geometric, grounded, and compact:
- **Base Components (Inputs, Buttons, Cards):** Form elements and content units employ a precise corner radius between `4px` and `6px`.
- **Badges and Micro-tags:** Compact status indicators utilize `4px` radii to maintain a crisp, industrial profile.
- **Roundedness Scale:** Pill-shaped round buttons are strictly avoided. All corners remain tight and utilitarian to match the condensed, industrial typography.

## Components

### Buttons
- **Primary Action:** Solid `#D71920` background, white text (`Inter`, 14px, weight 600, uppercase with slight tracking), 0.5rem radius, 1px solid `#D71920`. Minimum height `44px` (48px for mobile tap targets). Hover switches to `#B5121A`.
- **Secondary (Dark Surface):** Solid `#0B0B0C` with 1px border `#27272A`, white text. In light contexts, solid `#FFFFFF` with 1px border `#E4E4E7` and `#0B0B0C` text.
- **Tertiary / Ghost:** Transparent background with red or monochrome border, active tap indicator.

### Product & Equipment Cards
- Pure white container (`#FFFFFF`) with 1px solid `#E4E4E7` border and 6px radius.
- Aspect ratio 4:3 photography thumbnail featuring a neutral low-saturation background, separated from content by a 1px bottom border.
- Category tag positioned top-left over image or above title.
- Item title rendered in high-contrast Barlow Condensed or medium Inter; rate explicitly rendered in high-contrast Barlow Condensed as `Rs. [Amount] / day`.
- Clear, unrated, clean layout without star ratings, review counters, or retail checkout affordances. Direct peer contact or availability check actions only.

### Status Badges & Chips
- Padding of 4px 8px with a 4px corner radius.
- Font: Inter, 11px, weight 700, uppercase letter-spacing 0.05em.
- Color combinations correspond strictly to assigned status pairings (Pending: `#FEF3C7`/`#92400E`, Accepted: `#DCFCE7`/`#166534`, Rejected: `#FEE2E2`/`#991B1B`, Inactive: `#F4F4F5`/`#52525B`).

### Form Controls & Inputs
- Height minimum `44px` with 12px horizontal padding.
- Crisp 1px `#E4E4E7` border on white background.
- Focus state activates a sharp 1px border shift to `#0B0B0C` with a 2px `#D71920` ring offset.
- Checkboxes and radio buttons feature square/tight circular form factors with active fill in `#D71920`.

### Section Dividers & Accent Strips
- Prominent section headers incorporate a bold red horizontal accent tick (`#D71920`, 3px high by 32px wide) directly adjacent to or underlying the section category label.
- Horizontal rules spanning dark sections utilize 1px solid `#27272A`.