/*
 * ไฟล์นี้เก็บข้อมูลสินค้าทั้งหมด
 * 
 * วิธีเพิ่มรูปภาพสินค้า:
 * 1. อัปโหลดรูปภาพของคุณไปยังโฟลเดอร์ public/images/products
 * 2. ตั้งชื่อไฟล์ให้ชัดเจน เช่น spray1.jpg, spray2.jpg เป็นต้น
 * 3. กำหนดเส้นทางรูปภาพในฟิลด์ images ของสินค้า เช่น "/images/products/spray1.jpg"
 * 4. สามารถเพิ่มรูปภาพได้หลายรูปต่อหนึ่งสินค้า (แนะนำ 2-3 รูป)
 * 5. ระบบจะแสดงรูปภาพแรกในรายการสินค้า และแสดงทุกรูปในรายละเอียดสินค้า
 */

// ข้อมูลขนาดและราคาของสินค้า
export interface ProductSize {
  size: string;  // เช่น "100 ml", "200 ml", "ขนาดเล็ก", "ขนาดใหญ่"
  price: number;
  discountPrice?: number;
  stock?: number; // จำนวนสินค้าคงเหลือ (ถ้ามี)
}

export interface Product {
  id: number;
  name: string;
  description: string;
  properties: string[];
  usage: string[];
  storage: string | string[];
  
  // สินค้าสามารถมีได้หลายขนาดและราคา
  // ถ้ามีแค่ขนาดเดียว ใส่แค่ราคาก็ได้
  price?: number;  // ราคาเดียว (ใช้เมื่อมีขนาดเดียว)
  discountPrice?: number;  // ราคาส่วนลด (ใช้เมื่อมีขนาดเดียว)
  
  // รายการขนาดและราคาต่างๆ (ใช้เมื่อมีหลายขนาด)
  sizes?: ProductSize[];
  
