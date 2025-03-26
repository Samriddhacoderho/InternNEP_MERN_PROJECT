import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { data, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { context_usetext } from "react";
import { context } from "../contexts/Context";
import Success from "./alerts&prompts/Success";
import Error from "./alerts&prompts/Error";

const Login = () => {
  const isLoggedin=document.cookie.includes("loginToken")
  const context_use = useContext(context);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { user, loginWithRedirect, logout } = useAuth0();
  const [suc, setSuc] = useState(false);
  const [err, setErr] = useState(false);

  const onclick = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/login", data, {
        withCredentials: true,
      });
      setSuc(true)
      context_use.setsucMsg(response.data.success_msg);
      context_use.setName(response.data.name);
      context_use.setName(response.data.name)
      context_use.setshowProg(true)
      navigate("/");

      setTimeout(() => {
        setSuc(false)
        context_use.setsucMsg(null)
        context_use.setshowProg(false)
      }, 2000);
    } catch (error) {
      if (error.response) {
        setErr(true)
        context_use.setsucMsg(error.response.data)
      } else {
        setErr(true)
        context_use.setsucMsg(error.message)
      }
      setTimeout(() => {
        setErr(false)
        context_use.setsucMsg(null)
      }, 2000);
    }
  };
  return (
    (!context_use.isAuthenticated && !isLoggedin)?<div>
      {suc && <Success/>}
      {err && <Error/>}
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center justify-center mx-auto  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-dvh h-89">
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onclick)}>
            <div className="mb-5">
              <label
                htmlhtmlhtmlhtmlhtmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-70"
                {...register("email", { required: "This is a required field" })}
              />
            </div>
            {errors.email && (
              <p className="text-red-600 mb-2">{errors.email.message}</p>
            )}

            <div className="mb-5">
              <label
                htmlhtmlhtmlhtmlhtmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-70"
                {...register("password", {
                  required: "This is required",
                  minLength: {
                    value: 8,
                    message: "Password must be atleast 8 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-600 mb-2">{errors.password.message}</p>
            )}
            <Link to="/reset-password">
              {" "}
              <p className="dark:text-white hover:underline mb-4">
                Forgot Password
              </p>{" "}
            </Link>
            <button
              type="submit"
              className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <Link to="/register">
              {" "}
              <p className="dark:text-white hover:underline">New User?</p>{" "}
            </Link>
          </form>
        </div>
      </div>
    </div>:<div>You cannot access this page after logging in</div>
  );
};

export default Login;
