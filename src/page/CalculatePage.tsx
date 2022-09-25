import SearchContainer from "../components/SearchComponents/SearchContainer";
import { blurScreen, containerHandler, saveScoreToLocal } from "../features/EssentialFeatures";
import { useHotkeys } from "react-hotkeys-hook";
import CalculateResult from "../components/CalculateResult";
import DataProvider from "../features/DataContext";
import { getNetSatScore } from "../features/GetScores";
import { useState } from "react";
import { CapabilityForm, NetsatForm } from "../components/Forms/NetsatForm";
import "../styles/scrollwheel.css";
import {ArtContainer, EduContainer, LanguagesContainer, MedContainer} from "../components/CapabilityContainer";
const CalculatePage = () => {
  const [trigger, setTrigger] = useState(false);
  useHotkeys("esc", () => {
    blurScreen();
  });
  const sendTrigger = () => {
    saveScoreToLocal(getNetSatScore());
    setTrigger(!trigger);
  };
  
  
  return (
    <DataProvider>
      <SearchContainer />
      <LanguagesContainer />
      <ArtContainer />
      <EduContainer />
      <MedContainer />
      <div
        id="calculatePage"
        className="overflow-x-hidden w-screen m-auto h-screen px-5"
      >
        <div className="my-7 font-mitr relative bg-white px-6 py-3 shadow-sm ring-1 ring-gray-900/5 mx-auto max-w-2xl rounded-lg">
          <p className="text-text_primary text-2xl text-center">
            คำนวณคะแนน Netsat
          </p>

          <div className="border-b-2 md:flex items-start">
            <NetsatForm />
            <CapabilityForm />
          </div>
          <div className="text-sm text-secondary w-fit m-auto mt-3 hover:text-black"></div>
          <div className="mt-7 flex font-[Kanit] align-baseline">
            <button
              onClick={()=>containerHandler('searchContainer')}
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
          <CalculateResult trigger={trigger} />
        </div>
      </div>
    </DataProvider>
  );
};

export default CalculatePage;
