import { EngTestNestedType } from "../Types/ArgumentType";
import { ValType } from "../Types/DataType";
import { ScoreType } from "../Types/StateType";

export const checkCapabilitySubject = (capability: string): string => {
  switch (capability.toLowerCase()) {
    // Languages
    case "fr":
      return "ฝรั่งเศส";
    case "gr":
      return "เยอรมัน";
    case "cn":
      return "จีน";
    case "jp":
      return "ญี่ปุ่น";
    case "kr":
      return "เกาหลี";
    // Fine arts
    case "drawing":
      return "การวาดเส้น";
    case "makeup":
      return "ประกอบศิลป์";
    case "drawcom":
      return "วาดเส้นเพื่อการสื่อสาร";
    case "vart":
      return "ออกแบบนิเทศศิลป์";
    case "music":
      return "ดนตรี";
    case "dance":
      return "นาฎศิลป์";
    // Engineer
    case "engineer":
      return "วิศวกรรม";
    // Architect
    case "arch":
      return "สถาปัตยกรรม";
    case "design":
      return "การออกแบบ";
    // Education
    case "body":
      return "ทางกาย";
    case "goodatart":
      return "ถนัดทางศิลป์";
    // Medical Vision
    case "techmed":
      return "เทคโนโลยีเวชนิทัศน์";
    case "artmed":
      return "ศิลป์สำหรับเวชนิทัศน์";
    default:
      return "";
  }
};

export const hasNationalEngOrPhar = (val: ValType[]) => {
  for (const v of val) {
    if (v.is_national && (isEngineer(v) || isPharmarcy(v))) return true;
  }
  return false;
};

export const isEngineer = (data: ValType) => {
  return data.faculty.includes("คณะวิศวกรรมศาสตร์");
};

export const isPharmarcy = (data: ValType) => {
  return data.faculty.includes("คณะเภสัชศาสตร์");
};
/**
 * It takes a string and returns a string that matches the pattern or an empty string.
 * @param e - React.ChangeEvent<HTMLInputElement>
 * @returns The value of the input field.
 */
export const patternCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  const pattern = "^([0-9]+\\.?[0-9]*|[0-9]*\\.[0-9]+)$";
  if (value.match(pattern) || value == "") return value;
  return "";
};
/**
 * It takes a string as an argument and returns a string
 * @param {string} subject - string
 * @returns A string
 */
export const checkNetsatSubject = (subject: string): string => {
  switch (subject.toLowerCase()) {
    case "thai":
      return "ไทย";
    case "eng":
      return "อังกฤษ";
    case "math":
      return "คณิต";
    case "sci":
      return "วิทย์";
    case "bio":
      return "ชีวะ";
    case "chem":
      return "เคมี";
    case "phy":
      return "ฟิสิกส์";
    default:
      return "";
  }
};
export const isBusinessAndAccounting = (data: ValType) => {
  return (
    data.faculty == "คณะบริหารธุรกิจและการบัญชี" &&
    [118, 116].includes(data.syllabus_id)
  );
};

/**
 * If the id is found in the selectedData, return true, else return false.
 * @param {string} id - string
 * @param {ValType[]} selectedData - [{
 */
export const isInputRequired = (id: string, selectedData: ValType[]) => {
  for (const select of selectedData) {
    // search in netsat
    for (const netsatKey of Object.keys(select.weight)) {
      if (
        id == netsatKey &&
        select.weight[netsatKey as keyof typeof select.weight] != 0
      )
        return true;
    }
    // search in capability
    for (const capKey of Object.keys(select.specific_capability)) {
      const capKeyVal =
        select.specific_capability[
          capKey as keyof typeof select.specific_capability
        ];
      if (typeof capKeyVal == "object") {
        for (const capability of Object.keys(capKeyVal)) {
          if (
            id == capability &&
            capKeyVal[capability as keyof typeof capKeyVal] != 0
          )
            return true;
        }
      } else if (typeof capKeyVal == "number") {
        if (
          id == capKey &&
          select.specific_capability[
            capKey as keyof typeof select.specific_capability
          ] != 0
        )
          return true;
      }
    }
  }
  return false;
};
/**
 * It takes a test name, a score, and a nested object of test names and minimum scores, and returns
 * true if the score is greater than or equal to the minimum score for the test name.
 *
 * Here's a more detailed explanation:
 *
 * The function takes three parameters:
 *
 * testName: a string that is the name of the test
 * score: a number that is the score on the test
 * facultyEngTest: an object that has test names as keys and minimum scores as values
 * The function returns true if the score is greater than or equal to the minimum score for the test
 * name.
 *
 * If the test name is not found in the object, the function returns false.
 *
 * Here's an example of the function in action:
 *
 * const facultyEngTest = {
 *   "TOEFL": 80
 * }
 * @param {string} testName - string - the name of the test
 * @param {number} score - number =&gt; the score of the student
 * @param {EngTestNestedType} facultyEngTest - {
 * @returns - If the testName is found in the facultyEngTest object, and the score is greater than or
 * equal to the value of the testName, then return true.
 *   - If the testName is not found in the facultyEngTest object, or the score is less than the value
 * of the testName, then return false.
 */
export const checkMinEngTestScore = (
  testName: string,
  score: number,
  facultyEngTest: EngTestNestedType
) => {
  for (const [k, v] of Object.entries(facultyEngTest))
    if (k == testName && score >= v) return true;
  return false;
};

/**
 * It takes an object with nested objects and returns an array of arrays with the key and value of the
 * nested objects
 * @param {ValType} data - ValType
 * @returns An array of arrays.
 */
export const getAllCapabilityWeight = (data: ValType) => {
  let capAndScore = [];
  for (const [k, v] of Object.entries(data.specific_capability)) {
    if (typeof v == "object") {
      for (const [k1, v1] of Object.entries(v))
        if (v1 != 0) capAndScore.push([k1, v1]);
    } else if (typeof v == "number" && v != 0) capAndScore.push([k, v]);
  }
  return capAndScore;
};

/**
 * It checks if the score object has a minimum score property, and if it does, it checks if the score
 * object has a property that matches the minimum score property, and if it does, it checks if the
 * score object's property value is greater than the minimum score property value
 * @param {ScoreType} scores - ScoreType = {
 * @param {ValType} data - ValType
 * @returns A function that takes two arguments, scores and data.
 */
export const checkMinScore = (scores: ScoreType, data: ValType) => {
  if (data.minimum_score != null) {
    for (const [k, v] of Object.entries(data.minimum_score))
      if (scores[k] < v) return false;
  }
  return true;
};
