import { useHotkeys } from "react-hotkeys-hook"
import { useResetRecoilState } from "recoil"
import { blurScreen } from "../../features/EssentialFeatures"
import { capabilityState } from "../States/CapabilityState"


const CapabilityPanel = ({children, id}:any) => {
  const resetState = useResetRecoilState(capabilityState)
  useHotkeys('esc', ()=>{
    blurScreen()
    resetState()})
    return (<div className="px-3 w-screen h-screen absolute">
        <div
        id={id}
        className="hidden p-7 max-w-2xl min-w-fit fixed z-10 bg-white shadow-xl left-1/2 -translate-x-1/2 translate-y-5 rounded-lg"
      >
        {children}
      </div>
    </div>)
}
export default CapabilityPanel