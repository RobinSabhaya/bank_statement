import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleProgressBar = ({ percentage }) => {
  return (
    <>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        className="w-[20vw] h-[25vh]"
        styles={{
          // pathColor: "#389BBC",
          path: {
            // Path color
            stroke: "#389BBC",
            // Customize transition animation
            transition: "stroke-dashoffset 0.5s ease 0s",
            // Rotate the path
            transformOrigin: "center center",
          },
          trail: {
            // Trail color
            stroke: "#98D2E5",
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Rotate the trail
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
        }}
      />
    </>
  );
};

export default CircleProgressBar;
