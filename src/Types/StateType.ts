

export interface ScoreType {
  [subject:string]: number 
}
export interface EngTestType {
  name: string
  score: number
}
export interface EngTestStoreType {
  [key:string]:{[testname:string]:number}
}