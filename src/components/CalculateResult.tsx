import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import ScoresView from "./ScoresView";
import { selectedSyllabusState } from "./States/CapabilityState";
import { v4 as uuidv4 } from 'uuid';


const CalculateResult = () => {
  const selected = useRecoilValue(selectedSyllabusState);
  
  const scoresView = selected.map((value) => {
    return <ScoresView key={uuidv4()} syllabus={value} />;
  });

  return (
    <div className="bg-white rounded-lg min-h-min border-2 shadow-sm">
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
  );
};
export default CalculateResult;
