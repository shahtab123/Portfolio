import { MetadataRoute } from "next";
import { list } from "@vercel/blob";
import type { BlogPost } from "@/lib/blog-data";
import { getDefaultBlogPosts } from "@/lib/blog-data";

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Try to fetch from Vercel Blob Storage
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

    if (posts.length > 0) {
      return posts;
    }
  } catch (error) {
    console.error("Error fetching blog posts from Blob Storage:", error);
  }

  // Fallback to default posts
  return getDefaultBlogPosts();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://shahtab.xyz";
  
  // Fetch blog posts
  const blogPosts = await getBlogPosts();

  // Base pages
  const pages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Add individual blog post pages
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...blogPostPages];
}

