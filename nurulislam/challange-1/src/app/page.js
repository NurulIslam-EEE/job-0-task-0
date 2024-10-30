import Footer from "@/components/common/Footer";
import Banner from "@/components/home/Banner";
import KnowledgeBase from "@/components/home/KnowledgeBase";
import OurBlog from "@/components/home/OurBlog";
import OurSolution from "@/components/home/OurSolution";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <OurSolution />
      <KnowledgeBase />
      <OurBlog />
    </main>
  );
}
