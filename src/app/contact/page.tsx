"use client";

import { useState, FormEvent } from "react";

/* ── Contact details data ──────────────────────── */
const contactDetails = [
  {
    icon: "📍",
    label: "Address",
    lines: ["811 J. Nakpil cor. P.H. Lim Sts.,", "Malate, Manila 1004, Philippines"],
  },
  {
    icon: "📞",
    label: "Phone",
    lines: ["(02) 4003819 / 254-7569", "P.O. Box 1167, Manila 1099"],
  },
  {
    icon: "📅",
    label: "Sunday Services",
    lines: ["8:00 AM · 10:30 AM · 1:00 PM"],
  },
  {
    icon: "📺",
    label: "Online",
    lines: ["YouTube & Facebook Live", "Every Sunday at 8:00 AM"],
  },
  {
    icon: "🚨",
    label: "CESA Rescue Hotline",
    lines: ["811 · Community Emergency & Soul Care"],
  },
];

const subjectOptions = [
  "General Inquiry",
  "Pastoral Services Request",
  "Event Registration",
  "Media / Press",
  "Partner Church",
];

/* shared Tailwind for dark form inputs */
const inputClass =
  "w-full py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 placeholder:text-white/30 focus:outline-none focus:border-amber";
const selectClass =
  "w-full py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber [&_option]:bg-[#222] [&_option]:text-white";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire up Resend / API route for email delivery
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Section 1: Page Hero ── */}
      <section className="bg-charcoal py-[72px] px-16 relative overflow-hidden max-[900px]:px-6">
        <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />
        <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
          We&apos;d Love to Meet You
        </div>
        <h1 className="font-serif text-page-hero-title font-black text-white leading-[1.05] tracking-tight mb-4">
          Contact &amp; <em className="italic text-amber-light">Visit Us</em>
        </h1>
        <p className="text-base text-white/[0.55] max-w-[560px] leading-[1.75]">
          Come worship with us at our Malate campus, or reach out through any
          channel below.
        </p>
      </section>

      {/* ── Section 2: Two-Column Layout ── */}
      <section className="content-section dark">
        <div className="grid grid-cols-[1fr_1.3fr] gap-16 max-[900px]:grid-cols-1">
          {/* ── Left Column: Location & Contact Details ── */}
          <div>
            <span className="section-tag">Find Us</span>
            <h2 className="section-title text-white !text-[30px]">
              Visit Our <em>Campus</em>
            </h2>

            {/* Contact detail rows */}
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="flex gap-4 mb-6 items-start"
              >
                {/* Icon box */}
                <div className="w-[42px] h-[42px] bg-amber/10 border border-amber/20 rounded-[3px] flex items-center justify-center text-lg flex-shrink-0">
                  {detail.icon}
                </div>
                {/* Text block */}
                <div>
                  <strong className="block text-[10px] font-semibold tracking-[1.5px] uppercase text-amber mb-1">
                    {detail.label}
                  </strong>
                  {detail.lines.map((line, i) => (
                    <p
                      key={i}
                      className="text-sm text-white/60 leading-[1.6]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            {/* TODO: Replace with Google Maps iframe embed
                Get embed code from Google Maps for:
                811 J. Nakpil cor. P.H. Lim Sts., Malate, Manila 1004 */}
            <div className="bg-charcoal-3 rounded min-h-[280px] flex flex-col items-center justify-center gap-3 border border-amber/[0.12] mt-6">
              <span className="text-[40px]">📍</span>
              <p className="text-xs text-white/[0.35] text-center">
                811 J. Nakpil cor. P.H. Lim Sts.
                <br />
                Malate, Manila 1004
              </p>
              <a
                href="https://maps.google.com/?q=811+J.+Nakpil+cor.+P.H.+Lim+Sts.,+Malate,+Manila+1004"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber text-charcoal font-bold text-xs py-[9px] px-5 no-underline rounded-sm"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* ── Right Column: Contact Form ── */}
          <div>
            <span className="section-tag">Get in Touch</span>
            <h2 className="section-title text-white !text-[30px]">
              Send Us a <em>Message</em>
            </h2>

            {submitted ? (
              <div className="bg-amber/10 border border-amber/25 rounded-[3px] p-8 text-center">
                <div className="text-[40px] mb-4">✉️</div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-sm text-white/[0.55] leading-[1.7] max-w-[380px] mx-auto">
                  Your message has been sent! Our team will get back to you
                  within 1–2 business days. God bless you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-6"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Your Name */}
                <div className="mb-5">
                  <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className={inputClass}
                    placeholder="Full name"
                  />
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className={inputClass}
                    placeholder="your@email.com"
                  />
                </div>

                {/* Contact Number */}
                <div className="mb-5">
                  <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className={inputClass}
                    placeholder="+63 ..."
                  />
                </div>

                {/* Subject */}
                <div className="mb-5">
                  <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
                    Subject
                  </label>
                  <select name="subject" className={selectClass}>
                    {subjectOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="mb-5">
                  <label className="block text-xs font-semibold tracking-[1px] uppercase text-amber mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className={`${inputClass} resize-y min-h-[140px]`}
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
