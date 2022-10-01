import { OpenFormButton } from "../template/Buttons";
import { SubjectInput } from "../template/SubjectInput";
import { useEffect, useRef } from "react";
import { calState, netsatScore } from "../../States/States";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ScoreType } from "../../Types/StateType";
import EngTestForm from "./EngTestForm";


const NetsatForm = () => {
  const trigger = useRecoilValue(calState);
  const form = useRef<HTMLFormElement>(null!);
  const setScore = useSetRecoilState(netsatScore);
  useEffect(() => {
    setScore(() => {
      const scoreToAdd: ScoreType = {
        thai: parseFloat(form.current["thai"].value),
        eng: parseFloat(form.current["eng"].value),
        math: parseFloat(form.current["math"].value),
        sci: parseFloat(form.current["sci"].value),
        bio: parseFloat(form.current["bio"].value),
        chem: parseFloat(form.current["chem"].value),
        phy: parseFloat(form.current["phy"].value),
      };
      for (const key of Object.keys(scoreToAdd)) {
        if (scoreToAdd[key] > 100) scoreToAdd[key] = 100;
      }
      return scoreToAdd;
    });
  }, [trigger]);

  return (
    <form
      ref={form}
      id="input-form"
      className="text-sm pt-3 pb-9 m-auto md:m-0 text-center w-fit"
    >
      <p className="text-xl text-text_primary mt-5">ความฉลาดรู้ทั่วไป</p>
      <SubjectInput title="ภาษาไทย" id="thai" />
      <SubjectInput title="ภาษาอังกฤษ" id="eng" />
      <SubjectInput title="คณิตศาสตร์" id="math" />
      <p className="text-xl text-text_primary mt-5">ความฉลาดรู้เฉพาะ</p>
      <SubjectInput title="วิทยาศาสตร์และเทคโนโลยี" id="sci" />
      <SubjectInput title="เคมี" id="chem" />
      <SubjectInput title="ชีววิทยา" id="bio" />
      <SubjectInput title="ฟิสิกส์" id="phy" />
    </form>
  );
};
const CapabilityForm = () => {
  return (
    <div
      id="capability-form"
      className="text-sm pt-3 pb-9 m-auto text-center md:mt-5"
    >
      <p className="text-xl text-text_primary">สมรรถนะเฉพาะด้าน</p>
        <div className="flex flex-col">
          <OpenFormButton
            ids={["fr", "gr", "cn", "jp", "kr"]}
            containerID="languageContainer"
            title="ภาษาต่างประเทศ"
            placeholder="ฝรั่งเศส, เยอรมนี, จีน, ญี่ปุ่น, และเกาหลี"
          />
          <OpenFormButton
            ids={["drawing", "makeup", "drawcom", "vart", "music", "dance"]}
            containerID="artContainer"
            title="ศิลปกรรมศาสตร์"
            placeholder="การวาดเส้น, องค์ประกอบทางศิลป์, การวาดเส้นเพื่อการสื่อสาร, ออกแบบนิเทศ, ด้านดนตรี และนาฎศิลป์"
          />
          <SubjectInput title="วิศวกรรมศาสตร์" id="engineer" />
          <OpenFormButton
            ids={["arch", "design"]}
            containerID="archContainer"
            title="สถาปัตยกรรม"
            placeholder="สถาปัตยกรรม และการออกแบบ"
          />
          <OpenFormButton
            ids={["body", "goodatart"]}
            containerID="eduContainer"
            title="ศึกษาศาสตร์"
            placeholder="สมรรถนะทางกาย และความถนัดทางศิลป์"
          />
          <OpenFormButton
            ids={["techmed", "artmed"]}
            containerID="medContainer"
            title="เวชนิทัศน์"
            placeholder="เทคโนโลยีสำหรับเวชนิทัศน์และศิลป์สำหรับเวชนิทัศน์"
          />
          <EngTestForm />
        </div>
    </div>
  );
};
export { NetsatForm, CapabilityForm };
