import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string,
  date: string,
  slug: string,
}

export function BlogCard({ title, date, slug }: BlogCardProps) {
  return (
    <Link data-aos="fade-down" href={`/blog/${slug}`} className="flex flex-col gap-3 items-center bg-neutral-800 rounded-lg p-8 border-1 border-gray-700 hover:border-sky-600 hover:bg-neutral-700 shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:z-10">
      <Image src="/post-img.png" alt="Imagem do post" height={100} width={500} />
      <div className="flex flex-col py-5 justify-between">
        <div className="flex flex-col gap-4">
          <span className="text-sm text-gray-400">{date}</span>
          <p className="text-xl">{title}</p>
          <div className="flex gap-5 lg:flex-row">
            <Image src="/author.png" alt="Autor do post" width={50} height={60} />
            <div className="flex flex-col">
              <p className="font-semibold">Andrea Martins</p>
              <span className="text-gray-400">Autor</span>
            </div>
          </div>
        </div>
      </div>
    </Link >
  )
}