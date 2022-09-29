import { ValType } from "./DataType"

export interface TableDataType {
  title:string
  score:number
  capabilityData?: boolean
}
export interface NetsatTableType {
  data: ValType
}