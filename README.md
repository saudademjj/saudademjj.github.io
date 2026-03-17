<div align="center">
  <a href="./README.md">简体中文</a> | <a href="./README_en.md">English</a>
</div>

# saudademjj.github.io (个人技术门户与交互叙事作品集 / Personal Digital Portal & Interactive Storytelling)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock)
![Vercel](https://img.shields.io/badge/Vercel-Hosted-000000?style=flat-square&logo=vercel)

本项目是 saudademjj 的个人数字门户，定位为一个深度展示个人全栈开发工程实践、系统设计理念与交互美学的综合性作品集空间。通过原生 Web 技术的极致调优与高级动画引擎的编排，项目在确保零编译载荷性能的同时，实现了高度沉浸式的叙事交互。

This project is the personal digital portal of saudademjj, serving as a comprehensive portfolio space to showcase full-stack engineering practices, system design philosophies, and interactive aesthetics. Through meticulous optimization of native Web technologies and sophisticated animation orchestration, the project achieves immersive storytelling with zero-compilation performance.

## 核心交互设计 / Core Interaction Design

### 1. 现代模块化布局 (Bento Grid Layout)
- **信息层级优化**: 借鉴现代 Bento 设计语言，通过非对称网格实现技术栈 (Technical Arsenal) 与 核心作品 (Selected Works) 的高效传达。 / Efficient information hierarchy via asymmetric grids.
- **响应式断点**: 精细配置 CSS Grid 容器，确保在从 Ultra-wide 屏幕到移动端的全设备链上保持视觉张力。 / Fine-tuned CSS Grid for ultra-wide to mobile compatibility.

### 2. 滚动驱动动效引擎 (Scroll-driven Animation Engine)
- **GSAP & ScrollTrigger**: 弃用传统 CSS 过渡，采用像素级的 GSAP 关键帧编排，实现元素入场、位移与视差的深度关联。 / Pixel-level GSAP keyframe orchestration for entry and parallax.
- **平滑视差系统**: 结合实时计算的滚动偏移量 (Scroll Offsets) 与透明度插值，重构页面的空间感。 / Real-time scroll offsets and opacity interpolation for spatial depth.

### 3. 京城十日志 (Interactive Storytelling - Ten Days in Beijing)
- **长轴交互实验**: 位于 `beijing.html` 的专项实验模块，探索“技术赋能内容”的边界。 / An experimental module exploring the boundaries of tech-empowered content.
- **多图层混合渲染**: 通过横向滚动触发的多层图片混合与文本动态上场，将传统的旅行游记转化为电影质感的交互体验。 / cinematic interactive experience via horizontal-scroll triggered layering.

## 技术栈与标准 / Technical Stack & Standards

| 维度 / Category | 技术选型 / Technology | 备注 / Remarks |
| :--- | :--- | :--- |
| **基础架构** | 原生 ES6+ JavaScript | 零第三方框架依赖，最大化渲染效率。 / Zero-framework for max efficiency. |
| **动画驱动** | GSAP 3.12+ / ScrollTrigger | 工业级 Web 动画标准。 / Industry-standard animation engine. |
| **排版方案** | Google Fonts API | Plus Jakarta Sans & Noto Sans SC 全局渲染。 / Global typography standards. |
| **工程化** | Vercel Analytics | 实时流量分析与性能指标监控。 / Real-time traffic and performance monitoring. |

## 项目结构图 / Project Structure

```text
saudademjj.github.io/
├── index.html              # 核心门户主入口 (Bento 架构) / Main digital portal
├── beijing.html            # 叙事交互专题实现 / Interactive storytelling module
├── styles.css              # 全局排版、网格规范与色彩变量 / Global styles & variables
├── portfolio.css           # 作品集专属业务组件样式库 / Portfolio-specific component styles
├── script.js               # 基于 GSAP 驱动的交互动效核心 / GSAP-driven interaction core
├── script_beijing.js       # 专题页专用逻辑与多图层控制器 / Specialized storytelling logic
├── assets/                 # 经过 WebP 压缩的视觉资源目录 / Optimized visual assets
└── CNAME                   # 自定义域名映射配置 / Custom domain mapping
```

## 开发者本地预览 / Local Development

由于项目基于原生架构设计，无须构建流程，仅需静态 HTTP Server 即可启动：

```bash
# 推荐使用 npx serve
npx serve .
# 或使用 VS Code Live Server 扩展
```

## 未来进化方向 / Roadmap
- [ ] **WebGL 粒子系统**: 引入低开销的背景粒子交互，进一步增强视觉深度感。
- [ ] **多语言国际化**: 增加完整的英文/日文版本切换支持。
- [ ] **动态主题引擎**: 基于 Web Crypto 实现的轻量级个性化设置持久化。

## 许可证 / License
本项目遵循 MIT License 协议。 / This project is licensed under the MIT License.
