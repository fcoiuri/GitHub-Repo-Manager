import {
  repoSchema,
  RepoType,
  userSchema,
  UserType,
} from '@/schemas/githubSchema';

export const fetchGitHubUser = async (username: string): Promise<UserType> => {
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${githubToken}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching user: ${response.status}`);
  }

  const data = await response.json();
  return userSchema.parse(data);
};

export const fetchGitHubRepos = async (username: string): Promise<RepoType> => {
  const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: {
        Authorization: `token ${githubToken}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error fetching repositories: ${response.status}`);
  }

  const data = await response.json();
  return repoSchema.parse(data);
};

export const fetchStarredRepos = async (): Promise<RepoType> => {
  const res = await fetch('https://api.github.com/user/starred', {
    headers: {
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });
  if (!res.ok) {
    throw new Error(`Error fetching starred repos: ${res.status}`);
  }

  const data = await res.json();
  return repoSchema.parse(data);
};

export async function fetchUserStarredRepos(
  username: string
): Promise<RepoType> {
  const res = await fetch(`https://api.github.com/users/${username}/starred`, {
    headers: {
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });
  if (!res.ok) {
    throw new Error(`Error fetching starred repos: ${res.status}`);
  }

  const data = await res.json();
  return repoSchema.parse(data);
}
