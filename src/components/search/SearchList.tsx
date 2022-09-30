import { useEffect, useLayoutEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isIdSelected } from "../../features/ApiFeatures";
import { selectedDataState } from "../../States/States";
import { ValType } from "../../Types/DataType";

interface SearchListType {
  data: ValType;
}

const SearchList = ({ data }: SearchListType) => {
  const syllabus: string = data.syllabus;
  const faculty: string = data.faculty;
  const id: number = data.syllabus_id;

  const [selected, setSelected] = useRecoilState(selectedDataState);
  const [check, setCheck] = useState(isIdSelected(id, selected));
  const handleChange = () => setCheck(!check);
  useLayoutEffect(() => {
    setCheck(isIdSelected(id, selected));
  }, [selected]);
  useEffect(() => {
    if (check && !isIdSelected(id, selected)) {
      setSelected([...selected, data]);
    } else {
      setSelected(selected.filter((v) => v != data));
    }
  }, [check]);
  return (
    <button
      onClick={handleChange}
      className="text-left p-3 w-full hover:bg-gray-100 flex justify-between items-center bg-gray-50"
    >
      <div>
        <div className="text-black">{syllabus}</div>
        <div className="text-xs text-text_secondary">{faculty}</div>
      </div>
      <input
        checked={check}
        type="checkbox"
        onChange={handleChange}
        className="bg-gray-200 focus:ring-white rounded focus:ring-0 checked:border-gray-100 border-gray-100"
      />
    </button>
  );
};

export default SearchList;
