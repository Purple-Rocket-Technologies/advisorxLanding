import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowRight, Calendar } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/app/components/animated-text";

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
        <div className="absolute inset-0 bg-dot-muted/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <AnimatedText
              text="Insights for Modern Advisors"
              className="text-4xl md:text-6xl font-bold mb-6"
              delay={0.2}
            />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert insights, strategies, and tips to help you grow your
              practice and better serve your clients.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {posts[0] && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link href={`/blog/${posts[0].slug}`} className="group">
            <article className="relative overflow-hidden rounded-3xl border border-border bg-card">
              <div className="aspect-[2/1] relative">
                <Image
                  src={posts[0].coverImage}
                  alt={posts[0].title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 p-8 w-full">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <time>{format(new Date(posts[0].date), "MMMM d, yyyy")}</time>
                </div>
                <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-muted-foreground line-clamp-2">
                  {posts[0].excerpt}
                </p>
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:border-primary/50 hover:shadow-lg">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <time>{format(new Date(post.date), "MMMM d, yyyy")}</time>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="group/btn mt-auto text-primary hover:text-primary"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
