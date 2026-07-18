import {
  getFallbackGithubDashboard,
  type GithubDashboard,
  type GithubRepo,
} from "@/app/(frontend)/github/lib/github";
import { cacheLife, cacheTag } from "next/cache";

const GITHUB_API_URL = "https://api.github.com";

type GitHubUserResponse = {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
};

type GitHubRepoResponse = {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
};

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

function getUsername() {
  return process.env.GITHUB_USERNAME?.trim() ?? "";
}

async function getGitHubProfile(username: string) {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}`, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error(`GitHub profile request failed: ${response.status}`);
  }

  return response.json() as Promise<GitHubUserResponse>;
}

async function getGitHubRepositories(username: string) {
  const response = await fetch(
    `${GITHUB_API_URL}/users/${username}/repos?sort=stars&per_page=100&type=owner`,
    {
      headers: getHeaders(),
    },
  );

  if (!response.ok) {
    throw new Error(`GitHub repositories request failed: ${response.status}`);
  }

  return response.json() as Promise<GitHubRepoResponse[]>;
}

function mapRepositories(repositories: GitHubRepoResponse[]): GithubRepo[] {
  return repositories
    .filter((repository) => !repository.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)
    .map((repository) => ({
      name: repository.name,
      description: repository.description ?? "No description provided.",
      htmlUrl: repository.html_url,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
      language: repository.language,
    }));
}

export async function getGitHubDashboard(): Promise<GithubDashboard> {
  "use cache";
  cacheTag("git-hubdashboard");
  cacheLife("hours");
  const username = getUsername();

  if (!username) {
    return getFallbackGithubDashboard();
  }

  try {
    const [profile, repositories] = await Promise.all([
      getGitHubProfile(username),
      getGitHubRepositories(username),
    ]);

    const repos = mapRepositories(repositories);
    const totalStars = repositories.reduce(
      (sum, repository) => sum + repository.stargazers_count,
      0,
    );

    return {
      isFallback: false,
      profile: {
        username: profile.login,
        avatarUrl: profile.avatar_url,
        profileUrl: profile.html_url,
        publicRepos: profile.public_repos,
        followers: profile.followers,
        totalStars,
      },
      stats: [
        {
          key: "repositories",
          label: "Repositories",
          value: profile.public_repos,
        },
        { key: "stars", label: "Stars", value: totalStars },
        { key: "followers", label: "Followers", value: profile.followers },
      ],
      repos,
    };
  } catch {
    return getFallbackGithubDashboard(username);
  }
}
