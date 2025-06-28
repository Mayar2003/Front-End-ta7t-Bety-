import { useContext, useState } from "react";
import "./App.css";
import SignUpComp from "./Components/SignUpComp";
import { ResponseStateContext } from "./Contexts/ResponseStateContext";
import ApiManager from "./ApiManager/ApiManager";
import { useNavigate } from "react-router-dom";

function SignUp() {
  // const dispatch = useDispatch();
  // const [loading , error] = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
    region: "Cairo",
    gender: "male",
    age: "25", // TODO: add age
    signUpPlatform: "website",
  });
  const { responseState, setResponseState } = useContext(ResponseStateContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with:", formData); // 👈 check if this logs

    setResponseState({ ...responseState, loading: true });

    ApiManager.signup(formData)
      .then((res) => {
        console.log("Signup response:", res.data); // Log the response data
        setResponseState({
          ...responseState,
          response: res.data,
          loading: false,
        });

        // Redirect to VerifyCode page with email
        navigate("/VerifyCode", { state: { email: formData.email } });
      })
      .catch((err) => {
        console.error("Signup error:", err); // Log the error
        setResponseState({
          ...responseState,
          error: err || "Signup failed",
          loading: false,
        });
      });
  };

  return (
    <>
      <SignUpComp
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        loading={responseState.loading}
        error={responseState.error}
      ></SignUpComp>
    </>
  );
}

export default SignUp;
