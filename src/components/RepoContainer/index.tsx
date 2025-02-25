import fullDate from '@/utils/date';
import Favorite from '@/assets/icons/favorite.svg';
import Favorited from '@/assets/icons/favorited.svg';
import { fetchGitHubRepos, fetchStarredRepos } from '@/app/api';
import { RepoType, RepoTypeElement } from '@/schemas/githubSchema';

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
                <form
                  method="POST"
                  action={`/api/toggleFavorite?repo=${encodeURIComponent(
                    repo?.full_name ?? ''
                  )}&currentStatus=${repo.isStarred}`}
                >
                  <button
                    type="submit"
                    aria-label={
                      repo.isStarred
                        ? 'Remover repositório'
                        : 'Favoritar repositório'
                    }
                  >
                    {repo.isStarred ? (
                      <div className="flex justify-center items-center border-[1px] border-[#32C0C6] w-[40px] h-[40px] rounded-full">
                        <Favorited />
                      </div>
                    ) : (
                      <div className="flex justify-center items-center bg-[#F3F3F5] w-[40px] h-[40px] rounded-full">
                        <Favorite />
                      </div>
                    )}
                  </button>
                </form>
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
          Você ainda não favoritou nenhum repositório.
        </div>
      )}
    </div>
  );
};

export default RepoContainer;
