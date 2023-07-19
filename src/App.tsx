import React from "react";
import Timer from "./components/pages/Timer";
import Stats from "./components/pages/Stats";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import { pathRoutes } from "./const/routes/routes";
import LayoutHelper from "./helpers/LayoutHelper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/fonts.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pathRoutes.layout} element={<LayoutHelper />}>
          <Route index element={<Timer />} />
          <Route path={pathRoutes.timer} element={<Timer />} />
          <Route path={pathRoutes.stats} element={<Stats />} />
          <Route path={pathRoutes.about} element={<About />} />
          <Route path={pathRoutes.error} element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;