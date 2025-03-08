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
                  <Link to="">Services</Link>
                </li>
                <li>
                  <Link to="/HelpCenter">Help Center</Link>
                </li>
                {/* <li><Link to="/Signin">Sign In</Link></li> */}
                {/* <li><Link to="/Signup">Sign Up</Link></li> */}
              </ul>
            </nav>
          </div>

          <div className="header-icons">
            <ul>
              <li>
                <i class="fa-solid fa-magnifying-glass"></i>
              </li>
              <li>
                <i class="fa-regular fa-heart"></i>
              </li>
              <li>
                <Link to="/Profile">
                  <i class="fa-regular fa-user"></i>
                </Link>
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




              {/* <div className="dropdown">
                <button
                  className="btn loginHeaderbtn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Log In
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item dropdownSignin">
                      Sign In
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item dropdownSignUp">
                      <p>Not a Member? Sign Up</p>
                    </button>
                  </li>
                </ul>
              </div> */}


            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
