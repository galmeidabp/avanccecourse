import Image from "next/image";

export function BlogCard() {
  return (
    <div className="flex gap-8">
      <Image src="/blog-header.png" alt="." height={200} width={150} />
      <div className="flex flex-col py-5 justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">17 de Junho de 2025</span>
          <p className="text-xl">Título do post do blog</p>
        </div>
        <p className="text-blue-500">link Leia mais</p>
      </div>
    </div>
  )
}