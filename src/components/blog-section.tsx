"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Load posts from API
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog");
        if (response.ok) {
          const data = await response.json();
          setPosts(data.slice(0, 2)); // Show only first 2 posts
        } else {
          console.error("Failed to load posts from API");
          setPosts([]);
        }
      } catch (error) {
        console.error("Failed to load posts", error);
        setPosts(getAllBlogPosts().slice(0, 2));
      }
    };
    fetchPosts();
  }, []);

  return (
    <section className="py-4">
      <h2 className="text-lg font-semibold mb-6">Blogs</h2>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group block rounded-lg border bg-card p-5 transition-all hover:border-foreground/20 hover:shadow-md"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-medium tracking-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </div>
              <span className="text-xs text-muted-foreground font-mono">
                {formatDate(post.date)}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <span className="text-sm font-medium text-primary">
                Read more
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link href="/blog">
          <Button variant="outline" size="sm">
            Show All Posts
          </Button>
        </Link>
      </div>
    </section>
  );
}
