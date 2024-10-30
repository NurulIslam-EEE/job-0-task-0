import React from "react";

function HomeSectionButton({ title, className, src }) {
  return (
    <div
      className={`mx-auto flex items-center p-2 rounded-full bg-white border w-fit border-[#171717]  ${className}`}
    >
      <span className="inline-block text-[24px]"> {title}</span>

      <img src={src} alt="" className="inline-block w-[30px] ml-2" />
    </div>
  );
}

export default HomeSectionButton;
