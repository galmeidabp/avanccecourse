import { BlogCard } from "@/components/blog/Blog-card"
import { Button } from "@/components/Button"
import { ChevronRight, Facebook, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function BlogPage() {
  return (
    <div>
      <div className="flex flex-col mt-15 max-w-sm m-auto md:max-w-xl lg:max-w-5xl">
        <div className="flex justify-between items-center mb-10">
          <div className="flex flex-col gap-3 mb-3">
            <div className="flex flex-row gap-8">
              <span>Trends</span>
              <span>18 horas atrás | 14 Comentários</span>
            </div>

            <h1 className="text-3xl font-bold">Título do post</h1>
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
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, non facere beatae veniam sequi sed aliquid maxime suscipit cum. Doloremque officiis facere iusto sunt accusamus magni voluptates nam nulla. Dolorem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil fugiat porro voluptate nam voluptatem repellendus placeat expedita obcaecati aspernatur excepturi praesentium laborum nostrum quibusdam tempore, iure illum. Est, velit accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde accusamus error dolorem minus ipsam, harum laboriosam doloremque cum tenetur illo labore expedita at numquam incidunt! Voluptas placeat temporibus optio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere tempora aliquam tempore et! Sed, corrupti adipisci! Explicabo sapiente obcaecati porro, nihil debitis voluptatum quis, aut vero vel recusandae sint!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, non facere beatae veniam sequi sed aliquid maxime suscipit cum. Doloremque officiis facere iusto sunt accusamus magni voluptates nam nulla. Dolorem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil fugiat porro voluptate nam voluptatem repellendus placeat expedita obcaecati aspernatur excepturi praesentium laborum nostrum quibusdam tempore, iure illum. Est, velit accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae unde accusamus error dolorem minus ipsam, harum laboriosam doloremque cum tenetur illo labore expedita at numquam incidunt! Voluptas placeat temporibus optio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto facere tempora aliquam tempore et! Sed, corrupti adipisci! Explicabo sapiente obcaecati porro, nihil debitis voluptatum quis, aut vero vel recusandae sint!</p>

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
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  )
}