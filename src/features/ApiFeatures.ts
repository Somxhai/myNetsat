import { useRecoilValue } from "recoil";
import { selectedDataState } from "../components/States/States";
import { ValType } from "../components/Types/ValType";
import DATA from "../data.json";

type weightType = {
  [subject: string]: number;
};
type capabilityWeightType = {
  [mainCapability: string]: number | { [capability: string]: number };
};
const getApi = () => DATA;
const getFacultyBySyllabus = (syllabus: string): string => {
  let result = "";
  getApi().forEach((val) => {
    if (val.syllabus == syllabus) {
      result = val.faculty;
    }
  });
  return result;
};
const hasCapability = (syllabus: string): boolean => {
  for (const value of getApi()) {
    if (value.syllabus == syllabus) {
      return value.has_specific_capability ?? false;
    }
  }
  return false;
};

const getRequiredInputId = (syllabus: string) => {
  for (const value of getApi()) {
   
  }
};

const getNetsatWeightBySyllabus = (syllabus: string): weightType => {
  let weight = {};
  getApi().forEach((val) => {
    if (val.syllabus == syllabus) {
      weight = { ...val.weight };
    }
  });
  return weight;
};
const getCapabilityWeightBySyllabus = (
  syllabus: string
): capabilityWeightType => {
  let weight: capabilityWeightType = {};
  getApi().forEach((val) => {
    if (val.syllabus == syllabus && val.has_specific_capability) {
      weight = { ...val.specific_capability };
    }
  });
  return weight;
};

const isIdSelected = (id:number, data:ValType[]):boolean => {
  for (const val of data) {
    if (val.syllabus_id == id) {
      return true;
    }
  }
  return false;
}



export {
  isIdSelected,
  getApi,
  getFacultyBySyllabus,
  getNetsatWeightBySyllabus,
  hasCapability,
  getCapabilityWeightBySyllabus,
};
