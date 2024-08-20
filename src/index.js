import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import reportWebVitals from "./reportWebVitals";
const loader = document.querySelector(".loader");

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove("flex");

const hideLoader = () => loader.classList.add("hidden");

const root = ReactDOM.createRoot(document.getElementById("root"));

setTimeout(
  () =>
    root.render(
      <GoogleOAuthProvider
        clientId={
          "408508429361-r68g104cb3s97k1sn3dj3offejkqvcu7.apps.googleusercontent.com"
        }
      >
        <React.StrictMode>
          <App hideLoader={hideLoader} showLoader={showLoader} />
        </React.StrictMode>
      </GoogleOAuthProvider>
    ),
  1000
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
