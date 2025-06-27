import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// TODO: no pop for add to cart
function MarketServiceDetailsComp() {
  
  const [count, setCount] = useState(1);
  const [changePasswordPopUp, setchangePasswordPopUp] = useState(false);


  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev <= 1 ? 1 : prev - 1));

  
  function PasswordToggleModal(e) {
    setchangePasswordPopUp(!changePasswordPopUp);
    e.preventDefault();
  }

  return (
    <>
      <div className="ProviderPage flex ">
        <div className="ProviderReview ">
          <div className="ProviderInfoDiv simpleBoxShadow">
            <img
              src="../../Graduation project assestst/Graduation project/imresizer-1727387237741.jpg"
              alt=""
            />

            <div className="Rating flex justContentSpaceEvenly">
              <h3 className="Providername">Family Market</h3>
              <p className="ServiceRating">
                3.9 <i className="fa-solid fa-star"></i>
              </p>
            </div>

            <h5 className="ProviderAddress">
              <i class="fa-solid fa-map-location"></i> Street 306 - Saqr Quraish
              District
            </h5>

            <div>
              <button className="ContactUsbttn">
                <i class="fa-solid fa-comments"></i> Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="ProviderServices flex simpleBoxShadow Wrap justifyContentSpaceBet">
          <h4 className="ShopByCategory LightBlue textAlignLeft W100">
            Dairy & Eggs
          </h4>

          <div className="RepairProviderService MarketProduct">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/download__1_-removebg-preview.png"
              alt=""
            />

            <div className="ProviderInfo">
              <h5>Almarai plain milk 1L Skimmed</h5>
              <div className="Price">
                {" "}
                <h5 className="defaultBlue">{count * 76.5} EGP</h5>
                <div className="justContentSpaceBet flex ">
                   <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  {" "}
                  <a href="" onClick={PasswordToggleModal}>
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </button>
              </div>
                  <button className="OrderCounterbtn flex">
                    <a onClick={decrement}>-</a>
                    <p className="orderNumber"> {count} </p>
                    <a onClick={increment}>+</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="RepairProviderService MarketProduct">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/download__1_-removebg-preview.png"
              alt=""
            />

            <div className="ProviderInfo">
              <h5>Almarai plain milk 1L Skimmed</h5>
              <div className="Price">
                {" "}
                <h5 className="defaultBlue">{count * 76.5} EGP</h5>
                <div className="justContentSpaceBet flex">
                   <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  {" "}
                  <a href="" onClick={PasswordToggleModal}>
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </button>
              </div>
                  <button className="OrderCounterbtn flex">
                    <a onClick={decrement}>-</a>
                    <p className="orderNumber"> {count} </p>
                    <a onClick={increment}>+</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="RepairProviderService MarketProduct">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/download__1_-removebg-preview.png"
              alt=""
            />

            <div className="ProviderInfo">
              <h5>Almarai plain milk 1L Skimmed</h5>
              <div className="Price">
                {" "}
                <h5 className="defaultBlue">{count * 76.5} EGP</h5>
                <div className="justContentSpaceBet flex">
                   <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  {" "}
                  <a href="" onClick={PasswordToggleModal}>
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </button>
              </div>
                  <button className="OrderCounterbtn flex">
                    <a onClick={decrement}>-</a>
                    <p className="orderNumber"> {count} </p>
                    <a onClick={increment}>+</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="RepairProviderService MarketProduct">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/download__1_-removebg-preview.png"
              alt=""
            />

            <div className="ProviderInfo">
              <h5>Almarai plain milk 1L Skimmed</h5>
              <div className="Price">
                {" "}
                <h5 className="defaultBlue">{count * 76.5} EGP</h5>
                <div className="justContentSpaceBet flex">
                   <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  {" "}
                  <a href="" onClick={PasswordToggleModal}>
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </button>
              </div>
                  <button className="OrderCounterbtn flex">
                    <a onClick={decrement}>-</a>
                    <p className="orderNumber"> {count} </p>
                    <a onClick={increment}>+</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="RepairProviderService MarketProduct">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/download__1_-removebg-preview.png"
              alt=""
            />

            <div className="ProviderInfo">
              <h5>Almarai plain milk 1L Skimmed</h5>
              <div className="Price">
                {" "}
                <h5 className="defaultBlue">{count * 76.5} EGP</h5>
                <div className="justContentSpaceBet flex">
                   <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  {" "}
                  <a href="" onClick={PasswordToggleModal}>
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </button>
              </div>
                  <button className="OrderCounterbtn flex">
                    <a onClick={decrement}>-</a>
                    <p className="orderNumber"> {count} </p>
                    <a onClick={increment}>+</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        {changePasswordPopUp && (
        <div className="PasswordPopUp ">
          <div className="lightOverlay">
            <div className="popUp AddItemPopUp">
              <div className="popUpHeader flex justContentSpaceBet">
                <h5 className="ChangeEmail">Add item </h5>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => setchangePasswordPopUp(false)}
                ></i>
              </div>

              <div className="OrderDetails mrgn-1">
                <div className="TotalPrice-counterbtn flex justContentSpaceArround">
                  <h5 className="OrderName">Pizza</h5>
                  <button className="OrderCounterbtn flex">
                    <a onClick={decrement}>-</a>
                    <p className="orderNumber"> {count} </p>
                    <a onClick={increment}>+</a>
                  </button>
                  <p>Price:</p>
                  <p> {count * 200} EGP</p>
                </div>
              </div>
              <div className="OrderDescription">
                <p className="Decription LightBlue">
                  <div className="ServiceDetaials textAlignLeft ">
                    <input
                      type="checkbox"
                      id="Seemoretoggle toggle"
                      className=" Seemoretoggle toggle"
                    />

                    <p className="ServiceDetailsDescription text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta velit ut in animi nulla. Vel tenetur eius dolorum
                      nostrum voluptate, possimus aliquam vero nemo
                      exercitationem in amet suscipit quos cupiditate doloribus
                      quas soluta. Iusto, magni veritatis quas itaque illum quod
                      deserunt praesentium adipisci
                    </p>

                    <label
                      htmlFor="Seemoretoggle toggle"
                      className="Seemoretogglelabel "
                    >
                      Read More
                    </label>
                  </div>
                </p>
              </div>

              {/* <div className="ExtraOrder w-75 m-auto">
                <div className="TotalPrice-counterbtn flex Wrap justContentSpaceBet">
                  <h5 className="OrderName">Extras:</h5>
                  <div className="Optional">
                    <p className="Mbot-0">Optional</p>
                  </div>
                </div>
                <p className="OptionalChoose">Choose Up To 1 Item</p>
                <div className="Choose flex justContentSpaceArround">
                  <p className="OptionalChoose">Cill Oil</p>

                  <input type="checkbox" />
                </div>
              </div> */}

              <button className="AddToCartBttn BookAppointmentbttn">
                <i class="fa-solid fa-cart-plus"></i>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MarketServiceDetailsComp;
