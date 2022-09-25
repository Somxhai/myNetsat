import React, { useState } from "react";

interface type {
  title: string;
  id: string;

}

const SubjectInput = ({ title, id}: type) => {
  const [state, setState] = useState("");
  const patternCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const pattern = "^([0-9]+\\.?[0-9]*|[0-9]*\\.[0-9]+)$";
    if (value.match(pattern) || value == "") {
      setState(value);
    }
  };
  return (
    <div className="mt-3">
      <p className="text-text_primary">{title}</p>
      <input
        value={state}
        title={title}
        onChange={(e) => patternCheck(e)}
        id={id}
        className="bg-white text-sm px-2 text-text_secondary hover:border-purple-500 focus:outline-none focus:border-green-400 rounded-lg border-b-2"
        maxLength={6}
      />
    </div>
  );
};
export { SubjectInput };
