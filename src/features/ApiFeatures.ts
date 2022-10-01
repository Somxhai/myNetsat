
import { ValType } from "../Types/DataType";
import DATA from "../data.json";
import EngTestData from "../engTestData.json";

export const getApi = () => DATA;
export const getEngTest = (faculty: string) => {
  return (
    EngTestData[faculty as keyof typeof EngTestData] ??
    EngTestData["engineer" as keyof typeof EngTestData]
  );
};

export const hasCapability = (syllabus: string): boolean => {
  for (const value of getApi()) {
    if (value.syllabus == syllabus) {
      return value.has_specific_capability ?? false;
    }
  }
  return false;
};

export const getMinEngTestScore = (
  testName: string,
  faculty: string
) => {
  if (getEngTest(faculty).hasOwnProperty(testName)) return getEngTest(faculty)[testName as keyof typeof getEngTest]
  return 0;
};



export const isIdSelected = (id: number, data: ValType[]): boolean => {
  for (const val of data) {
    if (val.syllabus_id == id) {
      return true;
    }
  }
  return false;
};
