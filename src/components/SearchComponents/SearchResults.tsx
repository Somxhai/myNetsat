import { useEffect, useMemo, useState } from "react";
import SearchList from "../SearchList";
import { getApi } from "../../features/GetAPI";

const SearchResults = ({ receiveSearch }: any) => {
  const [result, setResult] = useState("");
  var output: any = useMemo(()=> getApi()
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
    <div className="justify-center border-t-2 text-secondary text-center h-72 w-72">
      <div className="mt-3 overflow-y-auto h-64 md:pr-4">
        {output.length > 0 ? (
          output
        ) : (
          <p>
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
