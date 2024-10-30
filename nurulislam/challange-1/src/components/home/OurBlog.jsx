import HomeSectionButton from "../common/HomeSectionButton";
import ButtonCustom from "../common/ButtonCustom";

function OurBlog() {
  return (
    <section className="container mx-auto">
      <HomeSectionButton
        title="Tech news"
        className="my-8 px-4"
        src="/sec3.png"
      />
      <h3 className="gradient-text text-[48px] text-center font-bold">
        Our Blog & News
      </h3>
      <p className="text-center mb-4">
        We share essential insights from the technology sector, AI, <br /> and
        the world of software development.
      </p>
      <div className="flex justify-between border  rounded-2xl bg-[#F5F5F5]">
        <div className="div w-[35%] p-6 pr-2">
          {" "}
          <h3 className="text-2xl font-bold mb-5">
            Unveiling the Art of Web Design: A Step-by-Step Guide
          </h3>
          <p>
            In the ever-evolving digital landscape, a visually appealing
            anduser-friendly website is crucial for success. Whether
            you&rsquo;re aseasoned designer or a novice looking to dip your toes
            into the world of web design, this step-by- step guide will help you
            create a stunning and effective…
          </p>
          <ButtonCustom title="Learn More" className="px-8 mt-4 mb-10" />
        </div>
        <div className="">
          <img src="/blog1.png" alt="" className="rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

export default OurBlog;
