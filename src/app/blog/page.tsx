import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog & Devotionals | Jesus Reigns Ministries",
  description:
    "Pastoral reflections, devotionals, and ministry updates from the Jesus Reigns Ministries team. New content weekly.",
};

/* ═══════════════════════════════════════════════════
   BLOG PAGE — jesusreigns.com/blog
   ═══════════════════════════════════════════════════ */

const articles = [
  {
    category: "Devotional",
    title: "\u201CLearning to Be Still: A Reflection on Psalm 46:10\u201D",
    excerpt:
      "In the noise and rush of daily life, God\u2019s invitation to \u201Cbe still\u201D is both a command and a gift. Bishop Vincent reflects on what it means to truly rest in God\u2019s presence...",
    author: "Bishop Vincent Javier",
    date: "February 20, 2026",
    featured: true,
  },
  {
    category: "Ministry",
    title: "\u201CWhy DNG Changed My Life\u201D",
    excerpt:
      "A member shares how the DNG discipleship program transformed their walk with Jesus...",
    author: "JRM Member Story",
    date: "Feb 14, 2026",
  },
  {
    category: "Missions",
    title: "\u201CWhat We Saw in La Union\u201D",
    excerpt:
      "A field report from the JRM La Union outreach team \u2014 lives changed, a church planted...",
    author: "JRM Missions Team",
    date: "Feb 8, 2026",
  },
  {
    category: "Pastoral",
    title: "\u201CFirst Fruits: What Does God Really Ask of Us?\u201D",
    excerpt:
      "A theological reflection on giving, sacrifice, and what it means to put God first in every area of life...",
    author: "Bishop Vincent Javier",
    date: "Feb 2, 2026",
  },
  {
    category: "Devotional",
    title: "\u201CWhen Prayer Feels Like Silence\u201D",
    excerpt:
      "Honest reflections on seasons where God seems quiet \u2014 and why those moments matter most...",
    author: "Pastoral Team",
    date: "Jan 28, 2026",
  },
  {
    category: "Community",
    title: "\u201CServing Together: JRM\u2019s CESA Outreach\u201D",
    excerpt:
      "How JRM\u2019s CESA arm is responding to community needs across Malate and beyond...",
    author: "CESA Team",
    date: "Jan 20, 2026",
  },
];

/* ── Page Hero ────────────────────────────────── */
function PageHero() {
  return (
    <section className="bg-charcoal-2 py-[72px] px-16 relative overflow-hidden max-[900px]:px-6">
      <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber" />
      <div className="text-[10px] font-semibold tracking-[3px] uppercase text-amber mb-3.5">
        Blog &amp; Devotionals
      </div>
      <h1 className="font-serif text-page-hero-title text-white mb-4">
        Words for the <em className="italic text-amber-light">Journey</em>
      </h1>
      <p className="text-base text-white/[0.55] max-w-[560px] leading-[1.75]">
        Pastoral reflections, devotionals, and teachings to strengthen your
        faith between Sundays.
      </p>
    </section>
  );
}

/* ── Blog Grid ────────────────────────────────── */
function BlogGrid() {
  return (
    <section className="content-section dark max-[900px]:px-6">
      <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-[2px] mt-10 max-[900px]:grid-cols-1">
        {articles.map((a) => (
          <BlogCard key={a.title} {...a} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="btn-outline">Load More Articles</button>
      </div>
    </section>
  );
}

/* ── Page Export ────────────────────────────────── */
export default function BlogPage() {
  return (
    <>
      <PageHero />
      <BlogGrid />
    </>
  );
}
