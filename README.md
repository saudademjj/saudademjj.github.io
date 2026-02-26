# saudademjj.github.io

这是 GitHub Pages 站点源码仓库，当前内容为「京城十日志」沉浸式静态展示页。

## 项目说明

- 纯前端静态页面，无后端依赖。
- 以北京十日行程为主题，强调视觉叙事与滚动交互。
- 适合作为个人主页、作品集展示页或活动专题页模板。

## 功能亮点

- 首屏加载过渡与文本动画
- 滚动进度条 + 区块渐入
- 卡片式行程编排（10 天）
- 数据计数器动效
- 自定义鼠标与悬浮反馈

## 技术栈

- `HTML5`
- `CSS3`
- `JavaScript`
- `GSAP`（CDN）

## 本地预览

```bash
git clone https://github.com/saudademjj/saudademjj.github.io.git
cd saudademjj.github.io
python3 -m http.server 8080
```

访问：`http://localhost:8080`

## 文件结构

```text
saudademjj.github.io/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 发布到 GitHub Pages（常见方式）

1. 将源码推送到 `main` 分支。
2. 在仓库 `Settings -> Pages` 里选择分支与目录（通常为 `main / root`）。
3. 等待 Actions/Pages 构建完成后访问站点。

## 可定制项

- 页面文案：`index.html`
- 主题色：`styles.css` 的 `:root` 变量
- 动画参数：`script.js` 中 GSAP 配置

## 许可证

当前仓库未显式提供 License 文件，如需对外复用请补充 `LICENSE`。
