import { useState } from "react";
import useUser from "../Hooks/useUser";
import ApiManager from "../ApiManager/ApiManager";

function ProfileSavedAdresses() {
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
  return (
    <>
      <div className="ProfileSavedAdresses justContentSpaceBet JustifyContentCenter flex W100 ">
        <div className="SavedAdressesMainDiv flex justContentSpaceBet W100 ">
          <div className="AddressInfoDiv alignSelfCenter">
            <div class="container overflow-hidden text-center"></div>

            <div className="container overflow-hidden text-center">
              <div className="row ">
                {/* <div className="col-5 textAlignCenter">
                  <div className=" AddrsInfoName">
                    <p>Address</p>
                  </div>
                </div> */}
                <div className="col-12 ">
                  <div className="AddrsInfo">
                    <p>{user.locations[0]?.address}</p>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="addAddressbtn W100 mrgnt-1 ">
              <button className="addAdressbtn">CHANGE ADDRESS</button>{" "}
              {/* // TODO: change address */}
            </div>

<div/>
            </div>

            <div className="container overflow-hidden text-center">
           
            </div>
          </div>

          <div className="SavedAdressesBtnDiv flex JustifyContentCenter Wrap">
            {/* <div className="addAddressbtn W100">
              <button className="addAdressbtn">CHANGE ADDRESS</button>{" "}
              {/* // TODO: change address */}
            </div> 

            {/* <div className="Edit-DeleteBtns W100 ">
              <button className="Editbtn" onClick={handleEditPhonNumber}>
                Edit
              </button>
              <button className="Deletebtn" onClick={handleDeletePhoneNumber}>
                Delete
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSavedAdresses;
