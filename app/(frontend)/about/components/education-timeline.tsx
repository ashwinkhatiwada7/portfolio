"use client";

import { motion } from "framer-motion";

import { education } from "@/app/(frontend)/about/lib/education";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
};

export function EducationTimeline() {
  return (
    <motion.section {...fadeUp} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Studies</h2>
        <p className="text-sm text-muted-foreground">
          From schooling through college — and where I am now.
        </p>
      </div>
      <ol className="relative flex flex-col border-l border-border pl-6">
        {education.map((item) => (
          <li key={item.stage} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[1.6rem] top-1 size-3 rounded-full border-2 border-background bg-primary" />
            <p className="text-xs font-medium uppercase tracking-wide text-primary">
              {item.stage}
            </p>
            <p className="mt-1 font-medium text-foreground">{item.place}</p>
            <p className="mt-1 font-medium text-foreground">{item.college}</p>
            <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
          </li>
        ))}
      </ol>
    </motion.section>
  );
}
