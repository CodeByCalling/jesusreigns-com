"use client";

import { useState } from "react";

/* ═══════════════════════════════════════════════════
   GIVE PAGE — /give
   ═══════════════════════════════════════════════════ */

const frequencies = ["One-Time", "Weekly", "Monthly"] as const;

const amounts = [
  { label: "₱500", value: 500 },
  { label: "₱1,000", value: 1000 },
  { label: "₱2,000", value: 2000 },
  { label: "₱5,000", value: 5000 },
  { label: "₱10,000", value: 10000 },
  { label: "Custom", value: 0 },
];

const categories = [
  "Tithe / General Fund",
  "Missions & Outreach",
  "Building Fund",
  "DNG Scholarship",
  "CESA / Community Outreach",
];

const givingStats = [
  { num: "85", label: "Churches Supported" },
  { num: "55", label: "Active Missions" },
  { num: "40", label: "Years of Impact" },
  { num: "6+", label: "Global Regions" },
];

const otherWays = [
  { emoji: "🏦", text: "Bank Transfer: BDO / BPI / UnionBank" },
  { emoji: "📱", text: "GCash: Ask your local JRM pastor" },
  { emoji: "✉️", text: "Mail: P.O. Box 1167, Manila 1099" },
  { emoji: "🏛️", text: "In-Person: Sunday services, all schedules" },
];

function formatAmount(value: number): string {
  return `₱${value.toLocaleString()}`;
}

