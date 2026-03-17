[English](README_en.md) | 简体中文

# saudademjj.github.io


这是我的 GitHub Pages 站点源码仓库，当前主页定位是个人作品集与开发者介绍页，包含首页、技能、项目和关于我等板块。仓库内同时保留了静态展示页相关资源，适合继续扩展为个人主页、作品集或专题落地页。

## 当前内容

- 个人主页首屏与简介模块
- 技能展示区
- 项目作品展示区
- About 区块与外部链接
- `beijing.html` 等静态展示页资源

## 技术栈

- `HTML5`
- `CSS3`
- `Vanilla JavaScript`
- GitHub Pages 静态托管

## 本地预览

```bash
git clone https://github.com/saudademjj/saudademjj.github.io.git
cd saudademjj.github.io
python3 -m http.server 8080
```

打开 `http://localhost:8080`

## 仓库结构

```text
saudademjj.github.io/
├── index.html
├── beijing.html
├── portfolio.css
├── styles.css
├── script.js
├── CNAME
├── README.md
└── README.en.md
```

## 适合扩展的方向

- 继续完善个人作品集和项目案例页
- 统一视觉系统与导航结构
- 增加项目截图、简历下载与联系方式
- 拆分成多个专题页并通过 GitHub Pages 托管

## 发布到 GitHub Pages

1. 将源码推送到 `main` 分支
2. 在仓库 `Settings -> Pages` 中选择 `main / root`
3. 等待 GitHub Pages 构建完成后访问站点

## 定制入口

- 页面内容：`index.html`
- 作品集样式：`portfolio.css`
- 通用动画与交互：`script.js`
- 域名绑定：`CNAME`

## 许可证

本仓库采用 MIT License，详见 [LICENSE](./LICENSE)。
