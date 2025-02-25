import { HomePageSVG } from '@/assets';
import Search from '@/components/Search';

export default function Home() {
  return (
    <div className="lg:items-center lg:justify-center flex w-full px-4 lg:px-0 mt-8 lg:mt-0">
      <div className="flex flex-col text-[#616161] lg:items-center gap-2 lg:gap-0">
        <div className="font-semibold text-[21px]">
          Procure pelo Nome ou Nome de Usuário
        </div>
        <div className="font-medium text-base">
          Encontre os repositórios de algum usuário digitando no campo acima
        </div>
        <div className="lg:hidden w-full">
          <Search />
        </div>
        <HomePageSVG
          className="mt-12 hidden lg:flex"
          data-testid="home-page-icon"
        />
      </div>
    </div>
  );
}
