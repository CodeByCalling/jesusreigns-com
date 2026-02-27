"use client";

import { useState } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════
   RESOURCES PAGE — jesusreigns.com/resources
   ═══════════════════════════════════════════════════ */

/* ── Data ─────────────────────────────────────── */

type ResourceCategory =
  | "doctrine"
  | "discipleship"
  | "prayer"
  | "pastoral"
  | "worship";

interface Resource {
  icon: string;
  category: ResourceCategory;
  type: string;
  title: string;
  description: string;
  downloadLabel: string;
}

const resources: Resource[] = [
  {
    icon: "\u{1F4D6}",
    category: "doctrine",
    type: "PDF \u00B7 Doctrine",
    title: "JRM Statement of Faith",
    description:
      "The official doctrinal statement of Jesus Reigns Ministries \u2014 approved October 2024.",
    downloadLabel: "Download PDF",
  },
  {
    icon: "\u{1F4CB}",
    category: "discipleship",
    type: "PDF \u00B7 Discipleship",
    title: "DNG Stage 1 Study Guide",
    description:
      "The complete study guide for DNG Stage 1 \u2014 Believer. For personal or group use.",
    downloadLabel: "Download PDF",
  },
  {
    icon: "\u{1F64F}",
    category: "prayer",
    type: "PDF \u00B7 Prayer",
    title: "30-Day Prayer Guide",
    description:
      "A structured daily prayer guide for JRM members \u2014 covering personal, family, church, and national prayers.",
    downloadLabel: "Download PDF",
  },
  {
    icon: "\u{1F48D}",
    category: "pastoral",
    type: "Form \u00B7 Pastoral Service",
    title: "Wedding Application Form",
    description:
      "Official JRM wedding ceremony application. Submit at least 3 months before your desired wedding date.",
    downloadLabel: "Download Form",
  },
  {
    icon: "\u{1F37C}",
    category: "pastoral",
    type: "Form \u00B7 Pastoral Service",
    title: "Child Dedication Form",
    description:
      "Application form for child dedication ceremonies at JRM Manila.",
    downloadLabel: "Download Form",
  },
  {
    icon: "\u{1F4A7}",
    category: "pastoral",
    type: "Form \u00B7 Pastoral Service",
    title: "Water Baptism Registration",
    description:
      "Sign-up form for the next JRM water baptism schedule.",
    downloadLabel: "Download Form",
  },
];

type FilterKey =
  | "all"
  | "doctrine"
  | "discipleship"
  | "prayer"
  | "pastoral"
  | "worship";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Resources" },
  { key: "doctrine", label: "Doctrine" },
  { key: "discipleship", label: "Discipleship" },
  { key: "prayer", label: "Prayer" },
  { key: "pastoral", label: "Pastoral Forms" },
  { key: "worship", label: "Worship" },
];

/* ── Components ───────────────────────────────── */

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="bg-charcoal-3 p-7 flex flex-col gap-3 border border-white/[0.06] rounded-[3px] transition-all duration-200 hover:border-amber/30">
      <div className="text-[32px]">{resource.icon}</div>
      <div className="text-[9px] font-bold tracking-[2px] uppercase text-amber">
        {resource.type}
      </div>
      <div className="text-[15px] font-semibold text-white leading-[1.3]">
        {resource.title}
      </div>
      <div className="text-xs text-white/[0.35] leading-[1.6] flex-1">
        {resource.description}
      </div>
      <button
        // TODO: Replace href with actual file URL
        className="flex items-center gap-1.5 text-xs font-semibold text-amber cursor-pointer border-none bg-transparent p-0"
      >
        {"\u2B07"} {resource.downloadLabel}
      </button>
    </div>
  );
}

/* ── Page Export ───────────────────────────────── */

export default function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filtered =
    activeFilter === "all"
      ? resources
      : resources.filter((r) => r.category === activeFilter);

  return (
    <>
      {/* Page Hero */}
      <div className="relative bg-charcoal py-20 px-16 max-[900px]:px-6">
        <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />
        <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
          Downloads &amp; Materials
        </div>
        <h1 className="font-serif text-page-hero-title text-white mb-4">
          JRM <em className="italic text-amber-light">Resources</em>
        </h1>
        <p className="text-base text-white/[0.55] max-w-[560px] leading-[1.75]">
          Study guides, devotionals, ministry forms, and materials &mdash; all
          available for free download.
        </p>
      </div>

      {/* Resources Grid with Filter */}
      <div className="content-section dark">
        {/* Filter buttons */}
        <div className="flex gap-2 flex-wrap mb-0">
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
        <div className="grid grid-cols-3 gap-4 mt-10 max-[900px]:grid-cols-1">
          {filtered.map((r) => (
            <ResourceCard key={r.title} resource={r} />
          ))}
        </div>
      </div>

      {/* Request a Resource Banner */}
      <div className="bg-charcoal-2 py-20 px-16 text-center max-[900px]:px-6">
        <h2 className="font-serif text-[28px] font-bold text-white mb-3">
          Can&apos;t find what you&apos;re looking for?
        </h2>
        <p className="text-sm text-white/[0.45] mb-6 max-w-[400px] mx-auto leading-[1.7]">
          Contact our office and we&apos;ll help you find the right materials.
        </p>
        <Link href="/contact" className="btn-primary">
          Contact Us &rarr;
        </Link>
      </div>
    </>
  );
}
