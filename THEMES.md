# کاتالوگ تم‌های Papa Yar

تعداد تم‌ها: **42** — ساختار ظاهری (HTML) در همه‌ی تم‌ها یکسان است و فقط CSS و سیستم افکت تم عوض می‌شود.

## نحوه‌ی استفاده در پروژه‌ی دیگر

1. این پوشه را به چت پروژه‌ی مقصد پیوست کنید.
2. بنویسید: «تم شماره ۰۷ را از Papa Yar Theme Gallery به پروژه‌ی من منتقل کن» (می‌توانید در گالری دکمه‌ی «کپی دستور انتقال» را بزنید).
3. هر تم با شماره‌ی ثابتش شناخته می‌شود؛ شماره‌ها ترتیب `theme-registry.js` هستند.

## سازوکار تم‌ها و سیستم افکت (`data-fx`)

- تم فعال با `data-theme="<id>"` روی `<html>` تعیین می‌شود (`theme-init.js` قبل از رندر آن را می‌گذارد).
- حالت افکت با `data-fx="full | calm | off"` روی `<html>` توسط `theme-fx.js` کنترل می‌شود (`full`: همه‌ی افکت‌ها، `calm`: فقط هاور/کلیک/جابه‌جایی تب بدون افکت محیطی، `off`: بدون هیچ افکت؛ در صورت فعال بودن `prefers-reduced-motion: reduce` یا `data-motion="reduced"` خودکار `off` می‌شود).
- `popup.css` لایه‌ی پایه‌ی چیدمان است و سه تم اول (neon، neo-brutal، editorial) هم داخل همین فایل هستند.
- هر تم دیگر یک فایل جدا در `themes/<id>.css` و یک فایل افکت اختصاصی در `themes/<id>.fx.css` دارد که همه‌ی قواعدش با `[data-theme="<id>"]` محدود شده.
- `ui.css` فونت Vazirmatn و قراردادهای مشترک را اضافه می‌کند و باید آخر بارگذاری شود.
- ثبت تم (نام، رنگ‌های نمونه، افکت‌ها، لوگو و آیکون‌های ۱۶/۳۲/۴۸/۱۲۸) در `theme-registry.js` است؛ لوگوها در `icons/generated/<id>/logo.png`.

## فهرست تم‌ها

| # | id | نام | English | فایل CSS | فایل افکت | حجم | وابستگی |
|---|----|-----|---------|----------|-----------|-----|---------|
| 01 | `neon` | نئون زمردی | Emerald Neon | `popup.css (خط 16)` | `themes/neon.fx.css` (3.5 KB) | 58.5 KB | — |
| 02 | `neo-brutal` | نئوبروتالیسم رنگی | Neo-Brutalism | `popup.css (خط 147)` | `themes/neo-brutal.fx.css` (3.4 KB) | 58.5 KB | — |
| 03 | `editorial` | مجله‌ای کلاسیک (پیش‌فرض) | Editorial Zine (Default) | `popup.css (خط 265)` | `themes/editorial.fx.css` (2.9 KB) | 58.5 KB | — |
| 04 | `neumorph` | نئومورفیک برجسته | Soft Neumorphic | `themes/neumorph.css` | `themes/neumorph.fx.css` (2.2 KB) | 9.7 KB | — |
| 05 | `pixel-spec` | پیکسل آرکید تاریک | Dark Pixel Spec | `themes/pixel-spec.css` | `themes/pixel-spec.fx.css` (2.2 KB) | 13.2 KB | — |
| 06 | `pixel-os-blue` | سیستم‌عامل پیکسلی | Pixel OS Blue | `themes/pixel-os-blue.css` | `themes/pixel-os-blue.fx.css` (2.1 KB) | 14.1 KB | — |
| 07 | `pastel-y2k` | پاستل یاسی Y2K | Pastel Y2K | `themes/pastel-y2k.css` | `themes/pastel-y2k.fx.css` (2.5 KB) | 13.4 KB | — |
| 08 | `win-xp` | ویندوز XP کلاسیک | Windows XP Luna | `themes/win-xp.css` | `themes/win-xp.fx.css` (2.6 KB) | 11.4 KB | — |
| 09 | `dieter-rams` | صنعتی براون (دیتر رامز) | Braun Dieter Rams | `themes/dieter-rams.css` | `themes/dieter-rams.fx.css` (1.9 KB) | 10.9 KB | — |
| 10 | `bauhaus` | هندسی باوهاوس | Bauhaus Geometric | `themes/bauhaus.css` | `themes/bauhaus.fx.css` (2.5 KB) | 9.4 KB | — |
| 11 | `win-98` | ویندوز ۹۸ رترو | Windows 98 Classic | `themes/win-98.css` | `themes/win-98.fx.css` (2.0 KB) | 4.5 KB | — |
| 12 | `cyber-gloss` | کروم سایبری براق | Cyber Gloss Chrome | `themes/cyber-gloss.css` | `themes/cyber-gloss.fx.css` (2.9 KB) | 14.3 KB | — |
| 13 | `crt-terminal` | ترمینال کهربایی ۱۹۸۷ | 1987 GRiD & CRT Terminal | `themes/crt-terminal.css` | `themes/crt-terminal.fx.css` (2.2 KB) | 9.1 KB | — |
| 14 | `notebook-sketch` | دفترچه مشق خط‌دار | Notebook Sketch | `themes/notebook-sketch.css` | `themes/notebook-sketch.fx.css` (4.1 KB) | 20.1 KB | — |
| 15 | `vhs-tape` | دوربین هندیکم VHS | 1992 VHS Camcorder OSD | `themes/vhs-tape.css` | `themes/vhs-tape.fx.css` (2.6 KB) | 10.2 KB | — |
| 16 | `pop-art` | کمیک پاپ‌آرت | Comic Pop Art | `themes/pop-art.css` | `themes/pop-art.fx.css` (3.2 KB) | 5.7 KB | — |
| 17 | `retro-catalog` | مجله گیم‌بوی دهه ۹۰ | 90s GameBoy Catalog | `themes/retro-catalog.css` | `themes/retro-catalog.fx.css` (4.2 KB) | 16.2 KB | — |
| 18 | `mac-1bit` | مکینتاش کلاسیک ۱-بیت | Macintosh 1-Bit OS | `themes/mac-1bit.css` | `themes/mac-1bit.fx.css` (4.3 KB) | 17.5 KB | — |
| 19 | `nokia-lcd` | ال‌سی‌دی پیکسلی نوکیا | Nokia 3310 Pixel LCD | `themes/nokia-lcd.css` | `themes/nokia-lcd.fx.css` (4.8 KB) | 12.2 KB | LCD7Segment.woff2 |
| 20 | `liquid-glass` | لیکویید گلس اپل | Apple Liquid Glass | `themes/liquid-glass.css` | `themes/liquid-glass.fx.css` (4.6 KB) | 47.6 KB | — |
| 21 | `cyberdeck-hud` | سایبردک سامورایی | Samurai Cyberdeck HUD | `themes/cyberdeck-hud.css` | `themes/cyberdeck-hud.fx.css` (4.2 KB) | 22.4 KB | — |
| 22 | `call-me-y2k` | موبایل صورتی Y2K | Y2K Pink Flip Phone | `themes/call-me-y2k.css` | `themes/call-me-y2k.fx.css` (3.8 KB) | 15.8 KB | — |
| 23 | `webcore-90s` | اینترنت نوستالژی ۹۰ | 90s Webcore Collage | `themes/webcore-90s.css` | `themes/webcore-90s.fx.css` (3.3 KB) | 13.6 KB | — |
| 24 | `dithertone-pro` | هاد بیومتریک و دیترینگ | Biometric ECG & Dither HUD | `themes/dithertone-pro.css` | `themes/dithertone-pro.fx.css` (3.0 KB) | 21.1 KB | — |
| 25 | `kawaii-paint-zine` | پینت و استیکر کاغذی | Kawaii Paint & Sticky Zine | `themes/kawaii-paint-zine.css` | `themes/kawaii-paint-zine.fx.css` (3.4 KB) | 13.1 KB | — |
| 26 | `paradise-botanical` | پوستر گل پرنده بهشتی | Bird of Paradise Poster | `themes/paradise-botanical.css` | `themes/paradise-botanical.fx.css` (2.3 KB) | 9.4 KB | — |
| 27 | `classified-cortex` | رادیولوژی و گلیچ صورتی | Cortex X-Ray Glitch | `themes/classified-cortex.css` | `themes/classified-cortex.fx.css` (2.3 KB) | 9.0 KB | — |
| 28 | `frosted-balaclava` | شیشه مشجر و نگاتیو ۳۵ | Frosted Glass & 35mm Film | `themes/frosted-balaclava.css` | `themes/frosted-balaclava.fx.css` (2.3 KB) | 9.0 KB | — |
| 29 | `showdown-968` | کروم متالیک مسابقه ۹۶۸ | 968 Showdown Dark Chrome | `themes/showdown-968.css` | `themes/showdown-968.fx.css` (2.3 KB) | 9.8 KB | — |
| 30 | `esperanza-econ` | پوستر خردلی آدام اسمیت | Esperanza Ochre Engraving | `themes/esperanza-econ.css` | `themes/esperanza-econ.fx.css` (2.3 KB) | 8.0 KB | — |
| 31 | `commodore-64-jp` | کمودور ۶۴ ژاپنی | 1982 Japanese Commodore 64 | `themes/commodore-64-jp.css` | `themes/commodore-64-jp.fx.css` (1.8 KB) | 9.7 KB | — |
| 32 | `retrodisc-g2` | دیسک‌من صنعتی و بلوپرینت | G2 RetroDisc & CAD Blueprint | `themes/retrodisc-g2.css` | `themes/retrodisc-g2.fx.css` (1.8 KB) | 10.0 KB | — |
| 33 | `starlight-express` | نئون لیزری استارلایت | 1984 Starlight Express Laser | `themes/starlight-express.css` | `themes/starlight-express.fx.css` (2.4 KB) | 9.8 KB | — |
| 34 | `acid-nfo-scene` | فایل متنی دموسین (NFO) | ACiD .NFO Demoscene 2000 | `themes/acid-nfo-scene.css` | `themes/acid-nfo-scene.fx.css` (1.9 KB) | 7.3 KB | — |
| 35 | `ransom-cutout-zine` | کلاژ حروف بریده و پین‌برد | Ransom Cutout & Pinboard | `themes/ransom-cutout-zine.css` | `themes/ransom-cutout-zine.fx.css` (1.9 KB) | 11.0 KB | — |
| 36 | `cyber-kawaii-safety` | کارتون آبی اینترنت امن | Remember Kids! Blue Halftone | `themes/cyber-kawaii-safety.css` | `themes/cyber-kawaii-safety.fx.css` (1.9 KB) | 8.4 KB | — |
| 37 | `comic-mac-pop` | مکینتاش قرمز کمیک‌بوکی | Comic Sans & Classic Mac Pop | `themes/comic-mac-pop.css` | `themes/comic-mac-pop.fx.css` (1.8 KB) | 8.5 KB | — |
| 38 | `atomic-purple-gbc` | گیم‌بوی بنفش شفاف | Atomic Purple GameBoy Color | `themes/atomic-purple-gbc.css` | `themes/atomic-purple-gbc.fx.css` (1.9 KB) | 9.6 KB | — |
| 39 | `marantz-hifi-70s` | آمپلی‌فایر نقره‌ای-گردویی | 1970s Silver & Walnut Hi-Fi | `themes/marantz-hifi-70s.css` | `themes/marantz-hifi-70s.fx.css` (1.9 KB) | 8.9 KB | — |
| 40 | `grand-budapest-passport` | پاسپورت دیپلماتیک طلاکوب | Grand Budapest Passport | `themes/grand-budapest-passport.css` | `themes/grand-budapest-passport.fx.css` (2.0 KB) | 7.7 KB | — |
| 41 | `iridescent-holo-foil` | فویل هولوگرافیک رنگین‌کمان | Iridescent Chrome Holo Foil | `themes/iridescent-holo-foil.css` | `themes/iridescent-holo-foil.fx.css` (1.9 KB) | 7.8 KB | — |
| 42 | `shinjuku-arcade-neon` | آرکید نئونی توکیو | Shinjuku Sega Arcade Lightbox | `themes/shinjuku-arcade-neon.css` | `themes/shinjuku-arcade-neon.fx.css` (1.9 KB) | 7.8 KB | — |

