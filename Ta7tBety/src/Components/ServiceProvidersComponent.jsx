import { Link, useNavigate } from "react-router-dom";
import ApiManager from "../ApiManager/ApiManager";
import useUser from "../Hooks/useUser";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

function ServiceProvidersComponent({ providers }) {
  const { user, updateUser } = useUser();

  const navigate = useNavigate();

  function handleProviderSelection(providerId) {
    console.log("Selected provider ID:", providerId);
    ApiManager.getProviderById(providerId)
      .then((res) => {
        const response = res.data;

        const providerGenre = response.data.providerType.split("-")[0];

        let providerPath = "";

        switch (providerGenre) {
          case "R":
            providerPath = "/RepairsProvider";
            break;
          case "M":
            providerPath = "/MarketProvider";
            break;
          case "F":
            providerPath = "/FoodProvider";
            break;
          case "HW":
            providerPath = "/HouseWorkProvider";
            break;
          case "HC":
            providerPath = "/HealthCareProvider";
            break;
        }

        console.log("Provider data:", response); // TODO: fix it in backend to be response.data.provider also fix the returned data
        navigate(providerPath, {
          state: { provider: response.data },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
              {providers.map((provider) => {
                if (user.favoriteProviders?.includes(provider.providerId)) {
                  return (
                    <Item
                      key={provider._id}
                      provider={provider}
                      onProviderSelection={handleProviderSelection}
                      isFavorite={true}
                    />
                  );
                } else {
                  return (
                    <Item
                      key={provider._id}
                      provider={provider}
                      onProviderSelection={handleProviderSelection}
                    />
                  );
                }
              })}
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

function Item({ provider, onProviderSelection, isFavorite = false }) {
  const { user, updateUser } = useUser();
  const averageRating = provider.avgRating?.toFixed(1) || "0.0";
  const reviewsCount =
    provider.reviewsCount > 100 ? "100+" : provider.reviewsCount;

  function addToFavorites(e) {
    e.stopPropagation(); // Prevent triggering the onClick event of ProviderInfo

    // Ensure favoriteProviders is always an array
    const currentFavorites = user.favoriteProviders || [];

    // Check if provider is already in favorites to avoid duplicates
    if (currentFavorites.includes(provider.providerId)) {
      console.log("Provider already in favorites");
      return;
    }

    const updatedFavorites = [...currentFavorites, provider.providerId];

    ApiManager.updateMe({
      favoriteProviders: updatedFavorites,
    })
      .then((res) => {
        const newUser = {
          ...user,
          favoriteProviders: updatedFavorites,
        };
        console.log("old user data:", user);
        console.log("New user data:", newUser);

        updateUser(newUser);

        // Use localStorage for persistent storage
        localStorage.setItem("user", JSON.stringify(newUser));

        console.log("Added to favorites:", res.data);
      })
      .catch((err) => {
        console.error("Error adding to favorites:", err);
      });
  }

  return (
    <div className="RepairComponent">
      <img src={provider.photo} alt="" />
      <div
        className="ProviderInfo"
        style={{ cursor: "pointer" }}
        onClick={() => onProviderSelection(provider.userId)} // ? how is this handled in backend
      >
        {" "}
        <h5 className="Providername">{provider.name}</h5>
        <p>
          {" "}
          <i class="fa-solid fa-street-view"></i> 2 Km
        </p>
        <div className="Rating flex justContentSpaceBet">
          <p className="WishListRating">
            {averageRating}({reviewsCount}) <i className="fa-solid fa-star"></i>
          </p>
          <div className="RepairHeartIcon" onClick={addToFavorites}>
            <label class="heart-toggle">
              <input type="checkbox" checked={isFavorite} readOnly />
              <i
                class={`fa-heart ${isFavorite ? "fa-solid" : "fa-regular"}`}
              ></i>
            </label>

            {/* <i class="fa-regular fa-heart"></i>      */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProvidersComponent;
