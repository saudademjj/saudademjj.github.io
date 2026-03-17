<div align="center">
  <p>Immersive Static Showcase Page / 沉浸式静态展示页</p>
  <p>
    <a href="#english">English</a> •
    <a href="#简体中文">简体中文</a>
  </p>
</div>

---

<h2 id="english">🇬🇧 English</h2>

# saudademjj.github.io

This repository hosts the source code for my GitHub Pages site. The current iteration features an immersive, visually-driven static web page themed around a **"10-Day Beijing Journal"**. It is designed with a strong emphasis on visual storytelling and fluid scrolling interactions.

### ✨ Highlights & Features

- **Zero Dependencies**: A pure frontend static page with no backend required.
- **Cinematic Experience**: Features full-screen loading transitions and elegant text reveals.
- **Interactive Scrolling**: Equipped with a reading progress bar and scroll-triggered block fade-ins.
- **Card-based Layout**: Organizes the 10-day itinerary into a clean, responsive card grid.
- **Dynamic Elements**: Includes animated data counters and custom mouse hover feedback for a polished feel.

### 🛠 Technology Stack

- **HTML5** (Semantic structuring)
- **CSS3** (Custom properties and responsive flex/grid layouts)
- **Vanilla JavaScript** (DOM manipulation and event handling)
- **GSAP** (GreenSock Animation Platform via CDN for high-performance animations)

### 🚀 Local Preview

You can easily preview the site locally using Python's built-in HTTP server:

```bash
git clone https://github.com/saudademjj/saudademjj.github.io.git
cd saudademjj.github.io
python3 -m http.server 8080
```
Then, visit `http://localhost:8080` in your browser.

### 📂 File Structure

```text
saudademjj.github.io/
├── index.html       # The main markup and content structure
├── styles.css       # Global styles, variables, and responsive media queries
├── script.js        # Logic for GSAP animations, counters, and scroll events
└── README.md        # This documentation file
```

### ⚙️ Customization Guide

This project is highly suitable as a template for a personal homepage, portfolio, or themed event page. You can easily customize it:
- **Content**: Edit `index.html` to change the copy and layout.
- **Theme Colors**: Modify the `:root` variables in `styles.css`.
- **Animations**: Tweak the GSAP timing and easing configurations within `script.js`.

---

<h2 id="简体中文">🇨🇳 简体中文</h2>

# saudademjj.github.io

本仓库为 GitHub Pages 站点的源码库。当前版本展示了一个以「京城十日志」为主题的沉浸式静态网页，设计上极力强调视觉叙事与流畅的滚动交互体验。

### ✨ 功能亮点

- **纯静态无依赖**：纯前端页面，无需配置任何后端服务。
- **电影级观感**：包含首屏加载过渡与优雅的文本动效。
- **互动式滚动**：内置页面滚动进度条以及随着滚动渐入的内容区块。
- **卡片式排版**：通过响应式卡片流清晰地编排 10 天的行程。
- **动态微交互**：实现了数据计数器动效以及自定义的鼠标悬浮视觉反馈。

### 🛠 技术栈

- **HTML5**（语义化结构）
- **CSS3**（原生变量与响应式 Flex/Grid 布局）
- **原生 JavaScript**（DOM 操作与事件监听）
- **GSAP**（通过 CDN 引入的工业级动画库，保障丝滑体验）

### 🚀 本地预览

无需复杂的构建工具，使用 Python 自带的 HTTP 服务器即可快速预览：

```bash
git clone https://github.com/saudademjj/saudademjj.github.io.git
cd saudademjj.github.io
python3 -m http.server 8080
```
随后在浏览器中访问：`http://localhost:8080`。

### 📂 文件结构

```text
saudademjj.github.io/
├── index.html       # 核心结构与文本内容
├── styles.css       # 全局样式、主题变量与响应式规则
├── script.js        # GSAP 动画触发器、计数器及滚动逻辑
└── README.md        # 项目说明文档
```

### ⚙️ 定制与复用

该页面非常适合作为个人主页、作品集或专题活动页的模板。你可以通过以下方式快速定制：
- **文案与结构**：直接修改 `index.html`。
- **主题配色**：调整 `styles.css` 顶部的 `:root` 变量。
- **动画参数**：在 `script.js` 中微调 GSAP 的时间轴与缓动函数。