import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
  const [count, setCount] = useState(1);
  const [Ordervisible, setOrderVisible] = useState(true);

  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setShowInput(false);
    }
  };

  const handleOrderClose = () => {
    setOrderVisible(false);
  };

  const [Cartvisible, setCartVisible] = useState(true);

  const handleCartClose = () => {
    setCartVisible(false);
  };

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <>
      <div className="container-fluid HeaderBorderBottom">
        <div className="Ta7tBety-Header">
          <div className="Logo-Name">
          <img className="TahtBety-Logo" src="../../G.Project assets2.png (2)/converted-files.png/TahtBetLogo-removebg-preview (1).png" alt="" />
          <span className="lobster-regular">Taht Bety</span>
          </div>
          <div className="header-Elements W40">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/AboutUS">About Us</Link>
                </li>
                <li>
                  <Link to="/Services">Services</Link>
                </li>
                <li>
                  <Link to="/HelpCenter">Help Center</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-icons">
            <ul>
              <li>
                <div className="HeaderSearch ">
                  {showInput ? (
                    <input
                      className="HeaderSearchInput W70"
                      type="text"
                      autoFocus
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onBlur={() => setShowInput(false)}
                      onKeyDown={handleKeyPress}
                    />
                  ) : (
                    <i
                      className="fa-solid fa-magnifying-glass "
                      onClick={() => setShowInput(true)}
                    ></i>
                  )}
                </div>
              </li>
              <li>
                <Link to="/WishList" title="Favorite Providers">
                  <i className="fa-regular fa-heart"></i>
                </Link>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle className="btn-light">
                    <Link to="/Profile" title="Profile">
                      <i className="fa-regular fa-user Headerfa-user"></i>
                    </Link>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="DropDownMenue ProfileDropDowMenue">
                    <Dropdown.Item
                      className="DropdownItem no-hover"
                    >
                      <Link to="/Profile/ProfileMyOrders">
                        {" "}
                        <i className="fa-solid fa-file-lines"></i> My Orders
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="DropdownItem no-hover"
                    >
                      <Link to="/Profile/ProfileAccountInfo">
                        <i className="fa-regular fa-user"></i> Account Info
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="DropdownItem no-hover"
                    >
                      <Link to="/Profile/ProfileSavedAdresses">
                        <i className="fa-solid fa-map-location-dot"></i> Saved
                        Addresses
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="DropdownItem no-hover"
                    >
                      <Link to="/">
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                        Log Out
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle className="btn-light">Login</Dropdown.Toggle>

                  <Dropdown.Menu className="DropDownMenue">
                    <Dropdown.Item className="SignOption" href="#/action-1">
                      <Link to="/Signin">Sign In</Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="SignupOption" href="#/action-2">
                      <Link to="/Signup">
                        Not a Memeber? <span>Sign Up</span>
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              <li>
                <Dropdown>
                  <Dropdown.Toggle className="btn-light">
                    <i className="fa-solid fa-cart-shopping HeaderCart no-hover "></i>
                  </Dropdown.Toggle>

                  {Cartvisible && (
                    <Dropdown.Menu className=" CartDropDowMenue ">
                      <div className="CartHeader flex justContentSpaceBet alignItemsBaseline ">
                        <p className="YourCart White ">Your Cart</p>
                        <a onClick={handleCartClose}>
                          <i className="fa-solid fa-xmark no-hover White cursor"></i>
                        </a>
                      </div>

                      <div className="CartOrders">
                        <p className="ProviderName White">Buona Pizza</p>

                        {Ordervisible && (
                          <div className="Order flex justContentSpaceBet alignItemsCenter">
                            <img src="../../G.Project assets2.png (2)/converted-files.png/d104b2c3e-b169-4226-930a-7794de0dde12.jpg" />
                            <div className="CartPrice">
                              <h5 className="OrderName White">Pizza</h5>
                              <p className="White"> {count * 200} EGP</p>
                            </div>
                            <button className="OrderCounterbtn flex">
                              <a onClick={decrement}>-</a>
                              <p className="orderNumber"> {count} </p>
                              <a onClick={increment}>+</a>
                            </button>
                            <div className="CancelOrder">
                              <a onClick={handleOrderClose}>
                                <i className="fa-solid fa-xmark no-hover White "></i>
                              </a>
                            </div>
                          </div>
                        )}

                        <div className="CartFooter flex justContentSpaceBet mrgnt-1 mrgnb-1">
                          <div className="TotalBill  ">
                            <p className="White">Total Bill</p>
                            <h5 className="White">{count * 200} EGP</h5>
                          </div>

                          <Link to="/UserOrders">
                            <button className="PlaceOrderbtn bordernone defaultBlue no-hover cursor ">
                              {" "}
                              Place Order{" "}
                              <i class="fa-solid fa-chevron-right defaultBlue"></i>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Dropdown.Menu>
                  )}
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
