<div align="center">

# 🎨 Papa Yar Theme Gallery

**گالری تعاملی ۴۲ تم کامل برای اکستنشن پاپا یار — هر تم با استایل‌شیت، سیستم افکت اختصاصی و ست کامل آیکون**
*An interactive gallery of 42 complete themes for the Papa Yar Chrome extension — each with its own stylesheet, dedicated effects file, and full icon set.*

[![Themes](https://img.shields.io/badge/Themes-42-E3B34E?style=for-the-badge)](./THEMES.md)
[![Extension](https://img.shields.io/badge/For-Papa_Yar_Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://github.com/papagit-ss/papayar-extension)
[![License](https://img.shields.io/badge/License-MIT-E3B34E?style=for-the-badge)](./LICENSE)

</div>

---

## 🖼️ What is this? | این چیه؟

The visual design system of **Papa Yar**, as a standalone, browsable gallery. The HTML structure is identical in every theme — only the CSS and the effects system change — so any theme can be lifted into the extension (or another project) as-is.

- **42 themes** — from *Emerald Neon* and *Editorial Zine* to *Win XP*, *VHS Tape*, *Nokia LCD*, *Liquid Glass*, *Samurai Cyberdeck HUD* and *Shinjuku Arcade Neon*
- **Per-theme effects** — each theme has a dedicated `*.fx.css` with 3–4 effects (ambient / hover / click / transition), driven by a shared three-state engine: `data-fx="full | calm | off"` (auto-off with `prefers-reduced-motion`)
- **Complete assets** — for every theme: stylesheet, effects file, logo, and 16/32/48/128 icons
- **Live preview** — open `index.html`, pick a theme, and see it applied to the real popup layout; shareable links look like `preview.html?theme=<id>&fx=<mode>`

<div dir="rtl" align="right">

سیستم طراحی بصری **پاپا یار** به‌صورت یک گالری مستقل و قابل مرور. ساختار HTML در همه تم‌ها یکی است و فقط CSS و افکت‌ها عوض می‌شوند؛ پس هر تم را می‌شود همان‌طور که هست به اکستنشن یا پروژه دیگری منتقل کرد. فهرست کامل و مشخصات هر تم در [`THEMES.md`](./THEMES.md) است.

</div>

---

## 🚀 Usage | استفاده

```bash
# Just open the gallery — no build step, no server needed
open index.html        # or double-click it
```

**Transfer a theme to another project:** themes are known by their fixed numbers (the order in `theme-registry.js`). Open the theme in the gallery, use its **“Copy transfer prompt”** button, and paste it into the target project — or ask for it by number, e.g. *“Move theme #07 from Papa Yar Theme Gallery into my project.”*

**Regenerate the catalog** after editing `extension-assets/theme-registry.js`:

```bash
python build.py        # rebuilds catalog.js / catalog.json / THEMES.md
```

---

## 📁 Structure

```
papayar-theme-gallery/
├── index.html             # Gallery home — theme grid & picker
├── preview.html           # Live preview of one theme on the real popup layout
├── catalog.js / catalog.json   # Generated theme catalog (edit registry, not these)
├── THEMES.md              # Full per-theme documentation table (generated)
├── build.py               # Catalog generator (registry → catalog + THEMES.md)
└── extension-assets/      # Snapshot of the extension's theme system
    ├── popup.css          # Base layout + 3 built-in themes (neon, neo-brutal, editorial)
    ├── ui.css             # Shared components & Vazirmatn font wiring
    ├── theme-registry.js  # Source of truth: 42 themes, metadata & effects
    ├── theme-init.js      # Applies saved theme before first paint
    ├── theme-fx.js / theme-fx.css   # Shared effects engine (full | calm | off)
    ├── themes/            # 39 stylesheets + 42 *.fx.css effect files + textures
    ├── icons/generated/   # Per-theme logo + 16/32/48/128 icons (42 sets)
    └── fonts/             # Vazirmatn (variable) + LCD segment font (OFL)
```

> The themes in this gallery are the upstream source for the theme system shipped in the
> [Papa Yar extension](https://github.com/papagit-ss/papayar-extension) (28 of the 42 ship in the extension).

---

## 📄 License

[MIT](./LICENSE) © PARASIS · Fonts under the SIL Open Font License (`extension-assets/fonts/OFL.txt`).
