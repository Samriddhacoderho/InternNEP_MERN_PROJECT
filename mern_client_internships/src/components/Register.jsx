import React from 'react'
import {useForm} from "react-hook-form"
import axios from "axios"

const Register = () => {
  const {register,handleSubmit,formState:{errors,isSubmitting}}=useForm();

  const onclick=async(data)=>{
    try {
      const response=await axios.post(`https:${import.meta.env.VITE_DOMAIN}/dbconnections/signup`,{
        client_id:import.meta.env.VITE_CLIENTID,
        client_secret:import.meta.env.VITE_CLIENTSECRET,
        email:data.email,
        password:data.password,
        connection:"Username-Password-Authentication"
      })
      console.log('Registeration Successful:',response.data)

    } catch (error) {
      console.error('Registration failed:', error.response.data);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
<div className="flex items-center justify-center mx-auto  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-dvh h-89">
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onclick)}>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-70"
          placeholder="name@flowbite.com"
          {...register("email",{required:"This is a required field"})}
        />
      </div>
      {errors.email && <p className='text-red-600 mb-2'>{errors.email.message}</p>}

      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-yellow-500">
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-70"
          {...register("password",{
            required:"This is required",
            minLength:{value:8,message:"Password must be atleast 8 characters"}
          })}
        />
      </div>
      {errors.password && <p className='text-red-600 mb-2'>{errors.password.message}</p>}

      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-yellow-500">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
</div>
</div>

    </div>
  )
}

export default Register
