# saudademjj.github.io (个人技术主页与交互实验)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white)](https://greensock.com/gsap/)

本仓库为个人技术主页的源代码，用于展示个人项目、技术栈以及交互设计实践。主页采用现代化的 Web 布局，并尝试应用了一些高级滚动动画技术，以提供更好的视觉引导。

## 核心内容

- 模块化布局: 基于现代 Web 布局技术 (Grid/Flex) 的个人信息展示。
- 交互动画实践: 
    - 滚动触发效果: 基于 GSAP 与 ScrollTrigger 插件实现元素入场动效。
    - 视差效果实验: 尝试在不同层级间应用偏移量偏移，增加页面的空间感。
    - 自定义光标: 在浏览器端实现的平滑光标交互逻辑。
- 专题展示: `beijing.html` (京城十日志) 是一项针对长轴交互设计的独立实验。

## 技术选型

- 基础架构: 原生 HTML5 / CSS3 / ES6+ JavaScript
- 动画驱动: GSAP (GreenSock Animation Platform)
- 字体服务: Google Fonts (Plus Jakarta Sans, Noto Sans SC)
- 托管平台: Vercel / GitHub Pages

## 项目结构

```text
.
├── index.html          # 主作品集入口
├── beijing.html        # 交互叙事专题实验
├── styles.css          # 核心样式架构
├── portfolio.css       # 业务样式定义
├── script.js           # 动画与交互引擎逻辑
└── CNAME               # 域名配置
```

## 本地预览

由于项目基于原生 Web 技术构建，可直接在主流浏览器中运行：

```bash
# 或使用 serve 启动
npx serve .
```

## 许可证
MIT License
