/* eslint-disable no-unused-vars */
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBackspace, FaBackward, FaBars, FaCross } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../../public/logooooo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="navbar rounded-b-xl md:py-4 bg-[#1e90ff] fixed z-10 text-white">
      <div className="flex-1">
        <div className="flex ">
          <img
            className="w-10 h-10 rounded-2xl animate-pulse"
            src={logo}
            alt=""
          />
          <Link to="/" className="btn btn-ghost -ml-1 md:ml-0 normal-case">
            <span className="text-3xl font-serif font-semibold">SST65</span>
          </Link>
        </div>
      </div>
      <div className="font-bold md:hidden">
        <button className="mr-5" onClick={() => setOpen(!open)}>
          {open ? (
            <FaBars className="h-8 w-8" />
          ) : (
            <FaBackspace className="h-12 w-12" />
          )}
        </button>
      </div>
      <div className="flex-none   gap-2">
        <div
          className={`md:mr-20 text-2xl font-semibold md:text-xl list-none md:flex md:space-x-12 ${
            open
              ? "absolute -top-40 md:top-6 right-0"
              : "absolute top-16 right-4 rounded-2xl bg-[#270f46] w-1/2 text-right  flex gap-2  h-48 pt-3 pb-4 flex-col "
          }`}>
          <li
            className={`btn btn-sm bg-white text-black ${
              open ? "" : "w-8/12 text-lg mx-auto bg-zinc-400"
            } `}>
            <NavLink
              to="/login"
              aria-label="Home"
              title="Home"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              LogIn
            </NavLink>
          </li>

          <li
            className={`btn btn-sm bg-white text-black ${
              open ? "" : "w-8/12 text-lg mx-auto bg-zinc-400"
            } `}>
            <NavLink
              to="/register"
              aria-label="Blogs"
              title="Blogs"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Register
            </NavLink>
          </li>

          {/* (
            <>
              <li>
                <NavLink
                  to="/login"
                  aria-label="login"
                  title="login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  >
                  SignOut
                </NavLink>
              </li>
              <div className="mb-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div
                    className="w-10 rounded-full mb-4"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user.displayName}
                    data-tooltip-place="left">
                    <Tooltip id="my-tooltip"></Tooltip>
                    <img src={user.photoURL} alt={user.displayName} />
                  </div>
                </label>
              </div>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                aria-label="login"
                title="login"
                className={({ isActive }) => (isActive ? "active" : "default")}>
                Login
              </NavLink>
            </li>
          ) */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
