import { SubjectInput } from "../template/SubjectInput";
import { EscFormButton } from "../template/Buttons";
import PanelTemplate from "../template/PanelTemplate";

const LanguagesContainer = () => {
  return (
    <PanelTemplate id="languageContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <p className="text-text_primary">ด้านภาษาต่างประเทศ</p>
        <EscFormButton />
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="fr" title="ฝรั่งเศส" />
        <SubjectInput id="gr" title="เยอรมนี" />
        <SubjectInput id="cn" title="จีน" />
        <SubjectInput id="jp" title="ญี่ปุ่น" />
        <SubjectInput id="kr" title="เกาหลี" />
      </div>
    </PanelTemplate>
  );
};
const ArtContainer = () => {
  return (
    <PanelTemplate id="artContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <p className="text-text_primary">ด้านศิลปศาสตร์</p>
        <EscFormButton />
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="drawing" title="การวาดเส้น" />
        <SubjectInput id="makeup" title="ประกอบศิลป์" />
        <SubjectInput id="drawcom" title="วาดเส้นเพื่อการสื่อสาร" />
        <SubjectInput id="vart" title="ออกแบบนิเทศศิลป์" />
        <SubjectInput id="music" title="ดนตรี" />
        <SubjectInput id="dance" title="นาฎศิลป์" />
      </div>
    </PanelTemplate>
  );
};
const EduContainer = () => {
  return (
    <PanelTemplate id="eduContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <p className="text-text_primary">ด้านศึกษาศาสตร์</p>
        <EscFormButton />
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="body" title="ทางกาย" />
        <SubjectInput id="goodatart" title="ถนัดทางศิลป์" />
      </div>
    </PanelTemplate>
  );
};
const MedContainer = () => {
  return (
    <PanelTemplate id="medContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <p className="text-text_primary">ด้านเวชนิทัศน์</p>
        <EscFormButton />
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="techmed" title="เทคโนโลยีเวชนิทัศน์" />
        <SubjectInput id="artmed" title="ศิลป์สำหรับเวชนิทัศน์" />
      </div>
    </PanelTemplate>
  );
};
const ArchContainer = () => {
  return (
    <PanelTemplate id="archContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <p className="text-text_primary">ด้านสถาปัตยกรรม</p>
        <EscFormButton />
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="arch" title="สถาปัตยกรรม" />
        <SubjectInput id="design" title="การออกแบบ" />
      </div>
    </PanelTemplate>
  );
};

export {
  LanguagesContainer,
  ArtContainer,
  EduContainer,
  MedContainer,
  ArchContainer,
};
