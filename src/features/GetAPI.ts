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
const getWeightBySyllabus = (syllabus: string): weightType => {
  let weight = { thai: 0, eng: 0, math: 0, sci: 0, chem: 0, bio: 0, phy: 0 };
  getApi().forEach((val) => {
    if (val.syllabus == syllabus) {
        weight = val.weight
    }
  });
  return weight;
};

export { getApi, getFacultyBySyllabus, getWeightBySyllabus, hasCapability };
