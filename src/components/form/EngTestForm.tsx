import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  hasNationalEngOrPhar,
  patternCheck,
} from "../../features/EssentialFeatures";
import { calState, engTestScore, selectedDataState } from "../../States/States";
import { DropDownButtonType } from "../../Types/FormType";
import { DownIcon } from "../template/Buttons";

const EngTestForm = () => {
  const selected = useRecoilValue(selectedDataState);
  const [eng, setEng] = useState("TOEFL CB");
  const trigger = useRecoilValue(calState)
  const setEngScore = useSetRecoilState(engTestScore);
  const ref = useRef<HTMLDivElement>(null!);
  const engRef = useRef<HTMLInputElement>(null!);
  const [dropdown, setDropdown] = useState(false);
  const [score, setScore] = useState("");
  const initial = useRef(true);
  useLayoutEffect(() => {
    if (hasNationalEngOrPhar(selected)) {
      ref.current.classList.remove("hidden");
    } else {
      ref.current.classList.add("hidden");
      setDropdown(false);
    }
  }, [selected]);
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    setEngScore({ name: eng, score: score == "" ? 0 : parseFloat(score) });
  }, [eng, trigger]);

  return (
    <div ref={ref} className="hidden mt-3">
      <p className="text-text_primary text-ellipsis">
        ผลทดสอบอังกฤษ (TOEFL, CU-TEP...)
      </p>
      <div className="flex space-x-3 w-fit m-auto justify-between mt-1">
        <input
          onChange={(e) => setScore(patternCheck(e))}
          ref={engRef}
          value={score}
          maxLength={6}
          className="bg-white text-sm px-2 text-text_secondary border-purple-500 focus:outline-none rounded-lg border-b-2 w-24"
        ></input>
        <div className="w-max">
          <button
            onClick={(e) => {
              setDropdown(!dropdown);
              e.preventDefault();
            }}
            className="text-white flex bg-purple-500 rounded-lg px-2 py-1 items-center"
          >
            <span className="text-xs">{eng}</span>
            <DownIcon />
          </button>
          <div
            className={`transition-all duration-200 ${
              dropdown ? "h-full" : "h-0"
            } relative text-black flex`}
          >
            {dropdown && (
              <div className="absolute scrollbar bg-gray-50 shadow-md rounded-md mt-2 overflow-y-scroll h-32 min-h-fit">
                {[
                  "TOEFL CB",
                  "TOEFL IB",
                  "TOEFL ITP",
                  "IELTS (AM)",
                  "TOEIC",
                  "CU-TEP",
                  "TU-GET PB",
                  "TU-GET CB",
                  "KEPT",
                  "KKU-AELT"
                ].map(v => {
                  return (<DropdownButtonElement title={v} key={v} onClick={()=>{
                    setEng(v);
                    setDropdown(!dropdown)
                  }}/>)
                })}
                
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DropdownButtonElement = ({ title, onClick }: DropDownButtonType) => {
  return (
    <button
      onClick={(e) => {
        onClick();
        e.preventDefault();
      }}
      className="line-clamp-1 bg-gray-50 hover:bg-gray-100 p-2 text-center text-xs w-full"
      title={title}
    >
      {title}
    </button>
  );
};
export default EngTestForm;
