import axios from "axios";
import React, { useState } from "react";

const YourCV = () => {
    const [btnText,setbtnText]=useState("Show Your CVs")
    const onclick=async()=>{
        if(btnText==="Show Your CVs")
        {
            setbtnText("Hide Your CVs")
        }
        else
        {
            setbtnText("Show Your CVs")
        }
        try {
            const response=await axios.get("http://localhost:8000/cvGet",{withCredentials:true})
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
        }
    }
  return (
    <div>
      <button
        type="submit"
        onClick={onclick}
        class="mt-2 cursor-pointer text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-transform duration-150 ease-in-out active:scale-90"
      >
        {btnText}
      </button>
    </div>
  );
};

export default YourCV;
