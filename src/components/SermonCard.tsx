interface SermonCardProps {
  title: string;
  series: string;
  date: string;
  speaker: string;
  duration: string;
  emoji: string;
  featured?: boolean;
}

export default function SermonCard({
  title,
  series,
  date,
  speaker,
  duration,
  emoji,
  featured = false,
}: SermonCardProps) {
  return (
    <div className="bg-charcoal-2 rounded-[3px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.3)]">
      {/* Thumbnail */}
      <div
        className={`bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] flex items-center justify-center relative ${
          featured ? "h-[160px] text-[48px]" : "h-[120px] text-[36px]"
        }`}
      >
        {emoji}
        <div className="absolute bottom-3 right-3 w-8 h-8 bg-amber rounded-full flex items-center justify-center text-xs">
          ▶
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="text-[9px] font-bold tracking-[2px] text-amber uppercase mb-1.5">
          Series: {series}
        </div>
        <div
          className={`font-serif font-bold text-white leading-[1.3] mb-1.5 ${
            featured ? "text-xl" : "text-base"
          }`}
        >
          &ldquo;{title}&rdquo;
        </div>
        <div className="text-[11px] text-white/30">
          {speaker} · {date} · {duration}
        </div>
      </div>
    </div>
  );
}
