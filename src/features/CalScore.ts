interface netsatType {
  [key: string]: number;
}
interface scoreType {
  [key: string]: number;
}
interface capabilityType {
  [key: string]: any;
}

const calNetsatScore = (weight: netsatType, score: netsatType): number => {
  let sum: number = 0;
  for (const key of Object.keys(weight)) {
    if (isNaN(score[key]) && weight[key] != 0) {
      return -1;
    } else if (!isNaN(score[key]) && weight[key] != 0) {
      const percentage = weight[key] / 100;
      sum += percentage * score[key];
    }
  }
  return sum;
};
const calCapabilityScore = (
  weight: capabilityType,
  score: capabilityType
): number => {
  var sum = 0;
  for (const key of Object.keys(weight)) {
    if (typeof weight[key] === "object") {
      for (const capability of Object.keys(weight[key])) {
        let sumScore = 0
        if (weight[key][capability] != 0 && isNaN(score[key][capability])) {
          return -1;
        } else if (!isNaN(score[key][capability])) {
          sumScore = (weight[key][capability] / 100) * score[key][capability];
          sum += sumScore
        }
      }
    } else if (typeof weight[key] === "number" && !isNaN(score[key])) {
      const percentage = weight[key] / 100;
      sum += percentage * score[key];
    }
  }
  return sum;
};

export { calNetsatScore, calCapabilityScore };
