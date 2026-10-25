import React from 'react';
import { Clock, Calendar, Bookmark, Award, ChevronDown } from 'lucide-react';
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
  return (
    <section id="hero" className="relative pt-0 pb-16 lg:pb-24 overflow-hidden border-b border-stone-300/60 dark:border-stone-800">
      {/* Full-Bleed Top Cover Image (At the VERY TOP of the page) */}
      <figure className="w-full overflow-hidden shadow-sm mb-10">
        <img
          src="/assets/aistudio/Bai_1-bia_ab22e0cd.png"
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
          <div className="inline-block text-xs sm:text-sm font-sans-ui font-extrabold tracking-wider text-red-900 dark:text-red-300 uppercase bg-red-100/90 dark:bg-red-950/80 px-4 py-2 rounded-md border border-red-300/80 dark:border-red-800/80 shadow-2xs">
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
          <div className="mb-10 space-y-4 font-body-serif italic text-stone-800 dark:text-stone-200 leading-relaxed text-base sm:text-lg py-1">
            {ARTICLE_DATA.lts.map((p, idx) => (
              <p key={idx}>
                {p}
              </p>
            ))}
          </div>
        )}

        {/* Full-Bleed Edge-to-Edge Press Photo (Placed UNDER LTS) */}
        <figure className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen my-12 bg-stone-900 shadow-md overflow-hidden">
          <img
            src="/assets/aistudio/2-2529-9760.jpg_cfcc0ada.jpg"
            alt="Thủ tướng Lê Minh Hưng và các đại biểu dự lễ khai giảng năm học 2026-2027 tại Lào Cai"
            className="w-full h-auto object-cover max-h-[750px]"
            referrerPolicy="no-referrer"
          />
          <figcaption className="bg-white text-stone-900 border-t border-stone-200 p-3.5 sm:p-4">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-body-serif italic">
              <div className="flex items-center gap-2">
                <span>Thủ tướng Lê Minh Hưng và các đại biểu dự lễ khai giảng năm học 2026-2027 tại Lào Cai, sáng 5-9.</span>
              </div>
              <span className="font-sans-ui text-[11px] font-light text-stone-500 dark:text-stone-400 shrink-0 not-italic">
                Ảnh: VIẾT CHUNG
              </span>
            </div>
          </figcaption>
        </figure>

        {/* Sapo / Lead Paragraph */}
        <div className="mb-8 border-l-4 border-red-700 dark:border-red-500 pl-4 sm:pl-6 py-1">
          <p className={`font-body-serif font-medium sm:font-semibold leading-relaxed ${fontSizeClass} text-stone-900 dark:text-stone-100`}>
            {ARTICLE_DATA.sapo}
          </p>
        </div>

      </div>
    </section>
  );
};
