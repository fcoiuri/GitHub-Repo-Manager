import RepoContainer from '@/components/RepoContainer';
import Title from '@/components/Title';

const Favorites = async () => {
  return (
    <div className="flex justify-center items-center w-full flex-col  lg:mx-0 mx-2">
      <div className="lg:w-1/2">
        <div className="mt-8 lg:mt-4 lg:text-center">
          <Title label="Meus favoritos" />
        </div>
        <RepoContainer username={''} onlyFavorites />
      </div>
    </div>
  );
};

export default Favorites;
