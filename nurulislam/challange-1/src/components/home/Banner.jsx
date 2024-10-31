"use client";
import useTheme from "@/hooks/useTheme";
import ButtonCustom from "../common/ButtonCustom";
import Navigation from "../common/Navigation";

function Banner() {
  const { light, setLight } = useTheme();
  return (
    <div className={`md:bg-[url('/hero.png')] pt-6 banner-bg`}>
      <Navigation />
      <div className="lg:w-[994px] mx-auto z-40">
        <h3
          className={`text-[60px]  font-[700] leading-[60px] text-center sm:w-[481px] lg:w-[880px] mx-auto ${
            !light && "gradient-white-text"
          }  mt-28`}
        >
          Transform your workflow with cutting-edge solutions from FYTOBYTE
          LIMITED.
        </h3>
        <p
          className={`text-[32px]  font-[400] text-center mt-4 hidden lg:block leading-[24px] ${
            !light && "text-white"
          }  `}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          sapiente suscipit amet optio quia fuga rerum ex cupiditate maiores,
          perferendis blanditiis, quam a.
        </p>
      </div>
      <div className="bottom text-center relative ">
        <div className="absolute hero-buttons flex justify-center mt-8  ">
          <ButtonCustom
            title="Get Started"
            className={`mr-4 px-6  ${!light && "bg-white !text-black"}`}
          />
          <ButtonCustom
            title="Join Us"
            className={`px-9  ${!light && "bg-white !text-black"} `}
          />
        </div>
        <img src="/hero-img.png" alt="" className="inline-block -mb-48 -mt-8" />
      </div>
    </div>
  );
}

export default Banner;
