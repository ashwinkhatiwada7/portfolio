"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/app/(frontend)/projects/lib/mock-projects";

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  wip: "In progress",
  archived: "Archived",
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.05 * index }}
      whileHover={{ y: -4 }}
    >
      <Card className="h-full shadow-sm transition-shadow hover:shadow-md">
        <CardHeader className="gap-3">
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <Badge variant="outline">{statusLabel[project.status]}</Badge>
          </div>
          <CardDescription className="text-sm leading-relaxed">
            {project.summary}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
