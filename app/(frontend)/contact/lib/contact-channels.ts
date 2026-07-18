import { MailIcon, MapPinIcon, MessageCircleIcon } from "lucide-react";

import { siteBrand } from "@/lib/nav-links";

export const contactChannels = [
  {
    title: "Email",
    detail: siteBrand.email,
    href: `mailto:${siteBrand.email}` as string | undefined,
    icon: MailIcon,
  },
  {
    title: "Based in",
    detail: siteBrand.location,
    href: undefined as string | undefined,
    icon: MapPinIcon,
  },
  {
    title: "Say hello",
    detail: "Open to collabs, internships, and weird side quests.",
    href: undefined as string | undefined,
    icon: MessageCircleIcon,
  },
] as const;
