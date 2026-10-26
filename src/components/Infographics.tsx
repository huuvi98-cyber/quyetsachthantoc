import React, { useState, useEffect } from 'react';
import { 
  School, Building2, Calendar, CheckCircle2, Award, 
  ShieldCheck, Users, FileText, Send, TrendingUp 
} from 'lucide-react';
import { ProjectUnblockingInfographic } from './ProjectUnblockingInfographic';

interface InfographicProps {
  type: 'section-1' | 'section-2' | 'section-3';
  theme: string;
}

export const Infographics: React.FC<InfographicProps> = ({ type, theme }) => {
  const [activeStep, setActiveStep] = useState<number | null>(null);


  if (type === 'section-1') {
    const s1Step = activeStep ?? 0;
    const steps = [
      { date: "17/7/2025", title: "Bộ Chính trị chỉ đạo", desc: "Thống nhất chủ trương đầu tư xây trường PTNT liên cấp tại 248 xã biên giới." },
      { date: "27/7/2025", title: "Khởi công Si Pa Phìn", desc: "Tổng Bí thư Tô Lâm cùng đoàn Trung ương dự lễ khởi công Si Pa Phìn (Điện Biên)." },
      { date: "9/11/2025", title: "Khởi công đồng loạt", desc: "108 trường PTNT liên cấp trên 21 tỉnh thành chính thức khởi công." },
      { date: "31/1/2026", title: "Cán đích Si Pa Phìn", desc: "Hoàn thành sau 6 tháng thi công, mở đường chuỗi bứt phá 8, 20, 30 trường..." },
      { date: "5/9/2026", title: "107/108 trường khánh thành", desc: "Chiến dịch 100 ngày đêm cán đích xuất sắc cho năm học mới 2026-2027." }
    ];

    return (
      <div className={`my-12 p-6 sm:p-8 rounded-xl border transition-colors ${
        theme === 'night' 
          ? 'bg-stone-900/90 border-stone-800 text-stone-100' 
          : 'bg-[#FAF8F5] border-stone-300 shadow-xs text-stone-900'
      }`}>
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-300 dark:border-stone-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-red-700 text-white">
              <School className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-red-800 dark:text-red-400 font-semibold">
                Infographic Chuyên Đề
              </span>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold">
                Chiến dịch 100 ngày đêm: 108 trường phổ thông nội trú vùng biên
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 rounded-full font-semibold">
            100 Ngày Đêm
          </span>
        </div>

        {/* Dynamic Timeline Progression */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-lg border text-left transition-all ${
                s1Step === idx 
                  ? 'bg-red-700 text-white border-red-800 shadow-sm scale-102' 
                  : 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 hover:border-red-400'
              }`}
            >
              <div className="text-[11px] font-mono tracking-wider opacity-80 mb-1 flex items-center gap-1">
                <Calendar className="w-3 h-3 inline shrink-0" />
                {step.date}
              </div>
              <div className="font-semibold text-xs line-clamp-1">{step.title}</div>
            </button>
          ))}
        </div>

        {/* Selected Step Detail Display */}
        <div className="p-5 rounded-lg bg-stone-100 dark:bg-stone-800/80 border border-stone-300/80 dark:border-stone-700 flex items-start gap-4">
          <CheckCircle2 className="w-6 h-6 text-red-700 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-mono font-bold text-red-800 dark:text-red-400 uppercase tracking-widest mb-1">
              Mốc thời gian: {steps[s1Step].date}
            </div>
            <h4 className="font-serif-display text-lg font-bold text-stone-900 dark:text-stone-100 mb-1">
              {steps[s1Step].title}
            </h4>
            <p className="text-xs md:text-sm text-stone-700 dark:text-stone-300 font-sans-ui leading-relaxed">
              {steps[s1Step].desc}
            </p>
          </div>
        </div>

        {/* Key Metrics Summary Banner */}
        <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-800 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
            <div className="text-2xl sm:text-3xl font-serif-display font-bold text-red-700">108</div>
            <div className="text-[11px] font-sans-ui text-stone-600 dark:text-stone-400 font-medium">Trường PTNT liên cấp</div>
          </div>
          <div className="p-3 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
            <div className="text-2xl sm:text-3xl font-serif-display font-bold text-amber-600">21</div>
            <div className="text-[11px] font-sans-ui text-stone-600 dark:text-stone-400 font-medium">Tỉnh, thành triển khai</div>
          </div>
          <div className="p-3 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
            <div className="text-2xl sm:text-3xl font-serif-display font-bold text-emerald-700">1.013</div>
            <div className="text-[11px] font-sans-ui text-stone-600 dark:text-stone-400 font-medium">Học sinh Trường Sín Thầu</div>
          </div>
          <div className="p-3 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
            <div className="text-2xl sm:text-3xl font-serif-display font-bold text-blue-700">255 tỷ</div>
            <div className="text-[11px] font-sans-ui text-stone-600 dark:text-stone-400 font-medium">Đầu tư PTNT Mường Khương</div>
          </div>
        </div>

      </div>
    );
  }

  if (type === 'section-2') {
    const projectTimeline = [
      {
        date: "Ngày 9-4",
        shortTitle: "Thường trực Đảng ủy và Thường trực Chính phủ họp",
        action: "Thường trực Đảng ủy và Thường trực Chính phủ họp về các dự án tồn đọng, vướng mắc kéo dài.",
        icon: Users,
        colorHex: "text-blue-600 dark:text-blue-400",
        bgCircle: "bg-blue-600",
        borderColor: "border-blue-600",
        ringColor: "ring-blue-500/50",
        barColor: "bg-blue-500",
        badgeBg: "bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300"
      },
      {
        date: "Ngày 10-4",
        shortTitle: "Đảng ủy Chính phủ hoàn thiện nội dung",
        action: "Đảng ủy Chính phủ hoàn thiện nội dung, báo cáo Bộ Chính trị phương án xử lý",
        icon: FileText,
        colorHex: "text-sky-600 dark:text-sky-400",
        bgCircle: "bg-sky-500",
        borderColor: "border-sky-500",
        ringColor: "ring-sky-500/50",
        barColor: "bg-sky-500",
        badgeBg: "bg-sky-100 dark:bg-sky-950/80 text-sky-800 dark:text-sky-300"
      },
      {
        date: "Ngày 13-4",
        shortTitle: "Bộ Chính trị ra kết luận",
        action: "Bộ Chính trị ra kết luận, mở đường về chủ trương để tháo gỡ các rào cản",
        icon: ShieldCheck,
        colorHex: "text-emerald-600 dark:text-emerald-400",
        bgCircle: "bg-emerald-600",
        borderColor: "border-emerald-600",
        ringColor: "ring-emerald-500/50",
        barColor: "bg-emerald-500",
        badgeBg: "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300"
      },
      {
        date: "Ngày 14-4",
        shortTitle: "Chính phủ trình Quốc hội",
        action: "Chính phủ trình Quốc hội dự thảo Nghị quyết",
        icon: Send,
        colorHex: "text-amber-600 dark:text-amber-400",
        bgCircle: "bg-amber-500",
        borderColor: "border-amber-500",
        ringColor: "ring-amber-500/50",
        barColor: "bg-amber-500",
        badgeBg: "bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300"
      },
      {
        date: "Ngày 24-4",
        shortTitle: "Quốc hội thông qua Nghị quyết",
        action: "Quốc hội thông qua Nghị quyết về cơ chế, chính sách đặc thù xử lý vi phạm pháp luật về đất đai của tổ chức, cá nhân xảy ra trước khi Luật Đất đai năm 2024 có hiệu lực và giải pháp tiếp tục tháo gỡ khó khăn, vướng mắc cho các dự án tồn đọng, kéo dài",
        icon: Award,
        colorHex: "text-rose-600 dark:text-rose-400",
        bgCircle: "bg-rose-600",
        borderColor: "border-rose-600",
        ringColor: "ring-rose-500/50",
        barColor: "bg-rose-500",
        badgeBg: "bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300"
      },
      {
        date: "Tháng 4-2026 đến nay",
        shortTitle: "Đã xử lý vướng mắc cho 2.535 dự án",
        action: "Từ tháng 4/2026 đến nay đã xử lý vướng mắc cho 2.535 dự án (đưa vào sử dụng 86,6 nghìn ha; khơi thông nguồn vốn trên 1,76 triệu tỷ đồng), nâng tổng số dự án được tháo gỡ lên 3.557 dự án (tổng diện tích đất trên 139 nghìn ha và tổng mức đầu tư hơn 2,49 triệu tỷ đồng).",
        icon: TrendingUp,
        colorHex: "text-purple-600 dark:text-purple-400",
        bgCircle: "bg-purple-600",
        borderColor: "border-purple-600",
        ringColor: "ring-purple-500/50",
        barColor: "bg-purple-500",
        badgeBg: "bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300"
      }
    ];

    return (
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen my-12 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-full max-w-[1400px] p-2 sm:p-4 text-stone-900 dark:text-stone-100 bg-transparent border-0 shadow-none">
          {/* Header with Title */}
          <div className="text-center mb-8 pb-4 border-b border-stone-200 dark:border-stone-800">
            <h3 className="font-sans uppercase text-2xl sm:text-3xl font-extrabold tracking-wide text-stone-900 dark:text-stone-100">
              Thần tốc gỡ vướng các dự án tồn đọng
            </h3>
          </div>

          {/* INTERACTIVE GRAPHIC TIMELINE */}
          <div>
            {/* Desktop / Tablet Horizontal Graphic Timeline */}
            <div className="hidden lg:block relative my-10 py-10 px-2">
              
              {/* Central Axis Horizontal Line */}
              <div className="absolute top-1/2 left-8 right-8 h-1 bg-stone-300 dark:bg-stone-700 -translate-y-1/2 z-0 rounded-full" />
              {activeStep !== null && (
                <div 
                  className="absolute top-1/2 left-8 h-1 bg-red-600 transition-all duration-300 -translate-y-1/2 z-0 rounded-full"
                  style={{ width: `${(activeStep / (projectTimeline.length - 1)) * 92}%` }}
                />
              )}

              {/* 6 Alternating Node Columns */}
              <div className="grid grid-cols-6 gap-2 sm:gap-3 relative z-10">
                {projectTimeline.map((item, idx) => {
                  const Icon = item.icon;
                  const isTop = idx % 2 === 0;
                  const isActive = activeStep === idx;

                  // Position alignment & custom 2/3 scaled width layout for timeline popouts
                  const popoutPositionClass = 
                    idx === 5 || idx === 4
                      ? 'right-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[350px]' 
                      : idx === 0 
                        ? 'left-0 w-[200px] sm:w-[230px] md:w-[260px]'
                        : 'left-1/2 -translate-x-1/2 w-[220px] sm:w-[250px] md:w-[280px]';

                  return (
                    <div 
                      key={idx} 
                      className="flex flex-col items-center text-center group cursor-pointer relative" 
                      onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                      onMouseEnter={() => setActiveStep(idx)}
                      onMouseLeave={() => setActiveStep(null)}
                    >
                      
                      {/* TOP SECTION (For Even Indices: 0, 2, 4) */}
                      <div className="h-56 flex flex-col justify-end items-center pb-3 w-full relative">
                        {isTop ? (
                          <div className={`transition-all duration-300 p-2.5 sm:p-3 rounded-xl border text-left ${
                            isActive 
                              ? `bg-white dark:bg-stone-800 border-stone-300 dark:border-stone-700 shadow-xl scale-102 z-30 absolute bottom-3 ${popoutPositionClass}` 
                              : 'bg-white/90 dark:bg-stone-900/90 border-stone-200 dark:border-stone-800 opacity-85 hover:opacity-100 hover:border-stone-300 w-full'
                          }`}>
                            <div className={`font-sans font-bold text-sm sm:text-base ${item.colorHex} mb-0.5 flex items-center justify-between`}>
                              <span className="font-extrabold">{item.date}</span>
                              <div className={`w-2 h-2 rounded-full ${item.bgCircle}`} />
                            </div>
                            <div className={`h-0.5 w-8 ${item.barColor} rounded-full mb-1.5`} />
                            <div className="font-bold text-sm text-stone-900 dark:text-stone-100 leading-snug">
                              {item.shortTitle}
                            </div>
                            {isActive && (
                              <div className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed font-sans-ui mt-2 pt-2 border-t border-stone-200 dark:border-stone-700 font-normal">
                                {item.action}
                              </div>
                            )}
                          </div>
                        ) : null}
                      </div>

                      {/* CENTER CIRCLE NODE */}
                      <div className="relative my-2 flex items-center justify-center">
                        {/* Outer Ring Animation on Active */}
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? `ring-4 ${item.ringColor} scale-110 shadow-xl ${item.bgCircle} text-white z-20` 
                            : `${item.bgCircle} text-white/90 hover:scale-105 shadow-md`
                        }`}>
                          <div className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center">
                            <Icon className="w-5 h-5 shrink-0" />
                          </div>
                        </div>

                        {/* Top / Bottom Stem Connecting Line */}
                        <div className={`absolute w-0.5 h-6 ${item.barColor} ${
                          isTop ? '-top-6' : '-bottom-6'
                        }`} />
                      </div>

                      {/* BOTTOM SECTION (For Odd Indices: 1, 3) */}
                      <div className="h-56 flex flex-col justify-start items-center pt-3 w-full relative">
                        {!isTop ? (
                          <div className={`transition-all duration-300 p-2.5 sm:p-3 rounded-xl border text-left ${
                            isActive 
                              ? `bg-white dark:bg-stone-800 border-stone-300 dark:border-stone-700 shadow-xl scale-102 z-30 absolute top-3 ${popoutPositionClass}` 
                              : 'bg-white/90 dark:bg-stone-900/90 border-stone-200 dark:border-stone-800 opacity-85 hover:opacity-100 hover:border-stone-300 w-full'
                          }`}>
                            <div className={`font-sans font-bold text-sm sm:text-base ${item.colorHex} mb-0.5 flex items-center justify-between`}>
                              <span className="font-extrabold">{item.date}</span>
                              <div className={`w-2 h-2 rounded-full ${item.bgCircle}`} />
                            </div>
                            <div className={`h-0.5 w-8 ${item.barColor} rounded-full mb-1.5`} />
                            <div className="font-bold text-sm text-stone-900 dark:text-stone-100 leading-snug">
                              {item.shortTitle}
                            </div>
                            {isActive && (
                              <div className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed font-sans-ui mt-2 pt-2 border-t border-stone-200 dark:border-stone-700 font-normal">
                                {item.action}
                              </div>
                            )}
                          </div>
                        ) : null}
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile & Tablet Adaptive Interactive Steps */}
            <div className="lg:hidden space-y-3 my-6">
              {projectTimeline.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeStep === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(isActive ? null : idx)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isActive
                        ? 'bg-white dark:bg-stone-800 border-stone-300 dark:border-stone-700 shadow-md'
                        : 'bg-white/80 dark:bg-stone-900/70 border-stone-200 dark:border-stone-800 opacity-90'
                    }`}
                  >
                    <div className={`p-3 rounded-full shrink-0 text-white shadow-sm ${item.bgCircle}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm sm:text-base font-sans font-black ${item.colorHex}`}>
                          {item.date}
                        </span>
                        <span className="text-[10px] text-stone-400 uppercase tracking-wider font-mono">
                          {isActive ? 'Thu gọn ▲' : 'Xem thêm ▼'}
                        </span>
                      </div>
                      <h4 className="font-bold text-base text-stone-900 dark:text-stone-100 mb-1">
                        {item.shortTitle}
                      </h4>
                      {isActive && (
                        <p className="text-sm sm:text-base text-stone-700 dark:text-stone-200 font-sans-ui leading-relaxed mt-2.5 pt-2.5 border-t border-stone-200 dark:border-stone-700">
                          {item.action}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* COLORFUL INFOGRAPHIC WITH ANIMATED NUMBERS DIRECTLY BELOW TIMELINE */}
          <div className="mt-8">
            <ProjectUnblockingInfographic theme={theme} />
          </div>

        </div>
      </div>
    );
  }

  if (type === 'section-3') {
    return (
      <div className={`my-12 p-6 sm:p-8 rounded-xl border transition-colors ${
        theme === 'night' 
          ? 'bg-stone-900/90 border-stone-800 text-stone-100' 
          : 'bg-[#FAF8F5] border-stone-300 shadow-xs text-stone-900'
      }`}>
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-300 dark:border-stone-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-700 text-white">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-emerald-800 dark:text-emerald-400 font-semibold">
                Mô Hình Địa Phương Hành Động
              </span>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold">
                TPHCM: Cơ chế “Chạy song song” và Chỉ số KPI phụng sự Nhân dân
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded-full font-semibold">
            TP. Hồ Chí Minh
          </span>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
            <div className="text-emerald-700 font-mono text-xs font-bold mb-2">01. TỐC ĐỘ Quán triệt</div>
            <h4 className="font-bold text-sm mb-2 text-stone-900 dark:text-stone-100">
              7 Ngày sau HN Toàn quốc
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans-ui">
              Ngày 7-8, Thành ủy TPHCM tổ chức hội nghị quán triệt Nghị quyết Trung ương 3, không để xảy ra độ trễ thời gian.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
            <div className="text-emerald-700 font-mono text-xs font-bold mb-2">02. CƠ CHẾ “Chạy song song”</div>
            <h4 className="font-bold text-sm mb-2 text-stone-900 dark:text-stone-100">
              Đón đầu Luật Phát triển đô thị
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans-ui">
              Rà soát phân cấp phân quyền ngay khi Quốc hội thảo luận. Đến ngày 1-10 (Luật có hiệu lực), HĐND TPHCM thông qua <strong>25 Nghị quyết cụ thể hóa</strong>.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
            <div className="text-emerald-700 font-mono text-xs font-bold mb-2">03. KỶ LUẬT Công vụ</div>
            <h4 className="font-bold text-sm mb-2 text-stone-900 dark:text-stone-100">
              Sự hài lòng của Dân là KPI tối thượng
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans-ui">
              Đánh giá cán bộ qua chỉ số KPI thực chất; đào thải cán bộ né tránh, sợ trách nhiệm, không làm được việc.
            </p>
          </div>
        </div>

      </div>
    );
  }

  return null;
};