/* ── Page Hero ────────────────────────────────────── */
function PageHero() {
  return (
    <section className="bg-amber py-[72px] px-16 relative overflow-hidden max-[900px]:px-6">
      {/* Left charcoal bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-charcoal" />

      <div className="text-[10px] font-semibold tracking-[3px] uppercase text-[rgba(30,30,30,0.5)] mb-3.5">
        Partner With JRM
      </div>
      <h1 className="font-serif text-page-hero-title text-charcoal mb-4">
        Give and <em className="italic text-[#6b4a00]">Advance</em> the
        Kingdom
      </h1>
      <p className="text-[16px] text-[rgba(30,30,30,0.6)] max-w-[560px] leading-[1.75]">
        Your generosity fuels missions, plants churches, and raises the next
        generation of disciples across the Philippines and the world.
      </p>
    </section>
  );
}

/* ── Give Form (Left Column) ──────────────────────── */
function GiveForm({
  frequency,
  setFrequency,
  selectedAmount,
  setSelectedAmount,
  customAmount,
  setCustomAmount,
  submitted,
  onSubmit,
}: {
  frequency: string;
  setFrequency: (f: string) => void;
  selectedAmount: number;
  setSelectedAmount: (a: number) => void;
  customAmount: string;
  setCustomAmount: (a: string) => void;
  submitted: boolean;
  onSubmit: () => void;
}) {
  const displayAmount =
    selectedAmount === 0
      ? customAmount
        ? formatAmount(Number(customAmount))
        : "₱..."
      : formatAmount(selectedAmount);

  if (submitted) {
    return (
      <div className="bg-charcoal-3 p-10 rounded-[3px] border border-amber/20 text-center">
        <div className="text-[48px] mb-4">💛</div>
        <h3 className="font-serif text-[22px] text-white mb-4">
          Thank You for Your Generosity!
        </h3>
        <p className="text-sm text-white/50 leading-[1.8]">
          Your giving details have been received. Our team will follow up with
          payment instructions shortly.
        </p>
      </div>
    );
  }

  return (
    <div>
      <span className="section-tag">Online Giving</span>
      <h2 className="section-title text-white">
        Give <em>Securely</em> Online
      </h2>

      {/* Frequency toggle */}
      <div className="flex gap-2 mb-5">
        {frequencies.map((f) => (
          <button
            key={f}
            onClick={() => setFrequency(f)}
            className={`flex-1 py-2.5 px-2 border rounded-[3px] text-[13px] font-semibold cursor-pointer transition-all duration-200 ${
              frequency === f
                ? "border-amber text-amber bg-transparent"
                : "border-white/[0.15] text-white/50 bg-transparent hover:border-white/30"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Amount label */}
      <div className="mb-5">
        <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
          Select Amount
        </label>
      </div>

      {/* Amount grid */}
      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {amounts.map((a) => (
          <button
            key={a.label}
            onClick={() => setSelectedAmount(a.value)}
            className={`border rounded-[3px] font-serif text-lg font-bold py-[18px] px-2 cursor-pointer transition-all duration-200 text-center ${
              selectedAmount === a.value
                ? "bg-amber text-charcoal border-amber"
                : "bg-amber/[0.06] border-amber/30 text-amber-light hover:bg-amber hover:text-charcoal hover:border-amber"
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>

      {/* Custom amount input */}
      {selectedAmount === 0 && (
        <div className="mb-5">
          <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
            Enter Amount (₱)
          </label>
          <input
            type="number"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            placeholder="Enter custom amount"
            className="w-full py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30"
          />
        </div>
      )}

      {/* Giving category */}
      <div className="mb-5 mt-5">
        <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
          Giving Category
        </label>
        <select className="w-full py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber [&>option]:bg-[#222] [&>option]:text-white">
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Full Name */}
      <div className="mb-5">
        <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
          Full Name
        </label>
        <input
          type="text"
          placeholder="As it appears on your card"
          className="w-full py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30"
        />
      </div>

      {/* Email */}
      <div className="mb-5">
        <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
          Email
        </label>
        <input
          type="email"
          placeholder="For confirmation receipt"
          className="w-full py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30"
        />
      </div>

      {/* Payment methods box */}
      <div className="bg-amber/[0.06] border border-amber/[0.15] py-3.5 px-4 rounded-[3px] mb-5">
        <p className="text-xs text-white/40">
          💳 Accepted: GCash · Maya · Credit/Debit Card · Bank Transfer
        </p>
      </div>

      {/* Submit button */}
      <button
        onClick={onSubmit}
        className="w-full bg-amber text-charcoal font-bold text-[15px] py-4 rounded-[3px] cursor-pointer border-none transition-all duration-200 hover:bg-amber-light hover:-translate-y-px"
      >
        💛 Give {displayAmount} Now
      </button>
      <p className="text-[11px] text-white/20 mt-2.5 text-center">
        Secured by PayMongo &amp; Stripe · All transactions encrypted
      </p>
    </div>
  );
}

/* ── Why Give + Other Ways (Right Column) ─────────── */
function WhyGive() {
  return (
    <div>
      {/* Why Your Giving Matters */}
      <div className="bg-charcoal-3 p-8 border-l-4 border-l-amber">
        <h3 className="font-serif text-[22px] text-white mb-4">
          Why Your Giving Matters
        </h3>
        <p className="text-sm text-white/50 leading-[1.8]">
          Every peso given to JRM goes directly into ministry — reaching the
          lost, discipling the saved, and planting churches in unreached areas of
          the Philippines and the world.
        </p>
        <div className="grid grid-cols-2 gap-[2px] mt-6">
          {givingStats.map((s) => (
            <div key={s.label} className="bg-charcoal p-5">
              <div className="font-serif text-[28px] font-black text-amber">
                {s.num}
              </div>
              <div className="text-[11px] text-white/[0.35] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Ways to Give */}
      <div className="bg-charcoal-3 p-7 mt-[2px]">
        <h4 className="text-sm font-semibold text-white mb-3">
          Other Ways to Give
        </h4>
        <div className="text-[13px] text-white/[0.45] leading-[2.2]">
          {otherWays.map((w) => (
            <div key={w.emoji}>
              {w.emoji} {w.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Page Export ───────────────────────────────────── */
export default function GivePage() {
  const [frequency, setFrequency] = useState("One-Time");
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    // TODO Phase 3: Connect PayMongo checkout session here.
    // PayMongo merchant account must be set up at paymongo.com
    // before this button can process real payments.
    // For now, show a thank-you message on submit.
    setSubmitted(true);
  }

  return (
    <>
      <PageHero />
      <section className="content-section dark">
        <div className="grid grid-cols-[1.2fr_1fr] gap-12 items-start max-[900px]:grid-cols-1">
          <GiveForm
            frequency={frequency}
            setFrequency={setFrequency}
            selectedAmount={selectedAmount}
            setSelectedAmount={setSelectedAmount}
            customAmount={customAmount}
            setCustomAmount={setCustomAmount}
            submitted={submitted}
            onSubmit={handleSubmit}
          />
          <WhyGive />
        </div>
      </section>
    </>
  );
}
