# Product List Landing Page - บ้านสวนวิถีธรรมชาติ

โปรเจคนี้เป็นเว็บไซต์แสดงรายการสินค้าของ "บ้านสวนวิถีธรรมชาติ" ซึ่งพัฒนาด้วย [Next.js](https://nextjs.org) และ TailwindCSS

## การเริ่มต้นใช้งาน

### การติดตั้งและพัฒนา

1. ทำการ clone repository:
```bash
git clone <repository-url>
cd Product-List-Landing-Page
```

2. ติดตั้ง dependencies:
```bash
npm install
# หรือ
yarn install
```

3. รันในโหมดพัฒนา:
```bash
npm run dev
# หรือ
yarn dev
```

เปิด [http://localhost:3000](http://localhost:3000) ด้วยเบราว์เซอร์เพื่อดูผลลัพธ์

### การ Build และ Deploy

1. สร้างไฟล์สำหรับการ production:
```bash
npm run build
# หรือ
yarn build
```

2. รันเว็บไซต์ในโหมด production:
```bash
npm run start
# หรือ
yarn start
```

## การ Deploy บน Vercel

โปรเจคนี้สามารถ deploy ได้อย่างง่ายดายผ่านแพลตฟอร์ม [Vercel](https://vercel.com) โดยมีขั้นตอนดังนี้:

1. Push โค้ดทั้งหมดขึ้น GitHub repository
2. นำเข้า repository ใน Vercel โดยใช้ dashboard ของ Vercel
3. Vercel จะจัดการกระบวนการ build และ deploy ให้โดยอัตโนมัติ
4. หลังจาก deploy สำเร็จ เว็บไซต์จะพร้อมใช้งานบน URL ที่ Vercel จัดเตรียมให้

## โครงสร้างโปรเจค

```
Product-List-Landing-Page/
├── public/                # ไฟล์สถิตต่างๆ (รูปภาพ, ไอคอน)
├── src/
│   ├── app/               # หน้าหลักของแอปพลิเคชัน
│   ├── components/        # คอมโพเนนต์ต่างๆที่ใช้ในเว็บไซต์
│   └── data/              # ข้อมูลสินค้าและข้อมูลอื่นๆ
├── next.config.ts         # การตั้งค่า Next.js
├── package.json           # dependencies และ scripts
└── README.md              # คุณกำลังอ่านไฟล์นี้อยู่!
```

## รายละเอียดเทคโนโลยีที่ใช้

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Carousel**: Swiper
- **Icons**: React Icons
- **Language**: TypeScript
