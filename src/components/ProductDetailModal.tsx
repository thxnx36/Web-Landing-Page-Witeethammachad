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
    <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-40 flex items-center justify-center p-0">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full h-full md:rounded-2xl md:max-w-4xl md:w-11/12 lg:w-9/12 md:h-auto md:max-h-[95vh] overflow-y-auto md:overflow-hidden relative shadow-xl"
      >
        {/* Close Button - fixed บนขวาสำหรับมือถือ */}
        <button 
          onClick={onClose} 
          className="fixed md:absolute top-3 right-3 md:top-5 md:right-5 z-50 text-gray-700 hover:text-gray-900 bg-white p-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          aria-label="ปิด"
        >
          <FaTimes className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* แบ่งเป็น 2 โหมด: หน้าจอเล็กเลื่อนตรงๆ, หน้าจอใหญ่เลื่อนแยกเป็นส่วนๆ */}
        
        {/* สำหรับมือถือ - เลื่อนทั้งหน้าจอได้เพื่อความสะดวก */}
        <div className="md:hidden p-4 pt-14 h-full overflow-y-auto pb-20">
          <h2 className="text-xl font-medium text-[var(--text-dark)] mb-3 font-heading">{product.name}</h2>
          
          {/* Product Images Slider สำหรับมือถือ */}
          <div className="relative bg-[var(--light-green)] rounded-xl overflow-hidden shadow-sm mb-4 aspect-square">
            {product.images.length > 0 ? (
              <div className="product-gallery-container relative h-full w-full">
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
                  className="h-full w-full"
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide key={index} className="w-full h-full">
                      <div className="relative w-full h-full">
                        <Image 
                          src={image} 
                          alt={`${product.name} - รูปภาพที่ ${index + 1}`}
                          className="object-contain"
                          fill
                          sizes="100vw"
                          style={{ objectPosition: 'center center' }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* ปุ่มเลื่อนรูปภาพที่ใช้งานง่าย */}
                <button className="custom-swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-200">
                  <BsChevronLeft className="text-[var(--primary-green)] text-lg" />
                </button>
                <button className="custom-swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-200">
                  <BsChevronRight className="text-[var(--primary-green)] text-lg" />
                </button>
                
                {/* จุดแสดงตำแหน่งรูปภาพ */}
                <div className="swiper-pagination absolute bottom-2 left-0 right-0 z-10"></div>
              </div>
            ) : (
              <div className="aspect-square flex items-center justify-center">
                <FaLeaf className="text-5xl text-[var(--primary-green)] opacity-50" />
              </div>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-4 font-light">{product.description}</p>
          
          {/* Size Options - แสดงเฉพาะเมื่อมีหลายขนาด */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-4">
              <div className="text-sm text-gray-700 mb-2 font-medium">ขนาด:</div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1.5 text-sm border rounded-md transition-colors ${
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
          <div className="flex items-center mb-4">
            {getDisplayPrice()}
          </div>
          
          {/* Tabs - สำหรับมือถือ */}
          <div className="border-b border-gray-200 mb-4 flex justify-center bg-white">
            <div className="grid grid-cols-3 gap-1 w-full">
              <button
                className={`px-2 py-2 rounded-t-lg text-center text-sm font-medium transition-all duration-200 ${
                  activeTab === 'properties'
                    ? 'bg-[var(--light-green)] text-[var(--primary-green)]'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('properties')}
              >
                ส่วนประกอบ
              </button>
              <button
                className={`px-2 py-2 rounded-t-lg text-center text-sm font-medium transition-all duration-200 ${
                  activeTab === 'usage'
                    ? 'bg-[var(--light-green)] text-[var(--primary-green)]'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('usage')}
              >
                วิธีใช้
              </button>
              <button
                className={`px-2 py-2 rounded-t-lg text-center text-sm font-medium transition-all duration-200 ${
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
          
          {/* Tab Content - สำหรับมือถือ */}
          <div className="text-gray-700 text-sm p-4 border border-[var(--light-green)] rounded-lg mb-4">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'properties' && (
                <ul className="space-y-2 list-disc pl-5 font-light">
                  {product.properties.map((prop, index) => (
                    <li key={index}>{prop}</li>
                  ))}
                </ul>
              )}

              {activeTab === 'usage' && (
                <ul className="space-y-2 list-disc pl-5 font-light">
                  {product.usage.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              )}

              {activeTab === 'storage' && (
                <>
                  {Array.isArray(product.storage) ? (
                    <ul className="space-y-2 list-disc pl-5 font-light">
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
          
          {/* ปุ่มสั่งซื้อสำหรับมือถือ - fixed ด้านล่าง */}
          <div className="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-gray-100 w-full">
            <a
              href="https://www.facebook.com/witeethammachad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex justify-center items-center w-full text-center py-2.5 rounded-xl text-sm transition-all duration-200 hover:shadow-lg"
            >
              <FaFacebook className="mr-2 text-lg" />
              สั่งซื้อผ่าน Facebook
            </a>
          </div>
        </div>
        
        {/* สำหรับ Desktop - 2 คอลัมน์ เลื่อนเฉพาะส่วนตรงกลาง */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-6 md:p-6 h-full">
          {/* Product Images Slider สำหรับ Desktop */}
          <div className="relative bg-[var(--light-green)] rounded-xl overflow-hidden shadow-sm h-[380px] lg:h-[480px]">
            {product.images.length > 0 ? (
              <div className="product-gallery-container relative h-full w-full">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation={{
                    prevEl: '.desktop-swiper-button-prev',
                    nextEl: '.desktop-swiper-button-next',
                  }}
                  pagination={{ 
                    clickable: true,
                    el: '.desktop-swiper-pagination'
                  }}
                  className="h-full w-full"
                >
                  {product.images.map((image, index) => (
                    <SwiperSlide key={index} className="w-full h-full">
                      <div className="relative w-full h-full">
                        <Image 
                          src={image} 
                          alt={`${product.name} - รูปภาพที่ ${index + 1}`}
                          className="object-cover"
                          fill
                          sizes="(max-width: 1024px) 50vw, 40vw"
                          style={{ objectPosition: 'center center' }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* ปุ่มเลื่อนรูปภาพที่ใช้งานง่าย */}
                <button className="desktop-swiper-button-prev absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2.5 shadow-lg hover:bg-gray-100 transition-all duration-200">
                  <BsChevronLeft className="text-[var(--primary-green)] text-xl" />
                </button>
                <button className="desktop-swiper-button-next absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2.5 shadow-lg hover:bg-gray-100 transition-all duration-200">
                  <BsChevronRight className="text-[var(--primary-green)] text-xl" />
                </button>
                
                {/* จุดแสดงตำแหน่งรูปภาพ */}
                <div className="desktop-swiper-pagination absolute bottom-3 left-0 right-0 z-10"></div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <FaLeaf className="text-7xl text-[var(--primary-green)] opacity-50" />
              </div>
            )}
          </div>
          
          {/* Product Details สำหรับ Desktop */}
          <div className="flex flex-col h-[380px] lg:h-[480px] overflow-hidden">
            <div className="flex-shrink-0 pb-3">
              <h2 className="text-xl lg:text-2xl font-medium text-[var(--text-dark)] mb-2 font-heading">{product.name}</h2>
              <p className="text-sm lg:text-base text-gray-600 mb-3 font-light">{product.description}</p>
              
              {/* Size Options - แสดงเฉพาะเมื่อมีหลายขนาด */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-3">
                  <div className="text-sm lg:text-base text-gray-700 mb-1.5 font-medium">ขนาด:</div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(size)}
                        className={`px-2.5 py-1.5 text-sm lg:text-base border rounded-md transition-colors ${
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
              <div className="flex items-center mb-3">
                {getDisplayPrice()}
              </div>
            </div>
            
            {/* Tabs - สำหรับ Desktop */}
            <div className="border-b border-gray-200 mb-3 flex justify-center bg-white flex-shrink-0">
              <div className="grid grid-cols-3 gap-1 w-full">
                <button
                  className={`px-2 py-2 rounded-t-lg text-center text-sm lg:text-base font-medium transition-all duration-200 ${
                    activeTab === 'properties'
                      ? 'bg-[var(--light-green)] text-[var(--primary-green)]'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('properties')}
                >
                  ส่วนประกอบ
                </button>
                <button
                  className={`px-2 py-2 rounded-t-lg text-center text-sm lg:text-base font-medium transition-all duration-200 ${
                    activeTab === 'usage'
                      ? 'bg-[var(--light-green)] text-[var(--primary-green)]'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('usage')}
                >
                  วิธีใช้
                </button>
                <button
                  className={`px-2 py-2 rounded-t-lg text-center text-sm lg:text-base font-medium transition-all duration-200 ${
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
            
            {/* Tab Content - สำหรับ Desktop - ส่วนนี้เลื่อนได้ */}
            <div className="text-gray-700 text-sm lg:text-base p-3 lg:p-4 border border-[var(--light-green)] rounded-lg flex-grow overflow-y-auto mb-[70px]">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'properties' && (
                  <ul className="space-y-2 list-disc pl-5 font-light">
                    {product.properties.map((prop, index) => (
                      <li key={index}>{prop}</li>
                    ))}
                  </ul>
                )}

                {activeTab === 'usage' && (
                  <ul className="space-y-2 list-disc pl-5 font-light">
                    {product.usage.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                )}

                {activeTab === 'storage' && (
                  <>
                    {Array.isArray(product.storage) ? (
                      <ul className="space-y-2 list-disc pl-5 font-light">
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
            
            {/* Contact Button - สำหรับ Desktop - ติดอยู่ด้านล่าง */}
            <div className="absolute bottom-0 left-1/2 right-0 p-4 pt-2 bg-white border-t border-gray-100 w-[calc(50%-1.5rem)]">
              <a
                href="https://www.facebook.com/witeethammachad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex justify-center items-center w-full text-center py-2.5 rounded-xl text-sm lg:text-base transition-all duration-200 hover:shadow-lg"
              >
                <FaFacebook className="mr-2 text-lg" />
                สั่งซื้อผ่าน Facebook
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetailModal; 