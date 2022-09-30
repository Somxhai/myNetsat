import { ValType } from "../Types/DataType";


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

export const isInputRequired = (id: string, selectedData: ValType[]) => {
  for (const select of selectedData) {
    // search in netsat
    for (const netsatKey of Object.keys(select.weight)) {
      if (
        id == netsatKey &&
        select.weight[netsatKey as keyof typeof select.weight] != 0
      ) {
        return true;
      }
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


export const getAllCapabilityWeight = (data:ValType) => {
  let capAndScore = []
  for (const [k, v] of Object.entries(data.specific_capability)) {
    if (typeof v == 'object') {
      for (const [k1, v1] of Object.entries(v)) {
        if (v1 != 0) capAndScore.push([k1, v1])
      }
    } else if (typeof v == 'number' && v != 0) {
      capAndScore.push([k, v])
    }
  }
  return capAndScore
}