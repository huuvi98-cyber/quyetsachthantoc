import React, { useState } from 'react';
import { Quote as QuoteIcon, Bookmark, Maximize2, X } from 'lucide-react';
import { SectionData } from '../data/articleData';
import { Infographics } from './Infographics';
import { GraphicQuoteCard } from './GraphicQuoteCard';
import { CoralGraphicQuote } from './CoralGraphicQuote';
import regeneratedSchoolImg from '../assets/images/regenerated_image_1792977573188.jpg';

interface SectionViewerProps {
  section: SectionData;
  fontSizeClass: string;
  theme: string;
  onBookmarkQuote?: (quote: string) => void;
}

export const SectionViewer: React.FC<SectionViewerProps> = ({
  section,
  fontSizeClass,
  theme,
  onBookmarkQuote
}) => {
  const [scaledImgIdx, setScaledImgIdx] = useState<number | null>(null);
  const [s2ScaledImgIdx, setS2ScaledImgIdx] = useState<number | null>(null);
  const [activeModalImg, setActiveModalImg] = useState<string | null>(null);

  const section1GalleryImages = [
    { src: "/assets/aistudio/IMG_0996_abaadac7.JPG", title: "Học sinh tiểu học vùng biên" },
    { src: "/assets/aistudio/IMG_0966_cb44e500.JPG", title: "Các em học sinh rạng rỡ trong trang phục dân tộc" },
    { src: "/assets/aistudio/IMG_0700_b6c9db5a.JPG", title: "Học sinh hân hoan trên sân trường mới" },
    { src: regeneratedSchoolImg, title: "Trường Phổ thông nội trú Mường Khương" }
  ];

  const section2GalleryImages = [
    { src: "/assets/aistudio/IMG_8322_69aa4724.JPG", title: "Hoạt động tháo gỡ vướng mắc 1" },
    { src: "/assets/aistudio/IMG_0933_a7bd1698.JPG", title: "Hoạt động tháo gỡ vướng mắc 2" },
    { src: "/assets/aistudio/IMG_1205_e16aff56.JPG", title: "Hoạt động tháo gỡ vướng mắc 3" },
    { src: "/assets/aistudio/IMG_1293_6bd0c6b9.JPG", title: "Hoạt động tháo gỡ vướng mắc 4" }
  ];

  const section4GalleryImages = [
    { src: "/assets/aistudio/IMG_0775_66e51848.JPG", title: "Học sinh hân hoan dự lễ khai giảng năm học mới" },
    { src: "/assets/aistudio/IMG_8308_e7a7178e.jpg", title: "Toàn cảnh khuôn viên trường PTNT Mường Khương khang trang" },
    { src: "/assets/aistudio/IMG_8323_5516986f.jpg", title: "Lãnh đạo và các đại biểu chụp ảnh lưu niệm cùng thầy cô và học sinh" },
    { src: "/assets/aistudio/IMG_0546_b3efce36.JPG", title: "Trường học mới khang trang tựa lưng núi rừng biên cương" }
  ];

  return (
    <article id={section.id} className="py-16 border-b border-stone-300/60 dark:border-stone-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Banner with Background Image */}
        <div 
          className={`relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen ${
            section.id === 'section-4' ? 'py-4 my-8 bg-transparent shadow-none' : 'py-10 sm:py-14 mb-12 shadow-md bg-cover bg-center overflow-hidden'
          }`}
          style={section.id === 'section-4' ? {} : { backgroundImage: `url(${section.stitBgImage || section.headerImage?.src})` }}
        >
          {/* Subtle dark overlay for contrast */}
          {section.id !== 'section-4' && (
            <div className="absolute inset-0 bg-black/35 dark:bg-black/50" />
          )}

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`font-sans-ui text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.38] sm:leading-[1.4] tracking-tight uppercase ${
              section.id === 'section-4' 
                ? 'text-red-700 dark:text-red-500 not-italic font-semibold border-l-4 border-red-700 dark:border-red-500 pl-4 sm:pl-6 drop-shadow-none' 
                : 'text-white font-black drop-shadow-md'
            } ${section.align === 'right' ? 'text-right' : section.align === 'center' ? 'text-center' : 'text-left'}`}>
              {section.title.split('\n').map((line, idx) => (
                <span key={idx} className="block py-1">
                  {line}
                </span>
              ))}
            </h2>
          </div>
        </div>

        {/* Render Paragraphs & Injected Components cleanly */}
        <div className="space-y-8 font-body-serif leading-relaxed text-stone-800 dark:text-stone-200">
          
          {section.paragraphs.map((para, idx) => {
            return (
              <React.Fragment key={idx}>
                {/* Paragraph Text */}
                <p className={`${fontSizeClass} leading-[1.8] text-stone-800 dark:text-stone-200 ${section.id === 'section-4' ? 'italic' : ''}`}>
                  {para}
                </p>

                {/* Inject Full-Screen Muong Khuong school image after paragraph 1 (idx === 0) in section-1 */}
                {section.id === 'section-1' && idx === 0 && (
                  <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen my-10 overflow-hidden border-0">
                    <div 
                      className="w-full cursor-pointer"
                      onClick={() => setActiveModalImg(regeneratedSchoolImg)}
                    >
                      <img 
                        src={regeneratedSchoolImg} 
                        alt="Trường Phổ thông nội trú Tiểu học - THCS Mường Khương" 
                        className="w-full h-auto max-h-[85vh] object-cover border-0 p-0 m-0 rounded-none block"
                      />
                    </div>
                    <div className="bg-stone-100/80 dark:bg-stone-900 py-3.5 px-4 text-center border-0">
                      <p className="font-sans-ui text-xs sm:text-sm text-stone-600 dark:text-stone-300 italic tracking-wide max-w-4xl mx-auto px-4">
                        Trường Phổ thông nội trú Tiểu học - THCS Mường Khương là một trong 107 trường nội trú liên cấp ở biên giới được đưa vào hoạt động từ năm học 2026-2027. Ảnh: NGUYỄN MẠNH
                      </p>
                    </div>
                  </div>
                )}

                {/* Inject Coral Graphic Quote for General Secretary, President To Lam in section-1 after paragraph 5 */}
                {section.id === 'section-1' && idx === 4 && (
                  <CoralGraphicQuote />
                )}

                {/* Inject full-screen borderless TPHCM image ABOVE Tran Luu Quang quote card in section-3 */}
                {section.id === 'section-3' && idx === 1 && (
                  <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen my-10 overflow-hidden border-0">
                    <div 
                      className="w-full cursor-pointer"
                      onClick={() => setActiveModalImg('/assets/aistudio/TPHCM._a_nh_HOA_NG_TRIE__U_27_d05b6e65.jpg')}
                    >
                      <img 
                        src="/assets/aistudio/TPHCM._a_nh_HOA_NG_TRIE__U_27_d05b6e65.jpg" 
                        alt="TPHCM. Ảnh: HOÀNG TRIỀU" 
                        className="w-full h-auto max-h-[85vh] object-cover border-0 p-0 m-0 rounded-none block"
                      />
                    </div>
                    <div className="bg-white dark:bg-stone-900 py-3.5 px-4 text-center border-0">
                      <p className="font-sans-ui text-xs sm:text-sm text-stone-600 dark:text-stone-300 italic tracking-wide">
                        TPHCM. Ảnh: HOÀNG TRIỀU
                      </p>
                    </div>
                  </div>
                )}



                {/* Inject 2-row image grid under paragraph index 2 (3rd paragraph) in section-2 */}
                {section.id === 'section-2' && idx === 2 && (
                  <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-6 sm:py-10 my-10 bg-white dark:bg-stone-900 transition-colors overflow-visible">
                    <div className="w-full px-2 sm:px-4 md:px-8">
                      <div className="grid grid-cols-2 gap-3 sm:gap-6 relative z-10 py-2">
                        {section2GalleryImages.map((img, imgIdx) => {
                          const isScaled = s2ScaledImgIdx === imgIdx;

                          return (
                            <div 
                              key={imgIdx} 
                              onClick={() => setActiveModalImg(img.src)}
                              onMouseEnter={() => setS2ScaledImgIdx(imgIdx)}
                              onMouseLeave={() => setS2ScaledImgIdx(null)}
                              className={`relative overflow-hidden rounded-2xl transition-all duration-300 ease-out cursor-pointer aspect-4/3 bg-stone-100 dark:bg-stone-800 ${
                                isScaled 
                                  ? 'scale-[1.3] z-30 shadow-2xl ring-0' 
                                  : 'scale-100 shadow-none'
                              }`}
                            >
                              <img 
                                src={img.src} 
                                alt={img.title} 
                                className="w-full h-full object-cover border-0"
                                loading="lazy"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Inject Quote Boxes for Tran Ngoc Lam and Nguyen Van Than after paragraph 4 (idx === 3) in section-3 */}
                {section.id === 'section-3' && idx === 3 && (
                  <div className="space-y-8 my-10">
                    {/* Box 1: Tran Ngoc Lam */}
                    <div className="bg-stone-50/90 dark:bg-stone-800/90 border-l-4 border-red-700 dark:border-red-500 rounded-r-2xl p-6 sm:p-8 shadow-md relative overflow-hidden transition-all duration-200 hover:shadow-lg">
                      <div className="absolute top-3 right-4 opacity-15 pointer-events-none">
                        <QuoteIcon className="w-16 h-16 text-red-800 dark:text-red-400" />
                      </div>
                      <div className="mb-4">
                        <h4 className="font-sans-ui font-black text-stone-900 dark:text-stone-100 text-base sm:text-lg uppercase tracking-wide">
                          Ông TRẦN NGỌC LÂM
                        </h4>
                        <p className="font-sans-ui text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-medium leading-snug">
                          Bí thư Chi bộ, Hiệu trưởng Trường THCS Văn Lang (phường Tân Định, TPHCM)
                        </p>
                      </div>
                      <div className="pt-3 border-t border-stone-200/80 dark:border-stone-700">
                        <h5 className="font-sans-ui font-bold text-red-700 dark:text-red-400 text-lg sm:text-xl mb-3 leading-snug">
                          Ấn tượng với tốc độ cụ thể hóa nghị quyết
                        </h5>
                        <p className="font-body-serif text-stone-800 dark:text-stone-200 text-base sm:text-lg leading-relaxed italic">
                          “Tôi đặc biệt ấn tượng với tốc độ khẩn trương và phương pháp quán triệt, triển khai của các nghị quyết Trung ương của Thành ủy TPHCM trong thời gian qua. Việc học tập nghị quyết gắn sát sườn với nhiệm vụ của từng cơ quan, đơn vị. Cách làm này giúp cán bộ, đảng viên sau khi học tập nghị quyết đều hình dung rõ, đơn vị mình phải bắt tay thực hiện những việc gì, lộ trình ra sao và chịu trách nhiệm về sản phẩm đầu ra như thế nào trong thời gian tới.”
                        </p>
                      </div>
                    </div>

                    {/* Box 2: Nguyen Van Than */}
                    <div className="bg-sky-50/90 dark:bg-sky-950/60 border-l-4 border-sky-600 dark:border-sky-400 rounded-r-2xl p-6 sm:p-8 shadow-md relative overflow-hidden transition-all duration-200 hover:shadow-lg">
                      <div className="absolute top-3 right-4 opacity-15 pointer-events-none">
                        <QuoteIcon className="w-16 h-16 text-blue-800 dark:text-blue-400" />
                      </div>
                      <div className="mb-4">
                        <h4 className="font-sans-ui font-black text-stone-900 dark:text-stone-100 text-base sm:text-lg uppercase tracking-wide">
                          Ông NGUYỄN VĂN THÂN
                        </h4>
                        <p className="font-sans-ui text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-medium leading-snug">
                          Chủ tịch Hiệp hội Doanh nghiệp nhỏ và vừa Việt Nam
                        </p>
                      </div>
                      <div className="pt-3 border-t border-stone-200/80 dark:border-stone-700">
                        <h5 className="font-sans-ui font-bold text-blue-700 dark:text-blue-400 text-lg sm:text-xl mb-3 leading-snug">
                          Chính sách nhạy bén gỡ khó cho doanh nghiệp
                        </h5>
                        <p className="font-body-serif text-stone-800 dark:text-stone-200 text-base sm:text-lg leading-relaxed italic">
                          “Cộng đồng doanh nghiệp nhỏ và vừa cùng các hộ kinh doanh rất vui mừng, trân trọng cảm ơn sự quyết liệt của Chính phủ, Thủ tướng và Quốc hội. Ngay từ đầu nhiệm kỳ, Chính phủ đã trình Quốc hội thông qua việc nâng ngưỡng doanh thu không phải nộp thuế cho hộ kinh doanh từ 100 triệu đồng/năm lên 1 tỷ đồng/năm và tiếp đó là nghị quyết giảm 30% số thuế thu nhập cá nhân và số thuế thu nhập doanh nghiệp phải nộp của kỳ tính thuế năm 2026 và 2027. Điều đó cho thấy, Chính phủ đã hết sức nhạy bén trong việc tìm ra những điểm nghẽn và chủ động tháo gỡ. Để đạt mục tiêu tăng trưởng kinh tế 10% trở lên, các đường lối, chính sách đã khá toàn diện và đầy đủ. Tâm thế của cộng đồng doanh nghiệp hiện nay là: hành động quyết liệt để quyết tâm đóng góp vào mục tiêu tăng trưởng.”
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Inject 2-row image grid under paragraph index 2 (idx === 2) in section-4 */}
                {section.id === 'section-4' && idx === 2 && (
                  <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-6 sm:py-10 my-10 bg-white dark:bg-stone-900 transition-colors overflow-visible">
                    <div className="w-full px-2 sm:px-4 md:px-8">
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 relative z-10 py-2">
                        {section4GalleryImages.map((img, imgIdx) => {
                          const isScaled = s2ScaledImgIdx === imgIdx + 10;
                          
                          let colSpanClass = "sm:col-span-6";
                          let aspectClass = "aspect-4/3";
                          
                          if (imgIdx === 2) {
                            // Left image reduced by ~20% in width (7 cols instead of 9)
                            colSpanClass = "sm:col-span-7 lg:col-span-7";
                            aspectClass = "aspect-16/10";
                          } else if (imgIdx === 3) {
                            // Right image takes remaining 5 columns
                            colSpanClass = "sm:col-span-5 lg:col-span-5";
                            aspectClass = "aspect-16/10";
                          }

                          return (
                            <div 
                              key={imgIdx} 
                              onClick={() => setActiveModalImg(img.src)}
                              onMouseEnter={() => setS2ScaledImgIdx(imgIdx + 10)}
                              onMouseLeave={() => setS2ScaledImgIdx(null)}
                              className={`relative overflow-hidden rounded-2xl transition-all duration-300 ease-out cursor-pointer bg-stone-100 dark:bg-stone-800 ${colSpanClass} ${aspectClass} ${
                                isScaled 
                                  ? 'scale-[1.3] z-30 shadow-2xl ring-0' 
                                  : 'scale-100 shadow-none'
                              }`}
                            >
                              <img 
                                src={img.src} 
                                alt={img.title} 
                                className="w-full h-full object-cover object-center border-0"
                                loading="lazy"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}


                {/* Inject 4 Horizontal Full Background Images directly above 'Với mệnh lệnh...' paragraph (idx === 2) in section-1 */}
                {section.id === 'section-1' && idx === 2 && (
                  <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen py-8 sm:py-12 my-10 bg-white dark:bg-stone-900 transition-colors overflow-visible">
                    <div className="w-full px-2 sm:px-4 md:px-8">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 relative z-10 py-4">
                        {section1GalleryImages.map((img, imgIdx) => {
                          const isScaled = scaledImgIdx === imgIdx;

                          return (
                            <div 
                              key={imgIdx} 
                              onClick={() => setActiveModalImg(img.src)}
                              onMouseEnter={() => setScaledImgIdx(imgIdx)}
                              onMouseLeave={() => setScaledImgIdx(null)}
                              className={`relative overflow-hidden rounded-2xl transition-all duration-300 ease-out cursor-pointer aspect-4/3 ${
                                isScaled 
                                  ? 'scale-[1.3] z-30 shadow-2xl ring-2 ring-stone-300/50' 
                                  : 'scale-100 shadow-xs'
                              }`}
                            >
                              <img 
                                src={img.src} 
                                alt="" 
                                className="w-full h-full object-cover border-0"
                                loading="lazy"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Inject Section Infographic after last paragraph of section-2 */}
                {idx === section.paragraphs.length - 1 && section.id === 'section-2' && (
                  <Infographics type="section-2" theme={theme} />
                )}

                {/* Inject Second Quote if available after paragraph 6 */}
                {idx === 6 && section.quotes && section.quotes[1] && (
                  <GraphicQuoteCard
                    quote={section.quotes[1]}
                    variant={section.id === 'section-1' ? 'blue' : 'rose'}
                    onBookmarkQuote={onBookmarkQuote}
                  />
                )}

              </React.Fragment>
            );
          })}

        </div>

        {/* Modal Viewer for Full Size Image */}
        {activeModalImg && (
          <div 
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
            onClick={() => setActiveModalImg(null)}
          >
            <div className="relative w-full h-full flex items-center justify-center max-w-7xl max-h-[92vh]">
              <button 
                onClick={() => setActiveModalImg(null)}
                className="absolute top-4 right-4 p-3 rounded-full bg-black/60 text-white hover:bg-red-600 transition-colors z-20 border-0"
                title="Đóng"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={activeModalImg} 
                alt="Enlarged view" 
                className="max-w-full max-h-full object-contain border-0 shadow-none rounded-none"
              />
            </div>
          </div>
        )}

      </div>
    </article>
  );
};
