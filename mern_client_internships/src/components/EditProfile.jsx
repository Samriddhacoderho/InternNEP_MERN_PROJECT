import React, { useContext, useState } from "react";
import { context } from "../contexts/Context";
import { useForm } from "react-hook-form";
import {Link, useNavigate } from "react-router-dom";
import axios from "axios"

const EditProfile = () => {
  const navigate=useNavigate()
  const onclick=async(data)=>{
    try {
      if(window.confirm("Are you sure you want to change your username?"))
      {
      const response=await axios.patch("http://localhost:8000/edit-profile",data,{withCredentials:true})
      alert(response.data)
      context_use.setName(data.name)
      navigate("/")
      }
    } catch (error) {
      if(error.response)
      {
        alert(error.response.data)
      }
      else
      {
        alert(error.message)
      }
    }
  }
  const context_use = useContext(context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center justify-center mx-auto  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-dvh h-89">
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onclick)}>
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
                defaultValue={context_use.name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                {...register("name", {
                  required: "This is required",
                  maxLength: { value: 50, message: "Too Long Name" },
                })}
              />
              {errors.name &&  (
                <p className="text-red-600 mb-2">{errors.name.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </button>
            <br></br>
            <Link to={"/edit-password"}><button type="button" class="my-2 cursor-pointer focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Reset Password</button></Link>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
