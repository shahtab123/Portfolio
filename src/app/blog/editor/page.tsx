"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Plus, Edit, Trash2, Save } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BlogEditor } from "@/components/blog-editor";
import { Footer } from "@/components/footer";
import {
  getAllBlogPosts,
  saveBlogPost,
  deleteBlogPost,
  createBlogPostId,
  type BlogPost,
} from "@/lib/blog-data";

export default function BlogEditorPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [readTime, setReadTime] = useState("5 min read");

  useEffect(() => {
    // Load posts from localStorage
    const stored = localStorage.getItem("blog-posts");
    if (stored) {
      try {
        setPosts(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to load posts", e);
        setPosts(getAllBlogPosts());
      }
    } else {
      setPosts(getAllBlogPosts());
    }
  }, []);

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsCreating(false);
    setTitle(post.title);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setReadTime(post.readTime);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      deleteBlogPost(id);
      setPosts(getAllBlogPosts());
      if (editingPost?.id === id) {
        setEditingPost(null);
        setIsCreating(false);
        setTitle("");
        setExcerpt("");
        setContent("");
        setReadTime("5 min read");
      }
    }
  };

  const handleNew = () => {
    setIsCreating(true);
    setEditingPost(null);
    setTitle("");
    setExcerpt("");
    setContent("");
    setReadTime("5 min read");
  };

  const handleSave = () => {
    if (!title.trim() || !excerpt.trim() || !content.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const post: BlogPost = {
      id: editingPost?.id || createBlogPostId(),
      title: title.trim(),
      excerpt: excerpt.trim(),
      content: content.trim(),
      readTime: readTime.trim() || "5 min read",
      date: editingPost?.date || new Date().toISOString().split("T")[0],
    };

    saveBlogPost(post);
    setPosts(getAllBlogPosts());
    setEditingPost(null);
    setIsCreating(false);
    setTitle("");
    setExcerpt("");
    setContent("");
    setReadTime("5 min read");
  };

  const handleCancel = () => {
    setEditingPost(null);
    setIsCreating(false);
    setTitle("");
    setExcerpt("");
    setContent("");
    setReadTime("5 min read");
  };

  return (
    <div className="py-4">
      <div className="mb-4">
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="gap-2 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Blog Editor</h1>
            <p className="mt-2 text-muted-foreground">
              Manage your blog posts - create, edit, and delete.
            </p>
          </div>
          {!isCreating && !editingPost && (
            <Button onClick={handleNew} className="gap-2">
              <Plus className="h-4 w-4" />
              New Post
            </Button>
          )}
        </div>
      </div>

      {(isCreating || editingPost) && (
        <div className="mb-6 space-y-4 border rounded-lg p-6 bg-card">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter blog post title"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Input
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Enter a short excerpt"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="readTime">Read Time</Label>
            <Input
              id="readTime"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              placeholder="e.g., 5 min read"
            />
          </div>

          <div className="space-y-2">
            <Label>Content</Label>
            <BlogEditor content={content} onChange={setContent} />
          </div>

          <div className="flex gap-2">
            <Button onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              Save Post
            </Button>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Existing Posts</h2>
        {posts.length === 0 ? (
          <p className="text-muted-foreground">No blog posts yet. Create one to get started!</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="flex items-center justify-between p-4 border rounded-lg bg-card"
            >
              <div className="flex-1">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{post.excerpt}</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEdit(post)}
                  className="gap-2"
                >
                  <Edit className="h-4 w-4" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(post.id)}
                  className="gap-2 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}

