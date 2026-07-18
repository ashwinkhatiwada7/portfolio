import type { Metadata } from "next";

import { ProjectGrid } from "@/app/(frontend)/projects/components/project-grid";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return <ProjectGrid />;
}
