"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaLeaf, FaFacebook } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Product, ProductSize } from '@/data/products';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal = ({ product, isOpen, onClose }: ProductDetailModalProps) => {
  const [activeTab, setActiveTab] = useState<'properties' | 'usage' | 'storage'>('properties');
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  
  // เลือกขนาดเริ่มต้น (ขนาดแรกในรายการหรือราคาปกติสำหรับสินค้าที่มีขนาดเดียว)
  useEffect(() => {
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    } else {
      setSelectedSize(null);
    }
  }, [product]);
  
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // แสดงราคาตามที่เลือก
  const getDisplayPrice = () => {
    if (selectedSize) {
      return selectedSize.discountPrice ? (
        <>
          <span className="text-xl sm:text-2xl font-medium text-[var(--primary-green)]">{selectedSize.discountPrice} บาท</span>
          <span className="ml-2 text-sm sm:text-base text-gray-500 line-through">{selectedSize.price} บาท</span>
        </>
      ) : (
        <span className="text-xl sm:text-2xl font-medium text-[var(--primary-green)]">{selectedSize.price} บาท</span>
      );
    } else if (product.price) {
      return product.discountPrice ? (
        <>
          <span className="text-xl sm:text-2xl font-medium text-[var(--primary-green)]">{product.discountPrice} บาท</span>
          <span className="ml-2 text-sm sm:text-base text-gray-500 line-through">{product.price} บาท</span>
        </>
      ) : (
        <span className="text-xl sm:text-2xl font-medium text-[var(--primary-green)]">{product.price} บาท</span>
      );
    }
    
    return null;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-70 flex items-center justify-center p-0 md:p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full h-full md:rounded-2xl md:max-w-4xl md:w-full md:max-h-[90vh] md:h-auto overflow-auto relative shadow-xl"
      >
        {/* Close Button - fixed บนขวาสำหรับมือถือ */}
        <button 
          onClick={onClose} 
          className="fixed md:absolute top-3 right-3 md:top-5 md:right-5 z-50 text-gray-700 hover:text-gray-900 bg-white p-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          aria-label="ปิด"
        >
          <FaTimes className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <div className="p-4 pt-12 md:pt-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 md:gap-10">
            {/* Product Images Slider */}
            <div className="relative bg-[var(--light-green)] rounded-xl overflow-hidden shadow-sm">
              {product.images.length > 0 ? (
                <div className="product-gallery-container relative aspect-square w-full h-full">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                      prevEl: '.custom-swiper-button-prev',
                      nextEl: '.custom-swiper-button-next',
                    }}
                    pagination={{ 
                      clickable: true,
                      el: '.swiper-pagination'
                    }}
                    className="h-full w-full aspect-square"
                  >
                    {product.images.map((image, index) => (
                      <SwiperSlide key={index} className="aspect-square w-full h-full">
                        <div className="relative w-full h-full">
                          <Image 
                            src={image} 
                            alt={`${product.name} - รูปภาพที่ ${index + 1}`}
                            className="object-contain md:object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, 40vw"
                            style={{ objectPosition: 'center center' }}
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* ปุ่มเลื่อนรูปภาพที่ใช้งานง่าย */}
                  <button className="custom-swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-200">
                    <BsChevronLeft className="text-[var(--primary-green)] text-xl" />
                  </button>
                  <button className="custom-swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-200">
                    <BsChevronRight className="text-[var(--primary-green)] text-xl" />
                  </button>
                  
                  {/* จุดแสดงตำแหน่งรูปภาพ */}
                  <div className="swiper-pagination absolute bottom-2 left-0 right-0 z-10"></div>
                </div>
              ) : (
                <div className="aspect-square flex items-center justify-center">
                  <FaLeaf className="text-5xl sm:text-7xl text-[var(--primary-green)] opacity-50" />
                </div>
              )}
            </div>

            {/* Product Details - เพิ่มขนาดตัวอักษรบนมือถือ */}
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-[var(--text-dark)] mb-2 font-heading">{product.name}</h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 font-light">{product.description}</p>
              
              {/* Size Options - แสดงเฉพาะเมื่อมีหลายขนาด */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-4 sm:mb-5">
                  <div className="text-sm sm:text-base text-gray-700 mb-2 font-medium">ขนาด:</div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-2 text-sm sm:text-base border rounded-md transition-colors ${
                          selectedSize === size
                            ? 'bg-[var(--light-green)] border-[var(--primary-green)] text-[var(--primary-green)]'
                            : 'border-gray-300 text-gray-700 hover:border-[var(--primary-green)]'
                        }`}
                      >
                        {size.size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Price */}
              <div className="flex items-center mb-4 sm:mb-6">
                {getDisplayPrice()}
              </div>

              {/* Tabs - มินิมอลดีไซน์ ปรับให้ใหญ่ขึ้นบนมือถือ */}
              <div className="border-b border-gray-200 mb-4 sm:mb-5 flex justify-center">
                <div className="grid grid-cols-3 gap-1 sm:gap-2 w-full">
                  <button
                    className={`px-2 py-2 sm:px-3 sm:py-3 rounded-t-lg text-center text-sm sm:text-base font-medium transition-all duration-200 ${
                      activeTab === 'properties'
                        ? 'bg-[var(--light-green)] text-[var(--primary-green)]'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab('properties')}
                  >
                    ส่วนประกอบ
                  </button>
                  <button
                    className={`px-2 py-2 sm:px-3 sm:py-3 rounded-t-lg text-center text-sm sm:text-base font-medium transition-all duration-200 ${
                      activeTab === 'usage'
                        ? 'bg-[var(--light-green)] text-[var(--primary-green)]'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab('usage')}
                  >
                    วิธีใช้
                  </button>
                  <button
                    className={`px-2 py-2 sm:px-3 sm:py-3 rounded-t-lg text-center text-sm sm:text-base font-medium transition-all duration-200 ${
                      activeTab === 'storage'
                        ? 'bg-[var(--light-green)] text-[var(--primary-green)]'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveTab('storage')}
                  >
                    การเก็บรักษา
                  </button>
                </div>
              </div>

              {/* Tab Content - เพิ่มขนาดตัวอักษรเนื้อหาบนมือถือ */}
              <div className="text-gray-700 text-sm sm:text-base p-4 sm:p-5 border border-[var(--light-green)] rounded-lg min-h-[150px] max-h-[200px] sm:max-h-[220px] overflow-y-auto">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 'properties' && (
                    <ul className="space-y-2 sm:space-y-3 list-disc pl-5 font-light">
                      {product.properties.map((prop, index) => (
                        <li key={index}>{prop}</li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'usage' && (
                    <ul className="space-y-2 sm:space-y-3 list-disc pl-5 font-light">
                      {product.usage.map((use, index) => (
                        <li key={index}>{use}</li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'storage' && (
                    <>
                      {Array.isArray(product.storage) ? (
                        <ul className="space-y-2 sm:space-y-3 list-disc pl-5 font-light">
                          {product.storage.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="font-light">{product.storage}</p>
                      )}
                    </>
                  )}
                </motion.div>
              </div>

              {/* Contact Button - เพิ่มขนาดปุ่มและตัวอักษรบนมือถือ */}
              <div className="mt-5 sm:mt-6">
                <a
                  href="https://www.facebook.com/witeethammachad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex justify-center items-center w-full text-center py-3 sm:py-4 rounded-xl text-sm sm:text-base transition-all duration-200 hover:shadow-lg"
                >
                  <FaFacebook className="mr-2 text-lg sm:text-xl" />
                  สั่งซื้อผ่าน Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetailModal; 