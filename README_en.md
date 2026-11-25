<div align="center">
  English | <a href="./README.md">简体中文</a>
</div>

# saudademjj.github.io

Source repository for [saudade.me](https://saudade.me/) — an index of independent open-source products and engineering projects by `saudademjj`.

## Highlights

- **Zero build step**: Static HTML, CSS, and vanilla JavaScript deployed directly via GitHub Pages on push to `main`.
- **Solid-color design system**: Aligned with [saudade.me/luopan/](https://saudade.me/luopan/) typography and color tokens, supporting manual and system-level Dark / Light themes.
- **Chinese & English toggle**: Instant client-side language switch persisted in `localStorage`, with zero third-party analytics or trackers.
- **Product-first index**: Highlights flagship open-source products (`Islet`, `luopan`, `drizzle-migration-guard`, `AERO COURT`), full-stack projects, and merged upstream PRs.

## Structure

```text
saudademjj.github.io/
├── index.html    # Bilingual page markup
├── styles.css    # Dual-theme solid-color stylesheet
├── app.js        # Theme toggle, language toggle, active section tracking
├── CNAME         # Custom domain (saudade.me)
├── LICENSE       # MIT License
└── README_en.md  # English documentation
```

## Local Preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` in your browser.

## License

MIT License
