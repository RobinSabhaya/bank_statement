import React, { useState, useContext } from "react";
const DataContext = React.createContext();

const Test = () => {
  const result = useContext(DataContext);
  console.log(result);
  const [activeTab, setActiveTab] = useState("HDFC");
  const [downloadFormat, setDownloadFormat] = useState("Excel");

  const tabs = ["HDFC", "Axis", "ICICI", "SBI"];

  return (
    <>
      <div className="mt-4 px-6 py-4 flex justify-end items-center rounded-b-lg gap-6">
        <div className="flex space-x-6">
          <label className="flex items-center text-gray-700">
            <input
              type="radio"
              name="downloadFormat"
              value="Excel"
              checked={downloadFormat === "Excel"}
              onChange={() => setDownloadFormat("Excel")}
              className="mr-2 focus:ring-blue-500"
            />
            Excel
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="radio"
              name="downloadFormat"
              value="CSV"
              checked={downloadFormat === "CSV"}
              onChange={() => setDownloadFormat("CSV")}
              className="mr-2 focus:ring-blue-500"
            />
            CSV
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="radio"
              name="downloadFormat"
              value="JSON"
              checked={downloadFormat === "JSON"}
              onChange={() => setDownloadFormat("JSON")}
              className="mr-2 focus:ring-blue-500"
            />
            JSON
          </label>
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-300">
          Download All
        </button>
      </div>
      <div className="h-screen p-6 flex flex-col items-center">
        <div className="w-full bg-white shadow-lg rounded-lg mx-4 h-auto">
          {/* Tab Navigation */}
          <div className="flex justify-between border-b rounded-t-lg overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 w-full text-lg font-medium focus:outline-none transition-colors duration-300 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-blue-100"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="border-t h-80 flex justify-center items-center bg-gray-50 text-gray-600">
            <p className="text-xl">Displaying data for {activeTab}</p>
          </div>

          <div className="text-red-500">{result}</div>
        </div>
      </div>
      <div className="flex justify-end items-center flex-row gap-5">
        <div
          className="border border-[#389BBC] rounded-lg text-[#389BBC] px-10 py-3"
          // onClick={handleFileType}
          value={"csv"}
        >
          CSV
        </div>
        <div
          className="border border-[#389BBC] rounded-lg text-[#389BBC] px-10 py-3"
          // onClick={handleFileType}
          value={"excel"}
        >
          Excel
        </div>
        <div
          className="border border-[#389BBC] rounded-lg text-[#389BBC] px-10 py-3"
          // onClick={handleFileType}
          value={"json"}
        >
          Json
        </div>
      </div>
    </>
  );
};

export default Test;
