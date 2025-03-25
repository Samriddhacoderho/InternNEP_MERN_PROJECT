import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Context, { context } from "../contexts/Context";
import ProfileClick from "./ProfileClick";
import ProgressBar from "./alerts&prompts/ProgressBar";

const Navbar = () => {
  const isLoggedin = document.cookie.includes("loginToken");
  const location = useLocation();
  const useCon = useContext(context);
  return (
    <div>
      <nav
        className={`bg-white dark:bg-gray-900 fixed w-full z-0 top-0 start-0 border-b border-gray-200 dark:border-gray-600`}
      >
        {useCon.showProg && <ProgressBar/>}
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
          {!useCon.isAuthenticated && !isLoggedin && (
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link to={"/register"}>
                <button
                  type="button"
                  className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Get started
                </button>
              </Link>
            </div>
          )}
          {(useCon.isAuthenticated || isLoggedin) && (
            <div className="relative items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <ProfileClick/>
          </div>
          )}


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
                onMouseLeave={() => useCon.setdropdown(false)}
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
                {useCon.dropdown && (
                  <div
                    id="mega-menu-icons-dropdown"
                    className="absolute z-10 grid block w-150 grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
                  >
                    <div className="p-2 pb-0 text-gray-900 md:pb-2 dark:text-white">
                      <ul
                        className="space-y-4"
                        aria-labelledby="mega-menu-icons-dropdown-button"
                      >
                        <li>
                          <Link
                            to="#"
                            className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span className="sr-only">Health Internships</span>
                            <svg
                              className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            Health Internships
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span className="sr-only">Web Development Internships</span>
                            <svg
                              className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />
                              <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />
                              <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />
                            </svg>
                            Web Development Internships
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span className="sr-only">Mobile Development Internships</span>
                            <svg
                              className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 18"
                            >
                              <path d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z" />
                              <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                            </svg>
                            Mobile Development Internships
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span className="sr-only">Software Development Internships</span>
                            <svg
                              className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
                            </svg>
                            Software Development Internships
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="p-2 pb-0 text-gray-900 md:pb-2  dark:text-white">
                      <ul className="space-y-4">
                        <li>
                          <Link
                            to="#"
                            className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span className="sr-only">Content-Writing Internships</span>
                            <svg
                              className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z" />
                              <path d="M6 5H5v1h1V5Z" />
                            </svg>
                            Content-Writing Internships
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span className="sr-only">Content-Creator Internships</span>
                            <svg
                              className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                            </svg>
                            Content-Creator Internships
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span className="sr-only">Teacher's Assistant</span>
                            <svg
                              className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 18 18"
                            >
                              <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10ZM17 13h-2v-2a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" />
                            </svg>
                            Teacher's Assistant
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                          >
                            <span className="sr-only">Graduate Assistant</span>
                            <svg
                              className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 14 20"
                            >
                              <path d="M13.383.076a1 1 0 0 0-1.09.217L11 1.586 9.707.293a1 1 0 0 0-1.414 0L7 1.586 5.707.293a1 1 0 0 0-1.414 0L3 1.586 1.707.293A1 1 0 0 0 0 1v18a1 1 0 0 0 1.707.707L3 18.414l1.293 1.293a1 1 0 0 0 1.414 0L7 18.414l1.293 1.293a1 1 0 0 0 1.414 0L11 18.414l1.293 1.293A1 1 0 0 0 14 19V1a1 1 0 0 0-.617-.924ZM10 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0-4H4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2Zm0-4H4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                            </svg>
                            Graduate Assistant
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
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
              {(useCon.isAuthenticated || isLoggedin) &&<li>
                <Link
                  to="/your-cv"
                  className={`block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white-700 md:p-0 ${
                    location.pathname === "/your-cv"
                      ? "md:text-blue-500"
                      : "md:text-white-500"
                  } md:hover:text-blue-700`}
                >
                  VIEW YOUR CV
                </Link>
              </li>}
              {(useCon.isAuthenticated || isLoggedin) &&<li>
                <Link
                  to="/create-cv"
                  className={`block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white-700 md:p-0 ${
                    location.pathname === "/create-cv"
                      ? "md:text-blue-500"
                      : "md:text-white-500"
                  } md:hover:text-blue-700`}
                >
                  UPLOAD YOUR CV
                </Link>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
