import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { calCapabilityScore, calNetsatScore } from "../features/CalculateScore";
import {
  calState,
  capabilityScore,
  netsatScore,
  selectedDataState,
} from "./States/States";
import { ValType } from "./Types/ValType";

interface ScoresViewType {
  data: ValType;
}

const ScoresView = ({ data }: ScoresViewType) => {
  const [score, setScore] = useState("00.000");
  const netsatInputScore = useRecoilValue(netsatScore);
  const capInputScore = useRecoilValue(capabilityScore);
  const faculty = data.faculty;
  const trigger = useRecoilValue(calState);
  const [selected, setSelected] = useRecoilState(selectedDataState);
  const init = useRef(true);
  const calculation = () => {
    console.log(capInputScore);
    let sumNetsat = calNetsatScore(data.weight, netsatInputScore);

    if (data.has_specific_capability) {
      const sumCap = calCapabilityScore(data.specific_capability, capInputScore)
      sumNetsat += sumCap
    }
    isNaN(sumNetsat) ? setScore("ใส่คะแนนให้ครบสิ 😠") : setScore(sumNetsat.toPrecision(5))
  };
  const remove = () => {
    setSelected(selected.filter((v) => v != data));
  };
  useLayoutEffect(() => {
    if (init.current) {
      init.current = false;
      return;
    }
    calculation()
  }, [trigger, netsatInputScore, capInputScore]);
  return (
    <div className="flex px-3 hover:bg-gray-100">
      <div className="border-b-2 flex items-center w-screen justify-between ">
        <div className="flex items-center py-3">
          <button
            onClick={remove}
            className="text-black bg-white z-40 p-3 mr-3 border-red-400 border-b-2 rounded-lg"
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
          <div>
            <p className="text-black truncate text-sm">{data.syllabus}</p>
            <p className="text-secondary text-xs text-ellipsis">{faculty}</p>
          </div>
        </div>
        <div className="text-md text-black font-medium">{score}</div>
      </div>
    </div>
  );
};

export default ScoresView;
