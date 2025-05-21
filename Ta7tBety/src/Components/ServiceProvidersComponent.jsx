import { Link } from "react-router-dom";

function ServiceProvidersComponent() {
  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <div className="RepairsProvidersSlideOne flex Wrap justContentSpaceBet">
              <div className="RepairComponent">
                <img
                  src="../../Graduation project assestst/Graduation project/نجار-من-إدلب-فوكس-حلب-6.jpg"
                  alt=""
                />
                <div className="ProviderInfo">
                  <Link to="/FoodProvider" className="decorationNone">
                    {" "}
                    <h5 className="Providername">Arapian Carpentry</h5>
                  </Link>
                  <p>
                    {" "}
                    <i class="fa-solid fa-street-view"></i> 2 Km
                  </p>
                  <div className="Rating flex justContentSpaceBet">
                    <p className="WishListRating">
                      4.9(+100) <i className="fa-solid fa-star"></i>
                    </p>
                    <div className="RepairHeartIcon">
                      <label class="heart-toggle">
                        <input type="checkbox" />
                        <i class="fa-heart fa-regular"></i>
                      </label>

                      {/* <i class="fa-regular fa-heart"></i>      */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="RepairComponent">
                <img
                  src="../../Graduation project assestst/Graduation project/نجار-من-إدلب-فوكس-حلب-6.jpg"
                  alt=""
                />
                <div className="ProviderInfo">
                  <Link to="/RepairsProvider" className="decorationNone">
                    {" "}
                    <h5 className="Providername">Arapian Carpentry</h5>
                  </Link>{" "}
                  <p>
                    {" "}
                    <i class="fa-solid fa-street-view"></i> 2 Km
                  </p>
                  <div className="Rating flex justContentSpaceBet">
                    <p className="WishListRating">
                      4.9(+100) <i className="fa-solid fa-star"></i>
                    </p>
                    <div className="RepairHeartIcon">
                      <label class="heart-toggle">
                        <input type="checkbox" />
                        <i class="fa-heart fa-regular"></i>
                      </label>

                      {/* <i class="fa-regular fa-heart"></i>      */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="RepairComponent">
                <img
                  src="../../Graduation project assestst/Graduation project/نجار-من-إدلب-فوكس-حلب-6.jpg"
                  alt=""
                />
                <div className="ProviderInfo">
                  <Link to="/MarketProvider" className="decorationNone">
                    {" "}
                    <h5 className="Providername">Arapian Carpentry</h5>
                  </Link>{" "}
                  <p>
                    {" "}
                    <i class="fa-solid fa-street-view"></i> 2 Km
                  </p>
                  <div className="Rating flex justContentSpaceBet">
                    <p className="WishListRating">
                      4.9(+100) <i className="fa-solid fa-star"></i>
                    </p>
                    <div className="RepairHeartIcon">
                      <label class="heart-toggle">
                        <input type="checkbox" />
                        <i class="fa-heart fa-regular"></i>
                      </label>

                      {/* <i class="fa-regular fa-heart"></i>      */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="RepairComponent">
                <img
                  src="../../Graduation project assestst/Graduation project/نجار-من-إدلب-فوكس-حلب-6.jpg"
                  alt=""
                />
                <div className="ProviderInfo">
                  <Link to="/HealthCareProvider" className="decorationNone">
                    {" "}
                    <h5 className="Providername">Arapian Carpentry</h5>
                  </Link>{" "}
                  <p>
                    {" "}
                    <i class="fa-solid fa-street-view"></i> 2 Km
                  </p>
                  <div className="Rating flex justContentSpaceBet">
                    <p className="WishListRating">
                      4.9(+100) <i className="fa-solid fa-star"></i>
                    </p>
                    <div className="RepairHeartIcon">
                      <label class="heart-toggle">
                        <input type="checkbox" />
                        <i class="fa-heart fa-regular"></i>
                      </label>

                      {/* <i class="fa-regular fa-heart"></i>      */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="RepairComponent">
                <img
                  src="../../Graduation project assestst/Graduation project/نجار-من-إدلب-فوكس-حلب-6.jpg"
                  alt=""
                />
                <div className="ProviderInfo">
                  <Link to="/HouseWorkProvider" className="decorationNone">
                    {" "}
                    <h5 className="Providername">Arapian Carpentry</h5>
                  </Link>{" "}
                  <p>
                    {" "}
                    <i class="fa-solid fa-street-view"></i> 2 Km
                  </p>
                  <div className="Rating flex justContentSpaceBet">
                    <p className="WishListRating">
                      4.9(+100) <i className="fa-solid fa-star"></i>
                    </p>
                    <div className="RepairHeartIcon">
                      <label class="heart-toggle">
                        <input type="checkbox" />
                        <i class="fa-heart fa-regular"></i>
                      </label>

                      {/* <i class="fa-regular fa-heart"></i>      */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="RepairComponent">
                <img
                  src="../../Graduation project assestst/Graduation project/نجار-من-إدلب-فوكس-حلب-6.jpg"
                  alt=""
                />
                <div className="ProviderInfo">
                  <Link to="/RepairsProvider" className="decorationNone">
                    {" "}
                    <h5 className="Providername">Arapian Carpentry</h5>
                  </Link>{" "}
                  <p>
                    {" "}
                    <i class="fa-solid fa-street-view"></i> 2 Km
                  </p>
                  <div className="Rating flex justContentSpaceBet">
                    <p className="WishListRating">
                      4.9(+100) <i className="fa-solid fa-star"></i>
                    </p>
                    <div className="RepairHeartIcon">
                      <label class="heart-toggle">
                        <input type="checkbox" />
                        <i class="fa-heart fa-regular"></i>
                      </label>

                      {/* <i class="fa-regular fa-heart"></i>      */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="2000">
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ServiceProvidersComponent;
