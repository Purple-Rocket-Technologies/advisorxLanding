import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "_posts");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  excerpt: string;
  coverImage: string;
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Get file names under /_posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        coverImage: data.coverImage,
        content,
      } as BlogPost;
    });

  // Sort posts by date
  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(
  slug: string
): Promise<BlogPost | undefined> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      content,
    } as BlogPost;
  } catch (error) {
    return undefined;
  }
}
