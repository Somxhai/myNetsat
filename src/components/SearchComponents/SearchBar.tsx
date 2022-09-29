import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { blurScreenState, capabilityID, searchState } from "../States/States";
import { CloseIcon } from "../Template/Buttons";

const SearchBar = () => {
  const setSearch = useSetRecoilState(searchState)
  const resetID = useResetRecoilState(capabilityID)
  const [blur, setBlur] = useRecoilState(blurScreenState);
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
            setSearch(e.target.value);
          }}
        />
        <button
          onClick={()=> {
            setBlur(!blur)
            resetID()
          }
          }
          id="escapeKey"
        >
          <CloseIcon />
        </button>
      </div>
    );
  };
  export default SearchBar