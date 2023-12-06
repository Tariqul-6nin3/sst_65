/* eslint-disable no-unused-vars */
import React from "react";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Helmet>
        <title>SST65 | login</title>
      </Helmet>
      <div className="pt-16">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="">
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className="bg-[#e5e7eb]  px-5 py-4 rounded-t-2xl md:ml-5 md:px-8 md:py-5">
            <h2 className="text-4xl text-center  font-bold mb-6 text-black">
              Login
            </h2>
            <div className="mb-6">
              <label
                className="block text-gray-700 font-bold text-xl mb-2"
                htmlFor="email">
                Email
              </label>
              <input
                className="border-b-2 border-gray-300 focus:border-blue-500  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight shadow-2xl focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <span className="text-red-600">Insert your email first</span>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-xl font-bold mb-2"
                htmlFor="password">
                Password
              </label>
              <input
                className="border-b-2 border-gray-300 focus:border-blue-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                {...register("password", { required: true })}
                placeholder="Enter your password"
                required
              />
              {errors.password && (
                <span className="text-red-600">Insert your password first</span>
              )}
            </div>
            <div className="mb-6 text-center">
              <button
                style={{
                  background:
                    "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
                }}
                className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-8 w-1/3 rounded-full focus:outline-none focus:shadow-outline"
                type="submit">
                Login
              </button>
            </div>
            <p className="text-red-900 font-semibold text-xl mb-5 mt-3">
              errorrrrr
            </p>
            <div className="divider">OR</div>
            <div className="flex md:flex-row flex-col justify-center">
              <button
                style={{
                  background:
                    "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
                }}
                // onClick={handleGoogleLogIn}
                className="btn btn-outline md:mx-2 mt-4 text-white px-4">
                <FaGoogle className="mr-3 text-2xl" />
                Continue with Google
              </button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-700 text-xl font-semibold ">
                New to here? Please{" "}
                <Link
                  className="text-red-500 ml-2 text-lg font-semibold"
                  to="/register">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
