"use client";

import { useState } from "react";

/* ═══════════════════════════════════════════════════
   EVENTS PAGE — jesusreigns.com/events
   ═══════════════════════════════════════════════════ */

// metadata export must be in a separate layout or handled via generateMetadata
// since this is a client component — we use a head-level approach in layout

/* ── Data ─────────────────────────────────────── */

type EventType =
  | "prayer"
  | "discipleship"
  | "youth"
  | "global"
  | "special"
  | "anniversary";

interface EventItem {
  type: EventType;
  emoji: string;
  typeBadge: string;
  banner: string;
  date: string;
  title: string;
  location: string;
  description: string;
  registerLabel: string;
  /** Special amber styling for anniversary card */
  highlight?: boolean;
}

const events: EventItem[] = [
  {
    type: "prayer",
    emoji: "\u{1F64F}",
    typeBadge: "Prayer",
    banner: "linear-gradient(135deg,#1a2a3a,#0d1a2a)",
    date: "\u{1F4C5} March 15, 2026",
    title: "Prayer Garden Special",
    location: "\u{1F4CD} JRM Manila \u00B7 Malate Campus",
    description:
      "A one-day prayer and fasting gathering. Come and press into God\u2019s presence together as a church family.",
    registerLabel: "Register",
  },
  {
    type: "discipleship",
    emoji: "\u{1F393}",
    typeBadge: "Discipleship",
    banner: "linear-gradient(135deg,#1a2a1a,#0d1a0d)",
    date: "\u{1F4C5} April 12, 2026",
    title: "DNG Graduation 2026",
    location: "\u{1F4CD} JRM Manila \u00B7 Main Sanctuary",
    description:
      "Celebrating the completion of our Discipling the Next Generation program. A milestone for JRM families.",
    registerLabel: "Register",
  },
  {
    type: "youth",
    emoji: "\u26FA",
    typeBadge: "Youth",
    banner: "linear-gradient(135deg,#2a1a3a,#1a0d2a)",
    date: "\u{1F4C5} May 2026",
    title: "Youth Camp 2026",
    location: "\u{1F4CD} TBA \u00B7 Camp Location",
    description:
      "An immersive camp experience for JRM\u2019s young people \u2014 worship, discipleship, fellowship, and fun.",
    registerLabel: "Register",
  },
  {
    type: "youth",
    emoji: "\u{1F3D5}\uFE0F",
    typeBadge: "Family",
    banner: "linear-gradient(135deg,#2a1a1a,#1a0d0d)",
    date: "\u{1F4C5} May 2026",
    title: "Family Camp 2026",
    location: "\u{1F4CD} TBA \u00B7 Retreat Venue",
    description:
      "A whole-family retreat \u2014 strengthening homes, deepening faith, and building memories that last a lifetime.",
    registerLabel: "Register",
  },
  {
    type: "prayer",
    emoji: "\u{1F56F}\uFE0F",
    typeBadge: "Prayer",
    banner: "linear-gradient(135deg,#1a1a2a,#0d0d1a)",
    date: "\u{1F4C5} June 2026",
    title: "National Prayer Gathering (NPG)",
    location: "\u{1F4CD} Manila \u00B7 Venue TBA",
    description:
      "A large-scale national prayer gathering \u2014 JRM joins with partner churches to intercede for the Philippines and the nations.",
    registerLabel: "Register",
  },
  {
    type: "global",
    emoji: "\u{1F30D}",
    typeBadge: "Global",
    banner: "linear-gradient(135deg,#1a2a2a,#0d1a1a)",
    date: "\u{1F4C5} June 2026",
    title: "JRM Dubai Conference",
    location: "\u{1F4CD} Dubai, UAE \u00B7 Venue TBA",
    description:
      "A ministry conference for the JRM Dubai outreach community \u2014 connecting the Filipino diaspora around the Word.",
    registerLabel: "Register",
  },
  {
    type: "special",
    emoji: "\u271D\uFE0F",
    typeBadge: "Special Service",
    banner: "linear-gradient(135deg,#2a2a1a,#1a1a0d)",
    date: "\u{1F4C5} August 2026",
    title: "Anniversary Sunday Services",
    location: "\u{1F4CD} JRM Manila \u00B7 All Services",
    description:
      "Special Sunday services leading up to the 40th anniversary celebration \u2014 commemorating 40 years of God\u2019s faithfulness.",
    registerLabel: "Register",
  },
  {
    type: "global",
    emoji: "\u{1F1ED}\u{1F1F0}",
    typeBadge: "Global",
    banner: "linear-gradient(135deg,#1a2a3a,#0d1a2a)",
    date: "\u{1F4C5} July 2026",
    title: "JRM Hong Kong Prayer Night",
    location: "\u{1F4CD} Hong Kong",
    description:
      "A night of worship and intercession for the JRM Hong Kong community and the region.",
    registerLabel: "Register",
  },
  {
    type: "anniversary",
    emoji: "\u{1F389}",
    typeBadge: "40th Anniversary",
    banner: "linear-gradient(135deg,#2a1a0d,#1a0d05)",
    date: "\u{1F4C5} September 2026 \u00B7 1986\u20132026",
    title: "JRM 40th Anniversary Celebration",
    location: "\u{1F4CD} JRM Manila \u00B7 Full Day Event",
    description:
      "40 years of God\u2019s faithfulness. A landmark celebration for the entire JRM global family \u2014 live, online, and across all campuses.",
    registerLabel: "Register Now",
    highlight: true,
  },
];

