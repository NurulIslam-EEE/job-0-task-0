"use client";

import Footer from "@/components/common/Footer";
import Navigation from "@/components/common/Navigation";
import ThemeProvider from "@/context/ThemeProvider";
import useTheme from "@/hooks/useTheme";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

function DarkMood({ children }) {
  const { light, setLight } = useTheme();
  const pathname = usePathname();
  console.log("ppp", pathname);
  return (
    <body className={`${inter.className}${!light && "bg-[#000000]"}`}>
      {pathname === "/" ? "" : <Navigation />}
      {children}

      <Footer />
    </body>
  );
}

export default DarkMood;
