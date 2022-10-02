import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getMinEngTestScore } from "../../features/ApiFeatures";
import {
  checkMinEngTestScore,
  isEngineer,
} from "../../features/EssentialFeatures";
import { engTestScore, engTestStore, netsatScore } from "../../States/States";
import { ValTypeArgument } from "../../Types/ArgumentType";

export const EnglishTest = ({ data }: ValTypeArgument) => {
  const engScore = useRecoilValue(engTestScore);
  const netsatInputScore = useRecoilValue(netsatScore);
  const [pass, setPass] = useState(false);
  const engTestData = useRecoilValue(engTestStore);
  const minEngData = isEngineer(data)
    ? engTestData["engineer"]
    : engTestData["pharmarcy"];
  const minEngScore = getMinEngTestScore(engScore.name, minEngData);
  useEffect(() => {
    setPass(() =>
      checkMinEngTestScore(engScore.name, engScore.score, minEngData)
    );
  }, [netsatInputScore, engScore]);
  return (
    <main className="text-center mt-2">
      <section>
        <p className="text-lg">คะแนนการทดสอบภาษาอังกฤษ </p>
        <p className="text-purple-600 text-center">{engScore.name}</p>
        {isNaN(minEngScore) ? (
          `หลักสูตรนี้ไม่ใช้ ${engScore.name}`
        ) : (
          <p>
            {pass ? "คุณผ่านด้วยคะแนน" : "คุณไม่ผ่านด้วยคะแนน"}{" "}
            <span className={`${pass ? "text-green-500" : "text-red-500"}`}>
              {engScore.score}
            </span>
            /{minEngScore}
          </p>
        )}
        <p className="text-xs text-text_secondary text-left">
          {engScore.name == "KKU-AELT" &&
            isEngineer(data) &&
            "*ค่าเฉลี่ยของทุก Band"}
        </p>
        {!pass &&
          isEngineer(data) &&
          "ต้องได้รับการอบรมเตรียมความพร้อมด้านภาษาอังกฤษ"}
      </section>
    </main>
  );
};
