import React from "react";
import { Link } from "react-router-dom";

const Cardfirst = () => {
  return (
    <div>
      <div className="mb-2">
        <div
         
          className="mx-auto flex h-90 flex-col items-center rounded-lg border border-gray-200 bg-white shadow-sm md:max-w-xl md:flex-row dark:border-gray-700 dark:bg-gray-800"
        >
          <img
            className="rounded-t-lg object-cover md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://humanhealth.com.hk/en/service/detail/corporate-medical/upload/service/32/self/5c108ff960152.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link to={"/register"}>
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-32">Inquire Now</button>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Cardfirst;
