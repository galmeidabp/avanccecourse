import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CallToAction } from "@/templates/home/CallToAction";
import Courses from "@/templates/home/Courses";
import { Hero } from "@/templates/home/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />

      <Hero />

      <Courses />

      <CallToAction />

      <Footer />
    </div>
  );
}
