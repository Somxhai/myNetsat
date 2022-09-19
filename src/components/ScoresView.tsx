import { useState } from "react";
import { getFacultyBySyllabus } from "../features/GetAPI";

interface type {
  startCal: boolean;
  syllabus: string;
}

const ScoresView = ({ startCal, syllabus }: type) => {
    const [score, setScore] = useState("00.000")
    
  const faculty = getFacultyBySyllabus(syllabus);
  return (
    <div className="flex  py-5 px-5">
      <div className="border-b-2 flex items-center w-screen justify-between">
        <div>
          <p className="text-black text-ellipsis">{syllabus}</p>
          <p className="text-secondary text-xs text-ellipsis">{faculty}</p>
        </div>
        <div className="text-md font-medium">
            {score}
        </div>
      </div>
    </div>
  );
};
export default ScoresView;
