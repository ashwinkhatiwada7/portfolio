import type { Metadata } from "next";

import { GithubSectionLoader } from "./components/github-section-loader";
import { Suspense } from "react";
import { GithubSectionSkeleton } from "./components/github-section-skeleton";

export const metadata: Metadata = {
  title: "GitHub",
};

export default function GithubPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-16 sm:px-6">
      <Suspense fallback={<GithubSectionSkeleton />}>
        <GithubSectionLoader />
      </Suspense>
    </div>
  );
}
