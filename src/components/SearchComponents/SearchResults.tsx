import { useMemo } from "react";
import SearchList from "../SearchList";
import { getApi } from "../../features/ApiFeatures";
import "../../styles/scrollwheel.css";
import { ValType } from "../Types/ValType";
import { useRecoilValue } from "recoil";
import { searchState } from "../States/States";

const SearchResults = () => {
  const search = useRecoilValue(searchState);
  const JSONdata = getApi();
  const output: JSX.Element[] = useMemo(
    () =>
      JSONdata.filter((val: ValType) => {
        if (search == "") {
          return val;
        } else if (
          val.faculty.includes(search.trim()) ||
          val.syllabus.includes(search.trim())
        ) {
          return val;
        }
      }).map((val: ValType) => {
        return <SearchList key={val.syllabus_id} data={val} />;
      }),
    [search]
  );

  return (
    <div className="justify-center border-t-2  text-center h-72 w-72">
      <div
        id="searchResult"
        className="mt-3 overflow-y-auto h-64  first:rounded-t-lg last:rounded-b-lg"
      >
        {output.length > 0 ? (
          output
        ) : (
          <p className="text-text_secondary">
            แย่จัง หาคณะหรือสาขาไม่เจอ
            <br />
            {"<"}(＿　＿){">"}
          </p>
        )}
      </div>
    </div>
  );
};
export default SearchResults;
