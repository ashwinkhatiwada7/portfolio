"use client";

import { createRef, useRef, type CSSProperties, type RefObject } from "react";
import Image from "next/image";

import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import { siteBrand } from "@/lib/nav-links";

const techStack = [
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Better Auth", icon: "/icons/better-auth.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "PostgreSQL", icon: "/icons/pgsql.svg" },
  { name: "Shadcn UI", icon: "/icons/shadcn-ui.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "AWS", icon: "/icons/aws.svg" },
] as const;

function getNodePosition(index: number, total: number, radiusPercent = 36) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;

  return {
    left: `${50 + radiusPercent * Math.cos(angle)}%`,
    top: `${50 + radiusPercent * Math.sin(angle)}%`,
    transform: "translate(-50%, -50%)",
  } satisfies CSSProperties;
}

function Circle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex size-11 items-center justify-center rounded-full border border-border bg-card shadow-sm sm:size-16",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function TechStackBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<RefObject<HTMLDivElement | null>[]>(
    techStack.map(() => createRef<HTMLDivElement>()),
  );

  return (
    <div
      ref={containerRef}
      className="relative aspect-square w-full max-w-[min(100%,22rem)] overflow-hidden rounded-xl border border-border/60 bg-card/50 sm:max-w-104"
      aria-label="Tech stack"
    >
      <div
        ref={centerRef}
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <Circle className="size-14 text-xs font-semibold sm:size-16 sm:text-sm">
          {siteBrand.shortName}
        </Circle>
      </div>

      {techStack.map((tech, index) => (
        <div
          key={tech.name}
          ref={nodeRefs.current[index]}
          className="absolute z-10"
          style={getNodePosition(index, techStack.length)}
        >
          <Circle>
            <Image
              src={tech.icon}
              alt={tech.name}
              width={20}
              height={20}
              className="size-8 object-contain"
            />
          </Circle>
        </div>
      ))}

      {techStack.map((tech, index) => (
        <AnimatedBeam
          key={`beam-${tech.name}`}
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={nodeRefs.current[index]}
          curvature={index % 2 === 0 ? -30 : 30}
          delay={index * 0.12}
          reverse={index % 3 === 0}
          pathColor="var(--border)"
          gradientStartColor="var(--primary)"
          gradientStopColor="var(--chart-2)"
        />
      ))}
    </div>
  );
}
