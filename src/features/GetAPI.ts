import DATA from "../data.json";

const getApi = () => DATA;
const getFacultyBySyllabus = (syllabus: string): string => {
  let result;
  getApi().forEach((val) => {
    if (val.syllabus == syllabus) {
      result = val.faculty;
    }
  });
  return result ?? "";
};
const hasCapability = (syllabus:string) => {
  for (const i of getApi()) {
    if (i.syllabus == syllabus) {
      return i.has_specific_capability
    }
  }
  return false
}

type weightType = {
  [subject:string]: number
}
type capabilityWeightType = {
  [mainCapability:string]: number | {[capability:string]:number}
}
const getNetsatWeightBySyllabus = (syllabus: string): weightType => {
  let weight = {};
  getApi().forEach((val) => {
    if (val.syllabus == syllabus) {
        weight = {...val.weight}
    }
  });
  return weight;
};
const getCapabilityWeightBySyllabus = (syllabus: string): capabilityWeightType => {
  let weight:capabilityWeightType = {};
  getApi().forEach((val) => {
    if (val.syllabus == syllabus && val.has_specific_capability) {
        weight = {...val.specific_capability}
    }
  });
  return weight;
};

export { getApi, getFacultyBySyllabus, getNetsatWeightBySyllabus, hasCapability, getCapabilityWeightBySyllabus };
