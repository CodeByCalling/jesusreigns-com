import Link from "next/link";

const footerColumns = [
  {
    title: "Ministry",
    links: [
      { label: "About JRM", href: "/about" },
      { label: "Sunday Services", href: "/services" },
      { label: "DNG Program", href: "/dng" },
      { label: "Pastoral Services", href: "/pastoral" },
      { label: "Devotionals", href: "/blog" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "I'm New Here", href: "/new-here" },
      { label: "Prayer Wall", href: "/prayer-wall" },
      { label: "Testimonies", href: "/testimony" },
      { label: "Give Online", href: "/give" },
      { label: "Members Portal", href: "/members" },
    ],
  },
  {
    title: "Network",
    links: [
      { label: "Church Directory", href: "/directory" },
      { label: "International", href: "/international" },
      { label: "JRCA / JRCC", href: "/academy" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Visit Us", href: "/contact" },
    ],
    staticLines: [
      "811 J. Nakpil St.,\nMalate, Manila 1004",
      "(02) 4003819",
    ],
    extraLinks: [
      { label: "Watch Online", href: "/livestream" },
    ],
  },
];

const socialIcons = ["f", "▶", "📸", "𝕏", "🎵"];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] px-16 pt-[60px] pb-9 max-[900px]:px-6 max-[900px]:pt-10 max-[900px]:pb-6">
      {/* Top grid */}
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10 pb-12 border-b border-white/5 max-[900px]:grid-cols-1">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-[11px] mb-3">
            <div className="w-[38px] h-[38px] bg-amber rounded-[3px] flex items-center justify-center text-base">
              ✝
            </div>
            <div>
              <strong className="block font-serif text-[15px] text-white">
                Jesus Reigns Ministries
              </strong>
              <span className="text-[9px] tracking-[2px] text-amber uppercase">
                Est. 1986
              </span>
            </div>
          </div>
          <p className="text-[13px] text-white/[0.35] leading-[1.8] max-w-[240px] my-4">
            A caring church committed to win souls and make disciples. Where
            Jesus reigns, nations are transformed.
          </p>
          <div className="flex gap-2">
            {socialIcons.map((icon, i) => (
              <span
                key={i}
                className="w-[34px] h-[34px] bg-white/[0.06] rounded-[3px] flex items-center justify-center text-[13px] text-white/50 cursor-pointer transition-all duration-200 hover:bg-amber hover:text-charcoal"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="text-[10px] font-semibold tracking-[2px] uppercase text-amber mb-4">
              {col.title}
            </h4>
            <ul className="list-none flex flex-col gap-[9px]">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/[0.38] no-underline transition-colors duration-200 hover:text-amber-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {"staticLines" in col &&
                col.staticLines?.map((line, i) => (
                  <li
                    key={i}
                    className="text-[13px] text-white/[0.38] whitespace-pre-line"
                  >
                    {line}
                  </li>
                ))}
              {"extraLinks" in col &&
                col.extraLinks?.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/[0.38] no-underline transition-colors duration-200 hover:text-amber-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between pt-7 flex-wrap gap-3">
        <p className="text-[11px] text-white/20">
          © 2026 Jesus Reigns Ministries · All Rights Reserved
        </p>
        <span className="text-[11px] text-white/20">jesusreigns.com</span>
      </div>
    </footer>
  );
}
