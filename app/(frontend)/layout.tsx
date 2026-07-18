import { SiteFooter } from "./_components/site-footer";
import { SiteNavbar } from "./_components/site-navbar";

// Magic UI — scroll progress indicator
import { ScrollProgress } from "@/components/magicui/scroll-progress";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <ScrollProgress />
      <SiteNavbar />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
