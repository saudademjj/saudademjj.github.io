<div align="center">
  <a href="./README_en.md">English</a> | 简体中文
</div>

# saudademjj.github.io (个人技术主页与叙事交互作品集)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock)
![Vercel](https://img.shields.io/badge/Vercel-Hosted-000000?style=flat-square&logo=vercel)

本项目是 saudademjj 的个人数字门户，定位为一个深度展示全栈工程实践、系统设计理念与交互美学的综合性作品集空间。项目基于原生 Web 技术栈构建，通过工业级动效引擎 GSAP 的编排，在确保极致加载性能的同时，实现了高度沉浸式的叙事交互。

## 核心交互设计

### 1. 现代化模块化布局 (Bento Grid)
- **信息层级优化**: 借鉴现代 Bento 设计语言，通过非对称网格系统实现技术栈矩阵 (Technical Arsenal) 与 核心作品 (Selected Works) 的高效传达。
- **响应式断点控制**: 精细配置 CSS Grid 容器属性，确保在从 Ultra-wide 宽屏到移动端的全设备链上均能保持视觉张力。

### 2. 滚动驱动动效引擎
- **像素级调度**: 深度应用 GSAP 与 ScrollTrigger 插件，将页面的滚动位置作为动画的时间轴变量，实现元素入场、位移与视差的深度关联。
- **自定义光标交互**: 在浏览器端实现了具备物理惯性的平滑光标跟随效果，增强了用户在探索过程中的触觉化反馈。

### 3. 京城十日志 (Interactive Storytelling)
- **专项实验模块**: 位于 `beijing.html` 的叙事实验，探索技术如何赋能长轴内容的深度表达。
- **多图层视差渲染**: 通过横向滚动触发的多层图片混合与文本动态上场，将传统的旅行游记转化为电影质感的视觉盛宴。

## 技术栈与选型参考

- **核心架构**: 原生 HTML5 / CSS3 / ES6+ JavaScript。坚持零框架依赖策略，以换取最高的渲染优先级与最小的运行开销。
- **动画驱动**: GSAP 3.12+ (包含 ScrollTrigger, ScrollToPlugin, TextPlugin)。
- **排版方案**: 深度结合 Google Fonts 的 Plus Jakarta Sans (英) 与 Noto Sans SC (中)。
- **托管平台**: Vercel。利用边缘分发网络加速静态资产的全球加载。

## 项目工程结构

```text
.
├── index.html              # 核心主页入口 (Bento 架构实现)
├── beijing.html            # 叙事交互专题实验模块
├── styles.css              # 全局排版、色彩变量与布局规范定义
├── portfolio.css           # 作品集专属业务组件样式库
├── script.js               # 基于 GSAP 驱动的交互动效核心逻辑
├── assets/                 # 经过 WebP 与 SVG 优化的视觉资源
└── CNAME                   # 自定义域名配置文件
```

## 开发者本地预览

由于项目基于原生架构设计，无须复杂的构建流程，仅需静态 HTTP 服务器即可启动：

```bash
# 推荐方式
npx serve .
```

## 许可证
本项目遵循 MIT License 协议。
