# Shahtab Mohtasin - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI. Features a blog editor with WYSIWYG capabilities powered by Tiptap.

## Features

- **Personal Portfolio**: Showcase projects, skills, education, and online presence
- **Blog System**: Full-featured blog with WYSIWYG editor
- **Project Showcase**: Display projects with images, links, and hackathon winner badges
- **Dark/Light Mode**: Theme switching support (defaults to dark mode)
- **Responsive Design**: Mobile-first, works on all devices
- **SEO Optimized**: Complete SEO setup with meta tags, Open Graph, Twitter Cards, and structured data
- **Email Copy Feature**: Click email icon to copy email address to clipboard with notification
- **Social Links**: Quick access to GitHub, LinkedIn, X (Twitter), and email

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Blog Editor**: Tiptap (WYSIWYG)
- **Icons**: Lucide React, React Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Write Blog Posts

The portfolio includes a built-in blog editor accessible at `/blog/editor`. Here's how to use it:

### Accessing the Blog Editor

1. Directly visit: `http://localhost:3000/blog/editor`
   - Note: The editor is not linked from the blog page for security reasons
   - You can bookmark this URL for easy access

### Creating a New Blog Post

1. **Click "New Post"** button in the editor page
2. **Fill in the details**:
   - **Title**: Enter your blog post title
   - **Excerpt**: Write a short summary (appears in blog listings)
   - **Read Time**: Estimated reading time (e.g., "5 min read")
   - **Content**: Use the WYSIWYG editor to write your post

### Using the Blog Editor

The editor provides a rich text editing experience with the following features:

#### Text Formatting
- **Bold**: Click the bold icon (B) or use `Ctrl+B`
- **Italic**: Click the italic icon (I) or use `Ctrl+I`

#### Headings
- **H1**: Large heading
- **H2**: Medium heading  
- **H3**: Small heading

#### Lists
- **Bullet List**: Create unordered lists
- **Numbered List**: Create ordered lists

#### Links
- Click the link icon to add hyperlinks
- Enter the URL when prompted

#### Images
- **Upload from File**: Click the first image icon to upload an image from your computer
  - Images are converted to base64 and embedded in the post
- **Insert from URL**: Click the second image icon to add an image from a URL
- **Resize Images**: Hover over an image and drag the resize handle in the bottom-right corner

#### Undo/Redo
- Use the undo/redo buttons to revert or reapply changes

### Editing an Existing Blog Post

1. In the editor page, find the post you want to edit
2. Click the **"Edit"** button next to the post
3. Modify the title, excerpt, read time, or content
4. Click **"Save Post"** when done

### Deleting a Blog Post

1. In the editor page, find the post you want to delete
2. Click the **"Delete"** button (trash icon)
3. Confirm the deletion

### Blog Post Storage

- Blog posts are stored in **localStorage** in your browser
- Posts persist between sessions on the same browser
- To share posts across devices, you'll need to export/import the data or use a backend

### Tips for Writing Blog Posts

1. **Keep excerpts concise**: 1-2 sentences that summarize the post
2. **Use headings**: Break up long content with H2 and H3 headings
3. **Add images**: Visual content makes posts more engaging
4. **Format text**: Use bold and italic to emphasize important points
5. **Test your post**: Preview it on the blog page before publishing

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── editor/          # Blog editor page
│   │   │   ├── [slug]/          # Individual blog post pages
│   │   │   └── page.tsx         # Blog listing page
│   │   ├── projects/            # Projects page
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Homepage
│   ├── components/
│   │   ├── blog-editor.tsx      # WYSIWYG editor component
│   │   ├── hero-section.tsx     # Hero/profile section
│   │   ├── education.tsx        # Education section
│   │   ├── projects-section.tsx # Projects showcase
│   │   ├── blog-section.tsx     # Blog preview section
│   │   └── ...                  # Other components
│   └── lib/
│       ├── blog-data.ts          # Blog data management
│       └── utils.ts              # Utility functions
└── public/                       # Static assets
```

## SEO Optimization

The portfolio is fully SEO optimized with:

- **Meta Tags**: Comprehensive meta tags for search engines
- **Open Graph**: Social media sharing optimization (uses `/card.png` for previews)
- **Twitter Cards**: Optimized Twitter sharing
- **Structured Data**: JSON-LD schema for Person, Education, and Skills
- **Sitemap**: Auto-generated sitemap at `/sitemap.xml`
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Proper URL canonicalization

### Updating Domain

If deploying to a different domain, update the following files:
- `src/app/layout.tsx` - Update `metadataBase` and all URL references
- `src/app/page.tsx` - Update structured data URLs
- `src/app/sitemap.ts` - Update `baseUrl`
- `public/robots.txt` - Update sitemap URL

Current domain: `shahtab.xyz`

## Customization

### Adding Projects

Edit `src/app/projects/page.tsx` and `src/components/projects-section.tsx` to add or modify projects.

### Updating Personal Information

- **Profile**: Edit `src/components/hero-section.tsx`
- **Education**: Edit `src/components/education.tsx`
- **Skills**: Edit `src/components/skills-section.tsx`
- **Online Presence**: Edit `src/components/online-presence.tsx`
- **Social Links**: Update email, GitHub, LinkedIn, and X (Twitter) links in `src/components/hero-section.tsx`

### Changing Theme

The site uses Next.js themes with dark mode as default. Toggle between light/dark mode using the theme switcher in the navigation (yellow icon in dark mode, black in light mode).

## Building for Production

```bash
npm run build
npm start
```

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with default settings
4. Update domain references in the codebase if using a custom domain

### Environment Variables

No environment variables are required for basic functionality. Blog posts are stored in localStorage.

## Live Site

🌐 **Live URL**: [https://shahtab.xyz](https://shahtab.xyz)

## License

MIT

## Author

**Shahtab Mohtasin**
- Email: cloudstack6@gmail.com
- GitHub: [@shahtab123](https://github.com/shahtab123)
- LinkedIn: [shahtab-mohtasin](https://www.linkedin.com/in/shahtab-mohtasin/)
- X (Twitter): [@SMohtasin](https://x.com/SMohtasin)
