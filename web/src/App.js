import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Code from "./pages/code/Code";
import Login from "./pages/login";
import "./codeshare.css";
import SignUp from "./pages/signup/SignUp";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Code />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
