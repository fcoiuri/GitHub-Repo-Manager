import { redirect } from 'next/navigation';

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ username?: string }>;
}) {
  const { username } = await searchParams;
  redirect(`/users/${username}`);
}
