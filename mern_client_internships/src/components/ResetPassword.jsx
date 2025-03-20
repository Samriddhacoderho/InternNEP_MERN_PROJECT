import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const isLoggedin = document.cookie.includes("loginToken");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onclick = async (data) => {
    try {
      let response=null
      if (isLoggedin) {
        response = await axios.post(
          "http://localhost:8000/reset/password",
          data,
          { withCredentials: true }
        );
      } else {
        response = await axios.post(
          "http://localhost:8000/reset/password/noLog",
          data,
          { withCredentials: true }
        );
      }
      alert(response.data.success_msg);
      navigate("/reset-password/verification", {
        state: { resetCode: response.data.resetCode,email:data.email},
      });
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert(error.message);
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
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email here"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                {...register("email", {
                  required: "This is required",
                })}
              />
              {errors.email && (
                <p className="text-red-600 mb-2">{errors.email.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full cursor-pointer px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Getting Confirmation Code"
                : "Get Confirmation Code"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
