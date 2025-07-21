import { CourseCard } from "@/components/courses/CourseCard"
import { coursesArray } from "../data/courses"

export default function CourseListing() {
  return (
    <div className="bg-gray-800 mb-35 py-20">
      <div className="max-w-xs h-full m-auto md:max-w-xl  lg:max-w-5xl">
        <h2 className="text-3xl font-bold">Cursos em destaque <br /> para você</h2>
        <div className="grid gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {coursesArray.map((courses) => (
            <CourseCard key={courses.slug} title={courses.title} imageSrc={courses.imageSrc} imageAlt={courses.imageAlt} slug={courses.slug} />
          ))}
        </div>
      </div>
    </div>
  )
}
