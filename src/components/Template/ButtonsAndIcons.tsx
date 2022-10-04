import { isInputRequired } from "../../features/EssentialFeatures";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import {
  blurScreenState,
  capabilityID,
  selectedDataState,
} from "../../States/States";
import { useEffect, useState } from "react";
import { IconType, OpenFormType } from "../../Types/ButtonType";
export const CheckIcon = ({ className }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className} w-6 h-6`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
};

export const EscIcon = ({ className }: IconType) => {
  return (
    <div
      className={`${className} text-xs bg-white border-b-2 border-gray-300 p-1 rounded-lg z-20 hover:border-red-400`}
      id="escapeKey"
    >
      ESC
    </div>
  );
};
export const NoSymbolIcon = ({ className }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className} w-6 h-6`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
    </svg>
  );
};
export const BookOpenIcon = ({ className }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className} w-6 h-6`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
};

export const MagnifyingGlassIcon = ({ className }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className}w-6 h-6`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
};

export const OpenFormButton = ({
  title,
  placeholder,
  containerID,
  ids,
}: OpenFormType) => {
  const setForm = useSetRecoilState(capabilityID);
  const selected = useRecoilValue(selectedDataState);
  const [bgColor, setBgColor] = useState("border-gray-200");
  const [blur, setBlur] = useRecoilState(blurScreenState);
  useEffect(() => {
    let change = false;
    for (const id of ids) {
      const isRequired = isInputRequired(id, selected);
      if (isRequired) {
        change = true;
        break;
      }
    }
    change ? setBgColor("border-purple-600") : setBgColor("border-gray-200");
  }, [selected]);
  return (
    <button
      className="outline-none"
      title={placeholder}
      onClick={(e) => {
        setBlur(!blur);
        setForm(containerID);
        e.preventDefault();
      }}
    >
      <div className="mt-3">
        <p className="text-text_primary">{title}</p>
        <div
          className={`${bgColor} m-auto rounded-lg text-sm w-48 border-b-2 line-clamp-1 px-3 pt-2  select-none text-text_secondary hover:border-purple-500 max-w-xs`}
        >
          {placeholder}
        </div>
      </div>
    </button>
  );
};
export const InfoIcon = ({ className }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`${className} w-6 h-6`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
};
export const DownIcon = ({ className }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`${className} w-5 h-5`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export const EscFormButton = () => {
  const resetID = useResetRecoilState(capabilityID);
  const [blur, setBlur] = useRecoilState(blurScreenState);
  return (
    <button
      onClick={() => {
        setBlur(!blur);
        resetID();
      }}
      className="text-secondary"
    >
      <EscIcon />
    </button>
  );
};

export const CloseIcon = ({ className }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`${className} w-3 h-3 md:h-5 md:w-5`}
    >
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  );
};
