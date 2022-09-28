import { useRecoilValue } from "recoil";
import ScoresView from "./ScoresView";
import { selectedDataState } from "./States/States";
import { ValType } from "./Types/ValType";

const CalculateResult = () => {
  const selected = useRecoilValue(selectedDataState);

  const scoresView = selected.map((value: ValType) => {
    return <ScoresView key={value.syllabus_id} data={value} />;
  });

  return (
    <div className="pb-9 md:px-9">
      <div className="bg-white rounded-lg min-h-min border-2 shadow-sm ">
        <p className="text-black text-center h-fit text-3xl py-3 border-b-2">
          หน้าต่างคะแนน
        </p>
        <div className="h-fit min-h-full py-4">
          {scoresView.length > 0 ? (
            <div className="space-y-2">{scoresView}</div>
          ) : (
            <p className="text-text_secondary text-center px-3 my-9">
              คุณยังไม่เลือกคณะหรือยังไม่กดคำนวณ (T_T)
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default CalculateResult;
