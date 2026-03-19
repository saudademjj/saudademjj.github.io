<div align="center">
  English | <a href="./README.md">简体中文</a>
</div>

# saudademjj.github.io -- Personal Digital Portal & Narrative Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock)

This repository hosts the source code for a personal GitHub Pages site that doubles as a technical portfolio and digital portal. The current version integrates a personal homepage showcase with an immersive narrative page themed around a "10-Day Beijing Journal." The design emphasizes visual storytelling, fluid scrolling interactions, and modern responsive layouts. Built entirely with native web technologies, no frontend frameworks required.

## Design Philosophy

### Modern Responsive Layout (Bento Grid)

- Asymmetric Grid System: Inspired by modern Bento design languages, CSS Grid constructs a modular layout with high information density. Spatial weights for the Technical Arsenal and Selected Works are precisely defined via `grid-template-areas`
- Omni-device Adaptation Strategy: Fine-tuned over 5+ breakpoints ranging from 4K desktop monitors to small mobile devices, ensuring visual impact remains uncompromised at any scale

### Immersive Narrative Experience

- Cinematic Opening: Full-screen loading transition with serif title reveal creates a sense of ceremony
- Scroll-driven Storytelling: Content blocks fade into view as the user scrolls, with a reading progress bar providing real-time position feedback
- Parallax Depth: Multiple background layers respond to scrolling at different rates, building spatial depth

### Micro-interaction System

- Custom Cursor: Dual-layer cursor system (outer ring + inner dot) that follows mouse movement and morphs on interactive elements
- Data Counter Animations: Key numbers trigger dynamic zero-to-target increments when entering the viewport
- Hover Feedback: Custom hover effects on cards and buttons providing immediate visual response

## Core Interaction Features

- Full-screen loading transitions with elegant text reveal animations
- Reading progress bar at the top of the page
- GSAP ScrollTrigger-based scroll-triggered block fade-ins
- Card-based responsive layout organizing a 10-day itinerary
- Dynamic data counters (visit counts, trip days, etc.)
- Smooth-scroll navigation anchoring (Planning / Stats / Itinerary)
- Custom dual-layer animated cursor
- Hero section background animation with CTA button

## Technology Stack

- HTML5: Semantic markup structure with accessibility considerations
- CSS3: Native custom properties (CSS Variables), Flexbox and Grid hybrid layouts, responsive media queries
- Vanilla JavaScript: DOM manipulation, event delegation, Intersection Observer
- GSAP (GreenSock Animation Platform): Industrial-grade animation engine loaded via CDN
  - ScrollTrigger Plugin: Scroll-driven animation triggering and timeline control
  - Easing Library: Rich easing presets for natural motion curves
- Google Fonts: Noto Sans SC + Noto Serif SC dual-font scheme

## Page Structure

The site contains multiple pages:

- `index.html`: Personal homepage and portfolio portal
- `beijing.html`: 10-Day Beijing Journal immersive narrative page

## File Structure

```text
saudademjj.github.io/
├── index.html       # Homepage: personal portal and portfolio showcase
├── beijing.html     # Beijing Journal narrative page
├── styles.css       # Global styles, CSS variables, and responsive rules
├── portfolio.css    # Portfolio-specific styles
├── script.js        # GSAP animations, counters, scroll events, and cursor logic
├── CNAME            # Custom domain configuration
└── README.md        # Project documentation
```

## Local Preview

No build tools required. Use Python's built-in HTTP server for a quick preview:

```bash
git clone https://github.com/saudademjj/saudademjj.github.io.git
cd saudademjj.github.io
python3 -m http.server 8080
```

Visit `http://localhost:8080` in your browser to see the result.

## Customization & Reuse

This project is well-suited as a template for personal homepages, portfolios, or themed event pages:

- Content & Structure: Edit the HTML files directly
- Theme Colors: Adjust the `:root` CSS variables at the top of `styles.css`
- Animation Parameters: Tweak GSAP timeline configurations and easing functions in `script.js`
- Font Scheme: Swap the Google Fonts links to change the typographic style
- Layout Adjustments: Modify CSS Grid's `grid-template-areas` to rearrange module positions

## Deployment

The project is automatically deployed via GitHub Pages. After pushing to the `main` branch, GitHub automatically builds and publishes to the configured custom domain.

The `CNAME` file is used for custom domain DNS configuration.

## License

MIT License
