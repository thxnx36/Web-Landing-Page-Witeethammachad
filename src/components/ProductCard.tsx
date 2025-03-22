"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaLeaf } from 'react-icons/fa';
import { Product } from '@/data/products';
import ProductDetailModal from '@/components/ProductDetailModal';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // กำหนดราคาที่จะแสดงในการ์ด
  const getDisplayPrice = () => {
    // กรณีมีหลายขนาด แสดงเริ่มต้นที่... (ตามราคาต่ำสุด)
    if (product.sizes && product.sizes.length > 0) {
      // หาราคาต่ำสุดและสูงสุดจากขนาดต่างๆ
      const prices = product.sizes.map(size => size.price);
      const minPrice = Math.min(...prices);
      
      return `${minPrice} บาท`;
    }
    
    // กรณีมีราคาเดียว
    return product.price ? `${product.price} บาท` : "";
  };

  return (
    <>
      <div 
        className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-[var(--light-green)] w-full">
          {product.images.length > 0 ? (
            <Image 
              src={product.images[0]} 
              alt={product.name} 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              priority
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FaLeaf className="text-5xl text-[var(--primary-green)] opacity-30" />
            </div>
          )}
          {product.isPopular && (
            <div className="absolute top-2 right-2 bg-[var(--primary-green)] text-white text-xs px-2 py-1 rounded-full flex items-center z-10">
              <FaStar className="mr-1" />
              <span>ขายดี</span>
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="p-3 sm:p-4 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-medium text-[var(--text-dark)] mb-1 line-clamp-2">{product.name}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2 font-light">{product.description}</p>
          </div>
          
          {/* Price */}
          <div className="flex items-center mt-2">
            {product.sizes && product.sizes.length > 1 ? (
              <span className="text-lg sm:text-xl font-medium text-[var(--primary-green)]">เริ่มต้น {getDisplayPrice()}</span>
            ) : (
              <span className="text-lg sm:text-xl font-medium text-[var(--primary-green)]">{getDisplayPrice()}</span>
            )}
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal 
        product={product} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ProductCard; 