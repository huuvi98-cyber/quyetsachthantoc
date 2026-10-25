import React, { useState, useEffect } from 'react';
import { HeaderBar } from './components/HeaderBar';
import { HeroSection } from './components/HeroSection';
import { SectionViewer } from './components/SectionViewer';
import { FooterSection } from './components/FooterSection';
import { AudioNarrator } from './components/AudioNarrator';
import { ARTICLE_DATA } from './data/articleData';

export default function App() {
  const [theme, setTheme] = useState<'archival' | 'clean' | 'night'>('archival');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('hero');
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [savedQuotes, setSavedQuotes] = useState<string[]>([]);

  // Font size class mapping
  const fontSizeClass = fontSize === 'sm' ? 'text-base' : fontSize === 'lg' ? 'text-xl' : 'text-lg';

  // Apply theme class to document body
  useEffect(() => {
    document.body.className = '';
    if (theme === 'night') {
      document.body.classList.add('bg-[#12100E]', 'text-[#E7E5E4]', 'dark');
    } else if (theme === 'clean') {
      document.body.classList.add('bg-white', 'text-[#0A0A0A]');
    } else {
      document.body.classList.add('bg-[#FAF8F5]', 'text-[#1C1917]');
    }
  }, [theme]);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'section-1', 'section-2', 'section-3', 'section-4'];
      const scrollPos = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSectionId(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSection = (id: string) => {
    setActiveSectionId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSectionId('hero');
  };

  const handleBookmarkQuote = (quote: string) => {
    if (!savedQuotes.includes(quote)) {
      setSavedQuotes([...savedQuotes, quote]);
    }
  };

  return (
    <div className={`min-h-screen font-body-serif transition-colors duration-200 ${
      theme === 'night' ? 'theme-night' : theme === 'clean' ? 'theme-clean' : 'theme-archival'
    }`}>
      {/* Editorial Header */}
      <HeaderBar
        fontSize={fontSize}
        setFontSize={setFontSize}
        theme={theme}
        setTheme={setTheme}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={() => setIsPlayingAudio(!isPlayingAudio)}
        activeSectionId={activeSectionId}
        onSelectSection={handleSelectSection}
      />

      {/* Hero Section */}
      <HeroSection
        fontSizeClass={fontSizeClass}
        theme={theme}
        onExplore={() => handleSelectSection('section-1')}
        isBookmarked={isBookmarked}
        onToggleBookmark={() => setIsBookmarked(!isBookmarked)}
      />

      {/* Main Article Sections */}
      <main className="relative">
        {ARTICLE_DATA.sections.map((section, idx) => (
          <SectionViewer
            key={section.id}
            section={section}
            fontSizeClass={fontSizeClass}
            theme={theme}
            onBookmarkQuote={handleBookmarkQuote}
          />
        ))}
      </main>

      {/* Audio Narrator TTS Controller */}
      <AudioNarrator
        isPlaying={isPlayingAudio}
        onTogglePlay={() => setIsPlayingAudio(!isPlayingAudio)}
        activeSectionIndex={0}
      />


    </div>
  );
}
