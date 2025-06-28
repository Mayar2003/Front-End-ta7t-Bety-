import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VerifyCodeComp from "./Components/VerifyCodeComp";
import { ResponseStateContext } from "./Contexts/ResponseStateContext";
import ApiManager from "./ApiManager/ApiManager";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Contexts/AuthContext";

function VerifyCode() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const { responseState, setResponseState } = useContext(ResponseStateContext);
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: location.state?.email || "",
    verificationCode: Array(4).fill(""),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.verificationCode = formData.verificationCode.join("");
    formData.verificationCode = formData.verificationCode * 1;
    console.log("Verifying code with:", formData); // 👈 check if this logs

    setResponseState({ ...responseState, loading: true });

    ApiManager.verifyEmail(formData)
      .then((res) => {
        const response = res.data;
        console.log("Verify code response:", response); // Log the response data
        setResponseState({
          ...responseState,
          response,
          loading: false,
        });
        setUser(response.data.user);

        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("jwt", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/"); // Redirect to home page after successful verification
      })
      .catch((err) => {
        console.error("Verify code error:", err); // Log the error
        setResponseState({
          ...responseState,
          error: err || "Verify code failed",
          loading: false,
        });
      })
      .finally(() => {
        // Reset the form data after submission
        setFormData({
          email: location.state?.email || "",
          verificationCode: Array(4).fill(""),
        });
      });
  };

  function handleResendCode(e) {
    e.preventDefault();
    console.log("Resending code to:", formData.email); // 👈 check if this logs

    setResponseState({ ...responseState, loading: true });

    ApiManager.resendVerificationCode({ email: formData.email })
      .then((res) => {
        const response = res.data;
        console.log("Resend code response:", response); // Log the response data
        setResponseState({
          ...responseState,
          response,
          loading: false,
        });
      })
      .catch((err) => {
        console.error("Resend code error:", err); // Log the error
        setResponseState({
          ...responseState,
          error: err || "Resend code failed",
          loading: false,
        });
      })
      .finally(() => {
        // Reset the form data after submission
        setFormData({
          email: location.state?.email || "",
          verificationCode: Array(4).fill(""),
        });
      });
  }

  return (
    <>
      <VerifyCodeComp
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        handleResendCode={handleResendCode}
        loading={responseState.loading}
        error={responseState.error}
      ></VerifyCodeComp>
    </>
  );
}

export default VerifyCode;
