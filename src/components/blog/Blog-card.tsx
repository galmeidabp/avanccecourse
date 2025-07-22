import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string,
  date: string,
  slug: string,
}

export function BlogCard({title, date, slug}: BlogCardProps) {
  return (
    <div className="flex gap-8">
      <Image src="/blog-header.png" alt="." height={100} width={180} />
      <div className="flex flex-col py-5 justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">{date}</span>
          <p className="text-xl">{title}</p>
        </div>
        <Link href={`/blog/${slug}`} className="text-blue-500 hover:text-blue-700">Leia mais</Link>
      </div>
    </div>
  )
}