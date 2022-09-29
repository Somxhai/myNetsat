import { atom, DefaultValue, selector } from "recoil";
import { ScoreType } from "../Types/StateType";
import { ValType } from "../Types/DataType";

export const capabilityID = atom({
  key: "capabilityID",
  default: "",
});

export const capabilityFormState = atom({
  key: "capabilityForm",
  default: false,
});

export const selectedDataState = atom({
  key: "selectedDataState",
  default: <ValType[]>[],
});

export const calState = atom({
  key: "calState",
  default: false,
});

export const netsatScore = atom({
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

export const blurScreenState = atom({
  key: "blurscreenState",
  default: false,
});

export const capabilityScore = atom({
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

export const requiredScoreInput = atom({
  key: "requiredScoreInput",
  default: [],
});
export const searchState = atom({
  key: "searchState",
  default: "",
});
