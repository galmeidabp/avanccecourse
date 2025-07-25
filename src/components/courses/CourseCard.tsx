import { Book, Clock, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link";

type CourseCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  slug: string;
}

export function CourseCard({imageSrc, imageAlt, title, slug}: CourseCardProps) {
  return (
   <Link href={`/courses/${slug}`}>
      <div className="bg-neutral-800 rounded-xl border-1 border-neutral-700 hover:border-sky-600 hover:shadow-md">
        <Image src={imageSrc} alt={imageAlt} width={370} height={370} />

        <div className="p-5">
          
          <div className="flex items-center gap-3 mb-5">
            <p className="font-bold">4.7</p>
            <div className="flex items-center">
              <Star className="h-4.5 text-amber-400 fill-amber-400" />
              <Star className="h-4.5 text-amber-400 fill-amber-400" />
              <Star className="h-4.5 text-amber-400 fill-amber-400" />
              <Star className="h-4.5 text-amber-400 fill-amber-400" />
              <Star className="h-4.5 text-gray-500 fill-gray-500" />
            </div>
            <span className="text-gray-400">(85,229)</span>
          </div>
          <span className="text-gray-400 text-sm">TypeScript</span>
          <h3 className="font-semibold mt-2">{title}</h3>
          <div className="flex items-center gap-4 text-gray-400 my-4">
            <p className="flex items-center gap-2"><Clock className="h-5" /> 8 horas</p>
            <p className="flex items-center gap-2"><Book className="h-5" /> 30 aulas</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/course-professor.png" alt="." height={40} width={40} />
              <p className="font-semibold">Daniela Soares</p>
            </div>
            <span className="text-sky-600">R$ 114,99</span>
          </div>

        </div>
      </div>
    </Link>
  )
}