import { useContext, useState } from "react";
import "./App.css";
import React from "react";
import SignInComp from "./Components/SignInComp";
import ApiManager from "./ApiManager/ApiManager";
import { ResponseStateContext } from "./Contexts/ResponseStateContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Contexts/AuthContext";
import useUser from "./Hooks/useUser";

function SignIn() {
  const navigate = useNavigate();
  const { user, updateUser } = useUser();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { responseState, setResponseState } = useContext(ResponseStateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData); // 👈 check if this logs

    setResponseState({ ...responseState, loading: true });

    ApiManager.login(formData)
      .then((res) => {
        const response = res.data;
        console.log("Login response:", response); // Log the response data
        setResponseState({
          ...responseState,
          response,
          loading: false,
        });

        updateUser(response.data.user); // Ensure user is set correctly
        console.log("User set in AuthContext:", response.data.user); // Log user for debugging

        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        navigate("/"); // Redirect to home page after successful login
      })
      .catch((err) => {
        console.error("Login error:", err);
        setResponseState({
          ...responseState,
          error: err || "Login failed",
          loading: false,
        });
      });
  };

  return (
    <>
      <SignInComp
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        loading={responseState.loading}
        error={responseState.error}
      ></SignInComp>
    </>
  );
}

export default SignIn;
