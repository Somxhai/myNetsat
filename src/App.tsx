import { Route, BrowserRouter, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CalculatePage from "./page/CalculatePage";

const Apps = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CalculatePage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};
export default Apps;
