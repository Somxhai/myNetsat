import { useLayoutEffect, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { useRecoilState } from "recoil";
import { blurScreen } from "../../features/EssentialFeatures";
import { capabilityID } from "../States/States";
import { PanelType } from "../Types/PanelType";

const PanelTemplate = ({ children, id }: PanelType) => {
  const [capabilityId, setCapabilityId] = useRecoilState(capabilityID);
  const elm = useRef<HTMLDivElement>(null!);

  useHotkeys("esc", () => {
    if (elm.current == null) return;
    if (!elm.current?.classList) {
      blurScreen();
      setCapabilityId("");
    }
  });
  useLayoutEffect(() => {
    if (elm.current == null) return;
    if (capabilityId == id) {
      elm.current.classList.remove("hidden");
    } else {
      elm.current.classList.add("hidden");
    }
  }, [capabilityId]);

  return (
    <div className="px-3 absolute">
      <div
        ref={elm}
        id={id}
        className="hidden p-5 max-w-2xl min-w-fit fixed z-10 bg-white shadow-xl left-1/2 -translate-x-1/2 translate-y-5 rounded-lg"
      >
        {children}
      </div>
    </div>
  );
};
export default PanelTemplate;
