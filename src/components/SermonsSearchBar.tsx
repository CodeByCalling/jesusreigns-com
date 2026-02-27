"use client";

export default function SermonsSearchBar() {
  return (
    <div className="flex gap-3 my-8 max-[900px]:flex-col">
      <input
        type="text"
        className="flex-1 w-full py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 placeholder:text-white/30 focus:outline-none focus:border-amber"
        placeholder="🔍 Search sermons by title, topic, or scripture..."
      />
      <select className="w-[180px] py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber [&_option]:bg-[#222] [&_option]:text-white max-[900px]:w-full">
        <option>All Series</option>
        <option>FIRST: First Fruits</option>
        <option>Talking to Jesus</option>
        <option>The Kingdom Life</option>
      </select>
      <select className="w-[160px] py-3 px-4 bg-white/[0.06] border border-white/[0.15] rounded-[3px] text-white font-sans text-sm transition-colors duration-200 focus:outline-none focus:border-amber [&_option]:bg-[#222] [&_option]:text-white max-[900px]:w-full">
        <option>All Speakers</option>
        <option>Bishop Vincent Javier</option>
        <option>Guest Speakers</option>
      </select>
    </div>
  );
}
