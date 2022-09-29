import { useMemo, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { calCapabilityScore, calNetsatScore } from "../features/CalculateScore";
import {
  calState,
  capabilityScore,
  netsatScore,
  selectedDataState,
} from "./States/States";
import { DownIcon } from "./Template/Buttons";
import { ValType } from "./Types/DataType";
import { CapabilityTable, NetsatTable } from "./Table/NetsatTable";

interface ScoresViewType {
  data: ValType;
}

const ScoresView = ({ data }: ScoresViewType) => {
  // States
  const [score, setScore] = useState("00.000");
  const netsatInputScore = useRecoilValue(netsatScore);
  const capInputScore = useRecoilValue(capabilityScore);
  const trigger = useRecoilValue(calState);
  const [selected, setSelected] = useRecoilState(selectedDataState);
  const [show, setShow] = useState(false);

  const faculty = data.faculty;
  const init = useRef(true);
  const viewRef = useRef<HTMLDivElement>(null!);
  useMemo(() => {
    if (init.current) {
      init.current = false;
      return;
    }
    let sumNetsat = calNetsatScore(data.weight, netsatInputScore);
    if (data.has_specific_capability) {
      const sumCap = calCapabilityScore(
        data.specific_capability,
        capInputScore
      );
      sumNetsat += sumCap;
    }
    isNaN(sumNetsat)
      ? setScore("ใส่คะแนนให้ครบสิ 😠")
      : setScore(sumNetsat.toFixed(3));
  }, [trigger, netsatInputScore]);
  const remove = () => {
    setSelected(selected.filter((v) => v != data));
  };

  return (
    <div className="mx-3 border-b-2">
      <div className="flex">
        <div className="flex items-center w-screen justify-between">
          <div className="flex items-center py-3 justify-between">
            <button
              onClick={remove}
              className="text-black bg-white z-40 p-3 mr-3 border-red-400 border-b-2 rounded-lg ease-in duration-150 hover:scale-125"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3 h-3 md:h-5 md:w-5"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            <div className="flex-grow">
              <p className="text-black text-sm text-ellipsis">
                {data.syllabus}
              </p>
              <p className="text-secondary text-xs">{faculty}</p>
            </div>
          </div>
          <div className=" flex text-text_secondary">
            <div className="text-sm text-center md:text-left md:text-base text-black font-medium whitespace-nowrap">
              {score}
            </div>
            <button
              className="ease-in duration-150 hover:scale-125 hover:text-black"
              title="ดูข้อมูลเพิ่มเติม"
              onClick={() => setShow(!show)}
            >
              <DownIcon />
            </button>
          </div>
        </div>
      </div>
      <main
        className={`transition-all duration-[175] ease-in ${
          show ? "opacity-100" : "opacity-0"
        } text-text_primary `}
        ref={viewRef}
      >
        <div
          className={`flex m-auto md:m-0 w-fit mb-3 justify-between transition-all duration-200 ${
            show ? "h-full" : "h-0"
          }`}
        >
          <NetsatTable data={data} />
          {data.has_specific_capability && <CapabilityTable data={data} />}
        </div>
      </main>
    </div>
  );
};

export default ScoresView;
