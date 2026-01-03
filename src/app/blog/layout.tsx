import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on software development, engineering, and technology by Shahtab Mohtasin. Learn about web development, AI, and best practices.",
  openGraph: {
    title: "Blog | Shahtab Mohtasin",
    description:
      "Thoughts on software development, engineering, and technology by Shahtab Mohtasin.",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

