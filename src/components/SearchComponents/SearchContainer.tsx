import { useState } from "react";
import "../../styles/scrollwheel.css";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";

const SearchContainer = () => {
  const [searchResult, setSearchResult] = useState("");
  const getSearch = (value: string) => {
    setSearchResult(value);
  };
  return (
    <div className="px-5 w-screen h-screen absolute">
      <div
        className="hidden p-3 max-w-2xl min-w-fit fixed z-10 bg-white shadow-xl left-1/2 -translate-x-1/2 translate-y-5 rounded-lg"
        id="FacultySearch"
      >
        <SearchBar returnSearch={getSearch} />
        <SearchResults receiveSearch={searchResult} />
      </div>
    </div>
  );
};



export default SearchContainer;
