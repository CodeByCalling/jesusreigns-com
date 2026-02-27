"use client";

import { useState, useEffect, type FormEvent } from "react";

/* ═══════════════════════════════════════════════════
   TESTIMONY WALL — jesusreigns.com/testimony
   ═══════════════════════════════════════════════════ */

/* ── Testimony Data ─────────────────────────────── */
const testimonies = [
  {
    text: "After 10 years of struggling with addiction, God broke every chain through the prayer and love of the JRM community. I am free.",
    author: "Michael A.",
    location: "JRM Manila",
  },
  {
    text: "We were told we could never have children. After three years of praying with JRM\u2019s intercession team, God gave us twins. To God be the glory!",
    author: "Theresa & Roy B.",
    location: "JRM Laguna",
  },
  {
    text: "I walked into JRM as a skeptic and walked out as a believer. One service, one message from Bishop Vincent \u2014 and my life was never the same.",
    author: "Nathan C.",
    location: "First-time visitor",
  },
  {
    text: "Watching JRM\u2019s live stream every Sunday from Dubai has kept my faith alive while I\u2019m away from family. This church truly has no borders.",
    author: "Liza F.",
    location: "JRM Dubai",
  },
  {
    text: "DNG changed how I read my Bible and how I pray. Three years later, I\u2019m now leading my own group of disciples. The program works.",
    author: "Carlo D.",
    location: "JRM Manila",
  },
  {
    text: "Our small church in La Union was struggling. After connecting with JRM and receiving their support, we grew from 15 to over 80 members in one year.",
    author: "Ptr. Noel M.",
    location: "JRM La Union",
  },
];

/* ── Page Hero ──────────────────────────────────── */
function PageHero() {
  return (
    <section className="bg-charcoal-2 py-[72px] px-16 relative overflow-hidden max-[900px]:px-6">
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />
      <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
        God&apos;s Faithfulness
      </div>
      <h1 className="font-serif text-page-hero-title text-white mb-4">
        Testimony <em className="italic text-amber-light">Wall</em>
      </h1>
      <p className="text-base text-white/[0.55] max-w-[560px] leading-[1.75]">
        Stories of God&apos;s grace, healing, provision, and transformation from
        our JRM family around the world.
      </p>
    </section>
  );
}

/* ── Testimony Card ─────────────────────────────── */
function TestimonyCard({
  text,
  author,
  location,
}: {
  text: string;
  author: string;
  location: string;
}) {
  return (
    <div className="bg-charcoal-3 p-7 rounded-[3px] border-t-[3px] border-t-amber">
      <div className="font-serif text-[36px] text-amber/30 leading-none mb-3">
        {"\u201C"}
      </div>
      <p className="text-sm text-white/60 leading-[1.8] italic mb-5">{text}</p>
      <div className="text-xs font-semibold text-amber">{author}</div>
      <div className="text-[11px] text-white/25">{location}</div>
    </div>
  );
}

/* ── Toast Notification ─────────────────────────── */
function Toast({
  message,
  visible,
  onClose,
}: {
  message: string;
  visible: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[600] bg-charcoal-3 border border-amber/30 text-white text-sm px-6 py-4 rounded-md shadow-lg animate-fadeIn max-w-[90vw]">
      {message}
    </div>
  );
}

/* ── Share Testimony Modal ──────────────────────── */
function TestimonyModal({
  open,
  onClose,
  onSubmitSuccess,
}: {
  open: boolean;
  onClose: () => void;
  onSubmitSuccess: () => void;
}) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [testimony, setTestimony] = useState("");
  const [permission, setPermission] = useState("public");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setName("");
    setLocation("");
    setTestimony("");
    setPermission("public");
    onClose();
    onSubmitSuccess();
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/75 z-[500] flex items-center justify-center backdrop-blur-[4px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative">
        <div className="bg-[#1a1a1a] border border-amber/20 rounded-md p-10 max-w-[520px] w-[90vw] max-h-[90vh] overflow-y-auto">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-5 bg-transparent border-none text-white/50 text-2xl cursor-pointer hover:text-white"
          >
            &times;
          </button>

          <h2 className="font-serif text-[26px] text-white mb-1.5">
            Share Your Testimony
          </h2>
          <p className="text-[13px] text-white/40 mb-7">
            Tell us what God has done in your life. Your story could inspire
            someone else.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-5">
              <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name or Anonymous"
                className="w-full py-3 px-4 bg-white/[0.06] border border-white/15 rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30"
              />
            </div>

            {/* Location */}
            <div className="mb-5">
              <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
                JRM Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. JRM Manila, JRM Dubai, Online..."
                className="w-full py-3 px-4 bg-white/[0.06] border border-white/15 rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30"
              />
            </div>

            {/* Testimony */}
            <div className="mb-5">
              <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
                Your Testimony
              </label>
              <textarea
                value={testimony}
                onChange={(e) => setTestimony(e.target.value)}
                placeholder="Share what God has done in your life..."
                required
                className="w-full py-3 px-4 bg-white/[0.06] border border-white/15 rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber placeholder:text-white/30 resize-y min-h-[160px]"
              />
            </div>

            {/* Permission */}
            <div className="mb-5">
              <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
                Permission
              </label>
              <select
                value={permission}
                onChange={(e) => setPermission(e.target.value)}
                className="w-full py-3 px-4 bg-white/[0.06] border border-white/15 rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber [&>option]:bg-[#222] [&>option]:text-white"
              >
                <option value="public">
                  Share publicly on the Testimony Wall
                </option>
                <option value="review">
                  Share with permission from our team first
                </option>
              </select>
            </div>

            {/* Submit */}
            <button type="submit" className="btn-primary w-full justify-center">
              Submit My Testimony ✨
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ── Page Export ─────────────────────────────────── */
export default function TestimonyPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  return (
    <>
      <PageHero />

      {/* Testimonies Grid Section */}
      <section className="content-section dark max-[900px]:px-6">
        {/* Header Row */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="section-tag">Community Stories</span>
            <h2 className="section-title text-white !mb-0">
              What God Has <em>Done</em>
            </h2>
          </div>
          <button
            type="button"
            className="btn-outline"
            onClick={() => setModalOpen(true)}
          >
            Share Your Testimony +
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-4 mt-10 max-[900px]:grid-cols-1">
          {testimonies.map((t) => (
            <TestimonyCard key={t.author} {...t} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <button type="button" className="btn-outline">
            Load More Testimonies
          </button>
        </div>
      </section>

      {/* Modal */}
      <TestimonyModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmitSuccess={() => setToastVisible(true)}
      />

      {/* Toast */}
      <Toast
        message="Thank you! Your testimony has been submitted for review."
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </>
  );
}
