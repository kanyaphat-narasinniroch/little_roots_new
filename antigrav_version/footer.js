// footer.js — ส่วนท้ายของเว็บ (ใช้ร่วมกันทุกหน้า)
//
// วิธีใช้ในแต่ละหน้า HTML:
//   ใส่ <div id="site-footer"></div> แล้วตามด้วย <script src="footer.js"></script>
//
// ถ้าอยากแก้ลิงก์หรือข้อความในส่วนท้าย ให้แก้ในไฟล์นี้ที่เดียว (มีผลทุกหน้า)
// ไฟล์นี้ทำงานได้แม้เปิดไฟล์ตรงๆ จากเครื่อง (file://) ไม่ต้องมีเซิร์ฟเวอร์

(function () {
  const host = document.getElementById("site-footer");
  if (!host) return;

  host.innerHTML = `
    <footer class="little-roots-footer">
      <div class="container">
        <div class="footer-top-strip">
          <div class="footer-branding">
            <svg fill="none" height="36" viewBox="0 0 64 64" width="36">
              <rect fill="#387B3E" height="64" rx="14" width="64" />
              <rect fill="#B3E678" height="8" width="8" x="28" y="16" />
              <rect fill="#88D455" height="8" width="8" x="20" y="24" />
              <rect fill="#88D455" height="8" width="8" x="36" y="24" />
              <rect fill="#3D7527" height="8" width="8" x="28" y="24" />
              <rect fill="#6C4724" height="16" width="8" x="28" y="32" />
            </svg>
            <div>
              <h4 class="footer-brand-name">Little Roots</h4>
              <span class="footer-brand-sub">Thai Botanical Garden</span>
            </div>
          </div>
          <div class="footer-tagline-quote">
            <span>🍃 ต้นไม้แต่ละชนิด มีมากกว่าที่ตาคิด</span>
          </div>
          <div class="pixel-plant-icons-row" title="คอลเลกชันต้นไม้พิกเซล">
            <span class="pixel-mini-item">🪴</span>
            <span class="pixel-mini-item">🌸</span>
            <span class="pixel-mini-item">🌼</span>
            <span class="pixel-mini-item">🌿</span>
            <span class="pixel-mini-item">🌾</span>
            <span class="pixel-mini-item">🍀</span>
            <span class="pixel-mini-item">🌷</span>
            <span class="pixel-mini-item">🍃</span>
          </div>
        </div>
        <div class="footer-columns-grid">
          <div class="footer-col">
            <h5>เกี่ยวกับ Little Roots</h5>
            <p class="footer-about-text">
              สารานุกรมและแหล่งเรียนรู้ธรรมชาติวิทยาสำหรับเยาวชน เชื่อมโยงความรู้เรื่องพืชสมุนไพร พืชอาหาร และความหลากหลายทางชีวภาพของไทย
            </p>
            <div class="social-pills-row">
              <a class="social-circle-btn" href="#" title="Facebook">f</a>
              <a class="social-circle-btn" href="#" title="Instagram">📷</a>
              <a class="social-circle-btn" href="#" title="YouTube">▶</a>
              <a class="social-circle-btn" href="#" title="Website">🌐</a>
            </div>
          </div>
          <div class="footer-col">
            <h5>สมุนไพรไทย</h5>
            <ul>
              <li><a href="index.html#herb-home">สมุนไพรประจำบ้าน</a></li>
              <li><a href="index.html#herb-special">สมุนไพรเฉพาะทาง</a></li>
              <li><a href="index.html#herb-health">สมุนไพรบำรุงสุขภาพ</a></li>
              <li><a href="herb.html">ตำรับยาสมุนไพรพื้นบ้าน</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>พืชกินได้</h5>
            <ul>
              <li><a href="index.html#food-veg">ผักพื้นบ้านและผักริมรั้ว</a></li>
              <li><a href="index.html#food-fruit">ผลไม้พื้นเมืองหายาก</a></li>
              <li><a href="index.html#food-spice">เครื่องเทศและพืชแต่งกลิ่น</a></li>
              <li><a href="edible.html">ผักสวนครัวปลูกง่าย</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>พืชเศรษฐกิจ</h5>
            <ul>
              <li><a href="index.html#eco-field">พืชไร่และพืชแปรรูป</a></li>
              <li><a href="index.html#eco-fiber">พืชเส้นใยและงานจักสาน</a></li>
              <li><a href="index.html#eco-industry">พืชสกัดและอุตสาหกรรม</a></li>
              <li><a href="economic.html">เกษตรผสมผสานสร้างอาชีพ</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>ไม้ประดับ &amp; ถิ่นเดียว</h5>
            <ul>
              <li><a href="index.html#orn-flower">ไม้ดอกไทยและกล้วยไม้</a></li>
              <li><a href="index.html#orn-lucky">ไม้มงคลและความเชื่อ</a></li>
              <li><a href="index.html#orn-garden">ไม้จัดสวนในบ้าน</a></li>
              <li><a href="index.html#rare">พืชหายากและพืชถิ่นเดียว</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom-bar">
          <div>
            © 2025 Little Roots Thai Botanical Garden. รวบรวมเพื่อการศึกษาและการเรียนรู้ธรรมชาติของเด็กไทย
          </div>
          <div class="footer-bottom-links">
            <a href="index.html">หน้าหลัก</a>
            <a href="edible.html">พืชกินได้</a>
            <a href="economic.html">เศรษฐกิจ</a>
            <a href="#">Contact</a>
            <a href="#">Links</a>
          </div>
        </div>
      </div>
    </footer>
  `;
})();
