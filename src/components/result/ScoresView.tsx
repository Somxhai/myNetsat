import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  calCapabilityScore,
  calNetsatScore,
} from "../../features/CalculateScore";
import {
  capabilityScore,
  engTestScore,
  engTestStore,
  netsatScore,
  selectedDataState,
} from "../../States/States";
import { CloseIcon, DownIcon } from "../template/ButtonsAndIcons";
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
  const init = useRef(true);
  const detailRef = useRef<HTMLDivElement>(null!);
  const engTestData = useRecoilValue(engTestStore);
  const minEngData =
    isEngineer(data) && data.is_national
      ? engTestData["engineer"]
      : engTestData["pharmarcy"];
  useEffect(() => {
    if (init.current) {
      init.current = false;
      return;
    }
    // are the scores pass the requirements
    if (data.has_minimum_score) {
      if (!checkMinScore({ ...netsatInputScore, ...capInputScore }, data)) {
        setScore("คะแนนไม่ถึงเกณฑ์ขั้นต่ำ");
        return;
      }
    }

    // calculation
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
    else if (!minEngData.hasOwnProperty(engScore.name)) {
      setScore(`คณะนี้ไม่ใช้คะแนนสอบ ${engScore.name}`);
      return;
    } else if (data.is_national) {
      checkMinEngTestScore(engScore.name, engScore.score, minEngData)
        ? setScore(sumNetsat.toFixed(3))
        : setScore("ไม่ผ่านคะแนนภาษาอังกฤษ");
    } else if (data.min_sum != null) {
      sumNetsat >= data.min_sum
        ? setScore(sumNetsat.toFixed(3))
        : setScore(`คะแนนรวมไม่ถึงขั้นต่ำ ${data.min_sum}`);
    } else {
      // no capability scores, minimum ...
      setScore(sumNetsat.toFixed(3));
    }
  }, [netsatInputScore]);

  return (
    <main
    onClick={()=>setShow(!show)}
      className={`mx-3 border-b-2 transition-all duration-100 ease-in ${
        show && "pb-3 "
      } cursor-pointer`}
    >
      <section className="flex items-center w-full justify-between">
        <div className="flex items-center py-3 justify-between">
          <button
            onClick={() => {
              setSelected(selected.filter((v) => v != data));
            }}
            className="text-black bg-white z-40 p-3 mr-3 border-red-400 border-b-2 rounded-lg ease-in duration-150 hover:scale-125"
          >
            <CloseIcon />
          </button>
          <blockquote>
            <p className="text-black text-sm text-ellipsis">{data.syllabus}</p>
            <p className="text-secondary text-xs">{data.faculty}</p>
          </blockquote>
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
      </section>

      <section className="md:flex">
        <main
          className={`transition-all duration-[100] ease-in ${
            show ? "opacity-100" : "opacity-0"
          } text-text_primary h-fit`}
          ref={detailRef}
        >
          <div
            className={`m-auto md:m-0 w-fit mb-3 transition-all ease-linear duration-[150] ${
              show ? "h-full" : "h-0"
            }`}
          >
            <section className="block justify-between items-baseline ">
              <div className="md:flex">
                <NetsatTable data={data} />
                {data.has_specific_capability && (
                  <CapabilityTable data={data} />
                )}
              </div>
              {data.is_national && (isEngineer(data) || isPharmarcy(data)) && (
                <EnglishTest data={data} />
              )}
            </section>
            <blockquote className="text-text_secondary">
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
            </blockquote>
          </div>
        </main>
      </section>
    </main>
  );
};

export default ScoresView;
