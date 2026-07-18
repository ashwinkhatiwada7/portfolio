export type BlogPost = {
  id: string
  title: string
  excerpt: string
  date: string
  readingMinutes: number
}

export const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Why I colocate features in Next.js",
    excerpt:
      "Keeping routes thin and modules fat has saved me from spaghetti imports more than once.",
    date: "2026-06-12",
    readingMinutes: 5,
  },
  {
    id: "2",
    title: "Design tokens beat hex codes",
    excerpt:
      "Semantic colors make dark mode and redesigns feel like configuration, not archaeology.",
    date: "2026-05-02",
    readingMinutes: 4,
  },
  {
    id: "3",
    title: "Motion with restraint",
    excerpt:
      "Two or three purposeful animations beat a page that never sits still.",
    date: "2026-03-18",
    readingMinutes: 3,
  },
]
