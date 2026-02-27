"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════
   CHURCH DIRECTORY — jesusreigns.com/directory
   ═══════════════════════════════════════════════════ */

/* ── Data ────────────────────────────────────────── */
// PROMPT 15 — Church Directory
// TODO Phase 2: Move church data to Sanity CMS
// so Manila team can manage entries without code.
// Schema: ChurchDirectory content type in /studio

interface Church {
  name: string;
  pastor: string;
  location: string;
  type: string;
  region: string;
  isMission?: boolean;
}

const churches: Church[] = [
  {
    name: "JRM Manila (Main Campus)",
    pastor: "Bishop Vincent Javier",
    location: "811 J. Nakpil St., Malate, Manila",
    type: "Mother Church",
    region: "NCR",
  },
  {
    name: "JRM Laguna",
    pastor: "Ptr. [Name]",
    location: "Santa Rosa, Laguna",
    type: "Class A",
    region: "Luzon",
  },
  {
    name: "JRM La Union",
    pastor: "Ptr. [Name]",
    location: "San Fernando, La Union",
    type: "Class B",
    region: "Luzon",
  },
  {
    name: "JRM Cebu",
    pastor: "Ptr. [Name]",
    location: "Cebu City, Cebu",
    type: "Class A",
    region: "Visayas",
  },
  {
    name: "JRM Davao",
    pastor: "Ptr. [Name]",
    location: "Davao City, Davao del Sur",
    type: "Class B",
    region: "Mindanao",
  },
  {
    name: "JRM Baguio",
    pastor: "Ptr. [Name]",
    location: "Baguio City, Benguet",
    type: "Class C",
    region: "Luzon",
  },
];

const missions: Church[] = [
  {
    name: "JRM [Province] Mission",
    pastor: "Ptr. [Name]",
    location: "Location, Province",
    type: "Ongoing Mission",
    isMission: true,
    region: "Luzon",
  },
  {
    name: "JRM [Province] Mission",
    pastor: "Ptr. [Name]",
    location: "Location, Province",
    type: "Ongoing Mission",
    isMission: true,
    region: "Visayas",
  },
];

const allEntries = [...churches, ...missions];

const regionTabs = [
  { label: "All (85 + 55)", value: "All" },
  { label: "NCR", value: "NCR" },
  { label: "Luzon", value: "Luzon" },
  { label: "Visayas", value: "Visayas" },
  { label: "Mindanao", value: "Mindanao" },
];

const typeOptions = [
  "All Types",
  "Class A (Mother Church)",
  "Class B (Self-liquidating)",
  "Class C (Newly Declared)",
  "Ongoing Mission",
];

/* maps select value → matching type strings */
const typeMap: Record<string, string[]> = {
  "All Types": [],
  "Class A (Mother Church)": ["Class A", "Mother Church"],
  "Class B (Self-liquidating)": ["Class B"],
  "Class C (Newly Declared)": ["Class C"],
  "Ongoing Mission": ["Ongoing Mission"],
};

/* ── Page Hero ──────────────────────────────────── */
function PageHero() {
  return (
    <section className="bg-charcoal py-[72px] px-16 relative overflow-hidden max-[900px]:px-6">
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />
      <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
        Our Network
      </div>
      <h1 className="font-serif text-page-hero-title text-white mb-4">
        JRM Church <em className="italic text-amber-light">Directory</em>
      </h1>
      <p className="text-base text-white/[0.55] max-w-[560px] leading-[1.75]">
        85 provincial churches and 55 ongoing missions across the Philippines
        &mdash; find a JRM church near you.
      </p>
    </section>
  );
}

/* ── Church Card ────────────────────────────────── */
function ChurchCard({
  name,
  pastor,
  location,
  type,
  isMission,
}: {
  name: string;
  pastor: string;
  location: string;
  type: string;
  isMission?: boolean;
}) {
  return (
    <div
      className={`p-6 ${
        isMission ? "bg-black/20" : "bg-charcoal-3"
      }`}
    >
      {isMission && (
        <div className="text-[11px] font-semibold tracking-[1.5px] uppercase text-amber/50 mb-2">
          Ongoing Mission
        </div>
      )}
      <div className="text-[15px] font-bold text-white mb-1">{name}</div>
      <div className="text-xs text-amber mb-2">{pastor}</div>
      <div className="text-xs text-white/35 flex items-center gap-1.5">
        📍 {location}
      </div>
      <span
        className={`inline-block mt-2.5 text-[9px] font-bold tracking-[1.5px] uppercase py-[3px] px-2 rounded-[2px] ${
          isMission
            ? "bg-white/5 text-white/30"
            : "bg-amber/10 text-amber"
        }`}
      >
        {isMission ? "Bible Study / Sunday Service" : type}
      </span>
    </div>
  );
}

