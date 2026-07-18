export type GithubRepo = {
  name: string
  description: string
  htmlUrl: string
  stars: number
  forks: number
  language: string | null
}

export type GithubStat = {
  key: "repositories" | "stars" | "followers"
  label: string
  value: number
}

export type GithubProfile = {
  username: string
  avatarUrl: string
  profileUrl: string
  publicRepos: number
  followers: number
  totalStars: number
}

export type GithubDashboard = {
  profile: GithubProfile
  stats: GithubStat[]
  repos: GithubRepo[]
  isFallback: boolean
}

export function formatGithubStat(value: number): string {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(value >= 10000 ? 0 : 1)}k`
  }
  return String(value)
}

export function getFallbackGithubDashboard(username = "github"): GithubDashboard {
  return {
    isFallback: true,
    profile: {
      username,
      avatarUrl: "",
      profileUrl: `https://github.com/${username}`,
      publicRepos: 0,
      followers: 0,
      totalStars: 0,
    },
    stats: [
      { key: "repositories", label: "Repositories", value: 0 },
      { key: "stars", label: "Stars", value: 0 },
      { key: "followers", label: "Followers", value: 0 },
    ],
    repos: [],
  }
}
