import React from "react";
import auth from "../../assets/auth.svg";

const Form = () => {
  function tabMove() {
    const currentTab = document.querySelectorAll("li");
    currentTab.forEach((item) => {
      item.addEventListener("click", function () {
        // Remove the 'active' class from all list items
        currentTab.forEach((li) => li.classList.remove("active"));

        // Add the 'active' class to the clicked item
        this.classList.add("active");
      });
    });
  }
  return (
    <>
      <div className="flex justify-center items-center flex-row flex-wrap w-full mt-4">
        <div className="flex justify-center items-center flex-row w-[70%] border-2 rounded-xl border-[#389BBC]">
          <div className=" w-[calc(100%-50%)]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[calc(100vh-10vh)] lg:py-0">
              <div className="w-full border rounded-xl border-[#389BBC]">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    <ul
                      className="flex flex-wrap text-sm font-medium text-center w-auto bg-[#389BBC] justify-around rounded-xl h-[50px]"
                      onClick={tabMove}
                    >
                      <li className="me-2">
                        <a
                          href="#"
                          className="inline-block px-4 py-3 text-white rounded-lg"
                          aria-current="page"
                        >
                          Login
                        </a>
                      </li>
                      <li className="me-2">
                        <a
                          href="#"
                          className="inline-block px-4 py-3 text-white rounded-lg"
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                  </h1>
                  <h2 className="text-[#389BBC] font-bold text-3xl">
                    Welcome{" "}
                    <span className="text-[#98D2E5] font-bold text-3xl">
                      Back
                    </span>
                  </h2>
                  <p className="text-[#389BBC] text-sm">
                    Sign In To Your Account To Continue.
                  </p>
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
                    </div>
                    <button
                      type="submit"
                      className="border border-[#389BBC] bg-[#389BBC] rounded-lg text-white px-10 py-2 w-full"
                    >
                      Login
                    </button>
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
