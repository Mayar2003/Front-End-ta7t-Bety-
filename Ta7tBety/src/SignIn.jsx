import { useContext, useState } from "react";
import "./App.css";
import React from "react";
import SignInComp from "./Components/SignInComp";
import ApiManager from "./ApiManager/ApiManager";
import { ResponseStateContext } from "./Contexts/ResponseStateContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Contexts/AuthContext";

function SignIn() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { responseState, setResponseState } = useContext(ResponseStateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData); // 👈 check if this logs

    setResponseState({ ...responseState, loading: true });

    ApiManager.login(formData)
      .then((res) => {
        const response = res.data;
        const { user, token } = response.data;
        setResponseState({
          ...responseState,
          response,
          loading: false,
        });

        setUser(user);

        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));

        if (user.role === "admin") {
          navigate("/dashboard");
          return;
        }
        navigate("/");
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
