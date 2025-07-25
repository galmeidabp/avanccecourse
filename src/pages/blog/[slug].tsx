import { Button } from "@/components/Button"
import { ChevronRight, Facebook, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { BlogCard } from "@/components/blog/Blog-card";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";
import { remark } from "remark";
import html from "remark-html"
import remarkBreaks from "remark-breaks";

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

interface BlogPageProps {
  post: Post;
  contentHtml: string;
  posts: Post[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  const paths = posts.map(post => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const post = getPostBySlug(slug)

  const processedContent = await remark().use(remarkBreaks).use(html).process(post.content)

  const contentHtml = processedContent.toString()
  const posts = getAllPosts()

  return {
    props: {
      post,
      contentHtml,
      posts,
    },
  }
}

export default function BlogPage({ post, contentHtml, posts }: BlogPageProps) {

  return (
    <div>
      <div className="flex flex-col mt-15 max-w-sm m-auto md:max-w-xl lg:max-w-5xl">

        <div className="flex flex-col gap-2 mb-5 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex flex-row gap-8 text-gray-400">
            <span>Trends</span>
            <span>{post.date}</span>
          </div>


          <div className="flex gap-5 lg:flex-row">
            <Image src="/author.png" alt="." width={50} height={60} />
            <div className="flex flex-col">
              <p className="font-semibold">Andrea Martins</p>
              <span className="text-gray-400">Autor</span>
            </div>
          </div>
        </div>

        <Image src="/post-img.png" alt="Blog Header" width={700} height={500} className="rounded-lg mt-5 mb-5 " />

        <div className="grid gap-20 mt-10 items-start lg:grid-cols-[3fr_1fr]">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <div style={{ whiteSpace: "pre-wrap", lineHeight: "1.6", fontSize: "1rem" }}
              dangerouslySetInnerHTML={{ __html: contentHtml }}></div>

            <div className="flex gap-5 items-center border-t-1 border-gray-800 py-5 border-b-1 mt-10">
              <h3>Tags</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-800 text-blue-500 px-3 py-1 rounded text-sm">#tecnologia</span>
                <span className="bg-gray-800 text-blue-500 px-3 py-1 rounded text-sm">#internet</span>
                <span className="bg-gray-800 text-blue-500 px-3 py-1 rounded text-sm">#blog</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 p-5 rounded-lg shadow-xl/30 max-w-sm">
            <h3 className="font-semibold text-lg mb-5">Compartilhar</h3>
            <div className="flex flex-col gap-3">
              <button className="bg-indigo-600 text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-indigo-700"><Facebook /> Facebook</button>
              <button className="bg-blue-400 text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-blue-500"><Twitter /> Twitter</button>
              <button className="bg-blue-600 text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-blue-700"><Linkedin /> LinkedIn</button>
            </div>
            <div className="flex flex-col gap-3 mt-10">
              <h3>Assine nossa newsletter</h3>
              <input type="email" placeholder="Email" className="border-1 border-gray-400 outline-none p-2 text-sm rounded focus:bg-gray-700" />
              <Button name="Assinar" />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col mt-15 max-w-sm m-auto md:max-w-xl lg:max-w-5xl py-10">
          <div className="flex justify-between">
            <h3 className="font-semibold text-lg mb-5">Últimos posts e novidades</h3>
            <Link href="/blog" className="text-sky-600 flex items-center gap-1 text-sm hover:underline">Ver mais <ChevronRight /></ Link>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-15 lg:grid-cols-2 mb-15">
            {posts.slice(0, 2).map((post) => (
              <BlogCard key={post.slug} title={post.title} date={post.date} slug={post.slug} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

