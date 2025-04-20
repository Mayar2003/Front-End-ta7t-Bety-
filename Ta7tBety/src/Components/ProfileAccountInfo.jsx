import { useState } from "react";
// import { Link } from "react-router-dom";


function ProfileAccountInfo() {
  
  const [changeEmailPopUp, setchangeEmailPopUp] = useState(false);
  const [changePasswordPopUp, setchangePasswordPopUp] = useState(false);
  const [changePhonePopUp, setchangePhonePopUp] = useState(false);
  const [changeVerifyCodePopUp, setchangeVerifyCodePopUp] = useState(false);
  const [changeNewPhoneNumPopUp, setchangeNewPhoneNumPopUp] = useState(false);

  function EmailToggleModal(e) {
    setchangeEmailPopUp(!changeEmailPopUp);
    e.preventDefault();
  }

  function PasswordToggleModal(e) {
    setchangePasswordPopUp(!changePasswordPopUp);
    e.preventDefault();
  }

  function PhoneToggleModal(e) {
    setchangePhonePopUp(!changePhonePopUp);
    e.preventDefault();
  }

  return (
    <>
     <div className="ProfileInfo flex">
      
        <div className="Info flex wrap">
          <div className="ProfilePhoto-button flex justContentSpaceBet alignItemsCenter">
            <div className="Photo">
              <img
                src="/Graduation project assestst/Graduation project/OIP.jpg"
                alt=""
              />
              <a href="">change photo</a>
            </div>

            <div className="button">
              <button>update info</button>
            </div>
          </div>

          <div className="PersonalInfo">
            <div class="container text-center">
              <div class="row align-items-start mb-4">
                <div class="col-3 PersonalInfolabel">
                  <label htmlFor="">Email</label>
                </div>
                <div class="col-3 ">
                  <input className="bgcBblueInput" type="text" />
                </div>
                <div class="col-3">
                  <a href="" onClick={EmailToggleModal}>
                    change email
                  </a>
                </div>
                <div class="col-3">
                  <a href="" onClick={PasswordToggleModal}>
                    change password
                  </a>
                </div>
              </div>

              <div class="row align-items-start mb-4">
                <div class="col-3 PersonalInfolabel">
                  <label htmlFor="">Name</label>
                </div>
                <div class="col-3">
                  <input type="text" />
                </div>
                <div class="col-3"></div>
                <div class="col-3"></div>
              </div>

              <div class="row align-items-start mb-4">
                <div class="col-3 PersonalInfolabel">
                  <label htmlFor="">Phone Number</label>
                </div>
                <div class="col-3">
                  <input className="bgcBblueInput" type="text" />
                </div>
                <div class="col-4 textAlignRight">
                  <a href="" onClick={PhoneToggleModal}>
                    change phone number
                  </a>
                </div>
                <div class="col-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {changeEmailPopUp && (
        <div className="EmailPopUp">
          <div className="lightOverlay">
            <div className="popUp">
              <div className="popUpHeader flex justContentSpaceBet">
                <h5 className="ChangeEmail">Change Email</h5>
                <i
                  class="fa-solid fa-xmark"
                  onClick={() => setchangeEmailPopUp(false)}
                ></i>
              </div>

              <div class="container text-center popUpForm">
                <div class="row align-items-start">
                  <div class="col-5">
                    <label htmlFor="">Currnt Password</label>
                  </div>
                  <div class="col-6">
                    <input
                      className="bgcBblueInput"
                      type="text"
                      placeholder="Current Password"
                    />
                    <div class="col-1"></div>
                    <i class="fa-solid fa-lock"></i>
                  </div>
                </div>

                <div class="row align-items-start">
                  <div class="col-5">
                    <label htmlFor="">New Email</label>
                  </div>
                  <div class="col-6">
                    <input
                      className="bgcBblueInput"
                      type="text"
                      placeholder="New Email"
                    />
                    <div class="col-1"></div>
                  </div>
                </div>

                <div class="row align-items-start">
                  <div class="col-5">
                    <label htmlFor="">Retype Email</label>
                  </div>
                  <div class="col-6">
                    <input
                      className="bgcBblueInput"
                      type="text"
                      placeholder="Retype Email"
                    />
                    <div class="col-1"></div>
                  </div>
                </div>

                <div className="PopUpButtons">
                  <button onClick={() => setchangeEmailPopUp(false)}>
                    CANCEL
                  </button>
                  <button className="SubmitBttn">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {changePasswordPopUp && (
        <div className="PasswordPopUp">
          <div className="lightOverlay">
            <div className="popUp">
              <div className="popUpHeader flex justContentSpaceBet">
                <h5 className="ChangeEmail">Change Password</h5>
                <i
                  class="fa-solid fa-xmark"
                  onClick={() => setchangePasswordPopUp(false)}
                ></i>
              </div>

              <div class="container text-center popUpForm">
                <div class="row align-items-start">
                  <div class="col-5">
                    <label htmlFor="">Currnt Password</label>
                  </div>
                  <div class="col-6">
                    <input
                      className="bgcBblueInput"
                      type="text"
                      placeholder="Current Password"
                    />
                    <div class="col-1"></div>
                    <i class="fa-solid fa-lock"></i>
                  </div>
                </div>

                <div class="row align-items-start">
                  <div class="col-5">
                    <label htmlFor="">New Password</label>
                  </div>
                  <div class="col-6">
                    <input
                      className="bgcBblueInput"
                      type="text"
                      placeholder="New Password"
                    />
                    <div class="col-1"></div>
                    <i class="fa-solid fa-lock"></i>
                  </div>
                </div>

                <div class="row align-items-start">
                  <div class="col-5">
                    <label htmlFor="">Retype New Password</label>
                  </div>
                  <div class="col-6">
                    <input
                      className="bgcBblueInput"
                      type="text"
                      placeholder="Retype Email"
                    />
                    <div class="col-1"></div>
                    <i class="fa-solid fa-lock"></i>
                  </div>
                </div>

                <div className="PopUpButtons">
                  <button onClick={() => setchangePasswordPopUp(false)}>
                    CANCEL
                  </button>
                  <button className="SubmitBttn">SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {changePhonePopUp && (
        <div className="PhonePopUp">
          <div className="lightOverlay">
            <div className="popUp">
              <div className="popUpHeader flex justContentSpaceBet">
                <h5 className="ChangeEmail">Verify Phone Number</h5>
                <i
                  class="fa-solid fa-xmark"
                  onClick={() => setchangePhonePopUp(false)}
                ></i>
              </div>

              <div class="VRphoneNum">
                <h5 className="VRnumMsg">
                  Before you change your phone number, verify your current
                  number (+201******439)
                </h5>

                <div className="Buttons flex  ">
                  <div>
                    <button
                      className="Cancelbtn"
                      onClick={() => setchangePhonePopUp(false)}
                    >
                      CANCEL
                    </button>
                  </div>

                  <div>
                    <button
                      className="SendCodebtn"
                      onClick={() => {
                        setchangePhonePopUp(false);
                        setchangeVerifyCodePopUp(true);
                      }}
                    >
                      Send Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {changeVerifyCodePopUp && (
        <div className="PhonePopUp">
          <div className="lightOverlay">
            <div className="popUp">
              <div className="popUpHeader flex justContentSpaceBet">
                <h5 className="ChangeEmail">Verify Phone Number</h5>
                <i
                  class="fa-solid fa-xmark"
                  onClick={() => setchangeVerifyCodePopUp(false)}
                ></i>
              </div>
              <h5 className="VRnumMsg">Enter Code</h5>

              <div className="VerifyCodePopUpForm">
                <form className="CodeFrom flex " action="">
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </form>
              </div>

              <div className="sendNewCode flex justContentSpaceArround">
                <h6>
                  <a href="">Send New Code</a>
                </h6>
                <h6>1:30</h6>
              </div>

              <div class="VRphoneNumCode">
                <div className="VerifyCodePopUpButtons flex">
                  <div>
                    <button
                      className="Cancelbtn"
                      onClick={() => setchangeVerifyCodePopUp(false)}
                    >
                      CANCEL
                    </button>
                  </div>

                  <div>
                    <button
                      className="SendCodebtn"
                      onClick={() => {
                        setchangeVerifyCodePopUp(false);
                        setchangeNewPhoneNumPopUp(true);
                      }}
                    >
                      VERIFY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {changeNewPhoneNumPopUp && (
        <div className="PhonePopUp">
          <div className="lightOverlay">
            <div className="popUp">
              <div className="popUpHeader flex justContentSpaceBet">
                <h5 className="ChangeEmail">Verify Phone Number</h5>
                <i
                  class="fa-solid fa-xmark"
                  onClick={() => setchangeNewPhoneNumPopUp(false)}
                ></i>
              </div>

              <div className="NewPhoneNumPopUpForm  ">
                <form className="CodeFrom flex justContentSpaceBet" action="">
                  <label htmlFor="" className="NewNum">
                    New Number
                  </label>
                  <input type="text" placeholder="New Number" />
                </form>
              </div>

              <div class="VRphoneNumCode">
                <div className="VerifyCodePopUpButtons flex">
                  <div>
                    <button
                      className="Cancelbtn"
                      onClick={() => setchangeNewPhoneNumPopUp(false)}
                    >
                      CANCEL
                    </button>
                  </div>

                  <div>
                    <button className="SendCodebtn">CHANGE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileAccountInfo;
