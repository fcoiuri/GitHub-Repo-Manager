import { FavoritedSVG, UserSVG } from '@/assets';
import Link from 'next/link';

const MobileNavBar = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full grid-cols-2 grid">
      <Link
        href="/"
        className="bg-[#32C0C6] flex justify-center items-center py-5"
        aria-label="Página Inicial"
      >
        <UserSVG data-testid="user-icon" />
      </Link>
      <Link
        href="/favorites"
        className="py-5 flex justify-center items-center bg-white"
        aria-label="Favoritos"
      >
        <FavoritedSVG
          data-testid="favorites-icon"
          style={{
            filter:
              'invert(58%) sepia(0%) saturate(171%) hue-rotate(246deg) brightness(97%) contrast(80%)',
            width: '20px',
            height: '25px',
          }}
        />
      </Link>
    </nav>
  );
};

export default MobileNavBar;
