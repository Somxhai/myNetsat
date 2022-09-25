import { useContext, useMemo } from "react";
import { DataContext } from "../../features/DataContext";
import { containerHandler } from "../../features/EssentialFeatures";
import { hasCapability } from "../../features/GetAPI";
import { OpenFormButton } from "../Template/Buttons";
import { SubjectInput } from "../SubjectInput";

const NetsatForm = () => {
  return (
    <form id="input-form" className="text-sm pt-3 pb-9 m-auto text-center">
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
  const { selected } = useContext(DataContext);
  const toggleCapabilityForm = (v: boolean) => {
    const form = document.getElementById("capability-form");
    if (form != null) {
      v ? form.classList.remove("hidden") : form.classList.add("hidden");
    }
  };
  useMemo(() => {
    let found = false;
    for (const v of selected) {
      if (hasCapability(v)) {
        found = true;
      }
    }
    found ? toggleCapabilityForm(true) : toggleCapabilityForm(false);
  }, [selected]);

  return (
    <form
      id="capability-form"
      className="text-sm pt-3 pb-9 m-auto text-center md:mt-5"
    >
      <p className="text-xl text-text_primary">สมรรถนะเฉพาะด้าน</p>
      <div className="flex flex-col">
        <OpenFormButton
          containerID="languageContainer"
          title="ภาษาต่างประเทศ"
          placeholder="ฝรั่งเศส, เยอรมนี, ญี่ปุ่น และเกาหลี"
        />
        <OpenFormButton
          containerID="artContainer"
          title="ศิลปกรรมศาสตร์"
          placeholder="การวาดเส้น, องค์ประกอบทางศิลป์, การวาดเส้นเพื่อการสื่อสาร, ออกแบบนิเทศ, ด้านดนตรี และนาฎศิลป์"
        />
        <SubjectInput title="วิศวกรรมศาสตร์" id="engi" />
        <OpenFormButton
          containerID="eduContainer"
          title="ศึกษาศาสตร์"
          placeholder="สมรรถนะทางกาย และความถนัดทางศิลป์"
        />
        <OpenFormButton
          containerID="medContainer"
          title="เวชนิทัศน์"
          placeholder="เทคโนโลยีสำหรับเวชนิทัศน์และศิลป์สำหรับเวชนิทัศน์"
        />
      </div>
    </form>
  );
};
export { NetsatForm, CapabilityForm };
