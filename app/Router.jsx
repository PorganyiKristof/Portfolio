"use client";

import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BusinessPricePage from "./pages/BusinessPricePage";

export default function RouterComp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<BusinessPricePage />} />
      </Routes>
    </Router>
  );
}
