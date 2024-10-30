"use client";

import useTheme from "@/hooks/useTheme";

function HomeSectionButton({ title, className, src }) {
  const { light } = useTheme();
  return (
    <div
      className={`mx-auto flex items-center p-2 rounded-full border w-fit ${
        !light
          ? "border-[#404040] text-[#d4d4d4]"
          : "border-[#171717] bg-white "
      }   ${className}`}
    >
      <span className="inline-block text-[24px]"> {title}</span>

      <img src={src} alt="" className="inline-block w-[30px] ml-2" />
    </div>
  );
}

export default HomeSectionButton;
