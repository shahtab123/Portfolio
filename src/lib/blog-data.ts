export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  content: string;
}

// This would typically come from a database, but for now we'll use in-memory storage
// In a real app, you'd use localStorage, a database, or API calls
let blogPosts: BlogPost[] = [
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
  {
    id: "nextjs-api-design",
    title: "Building Scalable APIs with Next.js and PostgreSQL",
    date: "2025-10-20",
    readTime: "10 min read",
    excerpt:
      "Learn how to build production-ready APIs using Next.js API routes with PostgreSQL and Prisma ORM. Best practices and performance tips included.",
    content: `
Next.js API routes combined with PostgreSQL make a powerful combination for building production APIs.

## Setting Up Your Stack

We'll use:
- **Next.js** for our API routes
- **PostgreSQL** for data storage
- **Prisma** as our ORM
- **Zod** for validation

## Best Practices

### 1. Use Route Handlers

Next.js 13+ route handlers provide better type safety and more control over responses.

### 2. Validate Everything

Use Zod schemas to validate both request bodies and query parameters.

### 3. Handle Errors Gracefully

Create a consistent error response format across your API.

### 4. Optimize Database Queries

Use Prisma's select and include to fetch only what you need.

## Performance Tips

- Enable connection pooling
- Use database indexes appropriately
- Cache frequently accessed data
- Implement pagination for large datasets
    `,
  },
  {
    id: "auth-patterns",
    title: "Modern Authentication Patterns for Web Applications",
    date: "2025-09-15",
    readTime: "12 min read",
    excerpt:
      "Explore different authentication strategies including JWT, sessions, and OAuth. Implementing secure auth flows in your applications.",
    content: `
Authentication is one of the most critical aspects of web application security. Let's explore modern patterns.

## JWT vs Sessions

### JSON Web Tokens (JWT)
- Stateless, scalable
- Good for microservices
- Harder to invalidate

### Sessions
- Server-side state
- Easy to invalidate
- Requires session storage

## OAuth 2.0

OAuth is the standard for third-party authentication:
- Google Sign-In
- GitHub OAuth
- Social logins

## Best Practices

1. **Always use HTTPS**
2. **Hash passwords with bcrypt or Argon2**
3. **Implement rate limiting**
4. **Use secure, httpOnly cookies**
5. **Add CSRF protection**

## Recommended Libraries

- **Better Auth** - Full-featured auth for Next.js
- **NextAuth.js** - Popular choice for Next.js
- **Lucia** - Lightweight session auth
    `,
  },
];

// Load from localStorage if available
if (typeof window !== "undefined") {
  const stored = localStorage.getItem("blog-posts");
  if (stored) {
    try {
      blogPosts = JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse stored blog posts", e);
    }
  }
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function saveBlogPost(post: BlogPost): void {
  const index = blogPosts.findIndex((p) => p.id === post.id);
  if (index >= 0) {
    blogPosts[index] = post;
  } else {
    blogPosts.push(post);
  }
  // Save to localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem("blog-posts", JSON.stringify(blogPosts));
  }
}

export function deleteBlogPost(id: string): void {
  blogPosts = blogPosts.filter((p) => p.id !== id);
  // Save to localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem("blog-posts", JSON.stringify(blogPosts));
  }
}

export function createBlogPostId(): string {
  return `post-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

