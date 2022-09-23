import { useContext, useEffect, useState } from "react";
import { DataContext } from "../features/DataContext";

interface type {
  value: {
    syllabus: string;
    faculty: string;
  };
}

const SearchList = ({ value }: type) => {
  const syllabus: string = value.syllabus;
  const faculty: string = value.faculty;
  const { selected, setSelected } = useContext(DataContext);
  const [check, setCheck] = useState(selected.includes(syllabus));
  const handleChange = () => setCheck(!check);
  useEffect(() => {
    if (selected.includes(syllabus)) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [selected]);
  useEffect(() => {
    if (check) setSelected([...selected, syllabus]);
    else setSelected(selected.filter((k) => k != syllabus));
  }, [check]);
  return (
    <button
      onClick={handleChange}
      className="text-left w-full flex justify-between items-center bg-gray-50"
    >
      <div>
        <div className="text-black">{syllabus}</div>
        <div className="text-xs">{faculty}</div>
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
