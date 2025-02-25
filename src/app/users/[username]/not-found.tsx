import UserNotFound from '@/assets/icons/userNotFound.svg';
import Search from '@/components/Search';
import Title from '@/components/Title';

interface NotFoundProps {
  username: string;
}
const NotFound = ({ username }: NotFoundProps) => {
  return (
    <div className="lg:items-center lg:justify-center flex w-full px-4 lg:px-0  mt-8 lg:mt-0">
      <div className="flex flex-col text-[#616161] items-center">
        <div className="w-full lg:hidden">
          <Search />
        </div>
        <div className="mt-4 lg:mt-0 text-center">
          <Title label={`"${username}"`} />
          <div className="font-semibold lg:text-[21px] text-lg">
            Nenhum usuário encontrado
          </div>
          <div className="font-medium lg:text-base text-[13px] ">
            Verifique se a escrita está correta ou tente novamente
          </div>
          <UserNotFound
            className="mt-12 lg:flex hidden"
            data-testid="user-not-found-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
