import {Link, Route, Routes} from "react-router-dom";
import Home from "./home";
import CorePage from "@/ui/core";
import ComponentsPage from "@/ui/components";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ui/core" element={<CorePage />} />
            <Route path="/ui/components" element={<ComponentsPage/>} />
        </Routes>
    );
}
