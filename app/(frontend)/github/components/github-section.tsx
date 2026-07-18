"use client"

import { motion } from "framer-motion"
import {
  ArrowUpRightIcon,
  BookMarkedIcon,
  GitForkIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react"

import {
  formatGithubStat,
  type GithubDashboard,
  type GithubStat,
} from "@/app/(frontend)/github/lib/github"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.35 },
}

const statIcons = {
  repositories: BookMarkedIcon,
  stars: StarIcon,
  followers: UsersIcon,
} satisfies Record<GithubStat["key"], typeof StarIcon>

type GithubSectionProps = {
  data: GithubDashboard
}

export function GithubSection({ data }: GithubSectionProps) {
  const { profile, stats, repos, isFallback } = data
  const initials = profile.username.slice(0, 2).toUpperCase()

  return (
    <motion.section {...fadeUp} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Badge variant="secondary" className="w-fit">
          GitHub
        </Badge>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Open source &amp; side projects
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Live stats and pinned repositories from GitHub
          {isFallback ? " (showing fallback — check env vars or API limits)." : "."}
        </p>
      </div>

      <Card className="overflow-hidden shadow-sm">
        <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar size="lg" className="size-14">
              {profile.avatarUrl ? (
                <AvatarImage src={profile.avatarUrl} alt={profile.username} />
              ) : null}
              <AvatarFallback className="font-mono text-sm">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-base font-semibold">
                @{profile.username}
              </p>
              <p className="text-sm text-muted-foreground">
                Building in public on GitHub
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            nativeButton={false}
            render={
              <a
                href={profile.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            View profile
            <ArrowUpRightIcon data-icon="inline-end" />
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = statIcons[stat.key]

          return (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between gap-2 pb-2">
                  <CardDescription>{stat.label}</CardDescription>
                  <Icon className="size-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-3xl font-semibold tracking-tight">
                    {formatGithubStat(stat.value)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <Separator />

      {repos.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <a
                href={repo.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="flex h-full flex-col shadow-sm transition-shadow hover:shadow-md">
                  <CardHeader className="gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle className="font-mono text-base">
                        {repo.name}
                      </CardTitle>
                      <ArrowUpRightIcon className="size-4 shrink-0 text-muted-foreground" />
                    </div>
                    <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                      {repo.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto flex flex-wrap items-center gap-2">
                    {repo.language ? (
                      <Badge variant="secondary">{repo.language}</Badge>
                    ) : null}
                    <Badge variant="outline" className="gap-1">
                      <StarIcon className="size-3" />
                      {repo.stars}
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <GitForkIcon className="size-3" />
                      {repo.forks}
                    </Badge>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      ) : (
        <Card className="border-dashed shadow-sm">
          <CardContent className="p-6 text-sm text-muted-foreground">
            No public repositories to show yet.
          </CardContent>
        </Card>
      )}
    </motion.section>
  )
}
