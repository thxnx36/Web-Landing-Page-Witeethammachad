"use client";

import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--light-green)] pt-6 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-4">
          {/* Logo & Brand Section */}
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-8 w-auto relative">
              <img src="/images/logo.svg" alt="บ้านสวนวิถีธรรมชาติ" className="h-full w-auto" />
            </div>
            <span className="font-medium text-lg text-[var(--primary-green)]">บ้านสวนวิถีธรรมชาติ</span>
          </div>
          <a 
            href="https://www.facebook.com/witeethammachad" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[var(--primary-green)] hover:text-[var(--dark-green)] transition-colors duration-300"
          >
            <FaFacebook className="text-xl" />
            <span className="text-sm">ติดตามเราบน Facebook</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-3 border-t border-gray-200 text-center text-gray-500 text-xs">
          <p>© {currentYear} บ้านสวนวิถีธรรมชาติ. สงวนลิขสิทธิ์ทั้งหมด.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 