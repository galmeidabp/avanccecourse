import { BlogCard } from "@/components/blog/Blog-card"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { GetStaticProps } from "next";
import { getAllPosts } from "../../../lib/posts";

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

interface BlogProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

export default function Blog({posts}: BlogProps) {

  return (
    <div className="flex flex-col mt-30 mb-25 max-w-sm m-auto md:max-w-xl lg:max-w-5xl">
      <div className="flex flex-row justify-between items-center mb-15">
        <h1 className="text-3xl font-bold">Blog</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink className="text-white" href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="grid grid-cols-1 gap-5  lg:grid-cols-2 mb-15">

        {posts.map((post) => (
          <BlogCard key={post.slug} title={post.title} date={post.date} slug={post.slug} />
        ))}

      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}