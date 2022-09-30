export interface ValType {
  syllabus: string;
  faculty: string;
  syllabus_id: number;
  weight: Weight;
  has_specific_capability: boolean;
  specific_capability: SpecificCapability;
}
export interface ArgumentValType {
  key: number | string;
  value: ValType;
}

export interface SpecificCapability {
  foreign: Foreign;
  fine_arts: FineArts;
  engineer: number;
  architect: Architect;
  education: Education;
  medical_vision: MedicalVision;
}

export interface Architect {
  arch: number;
  design: number;
}

export interface Education {
  body: number;
  goodatart: number;
}

export interface FineArts {
  drawing: number;
  makeup: number;
  drawcom: number;
  vart: number;
  music: number;
  dance: number;
}

export interface Foreign {
  fr: number;
  gr: number;
  cn: number;
  jp: number;
  kr: number;
}

export interface MedicalVision {
  techmed: number;
  artmed: number;
}

export interface Weight {
  thai: number;
  eng: number;
  math: number;
  sci: number;
  chem: number;
  bio: number;
  phy: number;
}
