# DOS X DOS 2.0 - Project Structure

## Overview

This project is a Next.js and TypeScript-based web application with a structured file organization. It includes support for GSAP animations, SCSS styling, and Framer Motion for UI animations. The folder structure is designed for modularity, scalability, and maintainability.

## Project Folder Structure

### Root Level

```
DOSXDOS_2.0/
├── .next/                # Next.js build output (auto-generated)
├── .vscode/              # VSCode workspace settings
├── node_modules/         # Dependencies installed via npm
├── public/               # Public assets (images, fonts, global CSS files)
├── src/                  # Main source code
├── .eslint.json          # ESLint configuration
├── .gitignore            # Git ignored files
├── next.config.js        # Next.js configuration file
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation (this file)
```

### 📂 public/ - Static Assets

The public/ folder contains static files that are served directly. Next.js does not process files in this folder.

```
public/
├── assets/
│   ├── css/               # Global CSS files (not processed by SCSS)
│   ├── fonts/             # Custom web fonts (TTF, WOFF, WOFF2)
│   ├── img/               # Static images (logos, icons, etc.)
```

fonts/ → Contains FontAwesome and GalleryModern web fonts.

css/ → Contains some additional global CSS animations.

### 📂 src/ - Main Source Code

### 📁 src/app/ - Next.js App Router (Main Pages & Routes)
```
src/app/
├── (about)/               # About page
├── (blog)/                # Blog-related pages
├── (contact)/             # Contact page variations
├── (homes)/               # Homepage layouts
├── (portfolio)/           # Portfolio pages
├── (shop)/                # E-commerce shop pages
├── (team)/                # Team introduction pages
│
├── admin/                 # Admin panel for managing blog posts
│   ├── login/             # Admin login page
│   ├── new-post/          # Blog post editor
│   ├── page.tsx           # Admin dashboard
│
├── favicon.ico            # Site favicon
├── layout.tsx             # Root layout file (wraps all pages)
├── not-found.tsx          # Custom 404 page
├── page.tsx               # Main index page
```

Admin Panel (admin/) → Handles blog post creation, login, and management.

Pages are grouped in folders (e.g., (blog), (portfolio), etc.) for better organization.

### 📁 src/components/ - Reusable UI Components
```
src/components/
├── about/                 # Components related to 'About' pages
├── account/               # Account settings UI components
├── blog/                  # Blog-related UI elements
├── checkout/              # Checkout form components
├── contact/               # Contact forms and sections
├── faq/                   # FAQ accordion components
├── gallery/               # Image gallery components
├── portfolio/             # Portfolio cards, project grids
├── pricing/               # Pricing table components
├── service/               # Service-related UI blocks
├── shop/                  # E-commerce product cards, filters
├── team/                  # Team member cards, profile sections
│
├── ui/                    # General UI elements (buttons, modals, etc.)
│   ├── video/             # Video-related components
│   ├── work/              # Work showcase components
│
├── big-text.tsx           # Large text components
├── error-msg.tsx          # Error message component
├── slick-arrow.tsx        # Custom slider arrow
├── theme-setting.tsx      # Theme toggle/settings
```
Contains reusable UI elements to keep the project modular.

Grouped by feature/page type (e.g., blog/, shop/, pricing/).

Global UI elements are stored under ui/.

### 📁 src/data/ - Static JSON & Configurations
```
src/data/
```
Stores static data configurations, such as pricing details, FAQ items, etc.

### 📁 src/hooks/ - Custom React Hooks
```
src/hooks/
```
Stores reusable React hooks (for fetching data, handling UI state, etc.).

### 📁 src/layouts/ - Page Layouts
```
src/layouts/
├── footers/               # Footer components
├── headers/               # Header components
├── wrapper.tsx            # Page wrapper component
```
Manages the header, footer, and layout structure of the app.

### 📁 src/pages/ - Server-Side Pages (for API or Legacy Routes)
```
src/pages/
├── about/                 # About pages
├── account/               # User account pages
├── blog/                  # Blog post pages
├── contact/               # Contact pages
├── login/                 # Authentication pages
├── portfolio/             # Portfolio showcase
├── register/              # Registration pages
├── shop/                  # E-commerce product pages
```
This folder is likely kept for legacy or API purposes.

Main routing is inside app/, but pages/ might still handle server functions.

