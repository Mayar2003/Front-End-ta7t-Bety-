import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ApiManager from "../ApiManager/ApiManager";

// TODO: all categories do the same
function MarketProviderComp({ provider }) {
  const [rating, setRating] = useState(0); // selected stars
  const [hover, setHover] = useState(0); // hovered stars

  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

   const LeavReviewALert = () => {
        alert("Thank you for Your Review!"); // Alert on click
    }; 
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: change it to createPostReview with post._id if needed
    ApiManager.createProviderReview(provider.providerID._id, {
      rating,
      review,
    })
      .then((res) => {
        console.log("Review submitted successfully:", res.data);
      })
      .catch((err) => {
        console.error("Error submitting review:", err);
      });

    console.log("Review submitted:", review); // Replace with your API call
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="submission-message">
        <p>Thank you for your review!</p>
      </div>
    );
  }

  function PasswordToggleModal(e) {
    setchangePasswordPopUp(!changePasswordPopUp);
    e.preventDefault();
  }
  return (
    <>
      <div className="ProviderPage flex ">
        <div className="ProviderReview ">
          <div className="ProviderInfoDiv simpleBoxShadow">
            <img
              src={
                provider.providerID.photo ||
                "../../Graduation project assestst/Graduation project/imresizer-1727387237741.jpg"
              }
              alt=""
            />

            <div className="Rating flex justContentSpaceEvenly">
              <h3 className="Providername">{provider.providerID.name}</h3>
              <p className="ServiceRating">
                {provider.avgRating} <i className="fa-solid fa-star"></i>
              </p>
            </div>

            <h5 className="ProviderAddress">
              <i class="fa-solid fa-map-location"></i>{" "}
              {provider.locations[0].address}
            </h5>

            <div>
              <Link to="/ContactUs">
                <button className="ContactUsbttn">
                  <i class="fa-solid fa-comments"></i> Contact Us
                </button>
              </Link>
            </div>
          </div>

          <div className="ProviderRating simpleBoxShadow">
            <h5 className="RateProviderH textAlignLeft defaultBlue">
              Rate This Provider
            </h5>
            <div className=" StarsDiv flex justContentSpaceBet W60">
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`fa-star ${
                      star <= (hover || rating)
                        ? "fas text-yellow-400"
                        : "far text-gray-400"
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    style={{
                      cursor: "pointer",
                      fontSize: "28px",
                      marginRight: "6px",
                    }}
                  ></i>
                ))}
              </div>
            </div>

            <div className="LeaveReview  padding-1">
              <div className="simple-review-form">
                <form onSubmit={handleSubmit}>
                  <textarea
                    className="W100"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write your review here..."
                    rows={5}
                    required
                  />
                  <button onClick={LeavReviewALert} type="submit">Submit Review</button>
                </form>
              </div>
            </div>
          </div>

          <div className="ProviderRating-Review simpleBoxShadow">
            <h5 className="RateProviderH textAlignLeft defaultBlue">
              Rating & Reviews
            </h5>

            {provider.reviews.map((review) => (
              <Review review={review} key={review._id} />
            ))}

            <h6 className="moreReviews">
              <a href="" className="decorationNone moreReviews">
                See All Reviews
              </a>
            </h6>
          </div>
        </div>

        <div className="FoodCategories simpleBoxShadow borderRadius-1rem W70">
          <h4 className="ShopByCategory LightBlue textAlignLeft ">
            Shop by Category
          </h4>
          <div className="FoodCategoriesPhotos flex wrap">
            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Fruits & Vegetables" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Fruits_Vegetables.png"
                  alt=""
                />
                <h5 className="LightBlue ">Fruits & Vegetables</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Meat & Poultry" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Meat_1.png"
                  alt=""
                />
                <h5 className="LightBlue">Meat & Poultry</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Fish" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG5.png"
                  alt=""
                />
                <h5 className="LightBlue">Fish</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Bakery" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Bakery.png"
                  alt=""
                />
                <h5 className="LightBlue">Bakery</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Frozen Food" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Frozen_Food_3.png"
                  alt=""
                />
                <h5 className="LightBlue">Frozen Food</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Cold Cuts" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG2.png"
                  alt=""
                />
                <h5 className="LightBlue">Cold Cuts</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Dairy & Eggs" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Dairy_Eggs_Bread_1.png"
                  alt=""
                />
                <h5 className="LightBlue">Diary & Eggs</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Cheese" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG1.png"
                  alt=""
                />
                <h5 className="LightBlue">Cheese</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Nuts & Seeds" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG0.png"
                  alt=""
                />
                <h5 className="LightBlue">Nuts & Seeds</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Groceries" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Cooking_Essentials_3.png"
                  alt=""
                />
                <h5 className="LightBlue">Groceries</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Beverages" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Water_Soda_Drinks.png"
                  alt=""
                />
                <h5 className="LightBlue">Beverages</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Canned Food" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Canned_Food1.png"
                  alt=""
                />
                <h5 className="LightBlue">Canned Food</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Herbs & Spices" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG3.png"
                  alt=""
                />
                <h5 className="LightBlue">Herbs & Spices</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Personal Care & Cosmetics" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG4.png"
                  alt=""
                />
                <h5 className="LightBlue">Personal Care & Cosmetics</h5>
              </Link>
            </div>

            <div className="Category">
              <Link
                className="decorationNone"
                to="/MarketServiceDetails"
                state={{ provider, category: "Cleaning Supplies" }}
              >
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Cleaning_Products_Subcat.png"
                  alt=""
                />
                <h5 className="LightBlue">Cleaning Supplies</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Review({ review }) {
  return (
    <div className="Review ">
      <div className="userInfo flex">
        <img src={review.user.photo} alt="" />
        <h6 className="UserName LightBlue">{review.user.name}</h6>
      </div>
      <div className="Stars&Date flex justContentSpaceArround">
        <div className="commentStars">
          {[1, 2, 3, 4, 5].map((star) => (
            <i
              key={star}
              className={`fa-star LightBlue ${
                star <= review.rating ? "fa-solid" : "fa-regular"
              }`}
            ></i>
          ))}
        </div>
        <div className="date LightBlue">{review.createdAt}</div>
      </div>

      <p className="Comment LightBlue textAlignLeft">{review.review}</p>
    </div>
  );
}

export default MarketProviderComp;
