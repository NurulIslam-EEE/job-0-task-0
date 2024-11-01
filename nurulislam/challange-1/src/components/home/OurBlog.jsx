"use client";
import HomeSectionButton from "../common/HomeSectionButton";
import ButtonCustom from "../common/ButtonCustom";
import useTheme from "@/hooks/useTheme";

function OurBlog() {
  const { light } = useTheme();
  return (
    <section className="container mx-auto px-4">
      <HomeSectionButton
        title="Tech news"
        className="my-8 px-6"
        src={!light ? "/sec3b.png" : "/sec3.png"}
      />
      <h3
        className={` ${
          light ? "gradient-text" : "gradient-white-text "
        }  text-[48px] text-center font-bold`}
      >
        Our Blog & News
      </h3>
      <p className={`text-center text-2xl mb-6 ${!light && "text-[#737373]"}`}>
        We share essential insights from the technology sector, AI, <br /> and
        the world of software development.
      </p>
      <div
        className={`flex justify-between border  rounded-2xl bg-[#F5F5F5] ${
          !light && "text-[#d4d4d4] bg-black border-[#404040]"
        } `}
      >
        <div className="div w-[50%] md:w-[35%] p-6 pr-2">
          {" "}
          <h3 className="text-2xl font-bold mb-5">
            Unveiling the Art of Web Design: A Step-by-Step Guide
          </h3>
          <p className="text-lg hidden md:block">
            In the ever-evolving digital landscape, a visually appealing
            anduser-friendly website is crucial for success. Whether
            you&rsquo;re aseasoned designer or a novice looking to dip your toes
            into the world of web design, this step-by- step guide will help you
            create a stunning and effective…
          </p>
          <p className="md:hidden">
            In the ever-evolving digital landscape, a visually appealing
            anduser-friendly websit…
          </p>
          <ButtonCustom title="Learn More" className="px-8 mt-4 mb-10" />
        </div>
        <div className="w-[50%] md:w-[65%]">
          <img
            src="/blog1.png"
            alt=""
            className="rounded-2xl hidden md:block"
          />
          <img src="/blog2.png" alt="" className="rounded-2xl md:hidden " />
        </div>
      </div>
    </section>
  );
}

export default OurBlog;
