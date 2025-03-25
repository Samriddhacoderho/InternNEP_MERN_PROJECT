import { useForm } from "react-hook-form";
import axios from "axios";
import { data, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { context_usetext, useContext, useState } from "react";
import { context } from "../contexts/Context";
import Success from "./alerts&prompts/Success";
import Error from "./alerts&prompts/Error";

const Register = () => {
  const isLoggedin = document.cookie.includes("loginToken");
  const context_use=useContext(context)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();
  const [suc,setSuc]=useState(false);
  const [err,setErr]=useState(false);
  const onclick = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/register", data,{withCredentials:true});
      setSuc(true)
      context_use.setsucMsg(response.data.success_msg);
      context_use.setName(response.data.name)
      context_use.setshowProg(true)
      setTimeout(() => {
        setSuc(false)
        context_use.setsucMsg(null)
        context_use.setshowProg(false)
        navigate("/");
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

  if(context_use.isAuthenticated)
  {
    navigate("/")
  }

  return (
    
    (!context_use.isAuthenticated && !isLoggedin)?<div>
      {suc && <Success/>}
      {err && <Error/>}
      {}
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center justify-center mx-auto  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-full h-full">
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onclick)}>
            <div className="grid grid-cols-2 gap-5">
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                  {...register("name", {
                    required: "This is required",
                    maxLength: { value: 50, message: "Too Long Name" },
                  })}
                />
                {errors.name && (
                  <p className="text-red-600 mb-2">{errors.name.message}</p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                  {...register("email", {
                    required: "This is required",
                  })}
                />
                {errors.email && (
                  <p className="text-red-600 mb-2">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                  {...register("password", {
                    required: "This is required",
                    minLength: {
                      value: 8,
                      message: "Password must be atleast 8 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-600 mb-2">{errors.password.message}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirm_password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                  {...register("confirm_password", {
                    required: "This is required",
                    validate: (value) =>
                      value === watch("password") ||
                      "Passwords do not match each other.",
                  })}
                />
                {errors.confirm_password && (
                  <p className="text-red-600 mb-2">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full cursor-pointer px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
            <Link to="/login">
              {" "}
              <p className="dark:text-white hover:underline mt-3">
                Already Have An Account?
              </p>{" "}
            </Link>
            <button
              type="button"
              className="cursor-pointer mt-3 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
              onClick={()=>context_use.loginWithPopup()}
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              Or Login Directly Via Social Media
            </button>
            </form>
        </div>
      </div>
    </div>:<div>You cannot access this page after logging in.</div>
  );
};

export default Register;
