"use client";

import { useState, type FormEvent } from "react";

/* ═══════════════════════════════════════════════════
   PRAYER WALL — jesusreigns.com/prayer-wall
   ═══════════════════════════════════════════════════ */

/* ── Sample Data ──────────────────────────────── */
const samplePrayers = [
  {
    name: "Maria S.",
    time: "2 hours ago",
    text: "\u201CPlease pray for my mother\u2019s healing. She has been hospitalized for a week and we are trusting God for a miracle.\u201D",
    praying: 14,
  },
  {
    name: "James R.",
    time: "5 hours ago",
    text: "\u201CPray for our family as we navigate a difficult financial season. We believe God will provide.\u201D",
    praying: 22,
  },
  {
    name: "Grace D.",
    time: "1 day ago",
    text: "\u201CIntercede for the Philippines. For revival, for our leaders, and for every city where JRM has a church.\u201D",
    praying: 41,
  },
  {
    name: "Anonymous",
    time: "2 days ago",
    text: "\u201CPlease pray for my marriage. We are going through a hard season but I believe God can restore what was broken.\u201D",
    praying: 18,
  },
  {
    name: "JRM Dubai",
    time: "3 days ago",
    text: "\u201CPray for our team as we build the JRM website. May this platform reach many souls for Jesus.\u201D",
    praying: 56,
  },
];

/* ── Page Hero ────────────────────────────────── */
function PageHero() {
  return (
    <section className="bg-charcoal-2 py-[72px] px-16 relative overflow-hidden max-[900px]:px-6">
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />
      <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
        Community Prayer
      </div>
      <h1 className="font-serif text-page-hero-title text-white mb-4">
        The <em className="italic text-amber-light">Prayer Wall</em>
      </h1>
      <p className="text-base text-white/[0.55] max-w-[560px] leading-[1.75]">
        Submit your prayer requests. Our pastoral team and church family will
        pray with you and for you.
      </p>
    </section>
  );
}

/* ── Prayer Card ──────────────────────────────── */
function PrayerCard({
  name,
  time,
  text,
  praying,
}: {
  name: string;
  time: string;
  text: string;
  praying: number;
}) {
  return (
    <div className="bg-charcoal-3 py-5 px-6 border-l-4 border-l-amber rounded-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[13px] font-semibold text-amber">{name}</span>
        <span className="text-[11px] text-white/[0.25]">{time}</span>
      </div>
      <p className="text-[13px] text-white/60 leading-[1.7]">{text}</p>
      <div className="text-[11px] text-white/[0.3] mt-2.5 flex items-center gap-1.5">
        🙏 {praying} people are praying
      </div>
    </div>
  );
}

/* ── Main Content ─────────────────────────────── */
function PrayerWallContent() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const [visibility, setVisibility] = useState("public");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setRequest("");
    setVisibility("public");
  }

  return (
    <section className="content-section dark max-[900px]:px-6">
      <div className="grid grid-cols-[1fr_1.2fr] gap-12 items-start max-[900px]:grid-cols-1">
        {/* Left — Community Requests */}
        <div>
          <span className="section-tag">Community Requests</span>
          <h2 className="section-title text-white !text-[28px]">
            What the <em>Church</em> is Praying For
          </h2>
          <div className="flex flex-col gap-3.5 max-h-[600px] overflow-y-auto pr-2">
            {samplePrayers.map((p) => (
              <PrayerCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* Right — Submission Form */}
        <div>
          <span className="section-tag">Submit a Request</span>
          <h2 className="section-title text-white !text-[28px]">
            Share Your <em>Prayer Need</em>
          </h2>

          {submitted ? (
            <div className="bg-amber/10 border border-amber/25 p-6 rounded-sm">
              <p className="text-[15px] text-amber leading-[1.7] font-medium">
                Thank you. Your prayer request has been received. Our pastoral
                team will pray for you.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-outline mt-4"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-5">
                <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First name or Anonymous"
                  className="w-full py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/[0.3]"
                />
              </div>

              {/* Prayer Request */}
              <div className="mb-5">
                <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
                  Prayer Request
                </label>
                <textarea
                  value={request}
                  onChange={(e) => setRequest(e.target.value)}
                  placeholder="Share what's on your heart..."
                  required
                  className="w-full py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/[0.3] resize-y min-h-[140px]"
                />
              </div>

              {/* Visibility */}
              <div className="mb-5">
                <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
                  Visibility
                </label>
                <select
                  value={visibility}
                  onChange={(e) => setVisibility(e.target.value)}
                  className="w-full py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber [&>option]:bg-[#222] [&>option]:text-white"
                >
                  <option value="public">
                    Share publicly on Prayer Wall
                  </option>
                  <option value="private">
                    Private — Pastoral team only
                  </option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary w-full justify-center"
              >
                🙏 Submit Prayer Request
              </button>

              <p className="text-xs text-white/[0.25] mt-3 leading-[1.6]">
                All requests are reviewed by our pastoral team. Private requests
                are kept completely confidential.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── Page Export ────────────────────────────────── */
export default function PrayerWallPage() {
  return (
    <>
      <PageHero />
      <PrayerWallContent />
    </>
  );
}
