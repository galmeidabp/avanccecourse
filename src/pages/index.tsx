import { CallToAction } from "@/components/home/CallToAction";
import { Hero } from "@/components/home/Hero";
import CourseList from "@/components/courses/Course-list";

export default function Home() {
  return (
    <div className="px-4 mb-15 md:mb-35">
      <Hero />

      <CourseList />

      <CallToAction />
    </div>
  );
}
