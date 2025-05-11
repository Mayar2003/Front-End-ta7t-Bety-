<<<<<<< HEAD
import { useState } from "react";
import ApiManager from "../ApiManager/ApiManager";
=======
import { Link } from "react-router-dom";

function ServicesCategories() { 
>>>>>>> 3d22011 (updated Project)

function ServicesCategories() {
  const [providers, setProviders] = useState([]);
  const [position, setPosition] = useState({
    lng: 0,
    lat: 0,
  });
  const [distance, setDistance] = useState(1000000000);

  function handleRepairsClick(e, type, genre) {
    e.preventDefault();
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
        setProviders((prev) => [...prev, Response.data.providers]);
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
<<<<<<< HEAD
              <button
                className="viewbtn"
                onClick={(e) => handleRepairsClick(e, "all", "R")}
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
                onClick={(e) => handleRepairsClick(e, "all", "F")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
=======
              <Link to="/Providers"><button className="viewbtn"><i className="fa-solid fa-chevron-right"></i></button></Link>
            </div>

            <div className="Servicecategory">
            <img src="../../Graduation project assestst/Graduation project/imresizer-1727387275830.jpg" alt="" /> 
            <h6 className="Serv-catg-name">Food</h6>
            <Link to="/Providers"><button className="viewbtn"><i className="fa-solid fa-chevron-right"></i></button></Link>

            {/* <Link to="/FoodProvider"><button className="viewbtn"><i className="fa-solid fa-chevron-right"></i></button></Link> */}
           
>>>>>>> 3d22011 (updated Project)
            </div>

            <div className="Servicecategory">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387237741.jpg"
                alt=""
              />
              <h6 className="Serv-catg-name">Market</h6>
<<<<<<< HEAD
              <button
                className="viewbtn"
                onClick={(e) => handleRepairsClick(e, "all", "M")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
=======
            
              <Link to="/Providers"><button className="viewbtn"><i className="fa-solid fa-chevron-right"></i></button></Link>
              {/* <Link to="/MarketProvider"><button className="viewbtn"><i className="fa-solid fa-chevron-right"></i></button></Link> */}
              </div>

            <div className="Servicecategory">
            <img src="../../Graduation project assestst/Graduation project/imresizer-1727387385436.jpg" alt="" /> 
              <h6 className="Serv-catg-name">House Work</h6>
              <Link to="/Providers"><button className="viewbtn"><i className="fa-solid fa-chevron-right"></i></button></Link>

              {/* <Link to="/HouseWorkProvider"><button className="viewbtn"><i className="fa-solid fa-chevron-right"></i></button></Link> */}
>>>>>>> 3d22011 (updated Project)
            </div>

            <div className="Servicecategory">
              <img
                src="../../Graduation project assestst/Graduation project/imresizer-1727387385436.jpg"
                alt=""
              />
              <h6 className="Serv-catg-name">House Work</h6>
              <button
                className="viewbtn"
                onClick={(e) => handleRepairsClick(e, "all", "HW")}
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
<<<<<<< HEAD
              <button
                className="viewbtn"
                onClick={(e) => handleRepairsClick(e, "all", "HC")}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
=======
              <Link to="/Providers"><button className="viewbtn"><i className="fa-solid fa-chevron-right"></i></button></Link>
              {/* <Link to="/HealthCareProvider"><button className="viewbtn"><i className="fa-solid fa-chevron-right"></i></button></Link> */}
>>>>>>> 3d22011 (updated Project)
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ServicesCategories;
