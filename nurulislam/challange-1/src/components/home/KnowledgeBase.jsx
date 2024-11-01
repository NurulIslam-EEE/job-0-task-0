import React from "react";
import HomeSectionButton from "../common/HomeSectionButton";
import ButtonCustom from "../common/ButtonCustom";
import useTheme from "@/hooks/useTheme";

function KnowledgeBase() {
  const { light } = useTheme();
  return (
    <section className="container mx-auto mt-10">
      <HomeSectionButton
        title="Knowledge Base"
        src={!light ? "/sec2b.png" : "/sec2.png"}
        className="mb-9 px-6"
      />

      <h3
        className={`${
          light ? "gradient-text" : "gradient-white-text "
        } text-[48px] text-center font-bold`}
      >
        FAQ & Documentation
      </h3>
      <p className={`text-center text-2xl mb-6 ${!light && "text-[#737373]"}`}>
        FYTOBYTE LIMITED provides customers complete <br /> entry to <br />{" "}
        knowledge base API and documentation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 justify-items-center">
        <div
          className={` w-[330px] md:w-full overflow-hidden rounded-3xl ${
            !light && "border border-[#404040]"
          }`}
        >
          <img
            src="/knowledge1.png"
            alt=""
            className="hidden md:w-full md:block"
          />
          <img src="/knowledge-mb.png" alt="" className="w-full md:hidden" />
        </div>

        <div
          className={`w-[330px] md:w-full border pb-10 pt-6 px-10 rounded-3xl ${
            !light && "text-[#d4d4d4] border-[#404040]"
          }`}
        >
          <div>
            <img src="/knowledge2.png" alt="" className="mb-4" />
          </div>
          <h3 className="text-lg md:text-4xl font-bold mb-6">
            Full Api Access
          </h3>
          <p className={``}>
            Sign up and access our intuitive platform. Upload your data
            effortlessly, then customize preferences. Our robust tools analyze
            and generate insights promptly. Collaborate seamlessly with team
            members using integrated communication features. Watch your
            operations optimize as our app streamlines workflows and drives
            efficiency for your success.
          </p>
          <ButtonCustom title="Learn More" className="px-10 mt-4" />
        </div>
      </div>
    </section>
  );
}

export default KnowledgeBase;
