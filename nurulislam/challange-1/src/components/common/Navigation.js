"use client";
import useTheme from "@/hooks/useTheme";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function Navigation() {
  const [dark, setDark] = useState(false);

  const { light, setLight } = useTheme();

  const pathname = usePathname();
  // console.log("ddd", dark, light, pathname);

  return (
    <nav className={`${!light && pathname !== "/" && "bg-[#000000]"}  pt-5`}>
      <div
        className={`rounded-full bg-[#ffffff45] backdrop-blur-[19.5px] w-[95%] xl:w-[1384px] mx-auto py-4 px-10 `}
      >
        <div className="flex justify-between items-center">
          <div className="logo">
            {light ? (
              <img src="/logo-home.png" alt="" />
            ) : (
              <img src="/logo-white.png" alt="" />
            )}
          </div>
          <div className="xl:flex hidden">
            <Link
              href="/"
              className={`text-lg text-[#224192] mr-8 ${
                !light ? "border-[#d4d4d4]" : "border-[#224192]"
              } cursor-pointer ${!light && "text-[#d4d4d4]"}  ${
                pathname === "/" && "border-b-2"
              }`}
            >
              Home
            </Link>
            <p
              className={`text-lg text-[#224192] mr-8  ${
                !light ? "border-[#d4d4d4]" : "border-[#224192]"
              } cursor-pointer ${!light && "text-[#d4d4d4]"}  ${
                pathname === "/services" && "border-b-2"
              }`}
            >
              Services
            </p>
            <p
              className={`text-lg text-[#224192] mr-8 ${
                !light ? "border-[#d4d4d4]" : "border-[#224192]"
              } cursor-pointer ${!light && "text-[#d4d4d4]"}  ${
                pathname === "/solutions" && "border-b-2"
              }`}
            >
              Solutions
            </p>
            <p
              className={`text-lg text-[#224192] mr-8 ${
                !light ? "border-[#d4d4d4]" : "border-[#224192]"
              } cursor-pointer ${!light && "text-[#d4d4d4]"}  ${
                pathname === "/faq" && "border-b-2"
              }`}
            >
              FAQ
            </p>
            <Link
              href="/about-us"
              className={`text-lg text-[#224192] mr-8  ${
                !light ? "border-[#d4d4d4]" : "border-[#224192]"
              } cursor-pointer ${!light && "text-[#d4d4d4]"} ${
                pathname === "/about-us" && "border-b-2"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact-us"
              className={`text-lg text-[#224192] mr-8 ${
                !light ? "border-[#d4d4d4]" : "border-[#224192]"
              } cursor-pointer ${!light && "text-[#d4d4d4]"}  ${
                pathname === "/contact-us" && "border-b-2"
              }`}
            >
              Contact
            </Link>
          </div>
          <div className="buttons flex ">
            <button
              className={`w-[56px] h-[40px] rounded-full  flex justify-center items-center mr-4 ${
                light ? "bg-[#F2F2F2]" : "bg-[#171717]"
              }`}
              onClick={() => setLight(!light)}
            >
              {light ? (
                <IoMoonOutline className="text-2xl" />
              ) : (
                <IoSunnyOutline className="text-white text-2xl" />
              )}
            </button>
            <button className="bg-[#171717] text-white py-2 px-4 rounded-full">
              talk with us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
