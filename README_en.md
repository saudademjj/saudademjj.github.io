<div align="center">
  English | <a href="./README.md">简体中文</a>
</div>

# saudademjj.github.io (Personal Technical Portal & Narrative Storytelling Portfolio)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock)
![Vercel](https://img.shields.io/badge/Vercel-Hosted-000000?style=flat-square&logo=vercel)

This project is the personal digital gateway of saudademjj, serving as a comprehensive portfolio space to demonstrate full-stack engineering practices, system design philosophies, and interactive aesthetics. Built on a native Web technology stack and orchestrated via the industry-standard GSAP animation engine, the project achieves highly immersive narrative interactions while ensuring peak loading performance.

## Core Interaction Design

### 1. Modern Modular Layout (Bento Grid)
- **Information Hierarchy Optimization**: Drawing from modern Bento design languages, it utilizes an asymmetric grid system to efficiently communicate the Technical Arsenal and Selected Works.
- **Responsive Breakpoint Control**: Fine-tuned CSS Grid container properties ensure visual impact remains consistent across the entire device spectrum, from ultra-wide monitors to mobile screens.

### 2. Scroll-Driven Animation Engine
- **Pixel-Level Scheduling**: Deeply employs GSAP and the ScrollTrigger plugin to use the page scroll position as a timeline variable, enabling deep synchronization of element entry, displacement, and parallax.
- **Custom Cursor Interaction**: Implements a smooth cursor-following effect with physical inertia in the browser, enhancing tactile feedback during exploration.

### 3. Interactive Storytelling (Ten Days in Beijing)
- **Specialized Experimental Module**: A narrative experiment located at `beijing.html`, exploring how technology can empower the expression of long-axis content.
- **Multi-Layer Parallax Rendering**: Features multi-layer image blending and dynamic text appearance triggered by horizontal scrolling, transforming a traditional travelogue into a cinematic visual feast.

## Technical Stack & Selections

- **Core Architecture**: Native HTML5 / CSS3 / ES6+ JavaScript. Adheres to a zero-framework dependency strategy to prioritize maximum rendering priority and minimal runtime overhead.
- **Animation Driver**: GSAP 3.12+ (including ScrollTrigger, ScrollToPlugin, and TextPlugin).
- **Typography**: Integration of Google Fonts' Plus Jakarta Sans (Latin) and Noto Sans SC (Chinese).
- **Hosting Platform**: Vercel. Utilizes edge distribution networks to accelerate the global loading of static assets.

## Project Structure

```text
.
├── index.html              # Core homepage entry (Bento implementation)
├── beijing.html            # Narrative interaction experimental module
├── styles.css              # Global typography, color variables, and layout specs
├── portfolio.css           # Portfolio-specific business component styles
├── script.js               # GSAP-driven interaction core logic
├── assets/                 # WebP and SVG optimized visual resources
└── CNAME                   # Custom domain configuration file
```

## Local Development

Since the project is based on a native architecture, no complex build process is required. A static HTTP server is sufficient to launch:

```bash
# Recommended method
npx serve .
```

## License
This project is licensed under the MIT License.
