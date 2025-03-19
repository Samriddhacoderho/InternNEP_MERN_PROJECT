import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

const PassVerificationForm = () => {
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate=useNavigate();
  const onclick = async (data) => {
    try {
        if(Number(data.verification)!==location.state.resetCode)
        {
            alert("Incorrect Verification Code.")
        }
        else
        {
            const response=await axios.patch("http://localhost:8000/reset-password",data,{withCredentials:true})
            alert(response.data)
            navigate("/")
        }
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert(error.message)  
    }
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center justify-center mx-auto  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-full h-full">
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onclick)}>
            <div className="mb-5">
              <label
                htmlFor="verification"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500"
              >
                Verification Code
              </label>
              <input
                type="number"
                id="verification"
                placeholder="Enter your six digit verification code here"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                {...register("verification", {
                  required: "This is required",
                  min: {
                    value: 100000,
                    message: "Please enter a six digit code",
                  },
                  max: {
                    value: 999999,
                    message: "Please enter a six digit code",
                  },
                })}
              />
              {errors.verification && (
                <p className="text-red-600 mb-2">
                  {errors.verification.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500"
              >
                New password
              </label>
              <input
                type="password"
                id="new_password"
                placeholder="Enter your new password here"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                {...register("new_password", {
                  required: "This is required",
                  minLength: {
                    value: 8,
                    message: "Password must be atleast 8 characters",
                  },
                })}
              />
              {errors.new_password && (
                <p className="text-red-600 mb-2">
                  {errors.new_password.message}
                </p>
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
                placeholder="Re-enter your new password here"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                {...register("confirm_password", {
                  required: "This is required",
                  validate:(value)=>
                    value===watch("new_password") || "Passwords do not match each other."
                })}
              />
              {errors.confirm_password && (
                <p className="text-red-600 mb-2">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full cursor-pointer px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Resetting Password"
                : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PassVerificationForm;
