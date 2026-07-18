"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
// Magic UI — pixel reveal portrait + typing role animation
import { PixelImage } from "@/components/magicui/pixel-image";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { siteBrand } from "@/lib/nav-links";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-label="Home"
      className="relative isolate min-h-[calc(100dvh-3.5rem)] scroll-mt-14 overflow-hidden bg-background"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 size-[28rem] rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-0 size-[24rem] rounded-full bg-accent/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <div className="relative mx-auto grid min-h-[calc(100dvh-3.5rem)] w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-0">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="min-h-7 text-sm font-medium text-primary"
          >
            <TypingAnimation
              words={[
                "Nextjs Full Stack Developer",
                "What I Knows?",
                "HTML, CSS",
                "React, NextJs",
                "Tailwind CSS, Shadcn UI",
                "TypeScript, JavaScript",
                "Git, GitHub",
                "SQL, NoSQL",
              ]}
              loop
              className="text-sm font-medium text-primary"
              typeSpeed={70}
              deleteSpeed={40}
              pauseDelay={1800}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="max-w-xl font-sans text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {siteBrand.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {siteBrand.tagline}
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="max-w-lg border-l-2 border-primary pl-4 font-mono text-sm text-muted-foreground"
          >
            “{siteBrand.funnyQuote}”
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/projects" />}
            >
              View projects
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/#contact" />}
            >
              Get in touch
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="flex w-full justify-center lg:justify-end"
        >
          <PixelImage src="/profile.png" grid="8x8" grayscaleAnimation />
        </motion.div>
      </div>
    </section>
  );
}
