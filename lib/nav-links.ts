import {
  House,
  User,
  GitBranch,
  MonitorCloud,
  BookOpenText,
  Phone,
} from "lucide-react";
export const navLinks = [
  { href: "/#home", label: "Home", icon: House },
  { href: "/#about", label: "About", icon: User },
  { href: "/github", label: "GitHub", icon: GitBranch },
  { href: "/projects", label: "Projects", icon: MonitorCloud },
  { href: "/blog", label: "Blog", icon: BookOpenText },
  { href: "/#contact", label: "Contact", icon: Phone },
] as const;

export const siteBrand = {
  name: "Ashwin Khatiwada",
  shortName: "Ashwin",
  role: "Full-stack developer",
  tagline:
    "I ship clean UIs, sturdy APIs, and the occasional dad joke in a commit message.",
  funnyQuote:
    "I don't always test my code — but when I do, I do it in production.",
  email: "ashwinkhatiwada555@gmail.com",
  location: "Biratnagar, Nepal",
} as const;

export function getNavHash(href: string) {
  if (!href.includes("#")) return null;
  return href.split("#")[1] ?? null;
}
