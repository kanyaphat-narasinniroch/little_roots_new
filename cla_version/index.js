// index.js — ช่องค้นหาในหน้าแรก
// พิมพ์ชื่อพืช (หรือสรรพคุณ เช่น "แก้หวัด") แล้วกด Enter หรือปุ่มแว่นขยาย
// เว็บจะพาไปหน้ารายการที่มีพืชนั้น พร้อมใส่คำค้นหาให้อัตโนมัติ
//
// ⚠ ถ้าเพิ่มพืชใหม่ในหน้ารายการ (herb / edible / economic) ให้เพิ่มชื่อในรายการด้านล่างด้วย
//    เพื่อให้ค้นหาจากหน้าแรกเจอ (หน้ารายการเองค้นหาจากการ์ดโดยตรง ไม่ต้องแก้)

const PLANTS = [
  // ----- พืชกินได้ (edible.html)
  { page: "edible.html", name: "ชะอม", info: "Cha-om (Acacia pennata) ยอดอ่อนมีรสมันและกลิ่นฉุนเฉพาะตัว ยอดนิยมนำไปทอดไข่ชะอมคู่กับน้ำพริกกะปิ" },
  { page: "edible.html", name: "ผักหวานป่า", info: "Pak-Waan (Melientha suavis) ราชินีผักป่ารสหวานตามธรรมชาติ กรอบอร่อย เหมาะสำหรับแกงเลียงและต้มจืดหมูสับ" },
  { page: "edible.html", name: "ตำลึง", info: "Ivy Gourd (Coccinia grandis) ไม้เลื้อยริมรั้วดูแลง่าย รสจืดเย็น ธาตุอาหารสูง ช่วยบำรุงสายตาและระบบขับถ่าย" },
  { page: "edible.html", name: "มะละกอ", info: "Papaya (Carica papaya) ผลดิบทำส้มตำกรุบกรอบ ผลสุกเนื้อสีส้มรสหวานฉ่ำ เอนไซม์ปาเปนช่วยย่อยอาหารได้ดีเยี่ยม" },
  { page: "edible.html", name: "มังคุด", info: "Mangosteen (Garcinia mangostana) ราชินีแห่งผลไม้ไทย เนื้อขาวบริสุทธิ์ รสชาติหวานอมเปรี้ยว สดชื่นคลายร้อน" },
  { page: "edible.html", name: "ขนุน", info: "Jackfruit (Artocarpus heterophyllus) ยวงสีเหลืองทองรสหวานหอมกรอบ ส่วนผลอ่อนนำมาปรุงแกงคั่วหรือตำขนุนรสเลิศ" },
  { page: "edible.html", name: "ตะลิงปลิง", info: "Bilimbi (Averrhoa bilimbi) ผลไม้รสเปรี้ยวจี๊ดถึงใจ นิยมนำมาใส่ต้มยำ ยำ หรือทานคู่กับกะปิหวานเติมความสดชื่น" },
  { page: "edible.html", name: "ผักกูด", info: "Paco Fern (Diplazium esculentum) เฟิร์นทานได้ที่เจริญเติบโตเฉพาะแหล่งน้ำสะอาด ยอดม้วนกรอบ เหมาะทำยำผักกูดกุ้งสด" },
  { page: "edible.html", name: "ข่าลิง / มะแขว่น", info: "Northern Pepper (Zanthoxylum limonella) เครื่องเทศล้านนาเอกลักษณ์ กลิ่นหอมซ่าเป็นเอกลักษณ์ นิยมใส่ในลาบคั่วและแกงแค" },
  { page: "edible.html", name: "มะกรูด", info: "Kaffir Lime (Citrus hystrix) ผิวมะกรูดและใบหอมฉุน ขาดไม่ได้ในต้มยำและพริกแกง มีน้ำมันหอมระเหยช่วยให้ผ่อนคลาย" },
  { page: "edible.html", name: "ผักแพว", info: "Vietnamese Coriander (Persicaria odorata) ผักพื้นบ้านกลิ่นหอมฉุน รสเผ็ดปร่าเล็กน้อย นิยมกินแนมกับลาบ น้ำตก และข้าวยำปักษ์ใต้" },
  { page: "edible.html", name: "บัวสาย (สายบัว)", info: "Water Lily Stem (Nymphaea lotus) ก้านดอกสายบัวอุ้มน้ำ รสจืดกรอบหวานอ่อนๆ นิยมนำมาทำต้มกะทิสายบัวปลาทูสดรสกลมกล่อม" },
  // ----- สมุนไพร (herb.html)
  { page: "herb.html", name: "ฟ้าทะลายโจร", info: "Fah Talai Jone / Andrographis paniculata แก้ไข้หวัด บรรเทาอาการเจ็บคอ เสริมภูมิคุ้มกัน และต้านการอักเสบของระบบทางเดินหายใจ" },
  { page: "herb.html", name: "ขิง", info: "Ginger / Zingiber officinale ขับลม แก้ท้องอืด ท้องเฟ้อ ช่วยย่อยอาหาร กระตุ้นการไหลเวียนเลือด และบรรเทาอาการคลื่นไส้" },
  { page: "herb.html", name: "ขมิ้นชัน", info: "Turmeric / Curcuma longa สมานแผลในกระเพาะอาหาร ต้านการอักเสบ บรรเทากรดไหลย้อน บำรุงผิวพรรณให้ผ่องใส" },
  { page: "herb.html", name: "ว่านหางจระเข้", info: "Aloe Vera / Aloe barbadensis สมานแผลไฟไหม้ น้ำร้อนลวก บำรุงผิวให้ชุ่มชื้น ลดรอยแผลเป็น และปลอบประโลมผิวจากแสงแดด" },
  { page: "herb.html", name: "บัวบก", info: "Gotu Kola / Centella asiatica แก้ร้อนใน ช้ำใน บำรุงสมองและความจำ กระตุ้นการสร้างคอลลาเจน และช่วยสมานแผลได้รวดเร็ว" },
  { page: "herb.html", name: "กะเพรา", info: "Holy Basil / Ocimum tenuiflorum ขับลม แก้อาการจุกเสียด แน่นท้อง บำรุงธาตุไฟ ลดน้ำตาลในเลือด และช่วยให้เจริญอาหาร" },
  { page: "herb.html", name: "ตะไคร้", info: "Lemongrass / Cymbopogon citratus ขับปัสสาวะ กลิ่นหอมระเหยช่วยให้ผ่อนคลายและสดชื่น บรรเทาหวัด ขับลมในลำไส้" },
  { page: "herb.html", name: "กระชาย", info: "Fingerroot / Boesenbergia rotunda บำรุงกำลัง ปรับสมดุลฮอร์โมน ต้านเชื้อจุลินทรีย์ บำรุงกระดูกและข้อ สมญานามโสมไทย" },
  { page: "herb.html", name: "มะขามป้อม", info: "Indian Gooseberry / Phyllanthus emblica วิตามินซีสูง แก้ไอ ขับเสมหะ บรรเทาอาการเจ็บคอ บำรุงเสียง และเสริมเกราะป้องกันไข้หวัด" },
  { page: "herb.html", name: "อัญชัน", info: "Butterfly Pea / Clitoria ternatea สารแอนโทไซยานินสูง บำรุงสายตา กระตุ้นการไหลเวียนโลหิต บำรุงเส้นผมให้ดกดำเงางาม" },
  { page: "herb.html", name: "ไพล", info: "Phlai / Zingiber cassumunar บรรเทาอาการเคล็ดขัดยอก ฟกช้ำ ปวดเมื่อยกล้ามเนื้อ แก้อักเสบเฉพาะที่ และนิยมใช้ทำลูกประคบ" },
  { page: "herb.html", name: "ทองพันชั่ง", info: "White Crane Flower / Rhinacanthus nasutus รักษาโรคผิวหนัง กลากเกลื้อน ต้านเชื้อรา ดับพิษไข้ ดับพิษโลหิต และช่วยสมานแผลผื่นคัน" },
  // ----- พืชเศรษฐกิจ (economic.html)
  { page: "economic.html", name: "ยางพารา", info: "Para Rubber / Hevea brasiliensis ผลผลิต: น้ำยางสด ยางแผ่น ยางแปรรูปยานยนต์และถุงมือแพทย์" },
  { page: "economic.html", name: "ปาล์มน้ำมัน", info: "Oil Palm / Elaeis guineensis ผลผลิต: ทะลายปาล์มสด สกัดน้ำมันพืช ไบโอดีเซล B100 อาหารและสบู่" },
  { page: "economic.html", name: "ข้าวหอมมะลิไทย", info: "Jasmine Rice / Oryza sativa ผลผลิต: เมล็ดข้าว ข้าวแปรรูปอาหาร ข้าวกล้อง แป้งข้าวเจ้าคุณภาพสูง" },
  { page: "economic.html", name: "อ้อยโรงงาน", info: "Sugarcane / Saccharum officinarum ผลผลิต: น้ำอ้อย กากน้ำตาล เอทานอล ไฟฟ้าชีวมวล และบรรจุภัณฑ์ชานอ้อย" },
  { page: "economic.html", name: "มันสำปะหลัง", info: "Cassava / Manihot esculenta ผลผลิต: มันเส้น มันอัดเม็ด แป้งมันสำปะหลังแปรรูป สารให้ความหวานและเอทานอล" },
  { page: "economic.html", name: "ข้าวโพดเลี้ยงสัตว์", info: "Field Corn / Zea mays ผลผลิต: เมล็ดข้าวโพด อาหารสัตว์ อุตสาหกรรมแป้ง และน้ำมันข้าวโพด" },
  { page: "economic.html", name: "กาแฟโรบัสต้า", info: "Robusta Coffee / Coffea canephora ผลผลิต: เมล็ดกาแฟสด แปรรูปกาแฟสำเร็จรูป สารสกัดคาเฟอีน ปลูกมากภาคใต้" },
  { page: "economic.html", name: "โกโก้ไทย", info: "Thai Cacao / Theobroma cacao ผลผลิต: เมล็ดโกโก้หมัก ผงโกโก้ เนยโกโก้ ช็อกโกแลตพรีเมียมคราฟต์ไทย" },
  { page: "economic.html", name: "มะพร้าวน้ำหอม", info: "Aromatic Coconut / Cocos nucifera ผลผลิต: น้ำมะพร้าวสด วุ้นมะพร้าว แปรรูปส่งออก ตลาดโลกนิยมสูง" },
  { page: "economic.html", name: "ไผ่ตง", info: "Sweet Bamboo / Dendrocalamus asper ผลผลิต: เนื้อไม้แปรรูป ถ่านไผ่คุณภาพสูง หน่อไม้กระป๋อง เครื่องจักสาน" },
  { page: "economic.html", name: "ป่านศรนารายณ์", info: "Sisal / Agave sisalana ผลผลิต: เส้นใยเหนียวทน เชือก กระเป๋า หมวก พรมธรรมชาติ หัตถกรรมสร้างมูลค่า" },
  { page: "economic.html", name: "สับปะรดโรงงาน", info: "Pineapple / Ananas comosus ผลผลิต: สับปะรดกระป๋อง น้ำผลไม้เข้มข้น เส้นใยใบสับปะรดแปรรูปสิ่งทอ" },
];

