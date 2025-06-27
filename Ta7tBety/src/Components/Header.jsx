import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import useUser from "../Hooks/useUser";
import useCart from "../Hooks/useCart";

function Header() {
  const { user, updateUser } = useUser();
  const { cart, updateCart } = useCart();
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

  const handleOrderClose = (e, id) => {
    e.preventDefault();
    const updatedCart = cart.filter((item) => item._id !== id);
    updateCart(updatedCart);
    setOrderVisible(false);
  };

  const [Cartvisible, setCartVisible] = useState(true);

  const handleCartClose = () => {
    setCartVisible(false);
  };

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev <= 1 ? 1 : prev - 1));

  const handleLogout = () => {
    updateUser(null); // Clear user context
    localStorage.removeItem("authToken"); // Clear token from local storage
    navigate("/"); // Redirect to home page
    window.location.reload();
  };

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

                        {cart && cart.length > 0 ? (
                          cart.map((item) => (
                            <CartItem
                              key={item._id}
                              item={item}
                              cart={cart}
                              updateCart={updateCart}
                              handleOrderClose={handleOrderClose}
                            />
                          ))
                        ) : (
                          <div className="EmptyCart">
                            <p className="White">Your cart is empty</p>
                          </div>
                        )}

                        <div className="CartFooter flex justContentSpaceBet alignItemsCenter">
                          <div className="TotalBill">
                            <p className="White">Total bill</p>
                            <h5 className="White">
                              {cart.reduce(
                                (total, item) =>
                                  total + item.price * item.quantity,
                                0
                              )}{" "}
                              EGP
                            </h5>
                          </div>
                          <Link to="/UserOrders">
                            <button className="PlaceOrderbtn bordernone defaultBlue no-hover cursor ">
                              {" "}
                              Place Order{" "}
                              <i class="fa-solid fa-chevron-right defaultBlue"></i>
                            </button>
                          </Link>
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

function CartItem({ item, cart, updateCart, handleOrderClose }) {
  function increment() {
    const updatedCart = cart.map((cartItem) =>
      cartItem._id === item._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    updateCart(updatedCart);
  }

  function decrement() {
    const updatedCart = cart.map((cartItem) =>
      cartItem._id === item._id
        ? {
            ...cartItem,
            quantity: Math.max(cartItem.quantity - 1, 1),
          }
        : cartItem
    );
    updateCart(updatedCart);
  }

  return (
    <div className="Order flex justContentSpaceBet alignItemsCenter">
      <img
        style={{ width: 70, height: 70, borderRadius: "10%" }}
        src={item.images[0]}
        alt={item.title}
      />
      <div className="CartPrice">
        <h5 className="OrderName White">{item.title}</h5>
        <p className="White">{item.price * item.quantity} EGP</p>
      </div>
      <div className="OrderCounterSection">
        <button className="OrderCounterbtn flex alignItemsCenter">
          <a onClick={decrement}>-</a>
          <p className="orderNumber">{item.quantity}</p>
          <a onClick={increment}>+</a>
        </button>
      </div>
      <div className="CancelOrder">
        <a onClick={(e) => handleOrderClose(e, item._id)}>
          <i className="fa-solid fa-xmark White cursor"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
