import React, { useEffect, useRef } from "react";
import Header from "../common/Header";
import CircularProgressbar from "../common/CircleProgressBar";
import Shield from "../../assets/shield.svg";
import Accurate from "../../assets/accurate.svg";
import Bank from "../../assets/bank.svg";
import getInTouch from "../../assets/get_in_touch.svg";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { images } from "../helpers/constant.helper";

const Home = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    variableWidth: true,
    dir: "rtl",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    // handleFile(fileUploaded);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full flex-col">
        <Header />
        <h3 className="text-[#389BBC] font-bold text-[30px] text-center">
          Instantly Convert Bank Statements
        </h3>
        <h5 className="text-[#389BBC] font-semibold mb-5 text-center">
          Free online converter powered by AI to convert your PDF bank
          statements into structured data formats like Excel, CSV, or JSON.
        </h5>
      </div>
      <div className="bg-[#DDF2F9] dark:bg-gray-900 top-0 start-0 border-2 border-[#389BBC] rounded-3xl mx-2 md:mx-20 lg:mx-20 mt-3 p-8">
        <div className="flex justify-center items-start flex-row w-full 2xl:justify-between flex-wrap">
          <div className="flex justify-center items-center flex-col">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center h-64  border-dashed  cursor-pointer bg-[#98D2E5]  border-2 border-[#389BBC] rounded-xl w-full mb-8 flex-wrap"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6 flex-wrap">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Upload Bank Statements</span>
                  {""} or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  We Accept Image And Pdf With Size Up To 10mb <br />
                  (For Pdf, Only The First 3 Pages Will Be Converted)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                max={5}
                multiple
              />
            </label>
            <div className="flex justify-center items-center flex-row gap-3 flex-wrap">
              <button className="border border-[#389BBC] rounded-lg text-[#389BBC] px-10 py-3">
                CSV
              </button>
              <button className="border border-[#389BBC] rounded-lg text-[#389BBC] px-10 py-3">
                Excel
              </button>
              <button className="border border-[#389BBC] rounded-lg text-[#389BBC] px-10 py-3">
                Json
              </button>
            </div>
            <button className="border border-[#389BBC] bg-[#389BBC] rounded-lg text-white px-10 py-3 m-5 w-[calc(100%-5%)]">
              Convert Statements
            </button>
            <p className="text-[#389BBC]">Your All Files Secure And Safe</p>
          </div>
          <div className="w-full md:w-[84%] lg:w-[84%] xl:w-[66%] 2xl:w-[70%] my-5">
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-start items-center mb-10 gap-2">
                <div className="w-[28vw] h-[23vh] md:w-[20vw]">
                  <CircularProgressbar percentage={25}></CircularProgressbar>
                  <p className="text-center text-[#389BBC] font-bold">CSV</p>
                </div>
                <div className="w-[28vw] h-[23vh] md:w-[20vw]">
                  <CircularProgressbar percentage={50}></CircularProgressbar>
                  <p className="text-center text-[#389BBC] font-bold">EXCEL</p>
                </div>
                <div className="w-[28vw] h-[23vh] md:w-[20vw]">
                  <CircularProgressbar percentage={75}></CircularProgressbar>
                  <p className="text-center text-[#389BBC] font-bold ">JSON</p>
                </div>
              </div>
              <hr className="h-px mb-5 mt-8 bg-[#98D2E5] border-0 w-[95%]" />
              <p className="font-bold text-[#389BBC] text-center text-xl mb-8">
                How To Convert Bank Statement To Excel (XLS) Or CSV
              </p>
              <div className="flex justify-center items-start flex-col w-full gap-2">
                <div className="flex justify-start items-start flex-row gap-3">
                  <ol className="list-decimal">
                    <li className="text-[#389BBC] font-semibold text-wrap md:text-left sm:text-left li-list m-3">
                      Click The "Upload Bank Statements" Button On Our Homepage
                      Or Drag And Drop Your File Into The Designated Area.
                    </li>
                    <li className="text-[#389BBC] font-semibold text-wrap md:text-left sm:text-left li-list m-3">
                      Choose The Pdf File You Need To Convert.
                    </li>
                    <li className="text-[#389BBC] font-semibold text-wrap md:text-left sm:text-left li-list m-3">
                      Press The "Convert Statements" Button.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col w-full lg:flex-row gap-5 my-5">
        <div className="flex justify-center items-center flex-col lg:w-[33%] w-full">
          <img src={Shield} alt="Shield" />
          <p className="text-[#389BBC] font-bold text-xl m-3">Secure</p>
          <p className="text-[#389BBC] font-semibold w-[75%] text-center mb-3">
            With Years Of Experience In Banking We Comply With Strict Standards
            When Handling Your Files.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col lg:w-[33%] w-full">
          <img src={Accurate} alt="Accurate" />
          <p className="text-[#389BBC] font-bold text-xl m-3">Accurate</p>
          <p className="text-[#389BBC] font-semibold  w-[75%] text-center mb-3">
            We're Continually Improving Our Algorithms. If A File Doesn't
            Convert To Your Expectations, Email Us And We'll Fix It.
          </p>
        </div>
        <div className="flex justify-center items-center flex-col lg:w-[33%] w-full">
          <img src={Bank} alt="Bank" />
          <p className="text-[#389BBC] font-bold text-xl m-3">Institutional</p>
          <p className="text-[#389BBC] font-semibold  w-[75%] text-center mb-3">
            We've Provided Our Services To Thousands Of Reputable Financial,
            Accounting And Legal Firms.
          </p>
        </div>
      </div>
      {/* React slick logo slider */}
      <div className="flex flex-col gap-4">
        <Slider className="slider-container w-[98%] ltr" {...settings}>
          {images.map((ele, i) => {
            return (
              <>
                <div key={i}>
                  <div className="bg-[#98D2E5] p-3 border-2 rounded-2xl flex justify-center items-center flex-col m-5 w-[200px] h-[100px] gap-3">
                    <img src={ele.img} alt="logo" height={50} width={50} />
                    <p className="text-white font-bold">{ele.name}</p>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
        <Slider className="slider-container w-[98%] rtl" {...settings}>
          {images.map((ele, i) => {
            return (
              <>
                <div key={i} className="transform rotate-180">
                  <div className="bg-[#98D2E5] p-3 border-2 rounded-2xl flex justify-center items-center flex-col m-5 w-[200px] h-[100px] gap-3">
                    <img src={ele.img} alt="logo" height={50} width={50} />
                    <p className="text-white font-bold">{ele.name}</p>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
        <Slider className="slider-container w-[98%] ltr" {...settings}>
          {images.map((ele, i) => {
            return (
              <>
                <div key={i}>
                  <div className="bg-[#98D2E5] p-3 border-2 rounded-2xl flex justify-center items-center flex-col m-5 w-[200px] h-[100px] gap-3">
                    <img src={ele.img} alt="logo" height={50} width={50} />
                    <p className="text-white font-bold">{ele.name}</p>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
      {/* Pricing */}
      <section className="bg-white" id="pricing">
        <div className="py-8 px-4 mx-auto max-w-[1436px] lg:py-16 lg:px-6">
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-2xl border border-[#389BBC] shadow xl:p-6 text-[#389BBC] hover:bg-[#389BBC] hover:text-white card transition-all">
              <h3 className="text-4xl font-semibold text-left ">Essentials</h3>
              <div className="flex justify-start items-baseline my-5">
                <span className="mr-2 text-3xl font-bold">₹ 199</span>
                <span className="text-[#389BBC]">/ Per Month</span>
              </div>
              <p className="text-left">
                Tailored for individuals plus little crews. Converts up to 500
                pages changed each month.
              </p>
              <button className="border border-[#389BBC] rounded-md bg-[#389BBC] text-white px-5 py-1 my-7 w-fit text-sm btn">
                Get Started
              </button>
              <ul className="space-y-4 text-left list-disc mx-8">
                <li>Clean data formatting</li>
                <li>Bulk processing</li>
                <li>Multiple export options</li>
                <li>Intuitive interface</li>
                <li>One-click download</li>
                <li>Global banks supported</li>
                <li>Secure encryption</li>
              </ul>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-[#389BBC] bg-white rounded-2xl border border-[#389BBC] shadow xl:p-6 hover:bg-[#389BBC] hover:text-white card transition-all">
              <h3 className="text-4xl font-semibold text-left">Business</h3>
              <div className="flex justify-start items-baseline my-5">
                <span className="mr-2 text-3xl font-bold">₹ 499</span>
                <span>/ Per Month</span>
              </div>
              <p className="text-left">
                Perfect for entrepreneurs, small teams and small biz. 1000 page
                monthly allowance.
              </p>
              <button className="border border-[#389BBC] rounded-md bg-[#389BBC] text-white px-5 py-1 my-7 w-fit text-sm mt-[49px] btn">
                Get Started
              </button>
              <ul className="space-y-4 text-left list-disc mx-8">
                <li>Clean data formatting</li>
                <li>Bulk processing</li>
                <li>Multiple export options</li>
                <li>Intuitive interface</li>
                <li>One-click download</li>
                <li>Global banks supported</li>
                <li>Secure encryption</li>
                <li>AI Copilot</li>
              </ul>
            </div>
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-[#389BBC] bg-white rounded-2xl border border-[#389BBC] shadow xl:p-6 hover:bg-[#389BBC] hover:text-white card transition-all">
              <h3 className="text-4xl font-semibold text-left">Advanced</h3>
              <div className="flex justify-start items-baseline my-5">
                <span className="mr-2 text-3xl font-bold">₹ 999</span>
                <span>/ Per Month</span>
              </div>
              <p className="text-left">
                Perfect for expansive teams and corporations. Up to 3000 pages
                converted each month.
              </p>
              <button className="border mt-[49px] border-[#389BBC] rounded-md bg-[#389BBC] text-white px-5 py-1 my-7 w-fit text-sm btn">
                Get Started
              </button>
              <ul className="space-y-4 text-left list-disc mx-8">
                <li>Clean data formatting</li>
                <li>Bulk processing</li>
                <li>Multiple export options</li>
                <li>Intuitive interface</li>
                <li>One-click download</li>
                <li>Global banks supported</li>
                <li>Secure encryption</li>
                <li>AI Copilot</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-row mb-20">
        <div className="border border-[#389BBC] max-w-[1436px] rounded-xl p-3">
          <h5 className="text-center text-[#389BBC] text-xl m-2">
            GET IN TOUCH
          </h5>
          <h1 className="text-center text-[#389BBC] text-3xl font-extrabold m-2">
            Have More Questions?
          </h1>
          <h1 className="text-left text-[#389BBC] text-3xl font-extrabold mx-8 my-4">
            Send In A Query
          </h1>
          <div className="grid grid-cols-1 mx-8 lg:grid-cols-2 my-3">
            <div className="flex justify-start items-center flex-col gap-y-5">
              <input
                type="email"
                name="email"
                id="email"
                className="border border-[#389BBC] text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="your work email*"
                required
              />
              <textarea
                id="message"
                rows="12"
                className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-[#389BBC]"
                placeholder="how we can help you?*"
              ></textarea>
              <div className="flex gap-5 mx-1 mt-5 w-full justify-start">
                <button
                  className="border border-[#389BBC] rounded-lg bg-[#389BBC] text-white p-2 px-12"
                  onClick={handleClick}
                >
                  Any Attachment
                  <input
                    type="file"
                    onChange={handleChange}
                    ref={hiddenFileInput}
                    style={{ display: "none" }}
                  />
                </button>
                <button className="border border-[#389BBC] rounded-lg bg-[#389BBC] text-white p-2 px-12">
                  Send Query
                </button>
              </div>
            </div>
            <img
              src={getInTouch}
              alt="Email"
              className="sm:row-start-1 sm:row-end-1 md:row-start-1 md:row-end-1 lg:row-span-1 2xl:row-span-1"
            />
          </div>
        </div>
      </section>
      <hr className="h-px mt-2 bg-[#389BBC] border-0 w-full" />
      <section className="text-center text-[#389BBC] m-3">
        Copyright © 2024 Bank Statement Ltd.
      </section>
    </>
  );
};

export default Home;
