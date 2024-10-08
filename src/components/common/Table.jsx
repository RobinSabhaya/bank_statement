import React from "react";
import Header from "./Header";
import CircularProgressbar from "../common/CircleProgressBar";
import Footer from "./Footer";
const Table = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full flex-col">
        <Header></Header>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex sm:justify-start mt-5 sm:flex-nowrap items-center mb-10 sm:gap-5 gap-20 flex-row flex-wrap justify-center">
          <div className="h-[23vh] sm:w-[20vw] w-full">
            <CircularProgressbar percentage={100}></CircularProgressbar>
            <p className="text-center text-[#389BBC] font-bold my-5">
              Total User
            </p>
          </div>
          <div className="w-full h-[23vh] sm:w-[20vw]">
            <CircularProgressbar percentage={25}></CircularProgressbar>
            <p className="text-center text-[#389BBC] font-bold my-5">
              Essentials
            </p>
          </div>
          <div className="w-full h-[23vh] sm:w-[20vw]">
            <CircularProgressbar percentage={50}></CircularProgressbar>
            <p className="text-center text-[#389BBC] font-bold  my-5">
              Bussiness
            </p>
          </div>
          <div className="w-full h-[23vh] sm:w-[20vw]">
            <CircularProgressbar percentage={25}></CircularProgressbar>
            <p className="text-center text-[#389BBC] font-bold my-5">
              Advanced
            </p>
          </div>
        </div>
      </div>
      <h1>
        <button className="border border-[#389BBC] rounded-lg text-[#389BBC] p-2 px-12 block m-auto my-10 font-bold text-2xl">
          Essentials User
        </button>
      </h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-16">
        <table className="w-full text-sm text-left rtl:text-right text-[#389BBC]">
          <thead className="text-xs text-white bg-[#389BBC]">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Start Date
              </th>
              <th scope="col" className="px-6 py-3">
                End Date
              </th>
              <th scope="col" className="px-6 py-3">
                Mode
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                1.
              </th>
              <td className="px-6 py-4">test1@gmail.com</td>
              <td className="px-6 py-4">10-12-2024</td>
              <td className="px-6 py-4">10-12-2024</td>
              <td className="px-6 py-4">active</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap "
              >
                2.
              </th>
              <td className="px-6 py-4">test2@gmail.com</td>
              <td className="px-6 py-4">12-12-2024</td>
              <td className="px-6 py-4">12-12-2024</td>
              <td className="px-6 py-4">active</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                3.
              </th>
              <td className="px-6 py-4">test3@gmail.com</td>
              <td className="px-6 py-4">14-12-2024</td>
              <td className="px-6 py-4">14-12-2024</td>
              <td className="px-6 py-4 text-red-500">deactive</td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap "
              >
                4.
              </th>
              <td className="px-6 py-4">test4@gmail.com</td>
              <td className="px-6 py-4">16-12-2024</td>
              <td className="px-6 py-4">16-12-2024</td>
              <td className="px-6 py-4">active</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Table;
