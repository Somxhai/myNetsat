import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { calCapabilityScore, calNetsatScore } from "../features/CalScore";
import {
  getCapabilityWeightBySyllabus,
  getFacultyBySyllabus,
  getNetsatWeightBySyllabus,
  hasCapability,
} from "../features/GetAPI";
import { getCapabilityScore } from "../features/GetScores";
import {
  calState,
  netsatScoreState,
  selectedSyllabusState,
} from "./States/CapabilityState";

const ScoresView = ({ syllabus }: any) => {
  const netsatScore = useRecoilValue(netsatScoreState);
  const faculty = getFacultyBySyllabus(syllabus);
  const cal = useRecoilValue(calState);
  const [score, setScore] = useState("00.000");
  const netsatWeight = getNetsatWeightBySyllabus(syllabus);
  const initial = useRef(true);

  const calculation = () => {
    let sumScore = calNetsatScore(netsatWeight, netsatScore);
    if (sumScore == -1) {
      setScore("ใส่คะแนนไม่ครบ😒");
      return;
    }
    if (hasCapability(syllabus)) {
      const capabilityWeight = getCapabilityWeightBySyllabus(syllabus);
      const capabilityScores = getCapabilityScore();
      const capabilitySum = calCapabilityScore(capabilityWeight, capabilityScores);
      if (capabilitySum == -1) {
        setScore("ใส่คะแนนไม่ครบ😒");
        return;
      }
      sumScore += capabilitySum
    }
    const result = sumScore.toPrecision(5);
    setScore(result);
  };

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    calculation();
  }, [cal]);

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

const RemoveButton = ({ syllabus }: any) => {
  const [selected, setSelected] = useRecoilState(selectedSyllabusState);
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
