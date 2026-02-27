import type { Metadata } from "next";
import SermonCard from "@/components/SermonCard";
import SermonsSearchBar from "@/components/SermonsSearchBar";

export const metadata: Metadata = {
  title: "Sermons | Jesus Reigns Ministries",
  description:
    "Watch and listen to sermons from Bishop Vincent Javier and the JRM pastoral team. New message every Sunday.",
};

const sermons = [
  {
    series: "Talking to Jesus",
    title: "When You Talk to Jesus \u2014 He Actually Listens",
    speaker: "Bishop Vincent Javier",
    date: "Feb 23, 2026",
    duration: "52 min",
    emoji: "\uD83D\uDD4A\uFE0F",
  },
  {
    series: "FIRST",
    title: "Giving What You\u2019ve Never Given Before",
    speaker: "Bishop Vincent Javier",
    date: "Feb 16, 2026",
    duration: "48 min",
    emoji: "\uD83C\uDF3E",
  },
  {
    series: "Talking to Jesus",
    title: "The Presence of Jesus in Everyday Life",
    speaker: "Bishop Vincent Javier",
    date: "Feb 9, 2026",
    duration: "44 min",
    emoji: "✝️",
  },
  {
    series: "Kingdom Life",
    title: "Building Your House on the Rock",
    speaker: "Guest Speaker",
    date: "Feb 2, 2026",
    duration: "38 min",
    emoji: "\uD83C\uDFD4\uFE0F",
  },
  {
    series: "Talking to Jesus",
    title: "Prayer That Changes Everything",
    speaker: "Bishop Vincent Javier",
    date: "Jan 26, 2026",
    duration: "55 min",
    emoji: "\uD83D\uDD25",
  },
  {
    series: "FIRST",
    title: "First in Your Day, First in Your Heart",
    speaker: "Bishop Vincent Javier",
    date: "Jan 19, 2026",
    duration: "50 min",
    emoji: "\uD83C\uDF0A",
  },
];

export default function SermonsPage() {
  return (
    <>
      {/* ── Section 1: Page Hero ── */}
      <section className="bg-charcoal py-[72px] px-16 relative overflow-hidden max-[900px]:px-6">
        <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />
        <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
          Messages &amp; Teachings
        </div>
        <h1 className="font-serif text-page-hero-title font-black text-white leading-[1.05] tracking-tight mb-4">
          The Word of <em className="italic text-amber-light">God</em>
        </h1>
        <p className="text-base text-white/[0.55] max-w-[560px] leading-[1.75]">
          Explore our growing archive of sermons — search by series, speaker, or
          topic.
        </p>
      </section>

      {/* ── Section 2 & 3: Search + Archive Grid ── */}
      <section className="content-section dark">
        <SermonsSearchBar />

        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
          {sermons.map((s) => (
            <SermonCard key={s.title} {...s} />
          ))}
        </div>

        {/* ── Section 4: Load More ── */}
        <div className="text-center mt-8">
          <button className="btn-outline">Load More Sermons</button>
        </div>
      </section>
    </>
  );
}
