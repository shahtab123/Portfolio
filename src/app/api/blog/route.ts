import { NextRequest, NextResponse } from "next/server";
import { put, list, del } from "@vercel/blob";
import type { BlogPost } from "@/lib/blog-data";

// Get default posts for fallback
function getDefaultPosts(): BlogPost[] {
  return [
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
}

const BLOB_STORE_ID = process.env.BLOB_STORE_ID || "store_Umz5EOrTRZyIVrGD";
const BLOB_BASE_URL = process.env.BLOB_BASE_URL || "https://umz5eortrzyivrgd.public.blob.vercel-storage.com";

// GET - Fetch all blog posts
export async function GET() {
  try {
    const { blobs } = await list({
      prefix: "blog-posts/",
    });

    const posts: BlogPost[] = [];
    
    for (const blob of blobs) {
      try {
        const response = await fetch(blob.url);
        const post: BlogPost = await response.json();
        posts.push(post);
      } catch (error) {
        console.error(`Error fetching post ${blob.pathname}:`, error);
      }
    }

    // Sort by date (newest first)
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // If no posts in Blob Storage, initialize with default posts
    if (posts.length === 0) {
      const defaultPosts = getDefaultPosts();
      // Initialize default posts to Blob Storage
      for (const post of defaultPosts) {
        try {
          const filename = `blog-posts/${post.id}.json`;
          const content = JSON.stringify(post);
          await put(filename, content, {
            access: "public",
            contentType: "application/json",
          });
        } catch (error) {
          console.error(`Error initializing post ${post.id}:`, error);
        }
      }
      return NextResponse.json(defaultPosts);
    }

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}

// POST - Create or update a blog post
export async function POST(request: NextRequest) {
  try {
    const post: BlogPost = await request.json();

    if (!post.id || !post.title || !post.content) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const filename = `blog-posts/${post.id}.json`;
    const content = JSON.stringify(post);

    const { url } = await put(filename, content, {
      access: "public",
      contentType: "application/json",
    });

    return NextResponse.json({ success: true, url, post });
  } catch (error) {
    console.error("Error saving blog post:", error);
    return NextResponse.json(
      { error: "Failed to save blog post" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a blog post
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    const filename = `blog-posts/${id}.json`;
    
    await del(filename);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 }
    );
  }
}

