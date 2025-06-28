import { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import useUser from "../Hooks/useUser";
import ApiManager from "../ApiManager/ApiManager";
// import { Link } from "react-router-dom";

function ProfileAccountInfo() {
  const [changeEmailPopUp, setchangeEmailPopUp] = useState(false);
  const [changePasswordPopUp, setchangePasswordPopUp] = useState(false);
  const [changePhonePopUp, setchangePhonePopUp] = useState(false);
  const [changeVerifyCodePopUp, setchangeVerifyCodePopUp] = useState(false);
  const [changeNewPhoneNumPopUp, setchangeNewPhoneNumPopUp] = useState(false);
  const [changePasswordForm, setChangePasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const { user, updateUser } = useUser();



   const [phoneNumber, setPhoneNumber] = useState(
    user.phoneNumber || "+201234567890"
  );

  function handleEditPhonNumber() {
    ApiManager.updateMe({
      phoneNumber,
    })
      .then((res) => {
        const updatedUser = res.data.data.user;
        updateUser(updatedUser);
        console.log("Phone number updated successfully:", updatedUser);
      })
      .catch((err) => {
        console.error("Error updating phone number:", err);
      });
  }

  function handleDeletePhoneNumber() {
    ApiManager.updateMe({ phoneNumber: "" })
      .then((res) => {
        setPhoneNumber("");
        const updatedUser = res.data.data.user;
        updateUser(updatedUser);
        console.log("Phone number deleted successfully:", updatedUser);
      })
      .catch((err) => {
        console.error("Error deleting phone number:", err);
      });
  }

  console.log("User in ProfileAccountInfo:", user); // Log the user object to check if it's defined
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

  function handleChangePhoto(e) {
    e.preventDefault();
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result;

          const photo = base64String;

          ApiManager.updateMe({ photo })
            .then((res) => {
              const response = res.data;
              console.log("Update photo response:", response); // Log the response data
              updateUser(response.data.user); // Update the user in context
            })
            .catch((err) => {
              console.error("Error saving user data:", err); // Log any errors
            });
        };
        reader.readAsDataURL(file);
      }
    };
    fileInput.click();
  }

  function handleUpdateInfo(e) {
    e.preventDefault();

    ApiManager.getMe()
      .then((res) => {
        const response = res.data;
        console.log("User data:", response.data.user); // Log the user data
        updateUser(response.data.user); // Update the user in context
      })
      .catch((err) => {
        console.error("Error fetching user data:", err); // Log any errors
      });
  }

  function handleChangePasswordSubmit(e) {
    e.preventDefault();
    ApiManager.updatePassword(changePasswordForm)
      .then((res) => {
        const response = res.data;

        localStorage.setItem("authToken", response.data.token);
      })
      .catch((err) => {
        console.error("Error updating password:", err); // Log any errors
      });
  }

  return (
    <>
      <div className="ProfileInfo flex">
        <div className="Info flex wrap">
          <div className="ProfilePhoto-button flex justContentSpaceBet alignItemsCenter">
            <div className="Photo">
              <img
                src={
                  user.photo ||
                  "/Graduation project assestst/Graduation project/OIP.jpg"
                }
                alt=""
              />
              <a href="" onClick={handleChangePhoto}>
                change photo
              </a>
            </div>

            <div className="button">
              <button onClick={handleUpdateInfo}>update info</button>
            </div>
          </div>

          <div className="PersonalInfo">
            <div className="container text-center">
              <div className="row align-items-start mb-4">
                <div className="col-3 PersonalInfolabel">
                  <label htmlFor="">Email</label>
                </div>
                <div className="col-3 ">
                  <input
                    className="bgcBblueInput"
                    type="text"
                    placeholder={user.email}
                    disabled
                  />
                </div>
                <div className="col-3">
                  <a href="" onClick={EmailToggleModal}>
                    change email
                  </a>
                </div>
                <div className="col-3">
                  <a href="" onClick={PasswordToggleModal}>
                    change password
                  </a>
                </div>
              </div>

              <div className="row align-items-start mb-4">
                <div className="col-3 PersonalInfolabel">
                  <label htmlFor="">Name</label>
                </div>
                <div className="col-3">
                  <input type="text" placeholder={user.name} disabled />
                </div>
                <div className="col-3"></div>
                <div className="col-3"></div>
              </div>

              <div className="row align-items-start mb-4">
                <div className="col-3 PersonalInfolabel">
                  <label htmlFor="">Phone Number</label>
                </div>
                {/* <div className="col-3">
                  <input
                    className="bgcBblueInput"
                    type="text"
                    placeholder={user.phone}
                    disabled
                  />
                </div> */}
                {/* <div className="col-4 textAlignRight">
                  <a href="" onClick={PhoneToggleModal}>
                    change phone number
                  </a>
                </div> */}

                     <div className="col-3">
                  <div className="AddrsInfo">
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {/* <p>+201201111344</p> */}
                  </div>
                </div> 
                <div className="col-3">
 
            <div className="Edit-DeleteBtns W100 ">
              <button className="Editbtn" onClick={handleEditPhonNumber}>
                Edit
              </button>
              <button className="Deletebtn" onClick={handleDeletePhoneNumber}>
                Delete
              </button>
            </div>
                </div>
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
                  className="fa-solid fa-xmark"
                  onClick={() => setchangeEmailPopUp(false)}
                ></i>
              </div>

              <div className="container text-center popUpForm">
                <div className="row align-items-start">
                  <div className="col-5">
                    <label htmlFor="">Currnt Password</label>
                  </div>
                  <div className="col-6">
                    <input
                      className="bgcBblueInput"
                      type="text"
                      placeholder="Current Password"
                    />
                    <div className="col-1"></div>
                    <i className="fa-solid fa-lock"></i>
                  </div>
                </div>

                <div className="row align-items-start">
                  <div className="col-5">
                    <label htmlFor="">New Email</label>
                  </div>
                  <div className="col-6">
                    <input
                      className="bgcBblueInput"
                      type="text"
                      placeholder="New Email"
                    />
                    <div className="col-1"></div>
                  </div>
                </div>

                <div className="row align-items-start">
                  <div className="col-5">
                    <label htmlFor="">Retype Email</label>
                  </div>
                  <div className="col-6">
                    <input
                      className="bgcBblueInput"
                      type="text"
                      placeholder="Retype Email"
                    />
                    <div className="col-1"></div>
                  </div>
                </div>

                <div className="PopUpButtons">
                  <button onClick={() => setchangeEmailPopUp(false)}>
                    CANCEL
                  </button>
                  <button
                    className="SubmitBttn"
                    onClick={() => {
                      setchangeEmailPopUp(false);
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
      )}

      {changePasswordPopUp && (
        <div className="PasswordPopUp">
          <div className="lightOverlay">
            <div className="popUp">
              <div className="popUpHeader flex justContentSpaceBet">
                <h5 className="ChangeEmail">Change Password</h5>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => setchangePasswordPopUp(false)}
                ></i>
              </div>

              <div className="container text-center popUpForm">
                <div className="row align-items-start">
                  <div className="col-5">
                    <label htmlFor="">Currnt Password</label>
                  </div>
                  <div className="col-6">
                    <input
                      className="bgcBblueInput"
                      type="text"
                      placeholder="Current Password"
                      onChange={(e) =>
                        setChangePasswordForm({
                          ...changePasswordForm,
                          currentPassword: e.target.value,
                        })
                      }
                    />
                    <div className="col-1"></div>
                    <i className="fa-solid fa-lock"></i>
                  </div>
                </div>

                <div className="row align-items-start">
                  <div className="col-5">
                    <label htmlFor="">New Password</label>
                  </div>
                  <div className="col-6">
                    <input
                      className="bgcBblueInput"
                      type="text"
                      placeholder="New Password"
                      onChange={(e) =>
                        setChangePasswordForm({
                          ...changePasswordForm,
                          newPassword: e.target.value,
                        })
                      }
                    />
                    <div className="col-1"></div>
                    <i className="fa-solid fa-lock"></i>
                  </div>
                </div>

                <div className="row align-items-start">
                  <div className="col-5">
                    <label htmlFor="">Retype New Password</label>
                  </div>
                  <div className="col-6">
                    <input
                      className="bgcBblueInput"
                      type="text"
                      placeholder="Retype Email"
                      onChange={(e) =>
                        setChangePasswordForm({
                          ...changePasswordForm,
                          newPasswordConfirm: e.target.value,
                        })
                      }
                    />
                    <div className="col-1"></div>
                    <i className="fa-solid fa-lock"></i>
                  </div>
                </div>

                <div className="PopUpButtons">
                  <button onClick={() => setchangePasswordPopUp(false)}>
                    CANCEL
                  </button>
                  <button
                    className="SubmitBttn"
                    onClick={handleChangePasswordSubmit}
                  >
                    SUBMIT
                  </button>
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
                  className="fa-solid fa-xmark"
                  onClick={() => setchangePhonePopUp(false)}
                ></i>
              </div>

              <div className="VRphoneNum">
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
                        // setchangeVerifyCodePopUp(true);
                      }}
                    >
                      Verify
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
                <h5 className="ChangeEmail">Verify Email</h5>
                <i
                  className="fa-solid fa-xmark"
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

              <div className="VRphoneNumCode">
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
                        // setchangeNewPhoneNumPopUp(true);
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
                  className="fa-solid fa-xmark"
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

              <div className="VRphoneNumCode">
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
