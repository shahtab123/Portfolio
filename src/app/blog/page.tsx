"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Edit } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { getAllBlogPosts, type BlogPost } from "@/lib/blog-data";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Load posts from localStorage or default data
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

  return (
    <div className="py-4">
      <div className="mb-4">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2 mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
            <p className="mt-2 text-muted-foreground">
              Thoughts on software development, engineering, and technology.
            </p>
          </div>
          <Link href="/blog/editor">
            <Button variant="outline" size="sm" className="gap-2">
              <Edit className="h-4 w-4" />
              Editor
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group block rounded-lg border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-md"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="font-mono">{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              <span className="text-sm font-medium text-primary">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
