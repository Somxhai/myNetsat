import { isInputRequired } from "../../features/EssentialFeatures";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { blurScreenState, capabilityID, selectedDataState } from "../../States/States";
import { useEffect, useState } from "react";

const CloseIcon = () => {
  return (
    <div
      className="text-xs bg-white border-b-2 border-gray-300 p-1 rounded-lg z-20 hover:border-red-400 "
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
  const [blur, setBlur] = useRecoilState(blurScreenState);
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
        setBlur(!blur)
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
const InfoIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>

}
const DownIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
</svg>


}
const EscFormButton = () => {
  const resetID = useResetRecoilState(capabilityID);
  const [blur, setBlur] = useRecoilState(blurScreenState);
  return (
    <button
      onClick={() => {
        setBlur(!blur)
        resetID();
      }}
      className="text-secondary"
    >
      <CloseIcon />
    </button>
  );
};

export { CloseIcon, OpenFormButton, EscFormButton, InfoIcon, DownIcon };
