"use client";

import { motion } from "framer-motion";

import { socials } from "@/app/(frontend)/about/lib/socials";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

export function SocialLinks() {
  return (
    <motion.section {...fadeUp} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Social</h2>
        <p className="text-sm text-muted-foreground">
          Find me where the internet is least chaotic.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <social.icon className="size-4" />
            {social.label}
          </a>
        ))}
      </div>
    </motion.section>
  );
}