## توضیح و افکت‌های هر تم

### 01 — نئون زمردی (Emerald Neon)

- تیره و آینده‌نگر؛ زمینه‌ی تقریباً سیاه با درخشش سبز زمردی و آبی آسمانی.
- لبه‌ها و دکمه‌ها نور می‌دهند و کارت‌ها شیشه‌ای و تیره‌اند.
- تم پیش‌فرض اکستنشن؛ پایه‌ی همه‌ی تم‌های دیگر.
- رنگ‌های نمونه: #10b981 #38bdf8 #0a0f15
- **افکت‌ها (`themes/neon.fx.css`)**:
  - `neon-pulse-border` (ambient): درخشش نبض‌دار لبه‌ی کارت فعال
  - `neon-title-flicker` (ambient): سوسوی نئون روی عنوان Papa Yar
  - `neon-beam-sweep` (hover): جاروی نور روی دکمه در هاور
  - `neon-tab-glide` (transition): ظهور نوری هنگام جابه‌جایی تب

### 02 — نئوبروتالیسم رنگی (Neo-Brutalism)

- نئو‌برتالیسم شاد: زمینه‌ی کرمی، سبز لیمویی و قرمز مرجانی.
- حاشیه‌ی ضخیم مشکی و سایه‌ی سخت و بدون محوشدگی؛ فشردن دکمه‌ها حس واقعی دارد.
- رنگ‌های نمونه: #A3E635 #FF6B6B #F2EBD9
- **افکت‌ها (`themes/neo-brutal.fx.css`)**:
  - `brutal-sticker-wobble` (hover): لرزش استیکری کارت در هاور
  - `brutal-marquee` (ambient): نوار خبری متحرک (Marquee) باریک
  - `brutal-confetti` (click): انفجار مربع‌های رنگی (Confetti) در کلیک
  - `brutal-tab-snap` (transition): پرش پله‌ای در تعویض تب

### 03 — مجله‌ای کلاسیک (پیش‌فرض) (Editorial Zine (Default))

- حس مجله و روزنامه؛ سفید و مشکی با ضرب‌آهنگ قرمز و زرد.
- قاب‌های مشکی تیز، تایپوگرافی درشت و دکمه‌ی اصلی کاملاً مشکی.
- رنگ‌های نمونه: #0A0A0A #FF2D1A #FFD60A
- **افکت‌ها (`themes/editorial.fx.css`)**:
  - `editorial-ink-underline` (hover): کشیده شدن خط جوهر زیر عنوان در هاور
  - `editorial-page-flip` (transition): ورق خوردن صفحه‌ی مجله هنگام تغییر تب
  - `editorial-newsprint-grain` (ambient): دانه‌ی کاغذ روزنامه در پس‌زمینه

### 04 — نئومورفیک برجسته (Soft Neumorphic)

- سطوح نرم برجسته و فرورفته با سایه‌ی دوطرفه روی زمینه‌ی خاکستری-آبی.
- لهجه‌ی کهربایی و آبی؛ حس دکمه‌های فیزیکی نرم.
- رنگ‌های نمونه: #E8B02B #3B82F6 #E6E8EE
- **افکت‌ها (`themes/neumorph.fx.css`)**:
  - `neumorph-spring-press` (click): فشرده شدن نرم دکمه با فنر
  - `neumorph-light-follow` (ambient): بازتاب نور نرم دنبال موس
  - `neumorph-switch-glide` (transition): لغزش دستگیره‌ی تب با درخشش داخلی

### 05 — پیکسل آرکید تاریک (Dark Pixel Spec)

- برگه‌ی مشخصات فنی پیکسلی؛ کاغذ کرمی، سبز فسفری و حاشیه‌ی مشکی.
- فونت‌های Silkscreen و JetBrains Mono و زاویه‌های کاملاً تیز.
- رنگ‌های نمونه: #00FF00 #F4F0E6 #111111
- **افکت‌ها (`themes/pixel-spec.fx.css`)**:
  - `pixel-tab-dissolve` (transition): محو شدن پیکسلی پله‌ای بین تب‌ها
  - `pixel-cursor-blink` (ambient): نشانگر چشمک‌زن فنی کنار عنوان
  - `pixel-level-up` (click): انفجار پیکسلی «LEVEL UP» در کلیک

### 06 — سیستم‌عامل پیکسلی (Pixel OS Blue)

- پنجره‌های یک سیستم‌عامل پیکسلی در آبی؛ نوار عنوان با نام ACTIVE_SESSION.EXE.
- دکمه‌های قرمز و آبی تخت و فونت Silkscreen.
- رنگ‌های نمونه: #0078D7 #F0F0F0 #000000
- **افکت‌ها (`themes/pixel-os-blue.fx.css`)**:
  - `os-window-scale` (transition): باز شدن پنجره از نوار عنوان (Scale)
  - `os-block-progress` (ambient): نوار پیشرفت بلوکی سیستم‌عامل
  - `os-error-shake` (click): تکان خوردن پنجره‌ی خطا در کلیک حذف

