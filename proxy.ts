import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";
export async function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/projects"],
};
