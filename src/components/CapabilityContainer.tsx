import { useHotkeys } from "react-hotkeys-hook";
import { containerHandler } from "../features/EssentialFeatures";
import { CloseIcon } from "./Template/Buttons";
import CapabilityPanel from "./Template/CapabilityPanel";
import { SubjectInput } from "./SubjectInput";

const LanguagesContainer = () => {
  useHotkeys("esc", () => {
    containerHandler("languageContainer");
  });
  return (
    <CapabilityPanel id="languageContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <p className="text-text_primary">ด้านภาษาต่างประเทศ</p>
        <button
          onClick={() => containerHandler("languageContainer")}
          className="text-secondary"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="fr" title="ฝรั่งเศส" />
        <SubjectInput id="gr" title="เยอรมนี" />
        <SubjectInput id="jp" title="ญี่ปุ่น" />
        <SubjectInput id="kr" title="เกาหลี" />
      </div>
    </CapabilityPanel>
  );
};
const ArtContainer = () => {
  useHotkeys("esc", () => {
    containerHandler("artContainer");
  });
  return (
    <CapabilityPanel id="artContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <p className="text-text_primary">ด้านศิลปศาสตร์</p>
        <button
          onClick={() => containerHandler("artContainer")}
          className="text-secondary"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="drawing" title="การวาดเส้น" />
        <SubjectInput id="makeup" title="ประกอบศิลป์" />
        <SubjectInput id="drawcom" title="วาดเส้นเพื่อการสื่อสาร" />
        <SubjectInput id="vart" title="ออกแบบนิเทศศิลป์" />
        <SubjectInput id="music" title="ดนตรี" />
        <SubjectInput id="dance" title="นาฎศิลป์" />
      </div>
    </CapabilityPanel>
  );
};
const EduContainer = () => {
  useHotkeys("esc", () => {
    containerHandler("eduContainer");
  });
  return (
    <CapabilityPanel id="eduContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <p className="text-text_primary">ด้านศึกษาศาสตร์</p>
        <button
          onClick={() => containerHandler("eduContainer")}
          className="text-secondary"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="body" title="ทางกาย" />
        <SubjectInput id="goodatart" title="ถนัดทางศิลป์" />
      </div>
    </CapabilityPanel>
  );
};
const MedContainer = () => {
  useHotkeys("esc", () => {
    containerHandler("medContainer");
  });
  return (
    <CapabilityPanel id="medContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <p className="text-text_primary">ด้านเวชนิทัศน์</p>
        <button
          onClick={() => containerHandler("medContainer")}
          className="text-secondary"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="techmed" title="เทคโนโลยีเวชนิทัศน์" />
        <SubjectInput id="artmed" title="ศิลป์สำหรับเวชนิทัศน์" />
      </div>
    </CapabilityPanel>
  );
};

export { LanguagesContainer, ArtContainer, EduContainer, MedContainer };
