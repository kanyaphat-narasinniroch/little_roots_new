// herb-detail.js — โหลดข้อมูลสมุนไพรจาก herb-data.js แล้วแสดงในหน้า herb-detail.html
// ใช้ ?id=<herb-id> ใน URL เพื่อระบุสมุนไพรที่ต้องการ

(function () {
  // ดึง id จาก URL query string
  const params = new URLSearchParams(location.search);
  const herbId = params.get("id");

  // หาข้อมูลสมุนไพรที่ตรงกัน
  const herb = (typeof HERB_DATA !== "undefined") && HERB_DATA.find(function (h) {
    return h.id === herbId;
  });

  // ถ้าไม่พบ ให้แสดงข้อความและกลับไปหน้ารายการ
  if (!herb) {
    document.querySelector(".detail-layout").innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:#556752;">
        <div style="font-size:3rem;margin-bottom:16px;">🌿</div>
        <div style="font-size:1.1rem;font-weight:700;">ไม่พบข้อมูลสมุนไพรนี้</div>
        <div style="font-size:0.88rem;color:#839780;margin-top:6px;">Could not find this herb's data.</div>
        <a href="herb.html" style="display:inline-block;margin-top:20px;padding:10px 24px;background:#204e33;color:#fff;border-radius:999px;font-weight:700;font-size:0.9rem;">
          ← กลับไปหน้ารายการ
        </a>
      </div>`;
    return;
  }

  // ----- อัปเดต <title> -----
  document.getElementById("page-title").textContent =
    herb.nameTh + " / " + herb.nameEn + " — Little Roots";

  // ----- รูปภาพจริง -----
  const photoEl = document.getElementById("detail-photo");
  photoEl.src = herb.img;
  photoEl.alt = herb.nameTh + " (" + herb.nameEn + ")";

  // ----- Pixel Art -----
  document.getElementById("detail-pixel-svg").innerHTML = herb.pixelSvg;

  // ----- ข้อมูล Identity -----
  document.getElementById("detail-name-th").textContent = herb.nameTh;
  document.getElementById("detail-name-en").textContent = herb.nameEn;
  document.getElementById("detail-sci-name").textContent = herb.sciName;
  document.getElementById("detail-family").textContent = "Family: " + herb.family;
  document.getElementById("detail-taste").textContent = herb.tasteTh;

  const propEl = document.getElementById("detail-property");
  propEl.textContent = herb.propertyTh;
  propEl.className = "attr-tag " + herb.propertyClass;

  // ----- Helper: สร้าง <li> -----
  function makePropLi(item) {
    const li = document.createElement("li");
    li.innerHTML = "<span>" + item.th + " <span style='color:#728470;font-size:0.82rem;'>(" + item.en + ")</span></span>";
    return li;
  }

  function makeUsageLi(item) {
    const li = document.createElement("li");
    li.innerHTML =
      "<span><span class='usage-th'>" + item.th + "</span><span class='usage-en'>" + item.en + "</span></span>";
    return li;
  }

  function makePrecautionLi(item) {
    const li = document.createElement("li");
    li.innerHTML =
      "<span><span class='precaution-th'>" + item.th + "</span><span class='precaution-en'>" + item.en + "</span></span>";
    return li;
  }

  // ----- Tab 1: Properties -----
  const propList = document.getElementById("prop-list");
  herb.properties.forEach(function (item) {
    propList.appendChild(makePropLi(item));
  });

  const usageListProps = document.getElementById("usage-list-props");
  herb.usages.forEach(function (item) {
    usageListProps.appendChild(makeUsageLi(item));
  });

  const precListProps = document.getElementById("precaution-list-props");
  herb.precautions.forEach(function (item) {
    precListProps.appendChild(makePrecautionLi(item));
  });

  // ----- Tab 2: Usage & Data -----
  const usageListData = document.getElementById("usage-list-data");
  herb.usages.forEach(function (item) {
    usageListData.appendChild(makeUsageLi(item));
  });

  const botanicalGrid = document.getElementById("botanical-grid");
  const chips = [
    { label: "ส่วนที่ใช้ / Part Used",         value: herb.partUsedTh + " (" + herb.partUsedEn + ")" },
    { label: "วิธีเตรียม / Preparation",        value: herb.preparationTh + " / " + herb.preparationEn },
    { label: "ขนาดที่ใช้ / Dosage",             value: herb.doseTh },
    { label: "วงศ์ / Family",                   value: herb.family },
    { label: "ชื่อวิทยาศาสตร์ / Scientific",   value: herb.sciName },
    { label: "กลุ่ม / Category",                value: herb.sub === "household" ? "สมุนไพรประจำบ้าน" : herb.sub === "specialist" ? "สมุนไพรเฉพาะทาง" : "เพื่อบำรุงสุขภาพ" },
  ];
  chips.forEach(function (chip) {
    const div = document.createElement("div");
    div.className = "info-chip";
    div.innerHTML = "<div class='info-chip-label'>" + chip.label + "</div><div class='info-chip-value'>" + chip.value + "</div>";
    botanicalGrid.appendChild(div);
  });

  // ----- Tab 3: Precautions -----
  const precListTab = document.getElementById("precaution-list-tab");
  herb.precautions.forEach(function (item) {
    precListTab.appendChild(makePrecautionLi(item));
  });

  // ----- Tab Switching -----
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const target = btn.dataset.tab;

      tabBtns.forEach(function (b) { b.classList.remove("active"); });
      tabPanes.forEach(function (p) { p.classList.remove("active"); });

      btn.classList.add("active");
      const pane = document.getElementById("tab-" + target);
      if (pane) pane.classList.add("active");
    });
  });
})();