type FilterKey =
  | "all"
  | "special"
  | "prayer"
  | "youth"
  | "discipleship"
  | "global"
  | "anniversary";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Events" },
  { key: "special", label: "Special Services" },
  { key: "prayer", label: "Prayer Events" },
  { key: "youth", label: "Youth & Family" },
  { key: "discipleship", label: "Discipleship" },
  { key: "global", label: "Global Events" },
  { key: "anniversary", label: "Anniversary" },
];

const calendarLegend = [
  { color: "#D4A020", label: "Services & Special Sundays" },
  { color: "#4A90D9", label: "Discipleship" },
  { color: "#27AE60", label: "Community Outreach" },
  { color: "#8E44AD", label: "Youth & Family" },
  { color: "#C0392B", label: "Prayer & Intercession" },
];

/* ── Components ───────────────────────────────── */

function PageHero() {
  return (
    <div className="relative bg-charcoal py-20 px-16 max-[900px]:px-6">
      {/* Amber left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />
      <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
        Events &amp; Calendar
      </div>
      <h1 className="font-serif text-page-hero-title text-white mb-4">
        What&apos;s <em className="italic text-amber-light">Happening</em>
        <br />
        at JRM
      </h1>
      <p className="text-base text-white/[0.55] max-w-[560px] leading-[1.75]">
        From major gatherings to intimate prayer services — see everything
        coming up in our ministry calendar.
      </p>
    </div>
  );
}

function EventCard({
  event,
  onRegister,
}: {
  event: EventItem;
  onRegister: (title: string) => void;
}) {
  const isHighlight = event.highlight;

  return (
    <div className="bg-charcoal-2 rounded-[3px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]">
      {/* Banner */}
      <div
        className="h-[140px] flex items-center justify-center text-[56px] relative"
        style={{
          background: event.banner,
          borderTop: isHighlight ? "4px solid #D4A020" : undefined,
        }}
      >
        {event.emoji}
        <span
          className="absolute top-3 left-3 text-[9px] font-bold tracking-[2px] uppercase py-1 px-2.5"
          style={{
            background: isHighlight ? "#D4A020" : "#D4A020",
            color: "#1e1e1e",
          }}
        >
          {event.typeBadge}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">
        <div
          className="text-[11px] font-semibold tracking-[1px] text-amber mb-2 flex items-center gap-1.5"
          style={
            isHighlight
              ? { color: "#F0C84A", fontSize: "12px", fontWeight: 700 }
              : undefined
          }
        >
          {event.date}
        </div>
        <div
          className="font-serif text-[19px] font-bold text-white leading-[1.3] mb-2"
          style={isHighlight ? { fontSize: "22px" } : undefined}
        >
          {event.title}
        </div>
        <div className="text-xs text-white/[0.35] mb-4 flex items-center gap-1.5">
          {event.location}
        </div>
        <p className="text-[13px] text-white/[0.45] leading-[1.6] mb-4">
          {event.description}
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => onRegister(event.title)}
            className="bg-amber text-charcoal font-bold text-xs py-2 px-4 rounded-sm cursor-pointer border-none transition-all duration-200 hover:bg-amber-light"
          >
            {event.registerLabel}
          </button>
          <button className="border border-white/20 text-white/60 text-xs py-2 px-4 rounded-sm cursor-pointer bg-transparent transition-all duration-200 hover:border-amber hover:text-amber">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

function RegistrationModal({
  eventName,
  onClose,
}: {
  eventName: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-black/75 z-[500] flex items-center justify-center backdrop-blur-[4px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative">
        <div className="bg-[#1a1a1a] border border-amber/20 rounded-[6px] p-10 max-w-[520px] w-[90vw] max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-5 bg-transparent border-none text-white/50 text-2xl cursor-pointer hover:text-white"
          >
            &times;
          </button>
          <h2 className="font-serif text-[26px] text-white mb-1.5">
            Event Registration
          </h2>
          <p className="text-[13px] text-white/40 mb-7">{eventName}</p>

          <div className="mb-5">
            <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full py-3 px-4 bg-white/[0.06] border border-white/15 rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30"
            />
          </div>
          <div className="mb-5">
            <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full py-3 px-4 bg-white/[0.06] border border-white/15 rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30"
            />
          </div>
          <div className="mb-5">
            <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
              Mobile Number
            </label>
            <input
              type="text"
              placeholder="+63 ..."
              className="w-full py-3 px-4 bg-white/[0.06] border border-white/15 rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30"
            />
          </div>
          <div className="mb-5">
            <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
              Number of Attendees
            </label>
            <select className="w-full py-3 px-4 bg-white/[0.06] border border-white/15 rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber [&_option]:bg-[#222] [&_option]:text-white">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>
          <div className="mb-5">
            <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
              JRM Church / Location
            </label>
            <input
              type="text"
              placeholder="e.g. JRM Manila, JRM Dubai..."
              className="w-full py-3 px-4 bg-white/[0.06] border border-white/15 rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30"
            />
          </div>
          <div className="mb-5">
            <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
              Special Notes (optional)
            </label>
            <textarea
              placeholder="Any notes for the organizing team..."
              className="w-full py-3 px-4 bg-white/[0.06] border border-white/15 rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30 resize-y min-h-[80px]"
            />
          </div>
          <button
            onClick={onClose}
            className="btn-primary w-full justify-center"
          >
            &#10003; Confirm Registration
          </button>
        </div>
      </div>
    </div>
  );
}

function CalendarSection() {
  return (
    <div className="bg-charcoal-3 py-12 px-16 max-[900px]:py-10 max-[900px]:px-6">
      <span className="section-tag">Full Church Calendar</span>
      <h2 className="section-title text-white">
        Monthly <em>Calendar</em> View
      </h2>

      {/* Legend */}
      <div className="flex gap-4 flex-wrap mb-0">
        {calendarLegend.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-1.5 text-xs text-white/40"
          >
            <span
              className="inline-block w-3 h-3 rounded-sm"
              style={{ background: item.color }}
            />
            {item.label}
          </div>
        ))}
      </div>

      {/* Placeholder embed */}
      <div className="bg-white/[0.04] border border-amber/15 rounded mt-8 min-h-[500px] flex flex-col items-center justify-center gap-4">
        <div className="text-[56px]">{"\u{1F4C5}"}</div>
        <p className="text-sm text-white/40 text-center max-w-[320px] leading-[1.7]">
          Google Calendar will be embedded here — live-synced from the JRM
          events team. Add events to your own calendar with one click.
        </p>
        <button className="btn-outline mt-2">
          + Subscribe to JRM Calendar
        </button>
      </div>
    </div>
  );
}

/* ── Page Export ───────────────────────────────── */

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [modalEvent, setModalEvent] = useState<string | null>(null);

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((e) => e.type === activeFilter);

  return (
    <>
      <PageHero />

      {/* Events Grid with Filter */}
      <div className="content-section dark">
        {/* Filter buttons */}
        <div className="flex gap-2 flex-wrap my-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`py-2 px-[18px] rounded-[20px] text-xs font-semibold tracking-[0.5px] cursor-pointer transition-all duration-200 ${
                activeFilter === f.key
                  ? "bg-amber border-amber text-charcoal border"
                  : "bg-transparent border border-amber/30 text-white/60 hover:bg-amber hover:border-amber hover:text-charcoal"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-3 gap-5 mt-6 max-[900px]:grid-cols-1">
          {filteredEvents.map((evt) => (
            <EventCard
              key={evt.title}
              event={evt}
              onRegister={setModalEvent}
            />
          ))}
        </div>
      </div>

      <CalendarSection />

      {/* Registration Modal */}
      {modalEvent && (
        <RegistrationModal
          eventName={modalEvent}
          onClose={() => setModalEvent(null)}
        />
      )}
    </>
  );
}
