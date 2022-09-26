import { useEffect, useState } from "react";

import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import { useRecoilState, useResetRecoilState } from "recoil";
import { capabilityState } from "../States/CapabilityState";
import { useHotkeys } from "react-hotkeys-hook";
import { blurScreen } from "../../features/EssentialFeatures";

const SearchContainer = () => {
  const [capabilityId, setCapabilityId] = useRecoilState(capabilityState);
  const searchContainer = document.getElementById("searchContainer")
  useEffect(()=>{
    if (searchContainer == null) return;
    if (capabilityId.includes("searchContainer")) {
      searchContainer.classList.remove('hidden')
    } else {
      searchContainer.classList.add('hidden')
    }
      
  }, [capabilityId])

  useHotkeys('esc', ()=>{
    blurScreen()
    setCapabilityId('')
  })
  const [searchResult, setSearchResult] = useState("");
  const getSearch = (value: string) => {
    setSearchResult(value);
  };
  return (
    <div className="px-5 w-screen h-screen absolute">
      <div
        className="hidden p-3 max-w-2xl min-w-fit fixed z-10 bg-white shadow-xl left-1/2 -translate-x-1/2 translate-y-5 rounded-lg"
        id="searchContainer"
      >
        <SearchBar returnSearch={getSearch} />
        <SearchResults receiveSearch={searchResult} />
      </div>
    </div>
  );
};



export default SearchContainer;
