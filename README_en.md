<div align="center">
  English | <a href="./README.md">简体中文</a>
</div>

# saudademjj.github.io (Personal Digital Portal & Narrative Storytelling Portfolio)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock)
![Vercel](https://img.shields.io/badge/Vercel-Hosted-000000?style=flat-square&logo=vercel)

This project is the personal digital portal of saudademjj, showcasing an integration of full-stack engineering practices, system design philosophies, and interactive aesthetics. Eschewing heavy frontend frameworks, the system utilizes a native Web technology stack coupled with the industrial-grade animation engine GSAP, aiming to explore the ultimate balance between Web performance optimization and immersive narrative interaction.

## 🎨 Core Interaction Design Standards

### 1. Modern Responsive Layout (Bento Grid)
- **Asymmetric Grid System**: Inspired by modern Bento design languages, CSS Grid is used to construct a modular layout with high information density. Spatial weights for the Technical Arsenal and Selected Works are precisely defined via `grid-template-areas`.
- **Omni-device Adaptation Strategy**: Fine-tuned over 5 breakpoints ranging from 4K desktop monitors to small mobile devices, ensuring visual impact remains uncompromised at any scale.

### 2. Scroll-Driven Animation Engine
- **Pixel-Level Scheduling**: Deeply integrates GSAP 3.12 and its **ScrollTrigger** plugin. Page scroll positions are mapped directly to animation timelines, enabling seamless synchronization of element entry, parallax displacement, and dynamic scaling.
- **Performance Optimization**: Employs the `will-change` property and GPU acceleration layer optimization to ensure high-smoothness performance at 60fps even under heavy parallax scrolling.

### 3. Interactive Storytelling (Ten Days in Beijing)
- **Long-Axis Experimental Module**: A specialized narrative module located at `beijing.html`. It reconstructs the visual presentation of travelogues using horizontal scroll-triggered multi-layer parallax flows.
- **Typography Aesthetics**: Deeply optimized for Noto Serif SC (hosted via Google Fonts), creating a cinematic narrative atmosphere through serif-driven weight and white-space interaction.

## 🛠️ Technical Selections & Performance

| Dimension | Technical Solution | Core Advantage |
| :--- | :--- | :--- |
| **Base Engine** | Native ES6+ JavaScript | Zero framework overhead, fastest Time to Interactive (TTI). |
| **Animation Orchestrator** | GSAP / ScrollTrigger | Pixel-level control, supporting complex tweening logic. |
| **Asset Optimization** | WebP / SVG | Minimal static resource payload with lossless high-def display. |
| **Hosting & Delivery** | Vercel Edge | Global edge acceleration, millisecond-level first-paint loading. |

## 📂 Project Structure

```text
.
├── index.html              # Homepage entry (Bento Grid implementation)
├── beijing.html            # Immersive narrative module: Ten Days in Beijing
├── script.js               # Core animation engine and lifecycle management
├── styles.css              # Global typography, grid standards, and CSS variables
├── portfolio.css           # Specialized styles for the portfolio module
├── assets/                 # Visual resource library (including SVG path assets)
└── CNAME                   # Custom domain configuration
```

## 🚀 Local Development

Since the project uses a zero-build architecture, no `npm build` is required. Use any static HTTP server:

```bash
# Recommended method
npx serve .
```

## License
MIT License
