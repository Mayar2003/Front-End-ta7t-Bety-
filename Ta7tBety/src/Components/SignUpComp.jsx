import React from "react";
import { Link } from "react-router-dom";

function SignUpComp({ formData, setFormData, handleSubmit, loading, error }) {
  return (
    <>
      <div className="signupBody ">
        <div className="BlueOverlay">
          <div className="signUpBage ">
            <h2 className="CreateAccH2">Create Accont</h2>
            <p className="FilSignUp">
              Fill your information below or register with your Social Account
            </p>

            <div className="SignUpForm">
              <form onSubmit={handleSubmit}>
                <div className="SignUpName">
                  <label className="NameLabelonframe" htmlFor="">
                    Name
                  </label>
                  <input
                    name="name"
                    placeholder="Name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="SignUpEmail">
                  <label className="EmailLabelonframe" htmlFor="">
                    Email
                  </label>
                  <input
                    name="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="SignUpPassword">
                  <label className="PasswordLabelonframe" htmlFor="">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                  <i className="fa-solid fa-lock"></i>
                </div>
                <div className="SignUpConfirmPassword">
                  <label className="PasswordLabelonframe" htmlFor="">
                    Confirm Password
                  </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        passwordConfirm: e.target.value,
                      })
                    }
                    required
                  />
                  <i className="fa-solid fa-lock"></i>
                </div>
                <button className="SignUpbtn" type="submit" disabled={loading}>
                  {loading ? "Signing up..." : "Sign Up"}{" "}
                  {/* <Link to="/VerifyCode">Sign Up</Link> */}
                </button>
                {error && (
                  <p style={{ color: "red" }}>{error.response.data.message}</p>
                )}
              </form>
            </div>

            <div className="orWith">
              <h6 className="OrSignupWith">Or Sign Up With</h6>
              <p className="LineThrough"></p>
            </div>

            <div className="signinIcons flex justContentSpaceArround">
              <i className="fa-brands fa-google"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-apple"></i>
            </div>

            <h5 className="SignUpDiv">
              Already have an account?{" "}
              <span>
                <Link to="/SignIn">Sign In</Link>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUpComp;
