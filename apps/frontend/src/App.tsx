import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        {/* 다른 페이지 경로들도 추가 가능 */}
      </Routes>
    </Router>
  );
};

export default App;
