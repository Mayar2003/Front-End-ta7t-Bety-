// function WishListComponent() {
//   return (
//     <>
//       <section className="HomeSectionTwoCategories">
//         <div className="container">
//           <div className="ServicesCategories">
//             <div className="WishListComponent">
//               <img
//                 src="../../Graduation project assestst/Graduation project/hyper market.jpg"
//                 alt=""
//               />
//               <h6 className="WishList-catg-name">Family Market</h6>
//               <p className="WishListRating">
//                 4.9(+100) <i className="fa-solid fa-star"></i>
//               </p>
//               <div className="WishHeartIcon">
//                 <i className="fa-solid fa-heart"></i>
//               </div>
//             </div>

//             <div className="WishListComponent">
//               <img
//                 src="../../Graduation project assestst/Graduation project/hyper market.jpg"
//                 alt=""
//               />
//               <h6 className="WishList-catg-name">Family Market</h6>
//               <p className="WishListRating">
//                 4.9(+100) <i className="fa-solid fa-star"></i>
//               </p>
//               <div className="WishHeartIcon">
//                 <i className="fa-solid fa-heart"></i>
//               </div>
//             </div>

//             <div className="WishListComponent">
//               <img
//                 src="../../Graduation project assestst/Graduation project/hyper market.jpg"
//                 alt=""
//               />
//               <h6 className="WishList-catg-name">Family Market</h6>
//               <p className="WishListRating">
//                 4.9(+100) <i className="fa-solid fa-star"></i>
//               </p>
//               <div className="WishHeartIcon">
//                 <i className="fa-solid fa-heart"></i>
//               </div>
//             </div>

//             <div className="WishListComponent">
//               <img
//                 src="../../Graduation project assestst/Graduation project/hyper market.jpg"
//                 alt=""
//               />
//               <h6 className="WishList-catg-name">Family Market</h6>

//               <p className="WishListRating">
//                 4.9(+100) <i className="fa-solid fa-star"></i>
//               </p>
//               <div className="WishHeartIcon">
//                 <i className="fa-solid fa-heart"></i>
//               </div>
//             </div>

//             <div className="WishListComponent">
//               <img
//                 src="../../Graduation project assestst/Graduation project/hyper market.jpg"
//                 alt=""
//               />
//               <h6 className="WishList-catg-name">Family Market</h6>

//               <p className="WishListRating">
//                 4.9(+100) <i className="fa-solid fa-star"></i>
//               </p>
//               <div className="WishHeartIcon">
//                 <i className="fa-solid fa-heart"></i>
//               </div>
//             </div>

//             <div className="WishListComponent">
//               <img
//                 src="../../Graduation project assestst/Graduation project/hyper market.jpg"
//                 alt=""
//               />
//               <h6 className="WishList-catg-name">Family Market</h6>
//               <p className="WishListRating">
//                 4.9(+100) <i className="fa-solid fa-star"></i>
//               </p>
//               <div className="WishHeartIcon">
//                 <i className="fa-solid fa-heart"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default WishListComponent;


// import useUser from "../Hooks/useUser";

// function WishListComponent() {
//   const { user } = useUser();
//   return (
//     <>
//       <section className="HomeSectionTwoCategories">
//         <div className="container">
//           <div className="ServicesCategories">
//             {user &&
//             user.favoriteProviders &&
//             user.favoriteProviders.length > 0 ? (
//               user.favoriteProviders.map((provider) => (
//                 <Item key={provider.id} provider={provider} />
//               ))
//             ) : (
//               <div className="EmptyWishList">
//                 <p>Your wishlist is empty</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// function Item({ provider }) {
//   console.log("Provider in WishListComponent:", provider);
//   const reviewsCount =
//     provider.reviewsCount > 100 ? "100+" : provider.reviewsCount || 0;

//   return (
//     <div className="WishListComponent">
//       <img src={provider.providerID.photo} alt="" />
//       <h6 className="WishList-catg-name">{provider.providerID.name}</h6>
//       <p className="WishListRating">
//         {provider.avgRating}({reviewsCount}){" "}
//         <i className="fa-solid fa-star"></i>
//       </p>
//       <div className="WishHeartIcon">
//         <i className="fa-solid fa-heart"></i>
//       </div>
//     </div>
//   );
// }

// export default WishListComponent;

import { useNavigate } from "react-router-dom";
import useUser from "../Hooks/useUser";
import ApiManager from "../ApiManager/ApiManager";

function WishListComponent() {
  const { user } = useUser();
  return (
    <>
      <section className="HomeSectionTwoCategories">
        <div className="container">
          <div className="ServicesCategories">
            {user &&
            user.favoriteProviders &&
            user.favoriteProviders.length > 0 ? (
              user.favoriteProviders.map((provider) => (
                <Item key={provider._id} provider={provider} />
              ))
            ) : (
              <div className="EmptyWishList">
                <p>Your wishlist is empty</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Item({ provider }) {
  const navigate = useNavigate();
  console.log("Provider in WishListComponent:", provider);
  const reviewsCount =
    provider.reviewsCount > 100 ? "100+" : provider.reviewsCount || 0;

  function handlePrviderSelection() {
    ApiManager.getProviderById(provider.providerID._id)
      .then((res) => {
        const providerData = res.data.data;
        const genre = providerData.providerType.split("-")[0];

        switch (genre) {
          case "R":
            navigate("/RepairsProvider", {
              state: { provider: providerData, category: "Repairs" },
            });
            break;
          case "F":
            navigate("/FoodProvider", {
              state: { provider: providerData, category: "Food" },
            });
            break;
          case "M":
            navigate("/MarketProvider", {
              state: { provider: providerData, category: "Market" },
            });
            break;
          case "HW":
            navigate("/HouseWorkProvider", {
              state: { provider: providerData, category: "House Work" },
            });
            break;
        }
      })
      .catch((err) => {
        console.error("Error fetching provider details:", err);
      });
  }

  return (
    <div className="WishListComponent">
      <img src={provider.providerID.photo} alt="" />
      <h6
        className="WishList-catg-name"
        style={{ cursor: "pointer" }}
        onClick={handlePrviderSelection}
      >
        {provider.providerID.name}
      </h6>
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