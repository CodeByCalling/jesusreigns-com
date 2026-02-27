"use client";

import { useState } from "react";

/* ═══════════════════════════════════════════════════
   DNG PROGRAM PAGE — jesusreigns.com/dng
   Discipling the Next Generation
   ═══════════════════════════════════════════════════ */

/* ── Data ─────────────────────────────────────── */

const stages = [
  {
    num: "01",
    emoji: "\u{1F331}",
    title: "Believer",
    description:
      "The first stage \u2014 establishing the foundational truths of faith, salvation, and life in Christ.",
    badge: "Foundation",
    bg: "bg-charcoal-3",
    highlighted: false,
  },
  {
    num: "02",
    emoji: "\u{1F4D6}",
    title: "Disciple",
    description:
      "Going deeper \u2014 learning the disciplines of prayer, Scripture, worship, and community life.",
    badge: "Growth",
    bg: "bg-charcoal-2",
    highlighted: true,
  },
  {
    num: "03",
    emoji: "\u{1F451}",
    title: "Leader",
    description:
      "Raised up to lead others \u2014 equipped to mentor, serve, and multiply disciples in JRM and beyond.",
    badge: "Multiplication",
    bg: "bg-charcoal-3",
    highlighted: false,
  },
];

const experienceItems = [
  "Weekly sessions with a trained DNG leader",
  "In-depth study of God\u2019s Word",
  "Personal mentoring and accountability",
  "Community with fellow JRM members",
  "Certificate and graduation upon completion",
];

/* ── Components ───────────────────────────────── */

function PageHero() {
  return (
    <div className="relative bg-charcoal py-20 px-16 max-[900px]:px-6">
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />
      <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
        Discipleship
      </div>
      <h1 className="font-serif text-page-hero-title text-white mb-4">
        DNG &mdash; Discipling the{" "}
        <em className="italic text-amber-light">Next Generation</em>
      </h1>
      <p className="text-base text-white/[0.55] max-w-[560px] leading-[1.75]">
        The structured discipleship journey that has shaped thousands of JRM
        members into mature, committed followers of Jesus.
      </p>
    </div>
  );
}

