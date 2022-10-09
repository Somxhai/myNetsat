import SearchList from "./SearchList";
import { ValType } from "../../Types/DataType";
import { useRecoilValue } from "recoil";
import { dataStore, searchState } from "../../States/States";

const SearchResults = () => {
  const search = useRecoilValue(searchState);
  const data = useRecoilValue(dataStore);
  const output: JSX.Element[] =
    data
      .filter((val: ValType) => {
        if (search == "") return val;
        else if (
          val.faculty.includes(search.trim()) ||
          val.syllabus.includes(search.trim())
        )
          return val;
      })
      .map((val: ValType) => {
        return <SearchList key={val.syllabus_id} data={val} />;
      });

  return (
    <main className="justify-center border-t-2  text-center h-72 w-72">
      <div
        id="searchResult"
        className="mt-3 pr-1 overflow-y-scroll h-64  first:rounded-t-lg last:rounded-b-lg scrollbar"
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
    </main>
  );
};
export default SearchResults;
