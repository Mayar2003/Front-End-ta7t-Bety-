function VerifyCodeComp({
  formData,
  setFormData,
  handleSubmit,
  handleResendCode,
  loading,
  error,
}) {
  return (
    <>
      <div className="signupBody ">
        <div className="BlueOverlay">
          <div className="signUpBage ">
            <h2 className="CreateAccH2">Verify Code</h2>
            <p className="FilSignUp">
              Please Enter The Code We Just Sent To {formData.email}
            </p>

            <div className="VerifyForm">
              <form className="CodeFrom flex">
                <input
                  type="text"
                  maxLength="1"
                  value={formData.verificationCode[0] || ""}
                  onChange={(e) => {
                    const verificationCode =
                      formData.verificationCode || Array(4).fill("");
                    verificationCode[0] = e.target.value;
                    setFormData({
                      ...formData,
                      verificationCode,
                    });
                  }}
                />
                <input
                  type="text"
                  maxLength="1"
                  value={formData.verificationCode[1] || ""}
                  onChange={(e) => {
                    const verificationCode =
                      formData.verificationCode || Array(4).fill("");
                    verificationCode[1] = e.target.value;
                    setFormData({
                      ...formData,
                      verificationCode,
                    });
                  }}
                />
                <input
                  type="text"
                  maxLength="1"
                  value={formData.verificationCode[2] || ""}
                  onChange={(e) => {
                    const verificationCode =
                      formData.verificationCode || Array(4).fill("");
                    verificationCode[2] = e.target.value;
                    setFormData({
                      ...formData,
                      verificationCode,
                    });
                  }}
                />
                <input
                  type="text"
                  maxLength="1"
                  value={formData.verificationCode[3] || ""}
                  onChange={(e) => {
                    const verificationCode =
                      formData.verificationCode || Array(4).fill("");
                    verificationCode[3] = e.target.value;
                    setFormData({
                      ...formData,
                      verificationCode,
                    });
                  }}
                />
              </form>

              <div className="ResendCode">
                <h6 className="DidnotRec">Didn't Recieve Code?</h6>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    // TODO: Add resend code functionality here
                    console.log("Resend code clicked");
                  }}
                >
                  <h6 className="Resend" onClick={handleResendCode}>
                    Resend Code
                  </h6>
                </a>
              </div>

              <button className="Verifybtn" onClick={handleSubmit}>
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default VerifyCodeComp;
