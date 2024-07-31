import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<AboutMe />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
