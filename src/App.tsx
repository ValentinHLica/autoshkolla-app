import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "@pages/home";
import Exam from "@pages/exam";
import Results from "@pages/results";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { ScrollToTop } from "@ui";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exam/:type" element={<Exam />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
