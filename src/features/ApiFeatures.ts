import { ValType } from "../Types/DataType";
import { client } from "../API/axios";
import { EngTestNestedType } from "../Types/ArgumentType";

export const getApi = async (suburl: string) => {
  const response = await client.get(`/${suburl}`);
  return response;
};

export const hasCapability = (
  syllabus: string,
  apiData: ValType[]
): boolean => {
  for (const value of apiData) {
    if (value.syllabus == syllabus) {
      return value.has_specific_capability ?? false;
    }
  }
  return false;
};

export const getMinEngTestScore = (
  testName: string,
  facultyEngTest: EngTestNestedType
) => {
  if (facultyEngTest.hasOwnProperty(testName)) return facultyEngTest[testName];
  return NaN;
};

export const isIdSelected = (id: number, data: ValType[]): boolean => {
  for (const val of data) {
    if (val.syllabus_id == id) {
      return true;
    }
  }
  return false;
};
