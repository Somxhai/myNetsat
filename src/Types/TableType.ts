import { ValType } from "./DataType";

export interface TableDataType {
  title: string;
  score: number;
  capabilityData?: boolean;
  minScore?: number | null | undefined
}
export interface ValTypeArgument {
  data: ValType;
}
