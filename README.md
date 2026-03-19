<div align="center">
  <a href="./README_en.md">English</a> | 简体中文
</div>

# saudademjj.github.io -- 个人数字门户与叙事作品集

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock)

本仓库是个人 GitHub Pages 站点的源码库，同时也是一个技术作品集与数字门户。当前版本集成了个人主页展示与以「京城十日志」为主题的沉浸式叙事页面，在设计上强调视觉叙事、流畅的滚动交互与现代响应式布局。项目完全基于原生 Web 技术栈构建，不依赖任何前端框架。

## 设计理念

### 现代响应式布局（Bento Grid）

- 非对称网格系统：借鉴现代 Bento 设计语言，使用 CSS Grid 构建高信息密度的模块化布局。通过 `grid-template-areas` 精确定义技术栈展示与精选作品的空间权重
- 全设备适配策略：覆盖从 4K 桌面显示器到小屏手机的 5 个以上断点，确保在任何尺度下视觉冲击力不打折

### 沉浸式叙事体验

- 电影级开场：全屏加载过渡画面配合衬线字体标题渐显，营造仪式感
- 滚动驱动叙事：内容区块随滚动渐入视野，阅读进度条实时反馈浏览位置
- 视差层次：多层背景元素以不同速率响应滚动，构建空间纵深感

### 微交互系统

- 自定义光标：双层光标系统（外圈 + 内点），跟随鼠标移动并在交互元素上产生形变反馈
- 数据计数器动效：关键数字在进入视口时触发从零到目标值的动态递增
- 悬浮反馈：卡片与按钮的自定义 hover 效果，提供即时的视觉响应

## 核心交互功能

- 全屏加载过渡与优雅的文本揭示动画
- 页面顶部阅读进度条
- 基于 GSAP ScrollTrigger 的滚动触发区块渐入
- 卡片式响应布局编排 10 天行程
- 动态数据计数器（访问量、行程天数等）
- 导航栏平滑滚动定位（筹谋 / 数据 / 行程）
- 自定义双层动画光标
- Hero 区域背景动画与 CTA 按钮

## 技术栈

- HTML5：语义化标签结构，注重可访问性
- CSS3：原生自定义属性（CSS Variables）、Flexbox 与 Grid 混合布局、响应式媒体查询
- 原生 JavaScript：DOM 操作、事件委托、Intersection Observer
- GSAP（GreenSock Animation Platform）：通过 CDN 引入的工业级动画引擎
  - ScrollTrigger 插件：滚动驱动的动画触发与时间线控制
  - 缓动函数库：丰富的 easing 预设实现自然的运动曲线
- Google Fonts：Noto Sans SC + Noto Serif SC 双字体方案

## 页面结构

站点包含多个页面：

- `index.html`：个人主页与作品集门户
- `beijing.html`：京城十日志沉浸式叙事页面

## 文件结构

```text
saudademjj.github.io/
├── index.html       # 主页：个人门户与作品集展示
├── beijing.html     # 京城十日志叙事页面
├── styles.css       # 全局样式、CSS 变量与响应式规则
├── portfolio.css    # 作品集专属样式
├── script.js        # GSAP 动画、计数器、滚动事件与光标逻辑
├── CNAME            # 自定义域名配置
└── README.md        # 项目说明文档
```

## 本地预览

无需任何构建工具，使用 Python 自带的 HTTP 服务器即可快速预览：

```bash
git clone https://github.com/saudademjj/saudademjj.github.io.git
cd saudademjj.github.io
python3 -m http.server 8080
```

在浏览器中访问 `http://localhost:8080` 即可查看效果。

## 定制与复用

本项目非常适合作为个人主页、作品集或专题活动页的模板：

- 文案与结构：直接修改 HTML 文件中的内容
- 主题配色：调整 `styles.css` 顶部的 `:root` CSS 变量
- 动画参数：在 `script.js` 中微调 GSAP 的时间线配置与缓动函数
- 字体方案：替换 Google Fonts 链接即可切换字体风格
- 布局调整：修改 CSS Grid 的 `grid-template-areas` 重新编排模块位置

## 部署

项目通过 GitHub Pages 自动部署。推送到 `main` 分支后，GitHub 会自动构建并发布到配置的自定义域名。

`CNAME` 文件用于配置自定义域名解析。

## 许可证

MIT License
