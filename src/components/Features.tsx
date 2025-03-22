"use client";

import { FaLeaf, FaSeedling, FaHeart, FaHandHoldingMedical } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: <FaLeaf className="text-4xl sm:text-5xl text-[var(--primary-green)]" />,
      title: '100% ธรรมชาติ',
      description: 'จากสมุนไพรแท้',
      animation: {
        y: [0, -5, 0],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }
    },
    {
      icon: <FaSeedling className="text-4xl sm:text-5xl text-[var(--primary-green)]" />,
      title: 'ผลิตเอง',
      description: 'ปลอดภัย',
      animation: {
        rotate: [-2, 2, -2],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }
    },
    {
      icon: <FaHeart className="text-4xl sm:text-5xl text-[var(--primary-green)]" />,
      title: 'ดีต่อสุขภาพ',
      description: 'ดูแลสุขภาพอย่างยั่งยืน',
      animation: {
        scale: [1, 1.1, 1],
        transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
      }
    },
    {
      icon: <FaHandHoldingMedical className="text-4xl sm:text-5xl text-[var(--primary-green)]" />,
      title: 'ทำด้วยใจ',
      description: 'ใส่ใจทุกขั้นตอนการผลิต',
      animation: {
        x: [0, 3, 0],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }
    }
  ];

  return (
    <section className="bg-[var(--light-green)] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <motion.h2 
            className="text-2xl md:text-3xl font-medium mb-2 md:mb-3 text-[var(--text-dark)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            คุณค่าที่ส่งต่อถึงคุณ
          </motion.h2>
          <motion.p 
            className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ทุกผลิตภัณฑ์ของเราเลือกสรรและผลิตด้วยความใส่ใจในทุกขั้นตอน
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col items-center justify-center"
            >
              <motion.div
                animate={feature.animation}
                className="mb-3 sm:mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-medium text-[var(--text-dark)] mb-1 sm:mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 