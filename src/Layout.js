// src/components/Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import FooterSubScrip from "./components/footerSubScrip";
import Footer from "./components/Footer";
import FooterSocial from "./components/footerSocial"; // ✅ Правильный путь

const Layout = () => {
  return (
    <main className="main-wrap">
      <Navbar />
      <div className="content-wrap">
        <main className="main-wrap">
          <Outlet /> {/* Здесь будет рендериться текущая страница */}
        </main>
      </div>
      <footer>
        <FooterSubScrip />
        <Footer />
        <FooterSocial />
      </footer>
    </main>
  );
};

export default Layout;
