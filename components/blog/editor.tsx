"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogPost } from "@/lib/blog";
import Markdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { format } from "date-fns";
import {
  ImagePlus,
  Bold,
  Italic,
  Link as LinkIcon,
  List,
  ListOrdered,
  Quote as QuoteIcon,
} from "lucide-react";

export function BlogEditor() {
  const [post, setPost] = useState<Partial<BlogPost>>({
    title: "",
    excerpt: "",
    content: "",
    author: {
      name: "",
      bio: "",
      avatar: "",
    },
    coverImage: "",
    date: format(new Date(), "yyyy-MM-dd"),
  });

  const insertMarkdown = (markdown: string) => {
    const textarea = document.getElementById("content") as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const before = text.substring(0, start);
    const after = text.substring(end);
    const newText = `${before}${markdown}${after}`;
    setPost({ ...post, content: newText });
    // Set cursor position after inserted markdown
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + markdown.length,
        start + markdown.length
      );
    }, 0);
  };

  const toolbarButtons = [
    { icon: <Bold className="w-4 h-4" />, markdown: "**Bold**", label: "Bold" },
    {
      icon: <Italic className="w-4 h-4" />,
      markdown: "_Italic_",
      label: "Italic",
    },
    {
      icon: <LinkIcon className="w-4 h-4" />,
      markdown: "[Link](url)",
      label: "Link",
    },
    {
      icon: <List className="w-4 h-4" />,
      markdown: "\n- List item",
      label: "Bullet List",
    },
    {
      icon: <ListOrdered className="w-4 h-4" />,
      markdown: "\n1. List item",
      label: "Numbered List",
    },
    {
      icon: <QuoteIcon className="w-4 h-4" />,
      markdown: "\n> Quote",
      label: "Quote",
    },
  ];

  const handleSave = async () => {
    // Here you would implement the save functionality
    console.log("Saving post:", post);
  };

  return (
    <div className="space-y-8">
      {/* Metadata Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="Enter post title"
            />
          </div>

          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={post.excerpt}
              onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
              placeholder="Brief description of your post"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="coverImage">Cover Image URL</Label>
            <div className="flex gap-2">
              <Input
                id="coverImage"
                value={post.coverImage}
                onChange={(e) =>
                  setPost({ ...post, coverImage: e.target.value })
                }
                placeholder="/blog/your-image.jpg"
              />
              <Button variant="outline" size="icon">
                <ImagePlus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="authorName">Author Name</Label>
            <Input
              id="authorName"
              value={post.author?.name}
              onChange={(e) =>
                setPost({
                  ...post,
                  author: { ...post.author!, name: e.target.value },
                })
              }
              placeholder="Your name"
            />
          </div>

          <div>
            <Label htmlFor="authorBio">Author Bio</Label>
            <Textarea
              id="authorBio"
              value={post.author?.bio}
              onChange={(e) =>
                setPost({
                  ...post,
                  author: { ...post.author!, bio: e.target.value },
                })
              }
              placeholder="Brief bio"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="authorAvatar">Author Avatar URL</Label>
            <div className="flex gap-2">
              <Input
                id="authorAvatar"
                value={post.author?.avatar}
                onChange={(e) =>
                  setPost({
                    ...post,
                    author: { ...post.author!, avatar: e.target.value },
                  })
                }
                placeholder="/authors/your-avatar.jpg"
              />
              <Button variant="outline" size="icon">
                <ImagePlus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Editor Section */}
      <Tabs defaultValue="write" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="write">Write</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="write" className="space-y-4">
          <div className="flex gap-2 mb-4">
            {toolbarButtons.map((button) => (
              <Button
                key={button.label}
                variant="outline"
                size="sm"
                onClick={() => insertMarkdown(button.markdown)}
                title={button.label}
              >
                {button.icon}
              </Button>
            ))}
          </div>
          <Textarea
            id="content"
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            placeholder="Write your post content in Markdown..."
            className="min-h-[500px] font-mono"
          />
        </TabsContent>

        <TabsContent value="preview">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <Markdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {post.content}
            </Markdown>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSave}>Save Post</Button>
      </div>
    </div>
  );
}
