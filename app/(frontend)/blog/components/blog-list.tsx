"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/app/(frontend)/blog/components/blog-card";
import { mockPosts } from "@/app/(frontend)/blog/lib/mock-posts";

export function BlogList() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col gap-3"
      >
        <Badge variant="secondary" className="w-fit">
          Blog
        </Badge>
        <h1 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
          Notes from the workshop
        </h1>
        <p className="max-w-xl text-muted-foreground">
          Short posts on building, shipping, and keeping the codebase kind to
          future-you.
        </p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {mockPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}
