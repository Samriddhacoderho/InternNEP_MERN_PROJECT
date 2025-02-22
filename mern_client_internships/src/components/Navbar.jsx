import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { context } from "../contexts/Context";

const Navbar = () => {
  const location = useLocation();
  const useCon=useContext(context)
  return (
    <div>
      <nav className={`bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ${location.pathname==="/" && useCon.dropdown?"h-55":""}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              InternNEP
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white-700 md:p-0 ${
                    location.pathname === "/"
                      ? "md:text-blue-500"
                      : "md:text-white-500"
                  } md:hover:text-blue-700`}
                  aria-current="page"
                >
                  HOME
                </Link>
              </li>
              <li
                onMouseEnter={() => useCon.setdropdown(true)}
                onMouseLeave={()=>useCon.setdropdown(false)}
              >
                <Link
                  to="/internship"
                  className={`block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white-700 md:p-0 ${
                    location.pathname === "/internship"
                      ? "md:text-blue-500"
                      : "md:text-white-500"
                  } md:hover:text-blue-700`}
                >
                  INTERNSHIPS
                </Link>
                {useCon.dropdown &&
                  <div
                    id="dropdown"
                    class={`absolute z-50 mt-0.2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-md dark:bg-gray-700 ${
                      useCon.dropdown ? "block" : "hidden"
                    }`}
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <Link
                          to="/medical-internships"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Medical Internships
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/IT-internships"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          IT Internships
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/content-internships"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Content Creator and Writer Internships
                        </Link>
                      </li>
                    </ul>
                  </div>
                }
              </li>
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white-700 md:p-0 ${
                    location.pathname === "/services"
                      ? "md:text-blue-500"
                      : "md:text-white-500"
                  } md:hover:text-blue-700`}
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white-700 md:p-0 ${
                    location.pathname === "/contact"
                      ? "md:text-blue-500"
                      : "md:text-white-500"
                  } md:hover:text-blue-700`}
                >
                  CONTACT
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white-700 md:p-0 ${
                    location.pathname === "/costs"
                      ? "md:text-blue-500"
                      : "md:text-white-500"
                  } md:hover:text-blue-700`}
                >
                  COSTS
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white-700 md:p-0 ${
                    location.pathname === "/testimonials"
                      ? "md:text-blue-500"
                      : "md:text-white-500"
                  } md:hover:text-blue-700`}
                >
                  TESTIMONIALS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
