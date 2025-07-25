import { coursesArray } from "@/data/courses"
import { CourseCard } from "@/components/courses/CourseCard"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

type CourseListProps = {
  showBreadcrumb?: boolean;
}

export default function CourseList({showBreadcrumb = false}: CourseListProps) {
  return (
    <div className="mb-25 py-20">
      <div className="max-w-xs h-full m-auto md:max-w-xl  lg:max-w-5xl">

        <div className="flex flex-row justify-between items-center mb-15">
          <h1 className="text-3xl font-bold">Cursos em destaque <br /> para você</h1>

          {showBreadcrumb && (
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-white" href="/courses">Cursos</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          )}

        </div>

        <div className="grid gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {coursesArray.map((courses) => (
            <CourseCard key={courses.slug} title={courses.title} imageSrc={courses.imageSrc} imageAlt={courses.imageAlt} slug={courses.slug} />
          ))}
        </div>
      </div>
    </div>
  )
}
