import { getGitHubDashboard } from "@/app/(frontend)/github/lib/github-api";
import { GithubSection } from "@/app/(frontend)/github/components/github-section";

export async function GithubSectionLoader() {
  const data = await getGitHubDashboard();
  return <GithubSection data={data} />;
}
