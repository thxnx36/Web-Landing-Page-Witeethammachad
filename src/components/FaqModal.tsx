"use client";

import { useState } from 'react';
import { FaTimes, FaQuestion, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// ข้อมูลคำถามที่พบบ่อย
const faqData = [
  {
    question: 'สมุนไพรของทางร้านปลอดภัยหรือไม่?',
    answer: 'ผลิตภัณฑ์ทุกชนิดของบ้านสวนวิถีธรรมชาติผลิตจากสมุนไพรธรรมชาติ 100% ไม่มีสารเคมี ไม่มีสารกันบูด ผ่านกระบวนการผลิตที่สะอาดและปลอดภัย เราใส่ใจทุกขั้นตอนผลิตถึงการบรรจุภัณฑ์'
  },
  {
    question: 'ผลิตภัณฑ์มีเลข อย. หรือไม่?',
    answer: 'ผลิตภัณฑ์ของเราเป็นสินค้าที่ผลิตเองแบบครัวเรือน (Homemade) ตามภูมิปัญญาดั้งเดิม โดยเน้นคุณภาพวัตถุดิบธรรมชาติล้วนๆ จึงไม่ได้ขอเลข อย. อย่างไรก็ตาม เรามีการควบคุมคุณภาพทุกขั้นตอนการผลิต และได้รับความไว้วางใจจากลูกค้ามาอย่างยาวนาน'
  },
  {
    question: 'ผลิตภัณฑ์ที่มีตะกอนหรือเกล็ดวุ้นอยู่ด้านล่างขวดปลอดภัยหรือไม่?',
    answer: 'ตะกอนหรือเกล็ดวุ้นที่พบในผลิตภัณฑ์เป็นเรื่องปกติของสินค้าสมุนไพรที่ไม่มีสารกันบูด เป็นเนื้อสมุนไพรและน้ำมันหอมระเหยธรรมชาติ ซึ่งแสดงถึงความเข้มข้นของสารสกัดสมุนไพร ไม่มีอันตรายและสามารถใช้ได้ตามปกติ เพียงเขย่าขวดก่อนใช้เพื่อให้ส่วนผสมเข้ากัน เช่น โทนเนอร์สามสหาย น้ำยาบ้วนปากกานพลู หรือน้ำดื่มสุขชะลอวัยสูตรขมิ้นชันที่มีตะกอนของเนื้อขมิ้นที่ก้นขวด'
  },
  {
    question: 'ผลิตภัณฑ์เก็บได้นานแค่ไหน?',
    answer: 'ขึ้นอยู่กับชนิดของผลิตภัณฑ์ โดยทั่วไปผลิตภัณฑ์เครื่องดื่มสมุนไพรเก็บได้ประมาณ 6 เดือน ผลิตภัณฑ์เกี่ยวกับผิวเก็บได้ประมาณ 1 ปี และน้ำยาบ้วนปากเก็บได้ถึง 2 ปี ทั้งนี้ควรดูรายละเอียดการเก็บรักษาของแต่ละผลิตภัณฑ์'
  },
  {
    question: 'มีหน้าร้านให้เยี่ยมชมหรือไม่?',
    answer: 'เรามีสวนสมุนไพรและสถานที่ผลิตอยู่ที่อำเภอเชียงคำ จังหวัดพะเยา'
  },
  {
    question: 'ซื้อผลิตภัณฑ์ได้ที่ไหนบ้าง?',
    answer: 'สามารถสั่งซื้อผ่านช่องทาง Facebook: วิถีธรรมชาติ ออร์แกนิค หรือโทรสั่งที่ 095-871-3493 เรามีบริการจัดส่งทั่วประเทศ'
  },
  {
    question: 'ส่งสินค้าทางไหนบ้าง และค่าส่งเท่าไหร่?',
    answer: 'เราจัดส่งผ่านไปรษณีย์ไทย, Kerry, Flash Express และขนส่งเอกชนอื่นๆ ค่าส่งขึ้นอยู่กับน้ำหนักและปลายทาง'
  },
  {
    question: 'ผลิตภัณฑ์เหมาะกับทุกคนหรือไม่?',
    answer: 'ผลิตภัณฑ์ของเราเหมาะกับทุกเพศทุกวัย แต่สำหรับสตรีมีครรภ์ ผู้ที่มีโรคประจำตัวร้ายแรง หรือแพ้สมุนไพรบางชนิด ควรปรึกษาแพทย์ก่อนใช้ผลิตภัณฑ์ โดยเฉพาะผลิตภัณฑ์ประเภทเครื่องดื่มสมุนไพร หรือสามารถทักมาถามผ่าน Facebook: วิถีธรรมชาติ ออร์แกนิค หรือโทร 095-871-3493'
  },
  {
    question: 'หากใช้แล้วเกิดการแพ้ควรทำอย่างไร?',
    answer: 'หากเกิดอาการแพ้ เช่น คัน ผื่นแดง หรือระคายเคือง ให้หยุดใช้ผลิตภัณฑ์ทันที และล้างออกด้วยน้ำสะอาด หากอาการรุนแรงควรพบแพทย์ และสามารถแจ้งทางร้านเพื่อขอคำแนะนำเพิ่มเติมได้'
  }
];

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ question, answer, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="mb-3 border-b border-gray-100 pb-3">
      <button 
        className="w-full text-left flex items-start justify-between"
        onClick={onClick}
      >
        <span className="text-sm md:text-base font-medium text-[var(--text-dark)]">{question}</span>
        <span className="text-[var(--primary-green)] mt-0.5 ml-2">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pt-2 text-xs md:text-sm text-gray-600 font-light">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openItems, setOpenItems] = useState<{[key: number]: boolean}>({});

  const toggleFaqItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="absolute top-0 right-0 md:right-4 flex items-center space-x-1 bg-[var(--light-green)] hover:bg-[var(--primary-green)] hover:text-white text-[var(--primary-green)] px-3 py-2 rounded-md text-xs md:text-sm transition-all duration-300 shadow-sm"
      >
        <FaQuestion className="mr-1.5" />
        <span>คำถามที่พบบ่อย</span>
      </button>

      <AnimatePresence>
        {isModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                <h3 className="text-xl font-medium text-[var(--text-dark)]">คำถามที่พบบ่อย</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[70vh]">
                {faqData.map((faq, index) => (
                  <FaqItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer}
                    isOpen={!!openItems[index]}
                    onClick={() => toggleFaqItem(index)}
                  />
                ))}
              </div>
              
              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-100 sticky bottom-0 bg-white text-center">
                <p className="text-xs text-gray-500">
                  หากมีคำถามอื่นๆ สามารถติดต่อเราได้ที่ Facebook: วิถีธรรมชาติ ออร์แกนิค หรือโทร 095-871-3493
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FaqButton; 