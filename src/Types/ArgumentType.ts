import { ValType } from "./DataType";

export interface ValTypeArgument {
  data: ValType;
}
export interface EngTestNestedType {
  [testname:string]:number
}