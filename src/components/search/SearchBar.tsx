import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  blurScreenState,
  capabilityID,
  searchState,
} from "../../States/States";
import {
  EscIcon,
  MagnifyingGlassIcon,
} from "../template/ButtonsAndIcons";

const SearchBar = () => {
  const setSearch = useSetRecoilState(searchState);
  const resetID = useResetRecoilState(capabilityID);
  const [blur, setBlur] = useRecoilState(blurScreenState);
  return (
    <main className="flex text-secondary pb-2">
      <MagnifyingGlassIcon className="mr-3" />
      <input
        autoCorrect="off"
        autoComplete="off"
        autoFocus
        className="text-secondary bg-white w-full focus:outline-none"
        id="search_result"
        placeholder="ค้นหาคณะ / สาขา"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setBlur(!blur);
          resetID();
        }}
        id="escapeKey"
      >
        <EscIcon />
      </button>
    </main>
  );
};
export default SearchBar;
