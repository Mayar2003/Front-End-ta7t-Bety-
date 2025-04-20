import React from "react";
import { Link } from 'react-router-dom';

function SignUpComp(){
    return(
        <>
            <div className="signupBody ">
                <div className="BlueOverlay">
                <div className="signUpBage ">
                    <h2 className="CreateAccH2">Create Accont</h2>
                    <p className="FilSignUp">Fill your information below or register with your Social Account</p>

                    <div className="SignUpForm">
                    <form onSubmit={handleSubmit}>
                        <div className="SignUpName">
                        <label className="NameLabelonframe" htmlFor="">Name</label>
                        <input type="text" />
                        </div>

                        <div className="SignUpEmail">
                        <label className="EmailLabelonframe" htmlFor="">Email</label>
                        <input name="email" placeholder="Email" onChange={handleChange} required />
                 
                        </div>


                        <div className="SignUpPassword">
                        <label className="PasswordLabelonframe" htmlFor="">Password</label>
                        <input name="password" type="password" placeholder="Password" onChange={handleChange} required/>
                        <i class="fa-solid fa-lock"></i>
                 
                        </div>



                        <div className="SignUpConfirmPassword">
                        <label className="PasswordLabelonframe" htmlFor="">Confirm Password</label>
                        <input type="text" />
                        <i class="fa-solid fa-lock"></i>
                 
                        </div>


                    <button className="SignUpbtn" type="submit" disabled={loading}> 
                        {loading ? 'Signing up...' : 'Sign Up'} <Link to="/VerifyCode" >Sign Up</Link></button>\{error && <p style={{ color: 'red' }}>{error}</p>}
                        
                    </form>
                    </div>


                    <div className="orWith">
                        <h6 className="OrSignupWith">Or Sign Up With</h6>
                        <p className="LineThrough"></p>
                    </div>

                    <div className="signinIcons flex justContentSpaceArround">
                    <i class="fa-brands fa-google"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-apple"></i>
                    </div>

                    <h5 className="SignUpDiv">
                        Already have an account? <span><Link to="/SignIn">Sign In</Link></span>
                    </h5>
                </div>
                </div>
            </div>
        </>
    )
}
export default SignUpComp;