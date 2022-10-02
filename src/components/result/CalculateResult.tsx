import { useRecoilValue } from "recoil";
import ScoresView from "./ScoresView";
import { selectedDataState } from "../../States/States";
import { ValType } from "../../Types/DataType";

const CalculateResult = () => {
  const selected = useRecoilValue(selectedDataState);

  const scoresView = selected.map((value: ValType) => {
    return <ScoresView key={value.syllabus_id} data={value} />;
  });

  return (
    <main className="pb-9 md:px-9">
      <section className="bg-white rounded-lg min-h-min border-2 shadow-sm ">
        <h1 className="text-black text-center h-fit text-3xl py-3 border-b-2">
          หน้าต่างคะแนน
        </h1>
        <div className="py-4">
          {scoresView.length > 0 ? (
            <div className="space-y-2">{scoresView}</div>
          ) : (
            <p className="text-text_secondary text-center px-3 my-9">
              คุณยังไม่เลือกคณะหรือยังไม่กดคำนวณ (T_T)
            </p>
          )}
        </div>
      </section>
    </main>
  );
};
export default CalculateResult;
