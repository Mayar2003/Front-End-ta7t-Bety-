function NewPasswordComp() {
  return (
    <>
      <div className="signinBody ">
        <div className="BlueOverlay">
          <div className="signinBage ">
            <h2 className="SignInH2">New Password</h2>
            <p className="NewPassParagraph">
              Your New Password must be Different from previous used Password
            </p>

            <div className="SigninForm NewPassForm">
              <form action="">
                <div className="SigninEmail Password">
                  <label className="EmailLabelonframe" htmlFor="">
                    Password
                  </label>
                  <input type="text" />
                  <i className="fa-solid fa-lock"></i>
                </div>

                <div className="SigninPassword ConfirmPassword">
                  <label className="PasswordLabelonframe" htmlFor="">
                    Confirm Password
                  </label>
                  <input type="text" />
                  <i className="fa-solid fa-lock"></i>
                </div>

                <button className="SignInbtn NewPassbtn">
                  Create New Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewPasswordComp;
