import React, { useState } from "react";
import auth from "../../assets/auth.svg";

const Form = () => {
  const [active, setActive] = useState(false);
  // const currentTab = document.querySelectorAll("li");
  // currentTab.forEach((item) => {
  //   item.addEventListener("click", function () {
  //     // Remove the 'active' class from all list items
  //     currentTab.forEach((li) => {
  //       li.classList.remove("active");
  //       setActive(true);
  //     });

  //     // Add the 'active' class to the clicked item
  //     this.classList.add("active");
  //   });
  // });
  return (
    <>
      <div className="flex justify-center items-center flex-row flex-wrap w-full mt-4">
        <div className="flex justify-center items-center flex-col-reverse lg:w-[70%] xl:w-[70%] lg:border-2 lg:rounded-xl border-[#389BBC] 2xl:flex-row h-screen">
          <div className="w-full 2xl:w-[calc(100%-50%)]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[calc(100vh-10vh)] lg:py-0">
              <div className="w-full border rounded-xl border-[#389BBC]">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    <ul className="flex flex-wrap text-sm font-medium text-center w-auto bg-[#389BBC] justify-around rounded-xl h-[50px]">
                      <li
                        className={`me-2 ${active ? "" : "active"}`}
                        onClick={() => {
                          setActive(false);
                        }}
                      >
                        <a
                          href="#"
                          className="inline-block px-4 py-3 text-white rounded-lg"
                          aria-current="page"
                        >
                          Login
                        </a>
                      </li>
                      <li
                        className={`me-2 ${!active ? "" : "active"}`}
                        onClick={() => {
                          setActive(true);
                        }}
                      >
                        <a
                          href="#"
                          className="inline-block px-4 py-3 text-white rounded-lg"
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                  </h1>
                  {!active ? (
                    <>
                      <h2 className="text-[#389BBC] font-bold text-3xl">
                        Welcome{" "}
                        <span className="text-[#98D2E5] font-bold text-3xl">
                          Back
                        </span>
                      </h2>
                      <p className="text-[#389BBC] text-sm">
                        Sign In To Your Account To Continue.
                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="text-[#389BBC] font-bold text-3xl">
                        Create An Account {""}
                        <span className="text-[#98D2E5] font-bold text-3xl">
                          Today
                        </span>
                      </h2>
                      <p className="text-[#389BBC] text-sm">
                        Register An Account To Enjoy All The Benefits Of Our
                        Platform.
                      </p>
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
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
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                      {active ? (
                        <>
                          <div className="flex justify-center items-center flex-row gap-3 m-4">
                            <button className="border border-[#389BBC] rounded-lg text-[#389BBC] px-7 py-3">
                              Essentials
                            </button>
                            <button className="border border-[#389BBC] rounded-lg text-[#389BBC] px-7 py-3">
                              Business
                            </button>
                            <button className="border border-[#389BBC] rounded-lg text-[#389BBC] px-7 py-3">
                              Advanced
                            </button>
                          </div>
                        </>
                      ) : null}
                    </div>
                    <button
                      type="submit"
                      className="border border-[#389BBC] bg-[#389BBC] rounded-lg text-white px-10 py-2 w-full"
                    >
                      {!active ? "Login" : "Register"}
                    </button>
                    <div className="flex justify-center items-center flex-row gap-2">
                      <hr class="h-px bg-[#389BBC] border-0 w-[50%]" />
                      <p className="text-[#389BBC]">OR</p>
                      <hr class="h-px bg-[#389BBC] border-0 w-[50%]" />
                    </div>
                    <div className="flex justify-center items-center flex-row">
                      <button class="button w-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid"
                          viewBox="0 0 256 262"
                          class="svg pl-3"
                        >
                          <path
                            fill="#4285F4"
                            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                            class="blue"
                          ></path>
                          <path
                            fill="#34A853"
                            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                            class="green"
                          ></path>
                          <path
                            fill="#FBBC05"
                            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                            class="yellow"
                          ></path>
                          <path
                            fill="#EB4335"
                            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                            class="red"
                          ></path>
                        </svg>
                        <span class="text text-[#389BBC] text-center m-auto block">
                          Login with Google
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={auth} alt="auth_image" width={500} height={500} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
