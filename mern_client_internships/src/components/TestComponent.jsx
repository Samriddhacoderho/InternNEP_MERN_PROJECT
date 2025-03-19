import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

const TestComponent = () => {
    const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm();

    const onclick=async(data)=>{
        try {
            const response=await axios.post("http://localhost:8000/reset/password",data)
            alert(response.data.success_msg)
        } catch (error) {
            if(error.data)
            {
                alert(error.data.message)
            }
            else
            {
                alert(error.message)
            }
        }    
    }

  return (
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onclick)}>
            <div className="grid grid-cols-2 gap-5">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500"
                >
                  To
                </label>
                <input
                  type="email"
                  id="to"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                  {...register("to", {
                    required: "This is required",
                  })}
                />
                {errors.to && (
                  <p className="text-red-600 mb-2">{errors.to.message}</p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                  {...register("subject", {
                    required: "This is required",
                    maxLength: { value: 50, message: "Too Long Name" },
                  })}
                />
                {errors.subject && (
                  <p className="text-red-600 mb-2">{errors.subject.message}</p>
                )}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500"
                >
                  Body
                </label>
                <input
                  type="text"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full"
                  {...register("text", {
                    required: "This is required",
                    maxLength: { value: 50, message: "Too Long Name" },
                  })}
                />
                {errors.text && (
                  <p className="text-red-600 mb-2">{errors.text.message}</p>
                )}
              </div>
            </div>
            <button
            disabled={isSubmitting}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full cursor-pointer px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
            </form>
  )
}

export default TestComponent
