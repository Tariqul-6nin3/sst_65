/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { myContext } from "../../providers/Context";
import { useState } from "react";
import { saveUser } from "../../../saveUser";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUSer] = useState(null);
  // console.log(user);
  const [error, setError] = useState("");
  const { createUser } = useContext(myContext);
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    console.log(email, password);

    // validattion email

    if (password != confirm) {
      setError("Your password doesn't match. Please check again");
    } else if (password.length < 6) {
      setError("Password Could not be less than 6 character");
    } else if (!email) {
      setError("Please update your email");
    }
    createUser(email, password, name, phone)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        setUSer(createdUser);

        setError("");
        form.reset();
        navigate("/login");
      })
      .catch(error => setError(error.message));
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-purple-900 via-purple-600 to-purple-400  ">
      <div className="max-w-xl w-11/12 md:w-full md:max-w-2xl space-y-4 md:space-y-6 py-16 mx-auto ">
        <div className=" text-center">
          <h1 className="md:text-5xl text-4xl font-bold py-4">Register Here</h1>
        </div>
        <form
          onSubmit={handleRegister}
          className="card flex-shrink-0 mx-auto shadow-2xl bg-base-100 px-3 md:px-4 py-4">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-bold mb-2">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-bold mb-2">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-bold mb-2">
                  Mobile Number
                </span>
              </label>
              <input
                type="number"
                name="phone"
                placeholder="your number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-bold mb-2">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-gray-700 font-bold mb-2">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                name="confirm"
                placeholder="Confirm password"
                className="input input-bordered"
                required
              />
            </div>

            <p className="text-red-700 text-base ">{error}</p>
            <div className="form-control w-full md:w-1/2 mx-auto mt-3">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <p className="mt-3">
              Already have an account?
              <Link
                className="text-red-500 ml-2 text-lg font-semibold"
                to="/login">
                Login?
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
