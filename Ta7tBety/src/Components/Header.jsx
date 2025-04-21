import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
  return (
    <>
      <div className="container-fluid HeaderBorderBottom">
        <div className="Ta7tBety-Header">
          <span className="lobster-regular">Ta7t Bety</span>
          <div className="header-Elements">
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
                <i class="fa-solid fa-magnifying-glass"></i>
              </li>
              <li>
              <Link to="/WishList"><i class="fa-regular fa-heart"></i></Link>
              
              </li>
      
              <li>
                <Dropdown>
                  <Dropdown.Toggle className="btn-light">
                  <Link to="/Profile"><i class="fa-regular fa-user Headerfa-user"></i></Link>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="DropDownMenue ProfileDropDowMenue">
                    <Dropdown.Item className="DropdownItem no-hover" href="#/action-1"><Link to="/Profile/ProfileMyOrders"> <i class="fa-solid fa-file-lines"></i> My Orders</Link></Dropdown.Item>
                    <Dropdown.Item className="DropdownItem no-hover" href="#/action-1"><Link to="/Profile/ProfileAccountInfo"><i class="fa-regular fa-user"></i> Account Info</Link></Dropdown.Item>
                    <Dropdown.Item className="DropdownItem no-hover" href="#/action-1"><Link to="/Profile/ProfileSavedAdresses"><i class="fa-solid fa-map-location-dot"></i> Saved Addresses</Link></Dropdown.Item>
                    <Dropdown.Item className="DropdownItem no-hover" href="#/action-1"><Link to="/"><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</Link></Dropdown.Item>

            
                
                  </Dropdown.Menu>
                </Dropdown>
              </li>

              
              <li>
                <Dropdown>
                  <Dropdown.Toggle className="btn-light">
                    Login
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="DropDownMenue">
                    <Dropdown.Item className="SignOption" href="#/action-1"><Link to="/Signin">Sign In</Link></Dropdown.Item>
                    <Dropdown.Item className="SignupOption" href="#/action-2">
                       <Link to="/Signup">Not a Memeber? <span>Sign Up</span></Link>

                    </Dropdown.Item>
                
                  </Dropdown.Menu>
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