  images: string[];
  isPopular?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "สเปรย์น้ำตบว่านตาลเดี่ยว",
    description: "สเปรย์น้ำตบจากสมุนไพรธรรมชาติ 100% ช่วยให้ผิวขาวใส ลดฝ้ากระ",
    properties: [
      "ว่านตาลเดี่ยว - ช่วยสร้างคอลลาเจนและยับยั้งการสร้างเม็ดสีผิว ทำให้ผิวขาวใส",
      "ใบบัวบก - สมานแผล ลดการอักเสบ และช่วยสลายเลือดช้ำ",
      "แตงกวา - กระชับรูขุมขน ให้ผิวเนียนเรียบใส",
      "มะเขือเทศ - มี AHA จากธรรมชาติ ช่วยขจัดเซลล์ผิวเก่า ทำให้ผิวเนียนใส",
      "ไชเท้า - รักษาฝ้า กระ และช่วยผลัดเซลล์ผิวใหม่",
      "หัวปลี - ทำให้ผิวเต่งตึง และสมานแผล",
      "มะพร้าวน้ำหอม - ทำให้ผิวนุ่มและชุ่มชื่น",
      "ใบขลู่ - ลดการอักเสบ สมานแผล และต้านอนุมูลอิสระ",
      "ย่านาง - ถอนพิษ และมีฤทธิ์เย็น",
      "ใบเตย - มีฤทธิ์เย็น ทำให้ผิวผ่องใส"
    ],
    usage: [
      "ฉีดหลังล้างหน้า และตบเบา ๆ ให้ซึมเข้าสู่ผิว เพื่อความนุ่มชุ่มชื่น",
      "ฉีดก่อนออกแดดและหลังจากโดนแดด เพื่อช่วยปลอบประโลมผิว",
      "ฉีดก่อนแต่งหน้า เพื่อให้แป้งติดทนนาน"
    ],
    storage: [
      "เก็บให้พ้นแสงแดด ในอุณหภูมิห้อง อยู่ได้นาน 1 ปี",
      "หากต้องการความเย็นสดชื่น สามารถแช่ตู้เย็นได้"
    ],
    sizes: [
      {
        size: "120 มล.",
        price: 150,
      }
    ],
    images: [
      "/images/products/spray5.jpg",
      "/images/products/spray1.jpg",
      "/images/products/spray3.jpg",
      "/images/products/spray4.jpg"
    ],
    isPopular: true
  },
  {
    id: 2,
    name: "โทนเนอร์สามสหาย",
    description: "สกัดบริสุทธิ์จากธรรมชาติ 100% ปราศจากสารเคมี แอลกอฮอล์ และสารกันบูด",
    properties: [
      "ใบบัวบก - ช่วยสลายเลือดช้ำ ลดการอักเสบ และช่วยลดกระ จุดด่างดำที่เกิดจากสะเก็ดเลือดเสีย",
      "แตงกวา - มีฤทธิ์เย็น ให้ความชุ่มชื่น ผลัดเซลล์ผิวให้เรียบเนียน และกระชับรูขุมขน",
      "หัวไชเท้า - ช่วยผลัดเซลล์ผิวใหม่ ทำให้ผิวกระจ่างใส ไม่หยาบกร้าน และช่วยลบรอยกระ ฝ้า"
    ],
    usage: [
      "หลังล้างหน้า เช็ดหน้าให้แห้ง",
      "หยดโทนเนอร์ลงบนสำลี แล้วเช็ดให้ทั่วใบหน้า",
      "สามารถใช้ตามจุดด่างดำอื่น ๆ เช่น ขาหนีบ คอ หลังหู หรือบริเวณขอบตา",
      "ไม่จำเป็นต้องล้างออก ปล่อยให้สมุนไพรซึมเข้าสู่ผิว"
    ],
    storage: [
      "ควรใช้ก่อน 1 ปีนับจากวันผลิต",
      "เก็บให้พ้นแสงแดด สามารถแช่หรือไม่แช่ตู้เย็นก็ได้",
      "หากเก็บนานอาจเกิดตะกอนหรือเกล็ดวุ้น ซึ่งเป็นน้ำมันหอมระเหยจากสมุนไพร ใช้ได้ตามปกติ"
    ],
    sizes: [
      {
        size: "120 มล.",
        price: 80,
      }
    ],
    images: [
      "/images/products/toner4.jpg",
      "/images/products/toner1.jpg",
      "/images/products/toner2.jpg"
    ],
    isPopular: true
  },
  {
    id: 3,
    name: "ทะลวงหลอดเลือดพลัส",
    description: "น้ำกระเทียมโทน สูตรทะลวงหลอดเลือดพลัส + กระเจี๊ยบและพุทราจีน สกัดเข้มข้นไม่ผสมน้ำ จากสมุนไพรธรรมชาติ 100%",
    properties: [
      "กระเทียมโทน - ล้างไขมันในหลอดเลือด (แรงกว่ากระเทียมธรรมดา 7 เท่า)",
      "ขิงแก่ - ช่วยกระตุ้นการไหลเวียนโลหิต",
      "เลม่อน - ให้รสชาติกลมกล่อมและช่วยล้างสารพิษ",
      "แอปเปิ้ลไซเดอร์ออร์แกนิค - ช่วยลดคอเลสเตอรอล",
      "น้ำผึ้ง - เพิ่มความหวานจากธรรมชาติและช่วยต้านอนุมูลอิสระ",
      "กระเจี๊ยบ - ช่วยให้หลอดเลือดยืดหยุ่น ลดความเสี่ยงเส้นเลือดแตก",
      "พุทราจีน - บำรุงหลอดเลือดและช่วยให้เลือดไหลเวียนดีขึ้น"
    ],
    usage: [
      "ทาน 1-2 ช้อนโต๊ะเพียว ๆ หรือผสมน้ำ ก่อนอาหารเช้า 20-30 นาที",
      "ดื่มน้ำร้อน/น้ำอุ่น 1-2 แก้วหลังรับประทาน",
      "หากต้องการขับไขมันเร็ว แนะนำทานก่อนนอน หรือ 3 เวลาต่อวัน (เช้า-กลางวัน-เย็น)",
      "ผู้ที่เป็นโรคกระเพาะหรือมีปัญหาลำไส้ ควรทานหลังอาหาร",
      "หญิงตั้งครรภ์ห้ามรับประทาน"
    ],
    storage: [
      "ยังไม่เปิด - เก็บนอกตู้เย็นได้ 2 เดือน / ในตู้เย็นได้ 4 เดือน",
      "เปิดแล้ว - ควรเก็บในตู้เย็น อยู่ได้ 2 เดือน"
    ],
    sizes: [
      {
        size: "300 มล.",
        price: 300,
      }
    ],
    images: [
      "/images/products/king4.jpg",
      "/images/products/king2.jpg",
      "/images/products/king3.jpg"
    ],
    isPopular: true
  },
  {
    id: 4,
    name: "น้ำยาบ้วนปากกานพลูสกัด",
    description: "น้ำยาบ้วนปากจากสมุนไพรล้วนๆ สกัดจากดอกกานพลูหลายร้อยดอก ไม่มีสารเคมี ไม่มีสารกันบูด กลั่นสกัดบริสุทธิ์",
    properties: [
      "กานพลู - ช่วยขจัดเชื้อแบคทีเรียในช่องปาก ลดกลิ่นปาก และป้องกันฟันผุ",
      "อบเชย - มีฤทธิ์ต้านเชื้อแบคทีเรีย ลดการอักเสบ และช่วยให้ลมหายใจหอมสดชื่น"
    ],
    usage: [
      "ใช้ 3-5 CC. หลังแปรงฟัน ก่อนนอน หรือเมื่อต้องการ",
      "ไม่จำเป็นต้องบ้วนน้ำตาม เพื่อให้สารสำคัญทำงานอย่างเต็มที่",
      "ช่วยลดเชื้อแบคทีเรียในช่องปากที่การแปรงฟันอาจทำความสะอาดไม่ถึง",
      "ช่วยป้องกันโรคในช่องปาก เช่น หวัดลงคอ ทอมซิลอักเสบ เจ็บคอ หรือแผลร้อนใน",
      "อาจรู้สึกชาที่ลิ้น เนื่องจากน้ำมันกานพลู หากเข้มข้นเกินไปสามารถผสมน้ำเจือจางได้"
    ],
    storage: [
      "เก็บในอุณหภูมิปกติ ได้นาน 2 ปี",
      "ไม่จำเป็นต้องแช่ตู้เย็น",
      "น้ำมันกานพลูอาจตกตะกอนที่ก้นขวด เขย่าขวดก่อนใช้"
    ],
    sizes: [
      {
        size: "500 มล.",
        price: 100,
      }
    ], 
    images: [
      "/images/products/kanplu4.jpg",
      "/images/products/kanplu1.jpg",
      "/images/products/kanplu2.jpg",
      "/images/products/kanplu3.jpg",

    ],
    isPopular: true

  },
  {
    id: 5,
    name: "น้ำดื่มสุขชะลอวัย สูตรขมิ้นชัน",
    description: "น้ำขมิ้นชัน สูตรสกัดเย็น สกัดเข้มข้น ไม่ผสมน้ำ ไม่มีสารกันบูด จากธรรมชาติ 100%",
    properties: [
      "ขมิ้นชัน - ปกป้องตับ ขับสารพิษ ลดไขมันในเลือด และช่วยลดการบีบตัวของลำไส้",
      "ขิง - ช่วยกระตุ้นระบบเผาผลาญ ขับลม และบรรเทาอาการท้องอืด",
      "น้ำผึ้งดอกลำไย - ให้ความหวานจากธรรมชาติ เสริมสร้างภูมิคุ้มกัน และบำรุงร่างกาย",
      "แอปเปิ้ลไซเดอร์ ออร์แกนิค - ช่วยควบคุมระดับน้ำตาลในเลือด และกระตุ้นระบบย่อยอาหาร",
      "เกลือหิมาลายัน - อุดมไปด้วยแร่ธาตุ ช่วยปรับสมดุลร่างกาย และขับสารพิษ"
    ],
    usage: [
      "รับประทาน 1-2 ช้อนโต๊ะ ผสมน้ำ 3 เท่าหรือมากกว่า หลังอาหารเช้าและก่อนนอน",
      "สามารถผสมกับนมเปรี้ยว โยเกิร์ต น้ำผลไม้ มะนาว เลม่อน หรืออื่นๆ ตามชอบ",
      "หากไม่มีโรคกระเพาะ สามารถทานก่อนอาหาร 15-20 นาที เพื่อการดูดซึมที่ดีขึ้น",
      "ตะกอนที่ก้นขวดคือเนื้อขมิ้นชันทานได้ปกติ ควรเขย่าขวดก่อนเท"
    ],
    storage: [
      "เก็บในอุณหภูมิปกติหรือในตู้เย็น",
      "ควรบริโภคให้หมดภายใน 6 เดือนจากวันผลิต ทั้งก่อนและหลังเปิดขวด"
    ],
    sizes : [
      {
        size: "500 มล.",
        price: 340,
      },
      {
        size: "1,000 มล.",
        price: 680,
      }
    ],
    
    images: [
      "/images/products/kamin4.jpg",
      "/images/products/kamin1.jpg",
      "/images/products/kamin3.jpg"
    ],
    isPopular: true

  },
  {
    id: 6,
    name: "น้ำดื่มสุขชะลอวัย สูตรกระชาย",
    description: "น้ำกระชายขาวสกัดเย็นเข้มข้น ปรุงตามสูตรน้ำสุขชะลอวัย มีแอปเปิ้ลไซเดอร์เป็นการถนอมอาหารโดยธรรมชาติ ไม่มีสารกันบูด",
    properties: [
      "กระชายขาว (กระชายเหลือง)",
      "ช่วยบำรุงไตและล้างไต",
    "ขับปัสสาวะ ทำให้ปัสสาวะใสสะอาด",
    "ช่วยปรับการทำงานของระบบต่างๆ ที่เชื่อมโยงกับไต",
    "บำรุงกระดูกและเส้นผม ทำให้ผมดกดำ",
    "ช่วยเพิ่มความกำหนัด กระชับกระเฉงและมีเรี่ยวแรง"
    ],
    usage: [
      "ใช้ 1-2 ช้อนทานแบบเพียวๆ ก่อนอาหารเช้า 20-30 นาที แล้วดื่มน้ำตาม 1-2 แก้ว (น้ำอุ่นจะดีที่สุด)",
    "ใช้ 1-2 ช้อนโต๊ะ ผสมน้ำ 3 เท่า (เช่น 1 ช้อนโต๊ะ ผสมน้ำ 3 ช้อนโต๊ะ) ดื่มน้ำตาม",
    "ใช้ 1-2 ช้อนโต๊ะ ผสมน้ำมะนาว 1-2 ลูก แล้วดื่มน้ำตาม",
    "ใช้ 1-2 ช้อนโต๊ะ ผสมน้ำมะนาว 1 ลูก และนมเปรี้ยว 1 ขวดเล็ก หรือ 3-4 ช้อนโต๊ะ ผสมทิ้งไว้ 15-20 นาที แล้วดื่มน้ำตาม",
    "หากมีโรคลำไส้หรือกระเพาะอาหาร ควรทานหลังอาหาร 20-30 นาที",
    "ผู้ที่มีกรดไหลย้อนสามารถทานตามวิธีที่ 1 ถึง 4 เพื่อช่วยกระตุ้นน้ำย่อยและลดอาการกรดไหลย้อน"
    ],
    storage: [
      "เก็บในอุณหภูมิปกติได้ 6 เดือน หรืออาจจะมากกว่านั้น",
    "ถ้าตู้เย็นว่างสามารถเก็บในตู้เย็นได้"
    ],
    sizes : [
      {
        size: "500 มล.",
        price: 340,
      },
      {
        size: "1,000 มล.",
        price: 680,
      }
    ],
    images: [
      "/images/products/krachai5.jpg",
      "/images/products/krachai1.jpg",
      "/images/products/krachai2.jpg",
      "/images/products/krachai4.jpg"
    ],
    isPopular: true

  },
  {
    id: 7,
    name: "โทนเนอร์หัวไชเท้าสกัด",
    description: "รักษาฝ้า กระ ด้วยสารสกัดจากธรรมชาติ 100% ไม่มีสารเคมี ปลอดภัยสำหรับผิว",
    properties: [
      "หัวไชเท้า หรือหัวผักกาด - รักษาฝ้า กระ จากธรรมชาติ",
      "ใช้เช็ดขาหนีบ - บริเวณที่เช็ดขาวขึ้น",
      "ใช้เช็ดหน้า - รูขุมขนกระชับ ผิวหน้าเรียบตึงขึ้น"
      
    ],
    usage: [
      "ใช้แบบโทนเนอร์ ชุบสำลีเช็ด ตาม จุดที่ต้องการ เช่น ผิวหน้า ซอกคอที่ดำๆ ผิวด้านๆ ขาหนีบดำๆ  โดยไม่ต้องล้างออก",
      "ใช้กับผิวหน้าที่บอบบาง ชุบสำลีเช็ด หรือ ใส่ขวดสเปรย์ ฉีดแล้วทิ้งไว้ 10-15 นาที ค่อยล้างออก"
    ],
    storage: [
      "แช่หรือไม่แช่ตู้เย็นก็ได้",
      "ควรใช้ให้หมด 1ปีจากวันผลิต",
      "เก็บให้พ้นจากแสงแดด"
        ],
    sizes : [
      {
        size: "500 มล.",
        price: 120,
      }
    ],    images: [
      "/images/products/chaitao3.jpg",
      "/images/products/tonerchaitao2.jpg",
      "/images/products/tonerchaitao3.jpg",
    ],
    isPopular: true
  }
]; 