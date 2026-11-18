// header.js — เมนูด้านบน (ใช้ร่วมกันทุกหน้า)
//
// วิธีใช้ในแต่ละหน้า HTML:
//   1) ใส่ <div id="site-header"></div> แล้วตามด้วย <script src="header.js"></script>
//   2) ใส่ data-nav ที่แท็ก <body> เพื่อไฮไลต์เมนูของหน้านั้น
//      เช่น <body data-nav="herbs">   ค่าที่ใช้ได้: herbs | food | economic | ornamental | rare
//
// ไฟล์นี้ทำงานได้แม้เปิดไฟล์ตรงๆ จากเครื่อง (file://) ไม่ต้องมีเซิร์ฟเวอร์

// ---------- 0) ซ่อนหน้าไว้ก่อน จนกว่าฟอนต์จะโหลดเสร็จ ----------
// (ใส่คลาส fonts-loading ที่นี่ แล้วส่วนที่ 3 ด้านล่างจะเอาออกเมื่อฟอนต์พร้อม)
try {
  if (!sessionStorage.getItem("fonts-ready")) {
    document.documentElement.classList.add("fonts-loading");
  }
} catch (e) {
  document.documentElement.classList.add("fonts-loading");
}

// ---------- 1) สร้างเมนูด้านบน ----------
(function () {
  const host = document.getElementById("site-header");
  if (!host) return;

  // ถ้าอยากแก้ลิงก์เมนู ให้แก้ href ในส่วนนี้ที่เดียว (มีผลทุกหน้า)
  host.innerHTML = `
    <header class="top-header">
      <div class="container header-inner">
        <a class="brand-logo" href="index.html">
          <svg class="logo-icon-svg" fill="none" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect fill="#4B8C49" height="64" rx="16" width="64" />
            <rect fill="#B3E678" height="8" width="8" x="28" y="14" />
            <rect fill="#88D455" height="8" width="8" x="20" y="22" />
            <rect fill="#88D455" height="8" width="8" x="36" y="22" />
            <rect fill="#589F3A" height="8" width="8" x="28" y="22" />
            <rect fill="#6FB743" height="8" width="8" x="12" y="30" />
            <rect fill="#6FB743" height="8" width="8" x="44" y="30" />
            <rect fill="#3D7527" height="8" width="8" x="28" y="30" />
            <rect fill="#6C4724" height="14" width="8" x="28" y="38" />
            <rect fill="#6C4724" height="8" width="8" x="20" y="44" />
            <rect fill="#6C4724" height="8" width="8" x="36" y="44" />
          </svg>
          <div class="brand-text">
            <span class="brand-title">Little Roots</span>
            <span class="brand-subtitle">Thai Botanical Garden</span>
          </div>
        </a>
        <nav class="header-nav">
          <a class="nav-pill" data-nav="herbs" href="herb.html">
            <span class="nav-pill-icon">🌿</span>
            <div class="nav-pill-text">
              <span class="nav-pill-title">สมุนไพร</span>
              <span class="nav-pill-sub">Medicinal</span>
            </div>
          </a>
          <a class="nav-pill" data-nav="food" href="edible.html">
            <span class="nav-pill-icon">🥕</span>
            <div class="nav-pill-text">
              <span class="nav-pill-title">พืชกินได้</span>
              <span class="nav-pill-sub">Edible</span>
            </div>
          </a>
          <a class="nav-pill" data-nav="economic" href="economic.html">
            <span class="nav-pill-icon">🌾</span>
            <div class="nav-pill-text">
              <span class="nav-pill-title">พืชเศรษฐกิจ</span>
              <span class="nav-pill-sub">Economic</span>
            </div>
          </a>
          <a class="nav-pill" data-nav="ornamental" href="index.html#ornamental">
            <span class="nav-pill-icon">🌸</span>
            <div class="nav-pill-text">
              <span class="nav-pill-title">ไม้ประดับ</span>
              <span class="nav-pill-sub">Ornamental</span>
            </div>
          </a>
          <a class="nav-pill" data-nav="rare" href="index.html#rare">
            <span class="nav-pill-icon">🌺</span>
            <div class="nav-pill-text">
              <span class="nav-pill-title">พืชถิ่นเดียว</span>
              <span class="nav-pill-sub">Endemic</span>
            </div>
          </a>
        </nav>
      </div>
    </header>
  `;

  // ไฮไลต์เมนูของหน้าปัจจุบัน จากค่า data-nav ที่แท็ก <body>
  const key = document.body.dataset.nav;
  const pill = key && host.querySelector('.nav-pill[data-nav="' + key + '"]');
  if (pill) pill.classList.add("active");
})();

// ---------- 2) เอฟเฟกต์เฟดตอนเปลี่ยนหน้า ----------
// (ทำงานคู่กับแอนิเมชัน page-in ใน style.css)
document.addEventListener("click", function (e) {
  const link = e.target.closest && e.target.closest("a[href]");
  if (!link || e.defaultPrevented || e.button !== 0) return;
  if (e.metaKey || e.ctrlKey || e.shiftKey || link.target === "_blank") return;

  // ลิงก์ที่ยังไม่มีหน้าปลายทาง (href="#") ให้ไม่ทำอะไร แทนที่จะเด้งขึ้นบนสุดของหน้า
  if (link.getAttribute("href") === "#") {
    e.preventDefault();
    return;
  }

  const url = new URL(link.href, location.href);
  const isOtherSite = url.protocol !== location.protocol;
  const isSamePage = url.pathname === location.pathname; // เช่น #herbs ในหน้าเดียวกัน
  if (isOtherSite || isSamePage) return; // ให้เบราว์เซอร์จัดการตามปกติ

  e.preventDefault();
  document.body.classList.add("leaving");
  setTimeout(function () {
    location.href = link.href;
  }, 150);
});

// กดปุ่ม Back แล้วกลับมาหน้านี้ ให้เอาสถานะ "กำลังเฟดออก" ออก
window.addEventListener("pageshow", function () {
  document.body.classList.remove("leaving");
});

// ---------- 3) รอให้ฟอนต์โหลดเสร็จก่อนค่อยโชว์หน้า ----------
// กันอาการตัวอักษรกระพริบตอนเปลี่ยนฟอนต์ (รอสูงสุด 1.2 วินาที
// และถ้าโหลดฟอนต์ไม่ได้ เช่น ออฟไลน์ ก็โชว์หน้าทันที)
(function () {
  const root = document.documentElement;
  let done = false;

  function reveal() {
    if (done) return;
    done = true;
    root.classList.remove("fonts-loading");
  }

  setTimeout(reveal, 1200);
  if (!document.fonts || !document.fonts.load) {
    reveal();
    return;
  }

  const sample = "กขabc";
  Promise.all([
    document.fonts.load("400 1rem Mali", sample),
    document.fonts.load("600 1rem Mali", sample),
    document.fonts.load("700 1rem Mali", sample),
    document.fonts.load("400 1rem Prompt", sample),
  ]).then(function () {
    try {
      sessionStorage.setItem("fonts-ready", "1");
    } catch (e) {}
    reveal();
  }, reveal);
})();
