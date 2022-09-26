import SearchContainer from "../components/SearchComponents/SearchContainer";
import { blurScreen } from "../features/EssentialFeatures";
import CalculateResult from "../components/CalculateResult";
import { getNetSatScore } from "../features/GetScores";
import { useEffect } from "react";
import { CapabilityForm, NetsatForm } from "../components/Forms/NetsatForm";
import {
  ArchContainer,
  ArtContainer,
  EduContainer,
  LanguagesContainer,
  MedContainer,
} from "../components/CapabilityContainer";
import {
  calState,
  capabilityFormState,
  capabilityState,
  netsatScoreState,
  selectedSyllabusState,
} from "../components/States/CapabilityState";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { hasCapability } from "../features/GetAPI";

const CalculatePage = () => {
  const setScore = useSetRecoilState(netsatScoreState);
  const [trigger, setTrigger] = useRecoilState(calState);
  const setForm = useSetRecoilState(capabilityState);
  const [capabilityForm, setCapabilityForm] = useRecoilState(capabilityFormState);
  const selected = useRecoilValue(selectedSyllabusState);
  useEffect(() => {
    let show = false;
    for (const v of selected) {
      if (hasCapability(v)) {
        show = true;
      }
    }
    show ? setCapabilityForm(true) : setCapabilityForm(false);
  }, [selected]);

  const sendTrigger = () => {
    setScore(getNetSatScore());
    setTrigger(!trigger);
  };
  return (<div className="">
      <SearchContainer />,
      <LanguagesContainer />,
      <ArtContainer />,
      <EduContainer />,
      <MedContainer />,
      <ArchContainer />
      <div
        id="calculatePage"
        className="overflow-x-hidden w-screen m-auto px-5"
      >
        <div className="my-7 font-mitr relative bg-white px-6 py-3 shadow-sm ring-1 ring-gray-900/5 mx-auto max-w-2xl rounded-lg">
          <p className="text-text_primary text-2xl text-center">
            คำนวณคะแนน Netsat
          </p>

          <div className="border-b-2 md:flex items-start">
            <NetsatForm />
            {capabilityForm ? <CapabilityForm /> : null}
          </div>
          <div className="text-sm text-secondary w-fit m-auto mt-3 hover:text-black"></div>
          <div className="mt-7 flex font-[Kanit] align-baseline">
            <button
              onClick={() => {
                blurScreen();
                setForm("searchContainer");
              }}
              className="cursor-pointer select-none border-b-2 text-base text-purple-500  w-fit py-2 px-5 rounded-xl flex m-auto mt-3 hover:bg-slate-100 lg:px-12 lg:mt-5"
            >
              เลือกคณะ
            </button>
            <button
              onClick={sendTrigger}
              className="cursor-pointer select-none border-b-2 text-base text-green-500 w-fit py-2 px-5 rounded-xl flex m-auto mt-3 hover:bg-slate-100  lg:px-12 lg:mt-5"
            >
              คำนวณ
            </button>
          </div>
        </div>
        <div className="px-3 pb-9 md:px-9">
          <CalculateResult />
        </div>
      </div>
    </div>
  );
};

export default CalculatePage;
