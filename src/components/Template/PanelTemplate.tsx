import { useLayoutEffect, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useRecoilState } from "recoil";
import { blurScreenState, capabilityID } from "../../States/States";
import { PanelType } from "../../Types/PanelType";

const PanelTemplate = ({ children, id }: PanelType) => {
  const [capabilityId, setCapabilityId] = useRecoilState(capabilityID);
  const elm = useRef<HTMLDivElement>(null!);
  const [blur, setBlur] = useRecoilState(blurScreenState);
  const closePanel = () => {
    if (elm.current == null) return;
    if (capabilityId == id) {
      setBlur(!blur);
      setCapabilityId("");
    }
  };

  useHotkeys("esc", () => closePanel());

  useLayoutEffect(() => {
    if (elm.current == null) return;
    if (capabilityId == id) {
      elm.current.classList.remove("hidden");
    } else {
      elm.current.classList.add("hidden");
    }
  }, [capabilityId]);

  return (
    <div
      ref={elm}
      id={id}
      // left-1/2 -translate-x-1/2 translate-y-5
      className="hidden fixed first-line:text-sm md:text-md p-5 max-w-2xl m-auto t w-fit h-fit z-10 bg-white shadow-xl left-1/2 -translate-x-1/2 translate-y-5 rounded-lg"
    >
      {children}
    </div>
  );
};
export default PanelTemplate;
