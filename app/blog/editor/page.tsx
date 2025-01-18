import { BlogEditor } from "@/components/blog/editor";

export default function BlogEditorPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Create New Blog Post</h1>
          <p className="text-muted-foreground mt-2">
            Write and preview your blog post with our easy-to-use editor.
          </p>
        </div>
        <BlogEditor />
      </div>
    </div>
  );
}
