import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, MapPin, TrendingUp, CheckCircle2, Building2, Layers, Coins } from 'lucide-react';

interface ProjectUnblockingInfographicProps {
  theme?: string;
}

// Custom hook for animated counter
function useAnimatedNumber(target: number, decimals: number = 0, duration: number = 1800, startAnim: boolean = true) {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (!startAnim) {
      setCurrent(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCurrent(easedProgress * target);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, startAnim]);

  if (decimals > 0) {
    return current.toFixed(decimals).replace('.', ',');
  }
  return Math.floor(current).toLocaleString('vi-VN');
}

export const ProjectUnblockingInfographic: React.FC<ProjectUnblockingInfographicProps> = ({ theme = 'archival' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const replayAnimation = () => {
    setIsVisible(false);
    setTimeout(() => {
      setAnimKey(prev => prev + 1);
      setIsVisible(true);
    }, 50);
  };

  // Animated values
  const valLandFromApril = useAnimatedNumber(86.6, 1, 1600, isVisible);
  const valCapitalFromApril = useAnimatedNumber(1.76, 2, 1800, isVisible);
  const valProjectsFromApril = useAnimatedNumber(2535, 0, 2000, isVisible);
  const valTotalProjects = useAnimatedNumber(3557, 0, 2200, isVisible);
  const valTotalLand = useAnimatedNumber(139, 0, 1800, isVisible);
  const valTotalCapital = useAnimatedNumber(2.49, 2, 2000, isVisible);

  const isNight = theme === 'night';

  return (
    <div 
      ref={containerRef}
      key={animKey}
      className="w-full my-10 font-sans select-none relative max-w-[1360px] mx-auto px-2 sm:px-4"
    >
      {/* Header Bar */}
      <div className="flex flex-col items-center justify-center text-center mb-8 pb-4 border-b border-stone-200 dark:border-stone-800">
        <span className="font-mono text-xs uppercase font-extrabold tracking-widest text-sky-700 dark:text-sky-400 bg-sky-100 dark:bg-sky-950/80 px-3.5 py-1 rounded-full inline-block mb-3 shadow-xs">
          TỪ THÁNG 4 ĐẾN NAY
        </span>
        <h3 className="font-serif-display font-black text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-900 dark:text-stone-100 tracking-tight uppercase text-center font-bold">
          KẾT QUẢ THÁO GỠ VƯỚNG MẮC CHO CÁC DỰ ÁN
        </h3>
      </div>

      {/* 4 PAPER-FOLD ARROW RIBBON CARDS (4 CỤM) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-6 items-stretch">
        
        {/* ==================== CỤM 1 ==================== */}
        <div 
          className="group relative flex flex-col justify-between bg-white dark:bg-stone-900 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-stone-200/90 dark:border-stone-800"
          style={{
            boxShadow: isNight 
              ? '0 10px 25px -5px rgba(0, 0, 0, 0.5)' 
              : '0 10px 30px -8px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Top Paper Slot Fold Shadow */}
          <div 
            className="absolute -top-3.5 left-5 right-5 h-3.5 pointer-events-none rounded-t-lg"
            style={{
              background: isNight
                ? 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)'
                : 'linear-gradient(to bottom, rgba(100,100,100,0.22), transparent)'
            }}
          />
          {/* Bottom Paper Slot Fold Shadow */}
          <div 
            className="absolute -bottom-3.5 left-5 right-5 h-3.5 pointer-events-none rounded-b-lg"
            style={{
              background: isNight
                ? 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                : 'linear-gradient(to top, rgba(100,100,100,0.22), transparent)'
            }}
          />
          {/* Right Arrow Ribbon Tab */}
          <div 
            className="absolute -right-[15px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[15px] drop-shadow-sm z-20 transition-transform duration-200 group-hover:scale-110"
            style={{ borderLeftColor: '#D97706' }}
          />

          <div className="flex flex-col items-center w-full h-full justify-between">
            {/* Top Icon & Title */}
            <div className="flex flex-col items-center">
              <div className="mb-3 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-[#D97706] transition-transform duration-300 group-hover:scale-110">
                <Coins className="w-9 h-9 stroke-[1.75]" />
              </div>

              <h4 className="font-sans font-extrabold text-stone-900 dark:text-stone-100 text-sm tracking-wider uppercase mb-4">
                SỬ DỤNG ĐẤT VÀ KHƠI THÔNG VỐN
              </h4>
            </div>

            {/* Stat Bullets */}
            <div className="w-full space-y-3.5 my-2 text-left">
              <div className="p-3 rounded-lg bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/50">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#D97706] font-mono tracking-tight">
                    {valLandFromApril}
                  </span>
                  <span className="text-xs font-bold text-stone-800 dark:text-stone-200">
                    ngàn ha đất
                  </span>
                </div>
                <div className="text-[11px] font-bold text-stone-700 dark:text-stone-300 mt-0.5 leading-snug">
                  Đưa vào sử dụng
                </div>
              </div>

              <div className="p-3 rounded-lg bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/50">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl font-black text-[#D97706]">&gt;</span>
                  <span className="text-2xl sm:text-3xl font-black text-[#D97706] font-mono tracking-tight">
                    {valCapitalFromApril}
                  </span>
                  <span className="text-xs font-bold text-stone-800 dark:text-stone-200 ml-0.5">
                    triệu tỷ đồng
                  </span>
                </div>
                <div className="text-[11px] font-bold text-stone-700 dark:text-stone-300 mt-0.5 leading-snug">
                  Nguồn vốn được khơi thông
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* ==================== CỤM 2 ==================== */}
        <div 
          className="group relative flex flex-col justify-between bg-white dark:bg-stone-900 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-stone-200/90 dark:border-stone-800"
          style={{
            boxShadow: isNight 
              ? '0 10px 25px -5px rgba(0, 0, 0, 0.5)' 
              : '0 10px 30px -8px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Top Paper Slot Fold Shadow */}
          <div 
            className="absolute -top-3.5 left-5 right-5 h-3.5 pointer-events-none rounded-t-lg"
            style={{
              background: isNight
                ? 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)'
                : 'linear-gradient(to bottom, rgba(100,100,100,0.22), transparent)'
            }}
          />
          {/* Bottom Paper Slot Fold Shadow */}
          <div 
            className="absolute -bottom-3.5 left-5 right-5 h-3.5 pointer-events-none rounded-b-lg"
            style={{
              background: isNight
                ? 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                : 'linear-gradient(to top, rgba(100,100,100,0.22), transparent)'
            }}
          />
          {/* Right Arrow Ribbon Tab */}
          <div 
            className="absolute -right-[15px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[15px] drop-shadow-sm z-20 transition-transform duration-200 group-hover:scale-110"
            style={{ borderLeftColor: '#0284C7' }}
          />

          <div className="flex flex-col items-center w-full h-full justify-between">
            {/* Top Icon & Title */}
            <div className="flex flex-col items-center">
              <div className="mb-3 p-3 rounded-2xl bg-sky-50 dark:bg-sky-950/50 text-[#0284C7] transition-transform duration-300 group-hover:scale-110">
                <CheckCircle2 className="w-9 h-9 stroke-[1.75]" />
              </div>

              <h4 className="font-sans font-extrabold text-stone-900 dark:text-stone-100 text-sm tracking-wider uppercase mb-4">
                DỰ ÁN ĐƯỢC GỠ VƯỚNG
              </h4>
            </div>

            {/* Stat Box */}
            <div className="w-full my-auto py-4 px-3 rounded-lg bg-sky-50/60 dark:bg-sky-950/30 border border-sky-200/60 dark:border-sky-900/50 flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black text-[#0284C7] font-mono tracking-tight">
                {valProjectsFromApril}
              </div>
              <div className="text-xs font-bold text-stone-800 dark:text-stone-200 mt-1 uppercase tracking-wide">
                dự án được gỡ vướng
              </div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 font-medium">
                (Từ tháng 4 đến nay)
              </div>
            </div>

          </div>
        </div>


        {/* ==================== CỤM 3 ==================== */}
        <div 
          className="group relative flex flex-col justify-between bg-white dark:bg-stone-900 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-stone-200/90 dark:border-stone-800"
          style={{
            boxShadow: isNight 
              ? '0 10px 25px -5px rgba(0, 0, 0, 0.5)' 
              : '0 10px 30px -8px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Top Paper Slot Fold Shadow */}
          <div 
            className="absolute -top-3.5 left-5 right-5 h-3.5 pointer-events-none rounded-t-lg"
            style={{
              background: isNight
                ? 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)'
                : 'linear-gradient(to bottom, rgba(100,100,100,0.22), transparent)'
            }}
          />
          {/* Bottom Paper Slot Fold Shadow */}
          <div 
            className="absolute -bottom-3.5 left-5 right-5 h-3.5 pointer-events-none rounded-b-lg"
            style={{
              background: isNight
                ? 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                : 'linear-gradient(to top, rgba(100,100,100,0.22), transparent)'
            }}
          />
          {/* Right Arrow Ribbon Tab */}
          <div 
            className="absolute -right-[15px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[15px] drop-shadow-sm z-20 transition-transform duration-200 group-hover:scale-110"
            style={{ borderLeftColor: '#DC2626' }}
          />

          <div className="flex flex-col items-center w-full h-full justify-between">
            {/* Top Icon & Title */}
            <div className="flex flex-col items-center">
              <div className="mb-3 p-3 rounded-2xl bg-red-50 dark:bg-red-950/50 text-[#DC2626] transition-transform duration-300 group-hover:scale-110">
                <Building2 className="w-9 h-9 stroke-[1.75]" />
              </div>

              <h4 className="font-sans font-extrabold text-stone-900 dark:text-stone-100 text-sm tracking-wider uppercase mb-4">
                TỔNG SỐ DỰ ÁN ĐƯỢC THÁO GỠ
              </h4>
            </div>

            {/* Stat Box */}
            <div className="w-full my-auto py-4 px-3 rounded-lg bg-red-50/60 dark:bg-red-950/30 border border-red-200/60 dark:border-red-900/50 flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black text-[#DC2626] font-mono tracking-tight">
                {valTotalProjects}
              </div>
              <div className="text-xs font-bold text-stone-800 dark:text-stone-200 mt-1 uppercase tracking-wide">
                dự án được tháo gỡ
              </div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 font-medium">
                (Tổng tích lũy trên cả nước)
              </div>
            </div>

          </div>
        </div>


        {/* ==================== CỤM 4 ==================== */}
        <div 
          className="group relative flex flex-col justify-between bg-white dark:bg-stone-900 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-stone-200/90 dark:border-stone-800"
          style={{
            boxShadow: isNight 
              ? '0 10px 25px -5px rgba(0, 0, 0, 0.5)' 
              : '0 10px 30px -8px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Top Paper Slot Fold Shadow */}
          <div 
            className="absolute -top-3.5 left-5 right-5 h-3.5 pointer-events-none rounded-t-lg"
            style={{
              background: isNight
                ? 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)'
                : 'linear-gradient(to bottom, rgba(100,100,100,0.22), transparent)'
            }}
          />
          {/* Bottom Paper Slot Fold Shadow */}
          <div 
            className="absolute -bottom-3.5 left-5 right-5 h-3.5 pointer-events-none rounded-b-lg"
            style={{
              background: isNight
                ? 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                : 'linear-gradient(to top, rgba(100,100,100,0.22), transparent)'
            }}
          />
          {/* Right Arrow Ribbon Tab */}
          <div 
            className="absolute -right-[15px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[15px] drop-shadow-sm z-20 transition-transform duration-200 group-hover:scale-110"
            style={{ borderLeftColor: '#059669' }}
          />

          <div className="flex flex-col items-center w-full h-full justify-between">
            {/* Top Icon & Title */}
            <div className="flex flex-col items-center">
              <div className="mb-3 p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-[#059669] transition-transform duration-300 group-hover:scale-110">
                <Layers className="w-9 h-9 stroke-[1.75]" />
              </div>

              <h4 className="font-sans font-extrabold text-stone-900 dark:text-stone-100 text-sm tracking-wider uppercase mb-4">
                TỔNG QUY MÔ ĐẤT ĐAI VÀ ĐẦU TƯ
              </h4>
            </div>

            {/* Stat Bullets */}
            <div className="w-full space-y-3.5 my-2 text-left">
              <div className="p-3 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl font-black text-[#059669]">&gt;</span>
                  <span className="text-2xl sm:text-3xl font-black text-[#059669] font-mono tracking-tight">
                    {valTotalLand}
                  </span>
                  <span className="text-xs font-bold text-stone-800 dark:text-stone-200 ml-0.5">
                    ngàn ha
                  </span>
                </div>
                <div className="text-[11px] font-bold text-stone-700 dark:text-stone-300 mt-0.5 leading-snug">
                  Tổng diện tích đất tháo gỡ
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl font-black text-[#059669]">&gt;</span>
                  <span className="text-2xl sm:text-3xl font-black text-[#059669] font-mono tracking-tight">
                    {valTotalCapital}
                  </span>
                  <span className="text-xs font-bold text-stone-800 dark:text-stone-200 ml-0.5">
                    triệu tỷ đồng
                  </span>
                </div>
                <div className="text-[11px] font-bold text-stone-700 dark:text-stone-300 mt-0.5 leading-snug">
                  Tổng mức đầu tư tháo gỡ
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
