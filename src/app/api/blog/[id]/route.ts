import { NextRequest, NextResponse } from "next/server";
import { list } from "@vercel/blob";
import type { BlogPost } from "@/lib/blog-data";

// Default posts for fallback
function getDefaultPost(id: string): BlogPost | undefined {
  const defaultPosts: BlogPost[] = [
    {
      id: "scaling-databases",
      title: "Horizontal Scaling in Databases: Part 1 — Read Replicas",
      date: "2025-12-26",
      readTime: "8 min read",
      excerpt:
        "As applications grow, databases often become the bottleneck. Learn how read replicas help serve data efficiently by separating read and write responsibilities.",
      content: `
As applications grow, databases often become the bottleneck. Read replicas are one of the most effective ways to scale your database horizontally.

## What are Read Replicas?

Read replicas are copies of your primary database that handle read queries. This allows you to:

- **Distribute load**: Spread read operations across multiple servers
- **Improve availability**: If one replica fails, others can still serve requests
- **Reduce latency**: Place replicas closer to users geographically

## When to Use Read Replicas

Consider read replicas when:
- Your application is read-heavy (most apps are 90%+ reads)
- You're seeing slow query performance on your primary database
- You need better availability and disaster recovery

## Implementation Considerations

1. **Replication lag**: There's always a delay between writes to primary and sync to replicas
2. **Connection management**: Your application needs to route reads vs writes appropriately
3. **Consistency**: Decide if eventual consistency is acceptable for your use case

Stay tuned for Part 2 where we'll cover write scaling with sharding!
      `,
    },
    {
      id: "medium-to-markdown",
      title: "How to convert any Medium blog to Markdown in seconds",
      date: "2025-11-14",
      readTime: "5 min read",
      excerpt:
        "Convert your Medium articles into clean, editable Markdown format quickly with mdify—no copy-pasting required.",
      content: `
If you've ever tried to move your Medium articles to your own blog, you know the pain. Medium doesn't export to Markdown, and copy-pasting loses all formatting.

## The Problem

Medium exports articles as HTML, which is messy and hard to work with. What we really want is clean Markdown that we can use anywhere.

## The Solution: Mdify

I built [Mdify](https://mdify.dev) to solve this exact problem. Just paste your Medium article URL and get perfectly formatted Markdown in seconds.

## How It Works

1. Paste your Medium article URL
2. Click convert
3. Copy the Markdown output
4. Use it anywhere!

The tool handles:
- Headers and formatting
- Code blocks with syntax highlighting
- Images and captions
- Links and embeds

Give it a try and let me know what you think!
      `,
    },
  ];
  
  return defaultPosts.find((p) => p.id === id);
}

// GET - Fetch a single blog post by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  try {
    const filename = `blog-posts/${id}.json`;
    
    // List blobs with the specific filename
    const { blobs } = await list({
      prefix: filename,
    });

    // Find the exact match
    const blob = blobs.find((b) => b.pathname === filename);
    
    if (!blob) {
      // Fallback to default posts
      const defaultPost = getDefaultPost(id);
      if (defaultPost) {
        return NextResponse.json(defaultPost);
      }
      
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }

    const response = await fetch(blob.url);
    const post: BlogPost = await response.json();

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    // Fallback to default posts
    const defaultPost = getDefaultPost(id);
    if (defaultPost) {
      return NextResponse.json(defaultPost);
    }
    
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 }
    );
  }
}

