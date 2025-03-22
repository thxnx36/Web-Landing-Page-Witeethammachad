"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { motion, AnimatePresence } from 'framer-motion';

// รูปรีวิวทั้งหมด
const reviewImages = [
  '/images/products/review1.jpg',
  '/images/products/review2.jpg',
  '/images/products/review3.jpg',
  '/images/products/review4.jpg',
  '/images/products/review5.jpg',
  '/images/products/review6.jpg',
  '/images/products/review7.jpg',
  '/images/products/review8.jpg',
  '/images/products/review9.jpg',
  '/images/products/review10.jpg',
  '/images/products/review11.jpg',
  '/images/products/review12.jpg',
  '/images/products/review13.jpg',
  '/images/products/review14.jpg'
];

const ReviewCarousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // ปิดโมดัลด้วยคีย์บอร์ด Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // เปิดรูปภาพในโมดัล
  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  return (
    <section className="py-8 md:py-12 bg-[var(--light-green)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <motion.h2 
            className="text-xl md:text-2xl font-medium mb-1 md:mb-2 text-[var(--text-dark)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            รีวิวจากลูกค้า
          </motion.h2>
          <motion.p 
            className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto px-2 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            รีวิวจริงจากผู้ใช้ผลิตภัณฑ์ของเรา
          </motion.p>
        </div>
        
        {/* Review Carousel */}
        <div className="max-w-3xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              prevEl: '.review-prev-button',
              nextEl: '.review-next-button',
            }}
            pagination={{ 
              clickable: true,
              el: '.review-pagination' 
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 10 },
              768: { slidesPerView: 4, spaceBetween: 15 },
              1024: { slidesPerView: 5, spaceBetween: 10 }
            }}
            loop={true}
            className="review-swiper"
          >
            {reviewImages.map((image, index) => (
              <SwiperSlide key={index} className="py-2">
                <div 
                  className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300"
                  onClick={() => openImageModal(image)}
                >
                  <div className="aspect-[3/4] relative">
                    <Image 
                      src={image}
                      alt={`รีวิวจากลูกค้า ${index + 1}`}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 480px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 18vw"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button className="review-prev-button bg-white rounded-full p-2 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300">
              <BsChevronLeft className="text-[var(--primary-green)] text-base" />
            </button>
            <div className="review-pagination"></div>
            <button className="review-next-button bg-white rounded-full p-2 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300">
              <BsChevronRight className="text-[var(--primary-green)] text-base" />
            </button>
          </div>
        </div>

        {/* Modal for Enlarged Image */}
        <AnimatePresence>
          {isModalOpen && selectedImage && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-xl max-h-[80vh] w-[85%] rounded-lg overflow-hidden bg-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[3/4] sm:aspect-auto sm:h-[70vh]">
                  <Image 
                    src={selectedImage}
                    alt="รีวิวขยาย"
                    fill
                    className="object-contain p-2"
                    sizes="85vw"
                  />
                </div>
                
                <button 
                  className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200"
                  onClick={() => setIsModalOpen(false)}
                >
                  <FaTimes className="text-gray-700 text-sm" />
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ReviewCarousel; 