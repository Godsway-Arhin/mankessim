---
name: Heritage Narrative System
colors:
  surface: '#fff8f6'
  surface-dim: '#f9d1c8'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ed'
  surface-container: '#ffe9e4'
  surface-container-high: '#ffe2db'
  surface-container-highest: '#ffdad2'
  on-surface: '#2b1611'
  on-surface-variant: '#4d4635'
  inverse-surface: '#432a25'
  inverse-on-surface: '#ffede9'
  outline: '#7f7663'
  outline-variant: '#d1c5af'
  surface-tint: '#755b00'
  primary: '#755b00'
  on-primary: '#ffffff'
  primary-container: '#c9a227'
  on-primary-container: '#4b3a00'
  inverse-primary: '#ecc246'
  secondary: '#a33c39'
  on-secondary: '#ffffff'
  secondary-container: '#fd817a'
  on-secondary-container: '#73191a'
  tertiary: '#326942'
  on-tertiary: '#ffffff'
  tertiary-container: '#7ab486'
  on-tertiary-container: '#094623'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe08e'
  primary-fixed-dim: '#ecc246'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ae'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#832524'
  tertiary-fixed: '#b5f1bf'
  tertiary-fixed-dim: '#99d4a4'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#18512c'
  background: '#fff8f6'
  on-background: '#2b1611'
  surface-variant: '#ffdad2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  subheading-rt:
    fontFamily: Merriweather
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.7'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is built to honor the historical weight and cultural vibrancy of the Mankessim region. It balances **Modern Minimalism** with **Traditional Elegance**, creating a digital environment that feels like a curated gallery rather than a standard portal. 

The aesthetic is "Contemporary Heritage"—clean, high-end layouts punctuated by rich, tactile details. The user experience should feel archival yet living, prioritizing storytelling through generous whitespace, high-contrast serif typography, and subtle ornamental accents inspired by Adinkra symbology. This approach ensures the community’s legacy is presented with dignity and sophistication.

## Colors

The palette is rooted in royal Ghanaian tones. **Royal Gold** and **Deep Maroon** serve as the primary brand drivers, used for high-importance interactions and leadership elements. **Forest Green** acts as a secondary accent to represent life, growth, and the natural landscape.

The foundation of the UI relies on **Cream** and **Ivory White** for backgrounds to avoid the sterile feel of pure white, providing a warm, parchment-like quality. **Dark Brown** is utilized for primary text and deep borders to maintain softer contrast than black, enhancing the "heritage" feel.

## Typography

Typography is the core of this design system’s storytelling capability. 
- **Playfair Display** is used for high-level headings and display titles, lending an authoritative and historical voice.
- **Merriweather** is employed for subheadings and long-form introductions, bridging the gap between the decorative display face and the functional body text.
- **Inter** provides a clean, neutral balance for body copy, navigation, and UI metadata, ensuring maximum legibility on digital screens.

For mobile, display sizes scale down aggressively to maintain a single-column rhythm without excessive line breaks.

## Layout & Spacing

This design system utilizes a **Fixed Grid** approach for desktop (12 columns) and a fluid layout for mobile. A generous spacing rhythm is essential to evoke a sense of luxury and importance.

- **Vertical Rhythm:** Sections are separated by large gaps (`section-gap`) to allow content to breathe and signify a change in narrative.
- **Container:** Main content is centered in a 1280px container.
- **Micro-spacing:** Built on an 8px base unit. Component internal padding should favor larger values (e.g., 24px or 32px) to maintain the airy, "gallery" feel.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. Surfaces do not simply "float"; they sit with weight.

- **Surfaces:** Cards and containers use the `Ivory White` color on top of `Cream` backgrounds to create subtle depth.
- **Shadows:** Use extra-diffused shadows with a hint of `Dark Brown` tint (e.g., `rgba(78, 52, 46, 0.08)`) to avoid a "techy" look. Shadows should feel soft and natural.
- **Ornamental Depth:** Gold borders (1px or 2px) are used on primary containers to elevate them above secondary content.
- **Patterns:** Adinkra patterns should be used at 5-10% opacity as background textures to add "material" depth to sections.

## Shapes

The design system uses **Soft (1)** roundedness. Elements like cards and buttons have a subtle 4px (`0.25rem`) corner radius. This choice avoids the clinical feel of sharp corners while remaining more structured and formal than fully rounded or pill-shaped designs. It strikes a balance between traditional architectural lines and modern interface standards.

## Components

### Buttons
- **Primary:** Deep Maroon background with Royal Gold text. Use uppercase `label-caps` for the label.
- **Secondary:** Transparent background with a 1.5px Royal Gold border and Dark Brown text.
- **Hover States:** Subtle shift in background opacity or a slight lift in elevation.

### Cards
- **Directory Cards:** Ivory White background, 1px Gold border, and a soft ambient shadow. Images should use a slight sepia filter or high-contrast professional photography.
- **Interactive States:** On hover, the border weight might increase or the shadow deepens to invite engagement.

### Historical Timeline
- A vertical or horizontal axis using a thin Royal Gold line. 
- Milestones are marked with small Maroon circles.
- Year labels use `Merriweather` in Bold.

### Hero Banners
- Full-bleed imagery with a Dark Brown or Maroon overlay at 30-40% opacity to ensure `Playfair Display` titles in Ivory White remain legible.
- Parallax effects on background Adinkra patterns to create a sense of immersion.

### Input Fields
- Underlined style or subtle cream-filled boxes with Dark Brown labels. Avoid heavy borders; focus on clean typography and clear focus states in Royal Gold.

### Dividers
- Use thin Gold lines. For major section breaks, incorporate a small, centered Adinkra symbol (like 'Gye Nyame') in Maroon or Gold.