### 📁 src/scss/ - SCSS Styling Files
```
src/scss/
├── components/            # Component-specific SCSS files
│   ├── _animation.scss
│   ├── _background.scss
│   ├── _backtotop.scss
│   ├── _breadcrumb.scss
│   ├── _buttons.scss
│   ├── _carousel.scss
│   ├── _hotspot.scss
│   ├── _magicCursor.scss
│   ├── _modal.scss
│   ├── _nice-select.scss
│   ├── _offcanvas.scss
│   ├── _pagination.scss
│   ├── _preloader.scss
│   ├── _rangeSlider.scss
│   ├── _search.scss
│   ├── _section-title.scss
│   ├── _tab.scss
│   ├── _theme-settings.scss
│   ├── index.scss         # Imports all component styles
│
├── layout/                # Layout-related styles
│   ├── blog/              # Blog page SCSS files
│   │   ├── _blog.scss
│   │   ├── _postbox.scss
│   │   ├── _recent-post.scss
│   │   ├── _sidebar.scss
│   │   ├── index.scss     # Imports all blog-related styles
│   ├── footer/            # Footer styling
│   ├── header/            # Header styling
│   ├── menu/              # Navigation menu styles
│   ├── pages/             # General page layout styles
│   ├── index.scss         # Imports all layout styles
│
├── theme/                 # Theme-related styling (global styles)
│   ├── _common.scss       # Common global styles
│   ├── _spacing.scss      # Global spacing definitions
│   ├── _theme.scss        # Core theme styles
│   ├── index.scss         # Imports all theme styles
│
├── utils/                 # SCSS utilities (helpers, mixins, variables)
│   ├── _breakpoints.scss  # Media query breakpoints
│   ├── _colors.scss       # Color palette
│   ├── _extends.scss      # Extendable classes
│   ├── _mixins.scss       # Reusable mixins
│   ├── _root.scss         # CSS variables & root-level styles
│   ├── _typography.scss   # Global typography settings
│   ├── _variables.scss    # SCSS variables
│   ├── index.scss         # Imports all utility files
│
├── globals.scss           # Global styles applied throughout the app
├── main.scss              # Main entry point for SCSS compilation
```

### How SCSS is Used and Implemented in the Project

#### 1️⃣ Global Styling (globals.scss & main.scss)

globals.scss: Defines base styles that apply throughout the app.

main.scss: The main SCSS file that imports all necessary styles from scss/.

Imported in the root layout file (src/app/layout.tsx):
```
import "@/scss/globals.scss";
```
#### 2️⃣ Component-Based SCSS (components/)

Each UI component has its own SCSS file for styling. This ensures that styles are modular and easier to maintain.

Example: _buttons.scss
```
.button {
  padding: 10px 20px;
  background-color: var(--primary-color);
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--primary-dark);
  }
}
```
Implementation in a React Component (Button.tsx):
```
import "@/scss/components/_buttons.scss";

export default function Button({ label }) {
  return <button className="button">{label}</button>;
}
```
#### 3️⃣ Layout Styling (layout/)

SCSS files under layout/ handle styling for headers, footers, menus, and general page layouts.

Blog styles are grouped under layout/blog/.

index.scss files are used to import all SCSS files within their directory.

#### 4️⃣ Theme System (theme/)

Stores theme-related styles such as colors, typography, and spacing.

_theme.scss: Core theme configurations.

_spacing.scss: Manages global spacing units.

_common.scss: Contains site-wide common styles.

#### 5️⃣ Utility SCSS (utils/)

Contains helper styles, mixins, variables, and reusable utility functions.

_variables.scss: Defines global SCSS variables.

_mixins.scss: Contains reusable mixins (e.g., @mixin flexbox, @mixin button-style).

_colors.scss: Centralized color definitions.

_breakpoints.scss: Media query breakpoints for responsive design.

Example: Using a Mixin from _mixins.scss
```
@mixin flexbox {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  @include flexbox;
}
```
#### 6️⃣ Theming with CSS Variables (utils/_root.scss)

Defines CSS variables that can be overridden dynamically (e.g., for dark mode support).
```
:root {
  --primary-color: #007bff;
  --primary-dark: #0056b3;
}
```
This allows for easier theme switching without modifying SCSS files directly.

### 📌 How SCSS is Compiled in Next.js

#### 1️⃣ SCSS Compilation in next.config.js

Next.js supports SCSS natively, so there's no need for additional configuration. SCSS files are automatically processed.

#### 2️⃣ Importing SCSS in Components

To use SCSS in a component, simply import it:
```
import "@/scss/components/_buttons.scss";
```
or import a folder’s index.scss for all styles inside:
```
import "@/scss/layout/index.scss";
```

### 📁 src/plugins/ - External Libraries & Plugins
```
src/plugins/
```
Stores third-party libraries, if needed.

### 📁 src/utils/ - Utility Functions & GSAP Animations
```
src/utils/
├── award-anim.ts          # Award animations (GSAP)
├── brand-anim.ts          # Brand logo animations
├── cta-anim.ts            # Call-to-action animations
├── footer-anim.ts         # Footer entrance animations
├── hover-btn.ts           # Button hover effects
├── image-reveal-anim.ts   # Image reveal effect
├── parallax-slider.ts     # Parallax slider effect
├── scroll-marque.ts       # Scroll-based animations
├── video-anim.ts          # Video animations
```
This folder contains all GSAP animations for various elements.

Each file corresponds to a specific animation effect.#   g a l a g a _ w e b _ 2 . 0 - f r o n t e n d  
 