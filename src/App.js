import logo from "./logo.svg";
import Home from "./components/pages/Home";
import Form from "./components/auth/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>} path="/" />
          <Route element={<Form></Form>} path="/login-signup" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
