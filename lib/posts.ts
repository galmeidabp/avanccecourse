import fs from "fs";
import matter from "gray-matter";
import path from "path";

interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'posts')

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        content,
      }
    })
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const {data, content} = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    content,
  }
}