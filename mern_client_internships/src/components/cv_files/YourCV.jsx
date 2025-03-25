import axios from "axios";
import React, { use, useContext, useEffect, useState } from "react";
import { context } from "../../contexts/Context";
import CardYourCV from "./CardYourCV";
import { Link } from "react-router-dom";
import Success from "../alerts&prompts/Success";
import Error from "../alerts&prompts/Error";

const YourCV = () => {
  const useCon = useContext(context);
  const [btnText, setbtnText] = useState("Show Your CVs");
  const [files, setFiles] = useState([]);
  const [suc, setSuc] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(()=>{
    const fetchFunc=()=>{
      if(useCon.sucMsg)
        {
          if(useCon.sucMsg.includes("Successfully"))
          {
            setSuc(true)
            useCon.setshowProg(true)
            setTimeout(() => {
              setSuc(false)
              useCon.setsucMsg(null)
              useCon.setshowProg(false)
            }, 2000);
          }
          else
          {
            setErr(true)
            setTimeout(() => {
              setErr(false)
              useCon.setsucMsg(null)
            }, 2000);
          }
        }
    }

    fetchFunc();
  },[useCon.sucMsg])

  const onclick = async () => {
    if (btnText === "Show Your CVs") {
      setbtnText("Hide Your CVs");
    } else {
      setbtnText("Show Your CVs");
    }
    if (btnText === "Show Your CVs") {
      try {
        const response = await axios.get("http://localhost:8000/files/cvGet", {
          withCredentials: true,
        });
        if (response.data.length > 0) {
          setFiles(response.data);
        } else {
          setFiles([]);
        }
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
      {suc && <Success />}
      {err && <Error/>}
      <button
        onClick={onclick}
        className="mt-2 cursor-pointer text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 transition-transform duration-150 ease-in-out active:scale-90"
      >
        {btnText}
      </button>
      {btnText === "Hide Your CVs" ? (
        files.length > 0 ? (
          <div className="grid grid-cols-3 gap-32">
            {files.map((file) => {
              return (
                <div key={file._id}>
                  <CardYourCV fileName={file.fileName} fileID={file._id} />
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
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