### 07 — پاستل یاسی Y2K (Pastel Y2K)

- نوستالژی اوایل دهه‌ی ۲۰۰۰ با رنگ‌های هلویی، صورتی و فیروزه‌ای.
- زمینه‌ی شطرنجی، نوار عنوان PAPA_SESSION.EXE و فونت VT323.
- رنگ‌های نمونه: #62B5A9 #FBE3CC #3A2323
- **افکت‌ها (`themes/pastel-y2k.fx.css`)**:
  - `y2k-star-twinkle` (hover): چشمک ستاره‌ها و جرقه‌ها در هاور
  - `y2k-cursor-stars` (ambient): ردِ ستاره‌ای دنبال موس
  - `y2k-glitter-shine` (hover): درخشش گلیتری روی دکمه‌ی اصلی
  - `y2k-tab-pop` (transition): باز شدن پاستلی پنجره در تغییر تب

### 08 — ویندوز XP کلاسیک (Windows XP Luna)

- سبک Luna: نوار عنوان آبی براق، دکمه‌ی سبز و پنجره‌های بژ.
- گوشه‌های گرد و گرادیان‌های کلاسیک XP.
- رنگ‌های نمونه: #0055EA #388E3C #ECE9D8
- **افکت‌ها (`themes/win-xp.fx.css`)**:
  - `xp-green-progress` (ambient): نوار پیشرفت سبز با بلوک‌های لغزان
  - `xp-balloon-toast` (transition): بالن اعلان که با انیمیشن بالا می‌آید
  - `xp-green-shine` (hover): درخشش براق دکمه‌ی سبز Start

### 09 — صنعتی براون (دیتر رامز) (Braun Dieter Rams)

- الهام از طراحی Braun؛ خاکستری گرم، نارنجی و نمایشگر مشکی برای شماره.
- شبکه‌ی منظم و دکمه‌های مینیمال؛ «کمتر، اما بهتر».
- رنگ‌های نمونه: #FF5500 #2B2B2B #D5D1C8
- **افکت‌ها (`themes/dieter-rams.fx.css`)**:
  - `rams-led-pulse` (ambient): چراغ LED نبض‌دار صنعتی
  - `rams-digit-flip` (hover): پشت‌ورو شدن ارقام (Flip) در نمایشگر
  - `rams-mech-press` (click): فشرده شدن مکانیکی دکمه با سایه‌ی دقیق

### 10 — هندسی باوهاوس (Bauhaus Geometric)

- سبک سوییسی و باوهاوس؛ آبی کبالت، قرمز و زرد روی زمینه‌ی استخوانی.
- فرم‌های هندسی، خطوط ضخیم و فونت Space Grotesk.
- رنگ‌های نمونه: #0A25C9 #E63946 #F4EFE6
- **افکت‌ها (`themes/bauhaus.fx.css`)**:
  - `bauhaus-geo-rotate` (ambient): چرخش آهسته‌ی اشکال هندسی پس‌زمینه
  - `bauhaus-block-slide` (transition): لغزش بلوک‌های رنگی بین تب‌ها
  - `bauhaus-shape-morph` (hover): تبدیل دایره↔مربع در هاور

### 11 — ویندوز ۹۸ رترو (Windows 98 Classic)

- رابط کلاسیک: زمینه‌ی سبز-آبی، پنجره‌های خاکستری و نوار عنوان سرمه‌ای.
- دکمه‌های برجسته/فرورفته، بدون انیمیشن و بدون گوشه‌ی گرد.
- رنگ‌های نمونه: #008080 #C0C0C0 #000080
- **افکت‌ها (`themes/win-98.fx.css`)**:
  - `win98-wireframe-open` (transition): باز شدن پنجره با قاب سیمی پله‌ای
  - `win98-focus-rect` (hover): مستطیل نقطه‌چین کلاسیک روی فوکوس و هاور
  - `win98-stepped-progress` (ambient): پیشرفت پله‌ای بلوکی سرمه‌ای

### 12 — کروم سایبری براق (Cyber Gloss Chrome)

- سیاه براق با نئون فیروزه‌ای و قرمز؛ کروم و شیشه‌ی سایبرپانک.
- لبه‌های درخشان، دکمه‌های براق و نوار نور بالای کارت‌ها.
- رنگ‌های نمونه: #00E5FF #FF1A35 #06090E
- **افکت‌ها (`themes/cyber-gloss.fx.css`)**:
  - `cyber-chrome-sweep` (hover): جاروی بازتاب کروم روی دکمه‌ها
  - `cyber-rgb-glitch` (hover): گلیچ با جدا شدن کانال RGB در هاور
  - `cyber-hud-brackets` (ambient): براکت‌های HUD در گوشه‌ی کارت فعال

### 13 — ترمینال کهربایی ۱۹۸۷ (1987 GRiD & CRT Terminal)

