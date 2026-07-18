import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function GithubSectionSkeleton() {
  return (
    <section className="flex flex-col gap-6" aria-label="Loading GitHub section">
      <div className="flex flex-col gap-2">
        <div className="h-7 w-24 animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-full max-w-md animate-pulse rounded-md bg-muted" />
      </div>

      <Card className="shadow-sm">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="size-14 animate-pulse rounded-full bg-muted" />
          <div className="flex flex-1 flex-col gap-2">
            <div className="h-5 w-32 animate-pulse rounded-md bg-muted" />
            <div className="h-4 w-48 animate-pulse rounded-md bg-muted" />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="shadow-sm">
            <CardHeader className="pb-2">
              <div className="h-4 w-20 animate-pulse rounded-md bg-muted" />
            </CardHeader>
            <CardContent>
              <div className="h-8 w-16 animate-pulse rounded-md bg-muted" />
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="h-40 animate-pulse bg-muted/40 shadow-sm" />
        ))}
      </div>
    </section>
  )
}
