import { redirect } from 'next/navigation';

export default function UsersPage({
  searchParams,
}: {
  searchParams: { username?: string };
}) {
  const { username } = searchParams;

  redirect(`/users/${username}`);
}
