import { CallToAction } from "@/components/home/CallToAction";
import { Hero } from "@/components/home/Hero";
import CourseListing from "./course-listing";

export default function Home() {
  return (
    <div className="mb-35">
      <Hero />

      <CourseListing />

      <CallToAction />
    </div>
  );
}
