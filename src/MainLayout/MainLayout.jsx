/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../pages/Homepage/Header/Navbar";
import Footer from "../pages/Homepage/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
