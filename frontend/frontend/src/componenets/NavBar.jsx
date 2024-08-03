import React, { useEffect } from "react"; // Import React and useEffect hook
import { useState } from "react"; // Import useState hook
import Login from "./Login"; // Import Login component
import Logout from "./Logout"; // Import Logout component
import { useAuth } from "../context/AuthProvider"; // Import useAuth hook from AuthProvider context

function Navbar() {
  const [authUser, setAuthUser] = useAuth(); // Get authUser and setAuthUser from AuthProvider context
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light" // Initialize theme state with value from localStorage or default to "light"
  );
  const element = document.documentElement; // Get the root HTML element

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark"); // Add dark theme class to the root element
      localStorage.setItem("theme", "dark"); // Store theme in localStorage
      document.body.classList.add("dark"); // Add dark theme class to the body
    } else {
      element.classList.remove("dark"); // Remove dark theme class from the root element
      localStorage.setItem("theme", "light"); // Store theme in localStorage
      document.body.classList.remove("dark"); // Remove dark theme class from the body
    }
  }, [theme]); // Run this effect whenever the theme changes

  const [sticky, setSticky] = useState(false); // Initialize sticky state to false
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true); // Set sticky to true if the page is scrolled down
      } else {
        setSticky(false); // Set sticky to false if the page is at the top
      }
    };
    window.addEventListener("scroll", handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener on component unmount
    };
  }, []); // Run this effect once when the component mounts

  const navItems = (
    <>
      <li>
        <a href="/">Home</a> {/* Home link */}
      </li>
      <li>
        <a href="/course">Course</a> {/* Course link */}
      </li>
      <li>
        <a>Contact</a> {/* Contact link */}
      </li>
      <li>
        <a>About</a> {/* About link */}
      </li>
    </>
  );

  return (
    <>
      <div
        className={` max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out" // Apply sticky styles when sticky state is true
            : ""
        }`}
      >
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                {/* Menu icon for mobile view */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems} {/* Render navigation items */}
              </ul>
            </div>
            <a className=" text-2xl font-bold cursor-pointer">bookStore</a> {/* Store name */}
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul> {/* Render navigation items for large screens */}
            </div>
            <div className="hidden md:block">
              <label className=" px-3 py-2 border rounded-md flex items-center gap-2">
                <input
                  type="text"
                  className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
                  placeholder="Search" 
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} // Toggle theme between dark and light
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")} // Toggle theme between light and dark
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {authUser ? (
              <Logout /> // Show Logout component if the user is authenticated
            ) : (
              <div className="">
                <a
                  className="bg-emerald-500 text-white px-3 py-2 rounded-md hover:bg-lime-950 duration-300 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login {/* Show Login button if the user is not authenticated */}
                </a>
                <Login /> {/* Login component */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar; // Export Navbar component
