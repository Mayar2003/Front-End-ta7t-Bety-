function VerifyCodeComp() {
  return (
    <>
      <div className="signupBody ">
        <div className="BlueOverlay">
          <div className="signUpBage ">
            <h2 className="CreateAccH2">Verify Code</h2>
            <p className="FilSignUp">
                Please Enter The Code We Just Send To Email@gamil.com
            </p>

            <div className="VerifyForm">
                <form className="CodeFrom flex " action="">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </form>

            <div className="ResendCode">
            <h6 className="DidnotRec">Didn't Recieve Code?</h6>
            <a href=""><h6 className="Resend">Resend Code</h6></a>
            </div>

            <button className="Verifybtn">Verify</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default VerifyCodeComp;