(function () {
  const searchContainer = document.querySelector(".search-bar-game");
  const input = document.querySelector(".search-bar-game input");
  const button = document.querySelector(".search-btn-round");
  if (!searchContainer || !input || !button) return;

  // 1. สร้างกล่องรายการคำแนะนำ
  const suggestionBox = document.createElement("ul");
  suggestionBox.className = "search-suggestions";
  searchContainer.appendChild(suggestionBox);

  // 2. ฟังก์ชันลบสระลอยและวรรณยุกต์ (เช่น "ฟร้" -> "ฟร")
  function stripMarks(str) {
    return str.normalize("NFD").replace(/[\u0E31\u0E34-\u0E3A\u0E47-\u0E4E]/g, "");
  }

  // 3. ฟังก์ชันคำนวณระยะห่างความผิดเพี้ยนของคำ (Levenshtein Distance)
  function getEditDistance(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, () => []);
    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }
    return matrix[a.length][b.length];
  }

  // 4. ฟังก์ชันโชว์คำแนะนำตอนพิมพ์ (รองรับพิมพ์ผิด + ค้นหาจากข้อมูลพืช + โชว์เยอะขึ้น)
  function showSuggestions() {
    const rawKeyword = input.value.trim().toLowerCase();
    suggestionBox.innerHTML = "";
    input.setCustomValidity("");

    if (!rawKeyword) {
      suggestionBox.style.display = "none";
      return;
    }

    const cleanKeyword = stripMarks(rawKeyword);

    const scoredMatches = PLANTS.map((plant) => {
      const name = plant.name.toLowerCase();
      const info = (plant.info || "").toLowerCase();
      const cleanName = stripMarks(name);
      const cleanInfo = stripMarks(info);

      // ตรงตัวในชื่อพืช
      if (name.includes(rawKeyword)) return { plant, score: 0 };
      // ตรงตัวแบบไม่สนสระ/วรรณยุกต์
      if (cleanName.includes(cleanKeyword)) return { plant, score: 0.5 };

      // เทียบความใกล้เคียงเผื่อพิมพ์ผิด
      const namePrefix = cleanName.slice(0, cleanKeyword.length);
      const distance = getEditDistance(cleanKeyword, namePrefix);
      const maxAllowedErrors = cleanKeyword.length >= 3 ? 2 : 1;

      if (distance <= maxAllowedErrors) {
        return { plant, score: distance };
      }

      // หาในคำอธิบาย (info) เพิ่มเติม
      if (info.includes(rawKeyword) || cleanInfo.includes(cleanKeyword)) {
        return { plant, score: 2.5 };
      }

      return null;
    })
      .filter((item) => item !== null)
      .sort((a, b) => a.score - b.score);

    if (scoredMatches.length === 0) {
      suggestionBox.style.display = "none";
      return;
    }

    scoredMatches.forEach(({ plant }) => {
      const li = document.createElement("li");
      li.textContent = plant.name;

      li.addEventListener("click", () => {
        input.value = plant.name;
        suggestionBox.style.display = "none";
        search();
      });

      suggestionBox.appendChild(li);
    });

    suggestionBox.style.display = "block";
  }

  // 5. ฟังก์ชันค้นหาหลักเมื่อกดปุ่มหรือกด Enter
  function search() {
    suggestionBox.style.display = "none";
    const keyword = input.value.trim();
    if (!keyword) {
      input.focus();
      return;
    }

    // หาพืชที่ชื่อหรือข้อมูลมีคำที่พิมพ์
    const hits = PLANTS.filter((plant) =>
      (plant.name + " " + plant.info).toLowerCase().includes(keyword.toLowerCase())
    );
    if (hits.length === 0) {
      input.setCustomValidity("ไม่พบพืชที่ค้นหา ลองพิมพ์คำอื่นดูนะ");
      input.reportValidity();
      return;
    }

    // เลือกหน้าที่เจอพืชมากที่สุด
    const countByPage = {};
    hits.forEach((plant) => {
      countByPage[plant.page] = (countByPage[plant.page] || 0) + 1;
    });
    const bestPage = Object.keys(countByPage).sort((a, b) => countByPage[b] - countByPage[a])[0];

    document.body.classList.add("leaving");
    setTimeout(() => {
      location.href = bestPage + "?q=" + encodeURIComponent(keyword);
    }, 150);
  }

  // Event Listeners
  input.addEventListener("input", showSuggestions);
  button.addEventListener("click", search);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") search();
  });

  // ปิดกล่องคำแนะนำเมื่อคลิกพื้นที่ว่างข้างนอก
  document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target)) {
      suggestionBox.style.display = "none";
    }
  });
})();
