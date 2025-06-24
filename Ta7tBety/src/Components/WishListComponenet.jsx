import useUser from "../Hooks/useUser";

function WishListComponent() {
  const user = useUser();

  console.log("User's favorite providers:", user.favoriteProviders);
  return (
    <>
      <section className="HomeSectionTwoCategories">
        <div className="container">
          <div className="ServicesCategories">
            {user.favoriteProviders.map((provider) => (
              <Item key={provider.id} provider={provider} />
            ))}
            <div className="WishListComponent">
              <img
                src="../../Graduation project assestst/Graduation project/hyper market.jpg"
                alt=""
              />
              <h6 className="WishList-catg-name">Family Market</h6>
              <p className="WishListRating">
                4.9(+100) <i className="fa-solid fa-star"></i>
              </p>
              <div className="WishHeartIcon">
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>

            <div className="WishListComponent">
              <img
                src="../../Graduation project assestst/Graduation project/hyper market.jpg"
                alt=""
              />
              <h6 className="WishList-catg-name">Family Market</h6>
              <p className="WishListRating">
                4.9(+100) <i className="fa-solid fa-star"></i>
              </p>
              <div className="WishHeartIcon">
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>

            <div className="WishListComponent">
              <img
                src="../../Graduation project assestst/Graduation project/hyper market.jpg"
                alt=""
              />
              <h6 className="WishList-catg-name">Family Market</h6>
              <p className="WishListRating">
                4.9(+100) <i className="fa-solid fa-star"></i>
              </p>
              <div className="WishHeartIcon">
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>

            <div className="WishListComponent">
              <img
                src="../../Graduation project assestst/Graduation project/hyper market.jpg"
                alt=""
              />
              <h6 className="WishList-catg-name">Family Market</h6>

              <p className="WishListRating">
                4.9(+100) <i className="fa-solid fa-star"></i>
              </p>
              <div className="WishHeartIcon">
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>

            <div className="WishListComponent">
              <img
                src="../../Graduation project assestst/Graduation project/hyper market.jpg"
                alt=""
              />
              <h6 className="WishList-catg-name">Family Market</h6>

              <p className="WishListRating">
                4.9(+100) <i className="fa-solid fa-star"></i>
              </p>
              <div className="WishHeartIcon">
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>

            <div className="WishListComponent">
              <img
                src="../../Graduation project assestst/Graduation project/hyper market.jpg"
                alt=""
              />
              <h6 className="WishList-catg-name">Family Market</h6>
              <p className="WishListRating">
                4.9(+100) <i className="fa-solid fa-star"></i>
              </p>
              <div className="WishHeartIcon">
                <i className="fa-solid fa-heart"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Item({ provider }) {
  console.log("Provider in WishListComponent:", provider);
  const reviewsCount =
    provider.reviewsCount > 100 ? "100+" : provider.reviewsCount || 0;

  return (
    <div className="WishListComponent">
      <img src={provider.providerID.photo} alt="" />
      <h6 className="WishList-catg-name">{provider.providerID.name}</h6>
      <p className="WishListRating">
        {provider.avgRating}({reviewsCount}){" "}
        <i className="fa-solid fa-star"></i>
      </p>
      <div className="WishHeartIcon">
        <i className="fa-solid fa-heart"></i>
      </div>
    </div>
  );
}

export default WishListComponent;
