import SearchContainer from "../components/SearchComponents/SearchContainer";
import CalculateResult from "../components/CalculateResult";
import { useEffect, useLayoutEffect, useRef } from "react";
import { CapabilityForm, NetsatForm } from "../components/Forms/NetsatForm";
import {
  ArchContainer,
  ArtContainer,
  EduContainer,
  LanguagesContainer,
  MedContainer,
} from "../components/Forms/CapabilityContainer";
import {
  blurScreenState,
  calState,
  capabilityID,
  capabilityScore,
} from "../components/States/States";
import { useRecoilState, useSetRecoilState } from "recoil";

const CalculatePage = () => {
  const [blur, setBlur] = useRecoilState(blurScreenState);
  const [trigger, setTrigger] = useRecoilState(calState);
  const [capScore, setCapScore] = useRecoilState(capabilityScore);
  const setForm = useSetRecoilState(capabilityID);
  const capabilityFormRef = useRef<HTMLFormElement>(null!);
  const engineerFormRef = useRef<HTMLFormElement>(null!);
  const calculatePageRef = useRef<HTMLDivElement>(null!);
  const initial = useRef(true);
  useLayoutEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    calculatePageRef.current.classList.contains("blurScreen")
      ? calculatePageRef.current.classList.remove("blurScreen")
      : calculatePageRef.current.classList.add("blurScreen");
  }, [blur]);
  useEffect(() => {
    setCapScore(() => {
      const prevClone = structuredClone(capScore);
      prevClone.fr = parseFloat(capabilityFormRef.current["fr"].value);
      prevClone.gr = parseFloat(capabilityFormRef.current["gr"].value);
      prevClone.cn = parseFloat(capabilityFormRef.current["cn"].value);
      prevClone.jp = parseFloat(capabilityFormRef.current["jp"].value);
      prevClone.kr = parseFloat(capabilityFormRef.current["kr"].value);

      prevClone.drawing = parseFloat(capabilityFormRef.current["drawing"].value);
      prevClone.makeup = parseFloat(capabilityFormRef.current["makeup"].value);
      prevClone.engineer = parseFloat(engineerFormRef.current["engineer"].value);
      prevClone.drawcom = parseFloat(capabilityFormRef.current["drawcom"].value);
      prevClone.vart = parseFloat(capabilityFormRef.current["vart"].value);
      prevClone.music = parseFloat(capabilityFormRef.current["music"].value);
      prevClone.dance = parseFloat(capabilityFormRef.current["dance"].value);

      prevClone.arch = parseFloat(capabilityFormRef.current["arch"].value);
      prevClone.design = parseFloat(capabilityFormRef.current["design"].value);

      prevClone.body = parseFloat(capabilityFormRef.current["body"].value);
      prevClone.goodatart = parseFloat(
        capabilityFormRef.current["goodatart"].value
      );

      prevClone.techmed = parseFloat(capabilityFormRef.current["techmed"].value);
      prevClone.artmed = parseFloat(capabilityFormRef.current["artmed"].value);
      for (const key of Object.keys(prevClone)) {
        if (prevClone[key] > 100) prevClone[key] = 100;
      }
      return prevClone;
    });
  }, [trigger]);
  return (
    <main>
      <SearchContainer />
      <form ref={capabilityFormRef} onSubmit={(e) => e.preventDefault()}>
        <LanguagesContainer />
        <ArtContainer />
        <EduContainer />
        <MedContainer />
        <ArchContainer />
      </form>
      <div
        id="calculatePage"
        ref={calculatePageRef}
        className="w-screen m-auto px-5 overflow-y-hidden"
      >
        <div className="my-7 font-mitr relative bg-white px-6 py-3 shadow-sm ring-1 ring-gray-900/5 m-auto max-w-2xl rounded-lg ">
          <p className="text-text_primary text-2xl text-center">
            คำนวณคะแนน Netsat
          </p>
          <div className="border-b-2 md:flex md:justify-around">
            <NetsatForm />
            <form ref={engineerFormRef}>
              <CapabilityForm />
            </form>
          </div>
          <div className="text-xs text-secondary w-fit mt-3">
            <p>* ใช้คะแนนดิบในการคำนวณ เว็บจะคำนวณเป็น % ให้</p>
          </div>
          <div className="mt-5 flex font-[Kanit] align-baseline">
            <button
              onClick={() => {
                setBlur(!blur);
                setForm("searchContainer");
              }}
              className="cursor-pointer select-none border-b-2 text-base text-white bg-purple-500 w-fit py-2 px-5 rounded-xl flex m-auto mt-3 hover:bg-purple-300 lg:px-12 lg:mt-5"
            >
              เลือกคณะ
            </button>
            <button
              onClick={() => setTrigger(!trigger)}
              className="cursor-pointer select-none border-b-2 text-base text-white bg-green-500 w-fit py-2 px-5 rounded-xl flex m-auto mt-3 hover:bg-green-300  lg:px-12 lg:mt-5"
            >
              คำนวณ
            </button>
          </div>
        </div>
        <CalculateResult />
        <p className="text-text_secondary text-center pb-3">
          Made by{" "}
          <a
            target="_blank"
            href="https://www.instagram.com/peaktoleast/"
            className="underline"
          >
            Somxhai
          </a>
          <p>
            ขอบคุณข้อมูลจาก{" "}
            <a
              target="_blank"
              className="underline"
              href="https://admissions.kku.ac.th/quota65/?fbclid=IwAR1_7d5q1T-Tmfb2wwdLjdasGG7JlgbkOcCYZTb9RBiddJtu1X1UwonXpek"
            >
              admissions.kku.ac.th/quota65
            </a>
          </p>
        </p>
      </div>
    </main>
  );
};

export default CalculatePage;
