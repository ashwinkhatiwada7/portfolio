import type { Metadata } from "next";

import { HashRedirect } from "@/app/(frontend)/_components/hash-redirect";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return <HashRedirect hash="contact" />;
}
