import { useEffect, useMemo, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  calCapabilityScore,
  calNetsatScore,
} from "../../features/CalculateScore";
import {
  capabilityScore,
  engTestScore,
  netsatScore,
  selectedDataState,
} from "../../States/States";
import { DownIcon } from "../template/Buttons";
import { ValType } from "../../Types/DataType";
import { CapabilityTable, NetsatTable } from "../table/NetsatTable";
import {
  checkMinEngTestScore,
  checkMinScore,
  isBusinessAndAccounting,
  isEngineer,
  isPharmarcy,
} from "../../features/EssentialFeatures";
import { EnglishTest } from "../faculty requirements/EnglishTest";

interface ScoresViewType {
  data: ValType;
}

const ScoresView = ({ data }: ScoresViewType) => {
  const [score, setScore] = useState("00.000");
  const netsatInputScore = useRecoilValue(netsatScore);
  const capInputScore = useRecoilValue(capabilityScore);
  const [selected, setSelected] = useRecoilState(selectedDataState);
  const [show, setShow] = useState(false);
  const engScore = useRecoilValue(engTestScore);
  const faculty = data.faculty;
  const init = useRef(true);
  const viewRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if (init.current) {
      init.current = false;
      return;
    }

    if (data.has_minimum_score) {
      if (!checkMinScore({ ...netsatInputScore, ...capInputScore }, data)) {
        setScore("คะแนนไม่ถึงเกณฑ์ขั้นต่ำ");
        return;
      }
    }
    // start the calculation
    let sumNetsat = calNetsatScore(data.weight, netsatInputScore);
    if (data.has_specific_capability) {
      const sumCap = calCapabilityScore(
        data.specific_capability,
        capInputScore
      );
      sumNetsat += sumCap;
    }
    // checking the score
    if (isNaN(sumNetsat)) setScore("ใส่คะแนนให้ครบสิ 😠");
    else if (data.is_national) {
      if (isPharmarcy(data)) {
        checkMinEngTestScore(engScore.name, engScore.score, "pharmarcy")
          ? setScore(sumNetsat.toFixed(3))
          : setScore("ไม่ผ่านคะแนนภาษาอังกฤษ");
      } else if (isEngineer(data)) {
        checkMinEngTestScore(engScore.name, engScore.score, "engineer")
          ? setScore(sumNetsat.toFixed(3))
          : setScore("*" + sumNetsat.toFixed(3));
      }
      // Normal
    } else {
      setScore(sumNetsat.toFixed(3));
    }
  }, [netsatInputScore]);
  const remove = () => {
    setSelected(selected.filter((v) => v != data));
  };

  return (
    <main
      className={`mx-3 border-b-2 transition-all duration-100 ease-in ${
        show && "pb-3"
      }`}
    >
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
            <div
              className={`text-sm text-center md:text-left md:text-base font-medium whitespace-nowrap text-text_primary`}
            >
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
      <div className="md:flex">
        <div
          className={`transition-all duration-[100] ease-in ${
            show ? "opacity-100" : "opacity-0"
          } text-text_primary h-fit`}
          ref={viewRef}
        >
          <div
            className={`m-auto md:m-0 w-fit mb-3 transition-all ease-linear duration-[150] ${
              show ? "h-full" : "h-0"
            }`}
          >
            <div className="block justify-between items-baseline ">
              <div className="md:flex">
                <NetsatTable data={data} />
                {data.has_specific_capability && (
                  <CapabilityTable data={data} />
                )}
              </div>
              {data.is_national && (isEngineer(data) || isPharmarcy(data)) && (
                <EnglishTest data={data} />
              )}
            </div>
            <div className="text-text_secondary">
              {(isPharmarcy(data) || isBusinessAndAccounting(data)) && show && (
                <p>
                  อ่านเกณฑ์เพิ่มเติมที่{" "}
                  <a
                    href="https://admissions.kku.ac.th/quota65/?fbclid=IwAR1_7d5q1T-Tmfb2wwdLjdasGG7JlgbkOcCYZTb9RBiddJtu1X1UwonXpek"
                    className="underline hover:text-black"
                  >
                    admission.kku.ac.th
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ScoresView;
