import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Stream | Jesus Reigns Ministries",
  description:
    "Watch JRM live every Sunday at 8:00 AM on YouTube and Facebook. Stream from anywhere in the world.",
};

/* ═══════════════════════════════════════════════════
   LIVE STREAM PAGE — /live
   ═══════════════════════════════════════════════════ */

const schedule = [
  { time: "8:00 AM", label: "First Service · LIVE", active: true },
  { time: "10:30 AM", label: "Second Service", active: false },
  { time: "1:00 PM", label: "Afternoon Service", active: false },
];

const recentSermons = [
  {
    date: "February 23, 2026",
    title: "\u201CWhen You Talk to Jesus — He Actually Listens\u201D",
    speaker: "Bishop Vincent Javier",
    duration: "52 min",
  },
  {
    date: "February 16, 2026",
    title: "\u201CFIRST: Giving What You\u2019ve Never Given Before\u201D",
    speaker: "Bishop Vincent Javier",
    duration: "48 min",
  },
  {
    date: "February 9, 2026",
    title: "\u201CThe Presence of Jesus in Everyday Life\u201D",
    speaker: "Bishop Vincent Javier",
    duration: "44 min",
  },
];

/* ── Stream Header + Embed + Schedule ─────────────── */
function StreamMain() {
  return (
    <section className="bg-charcoal py-12 px-16 max-[900px]:px-6">
      {/* Header row */}
      <div className="flex items-center justify-between mb-0 flex-wrap gap-4">
        <div>
          <span className="section-tag">Every Sunday · 8:00 AM</span>
          <h1 className="font-serif text-[clamp(28px,4vw,48px)] font-black text-white leading-[1.05]">
            📺 Live <em className="italic text-amber-light">Stream</em>
          </h1>
        </div>
        <div className="flex items-center gap-2.5 bg-[rgba(231,76,60,0.12)] border border-[rgba(231,76,60,0.3)] py-2.5 px-[18px] rounded-[3px]">
          <span className="pulse-dot" />
          <span className="text-[#e74c3c] font-semibold text-[13px]">
            Next Live: Sunday 8:00 AM
          </span>
        </div>
      </div>

      {/* Video embed placeholder */}
      {/* TODO: Replace placeholder with YouTube/Facebook Live iframe embed from JRM Manila team */}
      <div className="bg-black rounded aspect-video flex items-center justify-center max-w-[900px] mx-auto mt-8 border border-amber/[0.15]">
        <div className="text-center">
          <span className="text-[64px] block mb-4">📺</span>
          <p className="text-[13px] text-white/40">
            Live stream embeds here every Sunday at 8:00 AM
            <br />
            <em>YouTube &amp; Facebook Live</em>
          </p>
          <div className="flex gap-3 mt-5 justify-center">
            <a
              href="#"
              className="bg-[#FF0000] text-white font-bold text-[13px] py-2.5 px-5 rounded-[3px] no-underline transition-opacity hover:opacity-90"
            >
              ▶ YouTube Live
            </a>
            <a
              href="#"
              className="bg-[#1877F2] text-white font-bold text-[13px] py-2.5 px-5 rounded-[3px] no-underline transition-opacity hover:opacity-90"
            >
              ▶ Facebook Live
            </a>
          </div>
        </div>
      </div>

      {/* Schedule strip */}
      <div className="grid grid-cols-3 gap-[2px] max-w-[900px] mx-auto mt-0 max-[900px]:grid-cols-1">
        {schedule.map((s) => (
          <div
            key={s.time}
            className={`bg-charcoal-3 p-6 ${s.active ? "border-l-4 border-l-amber" : ""}`}
          >
            <div
              className={`text-lg font-bold ${s.active ? "text-amber" : "text-white"}`}
            >
              {s.time}
            </div>
            <div className="text-[11px] text-white/40 tracking-[1px] mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Recent Recordings ────────────────────────────── */
function RecentRecordings() {
  return (
    <section className="content-section dark !pt-10">
      <span className="section-tag">Missed the Live Service?</span>
      <h2 className="section-title text-white">
        Watch Recent <em>Recordings</em>
      </h2>

      <div className="grid grid-cols-3 gap-[2px] mt-8 max-[900px]:grid-cols-1">
        {recentSermons.map((s) => (
          <Link
            key={s.date}
            href="/sermons"
            className="bg-charcoal-3 p-8 cursor-pointer transition-transform duration-200 no-underline hover:-translate-y-0.5"
          >
            <div className="text-[11px] text-amber font-semibold tracking-[1px] mb-2">
              {s.date}
            </div>
            <div className="font-serif text-[17px] text-white font-bold mb-1.5 leading-[1.3]">
              {s.title}
            </div>
            <div className="text-xs text-white/30">
              {s.speaker} · {s.duration}
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/sermons" className="btn-outline">
          Browse All Sermons →
        </Link>
      </div>
    </section>
  );
}

/* ── Page Export ───────────────────────────────────── */
export default function LiveStreamPage() {
  return (
    <>
      <StreamMain />
      <RecentRecordings />
    </>
  );
}
