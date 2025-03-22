"use client";

import { FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 section-bg-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-dark)]">
              ผลิตภัณฑ์จาก<span className="text-[var(--primary-green)]">ธรรมชาติ</span>
              <br />เพื่อสุขภาพที่ดี
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              บ้านสวนวิถีธรรมชาติ นำเสนอผลิตภัณฑ์สกัดจากธรรมชาติ 100%    
              เพื่อสุขภาพที่ดีและความงามตามธรรมชาติ
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products" 
                className="btn-primary text-center py-3 px-6 rounded-lg"
              >
                ดูสินค้าทั้งหมด
              </a>
              <a 
                href="https://www.facebook.com/witeethammachad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline text-center py-3 px-6 rounded-lg flex items-center justify-center gap-2"
              >
                <FaFacebook className="text-xl" />
                <span>ติดตามเราบน Facebook</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <div className="relative z-10">
                <Image 
                  src="/images/product.png" 
                  alt="ผลิตภัณฑ์สมุนไพรไทย" 
                  width={500}
                  height={500}
                  className="object-contain" 
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute w-64 h-64 rounded-full bg-[var(--primary-green)] opacity-10 -top-10 -right-10 z-0"></div>
              <div className="absolute w-32 h-32 rounded-full bg-[var(--primary-green)] opacity-10 -bottom-5 -left-5 z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 