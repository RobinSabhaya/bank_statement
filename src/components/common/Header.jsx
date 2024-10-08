import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  /**
   * Scroll to specified position
   * @param {id} id
   */
  function scrollToId(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <div
        className="dark:bg-gray-900 w-[calc(100vw-10vw)] border-2 border-[#389BBC] rounded-3xl dark:border-gray-600 mx-20 max-[540px]:m-auto max-[540px]:mx-6 my-3"
        style={{
          backdropFilter: "blur(8px)",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Bank statement Logo" />
            <span className="self-center text-2xl text-[#389BBC] font-semibold whitespace-nowrap dark:text-[#389BBC]">
              Bank Statement
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen(!isNavOpen)}
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
          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 gap-3">
              <div>
                <NavLink
                  onClick={() => scrollToId("pricing")}
                  className="block text-[#389BBC] bg-[#98D2E5] 2xl:bg-transparent rounded-xl md:text-[#389BBC] md:p-0 md:dark:text-[#389BBC] xl:bg-transparent lg:bg-transparent md:bg-transparent text-center hover:bg-[#389BBC] hover:text-white transition-colors duration-300 h-[30px] w-[65px] max-[766px]:w-full"
                >
                  Pricing
                </NavLink>
              </div>
              <div>
                <NavLink
                  to={"/login-signup"}
                  className="block py-1 text-[#389BBC] bg-[#98D2E5] 2xl:bg-transparent rounded-xl md:text-[#389BBC] md:p-0 md:dark:text-[#389BBC] xl:bg-transparent lg:bg-transparent md:bg-transparent text-center hover:bg-[#389BBC] hover:text-white transition-colors duration-300 h-[30px] w-[65px] max-[766px]:w-full"
                >
                  Login
                </NavLink>
              </div>
              <div>
                <NavLink
                  to={"/login-signup"}
                  className="block py-1 text-[#389BBC] bg-[#98D2E5] 2xl:bg-transparent rounded-xl md:text-[#389BBC] md:p-0 md:dark:text-[#389BBC] xl:bg-transparent lg:bg-transparent md:bg-transparent text-center hover:bg-[#389BBC] hover:text-white transition-colors duration-300 h-[30px] w-[65px] max-[766px]:w-full"
                >
                  Sign Up
                </NavLink>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
