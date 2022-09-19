import React, { useState } from "react";

interface type {
  title: string;
  id: string;
}

const SubjectInput = ({ title, id }: type) => {
    const [state, setState] = useState("")
    const patternCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        const pattern="^([0-9]+\\.?[0-9]*|[0-9]*\\.[0-9]+)$"
        if (value.match(pattern) || value == "") {
            setState(value)
        }
    }
  return (
    <div className="mt-3">
      <p className="text-black">{title}</p>
      <input
        value={state}
        onChange={e => patternCheck(e)}
        id={id}
        className="bg-white focus:outline-none rounded-lg border-2 "
        maxLength={6}
      />
    </div>
  );
};
export default SubjectInput;