- ادغام کامل ترمینال فسفری CRT (#13) و نمایشگر الکترولومینسنت کهربایی GRiD Compass سال ۱۹۸۷ (#31) روی زمینه‌ی برنزی تیره (#110A00) با پیکسل‌های طلایی-کهربایی (#FFB81C) و سبز فسفری (#33FF66).
- نوار وضعیت BIOS بالای صفحه (1-Jan-87 // GRiD-OS 1:44 am)، هدر ترمینال Device: Bubble Memory | root@papayar:~$ و نشانگر بلوکی چشمک‌زن (▮).
- نوار انتخاب معکوس کهربایی یکدست (#FFB81C با متن سیاه #110A00) روی شماره‌تلفن، تب فعال، ردیف‌های هاورشده و نوار فرمان پایینی.
- رنگ‌های نمونه: #FFB81C #33FF66 #110A00
- **افکت‌ها (`themes/crt-terminal.fx.css`)**:
  - `grid87-scanline` (ambient): اسکن‌لاین نمایشگر الکترولومینسنت کهربایی (GRiD 1987) و نشانگر چشمک‌زن ▮
  - `grid87-cursor-box` (hover): هاله‌ی فسفری کهربایی دنبال‌کننده‌ی موس
  - `grid87-invert-flash` (click): فلاش معکوس نوار انتخاب کهربایی (Bubble Memory Read/Write)
  - `grid87-redraw` (transition): بازنویسی پله‌ای صفحه به سبک BIOS سال ۱۹۸۷

### 14 — دفترچه مشق خط‌دار (Notebook Sketch)

- دفتر سیمی خط‌دار با سوراخ‌های فنر و حاشیه‌ی قرمز راست‌به‌چپ، بافت کاغذ گرم و تایپوگرافی خوانا و تمیز وزیرمتن (Vazirmatn).
- کارت‌ها با لبه‌های دست‌کشیده‌ی واقعی (فیلتر SVG)، نوار چسب واشی روی کارت فعال و برچسب یادداشت زرد (Sticky Note).
- عنوان‌ها با هایلایت ماژیکی، دودل‌های ستاره و پیکان، و شماره‌ی تلفن با خط‌کشی موجی قرمز.
- رنگ‌های نمونه: #1E4BD1 #FFDF4D #F8F3E3
- **افکت‌ها (`themes/notebook-sketch.fx.css`)**:
  - `sketch-pen-draw` (ambient): کشیده شدن خط دور کارت و تکان نوار چسب
  - `sketch-title-scribble` (hover): خط‌خطی خودکاری زیر عنوان در هاور
  - `sketch-check-eraser` (click): تیک دست‌کشیده و پاک‌کن هنگام حذف
  - `sketch-page-turn` (transition): ورق خوردن دفتر از سمت فنر هنگام تغییر تب

### 15 — دوربین هندیکم VHS (1992 VHS Camcorder OSD)

- بازسازی کامل بر اساس منظره‌یاب دوربین‌های فیلم‌برداری VHS دهه‌ی ۹۰ (PLAY ▶ // [● REC] // BATT [■■■□]) و نوار ۴ رنگ کاست VHS-C (#FF2A85، #FF6B00، #FFE600، #00F0FF).
- کادر هدف‌گیری چهارگوش منظره‌یاب (┌ ┐ └ ┘)، خط‌کش مرکزی (+)، تایم‌کد زرد VCR (SP 0:04:12:18) و نوار وضعیت AUTO TRACKING [||||||··] در پایین کارت.
- انحراف رنگی آنالوگ (RGB Chromatic Aberration Split) با سایه‌های دوگانه‌ی سرخابی و فیروزه‌ای روی تمام متون، دکمه‌ها و کادرها.
- رنگ‌های نمونه: #FF2A85 #00F0FF #14111A
- **افکت‌ها (`themes/vhs-tape.fx.css`)**:
  - `vhs-tracking-bar` (ambient): عبور نوار گلیچ Tracking ویدئویی
  - `vhs-rec-indicator` (ambient): نشانگر چشمک‌زن «● REC» با تایم‌کد در هدر
  - `vhs-chromatic-hover` (hover): جدا شدن رنگ (Chromatic Aberration) در هاور
  - `vhs-frame-jump` (transition): پرش فریم مغناطیسی در تغییر تب

### 16 — کمیک پاپ‌آرت (Comic Pop Art)

- صفحه‌ی کمیک‌بوک کلاسیک با نقطه‌های هالف‌تون (Ben-Day)، خطوط دور مشکی ضخیم و رنگ‌های اصلی زرد، قرمز و آبی.
- کارت‌ها با سایه‌ی سخت کمیکی، برچسب‌های ابر حرف (Speech Bubble) و انفجار ستاره‌ای «POW!» در کلیک.
- رنگ‌های نمونه: #FFE600 #FF1E27 #0099FF
- **افکت‌ها (`themes/pop-art.fx.css`)**:
  - `popart-pow-burst` (click): انفجار ستاره‌ای «POW!» کمیک در کلیک
  - `popart-halftone-shift` (hover): جابه‌جا شدن نقطه‌های هالف‌تون (Ben-Day) در هاور
  - `popart-speech-bubble` (hover): ابر حرف کمیک (Speech Bubble) روی دکمه
  - `popart-panel-snap` (transition): ورق خوردن پنل کمیک در تعویض تب

### 17 — مجله گیم‌بوی دهه ۹۰ (90s GameBoy Catalog)

- الهام‌گرفته از کاتالوگ کنسول‌های دستی کلاسیک (Game Boy Pocket) با پالت ۴ رنگ مونوکروم زیتونی-خاکی (#D6D5BD، #ACAC91، #6B6B53 و #222116).
- پنجره‌های Library با نوار شطرنجی پیکسلی (Checkerboard Dither)، دکمه‌های برجسته‌ی سه‌بعدی پیکسلی و سایه‌های سخت بدون محوشدگی.
- ردیف‌های لیست با نشانگر مربعی پیکسلی (■) و فلش انتخاب مثلثی (◀) با خوانایی کامل در هر چهار تب.
- رنگ‌های نمونه: #222116 #6B6B53 #D6D5BD
- **افکت‌ها (`themes/retro-catalog.fx.css`)**:
  - `retro-dither-scroll` (ambient): نوار شطرنجی پیکسلی (Dither) و نشانگر کاتالوگ
  - `retro-cursor-arrow` (hover): فلش مثلثی پیکسلی «◀» کنار گزینه‌ها در هاور
  - `retro-pixel-shards` (click): انفجار ۸ جهته ذرات پیکسلی (Pixel Shards) و فشردگی کلید کنسول
  - `retro-cartridge-boot` (transition): جا رفتن کارتریج و رفرش پله‌ای در تعویض تب

### 18 — مکینتاش کلاسیک ۱-بیت (Macintosh 1-Bit OS)

- رابط کاربری ۱-بیت سیاه‌وسفید کلاسیک مکینتاش (System 7 / MacPaint) با پس‌زمینه‌ی شطرنجی پیکسلی ۵۰٪ و نوار منوی بالای صفحه ( File Edit View).
- پنجره‌های دارای نوار عنوان راه‌راه ۶ خطی، هدر سیاه معکوس (UNTITLED // SESSION.EXE) و کادر انتخاب نقطه‌چین MacPaint با دستگیره‌های گوشه‌ای روی شماره خط.
- دیالوگ‌های دوخطی کلاسیک مک، دکمه‌های معکوس‌شونده‌ی سیاه و سفید ([OK] / [RETRY]) و نوار پیشرفت کپی ۱-بیت در فوتر.
- رنگ‌های نمونه: #000000 #FFFFFF #000000
- **افکت‌ها (`themes/mac-1bit.fx.css`)**:
  - `mac-copy-progress` (ambient): نوار پیشرفت ۱-بیت (COPYING) و کادر انتخاب MacPaint
  - `mac-invert-hover` (hover): وارونه‌سازی فوری ۱-بیت (سیاه↔سفید) در هاور
  - `mac-menu-strobe` (click): چشمک ۳ مرحله‌ای سیاه‌وسفید دکمه‌ی مکینتاش (System 7 Strobe) و کادر کمند
  - `mac-window-zoom` (transition): باز شدن کادر نقطه‌چین پله‌ای مکینتاش در تغییر تب

### 19 — ال‌سی‌دی پیکسلی نوکیا (Nokia 3310 Pixel LCD)

- شبیه‌سازی واقعی صفحه‌نمایش مونوکروم کم‌رزولوشن نوکیا ۳۳۱۰ با شبکه‌ی پیکسلی درشت ۴×۴ پیکسل روی زمینه‌ی زیتونی روشن (#8BAC0F / #9BBC0F) و جوهر پیکسلی تیره (#0F1F08).
- ستون‌های پیکسلی پله‌ای ۴ خط آنتن و باتری (▂▄▆█) در دو طرف کارت فعال، نوار وضعیت IR-TCI [3310] 04:20 و کادرهای ۳ پیکسلی تیز بدون هیچ انحنا یا آنتی‌الیازینگ.
- هایلایت بلوکی معکوس نوکیا (#0F1F08 با متن سبز #9BBC0F) روی شماره‌تلفن، تب فعال و دکمه‌های اصلی به همراه نوار کلید نرم‌افزاری فوتر.
- رنگ‌های نمونه: #88A255 #0B1307 #98B166
- **افکت‌ها (`themes/nokia-lcd.fx.css`)**:
  - `lcd-segment-pulse` (ambient): نبض سگمنت‌های خاموش ساعت (88:88) و اکولایزر ماتریسی
  - `lcd-playlist-invert` (hover): هایلایت معکوس نواری پلی‌لیست نوکیا و شبح کریستال مایع
  - `lcd-pressure-wave` (click): موج فشار انگشت روی شیشه‌ی کریستال مایع (LCD Pressure Rings) و بک‌لایت سبز
  - `lcd-crystal-fade` (transition): تغییر فاز کریستال مایع (LCD Slow-Response) در تغییر تب

### 20 — لیکویید گلس اپل (Apple Liquid Glass)

- گلس‌مورفیسم روشن و سفید بر پایه‌ی مش‌گرادینت پاستلی (#F7F8FC همراه با گوی‌های بنفش یاسی #EEF0FF، آبی آسمانی #E6F4FF، نعنایی #E8FBF3 و صورتی ملایم #FDEBF3) و شکست نور اپتیکال SVG.
- کنتراست تایپوگرافی استاندارد WCAG AAA/AA با رنگ متن اصلی #1B1B3A (کنتراست ۱۵.۹:۱)، متن ثانویه #4A4A68 (کنتراست ۸.۱:۱)، حداقل سایز فونت ۱۲px و پشتیبانی دوزبانه (unicode-bidi: plaintext).
- دکمه‌های اصلی با گرادینت نیلی-بنفش (#4F46E5 → #6D28D9) و متن سفید، دکمه‌ی خروج امن با تناژ قرمز ملایم و متن زرشکی تیره (#991B1B) و کپسول قطره‌ای متحرک در نوار تب‌ها.
- رنگ‌های نمونه: #4F46E5 #EEF0FF #F7F8FC
- **افکت‌ها (`themes/liquid-glass.fx.css`)**:
  - `apple-glass-caustics` (ambient): شکست نور اپتیکال SVG (Snell Refraction) و گوی‌های نوری متحرک پشت شیشه
  - `apple-glass-meniscus` (hover): بازتاب منشوری لبه‌ی شیشه (Chromatic Dispersion) هماهنگ با موس
  - `apple-glass-droplet` (click): فشردگی الاستیک قطره‌ی شیشه‌ای و موج شکست نور منشوری
  - `apple-glass-glide` (transition): حرکت و کشسانی قطره‌ی شیشه‌ای مایع (Liquid Droplet Morph) بین تب‌ها

### 21 — سایبردک سامورایی (Samurai Cyberdeck HUD)

- ترکیب پالت قرمز سامورایی (#E04F4F) و آبی-فیروزه‌ای یخی (#5CE1E6) و جزئیات تله‌متری سایبردک (قطب‌نمای بالای صفحه، بارکد SCANNING 64%، نوار عمودی BREACH PROTOCOL و ماتریس باینری).
- مهندسی باکس‌های علمی-تخیلی پخ‌دار (Chamfered Sci-Fi Boxes) با نوار عنوان پله‌ای توپر در بالای هر باکس و خطوط هاشور مورب (////////) در لبه‌ها.
- دکمه‌های تاکتیکی با نشانگر مثلث فیروزه‌ای در گوشه‌ی راست-بالا (◣) و جابه‌جایی تب فوق‌سریع و بدون لگ (GPU-Composited).
- رنگ‌های نمونه: #E04F4F #5CE1E6 #140C14
- **افکت‌ها (`themes/cyberdeck-hud.fx.css`)**:
  - `cyberdeck-laser-scan` (ambient): خط لیزر اسکن تله‌متری و چرخش رادار تاکتیکی در پس‌زمینه
  - `cyberdeck-reticle-lock` (hover): نشانگر قفل هدف چهارگوش فیروزه‌ای (Tactical Reticle) دنبال‌کننده‌ی موس
  - `cyberdeck-breach-glitch` (click): برش گلیچ Breach Protocol (قرمز/فیروزه‌ای) و موج هدف‌گیری هشت‌ضلعی
  - `cyberdeck-tab-decode` (transition): رمزگشایی اسکن‌لاین افقی سایبردک در جابه‌جایی تب

### 22 — موبایل صورتی Y2K (Y2K Pink Flip Phone)

- الهام‌گرفته از پوستر «CALL ME!!» با پس‌زمینه‌ی آسمان آبی و ابرهای سفید همراه با بافت خطوط اسکن CRT و ستاره‌های پیکسلی سبز درخشان (★).
- کارت اکانت فعال به شکل بدنه‌ی برجسته‌ی نوکیا ۳۳۱۰ صورتی با قاب نقره‌ای، صفحه‌نمایش LCD سبز فسفری بک‌لایت‌دار و نقطه‌ی بازتاب نور.
- دکمه‌های بیضی سفید و نقره‌ای به سبک کی‌پد گوشی کلاسیک و تایپوگرافی پفکی سه‌بعدی صورتی.
- رنگ‌های نمونه: #FF4FA3 #5CE65C #2A68C2
- **افکت‌ها (`themes/call-me-y2k.fx.css`)**:
  - `y2k-star-float` (ambient): شناور شدن ستاره‌های پیکسلی سبز (★) روی آسمان ابری Y2K
  - `y2k-keypad-glow` (hover): هاله‌ی درخشان سبز و صورتی Y2K دنبال‌کننده‌ی موس
  - `y2k-keypad-press` (click): فشار دکمه‌های بیضی کی‌پد نوکیا صورتی و انفجار ستاره‌ی پیکسلی
  - `y2k-flip-open` (transition): باز شدن فنری گوشی تاشو (Y2K Flip Bounce) در تغییر تب

### 23 — اینترنت نوستالژی ۹۰ (90s Webcore Collage)

- کلاژ نوستالژیک اینترنت دهه‌ی ۹۰ («I miss when the Internet was just a place») روی کاغذ روزنامه‌ای کرم با نوار شطرنجی پیکسلی سیاه‌وسفید و رنگین‌کمان پیکسلی.
- پد رومیزی صورتی (#F468B6) با خطوط دور مشکی، مانیتور CRT بژ کلاسیک با صفحه‌ی ذغالی برای نمایش شماره خط و استیکرهای ستاره‌ی اکلیلی.
- دکمه‌ها به شکل کلیدهای برجسته‌ی کیبورد مکانیکی بژ و جوی‌استیک آرکید مشکی با ۴ دکمه‌ی رنگی به همراه مهر بیضی (LT 2024) در فوتر.
- رنگ‌های نمونه: #F468B6 #F2EFE6 #1F1E1C
- **افکت‌ها (`themes/webcore-90s.fx.css`)**:
  - `webcore-sparkle` (ambient): درخشش ستاره‌های چهارپر (✦) و استیکرهای اکلیلی کلاژ
  - `webcore-cursor-star` (hover): نشانگر چهارگوش چرخان استیکری دنبال‌کننده‌ی موس
  - `webcore-keycap-clack` (click): فشار مکانیکی کلیدهای کیبورد بژ کلاسیک (Keycap Clack)
  - `webcore-collage-snap` (transition): برش کلاژ روزنامه‌ای (Scrapbook Snap) در تغییر تب

### 24 — هاد بیومتریک و دیترینگ (Biometric ECG & Dither HUD)

- ادغام کامل ماتریس هاف‌تون Bayer 4x4 (#24) و هاد بیومتریک نوار قلب (#26) روی فضای مشکی کیهانی (#04070D) با آبی فسفری (#5CE1FF) و سفید درخشان.
- نوار پیشرفت راه‌راه مورب در هدر، مانیتور HEART BEAT [♥] 75 BPM // BAYER 4x4 MATRIX با موج نوار قلب SVG روی شبکه‌ی نقطه‌ای دیترینگ و خط‌کش تله‌متری پایینی.
- گراف مولکولی شش‌ضلعی (C-N-O Benzene Rings) در پس‌زمینه‌ی بخش‌ها، گره‌های مربعی گوشه‌ها (■) و دکمه‌های مهندسی [ MODULATION ].
- رنگ‌های نمونه: #5CE1FF #2B95FF #04070D
- **افکت‌ها (`themes/dithertone-pro.fx.css`)**:
  - `dither-scan-beam` (ambient): پرتوی اسکن هاف‌تون آبی فسفری و نوسان موج سینوسی
  - `dither-bayer-lens` (hover): عدسی نقطه‌ای ماتریس Bayer 4x4 دنبال‌کننده‌ی موس
  - `dither-quantize-click` (click): فلش کوانتیزاسیون الگوریتمی و موج گره‌های مربعی (■)
  - `dither-tab-reveal` (transition): تغییر فاز ماتریس دیترینگ در جابه‌جایی تب

### 25 — پینت و استیکر کاغذی (Kawaii Paint & Sticky Zine)

- تصویرسازی دستی روی کاغذ بازیافتی یاسی-آبی (#B3BCE2) با مانیتور سه‌بعدی صورتی و سایه‌ی حجمی آبی لاجوردی (#1B36D8).
- پنجره‌ی کلاسیک MS-Paint با نوار عنوان آبی لاجوردی (🎨 anti-AI // PAPA_YAR.BMP)، پالت ۱۲ رنگ دو ستونی در سمت چپ کارت فعال و بوم نقاشی کرم.
- برگه‌های یادداشت زرد کج (Sticky Notes) با دودل‌های دستی (🐱، دوز X/O و 23+02+98=123) و دکمه‌های سه‌بعدی به سبک کیبورد صورتی-آبی.
- رنگ‌های نمونه: #F694C1 #1434DC #F5E89B
- **افکت‌ها (`themes/kawaii-paint-zine.fx.css`)**:
  - `paint-doodle-wiggle` (ambient): جنبش استاپ‌موشن دودل‌های پینت (🎱، ♥، ★) و برگه‌های یادداشت زرد
  - `paint-brush-follower` (hover): قلم‌موی رنگی MS-Paint دنبال‌کننده‌ی موس
  - `paint-keyboard-press` (click): فشار سه‌بعدی کیبورد صورتی-لاجوردی و پاشش رنگ پینت
  - `paint-zine-tab` (transition): ورق‌خوردن استاپ‌موشن زین کاغذی در تغییر تب

### 26 — پوستر گل پرنده بهشتی (Bird of Paradise Poster)

- طراحی پوستر گالری و ادیتوریال بر پایه‌ی کاغذ آرشیوی گرم (#F2F1EC)، تایپوگرافی پیکسلی-سریف پله‌ای (PARADISE) و تصویرسازی مسی-طلایی گل پرنده‌ی بهشتی (Strelitzia Reginae).
- نوار متادیتای کپسولی سیاه در بالای هدر (BIRD OF // STRELITZIA REGINAE // 01 // ***) و نشان شبدر چهارپر بوتانیکال (✤ SOUTH AFRICA).
- دکمه‌ها و تب‌های کپسولی سیاه یکدست (#0D0D0D) با سایه‌ی سخت مسی (#D47A2C) و بارکد عمودی در فوتر.
- رنگ‌های نمونه: #0D0D0D #D47A2C #F2F1EC
- **افکت‌ها (`themes/paradise-botanical.fx.css`)**:
  - `bot-sun-drift` (ambient): بازتاب نور مسی-طلایی گل پرنده‌ی بهشتی (Strelitzia Reginae) روی کاغذ آرشیوی
  - `bot-clover-cursor` (hover): نشانگر دایره‌ای مسی هماهنگ با موس
  - `bot-stamp-press` (click): ضربه‌ی مهر چاپی سیاه و حلقه‌ی جوهر ادیتوریال
  - `bot-page-flip` (transition): ورق‌خوردن پوستر گالری در جابه‌جایی تب

### 27 — رادیولوژی و گلیچ صورتی (Cortex X-Ray Glitch)

- کلاژ اسید-گرافیکس و رادیولوژی سایبری روی شیت سفید آزمایشگاهی (#F8F9FC) با خطوط تراز سرتاسری ۱ پیکسلی سرخابی (#FF1E90) و آبی کبالت (#1D4ED8).
- حلقه‌ی هدف‌گیری عنبیه چشم (X-Ray Iris) و بلوک‌های گلیچ شطرنجی پیکسلی (Checkerboard Glitch) همراه با برچسب‌های who am i? // ACCESS // 00 و CLASSIFIED CORTEX.
- شماره‌گذاری دایره‌ای (① ② ③ ④) روی تب‌های ناوبری و سایه‌های دوگانه‌ی سرخابی-کبالت.
- رنگ‌های نمونه: #FF1E90 #1D4ED8 #F8F9FC
- **افکت‌ها (`themes/classified-cortex.fx.css`)**:
  - `cortex-iris-spin` (ambient): چرخش حلقه‌ی عنبیه رادیولوژی و خطوط تراز لیزری سرخابی/کبالت
  - `cortex-target-ring` (hover): حلقه‌ی هدف‌گیری اپتیکال سرخابی دنبال‌کننده‌ی موس
  - `cortex-glitch-snap` (click): پرش گلیچ شطرنجی (Checkerboard Glitch) و شکست رنگی
  - `cortex-tab-in` (transition): اسلاید اسکن کلینیکی در تغییر تب

### 28 — شیشه مشجر و نگاتیو ۳۵ (Frosted Glass & 35mm Film)

- تضاد سینمایی پس‌زمینه‌ی تاریک‌خانه (#090A0C) با پنل‌های شیشه‌ی مشجر و دانه‌دار سفید-نقره‌ای (Pebble-Textured Frosted Glass).
- پنجره‌ی مستطیلی برش‌خورده‌ی تیره (Cutout Eye-Slit Visor) دور شماره‌تلفن با کادر سفید و خط‌کش هدف‌گیری مرکزی (+) مشابه پوستر CONTENT OF A (W)HOLE.
- تایپوگرافی مونو‌اسپیس سوئیسی (24 04 2026 // 8400 WINTERTHUR) و کدهای حاشیه‌ی فیلم عکاسی ۳۵ میلی‌متری (+ 41 ●).
- رنگ‌های نمونه: #E8ECF2 #0B0D11 #64748B
- **افکت‌ها (`themes/frosted-balaclava.fx.css`)**:
  - `frost-glint-move` (ambient): حرکت نور تاریک‌خانه روی شیشه‌ی مشجر دانه‌دار (Pebble Frost)
  - `frost-viewfinder` (hover): کادر منظره‌یاب دوربین ۳۵ میلی‌متری دنبال‌کننده‌ی موس
  - `frost-shutter-click` (click): فلاش شاتر دوربین و موج کادر سفید نگاتیو
  - `frost-tab-slide` (transition): حرکت فریم کنتاکت‌شیت عکاسی در تغییر تب

### 29 — کروم متالیک مسابقه ۹۶۸ (968 Showdown Dark Chrome)

- رابط کاربری مسابقه‌ای Y2K و واقعیت مجازی (968 SHOWDOWN // NINTENDO VR + PLAYSTATION) روی زمینه‌ی کربنی (#050707) با گرادینت متالیک سبز-خاکستری (Airbrushed Sage-Teal Chrome).
- هدر و نوار تب کپسولی با کادرهای ۱ پیکسلی جیوه‌ای براق، نشان بیضی کروم و ستاره‌های چهارپر سه‌بعدی (✦).
- پنل‌های مسابقه‌ای NEW • VR GAME© // RACE ARENA ↗ با دکمه‌های کپسولی کروم نقره‌ای و تایپوگرافی ایتالیک سرعت.
- رنگ‌های نمونه: #9CB6AF #D8E6E2 #050707
- **افکت‌ها (`themes/showdown-968.fx.css`)**:
  - `s968-sage-pulse` (ambient): درخشش متالیک سبز-نقره‌ای (Airbrushed Sage Chrome) و ستاره‌ی ۴ پر ✦
  - `s968-chrome-spotlight` (hover): هاله‌ی جیوه‌ای کروم دنبال‌کننده‌ی موس
  - `s968-chrome-press` (click): فشار کپسول متالیک و موج ضربه‌ی زنجیر کروم
  - `s968-tab-glide` (transition): ورود سریع پنل‌های میدان مسابقه‌ی VR در تغییر تب

### 30 — پوستر خردلی آدام اسمیت (Esperanza Ochre Engraving)

- پوستر آکادمیک و کلاسیک روی مقوای زرد خردلی-زعفرانی (#DE9B1E) با جوهر سیاه اسپرسو (#141008) و کاغذ پوستی کهنه (#F4DFB0) با الهام از پوستر ESPERANZA 2026 و آدام اسمیت.
- پنجره‌ی کاغذ پاره‌شده‌ی سه‌بعدی (Torn-Paper Reveal) با سایه‌ی عمیق داخلی و بافت هاشورهای حکاکی کلاسیک (Crosshatch Engraving) پشت شماره‌تلفن.
- نمودارهای برداری عرضه و تقاضا (Supply & Demand P/Q Equilibrium)، فرمول کلان Y = C + I + G + (X - M) و علامت‌های رجیستری چاپ (+) در گوشه‌ها.
- رنگ‌های نمونه: #DE9B1E #141008 #F4DFB0
- **افکت‌ها (`themes/esperanza-econ.fx.css`)**:
  - `econ-warm-drift` (ambient): سایه‌روشن گرم روی کاغذ خردلی پاره‌شده و هاشورهای حکاکی کلاسیک
  - `econ-equilibrium-cursor` (hover): نشانگر نقطه‌ی تعادل بازار (Equilibrium E) دنبال‌کننده‌ی موس
  - `econ-press` (click): فرورفتگی چاپ لترپرس روی کاغذ خردلی و مهر مرکب سیاه
  - `econ-tab-unfold` (transition): بازشدن لایه‌ی کاغذ پاره‌شده در تغییر تب

### 31 — کمودور ۶۴ ژاپنی (1982 Japanese Commodore 64)

- طراحی بر اساس پوستر ژاپنی Commodore 64 سال ۱۹۸۲ (コモドール64 // 日本製) روی زمینه‌ی مشکی (#070808) با کرم بژ کلاسیک (#E8CFA0) و آبی کمودور (#0A74B8).
- نوار رنگین‌کمان ۵ رنگ مورب (آبی #0A74B8، سبز #84B826، زرد #F5B81C، نارنجی #E86818، سرخابی #D93870) و نشان فلزی C= commodore [≡≡≡] 64.
- دکمه‌های برجسته‌ی کیبورد مکانیکی کمودور ۶۴ (Breadbin Keycaps) و نوار تب ۴ رنگ الهام‌گرفته از بلوک‌های SAVE / LOAD / CONNECT / ENJOY.
- رنگ‌های نمونه: #E8CFA0 #0A74B8 #070808
- **افکت‌ها (`themes/commodore-64-jp.fx.css`)**:
  - `c64-rainbow-sheen` (ambient): نوار رنگین‌کمان ۵ رنگ مورب (آبی، سبز، زرد، نارنجی، سرخابی) و لوگوی ۶۴
  - `c64-keycap-glow` (hover): بازتاب گرم روی کلیدهای مکانیکی کرم‌رنگ (Breadbin Keycaps)
  - `c64-key-press` (click): فشار فیزیکی کلیدهای کیبورد کمودور ۶۴ با صدای بصری
  - `c64-tab-load` (transition): بارگذاری پله‌ای ۸ بیتی (SAVE / LOAD / CONNECT / ENJOY) در تغییر تب

### 32 — دیسک‌من صنعتی و بلوپرینت (G2 RetroDisc & CAD Blueprint)

- پوستر طراحی صنعتی دو‌بخشی (G2 RETRODISC): زمینه‌ی زغالی مات (#242729) با شبکه‌ی مهندسی سفید CAD در کنار پنل‌های کرم-شنی (#EAD9CE) و زرد واکمنی (#D99B26).
- تصویرسازی برداری دیسک‌من دو‌نیمه (نصف وایرفریم مهندسی و نصف رندر زرد-قرمز صنعتی) همراه با پنجره‌ی LCD سبز-کهربایی ترک‌شمار دور شماره‌تلفن.
- دکمه‌های کپسولی قرمز آنودایزشده (#C83E37)، نشان چهار دایره‌ی هندسی (●●) و متادیتای Format: CD/CD-R // 3.5mm DC 5V.
- رنگ‌های نمونه: #D99B26 #C83E37 #242729
- **افکت‌ها (`themes/retrodisc-g2.fx.css`)**:
  - `rdisc-blueprint-grid` (ambient): شبکه‌ی مهندسی CAD، دیسک‌من دو‌نیمه (Wireframe / Ochre) و نمایشگر LCD سبز-کهربایی
  - `rdisc-ochre-Validation` (hover): نور موضعی طلایی-خردلی صنعتی دنبال‌کننده‌ی موس
  - `rdisc-click` (click): فشار مکانیکی دکمه‌های کپسولی قرمز آنودایزشده (#C83E37)
  - `rdisc-tab` (transition): تعویض ترک دیسک‌من در جابه‌جایی تب

### 33 — نئون لیزری استارلایت (1984 Starlight Express Laser)

- طراحی رترو-فیوچریستی بر اساس پوستر موزیکال Starlight Express سال ۱۹۸۴ با گرادینت آسمان شب پرستاره (#050914) تا افق نئونی آبی-فیروزه‌ای (#1E88E5 -> #5CE1FF).
- ستاره‌ی دنباله‌دار سه‌بعدی با لایه‌های وایرفریم نئونی سرخابی (#FF3B6B)، بنفش (#A855F7) و فیروزه‌ای (#5CE1FF) و پرتو لیزر مورب.
- تایپوگرافی ایتالیک سرعت با سایه‌ی سه‌بعدی سرخابی-نئونی و دکمه‌های گرادینت لیزری.
- رنگ‌های نمونه: #5CE1FF #FF3B6B #07122B
- **افکت‌ها (`themes/starlight-express.fx.css`)**:
  - `starlight-horizon-pulse` (ambient): ستاره‌ی دنباله‌دار سه‌بعدی نئونی با پرتو لیزر مورب و درخشش افق آبی
  - `starlight-laser-glow` (hover): هاله‌ی نئون فیروزه‌ای و سرخابی دنبال‌کننده‌ی موس
  - `starlight-click` (click): فلش سرعت ایتالیک (Skew Speed Flash) و موج ستاره‌ای
  - `starlight-tab` (transition): ورود سریع سینث‌ویو با زاویه‌ی سرعت در تغییر تب

### 34 — فایل متنی دموسین (NFO) (ACiD .NFO Demoscene 2000)

- بازسازی وفادار فایل‌های متنی .NFO گروه ACiD Productions سال ۲۰۰۰ (acid-90.zip) روی زمینه‌ی مشکی VGA (#050505) با کادرهای جدولی CP437 نقره‌ای و سفید.
- هدر بالایی ACiD Productions(tm) // [ acid-90.zip ] و نمایش شماره‌تلفن داخل کادر براکت‌دار [ 0912 345 6789 ].
- دکمه‌ها و تب‌های معکوس سفید روی مشکی به سبک منوهای متنی DOS و NFO Viewer.
- رنگ‌های نمونه: #EFEFEF #8E8E8E #050505
- **افکت‌ها (`themes/acid-nfo-scene.fx.css`)**:
  - `nfo-ascii-glint` (ambient): کادرهای جدولی CP437 و هدر پیکسلی ACiD Productions [acid-90.zip]
  - `nfo-cursor-glow` (hover): هاله‌ی نقره‌ای متن‌مد VGA دنبال‌کننده‌ی موس
  - `nfo-click` (click): فلاش معکوس جدول DOS در هنگام کلیک
  - `nfo-tab` (transition): بازنویسی خط‌به‌خط فایل NFO در جابه‌جایی تب

### 35 — کلاژ حروف بریده و پین‌برد (Ransom Cutout & Pinboard)

- ترکیب دو پوستر PORTFOLIO با سبک حروف بریده‌شده‌ی مجله‌ای (Ransom-Note Cutout) و تخته‌ی بتن استودیویی زیر نور اسپات‌لایت.
- برگه‌های یادداشت زرد Post-It (#FEF08A) با پین‌های کروی مشکی سه‌بعدی در بالای کارت‌ها، کاغذ شطرنجی و نوار چسب کاغذی زرد روی کارت فعال.
- تب‌های چهارگانه‌ی چرخیده با رنگ‌های متمایز (زرد، مرجانی، آبی آسمانی و نعنایی) و کادرهای خط‌خطی سفید.
- رنگ‌های نمونه: #FACC15 #F43F5E #232529
- **افکت‌ها (`themes/ransom-cutout-zine.fx.css`)**:
  - `cutout-spotlight` (ambient): نور اسپات‌لایت استودیویی روی تخته بتن، برگه‌های Post-It زرد و پین‌های مشکی سه‌بعدی
  - `cutout-hover-tilt` (hover): چرخش ملایم بریده‌های کاغذ رنگی و برچسب‌های چسب کاغذی
  - `cutout-click` (click): ضربه‌ی پین روی کاغذ شطرنجی و موج رنگ زرد
  - `cutout-tab` (transition): جایگذاری تکه‌کاغذهای بریده‌شده در تغییر تب

### 36 — کارتون آبی اینترنت امن (Remember Kids! Blue Halftone)

- طراحی بر اساس پوستر کارتونی REMEMBER KIDS! // Let's Practice Web Safety! روی زمینه‌ی سفید با نقطه‌های هاف‌تون آبی آسمانی (Ben-Day Dots).
- کارت فعال الهام‌گرفته از مانیتور CRT کارتونی با صفحه‌ی آبی روشن، خطوط دورگیری ضخیم آبی (#0066CC) و سایه‌های سخت آبی آسمانی (#64BDF8).
- دکمه‌ها و تب‌های کپسولی پفکی آبی (#0084F4) با خوانایی بسیار بالا.
- رنگ‌های نمونه: #0084F4 #64BDF8 #FFFFFF
- **افکت‌ها (`themes/cyber-kawaii-safety.fx.css`)**:
  - `kawaii-halftone-pop` (ambient): نقطه‌های هاف‌تون آبی آسمانی (Ben-Day Dots) و استیکرهای سفید دورخط‌دار
  - `kawaii-bubble-glow` (hover): درخشش آبی کارتونی دنبال‌کننده‌ی موس
  - `kawaii-click` (click): فشار فنری دکمه‌های پفکی آبی (REMEMBER KIDS!)
  - `kawaii-tab` (transition): جهش کارتونی نرم در تغییر تب

### 37 — مکینتاش قرمز کمیک‌بوکی (Comic Sans & Classic Mac Pop)

- بازسازی پوستر Comic Sans is not outdated // GRAPHIC DESIGN روی زمینه‌ی قرمز هاف‌تون کمیک‌بوکی (#DF3B30) با کارت‌های کرم کلاسیک (#F7E8D8) و خطوط دورگیری مشکی ضخیم (#1C1917).
- تبدیل بخش شماره‌تلفن به صفحه‌نمایش تاریک Macintosh Classic II (#1C1917) با اعداد قرمز کمیک (#F24C3D) و کادر دوبل.
- نوار تب و بنر کپسولی زغالی (#1C1917) همراه با دکمه‌های کمیک سه‌بعدی.
- رنگ‌های نمونه: #DF3B30 #F7E8D8 #1C1917
- **افکت‌ها (`themes/comic-mac-pop.fx.css`)**:
  - `comicmac-halftone` (ambient): پوستر قرمز هاف‌تون کمیک‌بوکی با مانیتور Macintosh Classic II و فونت کمیک
  - `comicmac-cursor-glow` (hover): هاله‌ی کرم-قرمز پاپ‌آرت دنبال‌کننده‌ی موس
  - `comicmac-click` (click): ضربه‌ی کمیک‌بوکی با سایه‌ی سخت مشکی (#1C1917)
  - `comicmac-tab` (transition): ورق‌خوردن پوستر کمیک در جابه‌جایی تب

### 38 — گیم‌بوی بنفش شفاف (Atomic Purple GameBoy Color)

- طراحی نوستالژیک به سبک کنسول دستی GameBoy Color مدل Atomic Purple (پلاستیک بنفش نیمه‌شفاف که مسیرهای طلایی برد مدار چاپی PCB از زیر آن دیده می‌شود).
- نمایشگر LCD سبز-زیتونی (#9BBC0F) با قاب محافظ خاکستری تیره دور شماره‌تلفن و نشانگر ● BATTERY در بالای صفحه.
- دکمه‌های کپسولی سرخابی (A) و فیروزه‌ای (B) با سایه‌ی سه‌بعدی.
- رنگ‌های نمونه: #A855F7 #FACC15 #2B144D
- **افکت‌ها (`themes/atomic-purple-gbc.fx.css`)**:
  - `gbc-pcb-traces` (ambient): مدار چاپی طلایی (Gold PCB Traces) قابل‌مشاهده از زیر قاب پلاستیکی بنفش شفاف
  - `gbc-glow` (hover): بازتاب نور روی قاب شفاف Atomic Purple دنبال‌کننده‌ی موس
  - `gbc-click` (click): فشار مکانیکی دکمه‌های گرد سرخابی/فیروزه‌ای A و B گیم‌بوی
  - `gbc-tab` (transition): تعویض کارتریج گیم‌بوی کالر در جابه‌جایی تب

### 39 — آمپلی‌فایر نقره‌ای-گردویی (1970s Silver & Walnut Hi-Fi)

- طراحی صنعتی به سبک سیستم‌های صوتی Hi-Fi دهه‌ی ۷۰ (Marantz / Pioneer) با پنل آلومینیوم برس‌خورده‌ی نقره‌ای-شامپاینی و قاب کناری چوب گردو (#5C3317).
- پنجره‌ی عقربه‌ی آنالوگ نورانی (VU Meter) با نور آبی-کهربایی و عقربه‌ی قرمز در پس‌زمینه‌ی شماره‌تلفن.
- دکمه‌های فلزی تراش‌خورده با هایلایت براق و کنتراست عالی.
- رنگ‌های نمونه: #E6E2D6 #38BDF8 #5C3317
- **افکت‌ها (`themes/marantz-hifi-70s.fx.css`)**:
  - `hifi-vu-needle` (ambient): پنل آلومینیوم برس‌خورده با قاب چوب گردو و پنجره‌ی عقربه‌ی آنالوگ VU Meter آبی-کهربایی
  - `hifi-sheen` (hover): بازتاب گرم لامپ‌های آنالوگ دنبال‌کننده‌ی موس
  - `hifi-click` (click): کلیک مکانیکی کلیدهای فلزی آمپلی‌فایر دهه‌ی ۷۰
  - `hifi-tab` (transition): تغییر موج رادیویی آنالوگ در جابه‌جایی تب

### 40 — پاسپورت دیپلماتیک طلاکوب (Grand Budapest Passport)

- ترکیب جلد چرمی زرشکی سلطنتی (#4A1224) و کادرهای طلاکوب (#D4AF37) با کارت‌های کاغذ امنیتی کرم (#FCF7EE) دارای خطوط موج‌دار Guilloché.
- کادر سریال ویزای دیپلماتیک با خطوط نقطه‌چین قرمز (#9E2A2B) دور شماره‌تلفن و بنر REPUBLIC OF ZUBROWKA // DIPLOMATIC PASSPORT.
- تایپوگرافی کلاسیک سریف و دکمه‌های زرشکی-طلایی.
- رنگ‌های نمونه: #5B162C #D4AF37 #FCF7EE
- **افکت‌ها (`themes/grand-budapest-passport.fx.css`)**:
  - `passport-guilloche` (ambient): کاغذ امنیتی گیلوشه (Guilloché) با جلد زرشکی طلاکوب و کادرهای ویزای دیپلماتیک
  - `passport-gold-glow` (hover): درخشش طلاکوب سلطنتی دنبال‌کننده‌ی موس
  - `passport-click` (click): ضربه‌ی مهر فرودگاهی روی کاغذ پاسپورت
  - `passport-tab` (transition): ورق‌زدن دفترچه‌ی پاسپورت در تغییر تب

### 41 — فویل هولوگرافیک رنگین‌کمان (Iridescent Chrome Holo Foil)

- کارت‌های فویل هولوگرافیک منشوری (طیف یاسی، آبی یخی، نعنایی و صورتی #F3E7FF → #D6EAFF → #D8FFF8 → #FFE2F5) روی پس‌زمینه‌ی مشکی مات (#07080D).
- نمایشگر مشکی-ابسیدین با کادر دوبل سفید و سایه‌ی منشوری دوگانه برای شماره‌تلفن.
- متون مشکی پرکنتراست (۱۶:۱) روی سطوح هولوگرافیک براق.
- رنگ‌های نمونه: #8EC5FC #FBC2EB #07080D
- **افکت‌ها (`themes/iridescent-holo-foil.fx.css`)**:
  - `holo-prismatic-shift` (ambient): کارت‌های فویل هولوگرافیک منشوری (یاسی، آبی یخی، نعنایی و صورتی) روی زمینه‌ی مشکی مات
  - `holo-cursor-prism` (hover): شکست نور منشوری دنبال‌کننده‌ی موس
  - `holo-click` (click): درخشش برچسب هولوگرام امنیتی در هنگام کلیک
  - `holo-tab` (transition): لغزش فویل رنگین‌کمانی در تغییر تب

### 42 — آرکید نئونی توکیو (Shinjuku Sega Arcade Lightbox)

- الهام‌گرفته از تابلوهای لایت‌باکس و دستگاه‌های آرکید شینجوکو توکیو (新宿ゲーム // INSERT COIN 100 YEN) روی زمینه‌ی سرمه‌ای-مشکی شب.
- نمایشگر امتیاز آرکید (High-Score CRT) با اعداد زرد نئونی (#FDE047) و سایه‌ی سرخابی (#FF2E63).
- دکمه‌های آرکید Sanwa در سه رنگ فیروزه‌ای (#08D9D6)، سرخابی (#FF2E63) و زرد سکه‌خور (#FDE047).
- رنگ‌های نمونه: #FF2E63 #08D9D6 #FDE047
- **افکت‌ها (`themes/shinjuku-arcade-neon.fx.css`)**:
  - `arcade-lightbox-glow` (ambient): تابلوهای نئون شینجوکو توکیو (INSERT COIN // 100 YEN) با نور سرخابی و فیروزه‌ای
  - `arcade-neon-cursor` (hover): هاله‌ی نئون آرکید دنبال‌کننده‌ی موس
  - `arcade-click` (click): فشار دکمه‌های آرکید Sanwa با صدای بصری نئونی
  - `arcade-tab` (transition): تغییر مرحله‌ی آرکید (1UP STAGE) در جابه‌جایی تب

## قرارداد توکن‌ها (CSS variables)

هر تم کامل باید این متغیرها را تعریف کند (فهرست از `themes/win-98.css`):

`--accent-crimson`, `--accent-cyan`, `--accent-emerald`, `--accent-purple`, `--accent-yellow`, `--active-card-shadow`, `--active-card-topline-display`, `--backdrop-blur`, `--bg-card`, `--bg-card-hover`, `--bg-deep`, `--bg-input`, `--bg-modal`, `--bg-overlay`, `--bg-page-gradient`, `--border-card-top`, `--border-chip`, `--border-color`, `--border-glow`, `--border-input`, `--border-modal`, `--border-subchip`, `--border-subtle`, `--border-width`, `--btn-ai-scan-bg`, `--btn-ai-scan-border`, `--btn-ai-scan-color`, `--btn-excel-bg`, `--btn-excel-border`, `--btn-excel-color`, `--btn-gofullpage-bg`, `--btn-gofullpage-border`, `--btn-gofullpage-color`, `--btn-inject-bg`, `--btn-inject-border`, `--btn-inject-color`, `--btn-scan-mass-bg`, `--btn-scan-mass-border`, `--btn-scan-mass-color`, `--btn-shadow`, `--btn-shadow-hover`, `--btn-transform-active`, `--btn-transform-hover`, `--btn-upload-bg`, `--btn-upload-border`, `--btn-upload-color`, `--card-shadow`, `--card-shadow-hover`, `--excel-banner-bg`, `--excel-banner-border`, `--excel-banner-color`, `--flare-display`, `--font-family`, `--font-mono`, `--glow-dot`, `--glow-pill`, `--modal-shadow`, `--primary-light`, `--primary-neon`, `--radius-lg`, `--radius-md`, `--radius-pill`, `--radius-sm`, `--radius-xs`, `--scrollbar-border`, `--scrollbar-radius`, `--scrollbar-thumb`, `--scrollbar-thumb-hover`, `--scrollbar-track`, `--scrollbar-width`, `--semantic-danger`, `--semantic-success`, `--semantic-warning`, `--subchip-bg`, `--switcher-bg`, `--switcher-border`, `--tabs-bar-bg`, `--text-brand`, `--text-brand-accent`, `--text-input`, `--text-muted`, `--text-on-accent`, `--text-phone`, `--text-primary`, `--text-secondary`, `--v-code-box-bg`, `--v-code-box-border`, `--v-code-color`, `--v-pill-meta-bg`, `--v-pill-meta-color`
