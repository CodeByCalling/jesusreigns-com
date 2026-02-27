import Link from "next/link";

/* ═══════════════════════════════════════════════════
   HOME PAGE — jesusreigns.com
   ═══════════════════════════════════════════════════ */

/* ── Hero ──────────────────────────────────────── */
function Hero() {
  return (
    <section className="min-h-screen bg-charcoal flex items-center relative overflow-hidden">
      {/* Amber left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />

      {/* Background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[26vw] font-black text-white/[0.022] whitespace-nowrap pointer-events-none select-none">
        REIGNS
      </div>

      {/* Content */}
      <div className="relative z-[2] px-[72px] max-w-[800px] max-[900px]:px-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 bg-amber/10 border border-amber/25 py-1.5 px-3.5 rounded-sm mb-[26px]">
          <span className="pulse-dot" />
          <span className="text-[11px] font-semibold tracking-[2px] uppercase text-amber">
            Live Every Sunday · 8:00 AM
          </span>
        </div>

        <h1 className="font-serif text-hero-xl text-white">
          Where
          <br />
          <em className="italic text-amber-light">Jesus Reigns,</em>
          <br />
          Nations Transform.
        </h1>

        <p className="text-[17px] font-light text-white/[0.55] leading-[1.8] my-5 mb-[38px] max-w-[500px]">
          A global ministry rooted in Manila since 1986. Winning souls, making
          disciples, and reaching nations — one church at a time.
        </p>

        <div className="flex gap-3.5 flex-wrap items-center">
          <Link href="/livestream" className="btn-primary">
            ▶ Watch Live
          </Link>
          <Link href="/new-here" className="btn-ghost">
            I&apos;m New Here →
          </Link>
          <Link href="/events" className="btn-ghost">
            Upcoming Events →
          </Link>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-amber/[0.07] border-t border-amber/[0.18] py-[18px] px-[72px] flex items-center gap-10 flex-wrap max-[900px]:px-6">
        <span className="text-[10px] font-semibold tracking-[2.5px] uppercase text-amber whitespace-nowrap">
          Sunday Services
        </span>
        <div className="flex gap-7 flex-wrap">
          <div>
            <strong className="text-[15px] font-semibold text-white block">
              8:00 AM
            </strong>
            <small className="text-[11px] text-white/[0.38]">
              + Live Stream
            </small>
          </div>
          <div>
            <strong className="text-[15px] font-semibold text-white block">
              10:30 AM
            </strong>
            <small className="text-[11px] text-white/[0.38]">
              Filipino Service
            </small>
          </div>
          <div>
            <strong className="text-[15px] font-semibold text-white block">
              1:00 PM
            </strong>
            <small className="text-[11px] text-white/[0.38]">
              Afternoon Service
            </small>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2 text-[13px] text-white/50">
          <span className="pulse-dot" /> YouTube &amp; Facebook Live
        </div>
      </div>
    </section>
  );
}

/* ── Stats Bar ─────────────────────────────────── */
const stats = [
  { num: "40", label: "Years of Ministry" },
  { num: "85", label: "Provincial Churches" },
  { num: "55", label: "Ongoing Missions" },
  { num: "6+", label: "Global Regions" },
];

