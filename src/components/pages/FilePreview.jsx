import React, { useState, useContext, useEffect } from "react";
import Header from "../common/Header";
import { useLocation } from "react-router-dom";
import Footer from "../common/Footer";
import axios from "axios";
import apiRoutes from "../helpers/api.helper";

const FilePreview = () => {
  const [statement, setStatement] = useState([]);
  const [Loading, setLoading] = useState(false);
  const location = useLocation();
  const data = location.state?.data;

  useEffect(() => {
    if (data != null) {
      const responseData = JSON.parse(data);
      setStatement(responseData);
    }
  }, [data]);

  const [activeTab, setActiveTab] = useState(0);
  const [downloadFormat, setDownloadFormat] = useState("");

  const tabs = Array.from(
    { length: statement?.length || 1 },
    (_, index) => index
  );

  /**
   * Handle all download files
   * @param {event} e
   */
  async function downloadAll(e) {
    e.preventDefault();
    setLoading(true);
    const { data } = await axios
      .post(`${apiRoutes.CONVERT}${downloadFormat}`, statement, {
        headers: {
          withCredentials: false,
        },
        responseType: "arraybuffer",
      })
      .catch((err) => console.error(err));
    const url = window.URL.createObjectURL(
      new Blob([data], { type: "application/zip" })
    );
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `all_files_${new Date().getDate()}-${
        new Date().getMonth() + 1
      }-${new Date().getFullYear()}.zip`
    );
    document.body.appendChild(link);
    link.click();
    setLoading(false);
  }

  /**
   * Handle file types
   * @param {event} e
   */
  async function handleFileType(e) {
    e.preventDefault();
    const { data } = await axios
      .post(`${apiRoutes.CONVERT}${e.target.value}`, statement[activeTab], {
        headers: {
          withCredentials: false,
        },
        responseType: "arraybuffer",
      })
      .catch((err) => console.error(err));
    const url = window.URL.createObjectURL(
      new Blob([data], { type: "application/csv" })
    );
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `${statement[activeTab]?.fileName?.split(".")[0] || "file"}.csv`
    );
    document.body.appendChild(link);
    link.click();
  }

  return (
    <>
      <div className="flex justify-center items-center w-full flex-col">
        <Header></Header>
      </div>
      <div className="border-2 border-[#389BBC] max-w-[1436px] rounded-2xl mt-5 h-auto mx-10 lg:mx-20 max-[540px]:mx-6">
        <div className="mt-4 px-6 py-4 flex md:justify-end md:flex-row items-center rounded-b-lg gap-6 flex-wrap justify-center flex-col">
          <div className="flex space-x-6">
            <label className="flex items-center text-[#389BBC] font-semibold">
              <input
                type="radio"
                name="downloadFormat"
                value="-to-excel-all"
                onChange={() => setDownloadFormat("-to-excel-all")}
                className="mr-2 focus:accent-[#389BBC] accent-[#389BBC]"
              />
              Excel
            </label>
            <label className="flex items-center text-[#389BBC] font-semibold">
              <input
                type="radio"
                name="downloadFormat"
                value="-to-csv-all"
                onChange={() => setDownloadFormat("-to-csv-all")}
                className="mr-2 focus:accent-[#389BBC] accent-[#389BBC]"
              />
              CSV
            </label>
            <label className="flex items-center text-[#389BBC] font-semibold">
              <input
                type="radio"
                name="downloadFormat"
                value="JSON"
                onChange={() => setDownloadFormat("-to-json-all")}
                className="mr-2 focus:accent-[#389BBC] accent-[#389BBC]"
              />
              JSON
            </label>
          </div>
          <a
            className="px-6 py-2 bg-[#389BBC] text-white rounded-md shadow-sm hover:bg-[#389BBC] transition-colors duration-300"
            id="downloadAll"
            onClick={downloadAll}
          >
            {Loading ? "Loading..." : "Download All"}
          </a>
        </div>
        <div className="h-auto p-6 flex flex-col items-center">
          <div className="w-full bg-white shadow-lg rounded-lg mx-4 h-auto">
            {/* Tab Navigation */}
            <div className="flex justify-between rounded-lg overflow-hidden border-2 border-[#389BBC] flex-wrap lg:flex-nowrap">
              {tabs.length &&
                tabs?.map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 w-full text-lg font-medium focus:outline-none transition-colors duration-300 ${
                      activeTab === tab
                        ? "bg-[#389BBC] text-white"
                        : "bg-white text-gray-800 hover:bg-[#98D2E5]"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {statement[tab]?.fileName}
                  </button>
                ))}
            </div>
            <div className="border-t h-full flex justify-center items-center text-black font-medium">
              <div className="p-4 w-full mx-auto bg-white">
                <div className="flex justify-between border-b pb-4 mb-4 flex-wrap lg:flex-nowrap gap-4">
                  {/* <div>
                    <div>
                      <h2>
                        <strong>Bank</strong> :{" "}
                        {statement[activeTab]?.bankStatement?.bankName || "-"}
                      </h2>
                      <p className="break-words">
                        <strong>Bank Address :</strong>{" "}
                        {statement[activeTab]?.bankStatement?.bankAddress ||
                          "-"}
                      </p>
                      <p>
                        <strong>IFSC Code:</strong>{" "}
                        {statement[activeTab]?.bankStatement?.ifscCode || "-"}
                      </p>
                      <p>
                        <strong>Customer Id:</strong>{" "}
                        {statement[activeTab]?.bankStatement?.customerId || "-"}
                      </p>
                      <p>
                        <strong>Account Number:</strong>{" "}
                        {statement[activeTab]?.bankStatement?.accountNumber ||
                          "-"}
                      </p>
                    </div>
                    <div>
                      <h2>
                        <strong>Account Holder :</strong>{" "}
                        {statement[activeTab]?.bankStatement
                          ?.accountHolderName || "-"}
                      </h2>
                      <p>
                        <strong>Account Holder Address :</strong>{" "}
                        {
                          statement[activeTab]?.bankStatement
                            ?.accountHolderAddress || "-"

                          // statement[activeTab]?.bankStatement
                          //   ?.accountHolderAddress.split("").length > 50
                          //   ? statement[
                          //       activeTab
                          //     ]?.bankStatement?.accountHolderAddress
                          //       .slice(0, 10)
                          //       .join(" ") + "..."
                          //   : statement[activeTab]?.bankStatement
                          //   ?.accountHolderAddress
                        }
                      </p>
                      <p>
                        <strong>Statement Date:</strong> 
                        {statement[activeTab]?.bankStatement?.toDate || "-"}
                      </p>
                      <p>
                        <strong>Opening Balance:</strong>
                        {statement[
                          activeTab
                        ]?.bankStatement?.openingBalance?.toFixed(2) || 0}
                      </p>
                      <p>
                        <strong>Closing Balance:</strong>
                        {statement[
                          activeTab
                        ]?.bankStatement?.closingBalance?.toFixed(2) || 0}
                      </p>
                      <p>
                        <strong>Total Withdrawal:</strong>
                        {statement[
                          activeTab
                        ]?.bankStatement?.totalWithdrawalAmount?.toFixed(2) ||
                          0}
                      </p>
                      <p>
                        <strong>Total Deposit:</strong>
                        {statement[
                          activeTab
                        ]?.bankStatement?.totalDepositAmount?.toFixed(2) || 0}
                      </p>
                      <p>
                        <strong>Withdrawal Count:</strong>
                        {statement[activeTab]?.bankStatement?.withdrawalCount ||
                          "-"}
                      </p>
                      <p>
                        <strong>Deposit Count:</strong>
                        {statement[activeTab]?.bankStatement?.depositCount ||
                          "-"}
                      </p>
                    </div>
                  </div> */}
                  <div className="grid grid-cols-4 gap-4 xl:gap-x-28 text-sm max-[543px]:grid-cols-2">
                    <div>
                      <h2>
                        <strong>Bank :</strong> <br />
                        {statement[activeTab]?.bankStatement?.bankName || "-"}
                      </h2>
                    </div>
                    <div>
                      <p className="break-words">
                        <strong>Bank Address :</strong> <br />
                        {statement[activeTab]?.bankStatement?.bankAddress ||
                          "-"}
                      </p>
                    </div>
                    <div>
                      <strong>IFSC Code :</strong> <br />
                      {statement[activeTab]?.bankStatement?.ifscCode || "-"}
                    </div>
                    <div>
                      <strong>Customer Id :</strong> <br />
                      {statement[activeTab]?.bankStatement?.customerId || "-"}
                    </div>
                    <div>
                      <strong>Account Number :</strong> <br />
                      {statement[activeTab]?.bankStatement?.accountNumber ||
                        "-"}
                    </div>
                    <div>
                      <strong>Account Holder :</strong> <br />
                      <p>
                        {statement[activeTab]?.bankStatement
                          ?.accountHolderName || "-"}
                      </p>
                    </div>
                    <div>
                      <strong>Account Holder Address :</strong> <br />
                      {statement[activeTab]?.bankStatement
                        ?.accountHolderAddress || "-"}
                    </div>
                    <div>
                      <strong>Statement Date :</strong> <br />
                      {statement[activeTab]?.bankStatement?.toDate || "-"}
                    </div>
                    <div>
                      <strong>Opening Balance :</strong> <br />
                      <p>
                        {statement[
                          activeTab
                        ]?.bankStatement?.openingBalance?.toFixed(2) || 0}
                      </p>
                    </div>
                    <div>
                      <strong>Closing Balance :</strong> <br />
                      <p>
                        {statement[
                          activeTab
                        ]?.bankStatement?.closingBalance?.toFixed(2) || 0}
                      </p>
                    </div>
                    <div>
                      <strong>Total Withdrawal :</strong> <br />
                      <p>
                        {statement[
                          activeTab
                        ]?.bankStatement?.totalWithdrawalAmount?.toFixed(2) ||
                          0}
                      </p>
                    </div>
                    <div>
                      <strong>Total Deposit :</strong> <br />
                      <p>
                        {statement[
                          activeTab
                        ]?.bankStatement?.totalDepositAmount?.toFixed(2) || 0}
                      </p>
                    </div>
                    <div>
                      <strong>Withdrawal Count :</strong> <br />
                      <p>
                        {statement[activeTab]?.bankStatement?.withdrawalCount ||
                          "-"}
                      </p>
                    </div>
                    <div>
                      <strong>Deposit Count :</strong> <br />
                      <p>
                        {statement[activeTab]?.bankStatement?.depositCount ||
                          "-"}
                      </p>{" "}
                    </div>
                  </div>
                </div>
                <div className="relative overflow-x-auto max-h-96">
                  <table className="relative sm:rounded-lg w-full">
                    <thead>
                      <tr className="top-0 sticky bg-white">
                        <th className="py-2">No.</th>
                        <th className="py-2">Date</th>
                        <th className="py-2">Description</th>
                        <th className="py-2">Reference</th>
                        <th className="py-2">Debit</th>
                        <th className="py-2">Credit</th>
                        <th className="py-2">Closing Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {statement[activeTab]?.bankStatement?.transactions
                        ?.length &&
                        statement[activeTab]?.bankStatement?.transactions?.map(
                          (transaction, index) => (
                            <tr
                              key={transaction?.id}
                              className="border-t text-sm"
                            >
                              <td className="py-2 text-center px-2">
                                {index + 1 || "-"}
                              </td>
                              <td className="py-2 text-center px-2">
                                {transaction?.transactionDate || "-"}
                              </td>
                              <td className="py-2 text-center px-2">
                                {transaction?.description || "-"}
                              </td>
                              <td className="py-2 text-center px-2">
                                {transaction?.referenceNumber
                                  ? transaction?.referenceNumber
                                  : 0}
                              </td>
                              <td className="py-2 text-center px-2">
                                {transaction?.withdrawalAmount
                                  ? transaction?.withdrawalAmount?.toFixed(2)
                                  : 0}
                              </td>
                              <td className="py-2 text-center px-2">
                                {transaction?.depositAmount
                                  ? transaction?.depositAmount?.toFixed(2)
                                  : 0}
                              </td>
                              <td className="py-2 text-center px-2">
                                {transaction?.closingAmount
                                  ? transaction?.closingAmount?.toFixed(2)
                                  : 0}
                              </td>
                            </tr>
                          )
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center flex-row gap-5 mt-5 w-full">
            <button
              className="border border-[#389BBC] rounded-lg text-[#389BBC] px-10 py-3"
              value={"-to-csv"}
              onClick={handleFileType}
            >
              CSV
            </button>
            <button
              className="border border-[#389BBC] rounded-lg text-[#389BBC] px-10 py-3"
              value={"-to-excel"}
              onClick={handleFileType}
            >
              Excel
            </button>
            <button
              className="border border-[#389BBC] rounded-lg text-[#389BBC] px-10 py-3"
              value={"-to-json"}
              onClick={handleFileType}
            >
              Json
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default FilePreview;
