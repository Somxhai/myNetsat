import React, { useLayoutEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { isInputRequired, patternCheck } from "../../features/EssentialFeatures";
import {
  selectedDataState,
} from "../../States/States";
import { SubjectInputType } from "../../Types/InputType";

const SubjectInput = ({ title, id }: SubjectInputType) => {
  const [state, setState] = useState("");
  const selected = useRecoilValue(selectedDataState)
  const [bgColor, setBgColor] = useState("border-gray-200")
  
  useLayoutEffect(()=>{
    const isRequired = isInputRequired(id, selected)
    isRequired ? setBgColor("border-purple-600") : setBgColor("border-gray-200")
  }, [selected])

  
  return (
    <div className="mt-3">
      <p className="text-text_primary transition-all duration-75">{title}</p>
      <input
      autoComplete="off"
        name={id}
        value={state}
        title={title}
        onChange={(e) => setState(patternCheck(e))}
        className={`${bgColor}  bg-white text-sm px-2 text-text_secondary hover:border-purple-500 focus:outline-none rounded-lg border-b-2`}
        maxLength={6}
      />
    </div>
  );
};
export { SubjectInput };
