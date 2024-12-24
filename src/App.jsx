import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CameraPage from "./pages/CameraPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CameraPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
