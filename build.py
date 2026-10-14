import json, re, os

R = os.path.dirname(os.path.abspath(__file__))
os.chdir(R)

reg = open('extension-assets/theme-registry.js', encoding='utf8').read()

# Parse theme entries and their effects from theme-registry.js
entry_pattern = re.compile(
    r"\{\s*id:\s*'([^']+)',\s*nameFa:\s*'([^']+)',\s*nameEn:\s*'([^']+)',\s*swatches:\s*\[([^\]]+)\](?:,\s*effects:\s*\[(.*?)\])?\s*\}",
    re.DOTALL
)
fx_item_pattern = re.compile(
    r"\{\s*id:\s*'([^']+)',\s*nameFa:\s*'([^']+)',\s*trigger:\s*'([^']+)'\s*\}"
)

cat = json.load(open('catalog.json', encoding='utf8'))
pop = open('extension-assets/popup.css', encoding='utf8').read().split('\n')

out = []
css_links = ['<link rel="stylesheet" href="extension-assets/popup.css">']
fx_links = []

for i, m in enumerate(entry_pattern.finditer(reg), 1):
    id_, fa, en, sw_raw, fx_raw = m.groups()
    sw = re.findall(r"#[0-9A-Fa-f]{6}", sw_raw)
    effects = [
        {"id": fm.group(1), "nameFa": fm.group(2), "trigger": fm.group(3)}
        for fm in fx_item_pattern.finditer(fx_raw or "")
    ]
    inpop = id_ in ('neon', 'neo-brutal', 'editorial')
    css = 'popup.css' if inpop else f'themes/{id_}.css'
    fx_css = f'themes/{id_}.fx.css'
    p = 'extension-assets/' + css
    fx_p = 'extension-assets/' + fx_css
    txt = open(p, encoding='utf8').read()
    tex = sorted(set(re.findall(r'textures/([a-z-]+\.png)', txt))) if not inpop else []
    if id_ == 'nokia-lcd':
        tex = ['LCD7Segment.woff2']
    c = cat[id_]
    lines = []
    if inpop:
        key = ':root' if id_ == 'neon' else f'[data-theme="{id_}"]'
        lines = [n + 1 for n, l in enumerate(pop) if l.startswith(key)][:1]
    kb = round(os.path.getsize(p) / 1024, 1)
    fx_kb = round(os.path.getsize(fx_p) / 1024, 1) if os.path.isfile(fx_p) else 0.0

    if not inpop:
        css_links.append(f'  <link rel="stylesheet" href="extension-assets/{css}">')
    if os.path.isfile(fx_p):
        fx_links.append(f'  <link rel="stylesheet" href="extension-assets/{fx_css}">')

    out.append(dict(
        n=i,
        id=id_,
        fa=fa,
        en=en,
        swatches=sw,
        cssFile=css,
        fxFile=fx_css,
        kb=kb,
        fxKb=fx_kb,
        textures=tex,
        inPopup=inpop,
        tokenLine=lines[0] if lines else None,
        title=c[0],
        desc=c[1:],
        effects=effects
    ))

# Automatically update <link rel="stylesheet"> block in preview.html
prev_path = 'preview.html'
if os.path.isfile(prev_path):
    prev_html = open(prev_path, encoding='utf8').read()
    all_links = (
        ['<!-- THEME_CSS_LINKS_START -->']
        + css_links
        + fx_links
        + ['<link rel="stylesheet" href="extension-assets/ui.css">', '<!-- THEME_CSS_LINKS_END -->']
    )
    new_links_block = '\n'.join(all_links)
    if '<!-- THEME_CSS_LINKS_START -->' in prev_html:
        prev_html = re.sub(
            r'<!-- THEME_CSS_LINKS_START -->.*?<!-- THEME_CSS_LINKS_END -->',
            new_links_block,
            prev_html,
            flags=re.DOTALL
        )
    else:
        prev_html = re.sub(
            r'<link rel="stylesheet" href="extension-assets/popup\.css">.*?<link rel="stylesheet" href="extension-assets/ui\.css">',
            new_links_block,
            prev_html,
            flags=re.DOTALL
        )
    open(prev_path, 'w', encoding='utf8').write(prev_html)

# Write catalog.js
open('catalog.js', 'w', encoding='utf8').write('window.CATALOG=' + json.dumps(out, ensure_ascii=False) + ';')

