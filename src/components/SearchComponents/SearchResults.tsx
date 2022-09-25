import { useEffect, useMemo, useState } from "react";
import SearchList from "../SearchList";
import { getApi } from "../../features/GetAPI";
import "../../styles/scrollwheel.css";
const SearchResults = ({ receiveSearch }: any) => {
  const [result, setResult] = useState("");
  const JSONdata = getApi()
  var output: any = useMemo(()=> JSONdata
      .filter((val) => {
        if (result == "") {
          return val;
        } else if (
          val.faculty.includes(result) ||
          val.syllabus.includes(result)
        ) {
          return val;
        }
      })
      .map((val) => {
        return <SearchList key={val.syllabus} value={val} />;
      }), [result])

  useEffect(() => {
    setResult(receiveSearch);
  }, [receiveSearch]);

  return (
    <div className="justify-center border-t-2  text-center h-72 w-72">
      <div id="searchResult" className="mt-3 overflow-y-auto h-64  first:rounded-t-lg last:rounded-b-lg">
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
