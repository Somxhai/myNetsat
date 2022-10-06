import { useLayoutEffect, useRef, useState } from "react";
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
import {
  BookOpenIcon,
  CheckIcon,
  CloseIcon,
  DownIcon,
  InfoIcon,
  NoSymbolIcon,
} from "../template/ButtonsAndIcons";
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
enum DetailStatus {
  PASS = "pass",
  MINIMUM_SCORE = "min score",
  MINIMUM_SUM = "min sum",
  ENG_SCORE = "eng score",
}

const ScoresView = ({ data }: ScoresViewType) => {
  const [score, setScore] = useState("00.000");
  const [detail, setDetail] = useState<DetailStatus>(null!);
  const netsatInputScore = useRecoilValue(netsatScore);
  const capInputScore = useRecoilValue(capabilityScore);
  const [selected, setSelected] = useRecoilState(selectedDataState);
  const [show, setShow] = useState(false);
  const engScore = useRecoilValue(engTestScore);
  const init = useRef(true);
  const detailRef = useRef<HTMLDivElement>(null!);
  const engTestData = useRecoilValue(engTestStore);
  const minEngData = () => {
    if (isEngineer(data) && data.is_national) return engTestData["engineer"];
    else if (isBusinessAndAccounting(data))
      return engTestData["businessAndAccountancy"];
    else if (isPharmarcy(data) && data.is_national)
      return engTestData["pharmarcy"];
    return {};
  };

  const getDetailIcon = (): JSX.Element | null => {
    if (detail == DetailStatus.MINIMUM_SCORE)
      return <InfoIcon className="text-yellow-500 w-5 h-5" />;
    else if (detail == DetailStatus.MINIMUM_SUM)
      return <NoSymbolIcon className="text-red-500 w-5 h-5" />;
    else if (detail == DetailStatus.ENG_SCORE)
      return <BookOpenIcon className="text-blue-500 w-5 h-5" />;
    else if (detail == DetailStatus.PASS)
      return <CheckIcon className="text-green-500 w-5 h-5" />;
    return null;
  };

  const getDetailTitle = (): string => {
    switch (detail) {
      case DetailStatus.ENG_SCORE:
        return "ไม่ผ่านคะแนนทดสอบภาษาอังกฤษหรือไม่ได้ใช้";
      case DetailStatus.MINIMUM_SCORE:
        return "คะแนนบางวิชาไม่ถึงเกณฑ์ขั้นต่ำ";
      case DetailStatus.MINIMUM_SUM:
        return "ผลรวมคะแนนไม่ถึงเกณฑ์ขั้นต่ำ";
      default:
        return "ผ่าน";
    }
  };
  useLayoutEffect(() => {
    if (init.current) {
      init.current = false;
      return;
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

    if (data.has_minimum_score) {
      if (!checkMinScore({ ...netsatInputScore, ...capInputScore }, data)) {
        setScore(`${sumNetsat.toFixed(3)}`);
        setDetail(DetailStatus.MINIMUM_SCORE);
      }
    }

    // checking the score
    if (isNaN(sumNetsat)) setScore("ใส่คะแนนให้ครบสิ 😠");
    else if (data.min_sum != null && sumNetsat < data.min_sum) {
      setScore(`${sumNetsat.toFixed(3)}/${data.min_sum}`);
      setDetail(DetailStatus.MINIMUM_SUM);
    } else if (data.is_national) {
      // does the syllabus has selected the english test
      if (!minEngData().hasOwnProperty(engScore.name)) {
        setScore(`ไม่ใช้ผลการสอบ ${engScore.name}`);
        setDetail(DetailStatus.ENG_SCORE);
      } 
      /* these 2 faculties must pass the english test.
      not like engineer
      */
      else if (
        (isBusinessAndAccounting(data) || isPharmarcy(data)) &&
        !checkMinEngTestScore(engScore.name, engScore.score, minEngData())
      ) {
        setScore(`ไม่ผ่านผลสอบ ${engScore.name}`);
        setDetail(DetailStatus.ENG_SCORE);
      } // just show warning on engineer
      else if (
        !checkMinEngTestScore(engScore.name, engScore.score, minEngData()) &&
        isEngineer(data)
      ) {
        setScore(sumNetsat.toFixed(3));
        setDetail(DetailStatus.ENG_SCORE);
      } else {
        setScore(sumNetsat.toFixed(3));
        setDetail(DetailStatus.PASS);
      }
    } else {
      // no capability scores, minimum ...
      setScore(sumNetsat.toFixed(3));
      setDetail(DetailStatus.PASS);
    }
  }, [netsatInputScore, engScore]);

  return (
    <main
      className={`mx-3 border-b-2 transition-all duration-100 ease-in ${
        show && "pb-3"
      }`}
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
          <div>
            <blockquote>
              <p className="text-black text-ellipsis line-clamp-3 text-lg">
                {data.syllabus}
              </p>
              <p className="text-secondary text-xs">{data.faculty}</p>
            </blockquote>
            <div className="flex items-center space-x-1 text-sm md:text-left md:text-base font-medium text-text_primary">
              <p className="font-medium">{score}</p>
              <div title={getDetailTitle()} className="cursor-pointer">
                {getDetailIcon()}
              </div>
            </div>
          </div>
        </div>
        <div className=" flex text-text_secondary">
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
              show ? "h-full" : "hidden h-0"
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
