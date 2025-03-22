import axios from "axios";
import React, { useContext, useState } from "react";
import { context } from "../../contexts/Context";
import CardYourCV from "./CardYourCV";
import { Link } from "react-router-dom";

const YourCV = () => {
  const useCon = useContext(context);
  const [btnText, setbtnText] = useState("Show Your CVs");
  const onclick = async () => {
    if (btnText === "Show Your CVs") {
      setbtnText("Hide Your CVs");
    } else {
      setbtnText("Show Your CVs");
    }
    if (btnText === "Show Your CVs") {
      try {
        const response = await axios.get("http://localhost:8000/cvGet", {
          withCredentials: true,
        });
        useCon.setFiles(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data);
        } else {
          alert(error.message);
        }
      }
    }
  };
  return (
    <div>
      <button
        type="submit"
        onClick={onclick}
        class="mt-2 cursor-pointer text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-transform duration-150 ease-in-out active:scale-90"
      >
        {btnText}
      </button>
      {btnText === "Hide Your CVs" ? (
        useCon.files ? (
          <div className="grid grid-cols-3 gap-32">
            {useCon.files.map((file) => {
              return (
                <div key={file._id}>
                  <CardYourCV fileName={file.fileName}/>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              No files found
            </h5>
            <Link to={"/create-cv"}>
              <p className="text-red-500 text-xl font-semibold hover:underline mt-3">
                Upload a CV
              </p>
            </Link>
          </>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default YourCV;