# Write THEMES.md
tok = sorted(set(re.findall(r'(--[a-z0-9-]+)\s*:', open('extension-assets/themes/win-98.css', encoding='utf8').read())))
md = [
    '# کاتالوگ تم‌های Papa Yar',
    '',
    f'تعداد تم‌ها: **{len(out)}** — ساختار ظاهری (HTML) در همه‌ی تم‌ها یکسان است و فقط CSS و سیستم افکت تم عوض می‌شود.',
    '',
    '## نحوه‌ی استفاده در پروژه‌ی دیگر',
    '',
    '1. این پوشه را به چت پروژه‌ی مقصد پیوست کنید.',
    '2. بنویسید: «تم شماره ۰۷ را از Papa Yar Theme Gallery به پروژه‌ی من منتقل کن» (می‌توانید در گالری دکمه‌ی «کپی دستور انتقال» را بزنید).',
    '3. هر تم با شماره‌ی ثابتش شناخته می‌شود؛ شماره‌ها ترتیب `theme-registry.js` هستند.',
    '',
    '## سازوکار تم‌ها و سیستم افکت (`data-fx`)',
    '',
    '- تم فعال با `data-theme="<id>"` روی `<html>` تعیین می‌شود (`theme-init.js` قبل از رندر آن را می‌گذارد).',
    '- حالت افکت با `data-fx="full | calm | off"` روی `<html>` توسط `theme-fx.js` کنترل می‌شود (`full`: همه‌ی افکت‌ها، `calm`: فقط هاور/کلیک/جابه‌جایی تب بدون افکت محیطی، `off`: بدون هیچ افکت؛ در صورت فعال بودن `prefers-reduced-motion: reduce` یا `data-motion="reduced"` خودکار `off` می‌شود).',
    '- `popup.css` لایه‌ی پایه‌ی چیدمان است و سه تم اول (neon، neo-brutal، editorial) هم داخل همین فایل هستند.',
    '- هر تم دیگر یک فایل جدا در `themes/<id>.css` و یک فایل افکت اختصاصی در `themes/<id>.fx.css` دارد که همه‌ی قواعدش با `[data-theme="<id>"]` محدود شده.',
    '- `ui.css` فونت Vazirmatn و قراردادهای مشترک را اضافه می‌کند و باید آخر بارگذاری شود.',
    '- ثبت تم (نام، رنگ‌های نمونه، افکت‌ها، لوگو و آیکون‌های ۱۶/۳۲/۴۸/۱۲۸) در `theme-registry.js` است؛ لوگوها در `icons/generated/<id>/logo.png`.',
    '',
    '## فهرست تم‌ها',
    '',
    '| # | id | نام | English | فایل CSS | فایل افکت | حجم | وابستگی |',
    '|---|----|-----|---------|----------|-----------|-----|---------|'
]
for t in out:
    dep = ', '.join(t['textures']) or '—'
    where = f"popup.css (خط {t['tokenLine']})" if t['inPopup'] else t['cssFile']
    md.append(f"| {t['n']:02d} | `{t['id']}` | {t['title']} | {t['en']} | `{where}` | `{t['fxFile']}` ({t['fxKb']} KB) | {t['kb']} KB | {dep} |")

md += ['', '## توضیح و افکت‌های هر تم', '']
for t in out:
    md += [f"### {t['n']:02d} — {t['title']} ({t['en']})", ''] + [f'- {d}' for d in t['desc']]
    md.append(f"- رنگ‌های نمونه: {' '.join(t['swatches'])}")
    if t['effects']:
        md.append('- **افکت‌ها (`' + t['fxFile'] + '`)**:')
        for fx in t['effects']:
            md.append(f"  - `{fx['id']}` ({fx['trigger']}): {fx['nameFa']}")
    md.append('')

md += [
    '## قرارداد توکن‌ها (CSS variables)',
    '',
    'هر تم کامل باید این متغیرها را تعریف کند (فهرست از `themes/win-98.css`):',
    '',
    '`' + '`, `'.join(tok) + '`',
    ''
]
open('THEMES.md', 'w', encoding='utf8').write('\n'.join(md))
print(f"Built {len(out)} themes, {len(tok)} tokens, updated catalog.js, THEMES.md, and preview.html")
