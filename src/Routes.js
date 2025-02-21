// src/Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import CartonGenerator from "./pages/CartonGenerator";
import "./styles/index.css";
import VideoGenerator from "./pages/VideoGenerator";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CartonGenerator />} />
      </Route>
      <Route path="/VideoGenerator" element={<Layout />}>
        <Route index element={<VideoGenerator />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
