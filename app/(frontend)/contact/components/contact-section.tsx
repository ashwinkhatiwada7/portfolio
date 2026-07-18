"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { ContactChannels } from "./contact-channels";
import { ContactForm } from "./forms/contact-form";



export function ContactSection() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col gap-3"
      >
        <Badge variant="secondary" className="w-fit">
          Contact
        </Badge>
        <h2 className="font-sans text-3xl font-semibold tracking-tight sm:text-4xl">
          Let&apos;s build something
        </h2>
        <p className="max-w-xl text-muted-foreground">
          Prefer a direct line? Reach out through any channel below — or send a
          note with the form.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <ContactChannels />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}
