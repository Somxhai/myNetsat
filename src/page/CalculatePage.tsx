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
      prevClone.fr = parseInt(capabilityFormRef.current["fr"].value);
      prevClone.gr = parseInt(capabilityFormRef.current["gr"].value);
      prevClone.cn = parseInt(capabilityFormRef.current["cn"].value);
      prevClone.jp = parseInt(capabilityFormRef.current["jp"].value);
      prevClone.kr = parseInt(capabilityFormRef.current["kr"].value);

      prevClone.drawing = parseInt(capabilityFormRef.current["drawing"].value);
      prevClone.makeup = parseInt(capabilityFormRef.current["makeup"].value);
      prevClone.engineer = parseInt(engineerFormRef.current["engineer"].value);
      prevClone.drawcom = parseInt(capabilityFormRef.current["drawcom"].value);
      prevClone.vart = parseInt(capabilityFormRef.current["vart"].value);
      prevClone.music = parseInt(capabilityFormRef.current["music"].value);
      prevClone.dance = parseInt(capabilityFormRef.current["dance"].value);

      prevClone.arch = parseInt(capabilityFormRef.current["arch"].value);
      prevClone.design = parseInt(capabilityFormRef.current["design"].value);

      prevClone.body = parseInt(capabilityFormRef.current["body"].value);
      prevClone.goodatart = parseInt(
        capabilityFormRef.current["goodatart"].value
      );

      prevClone.techmed = parseInt(capabilityFormRef.current["techmed"].value);
      prevClone.artmed = parseInt(capabilityFormRef.current["artmed"].value);
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
          <div className="text-sm text-secondary w-fit m-auto mt-3 hover:text-black"></div>
          <div className="mt-7 flex font-[Kanit] align-baseline">
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
        </p>
      </div>
    </main>
  );
};

export default CalculatePage;
