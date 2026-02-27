// ================================================
// PROMPT 18 OF 18 — ACADEMY & COLLEGE
// This is the final page of the 18-page build.
//
// After this page is complete, the following
// next steps apply:
//
// IMMEDIATE:
// 1. Run `npm run dev` and verify all 18 pages render
// 2. Check all internal navigation links work
// 3. Fix any TypeScript or Tailwind errors
// 4. Run `npm run build` to confirm production build passes
//
// BEFORE PUSHING TO GITHUB:
// 5. Create a .env.local.example file listing all
//    environment variables needed (Supabase, PayMongo,
//    Resend, Sanity) with placeholder values
// 6. Confirm .env.local is in .gitignore
// 7. Update README.md with setup instructions
//
// PHASE 2 (Dubai Team):
// - Connect Supabase to all forms
// - Set up Sanity CMS studio
// - Wire up PayMongo on Give page
// - Replace Google Calendar placeholder with real embed
// - Replace Live Stream placeholder with real embed
// ================================================

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy & College | Jesus Reigns Ministries",
  description:
    "Jesus Reigns Christian Academy (JRCA) and Jesus Reigns Christian College (JRCC) — faith-based education in Manila under Dr. Ligaya Javier.",
};

/* ═══════════════════════════════════════════════════
   ACADEMY & COLLEGE PAGE — /academy
   ═══════════════════════════════════════════════════ */

const values = [
  {
    icon: "📖",
    title: "Bible-Based Curriculum",
    text: "Every subject is taught through the lens of Scripture, integrating faith with learning at every level.",
  },
  {
    icon: "🏛️",
    title: "Academic Excellence",
    text: "JRM schools meet and exceed national academic standards while maintaining a Christ-centered learning environment.",
  },
  {
    icon: "🌱",
    title: "Character Formation",
    text: "We develop not just students but disciples — young people of integrity, compassion, and godly character.",
  },
];

/* ── Page Hero ────────────────────────────────────── */
function PageHero() {
  return (
    <section className="bg-charcoal-2 py-[72px] px-16 relative overflow-hidden max-[900px]:px-6">
      {/* Left amber bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />

      <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
        Education
      </div>
      <h1 className="font-serif text-page-hero-title text-white mb-4">
        JRM <em className="italic text-amber-light">Education Institutions</em>
      </h1>
      <p className="text-[16px] text-white/[0.55] max-w-[560px] leading-[1.75]">
        Raising the next generation through faith-based, quality Christian
        education.
      </p>
    </section>
  );
}

/* ── School Cards ─────────────────────────────────── */
function SchoolCards() {
  return (
    <section className="content-section dark">
      <div className="grid grid-cols-2 gap-[2px] mt-10 max-[900px]:grid-cols-1">
        {/* JRCA — Academy */}
        {/* TODO Phase 3: Create dedicated /academy subpage
            with full curriculum, admission requirements,
            tuition info, and online inquiry form. */}
        <div className="bg-charcoal-2 p-12 flex flex-col gap-4 max-[900px]:p-6">
          <span className="section-tag">Primary &amp; Secondary</span>
          <h2 className="font-serif text-[28px] text-white">
            Jesus Reigns
            <br />
            Christian Academy
          </h2>
          <p className="text-sm text-white/50 leading-[1.8]">
            JRCA provides faith-based primary and secondary education under the
            leadership of Dr. Ligaya Javier. Academic excellence rooted in
            Christian values and the Word of God.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <div className="text-[13px] text-white/[0.35]">
              📍 Affiliated with JRM Manila
            </div>
            <div className="text-[13px] text-white/[0.35]">
              👩‍💼 Director: Dr. Ligaya Javier
            </div>
          </div>
          <Link href="/contact" className="btn-outline mt-4 self-start">
            Inquire About JRCA →
          </Link>
        </div>

        {/* JRCC — College */}
        {/* TODO Phase 3: Create dedicated /college subpage
            with programs offered, admission info,
            and online enrollment form. */}
        <div className="bg-charcoal-3 p-12 flex flex-col gap-4 max-[900px]:p-6">
          <span className="section-tag">Tertiary Education</span>
          <h2 className="font-serif text-[28px] text-white">
            Jesus Reigns
            <br />
            Christian College
          </h2>
          <p className="text-sm text-white/50 leading-[1.8]">
            JRCC offers tertiary-level education with a commitment to developing
            godly graduates who will serve the Lord in every sphere of society —
            business, government, arts, and ministry.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <div className="text-[13px] text-white/[0.35]">
              📍 Affiliated with JRM Manila
            </div>
            <div className="text-[13px] text-white/[0.35]">
              👩‍💼 Director: Dr. Ligaya Javier
            </div>
          </div>
          <Link href="/contact" className="btn-outline mt-4 self-start">
            Inquire About JRCC →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Why Christian Education ──────────────────────── */
function WhyChristianEducation() {
  return (
    <section className="bg-offwhite py-20 px-16 max-[900px]:px-6">
      <div className="max-w-[720px] mx-auto text-center">
        <span className="section-tag">Our Philosophy</span>
        <h2 className="section-title text-charcoal">
          Education Rooted in the <em>Word</em>
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-[2px] mt-10 max-w-[720px] mx-auto max-[900px]:grid-cols-1">
        {values.map((v) => (
          <div
            key={v.title}
            className="bg-charcoal p-8 text-center"
          >
            <div className="text-[32px] mb-3">{v.icon}</div>
            <h4 className="text-[15px] font-semibold text-white mb-2">
              {v.title}
            </h4>
            <p className="text-xs text-white/[0.45] leading-[1.7]">
              {v.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Inquiry CTA Strip ────────────────────────────── */
function InquiryCta() {
  return (
    <section className="bg-charcoal py-14 px-16 max-[900px]:px-6">
      <div className="flex items-center justify-center gap-6 flex-wrap text-center">
        <p className="text-[15px] text-white/60">
          Ready to enroll or learn more about JRM&apos;s education programs?
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link href="/contact" className="btn-primary">
            Contact Our Office →
          </Link>
          <Link href="/contact" className="btn-ghost">
            Visit Our Campus →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page Export ───────────────────────────────────── */
export default function AcademyPage() {
  return (
    <>
      <PageHero />
      <SchoolCards />
      <WhyChristianEducation />
      <InquiryCta />
    </>
  );
}
