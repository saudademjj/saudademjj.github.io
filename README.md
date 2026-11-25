<div align="center">
  <a href="./README_en.md">English</a> | 简体中文
</div>

# saudademjj.github.io

[saudade.me](https://saudade.me/) 的源码仓库——独立开源产品与工程项目索引站点。

## 特性

- **零构建依赖**：纯静态 HTML + CSS + 原生 JavaScript，推送到 `main` 分支即通过 GitHub Pages 自动部署。
- **实色视觉体系**：与 [luopan 文档站](https://saudade.me/luopan/) 保持一致的配色与字体（`Plus Jakarta Sans` / `Noto Sans SC` / `JetBrains Mono`），内置深浅色主题切换并尊重系统偏好。
- **中英文双语切换**：前端轻量切换，状态保存在本地 `localStorage`，无任何第三方埋点或统计脚本。
- **产品导向目录**：聚合主打开源产品（`Islet`、`luopan`、`drizzle-migration-guard`、`AERO COURT`）、全栈项目与上游开源 PR 贡献。

## 文件结构

```text
saudademjj.github.io/
├── index.html   # 主页结构（中英双语文案）
├── styles.css   # 实色双主题样式与响应式布局
├── app.js       # 主题切换、语言切换与导航高亮
├── CNAME        # 自定义域名（saudade.me）
├── LICENSE      # MIT 许可证
└── README.md    # 中文说明文档
```

## 本地预览

```bash
python3 -m http.server 8080
```

浏览器打开 `http://localhost:8080` 即可预览。

## 许可证

MIT License
