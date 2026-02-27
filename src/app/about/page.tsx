import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About JRM | Jesus Reigns Ministries",
  description:
    "40 years of faithful ministry in the Philippines and the world. Learn about JRM's history, leadership, and vision.",
};

/* ═══════════════════════════════════════════════════
   ABOUT PAGE — jesusreigns.com/about
   ═══════════════════════════════════════════════════ */

/* ── Page Hero ────────────────────────────────── */
function PageHero() {
  return (
    <section className="bg-charcoal py-[72px] px-16 relative overflow-hidden max-[900px]:px-6">
      {/* Amber left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />

      <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
        Our Story
      </div>
      <h1 className="font-serif text-page-hero-title text-white mb-4">
        40 Years of <em className="italic text-amber-light">Faithful</em>{" "}
        Ministry
      </h1>
      <p className="text-base text-white/[0.55] max-w-[560px] leading-[1.75]">
        From a small fellowship in Malate to a global network of churches —
        this is the story of Jesus Reigns Ministries.
      </p>
    </section>
  );
}

/* ── Leadership Cards ─────────────────────────── */
const leaders = [
  { emoji: "✝", name: "Bishop Vincent Javier", title: "Senior Bishop & Founder" },
  { emoji: "🕊️", name: "Dr. Ligaya Javier", title: "Co-Founder & Pastor" },
  { emoji: "📖", name: "JRM Pastoral Team", title: "Ministry Leaders" },
];

function Leadership() {
  return (
    <section className="content-section dark max-[900px]:px-6">
      <span className="section-tag">Leadership</span>
      <h2 className="section-title text-white">
        Meet Our <em>Pastors</em>
      </h2>
      <div className="grid grid-cols-3 gap-[2px] mt-10 max-[900px]:grid-cols-1">
        {leaders.map((l) => (
          <div
            key={l.name}
            className="bg-charcoal-3 p-8 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-amber/[0.15] border-2 border-amber flex items-center justify-center text-[28px] mx-auto mb-4">
              {l.emoji}
            </div>
            <div className="font-serif text-lg font-bold text-white mb-1">
              {l.name}
            </div>
            <div className="text-[11px] font-semibold tracking-[1.5px] uppercase text-amber">
              {l.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── History Timeline ─────────────────────────── */
const timelineEntries = [
  {
    year: "1986",
    title: "JRM Founded",
    desc: "Bishop Vincent and Dr. Ligaya Javier establish Jesus Reigns Ministries at 811 J. Nakpil St., Malate, Manila with a vision of a model church.",
  },
  {
    year: "1990s",
    title: "Provincial Expansion",
    desc: "JRM begins planting churches across the Philippines \u2014 from Luzon to Visayas to Mindanao. The DNG (Discipling the Next Generation) program takes root.",
  },
  {
    year: "2000s",
    title: "International Reach",
    desc: "JRM establishes outreaches in Hong Kong, Dubai, the United Kingdom, and other nations where Filipino communities are growing.",
  },
  {
    year: "2010s",
    title: "Institutional Growth",
    desc: "Jesus Reigns Christian Academy (JRCA) and Jesus Reigns Christian College (JRCC) are established under Dr. Ligaya Javier\u2019s leadership.",
  },
  {
    year: "2026",
    title: "40th Anniversary",
    desc: "JRM celebrates 40 years with 85 provincial churches, 55 ongoing missions, and a global digital home at jesusreigns.com.",
  },
];

function HistoryTimeline() {
  return (
    <section className="content-section light max-[900px]:px-6">
      <span className="section-tag">Our History</span>
      <h2 className="section-title text-charcoal">
        A Journey of <em>40 Years</em>
      </h2>
      <div className="max-w-[720px]">
        {timelineEntries.map((entry) => (
          <div
            key={entry.year}
            className="flex gap-6 mb-6 items-start"
          >
            <div className="font-serif text-[22px] font-black text-amber min-w-[80px]">
              {entry.year}
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-charcoal mb-1">
                {entry.title}
              </h4>
              <p className="text-[13px] text-[#555] leading-[1.6]">
                {entry.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── WISDOM Values Grid ───────────────────────── */
const wisdomValues = [
  {
    letter: "W",
    word: "Worship",
    desc: "Exalting Jesus as Lord through Spirit-filled, authentic worship in every service and in daily life.",
  },
  {
    letter: "I",
    word: "Intercession",
    desc: "A praying church that covers every ministry, member, and mission with fervent intercession.",
  },
  {
    letter: "S",
    word: "Service",
    desc: "Serving God by serving people \u2014 in the church, the community, and across the nations.",
  },
  {
    letter: "D",
    word: "Discipleship",
    desc: "Making disciples through the DNG program and mentoring relationships that build character and faith.",
  },
  {
    letter: "O",
    word: "One Heart",
    desc: "Unity across all campuses, regions, and generations \u2014 one Lord, one faith, one mission.",
  },
  {
    letter: "M",
    word: "Mission",
    desc: "Going to the ends of the earth \u2014 planting churches, raising leaders, and reaching the unreached.",
  },
];

function WisdomValues() {
  return (
    <section className="content-section dark max-[900px]:px-6">
      <span className="section-tag">Core Values</span>
      <h2 className="section-title text-white">
        The <em>WISDOM</em> Framework
      </h2>
      <div className="grid grid-cols-3 gap-[2px] mt-10 max-[900px]:grid-cols-1">
        {wisdomValues.map((v) => (
          <div
            key={v.letter}
            className="bg-charcoal-3 p-7 border-l-4 border-l-amber"
          >
            <div className="font-serif text-[44px] font-black text-amber leading-none mb-1.5">
              {v.letter}
            </div>
            <div className="text-sm font-bold text-white tracking-[0.5px] mb-1">
              {v.word}
            </div>
            <div className="text-xs text-white/[0.45] leading-[1.6]">
              {v.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Page Export ────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <PageHero />
      <Leadership />
      <HistoryTimeline />
      <WisdomValues />
    </>
  );
}
