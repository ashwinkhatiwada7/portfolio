"use client";

import { motion } from "framer-motion";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "@/app/(frontend)/blog/lib/mock-posts";

type BlogCardProps = {
  post: BlogPost;
  index: number;
};

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.05 * index }}
    >
      <Card className="shadow-sm transition-shadow hover:shadow-md">
        <CardHeader className="gap-2">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <CardTitle className="text-xl">{post.title}</CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {post.excerpt}
          </CardDescription>
        </CardHeader>
      </Card>
    </motion.article>
  );
}
