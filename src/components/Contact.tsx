"use client";

import { FaFacebook, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
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
            ติดต่อเรา
          </motion.h2>
          <motion.p 
            className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            สอบถามข้อมูลเพิ่มเติมหรือสั่งซื้อผลิตภัณฑ์ได้ตามช่องทางด้านล่าง
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Contact Information */}
          <motion.div 
            className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-medium mb-6 text-[var(--text-dark)] pb-2 border-b border-gray-200">
              ข้อมูลการติดต่อ
            </h3>
            
            <div className="space-y-5">
              <div className="p-3 rounded-lg flex items-start">
                <FaMapMarkerAlt className="text-[var(--primary-green)] mt-1 mr-3 flex-shrink-0 text-base sm:text-lg" />
                <div>
                  <p className="font-medium text-[var(--text-dark)] text-sm sm:text-base mb-1">ที่อยู่</p>
                  <p className="text-gray-600 text-xs sm:text-sm font-light">99 ตำบล น้ำแวน อำเภอ เชียงคำ พะเยา 56110</p>
                </div>
              </div>
              
              <div className="p-3 rounded-lg flex items-start">
                <FaPhone className="text-[var(--primary-green)] mt-1 mr-3 flex-shrink-0 text-base sm:text-lg" />
                <div>
                  <p className="font-medium text-[var(--text-dark)] text-sm sm:text-base mb-1">เบอร์โทรศัพท์</p>
                  <p className="text-gray-600 text-xs sm:text-sm font-light">095-871-3493</p>
                </div>
              </div>
              
              <div className="p-3 rounded-lg flex items-start">
                <FaFacebook className="text-[var(--primary-green)] mt-1 mr-3 flex-shrink-0 text-base sm:text-lg" />
                <div>
                  <p className="font-medium text-[var(--text-dark)] text-sm sm:text-base mb-1">Facebook</p>
                  <a 
                    href="https://www.facebook.com/witeethammachad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--primary-green)] hover:underline text-xs sm:text-sm transition-colors duration-300 font-light"
                  >
                    วิถีธรรมชาติ ออร์แกนิค
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-sm h-[350px] sm:h-[450px] border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7522.127964232205!2d100.26304359999999!3d19.495882899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d7ed0018a46f61%3A0x905db215cea297b6!2z4Lia4LmJ4Liy4LiZ4Liq4Lin4LiZ4Lin4Li04LiW4Li14LiY4Lij4Lij4Lih4LiK4Liy4LiV4Li0!5e0!3m2!1sth!2sth!4v1742578123239!5m2!1sth!2sth"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="แผนที่บ้านสวนวิถีธรรมชาติ"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 