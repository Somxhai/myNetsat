import React, { ForwardedRef, MutableRefObject, Ref, RefObject } from "react"


export interface NetsatFormType {
  [key:string]: number
}
export interface CapabilityFormType {
  href: RefObject<HTMLFormElement>
}