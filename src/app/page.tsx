import { CallToAction } from "@/components/home/CallToAction";
import { Hero } from "@/components/home/Hero";
import { Courses } from "@/components/home/Courses";

export default function Home() {
  return (
    <div className="">
      <Hero />

      <Courses />

      <CallToAction />
    </div>
  );
}
