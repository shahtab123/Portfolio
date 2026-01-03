"use client";

import { useState, useEffect, use } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import type { BlogPost } from "@/lib/blog-data";

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load post from API
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="py-4">
        <div className="text-center py-12">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-4">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="py-4 flex flex-col flex-1">
      <Link href="/blog">
        <Button variant="ghost" size="sm" className="gap-2 mb-4">
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Button>
      </Link>

      <header className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-muted-foreground">
          <span className="font-mono">{formatDate(post.date)}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Footer />
    </article>
  );
}
