/* eslint-disable no-unused-vars */
import React from "react";
import { FaBars } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="">
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* page content here */}
          {/* <label htmlFor="my-drawer" className="drawer-button">
            Open Drawer
          </label> */}
          <label
            htmlFor="my-drawer"
            className="drawer-button bg-[#1e90ff] py-3 px-3 text-white flex justify-between">
            <h2 className="text-white font-bold text-2xl">Dashboard</h2>
            <FaBars className="h-8 w-8" />
          </label>
        </div>
        <div className="drawer-side mt-14">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu  w-2/6 min-h-full bg-slate-300 text-base-content">
            {/* sidebar content here */}
            <li className="bg-green-50 px-2 py-1 rounded-lg text-slate-950 ps-2 mt-2 text-xs ">
              Website
            </li>
            <li className="bg-green-50 px-2 py-1 rounded-lg text-slate-950 ps-2 mt-2 text-xs">
              Dashboard
            </li>
            <li className="bg-green-50 px-2 py-1 rounded-lg text-slate-950 ps-2 mt-2 text-xs">
              Today report
            </li>
            <li className="bg-green-50 px-2 py-1 rounded-lg text-slate-950 ps-2 mt-2 text-xs">
              Site report
            </li>
            <li className="bg-green-50 px-2 py-1 rounded-lg text-slate-950 ps-2 mt-2 text-xs">
              Finance
            </li>
            <li className="bg-green-50 px-2 py-1 rounded-lg text-slate-950 ps-2 mt-2 text-xs">
              Club histories
            </li>
            <li className="bg-green-50 px-2 py-1 rounded-lg text-slate-950 ps-2 mt-2 text-xs">
              Games
            </li>
            <li className="bg-green-50 px-2 py-1 rounded-lg text-slate-950 ps-2 mt-2 text-xs">
              Categories
            </li>
            <li className="bg-green-50 px-2 py-1 rounded-lg text-slate-950 ps-2 mt-2 text-xs">
              Auto Stack
            </li>
            <li className="bg-green-50 px-2 py-1 rounded-lg text-slate-950 ps-2 mt-2 text-xs">
              Users
            </li>
            <li className="bg-green-50 px-2 py-1 rounded-lg text-slate-950 ps-2 mt-2 text-xs">
              Teams
            </li>
            <li className="bg-green-50 px-2 py-1 rounded-lg text-slate-950 ps-2 mt-2 text-xs">
              Slider
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
