import Link from "next/link";
import Image from "next/image";

export function NavLogo() {
  return (
    <Link
      href="/#home"
      className="font-sans text-base font-semibold tracking-tight text-foreground flex items-center gap-2 flex-row"
    >
      <div className=" h-13 w-13 overflow-hidden rounded-full">
        <Image src="/profile.png" alt="Profile" width={80} height={80} />
      </div>

      <span className="text-primary md:hidden lg:block "> Ashwin.</span>
    </Link>
  );
}
