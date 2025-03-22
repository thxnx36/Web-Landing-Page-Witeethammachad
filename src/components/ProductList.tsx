"use client";

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

// ประเภทสินค้าที่ใช้ในการกรอง
type FilterType = 'all' | 'popular' | 'skin' | 'hair' | 'health';

const ProductList = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  
  // ฟังก์ชันกรองสินค้าตามประเภท
  const filterProducts = () => {
    switch (activeFilter) {
      case 'popular':
        return products.filter(product => product.isPopular);
      case 'skin':
        return products.filter(product => 
          product.name.includes('ผิว') || 
          product.name.includes('สเปรย์') || 
          product.name.includes('ครีม') || 
          product.name.includes('สบู่') ||
          product.name.includes('หน้า')
        );
      case 'hair':
        return products.filter(product => 
          product.name.includes('ผม') || 
          product.name.includes('แชมพู')
        );
      case 'health':
        return products.filter(product => 
          product.name.includes('นวด') || 
          product.name.includes('ยาหม่อง') || 
          product.name.includes('ประคบ') ||
          product.name.includes('ชา') ||
          product.name.includes('น้ำมัน')
        );
      default:
        return products;
    }
  };

  const filteredProducts = filterProducts();

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2 
            className="text-2xl md:text-3xl font-medium mb-2 md:mb-3 text-[var(--text-dark)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            สินค้าของเรา
          </motion.h2>
          <motion.p 
            className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            จำนวนขึ้นสินค้าขึ้นอยู่กับรอบผลิต ติดตามที่หน้า Facebook
          </motion.p>
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
            onClick={() => setActiveFilter('skin')}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeFilter === 'skin'
                ? 'bg-[var(--primary-green)] text-white shadow-md'
                : 'bg-[var(--light-green)] text-gray-600 hover:text-[var(--primary-green)]'
            }`}
          >
            ผลิตภัณฑ์ดูแลผิว
          </button>
          <button
            onClick={() => setActiveFilter('health')}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeFilter === 'health'
                ? 'bg-[var(--primary-green)] text-white shadow-md'
                : 'bg-[var(--light-green)] text-gray-600 hover:text-[var(--primary-green)]'
            }`}
          >
            สมุนไพรบำรุงสุขภาพ
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