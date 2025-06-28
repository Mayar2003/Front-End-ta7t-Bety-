import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ApiManager from "../ApiManager/ApiManager";
import useUser from "../Hooks/useUser";

function HomeSectionTwo() {
  const { user } = useUser();
  const [providers, setProviders] = useState([]);
  const [position, setPosition] = useState({
    lng: 0,
    lat: 0,
  });
  const [distance, setDistance] = useState(1000000000);
  const navigate = useNavigate();

  // function handleCategorySelection(type, genre) {
  //   if (!user) {
  //     // If user is not logged in, redirect to login page
  //     navigate("/SignIn", {
  //       state: { from: "/Services" },
  //       search: `?type=${type}&genre=${genre}`,
  //     });
  //     alert("Please log in to view providers.");
  //     return;
  //   }




  function handleCategorySelection(type, genre) {
    if (!user) {
      // If user is not logged in, redirect to login page
      navigate("/SignIn", {
        state: { from: "/Services" },
        // search: ?type=${type}&genre=${genre},
      });
      alert("Please log in to view providers.");
      return;
    }
    ApiManager.getNearbyProviders(
      position.lng,
      position.lat,
      distance,
      type,
      genre
    )
      .then((res) => {
        const Response = res.data;
        console.log("Ressssss", Response);
        const filteredProviders = Response.data.providers.filter(
          (provider) => provider.isActive && provider.isOnline
        );
        setProviders(filteredProviders);
        navigate("/Providers", {
          state: { type, genre, providers: filteredProviders },
          search: `?type=${type}&genre=${genre}`,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
   
  

  return (
    <>
      <section className="HomeSectionTwo">
        <div className="container">
          <div className="Certified-Services">
            <div className="Headings">
              <h6 className="inter">CERTIFIED SERVICES</h6>
              <h2 className="inter">Our Unique & Exceptional Services</h2>
            </div>
            <div className="view-bttn">
              <Link to="/Services">
                <button className="view-all-services inter">
                  View All Services
                </button>
              </Link>
            </div>
          </div>

          <div className="Categories">
            <div className="category">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387431846.jpg"
                alt=""
              />
              <h6 className="catg-name">Repairs</h6>

              <button
                className="viewbtn"
                onClick={() => handleCategorySelection("all", "R")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div className="category">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387275830.jpg"
                alt=""
              />
              <h6 className="catg-name">Food</h6>
              <button
                className="viewbtn"
                onClick={() => handleCategorySelection("all", "F")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div className="category">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387237741.jpg"
                alt=""
              />
              <h6 className="catg-name">Market</h6>
              <button
                className="viewbtn"
                onClick={() => handleCategorySelection("all", "M")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div className="category">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387385436.jpg"
                alt=""
              />
              <h6 className="catg-name">House Work</h6>
              <button
                className="viewbtn"
                onClick={() => handleCategorySelection("all", "HW")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

           
          </div>
        </div>
      </section>

   
    </>
  );
}

export default HomeSectionTwo;
