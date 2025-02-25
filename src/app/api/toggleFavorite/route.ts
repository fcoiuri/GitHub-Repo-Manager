import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const repo = searchParams.get('repo');
  const currentStatus = searchParams.get('currentStatus');

  if (!repo || currentStatus === null) {
    return NextResponse.json(
      { error: 'repo and currentStatus are required' },
      { status: 400 }
    );
  }

  const method = currentStatus === 'true' ? 'DELETE' : 'PUT';
  const githubApiUrl = `https://api.github.com/user/starred/${repo}`;

  const res = await fetch(githubApiUrl, {
    method,
    headers: {
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });

  if (res.status === 204 || res.status === 304) {
    return NextResponse.redirect(request.headers.get('referer') || '/');
  } else {
    return NextResponse.json(
      { error: 'GitHub API error' },
      { status: res.status }
    );
  }
}
