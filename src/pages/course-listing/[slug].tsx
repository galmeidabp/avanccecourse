import { coursesArray } from "@/data/courses"
import { Button } from "@/components/Button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Facebook, Linkedin, Twitter } from "lucide-react"
import { GetStaticPaths, GetStaticProps } from "next"

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = coursesArray.map((course) => ({
    params: { slug: course.slug }
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  return {
    props: {
      slug,
    },
  }
}

interface CourseDetailsProps {
  slug: string
}

export default function CourseDetails({ slug }: CourseDetailsProps) {
  const course = coursesArray.find((c) => c.slug === slug)

  return (
    <div className="mb-35">
      <div className="bg-blue-900">
        <div className="flex gap-10 flex-col-reverse lg:flex-row lg:justify-between my-15 max-w-sm m-auto md:max-w-xl lg:max-w-5xl py-10">
          <div>
            <h1 className="text-3xl font-bold my-5 lg:mt-0">{course?.title}</h1>
          </div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-blue-200" href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-white" href="/course-listing">Cursos</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

        </div>
      </div>

      <div className="flex flex-col mt-15 max-w-sm m-auto md:max-w-xl lg:max-w-5xl">

        <div className="grid gap-10 items-start md:grid-cols-[3fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-2xl">{course?.title}</h2>

            <p className="whitespace-pre-line">{course?.description}</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow-xl/30">
            <h3 className="font-semibold text-lg mb-5">Compartilhar</h3>
            <div className="flex flex-col gap-3">
              <button className="bg-indigo-600 text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-indigo-700"><Facebook /> Facebook</button>
              <button className="bg-blue-400 text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-blue-500"><Twitter /> Twitter</button>
              <button className="bg-blue-600 text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-blue-700"><Linkedin /> LinkedIn</button>
            </div>
            <div className="flex flex-col gap-3 mt-10">
              <h3>Assine nossa newsletter</h3>
              <input type="email" placeholder="Email" className="border-1 border-gray-400 p-2 text-sm rounded outline-none focus:bg-gray-700" />
              <Button name="Assinar" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
