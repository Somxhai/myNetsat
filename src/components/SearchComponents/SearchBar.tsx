import { blurScreen } from "../../features/SearchFacultyFeatures";

const SearchBar = ({ returnSearch }: any) => {
    return (
      <div className="flex text-secondary pb-2">
        <div className="mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          autoCorrect="false"
          autoFocus
          className="text-secondary bg-white w-full focus:outline-none"
          id="search_result"
          placeholder="ค้นหาคณะ / สาขา"
          onChange={(e) => {
            returnSearch(e.target.value);
          }}
        />
        <button
          onClick={blurScreen}
          className="text-xs border-2 p-1 rounded-lg z-20 hover:border-red-400"
          id="escapeKey"
        >
          ESC
        </button>
      </div>
    );
  };
  export default SearchBar