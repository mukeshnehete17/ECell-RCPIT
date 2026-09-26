# E-Cell Website — Development & Design Rules

This document outlines the permanent design system, coding standards, architecture, and development workflow for the E-Cell website. All future development must strictly adhere to these rules.

---

## 1. Project Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS v4 + Vanilla CSS (for custom keyframes & intricate micro-interactions)
- **Markup**: JSX
- **CSS Framework**: Tailwind CSS v4 (configured via modern CSS-first `@theme` in `src/index.css`)
- **Dependencies**: ❌ No unnecessary third-party libraries or UI kits

---

## 2. Design Style & Philosophy

- **Style**: Premium, Minimal, Modern, Clean, Professional
- **Theme**: Startup & Entrepreneurship focused
- **Core Principles**:
  - **More design vs cleaner design** → Choose cleaner design.
  - **More code vs simpler code** → Choose simpler code.
  - **More elements vs more whitespace** → Prefer whitespace.
- **The Premium Feel**: Must originate from typography, spacing, composition, alignment, motion, and consistency — **not** from excessive decoration.

---

## 3. Color Palette & Tailwind Tokens

Configure in Tailwind CSS v4 `@theme` in `src/index.css`:

```css
@theme {
  --color-primary-green: #16A34A;
  --color-green-dark: #15803D;
  --color-green-hover: #166534;
  --color-dark-bg: #111111;
}
```

- **White (`#FFFFFF`)**: Pure contrast text & elements
- **Black / Dark Background (`#111111`)**: Deep modern background & text
- **Primary Green (`#16A34A`)**: Fresh, visible premium green for CTAs, active underlines, and accents
- **Dark Green (`#15803D`)**: Secondary CTA hover states
- **Deep Hover Green (`#166534`)**: Active button states

---

## 4. Typography & Font Tokens

### Primary Headings & Statements:
- **Font**: `Roboto Slab`, serif
- **Tailwind configuration**:
  ```css
  --font-serif: "Roboto Slab", serif;
  ```
- **Used for**:
  - Hero headings
  - Important section titles
  - Strong statement text

### Navigation, Body & UI Elements:
- **Font**: Apple-style system font stack:
  ```css
  --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", sans-serif;
  ```
- **Used for**:
  - Navigation links
  - Paragraphs & body copy
  - Buttons
  - UI elements

---

## 5. Design & Layout Rules

1. **Keep it visually simple**: Do not over-design sections.
2. **Strictly avoid**:
   - Too many gradients
   - Heavy shadows
   - Too many cards
   - Random decorative text
   - Excessive background words / watermarks
   - Too many colors
3. **Whitespace as a Feature**: Whitespace is an intentional, first-class design element. Allow sections room to breathe.
4. **Desktop Layout**: Wide, spacious, and premium feeling.
5. **Hero Section Viewport**:
   - Capable of covering the full desktop viewport when appropriate (`min-h-screen`).
6. **Reusable Content Container**:
   - Standard boundary container:
     ```css
     width: min(92%, 1240px);
     margin: 0 auto;
     ```
     Or Tailwind equivalent: `w-[min(92%,1240px)] mx-auto`.

---

## 6. Animation Rules

Use clean, performant CSS / Tailwind animations. Animations should make the website feel premium, not flashy.

### Allowed:
- Fade-in entrances
- Text reveals
- Translate / slide animations
- Smooth hover movement
- Button transitions
- Subtle floating elements (sparingly)
- Small scale effects
- Elegant staggered entrances
- Lightweight cursor-reactive effects (if strictly necessary)

### Avoid:
- ❌ Excessive bouncing
- ❌ Fast animation
- ❌ Spinning elements
- ❌ Too many continuously moving objects
- ❌ Distracting effects

---

## 7. Component Structure

Every major website section resides in its own self-contained folder under `src/components/`.

```
src/
  assets/
  components/
    Navbar/
      Navbar.jsx
      Navbar.css (optional for custom keyframes/animations)
    Hero/
      Hero.jsx
      Hero.css (optional for custom keyframes/animations)
    ...
  App.jsx
  index.css (Tailwind v4 @import and @theme definitions)
  main.jsx
```

