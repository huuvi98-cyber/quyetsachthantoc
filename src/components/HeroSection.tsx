import React, { useState } from 'react';
import { Clock, Calendar, Bookmark, Award, ChevronDown, X } from 'lucide-react';
import { ARTICLE_DATA } from '../data/articleData';

interface HeroSectionProps {
  fontSizeClass: string;
  theme: string;
  onExplore: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  fontSizeClass,
  theme,
  onExplore,
  isBookmarked,
  onToggleBookmark
}) => {
  const [activeModalImg, setActiveModalImg] = useState<string | null>(null);

  const toLamImages = [
    { src: "/assets/aistudio/TBT_To_Lam-1_8eeb041f.jpg", alt: "Tổng Bí thư, Chủ tịch nước Tô Lâm cùng các em học sinh Si Pa Phìn 1" },
    { src: "/assets/aistudio/TBT_To_Lam-2_f2cb2a0f.jpg", alt: "Tổng Bí thư, Chủ tịch nước Tô Lâm cùng các em học sinh Si Pa Phìn 2" },
    { src: "/assets/aistudio/TBT_To_Lam-3_a1436759.jpg", alt: "Tổng Bí thư, Chủ tịch nước Tô Lâm cùng các em học sinh Si Pa Phìn 3" }
  ];

  return (
    <section id="hero" className="relative pt-0 pb-16 lg:pb-24 overflow-hidden border-b border-stone-300/60 dark:border-stone-800">
      {/* Full-Bleed Top Cover Image (At the VERY TOP of the page) */}
      <figure className="w-full overflow-hidden shadow-sm mb-10">
        <img
          src="/assets/aistudio/Bai_1-bia-1_5d910dd2.png"
          alt="Bìa bài viết: Bài 1: Rút ngắn khoảng cách từ quyết sách đến thực tiễn"
          className="w-full h-auto object-cover max-h-[850px]"
          referrerPolicy="no-referrer"
        />
      </figure>

      {/* Decorative Editorial Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-red-200/40 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-amber-100/50 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Article Main Headline & Series Title */}
        <div className="space-y-3 mb-12">
          <div className="text-base sm:text-lg font-sans-ui font-extrabold tracking-wider text-red-900 dark:text-red-400 uppercase pb-2.5 border-b border-stone-300 dark:border-stone-800">
            {ARTICLE_DATA.seriesTitle}
          </div>

          <div className="text-base sm:text-lg md:text-xl font-sans-ui font-bold text-black/50 dark:text-white/50 tracking-widest uppercase pt-3 pb-6">
            BÀI 1:
          </div>

          <h1 className="font-sans-ui font-black uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.32]">
            <span className="block py-0.5 text-stone-900 dark:text-stone-100">QUYẾT SÁCH</span>
            <span className="block py-0.5 text-stone-900 dark:text-stone-100">THẦN TỐC</span>
            <span className="block py-0.5 text-red-800 dark:text-red-500">ĐẠT KẾT QUẢ VÌ</span>
            <span className="block py-0.5 text-red-800 dark:text-red-500">NÓI ĐI ĐÔI VỚI LÀM</span>
          </h1>

          <div className="w-24 h-1.5 bg-red-700 rounded-full mt-6" />
        </div>

        {/* LTS / Editorial Note Text (Without header or background box or left line) */}
        {ARTICLE_DATA.lts && ARTICLE_DATA.lts.length > 0 && (
          <div className="mb-8 space-y-4 font-body-serif italic text-stone-800 dark:text-stone-200 leading-relaxed text-base sm:text-lg py-1">
            {ARTICLE_DATA.lts.map((p, idx) => (
              <p key={idx}>
                {p}
              </p>
            ))}
          </div>
        )}

        {/* 3-Image Cluster: General Secretary, President To Lam with students at Si Pa Phin school (Full Bleed Full Screen Width) */}
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen my-12 px-4 sm:px-8 md:px-12 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-2 max-w-[1600px] mx-auto">
            {toLamImages.map((img, imgIdx) => (
              <div 
                key={imgIdx}
                onClick={() => setActiveModalImg(img.src)}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-4/3 bg-stone-100 dark:bg-stone-800 transition-all duration-300 ease-out hover:scale-[1.25] hover:z-30 hover:shadow-2xl cursor-pointer ring-1 ring-stone-200/80 dark:ring-stone-800"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover border-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="bg-white dark:bg-stone-900 py-3.5 px-4 text-center rounded-xl border border-stone-200 dark:border-stone-800 max-w-4xl mx-auto shadow-xs">
            <p className="font-sans-ui text-xs sm:text-sm text-stone-600 dark:text-stone-300 italic tracking-wide">
              Tổng Bí thư, Chủ tịch nước Tô Lâm cùng các em học sinh tại lễ khánh thành Trường phổ thông dân tộc nội trú liên cấp tiểu học, THCS Si Pa Phìn (Điện Biên). <span className="not-italic font-sans-ui text-[11px] font-medium text-stone-500 dark:text-stone-400">Ảnh: TTXVN</span>
            </p>
          </div>
        </div>

        {/* Sapo / Lead Paragraph */}
        <div className="mb-8 border-l-4 border-red-700 dark:border-red-500 pl-4 sm:pl-6 py-1">
          <p className={`font-body-serif font-medium sm:font-semibold leading-relaxed ${fontSizeClass} text-stone-900 dark:text-stone-100`}>
            {ARTICLE_DATA.sapo}
          </p>
        </div>

      </div>

      {/* Full-Screen Image Modal */}
      {activeModalImg && (
        <div 
          className="fixed inset-0 z-[100] bg-white flex justify-center p-2 sm:p-6 overflow-y-auto"
          onClick={() => setActiveModalImg(null)}
        >
          <div className="relative w-full max-w-7xl pt-16">
            <button 
              onClick={() => setActiveModalImg(null)}
              className="fixed top-4 right-4 p-3 rounded-full bg-stone-200 text-stone-800 hover:bg-stone-300 transition-colors z-20 border-0"
              title="Đóng"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={activeModalImg} 
              alt="Enlarged view" 
              className="w-full h-auto object-contain border-0 shadow-none rounded-none"
            />
          </div>
        </div>
      )}
    </section>
  );
};
