import { SubjectInput } from "../template/SubjectInput";
import { EscFormButton } from "../template/ButtonsAndIcons";
import PanelTemplate from "../template/PanelTemplate";

export const LanguagesContainer = () => {
  return (
    <PanelTemplate id="languageContainer">
      <blockquote className="border-b-2 flex pb-2 justify-between">
        <h1 className="text-text_primary">ด้านภาษาต่างประเทศ</h1>
        <EscFormButton />
      </blockquote>
      <section className="p-5 text-left">
        <SubjectInput id="fr" title="ฝรั่งเศส" />
        <SubjectInput id="gr" title="เยอรมนี" />
        <SubjectInput id="cn" title="จีน" />
        <SubjectInput id="jp" title="ญี่ปุ่น" />
        <SubjectInput id="kr" title="เกาหลี" />
        <SubjectInput id="sp" title="สเปน" />
      </section>
    </PanelTemplate>
  );
};
export const ArtContainer = () => {
  return (
    <PanelTemplate id="artContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <h1 className="text-text_primary">ด้านศิลปศาสตร์</h1>
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
export const EduContainer = () => {
  return (
    <PanelTemplate id="eduContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <h1 className="text-text_primary">ด้านศึกษาศาสตร์</h1>
        <EscFormButton />
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="body" title="ทางกาย" />
        <SubjectInput id="goodatart" title="ถนัดทางศิลป์" />
      </div>
    </PanelTemplate>
  );
};
export const MedContainer = () => {
  return (
    <PanelTemplate id="medContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <h1 className="text-text_primary">ด้านเวชนิทัศน์</h1>
        <EscFormButton />
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="techmed" title="เทคโนโลยีเวชนิทัศน์" />
        <SubjectInput id="artmed" title="ศิลป์สำหรับเวชนิทัศน์" />
      </div>
    </PanelTemplate>
  );
};
export const ArchContainer = () => {
  return (
    <PanelTemplate id="archContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <h1 className="text-text_primary">ด้านสถาปัตยกรรม</h1>
        <EscFormButton />
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="arch" title="สถาปัตยกรรม" />
        <SubjectInput id="design" title="การออกแบบ" />
      </div>
    </PanelTemplate>
  );
};



