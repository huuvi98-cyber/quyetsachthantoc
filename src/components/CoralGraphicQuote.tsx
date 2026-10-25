import React from 'react';

export interface CoralGraphicQuoteProps {
  quote?: {
    content: string;
    author: string;
    title: string;
  };
}

export const CoralGraphicQuote: React.FC<CoralGraphicQuoteProps> = ({ quote }) => {
  const content = quote?.content || "Khát vọng lớn phải được hiện thực hóa bằng tầm nhìn đúng, quyết sách có căn cứ và hành động có trách nhiệm. Mỗi kết quả hôm nay phải bồi đắp năng lực để đất nước tiến xa, tiến vững chắc hơn. Kỷ nguyên mới đòi hỏi nghĩ xa, quyết định đúng và hành động hiệu quả.";
  const author = quote?.author || "TỔNG BÍ THƯ, CHỦ TỊCH NƯỚC TÔ LÂM";
  const title = quote?.title || "(Phát biểu truyền đạt chuyên đề: “Lãnh đạo chiến lược trong kỷ nguyên mới: Tầm nhìn trăm năm - tư duy đột phá - kiến tạo phát triển - quản trị thực thi” tại Học viện Chính trị quốc gia Hồ Chí Minh vào ngày 14-9).";

  // Clean raw text if quote quotes are present
  const cleanContent = content.replace(/^[“"']|[”"']$/g, '').trim();

  return (
    <div className="relative my-12 max-w-3xl mx-auto px-2 sm:px-4">
      {/* Coral Graphic Banner Box matching the reference design */}
      <div className="relative z-10 p-6 sm:p-10 md:p-12 rounded-2xl shadow-xl bg-[#DE4331] text-white overflow-hidden">
        
        {/* Top-Left Opening Quote Mark */}
        <div className="mb-1 select-none pointer-events-none">
          <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-white opacity-95" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>

        {/* Content Body enclosed in subtle side frame */}
        <div className="px-4 sm:px-8 py-6 my-1 border-r-2 border-l-2 border-white/80 rounded-2xl mx-1 bg-white/5 backdrop-blur-[1px]">
          <p className="font-body-serif italic font-normal text-center text-white text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-relaxed tracking-wide drop-shadow-xs">
            “{cleanContent}”
          </p>

          <div className="mt-8 pt-6 border-t border-white/30 text-center space-y-2">
            <h4 className="font-sans-ui font-black uppercase tracking-wider text-base sm:text-lg text-white">
              {author}
            </h4>
            {title && (
              <p className="font-sans-ui text-xs sm:text-sm text-white/90 leading-relaxed font-normal italic max-w-2xl mx-auto">
                {title}
              </p>
            )}
          </div>
        </div>

        {/* Bottom-Right Closing Quote Mark */}
        <div className="mt-1 flex justify-end select-none pointer-events-none">
          <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-white opacity-95 transform rotate-180" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>

      </div>
    </div>
  );
};
