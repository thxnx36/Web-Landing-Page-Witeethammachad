"use client";

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import FaqButton from './FaqModal';
import { motion } from 'framer-motion';

// ประเภทสินค้าที่ใช้ในการกรอง
type FilterType = 'all' | 'popular' | 'skincare' | 'oral' | 'drink' | 'aromatherapy';

const ProductList = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  
  // ฟังก์ชันกรองสินค้าตามประเภท
  const filterProducts = () => {
    switch (activeFilter) {
      case 'popular':
        return products.filter(product => product.isPopular);
      case 'skincare':
        // สินค้าเกี่ยวกับบำรุงผิวหน้าและผิวกาย
        return products.filter(product => 
          product.name.includes('สเปรย์') || 
          product.name.includes('โทนเนอร์') ||
          product.id === 1 || // สเปรย์น้ำตบว่านตาลเดี่ยว
          product.id === 2 || // โทนเนอร์สามสหาย
          product.id === 7    // โทนเนอร์หัวไชเท้าสกัด
        );
      case 'oral':
        // สินค้าเกี่ยวกับการดูแลช่องปาก
        return products.filter(product => 
          product.name.includes('ปาก') ||
          product.id === 4    // น้ำยาบ้วนปากกานพลูสกัด
        );
      case 'drink':
        // เครื่องดื่มสมุนไพรและของกิน
        return products.filter(product => 
          product.name.includes('น้ำดื่ม') || 
          product.name.includes('ทะลวง') ||
          product.id === 3 || // ทะลวงหลอดเลือดพลัส
          product.id === 5 || // น้ำดื่มสุขชะลอวัย สูตรขมิ้นชัน
          product.id === 6    // น้ำดื่มสุขชะลอวัย สูตรกระชาย
        );
      case 'aromatherapy':
        // น้ำมันหอมระเหยและสมุนไพรสำหรับบำบัด
        return products.filter(product => 
          product.properties.some(prop => 
            prop.includes('ตะไคร้หอม') || 
            prop.includes('ลาเวนเดอร์') ||
            prop.includes('ยูคาลิปตัส')
          )
        );
      default:
        return products;
    }
  };

  const filteredProducts = filterProducts();

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 relative">
          <motion.h2 
            className="text-2xl md:text-3xl font-medium mb-2 md:mb-3 text-[var(--text-dark)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            สินค้าของเรา
          </motion.h2>
          <motion.p 
            className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto px-2 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            จำนวนสินค้าขึ้นอยู่กับรอบผลิต ติดตามที่หน้า Facebook
          </motion.p>
          
          {/* ปุ่มคำถามที่พบบ่อย */}
          <FaqButton />
        </div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-6 md:mb-8 flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeFilter === 'all'
                ? 'bg-[var(--primary-green)] text-white shadow-md'
                : 'bg-[var(--light-green)] text-gray-600 hover:text-[var(--primary-green)]'
            }`}
          >
            สินค้าทั้งหมด
          </button>
          <button
            onClick={() => setActiveFilter('popular')}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeFilter === 'popular'
                ? 'bg-[var(--primary-green)] text-white shadow-md'
                : 'bg-[var(--light-green)] text-gray-600 hover:text-[var(--primary-green)]'
            }`}
          >
            สินค้าขายดี
          </button>
          <button
            onClick={() => setActiveFilter('skincare')}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeFilter === 'skincare'
                ? 'bg-[var(--primary-green)] text-white shadow-md'
                : 'bg-[var(--light-green)] text-gray-600 hover:text-[var(--primary-green)]'
            }`}
          >
            บำรุงผิวหน้า-ผิวกาย
          </button>
          <button
            onClick={() => setActiveFilter('oral')}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeFilter === 'oral'
                ? 'bg-[var(--primary-green)] text-white shadow-md'
                : 'bg-[var(--light-green)] text-gray-600 hover:text-[var(--primary-green)]'
            }`}
          >
            ดูแลช่องปาก
          </button>
          <button
            onClick={() => setActiveFilter('drink')}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeFilter === 'drink'
                ? 'bg-[var(--primary-green)] text-white shadow-md'
                : 'bg-[var(--light-green)] text-gray-600 hover:text-[var(--primary-green)]'
            }`}
          >
            เครื่องดื่มสมุนไพร
          </button>
          <button
            onClick={() => setActiveFilter('aromatherapy')}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeFilter === 'aromatherapy'
                ? 'bg-[var(--primary-green)] text-white shadow-md'
                : 'bg-[var(--light-green)] text-gray-600 hover:text-[var(--primary-green)]'
            }`}
          >
            น้ำมันหอมระเหย
          </button>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (product.id % 10) }}
                className="h-full"
              >
                <ProductCard product={product} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500 font-light">ไม่พบสินค้าในหมวดหมู่นี้</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList; 