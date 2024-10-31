"use client";
import useTheme from "@/hooks/useTheme";
import React from "react";

function AboutUs() {
  const { light, setLight } = useTheme();
  return (
    <div className={` ${!light && "bg-[#000000]"}`}>
      <section className={`container mx-auto pb-20 px-4 `}>
        <h3
          className={`text-7xl font-bold text-center pt-8 mb-4 ${
            !light && "text-white"
          }`}
        >
          About Us
        </h3>
        <p
          className={`text-center text-2xl my-10 ${!light && "text-[#737373]"}`}
        >
          Watch your operations optimize as our apps streamline workflows and
          drives <br /> efficiency for your success.
        </p>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="w=[100%] md:w-[60%]">
            <div>
              <img src="/office1.jpeg" alt="" className="rounded-xl" />
            </div>

            <div
              className={`border rounded-xl p-6 mt-6 ${
                !light ? "bg-[#000000]" : "bg-[#F5F5F5]"
              }  ${!light && "text-white"}`}
            >
              <img
                src={`${!light ? "/vec2-w.png" : "/vec2.png"}`}
                alt=""
                className="mb-3"
              />
              <h3 className="mb-3">Mission</h3>
              <p className={`mt-4 md:mt-0`}>
                At FYTOBYTE LIMITED, our mission is to revolutionize the
                business landscape by delivering innovative SaaS solutions that
                empower growth and efficiency. We strive to create seamless,
                user-centric software that simplifies complex processes,
                enabling businesses to thrive in a rapidly evolving digital
                world. With a commitment to excellence and technological
                advancement, we aim to be the driving force behind our clients
                success and transformation.
              </p>
            </div>
          </div>
          <div className="w-[100%%] md:w-[35%] flex flex-col mt-6 md:mt-0">
            <div
              className={`border rounded-xl p-6 mb-6 ${
                !light ? "bg-[#000000]" : "bg-[#F5F5F5]"
              } ${!light && "text-white"}`}
            >
              <div className="">
                {" "}
                <img
                  src={`${!light ? "/vec1-w.png" : "/vec1.png"}`}
                  alt=""
                  className="mb-3"
                />
              </div>

              <h3 className="mb-3">Vision</h3>
              <p>
                FYTOBYTE LIMITED envisions a future where businesses harness the
                power of technology effortlessly. We aim to be the vanguard in
                creating adaptable, user-centric SaaS solutions that propel
                enterprises towards success. We envision a digital landscape
                where our innovative tools and services revolutionize
                operations, enabling organizations to flourish and stay ahead in
                an ever-evolving, competitive market, setting new benchmarks for
                excellence.
              </p>
            </div>
            <div className="md:flex-1 overflow-hidden">
              <img
                src="/office2.jpeg"
                alt=""
                className="rounded-xl h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
