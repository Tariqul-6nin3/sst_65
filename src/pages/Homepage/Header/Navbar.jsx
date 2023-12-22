/* eslint-disable no-unused-vars */
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBackspace, FaBackward, FaBars, FaCross } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../../public/logooooo.jpeg";
import { useContext } from "react";
import { myContext } from "../../../providers/Context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbCoinTakaFilled } from "react-icons/tb";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { user, logOutUser } = useContext(myContext);
  console.log(user);

  const handlelogOut = () => {
    logOutUser()
      .then(() => {
        toast("LogOut successfully!!!");
        navigate("/login");
      })
      .catch(error => {});
  };

  return (
    <div className="navbar rounded-b-xl md:py-4 bg-[#1e90ff] fixed z-10 text-white">
      <div className="flex-1">
        <div className="flex items-center ">
          <img
            className="w-6 h-6 rounded-2xl animate-pulse"
            src={logo}
            alt=""
          />
          <Link to="/" className="btn btn-ghost -ml-1 md:ml-0 normal-case">
            <span className="text-2xl font-serif font-semibold">SST65</span>
          </Link>
        </div>
      </div>

      <div className="font-bold md:hidden flex gap-2">
        {user && <TbCoinTakaFilled className="w-6 h-6" />}
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
              : "absolute top-16 right-4 rounded-2xl bg-[#270f46] w-1/2 text-right  flex gap-2  h-auto pt-3 pb-4 flex-col "
          }`}>
          {user ? (
            <>
              <li
                className={`btn btn-sm bg-white text-black ${
                  open ? "" : "w-8/12 text-lg mx-auto bg-zinc-400"
                } `}>
                <NavLink
                  to="/deposit"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  Deposit
                </NavLink>
              </li>
              <li
                className={`btn btn-sm bg-white text-black ${
                  open ? "" : "w-8/12 text-lg mx-auto bg-zinc-400"
                } `}>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  Withdraw
                </NavLink>
              </li>
              <li
                className={`btn btn-sm bg-white text-black ${
                  open ? "" : "w-8/12 text-lg mx-auto bg-zinc-400"
                } `}>
                <NavLink
                  to="/control"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  Controller
                </NavLink>
              </li>
              <li
                onClick={handlelogOut}
                className={`btn btn-sm bg-white text-black ${
                  open ? "" : "w-8/12 text-lg mx-auto bg-zinc-400"
                } `}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  Logout
                </NavLink>
              </li>
              <label
                tabIndex={0}
                className="btn mx-auto my-1 btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">
                  <img
                    className="z-50"
                    src={
                      user
                        ? user.photoURL
                        : "https://i.postimg.cc/zvz6QwQb/cesar-rincon-XHVp-Wcr5gr-Q-unsplash.jpg"
                    }
                    alt=""
                  />
                </div>
              </label>
            </>
          ) : (
            <>
              <li
                className={`btn btn-sm bg-white text-black ${
                  open ? "" : "w-8/12 text-lg mx-auto bg-zinc-400"
                } `}>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  LogIn
                </NavLink>
              </li>

              <li
                className={`btn btn-sm bg-white text-black ${
                  open ? "" : "w-8/12 text-lg mx-auto bg-zinc-400"
                } `}>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  Register
                </NavLink>
              </li>
            </>
          )}
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
