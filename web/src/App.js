import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Code from "./pages/code/Code";
import Login from "./pages/login";
import "./codeshare.css";
import SignUp from "./pages/signup/SignUp";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Codes from "./pages/codes/Codes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/auth/authSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("user"));
    dispatch(setUser(storageData));
  }, [user?._id]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Code />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/codes" element={<Codes />} />
    </Routes>
  );
}

export default App;
