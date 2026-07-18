import type { Metadata } from "next";

import { BlogList } from "@/app/(frontend)/blog/components/blog-list";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return <BlogList />;
}
