import { useLayoutEffect, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useRecoilState } from "recoil";
import { capabilityID } from "../../States/States";
import { PanelType } from "../../Types/PanelType";

const PanelTemplate = ({ children, id }: PanelType) => {
  const [capabilityId, setCapabilityId] = useRecoilState(capabilityID);
  const elm = useRef<HTMLDivElement>(null!);
  const closePanel = () => {
    if (elm.current == null) return;
    if (capabilityId == id) {
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
      className="hidden fixed md:text-md p-5 z-50 bg-white w-fit shadow-2xl rounded-lg left-1/2 -translate-x-1/2"
    >
      {children}
    </div>
  );
};
export default PanelTemplate;
