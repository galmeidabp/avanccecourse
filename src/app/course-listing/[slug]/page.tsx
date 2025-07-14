import { coursesArray } from "@/app/data/courses"

interface Params {
  params: {
    slug: string
  }
}

export default function CourseDetails({params}: Params) {
  const course = coursesArray.find((c) => c.slug === params.slug)

  return (
    <div>
      <div className="bg-blue-900">
        <div className="flex flex-col mt-15 max-w-sm m-auto md:max-w-xl lg:max-w-5xl py-10">
          <p>Breadcrumb</p>
          <h1 className="text-3xl font-bold">{course?.title}</h1>
        </div>
      </div>

      <div className="flex flex-col mt-15 max-w-sm m-auto md:max-w-xl lg:max-w-5xl">
        
        <div className="grid grid-cols-[3fr_1fr] gap-20 mt-10 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-2xl">{course?.title}</h2>
            <p>{course?.description}</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow-xl/30">
            <h3 className="font-semibold text-lg mb-5">Compartilhar</h3>
            <div className="flex flex-col gap-3">
            </div>
            <div className="flex flex-col gap-3 mt-10">
              <h3>Assine nossa newsletter</h3>
              <input type="email" placeholder="Email" className="border-1 border-gray-400 p-2 text-sm rounded" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}