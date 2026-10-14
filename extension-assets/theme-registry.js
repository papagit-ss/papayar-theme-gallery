/**
 * theme-registry.js - Central Theme Registry for Papa Yar Chrome Extension
 *
 * Each theme consists of:
 * - id: String matching the data-theme attribute on <html>
 * - nameFa: Persian display label (used in the UI picker)
 * - nameEn: English identifier/label
 * - swatches: Array of 3 key colors used to render the swatch strip
 * - effects: Array of { id, nameFa, trigger } (trigger: 'ambient' | 'hover' | 'click' | 'transition')
 */

const THEMES = [
  {
    id: 'neon',
    nameFa: 'نئون زمردی',
    nameEn: 'Emerald Neon',
    swatches: ['#10b981', '#38bdf8', '#0a0f15'],
    effects: [
      { id: 'neon-pulse-border', nameFa: 'درخشش نبض‌دار لبه‌ی کارت فعال', trigger: 'ambient' },
      { id: 'neon-title-flicker', nameFa: 'سوسوی نئون روی عنوان Papa Yar', trigger: 'ambient' },
      { id: 'neon-beam-sweep', nameFa: 'جاروی نور روی دکمه در هاور', trigger: 'hover' },
      { id: 'neon-tab-glide', nameFa: 'ظهور نوری هنگام جابه‌جایی تب', trigger: 'transition' }
    ]
  },
  {
    id: 'neo-brutal',
    nameFa: 'نئوبروتالیسم رنگی',
    nameEn: 'Neo-Brutalism',
    swatches: ['#A3E635', '#FF6B6B', '#F2EBD9'],
    effects: [
      { id: 'brutal-sticker-wobble', nameFa: 'لرزش استیکری کارت در هاور', trigger: 'hover' },
      { id: 'brutal-marquee', nameFa: 'نوار خبری متحرک (Marquee) باریک', trigger: 'ambient' },
      { id: 'brutal-confetti', nameFa: 'انفجار مربع‌های رنگی (Confetti) در کلیک', trigger: 'click' },
      { id: 'brutal-tab-snap', nameFa: 'پرش پله‌ای در تعویض تب', trigger: 'transition' }
    ]
  },
  {
    id: 'editorial',
    nameFa: 'مجله‌ای کلاسیک (پیش‌فرض)',
    nameEn: 'Editorial Zine (Default)',
    swatches: ['#0A0A0A', '#FF2D1A', '#FFD60A'],
    effects: [
      { id: 'editorial-ink-underline', nameFa: 'کشیده شدن خط جوهر زیر عنوان در هاور', trigger: 'hover' },
      { id: 'editorial-page-flip', nameFa: 'ورق خوردن صفحه‌ی مجله هنگام تغییر تب', trigger: 'transition' },
      { id: 'editorial-newsprint-grain', nameFa: 'دانه‌ی کاغذ روزنامه در پس‌زمینه', trigger: 'ambient' }
    ]
  },
  {
    id: 'neumorph',
    nameFa: 'نئومورفیک برجسته',
    nameEn: 'Soft Neumorphic',
    swatches: ['#E8B02B', '#3B82F6', '#E6E8EE'],
    effects: [
      { id: 'neumorph-spring-press', nameFa: 'فشرده شدن نرم دکمه با فنر', trigger: 'click' },
      { id: 'neumorph-light-follow', nameFa: 'بازتاب نور نرم دنبال موس', trigger: 'ambient' },
      { id: 'neumorph-switch-glide', nameFa: 'لغزش دستگیره‌ی تب با درخشش داخلی', trigger: 'transition' }
    ]
  },
  {
    id: 'pixel-spec',
    nameFa: 'پیکسل آرکید تاریک',
    nameEn: 'Dark Pixel Spec',
    swatches: ['#00FF00', '#F4F0E6', '#111111'],
    effects: [
      { id: 'pixel-tab-dissolve', nameFa: 'محو شدن پیکسلی پله‌ای بین تب‌ها', trigger: 'transition' },
      { id: 'pixel-cursor-blink', nameFa: 'نشانگر چشمک‌زن فنی کنار عنوان', trigger: 'ambient' },
      { id: 'pixel-level-up', nameFa: 'انفجار پیکسلی «LEVEL UP» در کلیک', trigger: 'click' }
    ]
  },
  {
    id: 'pixel-os-blue',
    nameFa: 'سیستم‌عامل پیکسلی',
    nameEn: 'Pixel OS Blue',
    swatches: ['#0078D7', '#F0F0F0', '#000000'],
    effects: [
      { id: 'os-window-scale', nameFa: 'باز شدن پنجره از نوار عنوان (Scale)', trigger: 'transition' },
      { id: 'os-block-progress', nameFa: 'نوار پیشرفت بلوکی سیستم‌عامل', trigger: 'ambient' },
      { id: 'os-error-shake', nameFa: 'تکان خوردن پنجره‌ی خطا در کلیک حذف', trigger: 'click' }
    ]
  },
  {
    id: 'pastel-y2k',
    nameFa: 'پاستل یاسی Y2K',
    nameEn: 'Pastel Y2K',
    swatches: ['#62B5A9', '#FBE3CC', '#3A2323'],
    effects: [
      { id: 'y2k-star-twinkle', nameFa: 'چشمک ستاره‌ها و جرقه‌ها در هاور', trigger: 'hover' },
      { id: 'y2k-cursor-stars', nameFa: 'ردِ ستاره‌ای دنبال موس', trigger: 'ambient' },
      { id: 'y2k-glitter-shine', nameFa: 'درخشش گلیتری روی دکمه‌ی اصلی', trigger: 'hover' },
      { id: 'y2k-tab-pop', nameFa: 'باز شدن پاستلی پنجره در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'win-xp',
    nameFa: 'ویندوز XP کلاسیک',
    nameEn: 'Windows XP Luna',
    swatches: ['#0055EA', '#388E3C', '#ECE9D8'],
    effects: [
      { id: 'xp-green-progress', nameFa: 'نوار پیشرفت سبز با بلوک‌های لغزان', trigger: 'ambient' },
      { id: 'xp-balloon-toast', nameFa: 'بالن اعلان که با انیمیشن بالا می‌آید', trigger: 'transition' },
      { id: 'xp-green-shine', nameFa: 'درخشش براق دکمه‌ی سبز Start', trigger: 'hover' }
    ]
  },
  {
    id: 'dieter-rams',
    nameFa: 'صنعتی براون (دیتر رامز)',
    nameEn: 'Braun Dieter Rams',
    swatches: ['#FF5500', '#2B2B2B', '#D5D1C8'],
    effects: [
      { id: 'rams-led-pulse', nameFa: 'چراغ LED نبض‌دار صنعتی', trigger: 'ambient' },
      { id: 'rams-digit-flip', nameFa: 'پشت‌ورو شدن ارقام (Flip) در نمایشگر', trigger: 'hover' },
      { id: 'rams-mech-press', nameFa: 'فشرده شدن مکانیکی دکمه با سایه‌ی دقیق', trigger: 'click' }
    ]
  },
  {
    id: 'bauhaus',
    nameFa: 'هندسی باوهاوس',
    nameEn: 'Bauhaus Geometric',
    swatches: ['#0A25C9', '#E63946', '#F4EFE6'],
    effects: [
      { id: 'bauhaus-geo-rotate', nameFa: 'چرخش آهسته‌ی اشکال هندسی پس‌زمینه', trigger: 'ambient' },
      { id: 'bauhaus-block-slide', nameFa: 'لغزش بلوک‌های رنگی بین تب‌ها', trigger: 'transition' },
      { id: 'bauhaus-shape-morph', nameFa: 'تبدیل دایره↔مربع در هاور', trigger: 'hover' }
    ]
  },
  {
    id: 'win-98',
    nameFa: 'ویندوز ۹۸ رترو',
    nameEn: 'Windows 98 Classic',
    swatches: ['#008080', '#C0C0C0', '#000080'],
    effects: [
      { id: 'win98-wireframe-open', nameFa: 'باز شدن پنجره با قاب سیمی پله‌ای', trigger: 'transition' },
      { id: 'win98-focus-rect', nameFa: 'مستطیل نقطه‌چین کلاسیک روی فوکوس و هاور', trigger: 'hover' },
      { id: 'win98-stepped-progress', nameFa: 'پیشرفت پله‌ای بلوکی سرمه‌ای', trigger: 'ambient' }
    ]
  },
  {
    id: 'cyber-gloss',
    nameFa: 'کروم سایبری براق',
    nameEn: 'Cyber Gloss Chrome',
    swatches: ['#00E5FF', '#FF1A35', '#06090E'],
    effects: [
      { id: 'cyber-chrome-sweep', nameFa: 'جاروی بازتاب کروم روی دکمه‌ها', trigger: 'hover' },
      { id: 'cyber-rgb-glitch', nameFa: 'گلیچ با جدا شدن کانال RGB در هاور', trigger: 'hover' },
      { id: 'cyber-hud-brackets', nameFa: 'براکت‌های HUD در گوشه‌ی کارت فعال', trigger: 'ambient' }
    ]
  },
    {
    id: 'crt-terminal',
    nameFa: 'ترمینال کهربایی ۱۹۸۷',
    nameEn: '1987 GRiD & CRT Terminal',
    swatches: ['#FFB81C', '#33FF66', '#110A00'],
    effects: [
      { id: 'grid87-scanline', nameFa: 'اسکن‌لاین نمایشگر الکترولومینسنت کهربایی (GRiD 1987) و نشانگر چشمک‌زن ▮', trigger: 'ambient' },
      { id: 'grid87-cursor-box', nameFa: 'هاله‌ی فسفری کهربایی دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'grid87-invert-flash', nameFa: 'فلاش معکوس نوار انتخاب کهربایی (Bubble Memory Read/Write)', trigger: 'click' },
      { id: 'grid87-redraw', nameFa: 'بازنویسی پله‌ای صفحه به سبک BIOS سال ۱۹۸۷', trigger: 'transition' }
    ]
  },
  {
    id: 'notebook-sketch',
    nameFa: 'دفترچه مشق خط‌دار',
    nameEn: 'Notebook Sketch',
    swatches: ['#1E4BD1', '#FFDF4D', '#F8F3E3'],
    effects: [
      { id: 'sketch-pen-draw', nameFa: 'کشیده شدن خط دور کارت و تکان نوار چسب', trigger: 'ambient' },
      { id: 'sketch-title-scribble', nameFa: 'خط‌خطی خودکاری زیر عنوان در هاور', trigger: 'hover' },
      { id: 'sketch-check-eraser', nameFa: 'تیک دست‌کشیده و پاک‌کن هنگام حذف', trigger: 'click' },
      { id: 'sketch-page-turn', nameFa: 'ورق خوردن دفتر از سمت فنر هنگام تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'vhs-tape',
    nameFa: 'دوربین هندیکم VHS',
    nameEn: '1992 VHS Camcorder OSD',
    swatches: ['#FF2A85', '#00F0FF', '#14111A'],
    effects: [
      { id: 'vhs-tracking-bar', nameFa: 'عبور نوار گلیچ Tracking ویدئویی', trigger: 'ambient' },
      { id: 'vhs-rec-indicator', nameFa: 'نشانگر چشمک‌زن «● REC» با تایم‌کد در هدر', trigger: 'ambient' },
      { id: 'vhs-chromatic-hover', nameFa: 'جدا شدن رنگ (Chromatic Aberration) در هاور', trigger: 'hover' },
      { id: 'vhs-frame-jump', nameFa: 'پرش فریم مغناطیسی در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'pop-art',
    nameFa: 'کمیک پاپ‌آرت',
    nameEn: 'Comic Pop Art',
    swatches: ['#FFE600', '#FF1E27', '#0099FF'],
    effects: [
      { id: 'popart-pow-burst', nameFa: 'انفجار ستاره‌ای «POW!» کمیک در کلیک', trigger: 'click' },
      { id: 'popart-halftone-shift', nameFa: 'جابه‌جا شدن نقطه‌های هالف‌تون (Ben-Day) در هاور', trigger: 'hover' },
      { id: 'popart-speech-bubble', nameFa: 'ابر حرف کمیک (Speech Bubble) روی دکمه', trigger: 'hover' },
      { id: 'popart-panel-snap', nameFa: 'ورق خوردن پنل کمیک در تعویض تب', trigger: 'transition' }
    ]
  },
  {
    id: 'retro-catalog',
    nameFa: 'مجله گیم‌بوی دهه ۹۰',
    nameEn: '90s GameBoy Catalog',
    swatches: ['#222116', '#6B6B53', '#D6D5BD'],
    effects: [
      { id: 'retro-dither-scroll', nameFa: 'نوار شطرنجی پیکسلی (Dither) و نشانگر کاتالوگ', trigger: 'ambient' },
      { id: 'retro-cursor-arrow', nameFa: 'فلش مثلثی پیکسلی «◀» کنار گزینه‌ها در هاور', trigger: 'hover' },
      { id: 'retro-pixel-shards', nameFa: 'انفجار ۸ جهته ذرات پیکسلی (Pixel Shards) و فشردگی کلید کنسول', trigger: 'click' },
      { id: 'retro-cartridge-boot', nameFa: 'جا رفتن کارتریج و رفرش پله‌ای در تعویض تب', trigger: 'transition' }
    ]
  },
  {
    id: 'mac-1bit',
    nameFa: 'مکینتاش کلاسیک ۱-بیت',
    nameEn: 'Macintosh 1-Bit OS',
    swatches: ['#000000', '#FFFFFF', '#000000'],
    effects: [
      { id: 'mac-copy-progress', nameFa: 'نوار پیشرفت ۱-بیت (COPYING) و کادر انتخاب MacPaint', trigger: 'ambient' },
      { id: 'mac-invert-hover', nameFa: 'وارونه‌سازی فوری ۱-بیت (سیاه↔سفید) در هاور', trigger: 'hover' },
      { id: 'mac-menu-strobe', nameFa: 'چشمک ۳ مرحله‌ای سیاه‌وسفید دکمه‌ی مکینتاش (System 7 Strobe) و کادر کمند', trigger: 'click' },
      { id: 'mac-window-zoom', nameFa: 'باز شدن کادر نقطه‌چین پله‌ای مکینتاش در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'nokia-lcd',
    nameFa: 'ال‌سی‌دی پیکسلی نوکیا',
    nameEn: 'Nokia 3310 Pixel LCD',
    swatches: ['#88A255', '#0B1307', '#98B166'],
    effects: [
      { id: 'lcd-segment-pulse', nameFa: 'نبض سگمنت‌های خاموش ساعت (88:88) و اکولایزر ماتریسی', trigger: 'ambient' },
      { id: 'lcd-playlist-invert', nameFa: 'هایلایت معکوس نواری پلی‌لیست نوکیا و شبح کریستال مایع', trigger: 'hover' },
      { id: 'lcd-pressure-wave', nameFa: 'موج فشار انگشت روی شیشه‌ی کریستال مایع (LCD Pressure Rings) و بک‌لایت سبز', trigger: 'click' },
      { id: 'lcd-crystal-fade', nameFa: 'تغییر فاز کریستال مایع (LCD Slow-Response) در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'liquid-glass',
    nameFa: 'لیکویید گلس اپل',
    nameEn: 'Apple Liquid Glass',
    swatches: ['#4F46E5', '#EEF0FF', '#F7F8FC'],
    effects: [
      { id: 'apple-glass-caustics', nameFa: 'شکست نور اپتیکال SVG (Snell Refraction) و گوی‌های نوری متحرک پشت شیشه', trigger: 'ambient' },
      { id: 'apple-glass-meniscus', nameFa: 'بازتاب منشوری لبه‌ی شیشه (Chromatic Dispersion) هماهنگ با موس', trigger: 'hover' },
      { id: 'apple-glass-droplet', nameFa: 'فشردگی الاستیک قطره‌ی شیشه‌ای و موج شکست نور منشوری', trigger: 'click' },
      { id: 'apple-glass-glide', nameFa: 'حرکت و کشسانی قطره‌ی شیشه‌ای مایع (Liquid Droplet Morph) بین تب‌ها', trigger: 'transition' }
    ]
  },
  {
    id: 'cyberdeck-hud',
    nameFa: 'سایبردک سامورایی',
    nameEn: 'Samurai Cyberdeck HUD',
    swatches: ['#E04F4F', '#5CE1E6', '#140C14'],
    effects: [
      { id: 'cyberdeck-laser-scan', nameFa: 'خط لیزر اسکن تله‌متری و چرخش رادار تاکتیکی در پس‌زمینه', trigger: 'ambient' },
      { id: 'cyberdeck-reticle-lock', nameFa: 'نشانگر قفل هدف چهارگوش فیروزه‌ای (Tactical Reticle) دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'cyberdeck-breach-glitch', nameFa: 'برش گلیچ Breach Protocol (قرمز/فیروزه‌ای) و موج هدف‌گیری هشت‌ضلعی', trigger: 'click' },
      { id: 'cyberdeck-tab-decode', nameFa: 'رمزگشایی اسکن‌لاین افقی سایبردک در جابه‌جایی تب', trigger: 'transition' }
    ]
  },
  {
    id: 'call-me-y2k',
    nameFa: 'موبایل صورتی Y2K',
    nameEn: 'Y2K Pink Flip Phone',
    swatches: ['#FF4FA3', '#5CE65C', '#2A68C2'],
    effects: [
      { id: 'y2k-star-float', nameFa: 'شناور شدن ستاره‌های پیکسلی سبز (★) روی آسمان ابری Y2K', trigger: 'ambient' },
      { id: 'y2k-keypad-glow', nameFa: 'هاله‌ی درخشان سبز و صورتی Y2K دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'y2k-keypad-press', nameFa: 'فشار دکمه‌های بیضی کی‌پد نوکیا صورتی و انفجار ستاره‌ی پیکسلی', trigger: 'click' },
      { id: 'y2k-flip-open', nameFa: 'باز شدن فنری گوشی تاشو (Y2K Flip Bounce) در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'webcore-90s',
    nameFa: 'اینترنت نوستالژی ۹۰',
    nameEn: '90s Webcore Collage',
    swatches: ['#F468B6', '#F2EFE6', '#1F1E1C'],
    effects: [
      { id: 'webcore-sparkle', nameFa: 'درخشش ستاره‌های چهارپر (✦) و استیکرهای اکلیلی کلاژ', trigger: 'ambient' },
      { id: 'webcore-cursor-star', nameFa: 'نشانگر چهارگوش چرخان استیکری دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'webcore-keycap-clack', nameFa: 'فشار مکانیکی کلیدهای کیبورد بژ کلاسیک (Keycap Clack)', trigger: 'click' },
      { id: 'webcore-collage-snap', nameFa: 'برش کلاژ روزنامه‌ای (Scrapbook Snap) در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'dithertone-pro',
    nameFa: 'هاد بیومتریک و دیترینگ',
    nameEn: 'Biometric ECG & Dither HUD',
    swatches: ['#5CE1FF', '#2B95FF', '#04070D'],
    effects: [
      { id: 'dither-scan-beam', nameFa: 'پرتوی اسکن هاف‌تون آبی فسفری و نوسان موج سینوسی', trigger: 'ambient' },
      { id: 'dither-bayer-lens', nameFa: 'عدسی نقطه‌ای ماتریس Bayer 4x4 دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'dither-quantize-click', nameFa: 'فلش کوانتیزاسیون الگوریتمی و موج گره‌های مربعی (■)', trigger: 'click' },
      { id: 'dither-tab-reveal', nameFa: 'تغییر فاز ماتریس دیترینگ در جابه‌جایی تب', trigger: 'transition' }
    ]
  },
  {
    id: 'kawaii-paint-zine',
    nameFa: 'پینت و استیکر کاغذی',
    nameEn: 'Kawaii Paint & Sticky Zine',
    swatches: ['#F694C1', '#1434DC', '#F5E89B'],
    effects: [
      { id: 'paint-doodle-wiggle', nameFa: 'جنبش استاپ‌موشن دودل‌های پینت (🎱، ♥، ★) و برگه‌های یادداشت زرد', trigger: 'ambient' },
      { id: 'paint-brush-follower', nameFa: 'قلم‌موی رنگی MS-Paint دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'paint-keyboard-press', nameFa: 'فشار سه‌بعدی کیبورد صورتی-لاجوردی و پاشش رنگ پینت', trigger: 'click' },
      { id: 'paint-zine-tab', nameFa: 'ورق‌خوردن استاپ‌موشن زین کاغذی در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'paradise-botanical',
    nameFa: 'پوستر گل پرنده بهشتی',
    nameEn: 'Bird of Paradise Poster',
    swatches: ['#0D0D0D', '#D47A2C', '#F2F1EC'],
    effects: [
      { id: 'bot-sun-drift', nameFa: 'بازتاب نور مسی-طلایی گل پرنده‌ی بهشتی (Strelitzia Reginae) روی کاغذ آرشیوی', trigger: 'ambient' },
      { id: 'bot-clover-cursor', nameFa: 'نشانگر دایره‌ای مسی هماهنگ با موس', trigger: 'hover' },
      { id: 'bot-stamp-press', nameFa: 'ضربه‌ی مهر چاپی سیاه و حلقه‌ی جوهر ادیتوریال', trigger: 'click' },
      { id: 'bot-page-flip', nameFa: 'ورق‌خوردن پوستر گالری در جابه‌جایی تب', trigger: 'transition' }
    ]
  },
  {
    id: 'classified-cortex',
    nameFa: 'رادیولوژی و گلیچ صورتی',
    nameEn: 'Cortex X-Ray Glitch',
    swatches: ['#FF1E90', '#1D4ED8', '#F8F9FC'],
    effects: [
      { id: 'cortex-iris-spin', nameFa: 'چرخش حلقه‌ی عنبیه رادیولوژی و خطوط تراز لیزری سرخابی/کبالت', trigger: 'ambient' },
      { id: 'cortex-target-ring', nameFa: 'حلقه‌ی هدف‌گیری اپتیکال سرخابی دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'cortex-glitch-snap', nameFa: 'پرش گلیچ شطرنجی (Checkerboard Glitch) و شکست رنگی', trigger: 'click' },
      { id: 'cortex-tab-in', nameFa: 'اسلاید اسکن کلینیکی در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'frosted-balaclava',
    nameFa: 'شیشه مشجر و نگاتیو ۳۵',
    nameEn: 'Frosted Glass & 35mm Film',
    swatches: ['#E8ECF2', '#0B0D11', '#64748B'],
    effects: [
      { id: 'frost-glint-move', nameFa: 'حرکت نور تاریک‌خانه روی شیشه‌ی مشجر دانه‌دار (Pebble Frost)', trigger: 'ambient' },
      { id: 'frost-viewfinder', nameFa: 'کادر منظره‌یاب دوربین ۳۵ میلی‌متری دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'frost-shutter-click', nameFa: 'فلاش شاتر دوربین و موج کادر سفید نگاتیو', trigger: 'click' },
      { id: 'frost-tab-slide', nameFa: 'حرکت فریم کنتاکت‌شیت عکاسی در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'showdown-968',
    nameFa: 'کروم متالیک مسابقه ۹۶۸',
    nameEn: '968 Showdown Dark Chrome',
    swatches: ['#9CB6AF', '#D8E6E2', '#050707'],
    effects: [
      { id: 's968-sage-pulse', nameFa: 'درخشش متالیک سبز-نقره‌ای (Airbrushed Sage Chrome) و ستاره‌ی ۴ پر ✦', trigger: 'ambient' },
      { id: 's968-chrome-spotlight', nameFa: 'هاله‌ی جیوه‌ای کروم دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 's968-chrome-press', nameFa: 'فشار کپسول متالیک و موج ضربه‌ی زنجیر کروم', trigger: 'click' },
      { id: 's968-tab-glide', nameFa: 'ورود سریع پنل‌های میدان مسابقه‌ی VR در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'esperanza-econ',
    nameFa: 'پوستر خردلی آدام اسمیت',
    nameEn: 'Esperanza Ochre Engraving',
    swatches: ['#DE9B1E', '#141008', '#F4DFB0'],
    effects: [
      { id: 'econ-warm-drift', nameFa: 'سایه‌روشن گرم روی کاغذ خردلی پاره‌شده و هاشورهای حکاکی کلاسیک', trigger: 'ambient' },
      { id: 'econ-equilibrium-cursor', nameFa: 'نشانگر نقطه‌ی تعادل بازار (Equilibrium E) دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'econ-press', nameFa: 'فرورفتگی چاپ لترپرس روی کاغذ خردلی و مهر مرکب سیاه', trigger: 'click' },
      { id: 'econ-tab-unfold', nameFa: 'بازشدن لایه‌ی کاغذ پاره‌شده در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'commodore-64-jp',
    nameFa: 'کمودور ۶۴ ژاپنی',
    nameEn: '1982 Japanese Commodore 64',
    swatches: ['#E8CFA0', '#0A74B8', '#070808'],
    effects: [
      { id: 'c64-rainbow-sheen', nameFa: 'نوار رنگین‌کمان ۵ رنگ مورب (آبی، سبز، زرد، نارنجی، سرخابی) و لوگوی ۶۴', trigger: 'ambient' },
      { id: 'c64-keycap-glow', nameFa: 'بازتاب گرم روی کلیدهای مکانیکی کرم‌رنگ (Breadbin Keycaps)', trigger: 'hover' },
      { id: 'c64-key-press', nameFa: 'فشار فیزیکی کلیدهای کیبورد کمودور ۶۴ با صدای بصری', trigger: 'click' },
      { id: 'c64-tab-load', nameFa: 'بارگذاری پله‌ای ۸ بیتی (SAVE / LOAD / CONNECT / ENJOY) در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'retrodisc-g2',
    nameFa: 'دیسک‌من صنعتی و بلوپرینت',
    nameEn: 'G2 RetroDisc & CAD Blueprint',
    swatches: ['#D99B26', '#C83E37', '#242729'],
    effects: [
      { id: 'rdisc-blueprint-grid', nameFa: 'شبکه‌ی مهندسی CAD، دیسک‌من دو‌نیمه (Wireframe / Ochre) و نمایشگر LCD سبز-کهربایی', trigger: 'ambient' },
      { id: 'rdisc-ochre-Validation', nameFa: 'نور موضعی طلایی-خردلی صنعتی دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'rdisc-click', nameFa: 'فشار مکانیکی دکمه‌های کپسولی قرمز آنودایزشده (#C83E37)', trigger: 'click' },
      { id: 'rdisc-tab', nameFa: 'تعویض ترک دیسک‌من در جابه‌جایی تب', trigger: 'transition' }
    ]
  },
  {
    id: 'starlight-express',
    nameFa: 'نئون لیزری استارلایت',
    nameEn: '1984 Starlight Express Laser',
    swatches: ['#5CE1FF', '#FF3B6B', '#07122B'],
    effects: [
      { id: 'starlight-horizon-pulse', nameFa: 'ستاره‌ی دنباله‌دار سه‌بعدی نئونی با پرتو لیزر مورب و درخشش افق آبی', trigger: 'ambient' },
      { id: 'starlight-laser-glow', nameFa: 'هاله‌ی نئون فیروزه‌ای و سرخابی دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'starlight-click', nameFa: 'فلش سرعت ایتالیک (Skew Speed Flash) و موج ستاره‌ای', trigger: 'click' },
      { id: 'starlight-tab', nameFa: 'ورود سریع سینث‌ویو با زاویه‌ی سرعت در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'acid-nfo-scene',
    nameFa: 'فایل متنی دموسین (NFO)',
    nameEn: 'ACiD .NFO Demoscene 2000',
    swatches: ['#EFEFEF', '#8E8E8E', '#050505'],
    effects: [
      { id: 'nfo-ascii-glint', nameFa: 'کادرهای جدولی CP437 و هدر پیکسلی ACiD Productions [acid-90.zip]', trigger: 'ambient' },
      { id: 'nfo-cursor-glow', nameFa: 'هاله‌ی نقره‌ای متن‌مد VGA دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'nfo-click', nameFa: 'فلاش معکوس جدول DOS در هنگام کلیک', trigger: 'click' },
      { id: 'nfo-tab', nameFa: 'بازنویسی خط‌به‌خط فایل NFO در جابه‌جایی تب', trigger: 'transition' }
    ]
  },
  {
    id: 'ransom-cutout-zine',
    nameFa: 'کلاژ حروف بریده و پین‌برد',
    nameEn: 'Ransom Cutout & Pinboard',
    swatches: ['#FACC15', '#F43F5E', '#232529'],
    effects: [
      { id: 'cutout-spotlight', nameFa: 'نور اسپات‌لایت استودیویی روی تخته بتن، برگه‌های Post-It زرد و پین‌های مشکی سه‌بعدی', trigger: 'ambient' },
      { id: 'cutout-hover-tilt', nameFa: 'چرخش ملایم بریده‌های کاغذ رنگی و برچسب‌های چسب کاغذی', trigger: 'hover' },
      { id: 'cutout-click', nameFa: 'ضربه‌ی پین روی کاغذ شطرنجی و موج رنگ زرد', trigger: 'click' },
      { id: 'cutout-tab', nameFa: 'جایگذاری تکه‌کاغذهای بریده‌شده در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'cyber-kawaii-safety',
    nameFa: 'کارتون آبی اینترنت امن',
    nameEn: 'Remember Kids! Blue Halftone',
    swatches: ['#0084F4', '#64BDF8', '#FFFFFF'],
    effects: [
      { id: 'kawaii-halftone-pop', nameFa: 'نقطه‌های هاف‌تون آبی آسمانی (Ben-Day Dots) و استیکرهای سفید دورخط‌دار', trigger: 'ambient' },
      { id: 'kawaii-bubble-glow', nameFa: 'درخشش آبی کارتونی دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'kawaii-click', nameFa: 'فشار فنری دکمه‌های پفکی آبی (REMEMBER KIDS!)', trigger: 'click' },
      { id: 'kawaii-tab', nameFa: 'جهش کارتونی نرم در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'comic-mac-pop',
    nameFa: 'مکینتاش قرمز کمیک‌بوکی',
    nameEn: 'Comic Sans & Classic Mac Pop',
    swatches: ['#DF3B30', '#F7E8D8', '#1C1917'],
    effects: [
      { id: 'comicmac-halftone', nameFa: 'پوستر قرمز هاف‌تون کمیک‌بوکی با مانیتور Macintosh Classic II و فونت کمیک', trigger: 'ambient' },
      { id: 'comicmac-cursor-glow', nameFa: 'هاله‌ی کرم-قرمز پاپ‌آرت دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'comicmac-click', nameFa: 'ضربه‌ی کمیک‌بوکی با سایه‌ی سخت مشکی (#1C1917)', trigger: 'click' },
      { id: 'comicmac-tab', nameFa: 'ورق‌خوردن پوستر کمیک در جابه‌جایی تب', trigger: 'transition' }
    ]
  },
  {
    id: 'atomic-purple-gbc',
    nameFa: 'گیم‌بوی بنفش شفاف',
    nameEn: 'Atomic Purple GameBoy Color',
    swatches: ['#A855F7', '#FACC15', '#2B144D'],
    effects: [
      { id: 'gbc-pcb-traces', nameFa: 'مدار چاپی طلایی (Gold PCB Traces) قابل‌مشاهده از زیر قاب پلاستیکی بنفش شفاف', trigger: 'ambient' },
      { id: 'gbc-glow', nameFa: 'بازتاب نور روی قاب شفاف Atomic Purple دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'gbc-click', nameFa: 'فشار مکانیکی دکمه‌های گرد سرخابی/فیروزه‌ای A و B گیم‌بوی', trigger: 'click' },
      { id: 'gbc-tab', nameFa: 'تعویض کارتریج گیم‌بوی کالر در جابه‌جایی تب', trigger: 'transition' }
    ]
  },
  {
    id: 'marantz-hifi-70s',
    nameFa: 'آمپلی‌فایر نقره‌ای-گردویی',
    nameEn: '1970s Silver & Walnut Hi-Fi',
    swatches: ['#E6E2D6', '#38BDF8', '#5C3317'],
    effects: [
      { id: 'hifi-vu-needle', nameFa: 'پنل آلومینیوم برس‌خورده با قاب چوب گردو و پنجره‌ی عقربه‌ی آنالوگ VU Meter آبی-کهربایی', trigger: 'ambient' },
      { id: 'hifi-sheen', nameFa: 'بازتاب گرم لامپ‌های آنالوگ دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'hifi-click', nameFa: 'کلیک مکانیکی کلیدهای فلزی آمپلی‌فایر دهه‌ی ۷۰', trigger: 'click' },
      { id: 'hifi-tab', nameFa: 'تغییر موج رادیویی آنالوگ در جابه‌جایی تب', trigger: 'transition' }
    ]
  },
  {
    id: 'grand-budapest-passport',
    nameFa: 'پاسپورت دیپلماتیک طلاکوب',
    nameEn: 'Grand Budapest Passport',
    swatches: ['#5B162C', '#D4AF37', '#FCF7EE'],
    effects: [
      { id: 'passport-guilloche', nameFa: 'کاغذ امنیتی گیلوشه (Guilloché) با جلد زرشکی طلاکوب و کادرهای ویزای دیپلماتیک', trigger: 'ambient' },
      { id: 'passport-gold-glow', nameFa: 'درخشش طلاکوب سلطنتی دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'passport-click', nameFa: 'ضربه‌ی مهر فرودگاهی روی کاغذ پاسپورت', trigger: 'click' },
      { id: 'passport-tab', nameFa: 'ورق‌زدن دفترچه‌ی پاسپورت در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'iridescent-holo-foil',
    nameFa: 'فویل هولوگرافیک رنگین‌کمان',
    nameEn: 'Iridescent Chrome Holo Foil',
    swatches: ['#8EC5FC', '#FBC2EB', '#07080D'],
    effects: [
      { id: 'holo-prismatic-shift', nameFa: 'کارت‌های فویل هولوگرافیک منشوری (یاسی، آبی یخی، نعنایی و صورتی) روی زمینه‌ی مشکی مات', trigger: 'ambient' },
      { id: 'holo-cursor-prism', nameFa: 'شکست نور منشوری دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'holo-click', nameFa: 'درخشش برچسب هولوگرام امنیتی در هنگام کلیک', trigger: 'click' },
      { id: 'holo-tab', nameFa: 'لغزش فویل رنگین‌کمانی در تغییر تب', trigger: 'transition' }
    ]
  },
  {
    id: 'shinjuku-arcade-neon',
    nameFa: 'آرکید نئونی توکیو',
    nameEn: 'Shinjuku Sega Arcade Lightbox',
    swatches: ['#FF2E63', '#08D9D6', '#FDE047'],
    effects: [
      { id: 'arcade-lightbox-glow', nameFa: 'تابلوهای نئون شینجوکو توکیو (INSERT COIN // 100 YEN) با نور سرخابی و فیروزه‌ای', trigger: 'ambient' },
      { id: 'arcade-neon-cursor', nameFa: 'هاله‌ی نئون آرکید دنبال‌کننده‌ی موس', trigger: 'hover' },
      { id: 'arcade-click', nameFa: 'فشار دکمه‌های آرکید Sanwa با صدای بصری نئونی', trigger: 'click' },
      { id: 'arcade-tab', nameFa: 'تغییر مرحله‌ی آرکید (1UP STAGE) در جابه‌جایی تب', trigger: 'transition' }
    ]
  }
];

THEMES.forEach(theme => {
  theme.logo = `icons/generated/${theme.id}/logo.png`;
  theme.icons = Object.fromEntries([16, 32, 48, 128].map(size => [size, `icons/generated/${theme.id}/icon${size}.png`]));
  theme.css = ['neon', 'neo-brutal', 'editorial'].includes(theme.id) ? 'popup.css' : `themes/${theme.id}.css`;
  theme.fxCss = `themes/${theme.id}.fx.css`;
});

// Helper to find a theme by ID (with fallback to default 'neon')
function getThemeDefinition(themeId) {
  return THEMES.find(t => t.id === themeId) || THEMES.find(t => t.id === 'editorial') || THEMES[0];
}

// Make accessible to window/MV3 scope
if (typeof globalThis !== 'undefined') {
  globalThis.THEMES = THEMES;
  globalThis.getThemeDefinition = getThemeDefinition;
}
