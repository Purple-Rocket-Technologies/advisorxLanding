import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import readingTime from "reading-time";

interface Props {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found - AdvisorX Blog",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} - AdvisorX Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://advisorx.com/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Generate static paths
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const stats = readingTime(post.content);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          <div className="flex-1" />
          <Button variant="ghost" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-12">
          <div className="container max-w-screen-md">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>{format(new Date(post.date), "MMMM d, yyyy")}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{stats.text}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-md py-12">
        {/* Author */}
        <div className="flex items-center gap-4 mb-12 p-6 rounded-lg bg-muted/50">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <div className="font-medium">{post.author.name}</div>
            <p className="text-sm text-muted-foreground">{post.author.bio}</p>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <Markdown
            components={{
              h1: ({ children }) => (
                <h1 className="mt-8 mb-4 text-4xl font-bold tracking-tight">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="mt-8 mb-4 text-3xl font-bold tracking-tight">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
                  {children}
                </ol>
              ),
              blockquote: ({ children }) => (
                <blockquote className="mt-6 border-l-4 border-primary pl-6 italic">
                  {children}
                </blockquote>
              ),
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <div className="my-6 rounded-lg overflow-hidden">
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </Markdown>
        </article>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t">
          <h3 className="text-lg font-semibold mb-4">Share this article</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Twitter
            </Button>
            <Button variant="outline" size="sm">
              LinkedIn
            </Button>
            <Button variant="outline" size="sm">
              Copy Link
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
