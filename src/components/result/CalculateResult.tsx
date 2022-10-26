import { useRecoilValue } from "recoil";
import ScoresView from "./ScoresView";
import { selectedDataState } from "../../States/States";
import { ValType } from "../../Types/DataType";
import {
  BookOpenIcon,
  CheckIcon,
  InfoIcon,
  NoSymbolIcon,
} from "../template/ButtonsAndIcons";

const CalculateResult = () => {
  const selected = useRecoilValue(selectedDataState);

  const scoresView = selected.map((value: ValType) => {
    return <ScoresView key={value.syllabus_id} data={value} />;
  });

  return (
    <section className="bg-white rounded-lg min-h-min border-2 shadow-sm pb-9 md:mx-32">
      <h1 className="text-black text-center h-fit text-3xl py-3 border-b-2">
        หน้าต่างคะแนน
      </h1>
      <section className="p-3 text-secondary text-xs m-auto space-y-1 md:text-sm border-b-2">
        <div className="flex space-x-1 items-center">
          <CheckIcon className="text-green-500 w-5 h-5" />
          <p>ผ่าน</p>
        </div>
        <div className="flex space-x-1 items-center">
          <NoSymbolIcon className="text-red-500 w-5 h-5" />
          <p>คะแนนรวมไม่ถึงขั้นต่ำ</p>
        </div>
        <div className="flex space-x-1 items-center">
          <InfoIcon className="text-yellow-500 w-5 h-5" />
          <p>บางวิชาไม่ถึงเกณฑ์ขั้นต่ำ</p>
        </div>
        {/* <div className="flex space-x-1 items-center">
          <BookOpenIcon className="text-blue-500 w-5 h-5" />
          <p>ไม่ผ่านคะแนนภาษาอังกฤษหรือไม่ได้ใช้แบบทดสอบนี้</p>
        </div> */}
      </section>
      <div>
        {scoresView.length > 0 ? (
          <div className="space-y-2">{scoresView}</div>
        ) : (
          <p className="text-text_secondary text-center px-3 my-9">
            คุณยังไม่เลือกคณะหรือยังไม่กดคำนวณ (T_T)
          </p>
        )}
      </div>
    </section>
  );
};
export default CalculateResult;
