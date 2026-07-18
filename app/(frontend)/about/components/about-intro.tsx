"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { siteBrand } from "@/lib/nav-links";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

export function AboutIntro() {
  return (
    <motion.section {...fadeUp} className="flex flex-col gap-4">
      <Badge variant="secondary" className="w-fit">
        About
      </Badge>
      <h2 className="max-w-2xl font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
        Building products people enjoy opening twice.
      </h2>
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
        I&apos;m {siteBrand.name}, a {siteBrand.role.toLowerCase()} based in{" "}
        {siteBrand.location}. I care about clear interfaces, reliable backends,
        and shipping work that still feels good months later.
      </p>
    </motion.section>
  );
}
