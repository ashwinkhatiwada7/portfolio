import { AboutIntro } from "@/app/(frontend)/about/components/about-intro"
import { EducationTimeline } from "@/app/(frontend)/about/components/education-timeline"
import { SocialLinks } from "@/app/(frontend)/about/components/social-links"

export function AboutContent() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6">
      <AboutIntro />
      <EducationTimeline />
      <SocialLinks />
    </div>
  )
}
