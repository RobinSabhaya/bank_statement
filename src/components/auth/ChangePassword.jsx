import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Password from "../../assets/password.svg";

const ChangePassword = () => {
  let navigationRoute = useLocation();
  navigationRoute = navigationRoute.pathname.replace("/", "");
  return (
    <>
      <div className="flex justify-center items-center flex-row flex-wrap w-full mt-4">
        <div className="flex justify-center items-center flex-col-reverse md:w-[60%] sm:w-[70%] border-2 rounded-xl border-[#389BBC] 2xl:flex-row h-auto w-full py-10 lg:justify-between lg:flex-row m-3 lg:w-[80%]">
          <div className="w-full 2xl:w-[calc(100%-50%)] xl:w-[calc(100%-50%)]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[calc(100vh-10vh)] lg:py-0">
              <div
                className={`w-full border rounded-xl border-[#389BBC] ${
                  navigationRoute == "new-password" ? "pb-40" : "pb-96"
                }`}
              >
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  {navigationRoute == "new-password" ? (
                    <>
                      <h2 className="text-[#389BBC] font-bold text-3xl">
                        New {""}
                        <span className="text-[#98D2E5] font-bold text-3xl">
                          Password
                        </span>
                      </h2>
                    </>
                  ) : (
                    <>
                      <h2 className="text-[#389BBC] font-bold text-3xl">
                        Reset {""}
                        <span className="text-[#98D2E5] font-bold text-3xl">
                          Password
                        </span>
                      </h2>
                    </>
                  )}
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-[#389BBC]"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="border border-[#389BBC] text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    {navigationRoute == "new-password" ? (
                      <>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-[#389BBC] "
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="border border-[#389BBC] text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white "
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-[#389BBC] "
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            className="border border-[#389BBC] text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white "
                            required
                          />
                        </div>
                      </>
                    ) : null}
                    <button
                      type="submit"
                      className="border border-[#389BBC] bg-[#389BBC] rounded-lg text-white px-10 py-2 w-full"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={Password} alt="password_image" width={500} height={500} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
