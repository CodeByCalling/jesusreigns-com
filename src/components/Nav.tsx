"use client";

import { useState } from "react";
import Link from "next/link";

/* ── Dropdown data ─────────────────────────────── */
const connectItems = [
  { emoji: "👋", label: "I'm New Here", href: "/new-here" },
  { emoji: "📖", label: "DNG Program", href: "/dng" },
  { emoji: "🙏", label: "Prayer Wall", href: "/prayer-wall" },
  { emoji: "✨", label: "Testimony Wall", href: "/testimony" },
  { divider: true } as const,
  { emoji: "💍", label: "Pastoral Services", href: "/pastoral" },
];

const moreItems = [
  { emoji: "📺", label: "Live Stream", href: "/livestream" },
  { emoji: "📝", label: "Blog & Devotionals", href: "/blog" },
  { emoji: "📦", label: "Resources", href: "/resources" },
  { divider: true } as const,
  { emoji: "⛪", label: "Church Directory", href: "/directory" },
  { emoji: "🌍", label: "International", href: "/international" },
  { emoji: "🎓", label: "Academy & College", href: "/academy" },
  { divider: true } as const,
  { emoji: "🔐", label: "Members Portal", href: "/members" },
];

const mobileMenuSections = [
  {
    label: "Main",
    items: [
      { emoji: "🏠", label: "Home", href: "/" },
      { emoji: "ℹ️", label: "About JRM", href: "/about" },
      { emoji: "👋", label: "I'm New Here", href: "/new-here" },
      { emoji: "📅", label: "Services", href: "/services" },
      { emoji: "📺", label: "Live Stream", href: "/livestream" },
      { emoji: "🗓️", label: "Events", href: "/events" },
      { emoji: "🎙️", label: "Sermons", href: "/sermons" },
    ],
  },
  {
    label: "Connect",
    items: [
      { emoji: "🙏", label: "Prayer Wall", href: "/prayer-wall" },
      { emoji: "📖", label: "DNG Program", href: "/dng" },
      { emoji: "✨", label: "Testimony Wall", href: "/testimony" },
      { emoji: "💍", label: "Pastoral Services", href: "/pastoral" },
    ],
  },
  {
    label: "Resources",
    items: [
      { emoji: "📝", label: "Blog & Devotionals", href: "/blog" },
      { emoji: "📦", label: "Downloads", href: "/resources" },
    ],
  },
  {
    label: "Network",
    items: [
      { emoji: "⛪", label: "Church Directory", href: "/directory" },
      { emoji: "🌍", label: "International", href: "/international" },
      { emoji: "🎓", label: "Academy & College", href: "/academy" },
    ],
  },
  {
    label: "Account",
    items: [
      { emoji: "💛", label: "Give", href: "/give", highlight: true },
      { emoji: "🔐", label: "Members Portal", href: "/members" },
      { emoji: "📍", label: "Contact & Visit", href: "/contact" },
    ],
  },
];

/* ── Dropdown component ────────────────────────── */
function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly (
    | { emoji: string; label: string; href: string; divider?: undefined }
    | { divider: true }
  )[];
}) {
  return (
    <div className="relative group">
      <button className="text-white/[0.72] text-[13px] font-medium py-2 px-[13px] rounded-[3px] cursor-pointer transition-all duration-200 bg-transparent border-none hover:text-amber-light hover:bg-amber/[0.08]">
        {label} ▾
      </button>
      <div className="hidden group-hover:block absolute top-[calc(100%+8px)] left-0 bg-[#111] border border-amber/20 rounded min-w-[220px] py-2 shadow-[0_16px_48px_rgba(0,0,0,0.5)] z-50">
        {items.map((item, i) =>
          "divider" in item && item.divider ? (
            <hr
              key={`divider-${i}`}
              className="border-none border-t border-t-white/[0.07] my-1"
            />
          ) : "href" in item ? (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2.5 px-[18px] text-white/70 text-[13px] font-medium cursor-pointer transition-all duration-150 no-underline hover:text-amber-light hover:bg-amber/[0.08] hover:pl-[22px]"
            >
              {item.emoji} {item.label}
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
}

/* ── Nav component ─────────────────────────────── */
export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] h-nav flex items-center justify-between px-10 bg-[rgba(14,14,14,0.97)] backdrop-blur-[16px] border-b border-amber/[0.18] max-[900px]:px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[11px] no-underline">
          <div className="w-10 h-10 bg-amber rounded-[3px] flex items-center justify-center text-lg flex-shrink-0">
            ✝
          </div>
          <div>
            <strong className="block font-serif text-[15px] font-bold text-white leading-[1.1]">
              Jesus Reigns
            </strong>
            <span className="block text-[9px] font-semibold tracking-[2.5px] text-amber uppercase">
              Ministries
            </span>
          </div>
        </Link>

        {/* Center nav links (hidden on mobile) */}
        <div className="hidden min-[901px]:flex items-center gap-1">
          <Link
            href="/about"
            className="text-white/[0.72] no-underline text-[13px] font-medium py-2 px-[13px] rounded-[3px] cursor-pointer transition-all duration-200 hover:text-amber-light hover:bg-amber/[0.08]"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-white/[0.72] no-underline text-[13px] font-medium py-2 px-[13px] rounded-[3px] cursor-pointer transition-all duration-200 hover:text-amber-light hover:bg-amber/[0.08]"
          >
            Services
          </Link>
          <Link
            href="/events"
            className="text-white/[0.72] no-underline text-[13px] font-medium py-2 px-[13px] rounded-[3px] cursor-pointer transition-all duration-200 hover:text-amber-light hover:bg-amber/[0.08]"
          >
            Events
          </Link>
          <Link
            href="/sermons"
            className="text-white/[0.72] no-underline text-[13px] font-medium py-2 px-[13px] rounded-[3px] cursor-pointer transition-all duration-200 hover:text-amber-light hover:bg-amber/[0.08]"
          >
            Sermons
          </Link>
          <NavDropdown label="Connect" items={connectItems} />
          <NavDropdown label="More" items={moreItems} />
          <Link
            href="/contact"
            className="text-white/[0.72] no-underline text-[13px] font-medium py-2 px-[13px] rounded-[3px] cursor-pointer transition-all duration-200 hover:text-amber-light hover:bg-amber/[0.08]"
          >
            Visit Us
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/give"
            className="text-amber no-underline text-[13px] font-medium py-2 px-[13px] rounded-[3px] cursor-pointer transition-all duration-200 hover:text-amber-light hover:bg-amber/[0.08]"
          >
            Give
          </Link>
          <Link
            href="/new-here"
            className="hidden min-[901px]:block bg-amber text-charcoal font-bold text-[13px] py-[9px] px-5 rounded-[3px] cursor-pointer border-none transition-all duration-200 whitespace-nowrap no-underline hover:bg-amber-light"
          >
            I&apos;m New Here
          </Link>
          <button
            className="hidden max-[900px]:block bg-transparent border-none text-white text-[22px] cursor-pointer p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-nav bg-[#0d0d0d] z-[150] overflow-y-auto p-5 min-[901px]:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        {mobileMenuSections.map((section) => (
          <div key={section.label}>
            <div className="py-3.5 px-5 pt-3.5 pb-1.5 text-[10px] font-semibold tracking-[2px] uppercase text-amber/50">
              {section.label}
            </div>
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-3.5 px-5 text-[15px] font-medium border-b border-white/[0.06] no-underline hover:text-amber ${
                  "highlight" in item && item.highlight
                    ? "text-amber font-bold"
                    : "text-white/70"
                }`}
              >
                {item.emoji} {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
