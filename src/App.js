import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/style/reset.css'
import './assets/style/common.css'

import Home from "./components/Home";
import Step1 from "./components/Step1";
import Camera from "./components/Camera";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Generate from "./components/Generate";
import Complete from "./components/Complete";
import NotFound from "./components/NotFound.js";

const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path={`*`} element={<NotFound />} />
          <Route path={`/`} element={<Home />} />
          <Route path={`/step1/`} element={<Step1 />} />
          <Route path={`/camera/`} element={<Camera />} />
          <Route path={`/step2/`} element={<Step2 />} />
          <Route path={`/step3/`} element={<Step3 />} />
          <Route path={`/generate/`} element={<Generate />} />
          <Route path={`/complete/`} element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
