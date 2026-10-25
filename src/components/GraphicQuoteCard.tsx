import React from 'react';

export interface GraphicQuoteProps {
  quote: {
    content: string;
    author: string;
    title: string;
  };
  variant?: 'yellow' | 'blue' | 'lime' | 'rose' | 'amber';
  index?: number;
  onBookmarkQuote?: (quote: string) => void;
}

export const GraphicQuoteCard: React.FC<GraphicQuoteProps> = ({
  quote,
  variant,
  index = 0
}) => {
  // Cycle variants if not explicitly set: yellow (0), blue (1), lime (2), rose (3), amber (4)
  const variants = ['yellow', 'blue', 'lime', 'rose', 'amber'] as const;
  const selectedVariant = variant || variants[index % variants.length];

  const colorStyles = {
    yellow: {
      bg: 'bg-[#FFCC33]',
      text: 'text-stone-950',
      border: 'border-black/80',
      quote: 'text-black/70',
      authorText: 'text-black',
      subText: 'text-black/80',
      divider: 'border-black/20',
    },
    blue: {
      bg: 'bg-[#80CBF5]',
      text: 'text-stone-950',
      border: 'border-black/80',
      quote: 'text-black/70',
      authorText: 'text-black',
      subText: 'text-black/85',
      divider: 'border-black/20',
    },
    lime: {
      bg: 'bg-[#A3D139]',
      text: 'text-stone-950',
      border: 'border-black/80',
      quote: 'text-black/70',
      authorText: 'text-black',
      subText: 'text-black/85',
      divider: 'border-black/20',
    },
    rose: {
      bg: 'bg-[#E53935]',
      text: 'text-white',
      border: 'border-black/80',
      quote: 'text-white/80',
      authorText: 'text-white',
      subText: 'text-white/90',
      divider: 'border-white/25',
    },
    amber: {
      bg: 'bg-[#FB8C00]',
      text: 'text-stone-950',
      border: 'border-black/80',
      quote: 'text-black/70',
      authorText: 'text-black',
      subText: 'text-black/85',
      divider: 'border-black/20',
    }
  }[selectedVariant];

  return (
    <div className="relative my-10 max-w-3xl mx-auto px-2 sm:px-4">
      {/* Outer Thin Rectangular Frame Box */}
      <div className="absolute inset-0 border border-black/70 rounded-sm transform rotate-[-0.6deg] translate-x-1 translate-y-1 pointer-events-none z-0 bg-white/40 dark:bg-black/40" />

      {/* Main Tilted Graphic Banner Box */}
      <div 
        className={`relative z-10 p-6 sm:p-8 md:p-9 rounded-sm shadow-md border ${colorStyles.border} ${colorStyles.bg} transform rotate-[0.8deg] hover:rotate-0 transition-transform duration-300 ease-out`}
      >
        {/* Top-Left Opening Quote Mark Graphic */}
        <div className="absolute top-2.5 left-3 sm:top-3.5 sm:left-4 select-none pointer-events-none opacity-60">
          <svg className={`w-7 h-7 sm:w-9 sm:h-9 ${colorStyles.quote} fill-current`} viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>

        {/* Bottom-Right Closing Quote Mark Graphic */}
        <div className="absolute bottom-2.5 right-3 sm:bottom-3.5 sm:right-4 select-none pointer-events-none opacity-60">
          <svg className={`w-7 h-7 sm:w-9 sm:h-9 ${colorStyles.quote} fill-current transform rotate-180`} viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>

        {/* Main Graphic Quote Text Content */}
        <div className="px-4 sm:px-8 py-2 text-center">
          <p className={`font-sans italic font-medium sm:font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed sm:leading-relaxed tracking-tight ${colorStyles.text}`}>
            {quote.content}
          </p>

          {/* Author Signature & Role Badge (No dash before author name) */}
          <div className={`mt-4 pt-2.5 border-t ${colorStyles.divider} flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2`}>
            <span className={`font-sans uppercase font-bold text-sm sm:text-base tracking-wide ${colorStyles.authorText}`}>
              {quote.author}
            </span>
            <span className={`text-xs sm:text-sm font-medium ${colorStyles.subText}`}>
              ({quote.title})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

