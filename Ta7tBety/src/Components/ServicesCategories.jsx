import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ApiManager from "../ApiManager/ApiManager";

function ServicesCategories() {
  const [providers, setProviders] = useState([]);
  const [position, setPosition] = useState({
    lng: 0,
    lat: 0,
  });
  const [distance, setDistance] = useState(1000000000);
  const navigate = useNavigate();

  function handleRepairsClick(type, genre) {
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
                onClick={() => handleRepairsClick("all", "R")}
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
                onClick={() => handleRepairsClick("all", "F")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div className="Servicecategory">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387237741.jpg"
                alt=""
              />
              <h6 className="Serv-catg-name">Market</h6>
              <button
                className="viewbtn"
                onClick={() => handleRepairsClick("all", "M")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div className="Servicecategory">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387385436.jpg"
                alt=""
              />
              <h6 className="Serv-catg-name">House Work</h6>
              <button
                className="viewbtn"
                onClick={() => handleRepairsClick("all", "HW")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div className="Servicecategory">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387091980.jpg"
                alt=""
              />
              <h6 className="Serv-catg-name">Health & Care</h6>
              <button
                className="viewbtn"
                onClick={() => handleRepairsClick("all", "HC")}
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

export default ServicesCategories;
