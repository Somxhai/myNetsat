export interface ValType {
  syllabus:                string;
  faculty:                 string;
  syllabus_id:             number;
  has_minimum_score:       boolean;
  weight:                  Weight;
  has_specific_capability: boolean;
  is_national:             boolean;
  specific_capability:     SpecificCapability;
  minimum_score?:          MinimumScore;
  min_sum?:                number;
}

export interface MinimumScore {
  math?:     number;
  phy?:      number;
  eng?:      number;
  chem?:     number;
  engineer?: number;
  thai?:     number;
  sci?:      number;
  bio?:      number;
}

export interface SpecificCapability {
  foreign:        Foreign;
  fine_arts:      FineArts;
  engineer:       number;
  architect:      Architect;
  education:      Education;
  medical_vision: MedicalVision;
}

export interface Architect {
  arch:   number;
  design: number;
}

export interface Education {
  body:      number;
  goodatart: number;
}

export interface FineArts {
  drawing: number;
  makeup:  number;
  drawcom: number;
  vart:    number;
  music:   number;
  dance:   number;
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
  artmed:  number;
}
export interface Weight {
  thai: number;
  eng:  number;
  math: number;
  sci:  number;
  chem: number;
  bio:  number;
  phy:  number;
}