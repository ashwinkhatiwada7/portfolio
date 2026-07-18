import { GlobeIcon, LinkIcon, MailIcon } from "lucide-react";

import { siteBrand } from "@/lib/nav-links";

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ashwinkhatiwada7",
    icon: GlobeIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashwinkhatiwada7/",
    icon: LinkIcon,
  },
  { label: "X / Twitter", href: "https://x.com", icon: LinkIcon },
  { label: "Email", href: `mailto:${siteBrand.email}`, icon: MailIcon },
] as const;
