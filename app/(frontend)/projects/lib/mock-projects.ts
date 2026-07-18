export type Project = {
  id: string
  title: string
  summary: string
  tags: string[]
  status: "live" | "wip" | "archived"
}

/** Placeholder data — replace with backend fetch later */
export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Campus Connect",
    summary:
      "A student portal for schedules, announcements, and peer collaboration.",
    tags: ["Next.js", "Postgres", "Auth"],
    status: "live",
  },
  {
    id: "2",
    title: "Pulse Analytics",
    summary:
      "Lightweight dashboard for product metrics with cheerful empty states.",
    tags: ["React", "Charts", "API"],
    status: "wip",
  },
  {
    id: "3",
    title: "Mailcraft",
    summary: "Transactional email templates with preview and version history.",
    tags: ["TypeScript", "Design system"],
    status: "live",
  },
  {
    id: "4",
    title: "Shelf",
    summary: "Personal reading list with tags, notes, and progress tracking.",
    tags: ["Full-stack", "UI"],
    status: "archived",
  },
]
