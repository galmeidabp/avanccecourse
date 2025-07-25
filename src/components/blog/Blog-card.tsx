import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string,
  date: string,
  slug: string,
}

export function BlogCard({title, date, slug}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="flex flex-col gap-3 items-center bg-neutral-800 rounded-lg p-8 border-1 border-gray-700 hover:border-sky-600">
      <Image src="/post-img.png" alt="." height={100} width={500} />
      <div className="flex flex-col py-5 justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">{date}</span>
          <p className="text-xl">{title}</p>
        </div>
      </div>
    </Link >
  )
}