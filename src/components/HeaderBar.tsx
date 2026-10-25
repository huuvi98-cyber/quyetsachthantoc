import React, { useState, useEffect } from 'react';
import { 
  Volume2, Pause, Share2, Check, Sun, Moon, AlignLeft, ChevronDown
} from 'lucide-react';

interface HeaderBarProps {
  fontSize: 'sm' | 'base' | 'lg';
  setFontSize: (size: 'sm' | 'base' | 'lg') => void;
  theme: 'archival' | 'clean' | 'night';
  setTheme: (theme: 'archival' | 'clean' | 'night') => void;
  isPlayingAudio: boolean;
  onToggleAudio: () => void;
  activeSectionId: string;
  onSelectSection: (id: string) => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({
  fontSize,
  setFontSize,
  theme,
  setTheme,
  isPlayingAudio,
  onToggleAudio,
  activeSectionId,
  onSelectSection,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Bài 1: Quyết sách thần tốc đạt kết quả vì nói đi đôi với làm',
          text: 'Nhiều quyết sách an sinh và kinh tế đang được hệ thống chính trị kích hoạt với tốc độ chưa có tiền lệ.',
          url: window.location.href,
        });
      } catch (e) {
        // Fallback to copy
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 no-print">
      {/* Top Reading Progress Bar */}
      <div className="h-1 w-full bg-stone-200/50 dark:bg-stone-800/50 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-red-700 via-amber-600 to-red-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};
