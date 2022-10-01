import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getMinEngTestScore } from "../../features/ApiFeatures";
import {
  checkMinEngTestScore,
  isEngineer,
} from "../../features/EssentialFeatures";
import { engTestScore, netsatScore } from "../../States/States";
import { ValTypeArgument } from "../../Types/TableType";

export const EnglishTest = ({ data }: ValTypeArgument) => {
  const engScore = useRecoilValue(engTestScore);
  const netsatInputScore = useRecoilValue(netsatScore);
  const [pass, setPass] = useState(false);

  useEffect(() => {
    setPass(() =>
      checkMinEngTestScore(engScore.name, engScore.score, data.faculty)
    );
  }, [netsatInputScore, engScore]);
  return (
    <>
      <div className="text-center mt-2">
        <p className="text-lg">คะแนนการทดสอบภาษาอังกฤษ </p>

        <p className="text-purple-600 text-center">{engScore.name}</p>
        <p>
          {pass ? "คุณผ่านด้วยคะแนน" : "คุณไม่ผ่านด้วยคะแนน"}{" "}
          <span className={`${pass ? "text-green-500" : "text-red-500"}`}>
            {engScore.score}
          </span>
          /
          {getMinEngTestScore(
            engScore.name,
            isEngineer(data) ? "engineer" : "pharmarcy"
          )}
        </p>
        <p className="text-xs text-text_secondary text-left">{engScore.name=="KKU-AELT"  && isEngineer(data) && "*ค่าเฉลี่ยของทุก Band"}</p>
        {!pass &&
          isEngineer(data) &&
          "ต้องได้รับการอบรมเตรียมความพร้อมด้านภาษาอังกฤษ"}
      </div>
    </>
  );
};
