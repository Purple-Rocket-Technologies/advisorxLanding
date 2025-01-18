import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

// Metadata for SEO
export const metadata: Metadata = {
  title: "AdvisorX Blog - Insights for Modern Financial Advisors",
  description:
    "Expert insights, tips, and strategies for financial advisors looking to grow their practice with AI and modern marketing techniques.",
  openGraph: {
    title: "AdvisorX Blog - Insights for Modern Financial Advisors",
    description:
      "Expert insights, tips, and strategies for financial advisors looking to grow their practice with AI and modern marketing techniques.",
    type: "website",
    url: "https://advisorx.com/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground/60 via-foreground to-foreground/60 bg-clip-text text-transparent mb-6">
              Insights for Modern Advisors
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert insights, strategies, and tips to help you grow your
              practice and better serve your clients.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:border-primary/50 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {post.author.name}
                      </span>
                      <time className="text-xs text-muted-foreground">
                        {format(new Date(post.date), "MMM d, yyyy")}
                      </time>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
