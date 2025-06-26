import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ApiManager from "../ApiManager/ApiManager";
import useUser from "../Hooks/useUser";

function ServicesCategories() {
  const { user } = useUser();
  const [providers, setProviders] = useState([]);
  const [position, setPosition] = useState({
    lng: 0,
    lat: 0,
  });
  const [distance, setDistance] = useState(1000000000);
  const navigate = useNavigate();

  function hadnleCategorySelection(type, genre) {
    if (!user) {
      // If user is not logged in, redirect to login page
      navigate("/SignIn", {
        state: { from: "/Services" },
        search: `?type=${type}&genre=${genre}`,
      });
      alert("Please log in to view providers.");
      return;
    }
    // TODO: Handle loading state
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
        setProviders(Response.data.providers);
        navigate("/Providers", {
          state: { type, genre, providers: Response.data.providers },
          search: `?type=${type}&genre=${genre}`,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <section className="HomeSectionTwoCategories">
        <div className="container">
          <div className="ServicesCategories">
            <div className="Servicecategory">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387431846.jpg"
                alt=""
              />
              <h6 className="Serv-catg-name">Repairs</h6>
              <button
                className="viewbtn"
                onClick={() => hadnleCategorySelection("all", "R")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div className="Servicecategory">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387275830.jpg"
                alt=""
              />
              <h6 className="Serv-catg-name">Food</h6>
              <button
                className="viewbtn"
                onClick={() => hadnleCategorySelection("all", "F")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
              {/* <Link to="/FoodProvider"><button className="viewbtn"><i className="fa-solid fa-chevron-right"></i></button></Link> */}
            </div>

            <div className="Servicecategory">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387237741.jpg"
                alt=""
              />
              <h6 className="Serv-catg-name">Market</h6>
              <button
                className="viewbtn"
                onClick={() => hadnleCategorySelection("all", "M")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
              {/* <Link to="/MarketProvider"><button className="viewbtn"><i className="fa-solid fa-chevron-right"></i></button></Link> */}
            </div>

            <div className="Servicecategory">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387385436.jpg"
                alt=""
              />
              <h6 className="Serv-catg-name">House Work</h6>
              <button
                className="viewbtn"
                onClick={(e) => hadnleCategorySelection(e, "all", "HW")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
              {/* <Link to="/HouseWorkProvider"><button className="viewbtn"><i className="fa-solid fa-chevron-right"></i></button></Link> */}
            </div>

            <div className="Servicecategory">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387091980.jpg"
                alt=""
              />
              <h6 className="Serv-catg-name">Health & Care</h6>
              <button
                className="viewbtn"
                onClick={() => hadnleCategorySelection("all", "HC")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
              {/* <Link to="/HealthCareProvider"><button className="viewbtn"><i className="fa-solid fa-chevron-right"></i></button></Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesCategories;
