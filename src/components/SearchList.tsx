import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedSyllabusState } from "./States/CapabilityState";

interface type {
  value: {
    syllabus: string;
    faculty: string;
  };
}

const SearchList = ({ value }: type) => {
  const syllabus: string = value.syllabus;
  const faculty: string = value.faculty;
  const [selected, setSelected] = useRecoilState(selectedSyllabusState);
  const [check, setCheck] = useState(selected.includes(syllabus));
  const handleChange = () => setCheck(!check);

  useEffect(() => {
    if (check) {
      if (!selected.includes(syllabus)) {
        setSelected([...selected, syllabus]);
      }
    } else {
      setSelected(selected.filter((k) => k != syllabus));
    }
  }, [check]);
  return (
    <button
      onClick={handleChange}
      className="text-left p-3 w-full flex justify-between items-center bg-gray-50"
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
