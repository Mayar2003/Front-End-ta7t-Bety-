import { useState } from "react";
import useUser from "../Hooks/useUser";

function ProfileSavedAdresses() {
  const user = useUser();

  return (
    <>
      <div className="ProfileSavedAdresses justContentSpaceBet JustifyContentCenter flex W100 ">
        <div className="SavedAdressesMainDiv flex justContentSpaceBet W100 ">
          <div className="AddressInfoDiv alignSelfCenter">
<<<<<<< HEAD
            <div className="container overflow-hidden text-center">
              <div className="row ">
                <div className="col-5 textAlignCenter">
                  <div className=" AddrsInfoName">
                    <p>Address Name</p>
                  </div>
=======

            <div class="container overflow-hidden text-center">
              {/* <div class="row ">
                <div class="col-5 textAlignCenter">
                  <div class=" AddrsInfoName"><p>Address Name</p></div>
>>>>>>> 3d22011 (updated Project)
                </div>
                <div className="col-7">
                  <div className="AddrsInfo">
                    <p>Home Location</p>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="container overflow-hidden text-center">
              <div className="row ">
                <div className="col-5 textAlignCenter">
                  <div className=" AddrsInfoName">
                    <p>Address</p>
                  </div>
                </div>
                <div className="col-7 ">
                  <div className="AddrsInfo">
                    <p>{user.locations[0]?.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="container overflow-hidden text-center">
              <div className="row ">
                <div className="col-5 textAlignCenter">
                  <div className=" AddrsInfoName">
                    <p>Mobile Number</p>
                  </div>
                </div>
                <div className="col-7">
                  <div className="AddrsInfo">
                    <p>+201201111344</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="SavedAdressesBtnDiv flex JustifyContentCenter Wrap">
            <div className="addAddressbtn W100">
              <button className="addAdressbtn">
                <i className="fa-solid fa-plus"></i> ADD ADDRESS
              </button>
            </div>

            <div className="Edit-DeleteBtns W100 ">
              <button className="Editbtn">Edit</button>
              <button className="Deletebtn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSavedAdresses;
