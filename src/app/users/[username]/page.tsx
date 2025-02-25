import React from 'react';
import NotFound from './not-found';
import Image from 'next/image';
import Title from '@/components/Title';
import RepoContainer from '@/components/RepoContainer';
import { fetchGitHubUser } from '@/app/api';
import Search from '@/components/Search';

export default async function UserPage(props: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await props.params;

  let user;

  try {
    user = await fetchGitHubUser(username);
  } catch (error: unknown) {
    if (error instanceof Error && error.message.includes('404')) {
      return <NotFound username={username} />;
    }
    throw error;
  }

  return (
    <div className="block lg:grid grid-cols-12 lg:gap-12 w-full mx-2 lg:mx-4 mt-3 lg:mt-0">
      <div className="lg:hidden col-span-12 ">
        <Search />
      </div>
      <div className="lg:col-span-4 col-span-12 ">
        {/* <div className="lg:mt-4 border-2 border-[#E3E6E9] rounded-lg lg:rounded-sm w-full lg:justify-center flex flex-col text-[#4E4E4E] text-sm font-normal lg:items-center px-4 lg:px-0"> */}
        <div className="lg:mt-4 border-2 border-[#E3E6E9] rounded-lg lg:rounded-sm w-full lg:justify-center flex flex-col text-[#4E4E4E] text-sm font-normal lg:items-center px-4 lg:px-0">
          <div className="lg:text-center flex lg:flex-col">
            <Image
              src={user.avatar_url}
              alt={user.name ?? 'Imagem do perfil'}
              width={0}
              height={0}
              sizes="100vw"
              className="lg:mt-8 mt-4 rounded-[50%] lg:w-[200px] lg:h-[200px] w-[75px] h-[75px]"
            />

            <div className="flex items-center flex-col justify-center">
              <div className="mt-5 text-[21px] font-semibold text-[#616161]">
                {user.name}
              </div>

              <div className="">@{user.login}</div>
            </div>
          </div>

          <hr className="lg:hidden h-px my-3 bg-[#E3E6E9] border-1 w-full" />
          <div className="lg:mt-4 mb-6">{user.bio}</div>
        </div>
      </div>
      <div className="lg:col-span-8 col-span-12">
        <div className="mt-5">
          <Title label="Repositórios" />
        </div>
        <RepoContainer username={username} />
      </div>
    </div>
  );
}