function StagePathway() {
  return (
    <div className="content-section dark">
      <span className="section-tag">The Journey</span>
      <h2 className="section-title text-white">
        Three Stages of <em>Growth</em>
      </h2>

      {/* Desktop: 5-col grid with arrows */}
      <div
        className="hidden md:grid items-center mt-10"
        style={{ gridTemplateColumns: "1fr 60px 1fr 60px 1fr", gap: 0 }}
      >
        {stages.map((stage, i) => (
          <div key={stage.num} className="contents">
            {i > 0 && (
              <div className="text-center text-[28px] text-amber">
                &rarr;
              </div>
            )}
            <div
              className={`${stage.bg} p-9 text-center ${
                stage.highlighted
                  ? "border border-amber/20"
                  : ""
              }`}
            >
              <div className="font-serif text-[48px] font-black text-amber/[0.15] mb-2">
                {stage.num}
              </div>
              <div className="text-4xl mb-4">{stage.emoji}</div>
              <div className="font-serif text-[22px] font-bold text-white mb-2.5">
                {stage.title}
              </div>
              <div className="text-[13px] text-white/[0.45] leading-[1.7]">
                {stage.description}
              </div>
              <div className="mt-4 inline-block text-[10px] font-semibold tracking-[1.5px] uppercase text-amber border border-amber/30 py-[5px] px-3">
                {stage.badge}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: stacked vertically, no arrows */}
      <div className="md:hidden flex flex-col gap-[2px] mt-10">
        {stages.map((stage) => (
          <div
            key={stage.num}
            className={`${stage.bg} p-9 text-center ${
              stage.highlighted ? "border border-amber/20" : ""
            }`}
          >
            <div className="font-serif text-[48px] font-black text-amber/[0.15] mb-2">
              {stage.num}
            </div>
            <div className="text-4xl mb-4">{stage.emoji}</div>
            <div className="font-serif text-[22px] font-bold text-white mb-2.5">
              {stage.title}
            </div>
            <div className="text-[13px] text-white/[0.45] leading-[1.7]">
              {stage.description}
            </div>
            <div className="mt-4 inline-block text-[10px] font-semibold tracking-[1.5px] uppercase text-amber border border-amber/30 py-[5px] px-3">
              {stage.badge}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EnrollmentSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="content-section light !bg-offwhite">
      <div className="grid grid-cols-2 gap-12 items-start max-[900px]:grid-cols-1">
        {/* Left — Form */}
        <div>
          <span className="section-tag">Enroll Now</span>
          <h2 className="section-title text-charcoal">
            Start Your <em>Journey</em>
          </h2>
          <p className="text-[#666] leading-[1.8] mb-6">
            DNG runs in regular cycles throughout the year. Classes meet weekly
            and are guided by trained JRM leaders. Open to all JRM members and
            regular attendees.
          </p>

          {submitted ? (
            <div className="bg-charcoal border-l-4 border-amber p-8">
              <div className="text-2xl mb-3">{"\u2705"}</div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Enrollment Received!
              </h3>
              <p className="text-sm text-white/[0.55] leading-[1.7]">
                Our team will contact you within 2&ndash;3 days to confirm your
                DNG group assignment.
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-5">
                <label className="block text-xs font-semibold tracking-[1px] uppercase text-charcoal mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full py-3 px-4 bg-white border border-[#ddd] rounded-[3px] text-text font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-[#aaa]"
                />
              </div>
              <div className="mb-5">
                <label className="block text-xs font-semibold tracking-[1px] uppercase text-charcoal mb-2">
                  Contact Number
                </label>
                <input
                  type="text"
                  placeholder="+63 ..."
                  className="w-full py-3 px-4 bg-white border border-[#ddd] rounded-[3px] text-text font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-[#aaa]"
                />
              </div>
              <div className="mb-5">
                <label className="block text-xs font-semibold tracking-[1px] uppercase text-charcoal mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full py-3 px-4 bg-white border border-[#ddd] rounded-[3px] text-text font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-[#aaa]"
                />
              </div>
              <div className="mb-5">
                <label className="block text-xs font-semibold tracking-[1px] uppercase text-charcoal mb-2">
                  DNG Stage
                </label>
                <select className="w-full py-3 px-4 bg-white border border-[#ddd] rounded-[3px] text-text font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber [&_option]:bg-white [&_option]:text-text">
                  <option>Stage 1 &mdash; Believer (Starting Out)</option>
                  <option>Stage 2 &mdash; Disciple</option>
                  <option>Stage 3 &mdash; Leader</option>
                </select>
              </div>
              <div className="mb-5">
                <label className="block text-xs font-semibold tracking-[1px] uppercase text-charcoal mb-2">
                  Preferred Service Schedule
                </label>
                <select className="w-full py-3 px-4 bg-white border border-[#ddd] rounded-[3px] text-text font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber [&_option]:bg-white [&_option]:text-text">
                  <option>8:00 AM Service</option>
                  <option>10:30 AM Service</option>
                  <option>1:00 PM Service</option>
                </select>
              </div>
              <button
                onClick={() => setSubmitted(true)}
                className="btn-primary w-full justify-center"
              >
                Submit DNG Enrollment &rarr;
              </button>
            </div>
          )}
        </div>

        {/* Right — Info Panel */}
        <div>
          {/* What You'll Experience */}
          <div className="bg-charcoal p-9 border-l-4 border-amber">
            <h3 className="font-serif text-[22px] text-white mb-4">
              What You&apos;ll Experience
            </h3>
            <div className="flex flex-col gap-3.5">
              {experienceItems.map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="text-amber font-bold">{"\u2713"}</span>
                  <span className="text-sm text-white/[0.55]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact box */}
          <div className="mt-4 bg-charcoal-3 p-6 flex items-center gap-4">
            <span className="text-4xl">{"\u{1F4DE}"}</span>
            <div>
              <div className="text-[13px] font-semibold text-white mb-1">
                Questions about DNG?
              </div>
              <div className="text-xs text-white/[0.35]">
                Contact our discipleship team at (02) 4003819
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page Export ───────────────────────────────── */

export default function DngPage() {
  return (
    <>
      <PageHero />
      <StagePathway />
      <EnrollmentSection />
    </>
  );
}
