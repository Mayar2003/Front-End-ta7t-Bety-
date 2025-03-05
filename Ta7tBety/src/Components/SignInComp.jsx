import React from "react";
import { Link } from 'react-router-dom';

function SignInComp(){
    return(
        <>
            <div className="signinBody ">
                <div className="BlueOverlay">
                <div className="signinBage ">
                    <h2 className="SignInH2">Sign In</h2>
                    <p className="HiSignin">Hi! Welcome back , you have been missed</p>

                    <div className="SigninForm">
                    <form action="">
                        <div className="SigninEmail">
                        <label className="EmailLabelonframe" htmlFor="">Email</label>
                        <input type="text" />
                        </div>

                        <div className="SigninPassword">
                        <label className="PasswordLabelonframe" htmlFor="">Password</label>
                        <input type="text" />
                        <i class="fa-solid fa-lock"></i>
                 
                        </div>
                    <div className="forgetPass">
                    <Link to="/VerifyCode">Forgot Password?</Link>
                    </div>


                    <button className="SignInbtn">Sign In</button>
                    </form>
                    </div>


                    <div className="orWith">
                        <h6 className="OrSigninWith">Or Sign in With</h6>
                        <p className="LineThrough"></p>
                    </div>

                    <div className="signinIcons flex justContentSpaceArround">
                    <i class="fa-brands fa-google"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-apple"></i>
                    </div>

                    <h5 className="SignUpDiv">
                        Don't have an account? <span><Link to="/SignUp">Sign Up</Link></span>
                    </h5>
                </div>
                </div>
            </div>
        </>
    )
}
export default SignInComp;