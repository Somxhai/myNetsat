import { atom, DefaultValue, selector } from "recoil";
import { ScoreType } from "../Types/StateType";
import { ValType } from "../Types/ValType";

const capabilityID = atom({
  key: "capabilityID",
  default: "",
});

const capabilityFormState = atom({
  key: "capabilityForm",
  default: false,
});

const selectedDataState = atom({
  key: "selectedDataState",
  default: <ValType[]>[],
});

const calState = atom({
  key: "calState",
  default: false,
});

const netsatScore = atom({
  key: "netsatScore",
  default: <ScoreType>{
    thai: NaN,
    eng: NaN,
    math: NaN,
    sci: NaN,
    bio: NaN,
    chem: NaN,
    phy: NaN,
  },
});

const capabilityScore = atom({
  key: "capabilityScore",
  default: <ScoreType>{
    fr: NaN,
    gr: NaN,
    cn: NaN,
    jp: NaN,
    kr: NaN,

    drawing: NaN,
    makeup: NaN,
    
    drawcom: NaN,
    vart: NaN,
    music: NaN,
    dance: NaN,

    engineer: NaN,

    arch: NaN,
    design: NaN,

    body: NaN,
    goodatart: NaN,

    techmed: NaN,
    artmed: NaN,
  },
});

const requiredScoreInput = atom({
  key: "requiredScoreInput",
  default: [],
});
const searchState = atom({
  key: "searchState",
  default: "",
});

export {
  capabilityID,
  capabilityFormState,
  searchState,
  selectedDataState,
  calState,
  netsatScore,
  requiredScoreInput,
  capabilityScore,
};
