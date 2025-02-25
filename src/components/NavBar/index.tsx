import Heart from '@/assets/icons/heart.svg';
import Link from 'next/link';
import Search from '../Search';

const NavBar = () => {
  return (
    <nav className="bg-white border-b-2 border-[#E3E6E9] w-full relative lg:flex justify-between pl-5 gap-4 hidden">
      <div className="lg:w-1/2 w-2/3">
        <Search />
      </div>
      <Link
        href="/favorites"
        className="xl:w-1/12 lg:w-2/12 sm:w-1/6 w-2/6 bg-[#32C0C6] hover:bg-[#329599] flex gap-x-3 justify-center 
          items-center text-sm text-white font-medium cursor-pointer"
        aria-label="Favoritos"
      >
        <Heart data-testid="heart-icon" />
        <div className="font-medium">Favoritos</div>
      </Link>
    </nav>
  );
};

export default NavBar;
