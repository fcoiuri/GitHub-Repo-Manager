import fullDate from '@/utils/date';
import { fetchGitHubRepos, fetchStarredRepos } from '@/app/api';
import { RepoType, RepoTypeElement } from '@/schemas/githubSchema';
import FavoriteButton from '@/components/FavoriteButton';

interface RepoContainerProps {
  username: string;
  onlyFavorites?: boolean;
}

const RepoContainer = async ({
  username,
  onlyFavorites = false,
}: RepoContainerProps) => {
  let repos: RepoType = [];
  let starredRepos: RepoType = [];
  let allColors = [];

  try {
    repos = onlyFavorites
      ? await fetchStarredRepos()
      : await fetchGitHubRepos(username);

    const colorsRes = await fetch(
      'https://raw.githubusercontent.com/ozh/github-colors/master/colors.json'
    );

    allColors = await colorsRes.json();

    starredRepos = await fetchStarredRepos();
  } catch (error: unknown) {
    console.error('Error fetching repositories:', error);
    repos = [];
  }

  const starredReposArray: RepoTypeElement[] = starredRepos ?? [];

  const starredSet = new Set<string>(
    starredReposArray.map((repo) => repo.full_name ?? '')
  );

  const reposWithStarred = (repos ?? []).flat().map((repo) => ({
    ...repo,
    isStarred: starredSet.has(repo?.full_name ?? ''),
  }));

  const finalRepos = onlyFavorites
    ? reposWithStarred.filter((repo) => repo.isStarred)
    : reposWithStarred;

  return (
    <div className="mt-4 w-full flex flex-col gap-3">
      {finalRepos.length >= 1 &&
        finalRepos.map((repo) => (
          <div
            key={repo.id}
            className="border-2 border-[#E3E6E9] p-3 flex flex-col gap-1 lg:gap-0"
          >
            <div className="flex justify-between font-semibold text-lg text-[#616161]">
              <div>{repo.name}</div>
              <div className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer">
                <FavoriteButton
                  repoFullName={repo?.full_name ?? ''}
                  initialStatus={repo.isStarred}
                />
              </div>
            </div>

            <div className="font-normal text-sm text-[#8C8C8C]">
              {repo.description}
            </div>

            <div className="flex lg:flex-row flex-col gap-2 lg:gap-6 text-[#616161] text-xs font-normal mt-3">
              <div
                className="flex gap-2 items-center"
                style={{ display: repo.language ? 'flex' : 'none' }}
              >
                <div
                  className="w-[16px] h-[16px] rounded-full"
                  style={{
                    backgroundColor:
                      allColors[repo.language ?? 'JavaScript']?.color ?? '#fff',
                  }}
                />
                {repo.language}
              </div>

              <div>Atualizado em {fullDate(repo?.updated_at ?? '')}</div>
            </div>
          </div>
        ))}

      {finalRepos.length < 1 && (
        <div className="text-center font-semibold text-lg text-[#616161]">
          Este usuário não tem nenhum repositório ou você ainda não favoritou
          nenhum repositório.
        </div>
      )}
    </div>
  );
};

export default RepoContainer;
