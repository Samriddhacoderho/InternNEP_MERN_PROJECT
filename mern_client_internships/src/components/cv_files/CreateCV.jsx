import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import { context } from "../../contexts/Context";

const CreateCV = () => {
  const isLoggedin = document.cookie.includes("loginToken");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const useCon=useContext(context)
  const onSubmit = async (data) => {
try {
      const fileData=new FormData()
      fileData.append("dropzone_file",data.dropzone_file[0])
      const response=await axios.post("http://localhost:8000/cvCreate",fileData,{withCredentials:true},{
        headers:"multipart/form-data"
      })
      alert(response.data)
      
} catch (error) {
  if(error.response)
  {
    alert(error.response.data)
  }
  else
  {
    alert(error.message)
  }
}  };

  return isLoggedin || useCon.isAuthenticated ? (
    <div>
      <div className="mt-30 flex items-center justify-center mx-auto  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-full h-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="large_size"
          >
            Large file input
          </label>
          <input
            class="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="large_size"
            type="file"
            accept="pdf"
            {...register("dropzone_file",{required:"This is required",
              validate:{
                fileType:(value)=>value[0].type==="application/pdf" || "Only PDF Files Are Accepted"
              }
            })}
          />
          {errors.dropzone_file && (
            <p className="text-red-500">{errors.dropzone_file.message}</p>
          )}

          <button
            type="submit"
            className="cursor-pointer mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  ) : (
    <div>You cannot access this page without logging in.</div>
  );
};

export default CreateCV;