function StatsBar() {
  return (
    <div className="bg-charcoal-2 grid grid-cols-4 border-b border-amber/[0.12] max-[900px]:grid-cols-1">
      {stats.map((s) => (
        <div
          key={s.label}
          className="text-center py-8 px-5 border-r border-white/5 last:border-r-0"
        >
          <div className="stat-num">{s.num}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ── About Strip ───────────────────────────────── */
const wisdomPills = [
  { emoji: "🙏", label: "Worship" },
  { emoji: "⚔️", label: "Intercession" },
  { emoji: "🤝", label: "Service" },
  { emoji: "📖", label: "Discipleship" },
  { emoji: "❤️", label: "One Heart" },
  { emoji: "🌍", label: "Mission" },
];

function HomeAbout() {
  return (
    <div className="grid grid-cols-2 max-[900px]:grid-cols-1">
      {/* Left — Our Story */}
      <div className="bg-offwhite py-20 px-16 max-[900px]:px-6 max-[900px]:py-10">
        <span className="section-tag">Our Story</span>
        <h2 className="section-title text-charcoal">
          40 Years of <em>Faithful</em> Ministry
        </h2>
        <p className="text-[15px] text-[#555] leading-[1.8] mb-4">
          Founded in 1986 in Malate, Manila by Bishop Vincent and Dr. Ligaya
          Javier, Jesus Reigns Ministries began with one vision: a model church
          where Jesus truly reigns.
        </p>
        <p className="text-[15px] text-[#555] leading-[1.8] mb-7">
          Today, JRM spans the Philippines and the world — united by one mission,
          one Lord.
        </p>
        <Link href="/about" className="btn-dark">
          Our Full Story →
        </Link>
        <div className="grid grid-cols-2 gap-2.5 mt-7">
          {wisdomPills.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-2.5 bg-charcoal py-3 px-3.5 rounded-sm"
            >
              <span>{p.emoji}</span>
              <span className="text-xs font-semibold tracking-[1px] uppercase text-amber">
                {p.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Founders */}
      <div className="bg-charcoal py-20 px-16 flex flex-col justify-center max-[900px]:px-6 max-[900px]:py-10">
        <span className="section-tag">
          Bishop Vincent &amp; Dr. Ligaya Javier
        </span>
        <h2 className="section-title text-white text-[32px]">
          Founders &amp; Senior Pastors
        </h2>
        <p className="text-sm text-white/[0.45] leading-[1.8]">
          Under their visionary leadership, JRM has grown from a small Manila
          fellowship into a global network of churches spanning six continents —
          all driven by the call to win souls and make disciples.
        </p>
        <div className="mt-8 flex gap-3 flex-wrap">
          <div className="bg-amber/10 border border-amber/20 py-4 px-5 flex-1 min-w-[120px] text-center">
            <div className="font-serif text-[32px] font-black text-amber">
              1986
            </div>
            <div className="text-[11px] text-white/[0.35] tracking-[1px] mt-1">
              Founded
            </div>
          </div>
          <div className="bg-amber/10 border border-amber/20 py-4 px-5 flex-1 min-w-[120px] text-center">
            <div className="font-serif text-[32px] font-black text-amber">
              2026
            </div>
            <div className="text-[11px] text-white/[0.35] tracking-[1px] mt-1">
              40th Year
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Events Preview ────────────────────────────── */
const upcomingEvents = [
  {
    date: "March 15, 2026",
    title: "Prayer Garden Special",
    desc: "📍 JRM Manila · One-day prayer & fasting",
  },
  {
    date: "April 12, 2026",
    title: "DNG Graduation 2026",
    desc: "📍 JRM Manila · Discipleship completion",
  },
  {
    date: "June 2026",
    title: "National Prayer Gathering",
    desc: "📍 Manila · Multi-church national event",
  },
  {
    date: "September 2026",
    title: "40th Anniversary Celebration",
    desc: "📍 JRM Manila · 1986–2026 milestone",
  },
];

function EventsPreview() {
  return (
    <div className="bg-charcoal-2 py-20 px-16 max-[900px]:px-6 max-[900px]:py-10">
      <div className="flex items-end justify-between mb-0 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-4">
        <div>
          <span className="section-tag">What&apos;s Coming</span>
          <h2 className="section-title text-white mb-0">
            Upcoming <em>Events</em>
          </h2>
        </div>
        <Link href="/events" className="btn-outline mb-2">
          See All Events →
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-[2px] mt-10 max-[900px]:grid-cols-1">
        {upcomingEvents.map((evt) => (
          <Link
            key={evt.title}
            href="/events"
            className="bg-charcoal-3 p-6 border-t-[3px] border-t-transparent transition-all duration-300 cursor-pointer no-underline hover:border-t-amber hover:-translate-y-0.5"
          >
            <div className="text-[10px] font-semibold tracking-[1.5px] text-amber uppercase mb-2.5">
              📅 {evt.date}
            </div>
            <h4 className="font-serif text-base font-bold text-white leading-[1.3] mb-2">
              {evt.title}
            </h4>
            <p className="text-xs text-white/40">{evt.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Sermons Preview ───────────────────────────── */
const sermons = [
  {
    date: "February 23, 2026",
    title: "\u201CWhen You Talk to Jesus — He Actually Listens\u201D",
    speaker: "Bishop Vincent Javier",
    featured: true,
    series: "Latest Message",
  },
  {
    date: "February 16, 2026",
    title: "\u201CFIRST: Giving What You\u2019ve Never Given Before\u201D",
    speaker: "Bishop Vincent Javier",
    featured: false,
  },
  {
    date: "February 9, 2026",
    title: "\u201CThe Presence of Jesus in Everyday Life\u201D",
    speaker: "Bishop Vincent Javier",
    featured: false,
  },
];

function SermonsPreview() {
  return (
    <div className="bg-offwhite py-20 px-16 max-[900px]:px-6 max-[900px]:py-10">
      <div className="flex items-end justify-between mb-10 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-4">
        <div>
          <span className="section-tag">Recent Messages</span>
          <h2 className="section-title text-charcoal mb-0">
            Latest <em>Sermons</em>
          </h2>
        </div>
        <Link href="/sermons" className="btn-dark mb-1">
          All Sermons →
        </Link>
      </div>
      <div className="grid grid-cols-[1.6fr_1fr_1fr] gap-[2px] max-[900px]:grid-cols-1">
        {sermons.map((s) => (
          <Link
            key={s.title}
            href="/sermons"
            className={`bg-charcoal cursor-pointer transition-transform duration-200 no-underline hover:-translate-y-[3px] ${
              s.featured ? "p-10" : "p-[30px]"
            }`}
          >
            {s.featured && s.series && (
              <span className="text-[10px] font-bold tracking-[2px] uppercase bg-amber text-charcoal py-1 px-2.5 inline-block mb-4">
                {s.series}
              </span>
            )}
            <div className="text-[11px] text-white/[0.35] mb-2">{s.date}</div>
            <div
              className={`font-serif font-bold text-white leading-[1.3] mb-2 ${
                s.featured ? "text-2xl" : "text-lg"
              }`}
            >
              {s.title}
            </div>
            <div className="text-xs text-white/40">{s.speaker}</div>
            <div className="flex items-center gap-1.5 mt-4 text-amber text-[13px] font-semibold">
              ▶ {s.featured ? "Watch Now" : "Watch"}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Social & Reviews ──────────────────────────── */
const socials = [
  { name: "Facebook", handle: "@jrmcentral", icon: "📘", hover: "hover:border-t-[#1877F2]" },
  { name: "YouTube", handle: "Jesus Reigns Ministries", icon: "📺", hover: "hover:border-t-[#FF0000]" },
  { name: "Instagram", handle: "@jrmcentral · 673 followers", icon: "📸", hover: "hover:border-t-[#E1306C]" },
  { name: "Twitter / X", handle: "@jrmcentral", icon: "𝕏", hover: "hover:border-t-[#1DA1F2]" },
  { name: "TikTok", handle: "@jrmcentral", icon: "🎵", hover: "hover:border-t-[#69C9D0]" },
];

const reviews = [
  {
    text: "\u201CJRM has been my spiritual home for 15 years. The Word is always deep, relevant, and life-changing.\u201D",
    author: "Maria Santos · JRM Member",
  },
  {
    text: "\u201CThe warmth of this church is unlike anything I\u2019ve experienced. Bishop Vincent is a true shepherd.\u201D",
    author: "James Reyes · First-time visitor",
  },
  {
    text: "\u201CEven watching online from Dubai, I feel the presence of God. JRM is truly a global church family.\u201D",
    author: "Grace Dela Cruz · JRM Dubai",
  },
];

function SocialAndReviews() {
  return (
    <div className="bg-charcoal py-20 px-16 max-[900px]:px-6 max-[900px]:py-10">
      <span className="section-tag">Stay Connected</span>
      <h2 className="section-title text-white">
        Follow JRM <em>Online</em>
      </h2>

      {/* Social cards */}
      <div className="grid grid-cols-5 gap-[2px] my-10 max-[900px]:grid-cols-1">
        {socials.map((s) => (
          <div
            key={s.name}
            className={`bg-charcoal-3 py-7 px-5 text-center border-t-[3px] border-t-transparent transition-all duration-300 cursor-pointer hover:-translate-y-[3px] ${s.hover}`}
          >
            <div className="text-[32px] mb-3">{s.icon}</div>
            <div className="text-[13px] font-semibold text-white mb-1">
              {s.name}
            </div>
            <div className="text-[11px] text-white/[0.35]">{s.handle}</div>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-4">
          <h3 className="font-serif text-[22px] text-white">
            What People Are Saying
          </h3>
          <div className="flex items-center gap-2.5">
            <div className="text-[36px] font-bold text-amber font-serif">
              4.9
            </div>
            <div>
              <div className="text-[#FFD700] text-lg">★★★★★</div>
              <div className="text-xs text-white/[0.35]">
                Based on Google Reviews
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/[0.08] p-6 rounded"
            >
              <div className="text-[#FFD700] text-[13px] mb-2.5">★★★★★</div>
              <p className="text-[13px] text-white/60 leading-[1.7] mb-3.5 italic">
                {r.text}
              </p>
              <div className="text-xs font-semibold text-white/40">
                {r.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Give CTA Strip ────────────────────────────── */
function GiveCta() {
  return (
    <div className="bg-amber py-[60px] px-16 flex items-center justify-between gap-8 flex-wrap max-[900px]:px-6">
      <div>
        <span className="section-tag !text-[rgba(30,30,30,0.5)]">
          Partner With Us
        </span>
        <h2 className="section-title text-charcoal text-4xl !mb-2">
          Your Giving <em className="!text-[#6b4a00]">Advances</em> the Kingdom
        </h2>
        <p className="text-[15px] text-[rgba(30,30,30,0.6)] max-w-[480px]">
          Every offering sown into JRM goes toward reaching more souls, planting
          more churches, and discipling the next generation.
        </p>
      </div>
      <div className="flex gap-3 flex-shrink-0 flex-wrap">
        <Link href="/give" className="btn-dark">
          💳 Give Online
        </Link>
        <Link
          href="/give"
          className="border-2 border-[rgba(30,30,30,0.3)] text-charcoal bg-transparent font-semibold text-sm py-3 px-6 rounded-[3px] cursor-pointer no-underline transition-all duration-200 hover:bg-charcoal hover:text-white"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

/* ── Page Export ────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <HomeAbout />
      <EventsPreview />
      <SermonsPreview />
      <SocialAndReviews />
      <GiveCta />
    </>
  );
}
