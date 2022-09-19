import { Route, BrowserRouter, Routes } from "react-router-dom"
import CalculatePage from "./page/CalculatePage"

const Apps = () => {
    return (<BrowserRouter>
    <Routes>
        <Route path="/" element={<CalculatePage />}/>
    </Routes>
    </BrowserRouter>)
}
export default Apps