# saudademjj.github.io (个人技术主页与交互叙事作品集 / Personal Portfolio & Interactive Visual Storytelling)

本项目是 saudademjj 的个人数字门户，旨在全面展示全栈开发工程实践、系统设计理念以及对交互美学的追求。通过现代化的 Web 布局与高级滚动动画编排，系统在追求高性能响应的同时，提供了深度的视觉沉浸感。

This project is the personal digital portal of saudademjj, designed to showcase full-stack development practices, system design philosophies, and the pursuit of interactive aesthetics. Utilizing modern Web layouts and advanced scroll animation orchestration, the system provides a deep visual immersion while maintaining high-performance responsiveness.

## 核心特性 / Core Features

- 模块化 Bento 布局设计 (Modular Bento Grid Layout):
    - 采用现代化的信息层级优化方案。 / Optimized information hierarchy implementation.
    - 系统化展示技术栈矩阵 (Technical Arsenal) 与 核心作品 (Selected Works)。 / Systematically showcases technical arsenal and core works.

- 深度交互动效编排 (Deep Interaction Animation Orchestration):
    - 利用 GSAP 与 ScrollTrigger 实现精准的滚动映射动效。 / Precise scroll-mapped animations using GSAP and ScrollTrigger.
    - 结合流体视差效果 (Fluid Parallax) 提升空间深度感。 / Fluid parallax effects to enhance spatial depth.
    - 实现平滑惯性的自定义光标交互。 / Implementation of a custom cursor with smooth inertia.

- 专题交互实验 - 京城十日志 (Special Interaction Experiment - Ten Days in Beijing):
    - 位于 `beijing.html` 的独立子项目。 / Independent sub-project located at beijing.html.
    - 探索长轴叙事交互，通过多图层视差与场景流转重构游记体验。 / Explores long-axis storytelling through multi-layer parallax and scene flow.

- 全端响应式标准 (Omni-terminal Responsive Standards):
    - 基于响应式断点与流体布局，确保在各种分辨率下保持视觉张力。 / Responsive breakpoints and fluid layouts ensure visual impact across resolutions.

## 技术栈 / Technical Stack

### 前端架构 / Frontend Architecture
- 核心引擎: HTML5 / CSS3 / ES6+ JavaScript (原生驱动以保证极致性能)。 / Native-driven for performance.
- 动画引擎: GSAP (GreenSock Animation Platform) 3.12+。 / Core for animation orchestration.
- 动效扩展: ScrollTrigger (滚动触发), ScrollToPlugin (平滑滚动), TextPlugin (打字动效)。 / Animation plugins.
- 字体渲染: Plus Jakarta Sans & Noto Sans SC (Google Fonts CDN)。 / Web fonts for typography.

### 部署与性能 / Deployment & Performance
- 部署平台: Vercel & GitHub Pages。 / Reliable hosting solutions.
- 资产优化: 极简的 JS/CSS 载荷策略。 / Minimalistic JS/CSS payload strategy.

## 项目结构 / Project Structure

```text
saudademjj.github.io/
├── index.html              # 核心主页 (Bento 风格入口) / Core homepage (Bento style)
├── beijing.html            # 沉浸式叙事交互专题页面 / Immersive storytelling experiment
├── portfolio.css           # 核心业务组件样式 / Core business component styles
├── styles.css              # 全局布局与样式规范定义 / Global layout and style guidelines
├── script.js               # 基于 GSAP 的核心动效引擎实现 / Core animation engine based on GSAP
├── beijing.html            # 京城十日志独立实现模块 / Independent module for Ten Days in Beijing
├── CNAME                   # 自定义域名配置文件 / Custom domain configuration
└── LICENSE                 # 开源许可证文件 / Open source license
```

## 运行与预览 / Running & Previewing

本项目基于原生 Web 技术构建，无须编译流程，可直接在主流现代浏览器中预览。 / Built with native Web technologies, no compilation required; directly previewable in modern browsers.

### 本地预览 / Local Preview
```bash
# 若已安装任意 HTTP Server 工具
npx serve .
# 或者直接双击 index.html 访问 (不推荐用于部分需路径解析的场景)
```

## 路线图 / Roadmap

- [ ] 实现深色/浅色模式的动态切换逻辑 (Dynamic Dark/Light Mode Switching)
- [ ] 增加多语言国际化方案 (Multi-language i18n Support)
- [ ] 引入低开销的 WebGL 背景粒子动效 (Low-overhead WebGL Particle Backgrounds)

## 许可证 / License
本项目采用 [MIT License](LICENSE) 协议。 / This project is licensed under the MIT License.
