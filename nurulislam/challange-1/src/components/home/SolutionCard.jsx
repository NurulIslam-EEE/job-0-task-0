"use client";

import useTheme from "@/hooks/useTheme";

function SolutionCard({ title, title2, desc, src }) {
  const { light } = useTheme();
  return (
    <div
      className={`border w-fit rounded-3xl overflow-hidden ${
        !light && "border-[#404040]"
      }`}
    >
      <img src={src} alt="" className="w-full" />

      <div className="px-3 pt-2 pb-10">
        <h3 className="text-xl font-bold">{title}</h3>
        <h3 className="text-xl font-bold">{title2}</h3>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default SolutionCard;
