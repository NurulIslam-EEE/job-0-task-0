import React from "react";
import HomeSectionButton from "../common/HomeSectionButton";
import ButtonCustom from "../common/ButtonCustom";

function KnowledgeBase() {
  return (
    <section className="container mx-auto mt-10">
      <HomeSectionButton
        title="Knowledge Base"
        src="sec2.png"
        className="mb-9"
      />

      <h3 className="gradient-text text-[48px] text-center font-bold">
        FAQ & Documentation
      </h3>
      <p className="text-center mb-4">
        FYTOBYTE LIMITED provides customers complete <br /> entry to <br />{" "}
        knowledge base API and documentation.
      </p>

      <div className="grid grid-cols-2 gap-9">
        <div className="w-full overflow-hidden rounded-3xl">
          <img src="/knowledge1.png" alt="" className="w-full" />
        </div>

        <div className="border pb-10 pt-6 px-10 rounded-3xl">
          <div>
            <img src="/knowledge2.png" alt="" className="mb-4" />
          </div>
          <h3 className="text-4xl font-bold mb-6">Full Api Access</h3>
          <p>
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