### Rules:
- Tailwind utility classes provide clean styling directly in JSX.
- For complex keyframe animations or specialized micro-interactions, companion `.css` files remain supported in each component folder.
- Do not create unnecessary components. Keep components focused and reusable.

---

## 8. Code Style & Maintainability

Code must always remain:
- **Beginner-friendly**
- **Compact**
- **Clean**
- **Easy to understand**
- **Easy to explain in college viva**
- **Properly formatted**

### Strictly Avoid:
- Huge JSX files
- Deep component nesting
- Unreadable, bloated class lists (keep utility classes clean and organized)
- Complex unnecessary logic
- Unnecessary React state
- Unnecessary hooks
- Duplicate CSS / conflicting styles
- Inline CSS unless absolutely necessary

---

## 9. Continuous Cleanup Rule

After creating or modifying **every** section:
1. Check unused imports.
2. Remove unused imports.
3. Remove unused assets.
4. Remove unused custom CSS.
5. Remove dead JSX.
6. Clean up redundant or conflicting Tailwind classes.
7. Remove unnecessary wrappers.
8. Simplify repeated code.
9. Keep files compact.
10. Ensure previously completed sections still work.

> **Do this continuously throughout development. Never allow dead code to accumulate.**

---

## 10. Asset Rules

- **Location**: Store all website assets inside `src/assets/`.
- **Naming Convention**: Proper, descriptive names:
  - `ecell-logo.svg`
  - `hero-visual.webp`
  - `event-image.webp`
  - ❌ Do not use names like `image1.png`, `abc.png`, `final-final.png`.
- **Cleanup**: If an asset is no longer used, delete it immediately.

---

## 11. Responsiveness

Website must work properly on:
- Desktop
- Laptop
- Tablet
- Mobile

- **Desktop**: The primary visual experience.
- **Mobile Layout**:
  - Stack elements naturally (`flex-col lg:flex-row`, etc.).
  - Maintain spacing.
  - Keep text readable.
  - Prevent horizontal scrolling (`overflow-x-hidden`).
  - Keep buttons easy to tap (touch-friendly targets, min 44px).
  - Simplify animation if required.

---

## 12. Component Guidelines

### Navbar
- Minimal, spacious, clean, and easy to scan.
- Do not overload navigation with too many links.

### Hero Rules
- Cover most or all of the desktop viewport (`min-h-screen`).
- Immediately communicate E-Cell identity.
- Have one strong headline.
- Have one short supporting line.
- Have maximum two major CTA buttons.
- Use premium animation.
- Have strong typography.
- Use whitespace properly.
- Avoid generic stock-photo startup design.
- Avoid overcrowding.

### Button Style
- **Primary Button**:
  - Charcoal green background (`bg-charcoal-green` / `#263C34`)
  - White text (`text-white`)
  - Clean rounded corners (`rounded-md` or `rounded-lg`)
  - Premium hover animation (`hover:bg-dark-green transition-all duration-300`)
- **Secondary Button**:
  - White or transparent background
  - Black / charcoal border (`border border-charcoal-green/30 text-charcoal-green`)
  - Minimal hover effect
- Avoid using pill-shaped buttons everywhere.

---

## 13. Content Style

Website text should be:
- Short
- Strong
- Clear
- Professional
- Human

### Avoid:
- Long paragraphs
- Generic motivational lines
- Startup buzzword spam
- Unnecessary decorative words
- Repeating the same message

---

## 14. Development Workflow

For every new section follow:
1. Understand section purpose
2. Decide minimum required content
3. Decide layout
4. Create component folder
5. Create JSX (using clean Tailwind v4 utility classes)
6. Add companion CSS only if specific keyframes or complex animations are required
7. Add only necessary assets
8. Import component into `App.jsx`
9. Check desktop
10. Check mobile
11. Remove dead code and unused classes
12. Compact existing code
13. Continue to next section

---

## 15. Important Protection Principles

- **Do NOT redesign existing completed sections unless explicitly asked.**
- **When modifying one component, avoid breaking other components.**
- **Do not unnecessarily change files unrelated to the current task.**
