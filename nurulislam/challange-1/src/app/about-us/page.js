import React from "react";

function AboutUs() {
  return (
    <section className={`container mx-auto`}>
      <h3 className="text-7xl font-bold text-center mt-8 mb-4">About Us</h3>
      <p className="text-center my-4">
        Watch your operations optimize as our apps streamline workflows and
        drives <br /> efficiency for your success.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <img src="/office1.jpeg" alt="" className="rounded-xl" />
          <div className="border rounded-xl p-6 mt-6 bg-[#F5F5F5]">
            <img src="/vec2.png" alt="" className="mb-3" />
            <h3 className="mb-3">Mission</h3>
            <p>
              At FYTOBYTE LIMITED, our mission is to revolutionize the business
              landscape by delivering innovative SaaS solutions that empower
              growth and efficiency. We strive to create seamless, user-centric
              software that simplifies complex processes, enabling businesses to
              thrive in a rapidly evolving digital world. With a commitment to
              excellence and technological advancement, we aim to be the driving
              force behind our clients success and transformation.
            </p>
          </div>
        </div>
        <div className="">
          <div className="border rounded-xl p-6 mb-6 bg-[#F5F5F5]">
            <img src="/vec1.png" alt="" className="mb-3" />
            <h3 className="mb-3">Vision</h3>
            <p>
              FYTOBYTE LIMITED envisions a future where businesses harness the
              power of technology effortlessly. We aim to be the vanguard in
              creating adaptable, user-centric SaaS solutions that propel
              enterprises towards success. We envision a digital landscape where
              our innovative tools and services revolutionize operations,
              enabling organizations to flourish and stay ahead in an
              ever-evolving, competitive market, setting new benchmarks for
              excellence.
            </p>
          </div>
          <img src="/office2.jpeg" alt="" className="rounded-xl" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
