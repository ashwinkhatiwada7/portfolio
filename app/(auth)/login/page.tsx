import type { Metadata } from "next";

import { LoginForm } from "@/app/(auth)/components/forms/login-form";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Login",
};

async function LoginGuard() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session) {
    return redirect("/");
  }
  return <LoginForm />;
}

export default async function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <Loader2 className="w-4 h-4 animate-spin" />
        </div>
      }
    >
      <LoginGuard />
    </Suspense>
  );
}
