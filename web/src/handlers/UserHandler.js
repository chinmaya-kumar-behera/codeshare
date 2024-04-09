import { useState } from "react";
import { signupService } from "../services/signupService";
import toast from "react-hot-toast";

const UserHandler = () => {
  const [signUpData, setSignUpData] = useState({ name: "", email: "", password: ""});

    function resetSignUpData() {
      setSignUpData({
        name: "",
        email: "",
        password: "",
        loading: false,
      });
    }

  async function signupHandler(data) {
      try {
      setSignUpData((prev) => ({ ...prev, loading: true }));
      const result = await signupService(data);
      const { message } = result.data;
      if (result.status === 201) {
        toast.success(message);
          resetSignUpData();
          }
      setSignUpData((prev) => ({ ...prev, loading: false }));
    } catch (err) {
      const { message } = err.response.data;
      const { status } = err.response;
      if (status === 400) toast.error(message);
      setSignUpData((prev) => ({ ...prev, loading: false }));
          
    }
  }

  async function onSubmitHandler(event) {
    event.preventDefault();
    signupHandler(signUpData);
  }

  const onSignupChange = (event) => {
    const { name, value } = event.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  return { signUpData, onSignupChange, onSubmitHandler };
};

export default UserHandler;
