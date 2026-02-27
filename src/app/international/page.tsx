import Link from "next/link";

/* ═══════════════════════════════════════════════════
   INTERNATIONAL PAGE — jesusreigns.com/international
   ═══════════════════════════════════════════════════ */

/* ── Data ─────────────────────────────────────── */

const stats = [
  { num: "140", label: "Total Churches & Missions" },
  { num: "6+", label: "Global Regions" },
  { num: "40", label: "Years of International Reach" },
  { num: "Est. 1986", label: "Founded in Manila" },
];

interface IntlLocation {
  flag: string;
  name: string;
  location: string;
  description: string;
  accentColor: string;
  href?: string;
  linkLabel: string;
  isComingSoon?: boolean;
}

const row1: IntlLocation[] = [
  {
    flag: "\u{1F1F5}\u{1F1ED}",
    name: "JRM Philippines",
    location: "Manila + 85 Provincial Churches",
    description:
      "The heart and hub of JRM \u2014 85 churches, 55 missions, and the main campus in Malate, Manila.",
    accentColor: "#D4A020",
    href: "/directory",
    linkLabel: "View Directory \u2192",
  },
  {
    flag: "\u{1F1E6}\u{1F1EA}",
    name: "JRM Dubai",
    location: "Dubai, United Arab Emirates",
    description:
      "Reaching the Filipino community in the UAE with regular services, discipleship, and pastoral care.",
    accentColor: "#4A90D9",
    // TODO: Replace with actual external URL
    linkLabel: "Visit JRM Dubai \u2192",
  },
  {
    flag: "\u{1F1ED}\u{1F1F0}",
    name: "JRM Hong Kong",
    location: "Hong Kong SAR",
    description:
      "Serving the Filipino diaspora in Hong Kong with weekly services and active community outreach.",
    accentColor: "#C0392B",
    // TODO: Replace with actual external URL
    linkLabel: "Visit JRM Hong Kong \u2192",
  },
  {
    flag: "\u{1F1EC}\u{1F1E7}",
    name: "JRM United Kingdom",
    location: "United Kingdom",
    description:
      "A growing JRM community in the UK \u2014 gathering Filipino believers and welcoming all who seek God.",
    accentColor: "#27AE60",
    // TODO: Replace with actual external URL
    linkLabel: "Visit JRM UK \u2192",
  },
];

const row2: IntlLocation[] = [
  {
    flag: "\u{1F1E6}\u{1F1FA}",
    name: "JRM Australia",
    location: "Australia",
    description:
      "JRM\u2019s Australian community \u2014 connecting Filipino believers and raising disciples across the continent.",
    accentColor: "#8E44AD",
    // TODO: Replace with actual external URL
    linkLabel: "Visit JRM Australia \u2192",
  },
  {
    flag: "\u{1F1FA}\u{1F1F8}",
    name: "JRM America",
    location: "United States",
    description:
      "Serving the Filipino-American community with the same JRM spirit of worship, discipleship, and mission.",
    accentColor: "#E67E22",
    // TODO: Replace with actual external URL
    linkLabel: "Visit JRM America \u2192",
  },
  {
    flag: "\u{1F30D}",
    name: "More Regions Coming",
    location: "Europe \u00B7 Middle East \u00B7 Asia",
    description:
      "JRM continues to expand globally. If you\u2019re a JRM group in an unlisted location, reach out to us.",
    accentColor: "#16A085",
    href: "/contact",
    linkLabel: "Contact Us \u2192",
  },
];

/* ── Components ───────────────────────────────── */

function IntlCard({ card }: { card: IntlLocation }) {
  const linkContent = (
    <span className="text-xs font-semibold text-amber flex items-center gap-[5px]">
      {card.linkLabel}
    </span>
  );

  return (
    <div
      className="bg-charcoal-3 p-8 border-t-4 transition-all duration-300 cursor-pointer hover:-translate-y-[3px] flex flex-col"
      style={{ borderTopColor: card.accentColor }}
    >
      <div className="text-4xl mb-3.5">{card.flag}</div>
      <div className="font-serif text-[21px] font-bold text-white mb-1.5">
        {card.name}
      </div>
      <div className="text-xs text-white/[0.35] mb-3.5">{card.location}</div>
      <div className="text-[13px] text-white/[0.45] leading-[1.7] mb-[18px] flex-1">
        {card.description}
      </div>
      {card.isComingSoon ? (
        <span className="text-xs font-semibold text-white/[0.25]">
          Coming Soon
        </span>
      ) : card.href ? (
        <Link href={card.href} className="no-underline">
          {linkContent}
        </Link>
      ) : (
        // TODO: Replace href="#" with actual external URL
        <a href="#" className="no-underline">
          {linkContent}
        </a>
      )}
    </div>
  );
}

/* ── Page Export ───────────────────────────────── */

export default function InternationalPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative bg-charcoal py-20 px-16 max-[900px]:px-6">
        <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />
        <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
          Global Reach
        </div>
        <h1 className="font-serif text-page-hero-title text-white mb-4">
          JRM Around the{" "}
          <em className="italic text-amber-light">World</em>
        </h1>
        <p className="text-base text-white/[0.55] max-w-[560px] leading-[1.75]">
          From Manila to the Middle East, Europe, Asia, Australia, and America
          &mdash; Jesus Reigns is one global family.
        </p>
      </div>

      {/* Global Network Stats Bar */}
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

      {/* International Locations Grid */}
      <div className="content-section dark">
        {/* Row 1 — 4 columns */}
        <div className="grid grid-cols-4 gap-[2px] mb-[2px] max-[900px]:grid-cols-1">
          {row1.map((card) => (
            <IntlCard key={card.name} card={card} />
          ))}
        </div>

        {/* Row 2 — 3 columns */}
        <div className="grid grid-cols-3 gap-[2px] max-[900px]:grid-cols-1">
          {row2.map((card) => (
            <IntlCard key={card.name} card={card} />
          ))}
        </div>
      </div>
    </>
  );
}
