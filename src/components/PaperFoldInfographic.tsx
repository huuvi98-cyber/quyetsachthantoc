import React from 'react';
import { Lightbulb, FileText, TrendingUp, Target, LucideIcon } from 'lucide-react';

export interface PaperFoldCardData {
  id: string;
  category: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  colorHex: string;
  badgeBg?: string;
}

interface PaperFoldInfographicProps {
  title?: string;
  subtitle?: string;
  items?: PaperFoldCardData[];
  theme?: string;
}

const DEFAULT_ITEMS: PaperFoldCardData[] = [
  {
    id: '01',
    category: 'QUÁN TRIỆT',
    subtitle: 'THẦN TỐC THI HÀNH',
    description: 'Thành ủy TPHCM & các địa phương triển khai Nghị quyết chỉ 7 ngày sau Hội nghị toàn quốc, xóa bỏ hoàn toàn độ trễ.',
    icon: Lightbulb,
    colorHex: '#D97706', // Amber / Gold
  },
  {
    id: '02',
    category: 'CƠ CHẾ',
    subtitle: 'CHẠY SONG SONG',
    description: 'Rà soát phân cấp phân quyền ngay từ khâu dự thảo, thông qua 25 Nghị quyết cụ thể hóa ngay ngày Luật có hiệu lực.',
    icon: FileText,
    colorHex: '#475569', // Slate / Gray
  },
  {
    id: '03',
    category: 'TĂNG TRƯỞNG',
    subtitle: 'THÁO GỠ NGUỒN LỰC',
    description: 'Xử lý vướng mắc cho 2.535 dự án, giải phóng 86,6 nghìn ha đất và khơi thông trên 1,76 triệu tỷ đồng vốn đầu tư.',
    icon: TrendingUp,
    colorHex: '#DC2626', // Crimson Red
  },
  {
    id: '04',
    category: 'KỶ LUẬT',
    subtitle: 'LẤY DÂN LÀM KPI',
    description: 'Đánh giá cán bộ bằng chỉ số KPI công vụ thực chất, kiên quyết đào thải né tránh, tất cả vì sự hài lòng của Nhân dân.',
    icon: Target,
    colorHex: '#0284C7', // Teal / Blue
  },
];

export const PaperFoldInfographic: React.FC<PaperFoldInfographicProps> = ({
  title = "BỐN TRỤ CỘT HÀNH ĐỘNG: QUYẾT LIỆT & HIỆU QUẢ",
  subtitle = "INFOGRAPHIC CHUYÊN ĐỀ",
  items = DEFAULT_ITEMS,
  theme = 'archival'
}) => {
  return (
    <div className="relative my-14 w-full max-w-[1320px] mx-auto px-4 sm:px-6">
      
      {/* Header Title */}
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {subtitle && (
            <span className="font-mono text-xs uppercase font-extrabold tracking-widest text-red-700 dark:text-red-400 bg-red-100 dark:bg-red-950/80 px-3.5 py-1 rounded-full inline-block mb-2 shadow-xs">
              {subtitle}
            </span>
          )}
          {title && (
            <h3 className="font-serif-display font-black text-2xl sm:text-3xl md:text-4xl text-stone-900 dark:text-stone-100 tracking-tight uppercase">
              {title}
            </h3>
          )}
        </div>
      )}

      {/* 4 Paper-Fold Arrow Ribbon Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch">
        {items.map((item, idx) => {
          const Icon = item.icon;

          return (
            <div 
              key={item.id || idx}
              className="group relative flex flex-col items-center justify-between bg-white dark:bg-stone-900 rounded-lg p-6 sm:p-7 md:p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-stone-200/80 dark:border-stone-800"
              style={{
                boxShadow: theme === 'night' 
                  ? '0 10px 25px -5px rgba(0, 0, 0, 0.5)' 
                  : '0 10px 30px -8px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* TOP PAPER SLOT FOLD SHADOW (Simulates card tucked into top paper slit) */}
              <div 
                className="absolute -top-3.5 left-6 right-6 h-3.5 pointer-events-none rounded-t-lg"
                style={{
                  background: theme === 'night'
                    ? 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)'
                    : 'linear-gradient(to bottom, rgba(100,100,100,0.22), transparent)',
                  boxShadow: '0 -2px 4px rgba(0,0,0,0.06)'
                }}
              />

              {/* BOTTOM PAPER SLOT FOLD SHADOW (Simulates card tucked into bottom paper slit) */}
              <div 
                className="absolute -bottom-3.5 left-6 right-6 h-3.5 pointer-events-none rounded-b-lg"
                style={{
                  background: theme === 'night'
                    ? 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                    : 'linear-gradient(to top, rgba(100,100,100,0.22), transparent)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
                }}
              />

              {/* RIGHT SIDE ARROW RIBBON TAB (Points to the right in accent color) */}
              <div 
                className="absolute -right-[15px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[15px] drop-shadow-sm z-20 transition-transform duration-200 group-hover:scale-110"
                style={{ borderLeftColor: item.colorHex }}
              />

              {/* CARD CONTENT */}
              <div className="w-full flex flex-col items-center flex-1">
                
                {/* ICON AT TOP */}
                <div 
                  className="mb-5 p-3.5 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ color: item.colorHex }}
                >
                  <Icon className="w-10 h-10 stroke-[1.75]" />
                </div>

                {/* CATEGORY (Accent color uppercase) */}
                <h4 
                  className="font-sans-ui font-black text-sm sm:text-base tracking-widest uppercase mb-1"
                  style={{ color: item.colorHex }}
                >
                  {item.category}
                </h4>

                {/* SUBTITLE (Bold dark uppercase) */}
                <h5 className="font-sans-ui font-extrabold text-stone-900 dark:text-stone-100 text-xs sm:text-sm tracking-wider uppercase mb-4 leading-tight">
                  {item.subtitle}
                </h5>

                {/* DESCRIPTION TEXT */}
                <p className="font-sans-ui text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                  {item.description}
                </p>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
