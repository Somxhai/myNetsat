import { RefObject } from "react"


export interface NetsatFormType {
  [key:string]: number
}
export interface CapabilityFormType {
  href: RefObject<HTMLFormElement>
}
export interface DropDownButtonType {
  title:string
  onClick:Function
}