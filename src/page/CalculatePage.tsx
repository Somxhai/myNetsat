import SearchContainer from "../components/SearchComponents/SearchContainer";
import { blurScreen } from "../features/SearchFacultyFeatures";
import { useHotkeys } from "react-hotkeys-hook";
import SubjectInput from "../components/SubjectInput";
import CalculatorResult from "../components/CalculatorResult";
import DataProvider from "../features/DataContext";
import { getAllScore } from "../features/GetInputScores";
import { saveScoreToLocal } from "../features/SaveScoreToLocalStorage";
import { useState } from "react";
import {NetsatForm} from "../components/Forms/NetsatForm";

const CalculatePage = () => {
  const [trigger, setTrigger] = useState(false);
  useHotkeys("esc", () => {
    blurScreen();
  });
  const sendTrigger = () => {
    saveScoreToLocal(getAllScore());
    setTrigger(!trigger);
  }

  return (
    <DataProvider>
      <SearchContainer />
      <div id="calculator" className=" overflow-x-hidden w-screen m-auto h-screen px-5">
        <div className="my-7 font-mitr relative bg-white px-6 py-3 shadow-sm ring-1 ring-gray-900/5 mx-auto max-w-2xl rounded-lg">
          <p className="text-text_primary text-2xl text-center">คำนวณคะแนน Netsat</p>
          
          <div className="border-b-2">
            <NetsatForm />
          </div>
          <div className="text-sm text-secondary w-fit m-auto mt-3 hover:text-black"></div>
          <div className="mt-7 flex">
            <button
              onClick={blurScreen}
              className=" cursor-pointer select-none text-white bg-gray-600 w-fit py-2 px-5 rounded-xl flex m-auto mt-3 hover:bg-gray-400 lg:px-12 lg:mt-5"
            >
              เลือกคณะ
            </button>
            <button
              onClick={sendTrigger}
              className="cursor-pointer select-none text-white bg-green-500 w-fit py-2 px-5 rounded-xl flex m-auto mt-3 hover:bg-green-400 lg:px-12 lg:mt-5"
            >
              คำนวณ
            </button>
          </div>
        </div>
        <div className="px-3 pb-9 md:px-9 overflow-x-hidden">
          <CalculatorResult trigger={trigger} />
        </div>
      </div>
    </DataProvider>
  );
};

export default CalculatePage;
