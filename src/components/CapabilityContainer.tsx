import { EscFormButton } from "./Template/Buttons";
import CapabilityPanel from "./Template/CapabilityPanel";
import { SubjectInput } from "./SubjectInput";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { capabilityState } from "./States/CapabilityState";

const LanguagesContainer = () => {
  const capabilityId = useRecoilValue(capabilityState);
  const languageContainer = document.getElementById("languageContainer")
  useEffect(()=>{
    if (languageContainer == null) return;
    if (capabilityId.includes("languageContainer")) {
      languageContainer.classList.remove('hidden')
    } else {
      languageContainer.classList.add('hidden')
    }
      
  }, [capabilityId])
  return (
    <CapabilityPanel id="languageContainer">
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
    </CapabilityPanel>
  );
};
const ArtContainer = () => {
  const capabilityId = useRecoilValue(capabilityState);
  const artContainer = document.getElementById("artContainer")
  useEffect(()=>{
    if (artContainer == null) return;
    if (capabilityId.includes("artContainer")) {
      artContainer.classList.remove('hidden')
    } else {
      artContainer.classList.add('hidden')
    }
      
  }, [capabilityId])
  return (
    <CapabilityPanel id="artContainer">
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
    </CapabilityPanel>
  );
};
const EduContainer = () => {
  const capabilityId = useRecoilValue(capabilityState);
  const eduContainer = document.getElementById("eduContainer")
  useEffect(()=>{
    if (eduContainer == null) return;
    if (capabilityId.includes("eduContainer")) {
      eduContainer.classList.remove('hidden')
    } else {
      eduContainer.classList.add('hidden')
    }
      
  }, [capabilityId])
  return (
    <CapabilityPanel id="eduContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <p className="text-text_primary">ด้านศึกษาศาสตร์</p>
        <EscFormButton />
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="body" title="ทางกาย" />
        <SubjectInput id="goodatart" title="ถนัดทางศิลป์" />
      </div>
    </CapabilityPanel>
  );
};
const MedContainer = () => {
  const capabilityId = useRecoilValue(capabilityState);
  const medContainer = document.getElementById("medContainer")
  useEffect(()=>{
    if (medContainer == null) return;
    if (capabilityId.includes("medContainer")) {
      medContainer.classList.remove('hidden')
    } else {
      medContainer.classList.add('hidden')
    }
      
  }, [capabilityId])
  return (
    <CapabilityPanel id="medContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <p className="text-text_primary">ด้านเวชนิทัศน์</p>
        <EscFormButton />
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="techmed" title="เทคโนโลยีเวชนิทัศน์" />
        <SubjectInput id="artmed" title="ศิลป์สำหรับเวชนิทัศน์" />
      </div>
    </CapabilityPanel>
  );
};
const ArchContainer = () => {
  const capabilityId = useRecoilValue(capabilityState);
  const archContainer = document.getElementById("artContainer")
  useEffect(()=>{
    if (archContainer == null) return;
    if (capabilityId.includes("artContainer")) {
      archContainer.classList.remove('hidden')
    } else {
      archContainer.classList.add('hidden')
    }
      
  }, [capabilityId])
  return (
    <CapabilityPanel id="archContainer">
      <div className="border-b-2 flex pb-2 justify-between">
        <p className="text-text_primary">ด้านสถาปัตยกรรม</p>
        <EscFormButton />
      </div>
      <div className="p-5 text-left">
        <SubjectInput id="arch" title="สถาปัตยกรรม" />
        <SubjectInput id="design" title="การออกแบบ" />
      </div>
    </CapabilityPanel>
  );
};

export {
  LanguagesContainer,
  ArtContainer,
  EduContainer,
  MedContainer,
  ArchContainer,
};
