export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="border-b border-border px-4 py-3">
        <p className="text-sm font-medium tracking-tight">Admin</p>
      </header>
      <div className="p-4">{children}</div>
    </div>
  )
}
