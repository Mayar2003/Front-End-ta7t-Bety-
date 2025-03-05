import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
return(
    <>
    <div className="container-fluid HeaderBorderBottom">
    <div className="Ta7tBety-Header">
    <span className="lobster-regular">Ta7t Bety</span>
    <div className="header-Elements">
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutUS">About Us</Link></li>
            <li><Link to="">Services</Link></li>
            <li><Link to="/HelpCenter">Help Center</Link></li>
            <li><Link to="/Signin">Sign In</Link></li>
            <li><Link to="/Signup">Sign Up</Link></li>

            {/* <li><Link to={}></Link></li>
            <li><Link to={}></Link></li>
            <li><Link to={}></Link></li> */}

            {/* <li><a href="">Home</a></li>
            <li><a href="" >About Us</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Help Center</a></li> */}
        </ul>
        </nav>
    </div>

    <div className="header-icons">
        <ul>
            <li><i class="fa-solid fa-magnifying-glass"></i></li>
            <li><i class="fa-regular fa-heart"></i></li>
            <li><Link to="/Profile"><i class="fa-regular fa-user"></i></Link></li>
        </ul>
    </div>
    </div>
    </div>
    </>
)
}

export default Header;