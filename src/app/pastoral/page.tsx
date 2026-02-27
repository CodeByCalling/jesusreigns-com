import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pastoral Services | Jesus Reigns Ministries",
  description:
    "JRM pastors are available for weddings, child dedications, baptism, funerals, house blessings, and pastoral care. Request a service today.",
};

/* ═══════════════════════════════════════════════════
   PASTORAL SERVICES — jesusreigns.com/pastoral
   ═══════════════════════════════════════════════════ */

/* ── Pastoral Card ────────────────────────────── */
function PastoralCard({
  emoji,
  title,
  description,
  actionLabel,
  actionHref,
}: {
  emoji: string;
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}) {
  return (
    <div className="bg-white p-9 border-b-4 border-b-transparent transition-all duration-300 cursor-pointer hover:border-b-amber hover:-translate-y-0.5 hover:shadow-lg flex flex-col">
      <span className="text-[40px] block mb-[18px]">{emoji}</span>
      <h3 className="font-serif text-[21px] font-bold text-charcoal mb-2.5">
        {title}
      </h3>
      <p className="text-sm text-[#666] leading-[1.7] mb-5 flex-grow">
        {description}
      </p>
      <Link
        href={actionHref}
        className="text-[13px] font-semibold text-amber flex items-center gap-1.5 no-underline"
      >
        {actionLabel} →
      </Link>
    </div>
  );
}

/* ── Data ─────────────────────────────────────── */
const services = [
  {
    emoji: "💍",
    title: "Weddings",
    description:
      "JRM pastors will be honored to officiate your wedding ceremony. We provide pastoral guidance, pre-marital counseling, and full ceremony coordination.",
    actionLabel: "Download Application Form",
    actionHref: "/resources",
  },
  {
    emoji: "🍼",
    title: "Child Dedication",
    description:
      "Dedicate your child to the Lord in a formal ceremony before the JRM congregation. A sacred milestone for your growing family.",
    actionLabel: "Download Application Form",
    actionHref: "/resources",
  },
  {
    emoji: "🕊️",
    title: "Funeral Services",
    description:
      "JRM walks with you through grief. Our pastors provide compassionate funeral officiation and bereavement support for your family.",
    actionLabel: "Contact a Pastor",
    actionHref: "/contact",
  },
  {
    emoji: "💧",
    title: "Water Baptism",
    description:
      "Take your public stand of faith through water baptism. JRM schedules regular baptism Sundays throughout the year.",
    actionLabel: "Download Registration",
    actionHref: "/resources",
  },
  {
    emoji: "🏠",
    title: "House / Car / Business Blessing",
    description:
      "Invite God\u2019s presence into your new home, vehicle, or business. Our pastors are available for blessing services upon request.",
    actionLabel: "Request a Blessing",
    actionHref: "/contact",
  },
  {
    emoji: "🏥",
    title: "Hospital & Soul Care",
    description:
      "Our pastoral care team visits the sick and provides prayer, counseling, and soul care for those in need. No one goes through difficulty alone in JRM.",
    actionLabel: "Request a Visit",
    actionHref: "/contact",
  },
];

/* ── Page Hero ────────────────────────────────── */
function PageHero() {
  return (
    <section className="bg-offwhite py-[72px] px-16 relative overflow-hidden max-[900px]:px-6">
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />
      <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
        How We Serve You
      </div>
      <h1 className="font-serif text-page-hero-title text-charcoal mb-4">
        Pastoral <em className="italic text-amber">Services</em>
      </h1>
      <p className="text-base text-[#666] max-w-[560px] leading-[1.75]">
        JRM pastors are available for life&apos;s most important milestones.
        Request a pastoral service below.
      </p>
    </section>
  );
}

/* ── Services Grid ────────────────────────────── */
function ServicesGrid() {
  return (
    <section className="content-section white max-[900px]:px-6">
      <div className="grid grid-cols-3 gap-4 mt-10 max-[900px]:grid-cols-1">
        {services.map((s) => (
          <PastoralCard key={s.title} {...s} />
        ))}
      </div>

      {/* Contact bar */}
      <div className="text-center mt-12 p-8 bg-charcoal rounded">
        <div className="text-[13px] text-white/40 mb-2">
          For all pastoral service inquiries, contact us at:
        </div>
        <div className="text-lg font-bold text-amber">
          (02) 4003819 / 254-7569
        </div>
        <div className="text-xs text-white/[0.25] mt-1.5">
          811 J. Nakpil cor. P.H. Lim Sts., Malate, Manila 1004
        </div>
      </div>
    </section>
  );
}

/* ── Page Export ────────────────────────────────── */
export default function PastoralPage() {
  return (
    <>
      <PageHero />
      <ServicesGrid />
    </>
  );
}
