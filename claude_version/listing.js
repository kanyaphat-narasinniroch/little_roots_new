// listing.js — ทำให้ช่องค้นหา / ตัวกรอง / ปุ่มเรียงลำดับ ใช้งานได้
// (ใช้กับหน้ารายการพืชทั้ง 3 หน้า: herb.html, edible.html, economic.html)
//
// หลักการทำงาน: ข้อมูลของพืชแต่ละการ์ดเก็บไว้ใน HTML เป็น attribute
//   data-sub="..."   = กลุ่มย่อยของพืช      (ตรงกับช่องติ๊กกลุ่ม "ประเภทย่อย")
//   data-part="..."  = ส่วนที่ใช้ประโยชน์   (เขียนได้หลายค่า คั่นด้วยช่องว่าง)
// ไฟล์นี้อ่านค่าพวกนี้แล้วซ่อน/โชว์การ์ดให้ตรงกับที่ผู้ใช้เลือก
//
// ถ้าเพิ่มการ์ดพืชใหม่ ให้ใส่ data-sub และ data-part ให้การ์ดด้วย

(function () {
  const grid = document.querySelector("[data-plant-grid]");
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".listing-plant-card"));
  const originalOrder = cards.slice(); // ลำดับเดิมใน HTML = ลำดับ "ยอดนิยม"
  const searchInput = document.querySelector("[data-filter-search]");
  const checkboxes = Array.from(document.querySelectorAll("input[data-filter-group]"));
  const sortButtons = Array.from(document.querySelectorAll("[data-sort]"));
  const resultBadge = document.querySelector("[data-result-count]");
  const emptyMessage = grid.querySelector("[data-empty-message]");

  // ข้อความทั้งหมดของการ์ด (ชื่อ ชื่อวิทยาศาสตร์ สรรพคุณ ฯลฯ) ใช้สำหรับค้นหา
  function cardText(card) {
    return card.textContent.replace(/\s+/g, " ").toLowerCase();
  }

  function plantName(card) {
    return card.querySelector(".plant-main-name, .plant-thai-title").textContent.trim();
  }

  // ค่าที่ถูกติ๊กอยู่ในกลุ่มนั้น เช่น checkedValues("sub") -> ["veg", "fruit"]
  function checkedValues(group) {
    return checkboxes
      .filter((box) => box.dataset.filterGroup === group && box.checked)
      .map((box) => box.value);
  }

  // ---------- กรองการ์ด ----------
  function applyFilters() {
    const text = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const subs = checkedValues("sub");
    const parts = checkedValues("part");
    let shown = 0;

    cards.forEach((card) => {
      const matchSub = subs.includes(card.dataset.sub);
      const matchPart = card.dataset.part.split(" ").some((part) => parts.includes(part));
      const matchText = cardText(card).includes(text);
      const visible = matchSub && matchPart && matchText;

      card.hidden = !visible;
      if (visible) shown++;
    });

    if (resultBadge) {
      resultBadge.textContent = "ค้นพบ " + shown + " ชนิด / " + shown + " species found";
    }
    if (emptyMessage) {
      emptyMessage.hidden = shown > 0;
    }
  }

  // ---------- เรียงลำดับ ----------
  // mode = "az" (เรียง ก-ฮ) หรือ "popular" (ลำดับเดิม)
  function sortCards(mode) {
    const sorted =
      mode === "az"
        ? cards.slice().sort((a, b) => plantName(a).localeCompare(plantName(b), "th"))
        : originalOrder;

    sorted.forEach((card) => grid.appendChild(card));
    if (emptyMessage) grid.appendChild(emptyMessage); // ให้ข้อความ "ไม่พบ" อยู่ท้ายสุดเสมอ

    sortButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.sort === mode);
    });
  }

  // ---------- ตัวเลขจำนวนพืชท้ายช่องติ๊ก (ถ้าหน้านั้นมี) ----------
  function fillCounts() {
    checkboxes.forEach((box) => {
      const badge = box.parentElement.querySelector(".badge-item-count");
      if (!badge) return;
      const attr = "data-" + box.dataset.filterGroup; // data-sub หรือ data-part
      badge.textContent = cards.filter((card) => {
        return card.getAttribute(attr).split(" ").includes(box.value);
      }).length;
    });
  }

  // ---------- เชื่อมปุ่มต่างๆ ----------
  if (searchInput) searchInput.addEventListener("input", applyFilters);
  checkboxes.forEach((box) => box.addEventListener("change", applyFilters));
  sortButtons.forEach((button) => {
    button.addEventListener("click", () => sortCards(button.dataset.sort));
  });

  // ---------- เริ่มต้น ----------
  // ถ้าเข้ามาจากช่องค้นหาหน้าแรก (เช่น herb.html?q=ขิง) ให้ใส่คำค้นหาให้เลย
  const query = new URLSearchParams(location.search).get("q");
  if (query && searchInput) searchInput.value = query;

  const activeSort = sortButtons.find((button) => button.classList.contains("active"));
  sortCards(activeSort ? activeSort.dataset.sort : "popular");
  fillCounts();
  applyFilters();
})();
