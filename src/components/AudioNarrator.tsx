import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, SkipForward, RotateCcw, FastForward } from 'lucide-react';
import { ARTICLE_DATA } from '../data/articleData';

interface AudioNarratorProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  activeSectionIndex: number;
}

export const AudioNarrator: React.FC<AudioNarratorProps> = ({
  isPlaying,
  onTogglePlay,
  activeSectionIndex,
}) => {
  const [rate, setRate] = useState<number>(1);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState<number>(0);
  const [speechSupported, setSpeechSupported] = useState<boolean>(true);
  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Flatten all article paragraphs into a sequential reading list
  const allParagraphs = React.useMemo(() => {
    const list: { sectionId: string; title: string; text: string }[] = [];
    if (ARTICLE_DATA.lts) {
      ARTICLE_DATA.lts.forEach((ltsText) => {
        list.push({ sectionId: 'hero', title: 'Lời Tòa Soạn', text: ltsText });
      });
    }
    list.push({ sectionId: 'hero', title: 'Sapo', text: ARTICLE_DATA.sapo });
    ARTICLE_DATA.sections.forEach((sec) => {
      sec.paragraphs.forEach((p) => {
        list.push({ sectionId: sec.id, title: sec.title, text: p });
      });
    });
    return list;
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    } else {
      setSpeechSupported(false);
    }

    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const speakCurrentParagraph = (index: number) => {
    if (!synthRef.current || !speechSupported) return;

    synthRef.current.cancel();

    if (index >= allParagraphs.length) {
      onTogglePlay();
      setCurrentParagraphIndex(0);
      return;
    }

    const item = allParagraphs[index];
    const utterance = new SpeechSynthesisUtterance(item.text);
    utterance.lang = 'vi-VN';
    utterance.rate = rate;

    // Find Vietnamese voice if available
    const voices = synthRef.current.getVoices();
    const viVoice = voices.find((v) => v.lang.includes('vi'));
    if (viVoice) {
      utterance.voice = viVoice;
    }

    utterance.onend = () => {
      if (isPlaying) {
        const nextIndex = index + 1;
        setCurrentParagraphIndex(nextIndex);
        speakCurrentParagraph(nextIndex);
      }
    };

    utterance.onerror = () => {
      onTogglePlay();
    };

    utteranceRef.current = utterance;
    synthRef.current.speak(utterance);
  };

  useEffect(() => {
    if (isPlaying) {
      speakCurrentParagraph(currentParagraphIndex);
    } else {
      if (synthRef.current) {
        synthRef.current.pause();
      }
    }
  }, [isPlaying, rate]);

  const handleNext = () => {
    const nextIdx = Math.min(allParagraphs.length - 1, currentParagraphIndex + 1);
    setCurrentParagraphIndex(nextIdx);
    if (isPlaying) speakCurrentParagraph(nextIdx);
  };

  const handleReset = () => {
    setCurrentParagraphIndex(0);
    if (isPlaying) speakCurrentParagraph(0);
  };

  if (!isPlaying) return null;

  const currentItem = allParagraphs[currentParagraphIndex];

  return (
    <div className="fixed bottom-6 right-6 z-50 no-print animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-xl max-w-sm w-full space-y-3">
        <div className="flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="font-semibold text-red-400 uppercase tracking-wider text-[10px]">
              Đang phát giọng đọc AI
            </span>
          </div>
          <span className="text-stone-400 font-mono text-[11px]">
            {currentParagraphIndex + 1} / {allParagraphs.length}
          </span>
        </div>

        <div className="text-xs text-stone-300 line-clamp-2 italic font-body-serif bg-stone-950 p-2.5 rounded-md border border-stone-800/80">
          “{currentItem?.text}”
        </div>

        <div className="flex items-center justify-between gap-2 pt-1 border-t border-stone-800">
          <div className="flex items-center gap-1">
            <button
              onClick={onTogglePlay}
              className="p-2 rounded-lg bg-red-700 hover:bg-red-800 text-white transition-colors"
              title={isPlaying ? 'Tạm dừng' : 'Đọc tiếp'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              title="Đoạn tiếp theo"
            >
              <SkipForward className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              title="Đọc lại từ đầu"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            <span className="text-stone-400 mr-1 font-mono">Tốc độ:</span>
            {[1, 1.25, 1.5].map((speed) => (
              <button
                key={speed}
                onClick={() => setRate(speed)}
                className={`px-2 py-1 rounded font-mono font-medium ${
                  rate === speed
                    ? 'bg-red-700 text-white'
                    : 'bg-stone-800 text-stone-400 hover:bg-stone-700'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
