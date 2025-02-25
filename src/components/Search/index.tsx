import SearchIcon from '@/assets/icons/search.svg';

const Search = () => {
  return (
    <form action={'/users'} className="relative w-full">
      <input
        type="text"
        name="username"
        id="search-users"
        className="w-full p-4 my-5 text-sm placeholder-[#8C8C8C] text-[#4E4E4E] border border-[#E3E6E9] rounded-lg focus:outline-none focus:border-[#32C0C6] focus:ring-0"
        placeholder="Buscar usuário"
        required
        aria-label="Buscar usuário"
      />
      <button
        type="submit"
        className="absolute inset-y-0 end-0 flex items-center pe-3"
        aria-label="Buscar"
      >
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
