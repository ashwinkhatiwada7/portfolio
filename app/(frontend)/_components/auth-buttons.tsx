"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function AuthButton({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Link href="/login">
        <Button variant="default" size="sm" className="w-full sm:w-auto">
          Login
        </Button>
      </Link>
    </div>
  );
}
