"use client";
import Footer from "@/components/common/Footer";
import Banner from "@/components/home/Banner";
import KnowledgeBase from "@/components/home/KnowledgeBase";
import OurBlog from "@/components/home/OurBlog";
import OurSolution from "@/components/home/OurSolution";
import useTheme from "@/hooks/useTheme";

export default function Home() {
  const { light, setLight } = useTheme();
  return (
    <main className={!light && "bg-[#000000]"}>
      <Banner />
      <OurSolution />
      <KnowledgeBase />
      <OurBlog />
    </main>
  );
}
