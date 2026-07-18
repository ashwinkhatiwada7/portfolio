import { AboutContent } from "@/app/(frontend)/about/components/about-content";
import { ContactSection } from "@/app/(frontend)/contact/components/contact-section";
import { HeroSection } from "@/components/home/components/hero-section";
import { ScrollToHash } from "./scroll-to-hash";

export function HomePageSections() {
  return (
    <>
      <ScrollToHash />
      <HeroSection />
      <section
        id="about"
        aria-label="About"
        className="scroll-mt-14 border-t border-border"
      >
        <AboutContent />
      </section>
      <section
        id="contact"
        aria-label="Contact"
        className="scroll-mt-14 border-t border-border bg-muted/20"
      >
        <ContactSection />
      </section>
    </>
  );
}
