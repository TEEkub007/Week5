import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Course from "./pages/Course";
import Chapter from "./pages/Chapter";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Course />} />
        <Route path="/course/:id" element={<Chapter />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;