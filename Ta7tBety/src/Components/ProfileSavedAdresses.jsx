import { useState } from "react";

function ProfileSavedAdresses() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="ProfileSavedAdresses justContentSpaceBet JustifyContentCenter flex W100 ">
        <div className="SavedAdressesMainDiv flex justContentSpaceBet W100 ">
          <div className="AddressInfoDiv alignSelfCenter">

            <div class="container overflow-hidden text-center">
              <div class="row ">
                <div class="col-5 textAlignCenter">
                  <div class=" AddrsInfoName"><p>Address Name</p></div>
                </div>
                <div class="col-7">
                  <div class="AddrsInfo"><p>Home Location</p></div>
                </div>
              </div>
            </div>

            <div class="container overflow-hidden text-center">
              <div class="row ">
                <div class="col-5 textAlignCenter">
                  <div class=" AddrsInfoName"><p>Address</p></div>
                </div>
                <div class="col-7 ">
                  <div class="AddrsInfo"><p>Street 306 - Saqr Quraish District</p></div>
                </div>
              </div>
            </div>

            <div class="container overflow-hidden text-center">
              <div class="row ">
                <div class="col-5 textAlignCenter">
                  <div class=" AddrsInfoName"><p>Mobile Number</p></div>
                </div>
                <div class="col-7">
                  <div class="AddrsInfo"><p>+201201111344</p></div>
                </div>
              </div>
            </div>
          </div>

            <div className="SavedAdressesBtnDiv flex JustifyContentCenter Wrap">

                <div className="addAddressbtn W100">
                    <button className="addAdressbtn"><i class="fa-solid fa-plus"></i> ADD ADDRESS</button>
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
