import { coursesArray } from "@/app/data/courses";
import { CourseCard } from "../../components/home/components/CourseCard";

export function Courses() {
  return (

    <div className="bg-gray-800 my-20 py-20">
      <div className="max-w-sm m-auto md:max-w-xl lg:max-w-5xl">
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

