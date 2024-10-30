import React from "react";

function SolutionCard({ title, title2, desc, src }) {
  return (
    <div className="border w-fit rounded-3xl overflow-hidden">
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
