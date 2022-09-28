import { blurScreen, isInputRequired } from "../../features/EssentialFeatures";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { capabilityID, selectedDataState } from "../States/States";
import { useEffect, useState } from "react";

const CloseIcon = () => {
  return (
    <div
      className="text-xs bg-white border-b-2 border-gray-300 p-1 rounded-lg z-20 hover:border-red-400"
      id="escapeKey"
    >
      ESC
    </div>
  );
};

interface OpenFormType {
  title: string;
  placeholder: string;
  containerID: string;
  ids: string[]
}
const OpenFormButton = ({ title, placeholder, containerID, ids }: OpenFormType) => {
  const setForm = useSetRecoilState(capabilityID);
  const selected = useRecoilValue(selectedDataState)
  const [bgColor, setBgColor] = useState("border-gray-200")
  useEffect(()=>{
    let change = false
    for (const id of ids) {
      const isRequired = isInputRequired(id, selected)
      if (isRequired) {
        change = true
        break;
      }
    }
    change ? setBgColor("border-purple-600") : setBgColor("border-gray-200")
  }, [selected])
  return (
    <button
      className="outline-none"
      title={placeholder}
      onClick={(e) => {
        blurScreen();
        setForm(containerID);
        e.preventDefault();
      }}
    >
      <div className="mt-3">
        <p className="text-text_primary">{title}</p>
        <div className={`${bgColor} m-auto rounded-lg text-sm w-48 border-b-2 line-clamp-1 px-3 pt-2  select-none text-text_secondary hover:border-purple-500 max-w-xs`}>
          {placeholder}
        </div>
      </div>
    </button>
  );
};
const EscFormButton = () => {
  const resetID = useResetRecoilState(capabilityID);
  return (
    <button
      onClick={() => {
        blurScreen()
        resetID();
      }}
      className="text-secondary"
    >
      <CloseIcon />
    </button>
  );
};

export { CloseIcon, OpenFormButton, EscFormButton };
