import logo from "./logo.svg";
import Home from "./components/pages/Home";
import Form from "./components/auth/Form";
import ChangePassword from "./components/auth/ChangePassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./components/common/Table";
import FilePreview from "./components/pages/FilePreview.jsx";
import { useEffect } from "react";

function App({ hideLoader }) {
  useEffect(hideLoader, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>} path="/" />
          <Route element={<Form></Form>} path="/login-signup" />
          <Route
            element={<ChangePassword></ChangePassword>}
            path="/reset-password"
          />
          <Route
            element={<ChangePassword></ChangePassword>}
            path="/new-password"
          />
          <Route element={<Table></Table>} path="/user-list" />
          <Route element={<FilePreview></FilePreview>} path="/file-preview" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
