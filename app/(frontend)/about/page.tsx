import type { Metadata } from "next"

import { HashRedirect } from "@/app/(frontend)/_components/hash-redirect"

export const metadata: Metadata = {
  title: "About",
}

export default function AboutPage() {
  return <HashRedirect hash="about" />
}
