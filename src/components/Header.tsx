"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ตรวจจับการเลื่อนหน้า
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ปิดเมนูเมื่อคลิกลิงก์และเลื่อนไปยังส่วนที่ต้องการ
  const handleLinkClick = (id: string) => {
    setIsMenuOpen(false);
    
    // เลื่อนไปยังส่วนที่ต้องการพร้อมกับ offset สำหรับ fixed header
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 70; // ประมาณความสูงของ header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-3'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 sm:h-10 w-auto relative">
            <img src="/images/logo.svg" alt="บ้านสวนวิถีธรรมชาติ" className="h-full w-auto" />
          </div>
          <span className="text-base sm:text-lg font-semibold text-[var(--primary-green)] hidden sm:inline-block">บ้านสวนวิถีธรรมชาติ</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-8">
          <button 
            onClick={() => handleLinkClick('home')} 
            className="text-gray-700 hover:text-[var(--primary-green)]"
          >
            หน้าแรก
          </button>
          <button 
            onClick={() => handleLinkClick('products')} 
            className="text-gray-700 hover:text-[var(--primary-green)]"
          >
            สินค้าของเรา
          </button>
          <button 
            onClick={() => handleLinkClick('contact')} 
            className="text-gray-700 hover:text-[var(--primary-green)]"
          >
            ติดต่อเรา
          </button>
          <a 
            href="https://www.facebook.com/witeethammachad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-[var(--primary-green)]"
          >
            <FaFacebook className="text-xl" />
            <span className="hidden lg:inline-block">Facebook</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => handleLinkClick('home')}
              className="text-gray-700 hover:text-[var(--primary-green)] text-left"
            >
              หน้าแรก
            </button>
            <button 
              onClick={() => handleLinkClick('products')}
              className="text-gray-700 hover:text-[var(--primary-green)] text-left"
            >
              สินค้าของเรา
            </button>
            <button 
              onClick={() => handleLinkClick('contact')}
              className="text-gray-700 hover:text-[var(--primary-green)] text-left"
            >
              ติดต่อเรา
            </button>
            <a 
              href="https://www.facebook.com/witeethammachad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-[var(--primary-green)]"
            >
              <FaFacebook className="text-xl" />
              <span>Facebook</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 