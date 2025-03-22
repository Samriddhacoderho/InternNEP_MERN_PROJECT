import axios from "axios";
import React from "react";

const CardYourCV = (props) => {
  const onclick = async () => {
    if (window.confirm("Are you sure you want to delete this CV?")) {
      try {
        const response = await axios.delete(
          `http://localhost:8000/files/delete/cv/${props.fileID}`,
          { withCredentials: true }
        );
        alert(response.data);
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
      <div className="w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.fileName}
        </h5>
        <a
          href={`http://localhost:8000/${props.fileName}`}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <button
          onClick={onclick}
          className=" cursor-pointer mx-20 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
        >
          Delete CV
        </button>
      </div>
    </div>
  );
};

export default CardYourCV;
