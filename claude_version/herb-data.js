// herb-data.js — ข้อมูลของพืชสมุนไพรแต่ละชนิด (ใช้กับ herb-detail.html)
// เพิ่ม/แก้ข้อมูลที่ไฟล์นี้ที่เดียว หน้ารายละเอียดจะอัปเดตเอง
// photo = ชื่อไฟล์ในโฟลเดอร์ img/herbs/   svg = รูป 8-bit
window.HERBS = [
  {
    "id": "andrographis",
    "photo": "andrographis.jpg",
    "th": "ฟ้าทะลายโจร",
    "en": "Fah Talai Jone",
    "sci": "Andrographis paniculata",
    "author": "(Burm.f.) Wall. ex Nees",
    "family": "ACANTHACEAE",
    "taste": {
      "th": "รสขม",
      "en": "Bitter"
    },
    "prop": [
      "cool",
      {
        "th": "ฤทธิ์เย็น",
        "en": "Cooling"
      }
    ],
    "part": {
      "th": "ใบและทั้งต้น",
      "en": "Leaves & whole plant"
    },
    "group": {
      "th": "สมุนไพรประจำบ้าน",
      "en": "Household remedy"
    },
    "props": [
      {
        "th": "บรรเทาอาการไข้หวัด แก้ตัวร้อน",
        "en": "Relieves colds & fevers"
      },
      {
        "th": "บรรเทาอาการเจ็บคอ",
        "en": "Sore throat relief"
      },
      {
        "th": "ต้านการอักเสบ",
        "en": "Anti-inflammatory"
      }
    ],
    "usage": [
      {
        "th": "ใช้ใบสด 5-10 ใบ ชงน้ำร้อนดื่ม",
        "en": "Use 5-10 fresh leaves brewed in hot water"
      }
    ],
    "cautions": [
      {
        "th": "ห้ามใช้ในสตรีมีครรภ์หรือให้นมบุตร",
        "en": "Do not use during pregnancy or lactation"
      },
      {
        "th": "ไม่ควรใช้ติดต่อกันเกิน 7 วัน",
        "en": "Do not use consecutively for more than 7 days"
      }
    ],
    "svg": "<svg fill=\"none\" viewBox=\"0 0 24 24\"> <rect fill=\"#204e33\" height=\"15\" width=\"2\" x=\"11\" y=\"7\" /> <rect fill=\"#387b3e\" height=\"5\" rx=\"1\" width=\"5\" x=\"6\" y=\"8\" /> <rect fill=\"#4fa545\" height=\"5\" rx=\"1\" width=\"5\" x=\"13\" y=\"11\" /> <rect fill=\"#387b3e\" height=\"5\" rx=\"1\" width=\"5\" x=\"6\" y=\"14\" /> <rect fill=\"#6fb743\" height=\"3\" width=\"3\" x=\"10\" y=\"4\" /> <rect fill=\"#ffffff\" height=\"2\" width=\"2\" x=\"11\" y=\"2\" /> </svg>"
  },
  {
    "id": "ginger",
    "photo": "ginger.jpg",
    "th": "ขิง",
    "en": "Ginger",
    "sci": "Zingiber officinale",
    "author": "Roscoe",
    "family": "ZINGIBERACEAE",
    "taste": {
      "th": "รสเผ็ดร้อน",
      "en": "Pungent"
    },
    "prop": [
      "hot",
      {
        "th": "ฤทธิ์ร้อน",
        "en": "Hot"
      }
    ],
    "part": {
      "th": "เหง้า",
      "en": "Rhizome"
    },
    "group": {
      "th": "สมุนไพรประจำบ้าน",
      "en": "Household remedy"
    },
    "props": [
      {
        "th": "ขับลม แก้ท้องอืด ท้องเฟ้อ",
        "en": "Relieves bloating & indigestion"
      },
      {
        "th": "ช่วยย่อยอาหาร กระตุ้นการไหลเวียนเลือด",
        "en": "Aids digestion & circulation"
      },
      {
        "th": "บรรเทาอาการคลื่นไส้",
        "en": "Eases nausea"
      }
    ],
    "usage": [
      {
        "th": "ใช้เหง้าสดทุบหรือหั่นเป็นแว่น ต้มกับน้ำดื่มอุ่นๆ",
        "en": "Crush or slice fresh rhizome and simmer in water; drink warm"
      },
      {
        "th": "ใช้ประกอบอาหารเพื่อช่วยดับกลิ่นคาวและขับลม",
        "en": "Used in cooking to remove odors and relieve gas"
      }
    ],
    "cautions": [
      {
        "th": "ผู้ที่เป็นโรคกรดไหลย้อนหรือกระเพาะอาหารอักเสบควรระวัง",
        "en": "People with acid reflux or gastritis should be careful"
      },
      {
        "th": "ผู้ที่ใช้ยาละลายลิ่มเลือดควรปรึกษาแพทย์ก่อนใช้",
        "en": "Consult a doctor first if taking blood thinners"
      }
    ],
    "svg": "<svg fill=\"none\" viewBox=\"0 0 24 24\"> <rect fill=\"#c99859\" height=\"7\" rx=\"2\" width=\"10\" x=\"7\" y=\"13\" /> <rect fill=\"#b88344\" height=\"6\" rx=\"2\" width=\"6\" x=\"4\" y=\"11\" /> <rect fill=\"#b88344\" height=\"5\" rx=\"2\" width=\"5\" x=\"15\" y=\"11\" /> <rect fill=\"#52993e\" height=\"10\" width=\"2\" x=\"9\" y=\"3\" /> <rect fill=\"#61b34a\" height=\"7\" width=\"2\" x=\"13\" y=\"6\" /> </svg>"
  },
  {
    "id": "turmeric",
    "photo": "turmeric.jpg",
    "th": "ขมิ้นชัน",
    "en": "Turmeric",
    "sci": "Curcuma longa",
    "author": "L.",
    "family": "ZINGIBERACEAE",
    "taste": {
      "th": "รสฝาดเอียน",
      "en": "Astringent"
    },
    "prop": [
      "warm",
      {
        "th": "ฤทธิ์อุ่น",
        "en": "Warming"
      }
    ],
    "part": {
      "th": "เหง้า",
      "en": "Rhizome"
    },
    "group": {
      "th": "สมุนไพรเฉพาะทาง",
      "en": "Specialist herb"
    },
    "props": [
      {
        "th": "บรรเทาอาการท้องอืด ท้องเฟ้อ และกรดไหลย้อน",
        "en": "Eases bloating, indigestion & acid reflux"
      },
      {
        "th": "ต้านการอักเสบ",
        "en": "Anti-inflammatory"
      },
      {
        "th": "ใช้ทาบำรุงผิวพรรณ",
        "en": "Used topically for skin care"
      }
    ],
    "usage": [
      {
        "th": "ใช้เหง้าสดหรือผงขมิ้นแคปซูลตามฉลากผลิตภัณฑ์",
        "en": "Use fresh rhizome or capsules following the product label"
      },
      {
        "th": "ใช้ผสมน้ำผึ้งหรือน้ำเปล่าทาผิวภายนอก",
        "en": "Mixed with honey or water as a skin paste"
      }
    ],
    "cautions": [
      {
        "th": "ผู้ที่เป็นนิ่วในถุงน้ำดีหรือท่อน้ำดีอุดตันควรหลีกเลี่ยง",
        "en": "Avoid with gallstones or bile duct obstruction"
      },
      {
        "th": "สตรีมีครรภ์และผู้ใช้ยาละลายลิ่มเลือดควรปรึกษาแพทย์",
        "en": "Pregnant women and those on blood thinners should consult a doctor"
      }
    ],
    "svg": "<svg fill=\"none\" viewBox=\"0 0 24 24\"> <rect fill=\"#e67e22\" height=\"7\" rx=\"2\" width=\"12\" x=\"6\" y=\"13\" /> <rect fill=\"#d35400\" height=\"5\" rx=\"2\" width=\"6\" x=\"4\" y=\"11\" /> <rect fill=\"#f39c12\" height=\"6\" rx=\"2\" width=\"5\" x=\"14\" y=\"9\" /> <rect fill=\"#438a39\" height=\"9\" width=\"3\" x=\"10\" y=\"4\" /> <rect fill=\"#589f3a\" height=\"6\" rx=\"1\" width=\"5\" x=\"7\" y=\"5\" /> </svg>"
  },
  {
    "id": "aloevera",
    "photo": "aloevera.jpg",
    "th": "ว่านหางจระเข้",
    "en": "Aloe Vera",
    "sci": "Aloe vera",
    "author": "(L.) Burm.f. (syn. Aloe barbadensis Mill.)",
    "family": "ASPHODELACEAE",
    "taste": {
      "th": "รสจืดเย็น",
      "en": "Bland"
    },
    "prop": [
      "cool",
      {
        "th": "ฤทธิ์เย็น",
        "en": "Cooling"
      }
    ],
    "part": {
      "th": "วุ้นจากใบ",
      "en": "Leaf gel"
    },
    "group": {
      "th": "สมุนไพรประจำบ้าน",
      "en": "Household remedy"
    },
    "props": [
      {
        "th": "บรรเทาแผลไฟไหม้ น้ำร้อนลวกเล็กน้อย",
        "en": "Soothes minor burns & scalds"
      },
      {
        "th": "บำรุงผิวให้ชุ่มชื้น",
        "en": "Moisturizes the skin"
      },
      {
        "th": "ปลอบประโลมผิวหลังโดนแดด",
        "en": "Calms sun-exposed skin"
      }
    ],
    "usage": [
      {
        "th": "ปอกเปลือกใบ ล้างยางสีเหลืองออก แล้วใช้วุ้นใสทาบริเวณที่ต้องการ",
        "en": "Peel the leaf, rinse off the yellow sap, and apply the clear gel"
      }
    ],
    "cautions": [
      {
        "th": "ควรล้างยางสีเหลืองออกให้หมด เพราะอาจทำให้ระคายเคือง",
        "en": "Rinse off all the yellow sap as it may irritate"
      },
      {
        "th": "ทดสอบกับผิวบริเวณเล็กๆ ก่อนใช้ ไม่ควรทาแผลลึก",
        "en": "Patch test first; do not apply to deep wounds"
      }
    ],
    "svg": "<svg fill=\"none\" viewBox=\"0 0 24 24\"> <rect fill=\"#2e7d32\" height=\"15\" rx=\"2\" width=\"4\" x=\"10\" y=\"5\" /> <rect fill=\"#388e3c\" height=\"11\" rx=\"2\" width=\"3\" x=\"6\" y=\"9\" /> <rect fill=\"#388e3c\" height=\"11\" rx=\"2\" width=\"3\" x=\"15\" y=\"9\" /> <rect fill=\"#81c784\" height=\"2\" width=\"2\" x=\"5\" y=\"12\" /> <rect fill=\"#81c784\" height=\"2\" width=\"2\" x=\"17\" y=\"12\" /> </svg>"
  },
  {
    "id": "gotukola",
    "photo": "cantellaasiatica.jpg",
    "th": "บัวบก",
    "en": "Gotu Kola",
    "sci": "Centella asiatica",
    "author": "(L.) Urb.",
    "family": "APIACEAE",
    "taste": {
      "th": "รสขมเย็น",
      "en": "Bitter"
    },
    "prop": [
      "cool",
      {
        "th": "ฤทธิ์เย็น",
        "en": "Cooling"
      }
    ],
    "part": {
      "th": "ใบและทั้งต้น",
      "en": "Leaves & whole plant"
    },
    "group": {
      "th": "สมุนไพรประจำบ้าน",
      "en": "Household remedy"
    },
    "props": [
      {
        "th": "แก้ร้อนใน แก้ช้ำใน",
        "en": "Relieves internal heat & bruising"
      },
      {
        "th": "ช่วยสมานแผล",
        "en": "Supports wound healing"
      },
      {
        "th": "บำรุงผิวและกระตุ้นการสร้างคอลลาเจน",
        "en": "Supports skin & collagen formation"
      }
    ],
    "usage": [
      {
        "th": "ใช้ใบสดคั้นน้ำหรือต้มน้ำดื่ม",
        "en": "Juice fresh leaves or boil them in water"
      },
      {
        "th": "ตำใบสดพอกบริเวณที่ช้ำ",
        "en": "Pound fresh leaves into a poultice for bruises"
      }
    ],
    "cautions": [
      {
        "th": "ผู้ที่มีโรคตับหรือโรคไตควรปรึกษาแพทย์ก่อนใช้",
        "en": "People with liver or kidney conditions should consult a doctor"
      },
      {
        "th": "สตรีมีครรภ์ควรหลีกเลี่ยง",
        "en": "Pregnant women should avoid"
      }
    ],
    "svg": "<svg fill=\"none\" viewBox=\"0 0 24 24\"> <rect fill=\"#27692c\" height=\"12\" width=\"2\" x=\"11\" y=\"9\" /> <rect fill=\"#4caf50\" height=\"7\" rx=\"3\" width=\"10\" x=\"7\" y=\"4\" /> <rect fill=\"#66bb6a\" height=\"5\" rx=\"2\" width=\"7\" x=\"3\" y=\"11\" /> <rect fill=\"#66bb6a\" height=\"5\" rx=\"2\" width=\"7\" x=\"14\" y=\"10\" /> <rect fill=\"#27692c\" height=\"5\" width=\"2\" x=\"6\" y=\"15\" /> <rect fill=\"#27692c\" height=\"5\" width=\"2\" x=\"16\" y=\"14\" /> </svg>"
  },
  {
    "id": "holybasil",
    "photo": "thaibasil.jpg",
    "th": "กะเพรา",
    "en": "Holy Basil",
    "sci": "Ocimum tenuiflorum",
    "author": "L.",
    "family": "LAMIACEAE",
    "taste": {
      "th": "รสเผ็ดร้อน",
      "en": "Pungent"
    },
    "prop": [
      "hot",
      {
        "th": "ฤทธิ์ร้อน",
        "en": "Hot"
      }
    ],
    "part": {
      "th": "ใบและยอดอ่อน",
      "en": "Leaves & shoots"
    },
    "group": {
      "th": "สมุนไพรประจำบ้าน",
      "en": "Household remedy"
    },
    "props": [
      {
        "th": "ขับลม แก้จุกเสียด แน่นท้อง",
        "en": "Relieves gas & stomach fullness"
      },
      {
        "th": "ช่วยให้เจริญอาหาร",
        "en": "Stimulates appetite"
      },
      {
        "th": "ใช้ประกอบอาหารเพื่อบำรุงธาตุ",
        "en": "Used in cooking to support digestion"
      }
    ],
    "usage": [
      {
        "th": "ใช้ใบสดปรุงอาหาร หรือชงน้ำร้อนดื่ม",
        "en": "Use fresh leaves in cooking or brew in hot water"
      },
      {
        "th": "ใช้ใบสดขยี้ดมแก้เวียนศีรษะเล็กน้อย",
        "en": "Crush fresh leaves and inhale to ease mild dizziness"
      }
    ],
    "cautions": [
      {
        "th": "สตรีมีครรภ์ควรหลีกเลี่ยงการกินในปริมาณมาก",
        "en": "Pregnant women should avoid large amounts"
      },
      {
        "th": "ผู้ที่ใช้ยาลดน้ำตาลในเลือดควรปรึกษาแพทย์",
        "en": "Consult a doctor if taking blood sugar medication"
      }
    ],
    "svg": "<svg fill=\"none\" viewBox=\"0 0 24 24\"> <rect fill=\"#5d4037\" height=\"14\" width=\"2\" x=\"11\" y=\"7\" /> <rect fill=\"#388e3c\" height=\"4\" rx=\"1\" width=\"5\" x=\"6\" y=\"7\" /> <rect fill=\"#388e3c\" height=\"4\" rx=\"1\" width=\"5\" x=\"13\" y=\"9\" /> <rect fill=\"#2e7d32\" height=\"4\" rx=\"1\" width=\"5\" x=\"6\" y=\"12\" /> <rect fill=\"#7b1fa2\" height=\"3\" width=\"2\" x=\"11\" y=\"4\" /> </svg>"
  },
  {
    "id": "lemongrass",
    "photo": "lemongrass.jpg",
    "th": "ตะไคร้",
    "en": "Lemongrass",
    "sci": "Cymbopogon citratus",
    "author": "(DC.) Stapf",
    "family": "POACEAE",
    "taste": {
      "th": "รสหอมปร่า",
      "en": "Aromatic"
    },
    "prop": [
      "warm",
      {
        "th": "ฤทธิ์อุ่น",
        "en": "Warming"
      }
    ],
    "part": {
      "th": "ลำต้นและใบ",
      "en": "Stalks & leaves"
    },
    "group": {
      "th": "เพื่อบำรุงสุขภาพ",
      "en": "Wellness"
    },
    "props": [
      {
        "th": "ขับลมในลำไส้",
        "en": "Relieves intestinal gas"
      },
      {
        "th": "ขับปัสสาวะ",
        "en": "Mild diuretic"
      },
      {
        "th": "กลิ่นหอมช่วยให้ผ่อนคลายและบรรเทาหวัด",
        "en": "Aroma relaxes the mind and eases colds"
      }
    ],
    "usage": [
      {
        "th": "ใช้ลำต้นทุบ ต้มกับน้ำดื่มอุ่นๆ",
        "en": "Bruise the stalks and simmer in water; drink warm"
      },
      {
        "th": "ใช้ปรุงอาหารเพื่อแต่งกลิ่นและดับคาว",
        "en": "Used in cooking for flavor and to remove odors"
      }
    ],
    "cautions": [
      {
        "th": "สตรีมีครรภ์ควรหลีกเลี่ยงการดื่มในปริมาณมาก",
        "en": "Pregnant women should avoid large amounts"
      },
      {
        "th": "ผู้ที่แพ้พืชตระกูลหญ้าควรระวัง",
        "en": "Take care if allergic to grasses"
      }
    ],
    "svg": "<svg fill=\"none\" viewBox=\"0 0 24 24\"> <rect fill=\"#c8e6c9\" height=\"8\" rx=\"1\" width=\"3\" x=\"11\" y=\"13\" /> <rect fill=\"#dcedc8\" height=\"6\" rx=\"1\" width=\"3\" x=\"8\" y=\"15\" /> <rect fill=\"#4caf50\" height=\"13\" width=\"2\" x=\"11\" y=\"3\" /> <rect fill=\"#66bb6a\" height=\"11\" width=\"2\" x=\"8\" y=\"5\" /> <rect fill=\"#81c784\" height=\"12\" width=\"2\" x=\"14\" y=\"4\" /> </svg>"
  },
  {
    "id": "fingerroot",
    "photo": "fingerroot.jpg",
    "th": "กระชาย",
    "en": "Fingerroot",
    "sci": "Boesenbergia rotunda",
    "author": "(L.) Mansf.",
    "family": "ZINGIBERACEAE",
    "taste": {
      "th": "รสเผ็ดร้อนขม",
      "en": "Pungent & bitter"
    },
    "prop": [
      "hot",
      {
        "th": "ฤทธิ์ร้อน",
        "en": "Hot"
      }
    ],
    "part": {
      "th": "เหง้าและรากสะสมอาหาร",
      "en": "Rhizome & tuberous roots"
    },
    "group": {
      "th": "เพื่อบำรุงสุขภาพ",
      "en": "Wellness"
    },
    "props": [
      {
        "th": "บำรุงกำลัง ได้รับสมญานามโสมไทย",
        "en": "Energy tonic, known as “Thai ginseng”"
      },
      {
        "th": "ขับลม แก้ท้องอืด",
        "en": "Relieves gas & bloating"
      },
      {
        "th": "ช่วยบำรุงร่างกาย",
        "en": "Supports general well-being"
      }
    ],
    "usage": [
      {
        "th": "ใช้เหง้าสดปรุงอาหาร เช่น ผัดเผ็ดและน้ำพริก",
        "en": "Use fresh rhizomes in dishes such as stir-fries and curry pastes"
      },
      {
        "th": "ต้มกับน้ำดื่ม หรือใช้ตามฉลากผลิตภัณฑ์",
        "en": "Boil in water, or follow the product label"
      }
    ],
    "cautions": [
      {
        "th": "สตรีมีครรภ์และให้นมบุตรควรปรึกษาแพทย์",
        "en": "Pregnant or breastfeeding women should consult a doctor"
      },
      {
        "th": "ผู้ที่เป็นโรคความดันโลหิตสูงควรระวัง",
        "en": "People with high blood pressure should be careful"
      }
    ],
    "svg": "<svg fill=\"none\" viewBox=\"0 0 24 24\"> <rect fill=\"#a1887f\" height=\"5\" rx=\"1\" width=\"8\" x=\"8\" y=\"7\" /> <rect fill=\"#8d6e63\" height=\"10\" rx=\"1\" width=\"2\" x=\"7\" y=\"11\" /> <rect fill=\"#795548\" height=\"11\" rx=\"1\" width=\"2\" x=\"10\" y=\"11\" /> <rect fill=\"#8d6e63\" height=\"10\" rx=\"1\" width=\"2\" x=\"13\" y=\"11\" /> <rect fill=\"#a1887f\" height=\"8\" rx=\"1\" width=\"2\" x=\"15\" y=\"12\" /> <rect fill=\"#4caf50\" height=\"5\" width=\"2\" x=\"11\" y=\"3\" /> </svg>"
  },
  {
    "id": "gooseberry",
    "photo": "indiangooseberry.jpg",
    "th": "มะขามป้อม",
    "en": "Indian Gooseberry",
    "sci": "Phyllanthus emblica",
    "author": "L.",
    "family": "PHYLLANTHACEAE",
    "taste": {
      "th": "รสเปรี้ยวฝาดขม",
      "en": "Sour, astringent & bitter"
    },
    "prop": [
      "cool",
      {
        "th": "ฤทธิ์เย็น",
        "en": "Cooling"
      }
    ],
    "part": {
      "th": "ผล",
      "en": "Fruit"
    },
    "group": {
      "th": "เพื่อบำรุงสุขภาพ",
      "en": "Wellness"
    },
    "props": [
      {
        "th": "อุดมด้วยวิตามินซี",
        "en": "Rich in vitamin C"
      },
      {
        "th": "แก้ไอ ขับเสมหะ",
        "en": "Eases cough & loosens phlegm"
      },
      {
        "th": "บรรเทาอาการเจ็บคอ",
        "en": "Sore throat relief"
      }
    ],
    "usage": [
      {
        "th": "กินผลสด จิ้มเกลือ หรือเกลือพริก",
        "en": "Eat fresh fruit, dipped in salt"
      },
      {
        "th": "ใช้ผลสดคั้นน้ำ หรือแช่อิ่มเป็นเครื่องดื่ม",
        "en": "Juice fresh fruit or preserve as a drink"
      }
    ],
    "cautions": [
      {
        "th": "ผู้ที่เป็นโรคกระเพาะอาหารไม่ควรกินครั้งละมากๆ",
        "en": "People with gastric ulcers should not eat large amounts"
      },
      {
        "th": "ผู้ที่ใช้ยาละลายลิ่มเลือดควรปรึกษาแพทย์",
        "en": "Consult a doctor if taking blood thinners"
      }
    ],
    "svg": "<svg fill=\"none\" viewBox=\"0 0 24 24\"> <rect fill=\"#5d4037\" height=\"12\" width=\"2\" x=\"11\" y=\"2\" /> <circle cx=\"12\" cy=\"14\" fill=\"#8bc34a\" r=\"6\" /> <circle cx=\"14\" cy=\"12\" fill=\"#aed581\" r=\"2\" /> <rect fill=\"#4caf50\" height=\"4\" width=\"3\" x=\"7\" y=\"5\" /> <rect fill=\"#4caf50\" height=\"4\" width=\"3\" x=\"14\" y=\"6\" /> </svg>"
  },
  {
    "id": "butterflypea",
    "photo": "butterflypea.jpg",
    "th": "อัญชัน",
    "en": "Butterfly Pea",
    "sci": "Clitoria ternatea",
    "author": "L.",
    "family": "FABACEAE",
    "taste": {
      "th": "รสจืดเย็น",
      "en": "Bland"
    },
    "prop": [
      "cool",
      {
        "th": "ฤทธิ์เย็น",
        "en": "Cooling"
      }
    ],
    "part": {
      "th": "ดอก",
      "en": "Flowers"
    },
    "group": {
      "th": "เพื่อบำรุงสุขภาพ",
      "en": "Wellness"
    },
    "props": [
      {
        "th": "มีสารแอนโทไซยานินสูง",
        "en": "High in anthocyanins"
      },
      {
        "th": "ช่วยบำรุงสายตา",
        "en": "Supports eye health"
      },
      {
        "th": "บำรุงเส้นผม",
        "en": "Hair care"
      }
    ],
    "usage": [
      {
        "th": "ใช้ดอกสดหรือแห้งชงน้ำร้อนดื่ม น้ำจะเป็นสีน้ำเงิน",
        "en": "Brew fresh or dried flowers in hot water; the tea turns blue"
      },
      {
        "th": "บีบมะนาวลงไป สีจะเปลี่ยนเป็นม่วง",
        "en": "Add lime juice and the color turns purple"
      }
    ],
    "cautions": [
      {
        "th": "ดื่มในปริมาณที่เหมาะสม ไม่ควรดื่มมากเกินไป",
        "en": "Drink in moderation"
      },
      {
        "th": "สตรีมีครรภ์ควรปรึกษาแพทย์ก่อนดื่มเป็นประจำ",
        "en": "Pregnant women should consult a doctor before regular use"
      }
    ],
    "svg": "<svg fill=\"none\" viewBox=\"0 0 24 24\"> <rect fill=\"#2e7d32\" height=\"14\" width=\"2\" x=\"11\" y=\"8\" /> <circle cx=\"11\" cy=\"9\" fill=\"#1e3a8a\" r=\"6\" /> <circle cx=\"11\" cy=\"9\" fill=\"#3b82f6\" r=\"3.5\" /> <circle cx=\"11\" cy=\"9\" fill=\"#fef08a\" r=\"1.5\" /> <rect fill=\"#4caf50\" height=\"4\" rx=\"1\" width=\"5\" x=\"5\" y=\"14\" /> </svg>"
  },
  {
    "id": "phlai",
    "photo": "phlai.jpg",
    "th": "ไพล",
    "en": "Phlai",
    "sci": "Zingiber montanum",
    "author": "(J.Koenig) Link ex A.Dietr. (syn. Zingiber cassumunar Roxb.)",
    "family": "ZINGIBERACEAE",
    "taste": {
      "th": "รสเผ็ดปร่า",
      "en": "Pungent"
    },
    "prop": [
      "warm",
      {
        "th": "ฤทธิ์อุ่น",
        "en": "Warming"
      }
    ],
    "part": {
      "th": "เหง้า",
      "en": "Rhizome"
    },
    "group": {
      "th": "สมุนไพรเฉพาะทาง",
      "en": "Specialist herb"
    },
    "props": [
      {
        "th": "บรรเทาอาการเคล็ดขัดยอก ฟกช้ำ",
        "en": "Relieves sprains & bruises"
      },
      {
        "th": "บรรเทาอาการปวดเมื่อยกล้ามเนื้อ",
        "en": "Eases muscle aches"
      },
      {
        "th": "นิยมใช้ทำลูกประคบ",
        "en": "Popular in herbal compress balls"
      }
    ],
    "usage": [
      {
        "th": "ใช้เหง้าสดทำลูกประคบ นำไปนึ่งแล้วประคบบริเวณที่ปวด",
        "en": "Use fresh rhizome in herbal compresses; steam and apply to sore areas"
      }
    ],
    "cautions": [
      {
        "th": "ใช้ภายนอกเท่านั้น",
        "en": "For external use only"
      },
      {
        "th": "ห้ามใช้กับบาดแผลเปิด และสตรีมีครรภ์ควรหลีกเลี่ยง",
        "en": "Do not apply to open wounds; pregnant women should avoid"
      }
    ],
    "svg": "<svg fill=\"none\" viewBox=\"0 0 24 24\"> <rect fill=\"#f59e0b\" height=\"7\" rx=\"2\" width=\"11\" x=\"7\" y=\"13\" /> <rect fill=\"#d97706\" height=\"5\" rx=\"2\" width=\"5\" x=\"4\" y=\"11\" /> <rect fill=\"#b45309\" height=\"5\" rx=\"2\" width=\"5\" x=\"15\" y=\"11\" /> <rect fill=\"#388e3c\" height=\"9\" width=\"2\" x=\"11\" y=\"4\" /> <rect fill=\"#4caf50\" height=\"5\" rx=\"1\" width=\"4\" x=\"7\" y=\"6\" /> <rect fill=\"#4caf50\" height=\"5\" rx=\"1\" width=\"4\" x=\"13\" y=\"7\" /> </svg>"
  },
  {
    "id": "whitecraneflower",
    "photo": "whitecraneflower.png",
    "th": "ทองพันชั่ง",
    "en": "White Crane Flower",
    "sci": "Rhinacanthus nasutus",
    "author": "(L.) Kurz",
    "family": "ACANTHACEAE",
    "taste": {
      "th": "รสจืดเบื่อ",
      "en": "Bland, slightly bitter"
    },
    "prop": [
      "cool",
      {
        "th": "ฤทธิ์เย็น",
        "en": "Cooling"
      }
    ],
    "part": {
      "th": "ใบและราก",
      "en": "Leaves & roots"
    },
    "group": {
      "th": "สมุนไพรเฉพาะทาง",
      "en": "Specialist herb"
    },
    "props": [
      {
        "th": "ใช้รักษาโรคผิวหนัง กลากเกลื้อน",
        "en": "Traditionally used for skin conditions such as ringworm"
      },
      {
        "th": "ช่วยลดอาการผื่นคัน",
        "en": "Helps ease itchy rashes"
      },
      {
        "th": "ตามตำราไทยใช้ดับพิษไข้",
        "en": "In Thai tradition, used to reduce fever"
      }
    ],
    "usage": [
      {
        "th": "ใช้ใบหรือรากสดตำละเอียด ผสมเหล้าขาวหรือน้ำ ทาบริเวณผิวหนังที่เป็น",
        "en": "Pound fresh leaves or roots, mix with water or white spirit, and apply to the affected skin"
      }
    ],
    "cautions": [
      {
        "th": "ใช้ภายนอกเท่านั้น ไม่ควรรับประทาน",
        "en": "For external use only; do not ingest"
      },
      {
        "th": "ทดสอบกับผิวบริเวณเล็กๆ ก่อนใช้ หากระคายเคืองให้หยุดใช้",
        "en": "Patch test first; stop if irritation occurs"
      }
    ],
    "svg": "<svg fill=\"none\" viewBox=\"0 0 24 24\"> <rect fill=\"#2e7d32\" height=\"15\" width=\"2\" x=\"11\" y=\"7\" /> <rect fill=\"#ffffff\" height=\"4\" rx=\"1\" width=\"8\" x=\"8\" y=\"4\" /> <rect fill=\"#ffffff\" height=\"7\" rx=\"1\" width=\"3\" x=\"10.5\" y=\"2\" /> <rect fill=\"#f1f8e9\" height=\"3\" width=\"2\" x=\"11\" y=\"5\" /> <rect fill=\"#4caf50\" height=\"4\" rx=\"1\" width=\"5\" x=\"5\" y=\"11\" /> <rect fill=\"#4caf50\" height=\"4\" rx=\"1\" width=\"5\" x=\"14\" y=\"13\" /> </svg>"
  }
];
