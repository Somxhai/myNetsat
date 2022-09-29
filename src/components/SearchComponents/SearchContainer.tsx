import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import PanelTemplate from "../Template/PanelTemplate";

const SearchContainer = () => {
  return (
    <PanelTemplate id="searchContainer">
      <SearchBar />
      <SearchResults />
    </PanelTemplate>
  );
};

export default SearchContainer;
