export default function BlogCard({
  title,
  category,
  excerpt,
  author,
  date,
  featured = false,
}: {
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  featured?: boolean;
}) {
  return (
    <article className="bg-charcoal-3 p-8 cursor-pointer transition-all duration-200 hover:-translate-y-0.5">
      <span className="text-[9px] font-bold tracking-[2px] uppercase bg-amber/[0.15] text-amber py-1 px-2.5 rounded-sm inline-block mb-3.5">
        {category}
      </span>
      <div
        className={`font-serif font-bold text-white leading-[1.3] mb-2.5 ${
          featured ? "text-[26px]" : "text-xl"
        }`}
      >
        {title}
      </div>
      <p className="text-[13px] text-white/[0.45] leading-[1.7] mb-4">
        {excerpt}
      </p>
      <div className="text-[11px] text-white/[0.25]">
        {author} · {date}
      </div>
    </article>
  );
}
