import { forwardRef } from "react";

interface netsatType {
  [key: string]: number;
}

interface capabilityType {
  [key: string]: any;
}

const calNetsatScore = (weight: any, score: netsatType) => {
  let sum: number = 0;
  for (const key of Object.keys(weight)) {
    if (isNaN(score[key]) && weight[key] != 0) {
      return NaN;
    } else if (!isNaN(score[key]) && weight[key] != 0) {
      sum += (weight[key]/100 * score[key]);
    }
  }
  return sum;
};

const calCapabilityScore = (
  weight: capabilityType,
  score: capabilityType
): number => {
  let sum = 0;
  for (const key of Object.keys(weight)) {
    // language, fine_art etc.
    const capability = weight[key];
    // language: {thai: 0, eng: 0, ...}
    if (typeof capability == "object") {
      // loop through nested object
      for (const subject of Object.keys(capability)) {
        // example: thai != 0 (thai is required) and score is not NaN
        if (capability[subject] != 0 && isNaN(score[subject])) return NaN;
        if (capability[subject] != 0 && !isNaN(score[subject])) {
          const cal = (capability[subject] / 100) * score[subject];
          sum += cal;
        }
      }
    } else if (
      typeof capability == "number" &&
      capability != 0 &&
      !isNaN(score[key])
    ) {
      const cal = (capability / 100) * score[key];
      sum += cal;
    }
  }

  return sum;
};

export { calNetsatScore, calCapabilityScore };
