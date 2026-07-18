"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/app/(frontend)/projects/components/project-card";
import { mockProjects } from "@/app/(frontend)/projects/lib/mock-projects";

export function ProjectGrid() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col gap-3"
      >
        <Badge variant="secondary" className="w-fit">
          Projects
        </Badge>
        <h1 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
          Selected work
        </h1>
        <p className="max-w-xl text-muted-foreground">
          UI-ready grid wired for backend data later. These cards are mock
          entries you can swap for real projects.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {mockProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
