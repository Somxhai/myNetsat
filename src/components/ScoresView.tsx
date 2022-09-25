import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CalNetsatScore } from "../features/CalScore";
import { DataContext } from "../features/DataContext";
import { getScoreFromLocal } from "../features/EssentialFeatures";
import { getFacultyBySyllabus, getWeightBySyllabus } from "../features/GetAPI";

interface type {
  startCal?: boolean;
  syllabus: string;
}

const ScoresView = ({ startCal, syllabus }: type) => {
  const faculty = getFacultyBySyllabus(syllabus);
  const [score, setScore] = useState("00.000");
  const netsatWeight = getWeightBySyllabus(syllabus);
  const netsatScore = getScoreFromLocal();

  const formatter = () => {
    const sumScore = CalNetsatScore(netsatWeight, netsatScore);
    const result = sumScore > -1 ? sumScore.toPrecision(5) : "ใส่คะแนนไม่ครบ😒";
    return result;
  };
  useEffect(()=>{
    setScore(formatter)
  }, [startCal])
  
  return (
    <div className="flex px-3">
      <div className="border-b-2 flex items-center w-screen justify-between">
        <div className="flex items-center py-3">
          <RemoveButton syllabus={syllabus} />
          <div>
            <p className="text-black text-ellipsis">{syllabus}</p>
            <p className="text-secondary text-xs text-ellipsis">{faculty}</p>
          </div>
        </div>
        <div className="text-md text-black font-medium">{score}</div>
      </div>
    </div>
  );
};

const RemoveButton = ({ syllabus }: type) => {
  const { setSelected, selected } = useContext(DataContext);
  const remove = () => {
    setSelected(selected.filter((v) => v != syllabus));
  };
  return (
    <button
      onClick={remove}
      className="text-black bg-white z-40 p-3 mr-3 hover:border-red-400 border-gray-50 border-b-2 rounded-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
      </svg>
    </button>
  );
};
export default ScoresView;
