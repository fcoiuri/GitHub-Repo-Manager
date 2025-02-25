/**
 * @jest-environment node
 */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import UserPage from '@/app/users/[username]/page';
import { fetchGitHubUser } from '@/app/api';

jest.mock('@/app/api', () => ({
  fetchGitHubUser: jest.fn(),
}));

jest.mock('@/components/RepoContainer', () => ({
  __esModule: true,
  default: () => <div data-testid="repo-container" />,
}));

jest.mock('@/components/Title', () => ({
  __esModule: true,
  default: ({ label }: { label: string }) => (
    <h1 data-testid="title">{label}</h1>
  ),
}));

jest.mock('next/image', () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const NextImage = (props: any) => <img {...props} alt="test" />;
  NextImage.displayName = 'NextImage';
  return NextImage;
});

describe('UsersPage', () => {
  it('should render user profile and repo container correctly', async () => {
    const fakeUser = {
      avatar_url: 'https://example.com/avatar.png',
      name: 'Test User',
      login: 'testuser',
      bio: 'This is a test bio',
    };

    (fetchGitHubUser as jest.Mock).mockResolvedValue(fakeUser);

    const props = { params: Promise.resolve({ username: 'testuser' }) };
    const element = await UserPage(props);
    const html = renderToStaticMarkup(element);

    expect(html).toContain('https://example.com/avatar.png');
    expect(html).toContain('Test User');
    expect(html).toContain('@testuser');
    expect(html).toContain('This is a test bio');

    expect(html).toContain('Repositórios');

    expect(html).toContain('data-testid="repo-container"');
  });
});
