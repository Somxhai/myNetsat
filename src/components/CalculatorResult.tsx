import { useContext, useEffect } from "react";
import { DataContext } from "../features/DataContext";
import ScoresView from "./ScoresView";

interface type {
  trigger: boolean;
}

const CalculatorResult = ({ trigger }: type) => {
  const { selected } = useContext(DataContext);

  let scoresView = selected.map((value) => {
    return <ScoresView startCal={trigger}  key={value} syllabus={value}/>;
  });

  useEffect(() => {}, [selected]);
  return (
    <div className="bg-white rounded-lg min-h-fit overflow-x-hidden border-2 shadow-sm">
      <p className="text-black text-center h-fit text-3xl pb-3 border-b-2">
        ดูคะแนนของคุณกัน🥳
      </p>
      <div className="h-fit min-h-full py-4">
        {scoresView.length > 0 ? (
          <div className="space-y-2">{scoresView}</div>
        ) : (
          <p className="text-secondary text-center px-3 my-9">
            คุณยังไม่เลือกคณะหรือยังไม่กดคำนวณ (T_T)
          </p>
        )}
      </div>
    </div>
  );
};
export default CalculatorResult;
