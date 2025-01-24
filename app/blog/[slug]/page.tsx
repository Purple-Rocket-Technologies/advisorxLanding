import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Twitter,
  Linkedin,
  Link as LinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import readingTime from "reading-time";
import { AnimatedText } from "@/app/components/animated-text";

// Define the props type for the page component
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
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

// Make the page component async and export it as default
export default async function BlogPost(props: PageProps) {
  const params = await props.params;
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
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="gap-2">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <LinkIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/20" />
        <div className="absolute inset-0 bg-dot-muted/20" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-24">
          <div className="container max-w-screen-md mx-auto">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time>{format(new Date(post.date), "MMMM d, yyyy")}</time>
              </div>
              <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{stats.text}</span>
              </div>
            </div>
            <AnimatedText
              text={post.title}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              delay={0.2}
            />
            <p className="text-xl text-muted-foreground max-w-2xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-screen-md py-16">
        {/* Author */}
        <div className="flex items-center gap-6 mb-16 p-8 rounded-2xl bg-muted/30 border border-border/50 backdrop-blur">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={80}
            height={80}
            className="rounded-full ring-2 ring-border ring-offset-2 ring-offset-background"
          />
          <div>
            <div className="font-medium text-lg mb-1">{post.author.name}</div>
            <p className="text-muted-foreground">{post.author.bio}</p>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert mx-auto">
          <Markdown
            components={{
              h1: ({ children }) => (
                <h1 className="mt-12 mb-6 text-4xl font-bold tracking-tight">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="mt-10 mb-4 text-3xl font-bold tracking-tight">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="leading-8 [&:not(:first-child)]:mt-6 text-muted-foreground">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="my-6 ml-6 list-disc [&>li]:mt-3 text-muted-foreground">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="my-6 ml-6 list-decimal [&>li]:mt-3 text-muted-foreground">
                  {children}
                </ol>
              ),
              blockquote: ({ children }) => (
                <blockquote className="mt-8 mb-8 pl-6 italic border-l-2 border-primary text-muted-foreground">
                  {children}
                </blockquote>
              ),
              code: function Code({ className, children }) {
                const match = /language-(\w+)/.exec(className || "");
                const isInline = !match;
                return !isInline ? (
                  <div className="my-8 overflow-hidden rounded-xl bg-muted border border-border/50">
                    <div className="flex items-center justify-between px-4 py-2 border-b border-border/50">
                      <span className="text-sm text-muted-foreground">
                        {match[1]}
                      </span>
                    </div>
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      className="!bg-transparent !p-4"
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code className="relative rounded bg-muted px-[0.4rem] py-[0.2rem] font-mono text-sm">
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
        <div className="mt-16 pt-8 border-t">
          <h3 className="text-xl font-semibold mb-6">Share this article</h3>
          <div className="flex gap-3">
            <Button variant="outline" size="lg" className="flex-1">
              <Twitter className="h-4 w-4 mr-2" />
              Share on Twitter
            </Button>
            <Button variant="outline" size="lg" className="flex-1">
              <Linkedin className="h-4 w-4 mr-2" />
              Share on LinkedIn
            </Button>
            <Button variant="outline" size="lg">
              <LinkIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
