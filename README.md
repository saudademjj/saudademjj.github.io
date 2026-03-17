# saudademjj.github.io (个人数字作品集与叙事交互实验)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white)](https://greensock.com/gsap/)

这是 saudademjj 的个人数字主页，定位为一个深度展示个人工程实践、系统设计理念与交互美学的综合性作品集空间。项目采用现代化的 Web 技术，在追求系统鲁棒性的同时，通过高级动画编排实现沉浸式的视觉呈现。

## 核心特性

- 模块化布局设计: 采用现代 Bento Grid 设计语言，通过信息层级优化实现技术栈矩阵与项目历程的高效传达。
- 深度交互动效: 
    - 滚动驱动动画: 基于 GSAP 与 ScrollTrigger 插件实现精准的场景流转与入场动画。
    - 视差交互逻辑: 结合视差偏移量计算与透明度差值，打造深度感强烈的视觉空间。
    - 自定义光标交互: 实现平滑的惯性跟随效果，提升用户的交互沉浸度。
- 全终端响应式标准: 基于流体布局与动态断点配置，确保在桌面端、平板及移动端均能保持一致的视觉张力。
- 专题性交互叙事: 特设 beijing.html (京城十日志) 模块，利用长轴滚动动画与多图层视差展示深度游记体验。

## 技术栈

- 核心架构: 原生 HTML5 / CSS3 / ES6+ JavaScript
- 动画驱动: GSAP (GreenSock Animation Platform)
- 动效扩展: ScrollTrigger, ScrollToPlugin, TextPlugin
- 字体渲染方案: Plus Jakarta Sans / Noto Sans SC (Google Fonts CDN)
- 部署标准: Vercel / GitHub Pages

## 项目结构

```text
.
├── index.html          # 主作品集入口 (Bento 风格呈现)
├── beijing.html        # 沉浸式叙事专题页面 (高级交互实验)
├── styles.css          # 基础样式架构定义
├── portfolio.css       # 作品集专属业务样式
├── script.js           # 动画核心逻辑与交互引擎
└── CNAME               # 自定义域名配置
```

## 本地预览

本项目由原生 Web 技术构建，可直接在主流浏览器中运行：

```bash
# 若已安装 serve
npx serve .
```

## 未来路线
- 引入支持系统偏好的动态主题引擎 (Dark Mode Support)。
- 增加多语言国际化方案 (i18n)，覆盖英文版本。
- 引入基于 WebGL 的低开销粒子背景，进一步增强视觉深度。

## 许可证
本项目采用 MIT License 协议。

---
Developed by [saudademjj](https://github.com/saudademjj)
