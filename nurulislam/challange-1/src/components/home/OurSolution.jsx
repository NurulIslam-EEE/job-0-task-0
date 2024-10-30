import React from "react";
import HomeSectionButton from "../common/HomeSectionButton";
import SolutionCard from "./SolutionCard";

function OurSolution() {
  return (
    <section className="pt-52">
      <div className="container mx-auto">
        <HomeSectionButton
          title="Our Solution"
          src="/sec1.png"
          className={` px-6`}
        />
        <h3 className="text-[48px] text-center mt-5 font-[700]">
          {" "}
          <span className="gradient-text"> Streamlining operations,</span>{" "}
          <br />
          <span className="gradient-text"> unleashing seamless digital </span>
          <br />
          <span className="gradient-text"> solutions</span>
        </h3>{" "}
        <p className="text-center">
          Innovative solutions for seamless digital transformation.
        </p>
        <div className="grid grid-cols-2 gap-9 mt-6">
          <SolutionCard
            src="/solution1.png"
            title="FYTOBYTE LIMITED "
            title2="Solution"
            desc=" A collaborative platform connecting businesses and users in a unified,
          innovative ecosystem for streamlined interaction."
          />
          <SolutionCard
            src="/solution2.png"
            title="FYTOBYTE LIMITED "
            title2="SInnovate"
            desc=" A collaborative platform connecting businesses and users in a unified,
          innovative ecosystem for streamlined interaction."
          />
          <SolutionCard
            src="/solution3.png"
            title="FYTOBYTE LIMITED "
            title2="Connect"
            desc=" A collaborative platform connecting businesses and users in a unified,
          innovative ecosystem for streamlined interaction."
          />
          <SolutionCard
            src="/solution4.png"
            title="FYTOBYTE LIMITED "
            title2="Sphere"
            desc=" A collaborative platform connecting businesses and users in a unified,
          innovative ecosystem for streamlined interaction."
          />
        </div>
      </div>
    </section>
  );
}

export default OurSolution;
