"use client";
import useTheme from "@/hooks/useTheme";
import ButtonCustom from "../common/ButtonCustom";
import Navigation from "../common/Navigation";

function Banner() {
  const { light, setLight } = useTheme();
  return (
    <div className="bg-[url('/hero.png')] pt-6 banner-bg">
      <Navigation />
      <div className="left lg:w-[994px] mx-auto ">
        <h3
          className={`text-[60px]  font-[700] text-center ${
            !light && "gradient-white-text"
          }  mt-28`}
        >
          Transform your workflow with cutting-edge solutions from FYTOBYTE
          LIMITED.
        </h3>
        <p
          className={`text-[32px]  font-[400] text-center ${
            !light && "text-white"
          }  `}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          sapiente suscipit amet optio quia fuga rerum ex cupiditate maiores,
          perferendis blanditiis, quam a.
        </p>
        <div className="hero-buttons flex justify-center -mb-[90px] mt-8 z-10">
          <ButtonCustom title="Get Started" className="mr-4 px-6" />
          <ButtonCustom title="Join Us" className="px-9" />
        </div>
      </div>
      <div className="bottom text-center ">
        <img src="/hero-img.png" alt="" className="inline-block -mb-48" />
      </div>
    </div>
  );
}

export default Banner;
