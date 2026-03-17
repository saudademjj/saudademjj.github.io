<div align="center">
  <a href="./README_en.md">English</a> | 简体中文
</div>

# saudademjj.github.io (个人数字门户与交互叙事作品集)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock)
![Vercel](https://img.shields.io/badge/Vercel-Hosted-000000?style=flat-square&logo=vercel)

本项目是 saudademjj 的个人数字门户，承载了全栈工程实践、系统设计理念与交互美学的综合展示。系统拒绝使用重型前端框架，转而采用原生 Web 技术栈配合工业级动画引擎 GSAP，旨在探索 Web 性能优化与沉浸式叙事交互的极致平衡。

## 🎨 核心交互设计规范

### 1. 现代化响应式布局 (Bento Grid)
- **非对称网格系统**: 借鉴现代 Bento 设计语言，利用 CSS Grid 构建具备信息密度的模块化布局。通过 `grid-template-areas` 精确定义技术栈矩阵与核心项目的空间权重。
- **全设备适配策略**: 针对从 4K 桌面显示器到小型移动端设备的 5 级断点调优，确保视觉张力在任何尺寸下都不打折扣。

### 2. 滚动驱动动效引擎 (Scroll-driven Engine)
- **像素级调度**: 深度集成 GSAP 3.12 及其 **ScrollTrigger** 插件。将页面的滚动位置直接映射为动画的时间轴（Timeline）进度，实现了元素入场、视差位移与动态缩放的无缝关联。
- **性能优化实践**: 通过 `will-change` 属性与 GPU 加速层优化，确保在大规模视差滚动下仍能保持 60fps 的极致流畅度。

### 3. 京城十日志 (Interactive Storytelling)
- **长轴实验模块**: 位于 `beijing.html` 的叙事专项。利用横向滚动触发的多图层视差流，重构了旅行游记的视觉呈现维度。
- **排版美学**: 深度适配 Google Fonts 托管的 Noto Serif SC，通过衬线体的厚重感与留白交互营造具备电影质感的叙事氛围。

## 🛠️ 技术选型与性能指标

| 维度 | 技术方案 | 核心优势 |
| :--- | :--- | :--- |
| **基础引擎** | 原生 ES6+ JavaScript | 零框架运行时开销，最快可交互时间 (TTI)。 |
| **动效调度** | GSAP / ScrollTrigger | 像素级控制力，支持复杂的补间动画逻辑。 |
| **资产优化** | WebP / SVG | 极小的静态资源载荷，支持无损高清展示。 |
| **托管分发** | Vercel Edge | 全球边缘加速，毫秒级首屏加载。 |

## 📂 项目结构解析

```text
.
├── index.html              # 门户主入口 (Bento Grid 架构实现)
├── beijing.html            # 沉浸式叙事专题：京城十日志
├── script.js               # 核心动效引擎与交互生命周期管理
├── styles.css              # 全局排版、网格标准与 CSS 变量系统
├── portfolio.css           # 针对作品集模块的专用业务样式
├── assets/                 # 视觉资源库 (包含 SVG 路径动画资产)
└── CNAME                   # 个人域名解析配置
```

## 🚀 开发者预览方式

由于项目采用零构建架构，您无需执行 `npm build`，仅需任何静态服务器即可：

```bash
# 推荐使用 npx serve
npx serve .
```

## 许可证
本项目采用 MIT License 协议。
