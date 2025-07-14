import { Button } from "@/components/Button"
import { ChevronRight, Facebook, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { remark } from "remark";
import html from "remark-html";
import { getPostBySlug } from "../../../../lib/posts";
import { notFound } from "next/navigation";

type BlogPageProps = {
  params: {
    slug: string
  }
}

export default async function BlogPage({params}: BlogPageProps) {
  const post = getPostBySlug(params.slug)

  if(!post) return notFound()

  const processedContent = await remark().use(html).process(post.content)
  const contentHtml = processedContent.toString()

  return (
    <div>
      <div className="flex flex-col mt-15 max-w-sm m-auto md:max-w-xl lg:max-w-5xl">
        <div className="flex justify-between items-center mb-10">
          <div className="flex flex-col gap-3 mb-3">
            <div className="flex flex-row gap-8">
              <span>Trends</span>
              <span>{post.date} | 14 Comentários</span>
            </div>

            <h1 className="text-3xl font-bold">{post.title}</h1>
          </div>




          <div className="flex gap-5">
            <Image src="/author.png" alt="." width={50} height={60} />
            <div className="flex flex-col">
              <p className="font-semibold">Andrea Martins</p>
              <span className="text-gray-400">Autor</span>
            </div>
          </div>
        </div>

        <Image src="/post-img.png" alt="Blog Header" width={900} height={500} className="rounded-lg mt-5 mb-5 m-auto" />

        <div className="grid grid-cols-[3fr_1fr] gap-20 mt-10 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-2xl">Pipipipópopopo & etcetera</h2>
            <div dangerouslySetInnerHTML={{__html: contentHtml}} className="prose prose-invert"></div>

            <div className="flex gap-5 items-center border-t-1 border-gray-800 py-5 border-b-1 mt-10">
              <h3>Tags</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-800 text-blue-500 px-3 py-1 rounded text-sm">#tag1</span>
                <span className="bg-gray-800 text-blue-500 px-3 py-1 rounded text-sm">#tag2</span>
                <span className="bg-gray-800 text-blue-500 px-3 py-1 rounded text-sm">#tag3</span>
                <span className="bg-gray-800 text-blue-500 px-3 py-1 rounded text-sm">#tag4</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow-xl/30">
            <h3 className="font-semibold text-lg mb-5">Compartilhar</h3>
            <div className="flex flex-col gap-3">
              <button className="bg-indigo-600 text-white p-2 rounded flex items-center gap-2"><Facebook /> Facebook</button>
              <button className="bg-blue-400 text-white p-2 rounded flex items-center gap-2"><Twitter /> Twitter</button>
              <button className="bg-blue-600 text-white p-2 rounded flex items-center gap-2"><Linkedin /> LinkedIn</button>
            </div>
            <div className="flex flex-col gap-3 mt-10">
              <h3>Assine nossa newsletter</h3>
              <input type="email" placeholder="Email" className="border-1 border-gray-400 p-2 text-sm rounded" />
              <Button name="Assinar" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900">
        <div className="flex flex-col mt-15 max-w-sm m-auto md:max-w-xl lg:max-w-5xl py-10">
          <div className="flex justify-between">
            <h3 className="font-semibold text-lg mb-5">Últimos posts e novidades</h3>
            <p className="flex items-center gap-1 text-sm">Ver mais <ChevronRight /></p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <p>é pra vir o blog card aq tmb dps colcoar</p>
          </div>
        </div>
      </div>
    </div>
  )
}

