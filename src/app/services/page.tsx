import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunday Services | Jesus Reigns Ministries",
  description:
    "Join us every Sunday at 8AM, 10:30AM, and 1PM at our Malate campus, or watch live online on YouTube and Facebook.",
};

/* ═══════════════════════════════════════════════════
   SERVICES PAGE — /services
   ═══════════════════════════════════════════════════ */

const services = [
  {
    emoji: "🌅",
    time: "8:00 AM",
    name: "First Service",
    desc: "Our flagship morning service — also streamed live on YouTube and Facebook for our global online community.",
    live: true,
  },
  {
    emoji: "☀️",
    time: "10:30 AM",
    name: "Second Service",
    desc: "A warm mid-morning gathering for families. Same powerful worship, same Word — different schedule.",
    live: false,
  },
  {
    emoji: "🌤️",
    time: "1:00 PM",
    name: "Afternoon Service",
    desc: "Our afternoon service — perfect for those who need the extra morning hours. Full worship and message.",
    live: false,
  },
];

/* ── Page Hero ────────────────────────────────────── */
function PageHero() {
  return (
    <section className="bg-charcoal py-[72px] px-16 relative overflow-hidden max-[900px]:px-6">
      {/* Left amber bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />

      <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
        Every Sunday
      </div>
      <h1 className="font-serif text-page-hero-title text-white mb-4">
        Three Services. <em className="italic text-amber-light">One Family.</em>
      </h1>
      <p className="text-[16px] text-white/[0.55] max-w-[560px] leading-[1.75]">
        Join us in person at our Malate campus or tune in online. There&apos;s
        always a service for you.
      </p>
    </section>
  );
}

/* ── Service Cards ────────────────────────────────── */
function ServiceCards() {
  return (
    <section className="content-section dark">
      <div className="grid grid-cols-3 gap-[2px] max-[900px]:grid-cols-1">
        {services.map((s) => (
          <div
            key={s.time}
            className={`bg-charcoal-3 p-9 transition-transform duration-200 hover:-translate-y-0.5 ${
              s.live ? "border-t-[3px] border-t-amber" : ""
            }`}
          >
            <div className="text-[32px] mb-4">{s.emoji}</div>
            <div className="font-serif text-[42px] font-black text-amber leading-none">
              {s.time}
            </div>
            <div className="text-[11px] font-semibold tracking-[1.5px] uppercase text-white/40 my-2 mb-4">
              {s.name}
            </div>
            <p className="text-sm text-white/50 leading-[1.7] mb-5">
              {s.desc}
            </p>
            {s.live && (
              <div className="inline-flex items-center gap-2 bg-[rgba(231,76,60,0.12)] border border-[rgba(231,76,60,0.25)] py-1.5 px-3.5 rounded-sm text-[11px] font-semibold text-[#e74c3c]">
                <span className="pulse-dot" /> Live Streamed
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Address Bar */}
      <div className="text-center mt-10 py-6 px-8 bg-amber/[0.07] border border-amber/[0.15] rounded-[3px]">
        <p className="text-sm text-white/50">
          📍&nbsp;
          <strong className="text-white">
            811 J. Nakpil cor. P.H. Lim Sts., Malate, Manila 1004
          </strong>
          &nbsp;&middot;&nbsp; Tel: (02) 4003819 / 254-7569
        </p>
      </div>
    </section>
  );
}

/* ── Online CTA ───────────────────────────────────── */
function OnlineCta() {
  return (
    <section className="content-section light text-center !py-[60px]">
      <span className="section-tag">Can&apos;t Make It In Person?</span>
      <h2 className="section-title text-charcoal">
        Watch Us <em>Online</em>
      </h2>
      <p className="text-[#666] max-w-[480px] mx-auto mb-8 leading-[1.7]">
        Every Sunday at 8:00 AM, our first service is broadcast live on YouTube
        and Facebook. No download required — just click and worship with us from
        anywhere in the world.
      </p>
      <Link href="/live" className="btn-primary">
        ▶ Go to Live Stream Page
      </Link>
    </section>
  );
}

/* ── Page Export ───────────────────────────────────── */
export default function ServicesPage() {
  return (
    <>
      <PageHero />
      <ServiceCards />
      <OnlineCta />
    </>
  );
}