/* ── Page Export ─────────────────────────────────── */
export default function DirectoryPage() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const filtered = useMemo(() => {
    return allEntries.filter((c) => {
      /* region */
      if (region !== "All" && c.region !== region) return false;

      /* type */
      if (typeFilter !== "All Types") {
        const matches = typeMap[typeFilter] || [];
        if (!matches.includes(c.type)) return false;
      }

      /* search */
      if (search.trim()) {
        const q = search.toLowerCase();
        const haystack = `${c.name} ${c.pastor} ${c.location}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      return true;
    });
  }, [search, region, typeFilter]);

  function handleTabClick(value: string) {
    setRegion(value);
  }

  /* map region tab value → select option label */
  function regionSelectValue() {
    if (region === "All") return "All Regions";
    if (region === "NCR") return "NCR / Metro Manila";
    return region;
  }

  function handleRegionSelect(val: string) {
    if (val === "All Regions") setRegion("All");
    else if (val === "NCR / Metro Manila") setRegion("NCR");
    else setRegion(val);
  }

  return (
    <>
      <PageHero />

      {/* Directory Section */}
      <section className="content-section dark max-[900px]:px-6">
        {/* Search + Filter Bar */}
        <div className="flex items-center gap-4 flex-wrap mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Search by city, province, or pastor name..."
            className="flex-1 min-w-[200px] py-3 px-4 bg-white/[0.06] border border-white/15 rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30"
          />
          <select
            value={regionSelectValue()}
            onChange={(e) => handleRegionSelect(e.target.value)}
            className="w-[180px] py-3 px-4 bg-white/[0.06] border border-white/15 rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber [&>option]:bg-[#222] [&>option]:text-white"
          >
            <option>All Regions</option>
            <option>NCR / Metro Manila</option>
            <option>Luzon</option>
            <option>Visayas</option>
            <option>Mindanao</option>
          </select>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-[160px] py-3 px-4 bg-white/[0.06] border border-white/15 rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber [&>option]:bg-[#222] [&>option]:text-white"
          >
            {typeOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Region Tabs */}
        <div className="flex gap-1.5 flex-wrap mb-8">
          {regionTabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => handleTabClick(tab.value)}
              className={`py-2 px-4 border text-xs font-semibold rounded-[20px] cursor-pointer transition-all duration-200 ${
                region === tab.value
                  ? "bg-amber border-amber text-charcoal"
                  : "bg-transparent border-amber/25 text-white/50 hover:bg-amber hover:border-amber hover:text-charcoal"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Church Cards Grid */}
        <div className="grid grid-cols-3 gap-0.5 max-[900px]:grid-cols-1">
          {filtered.map((c, i) => (
            <ChurchCard key={`${c.name}-${c.region}-${i}`} {...c} />
          ))}

          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-12 text-white/30 text-sm">
              No churches found matching your search.
            </div>
          )}
        </div>

        {/* Placeholder Notice */}
        <div className="text-center mt-8 p-5 bg-amber/5 border border-amber/[0.12] rounded-[3px]">
          <p className="text-[13px] text-white/35">
            Full directory with 85 churches + 55 missions will be populated by
            the Manila content team. The data structure above is ready &mdash;
            just add entries to the churches and missions arrays.
          </p>
        </div>
      </section>

      {/* Add a Church CTA */}
      <section className="bg-charcoal-2 py-16 px-16 text-center max-[900px]:px-6">
        <p className="text-white text-lg font-semibold mb-2">
          Is your JRM church missing from the directory?
        </p>
        <p className="text-white/40 text-sm mb-6">
          Contact the Manila office to have your church listed.
        </p>
        <Link href="/contact" className="btn-primary">
          Contact Manila Office →
        </Link>
      </section>
    </>
  );
}
