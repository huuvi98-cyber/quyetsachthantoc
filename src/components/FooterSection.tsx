import React from 'react';
import { ArrowUp, Share2, Printer, Award, ExternalLink, Bookmark } from 'lucide-react';
import { ARTICLE_DATA } from '../data/articleData';

interface FooterSectionProps {
  onBackToTop: () => void;
  savedQuotes: string[];
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onBackToTop, savedQuotes }) => {
  return (
    <footer className="bg-stone-900 text-stone-200 border-t border-stone-800 pt-16 pb-12 font-sans-ui">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Saved Quotes / Bookmarks Drawer if any */}
        {savedQuotes.length > 0 && (
          <div className="p-6 rounded-xl bg-stone-950 border border-stone-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
              <Bookmark className="w-4 h-4" />
              <span>Trích dẫn bạn đã lưu ({savedQuotes.length})</span>
            </div>
            <div className="space-y-3">
              {savedQuotes.map((q, idx) => (
                <p key={idx} className="text-xs text-stone-300 italic font-body-serif border-l-2 border-amber-500 pl-3 py-1">
                  “{q}”
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Publication Credits Block */}
        <div className="p-8 rounded-xl bg-stone-950/60 border border-stone-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-red-700 text-white font-serif font-bold text-xs px-2.5 py-1 tracking-wider uppercase rounded-xs">
                E-MAGAZINE
              </span>
              <span className="font-serif-display font-semibold text-lg uppercase tracking-tight text-white">
                SPECIAL
              </span>
            </div>
            <p className="text-xs text-stone-400 font-body-serif">
              Tác phẩm Longform Chuyên đề: <strong>Bài 1: Rút ngắn khoảng cách từ quyết sách đến thực tiễn</strong>
            </p>
            <p className="text-[11px] text-stone-500 font-mono">
              Chuyên đề Báo chí Longform • Xuất bản: 2026
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 no-print">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-medium text-stone-200 transition-colors"
              title="In tác phẩm hoặc lưu PDF"
            >
              <Printer className="w-4 h-4" />
              <span>In tác phẩm</span>
            </button>
            <button
              onClick={onBackToTop}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-xs font-medium text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Đầu trang</span>
            </button>
          </div>
        </div>

        {/* Related Special Series Cards */}
        <div className="space-y-4">
          <div className="text-xs font-mono text-stone-400 uppercase tracking-widest font-semibold">
            Các bài viết trong cùng chuyên đề “{ARTICLE_DATA.seriesTitle}”
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg bg-stone-950 border border-stone-800 hover:border-red-800/80 transition-colors cursor-pointer group">
              <span className="text-[10px] font-mono text-red-400 uppercase font-semibold">Bài 2 • Sắp xuất bản</span>
              <h4 className="font-serif-display font-bold text-base text-stone-100 group-hover:text-red-400 transition-colors mt-1">
                Đột phá thể chế & Động lực tăng trưởng mới
              </h4>
              <p className="text-xs text-stone-400 font-sans-ui mt-2">
                Hành trình gỡ vướng pháp lý và kích hoạt các dòng vốn chiến lược.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-stone-950 border border-stone-800 hover:border-red-800/80 transition-colors cursor-pointer group">
              <span className="text-[10px] font-mono text-red-400 uppercase font-semibold">Bài 3 • Sắp xuất bản</span>
              <h4 className="font-serif-display font-bold text-base text-stone-100 group-hover:text-red-400 transition-colors mt-1">
                Sự hài lòng của Nhân dân là KPI tối thượng
              </h4>
              <p className="text-xs text-stone-400 font-sans-ui mt-2">
                Chuyển đổi nền công vụ thụ động sang tinh thần chủ động phụng sự.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-8 border-t border-stone-800 text-center text-xs text-stone-500 font-sans-ui flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 E-Magazine Special Longform. Bản quyền thuộc về tác giả.
          </div>
        </div>

      </div>
    </footer>
  );
};
