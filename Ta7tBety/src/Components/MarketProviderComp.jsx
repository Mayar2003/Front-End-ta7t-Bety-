import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function MarketProviderComp() {
  const [rating, setRating] = useState(0); // selected stars
  const [hover, setHover] = useState(0); // hovered stars


  
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [changePasswordPopUp, setchangePasswordPopUp] = useState(false);


  
  const handleSubmit = (e) => {
    e.preventDefault();
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
              src="../../Graduation project assestst/Graduation project/imresizer-1727387237741.jpg"
              alt=""
            />

            <div className="Rating flex justContentSpaceEvenly">
              <h3 className="Providername">Family Market</h3>
              <p className="ServiceRating">
                3.9 <i className="fa-solid fa-star"></i>
              </p>
            </div>

            <h5 className="ProviderAddress">
              <i class="fa-solid fa-map-location"></i> Street 306 - Saqr Quraish
              District
            </h5>

            <div>
                <Link to="/ContactUs">
              <button className="ContactUsbttn">
                <i class="fa-solid fa-comments">
                 </i> Contact Us
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
                  <textarea className="W100"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Write your review here..."
                    rows={5}
                    required
                  />
                  <button type="submit">Submit Review</button>
                </form>
              </div>
            </div>

            
          </div>

          <div className="ProviderRating-Review simpleBoxShadow">
            <h5 className="RateProviderH textAlignLeft defaultBlue">
              Rating & Reviews
            </h5>

            <div className="Review ">
              <div className="userInfo flex">
                <img
                  src="../../Graduation project assestst/Graduation project/user.png
                        "
                  alt=""
                />
                <h6 className="UserName LightBlue">Alaa Khaled</h6>
              </div>
              <div className="Stars&Date flex justContentSpaceArround">
                <div className="commentStars">
                  <i className="fa-solid fa-star LightBlue"></i>
                  <i className="fa-solid fa-star LightBlue"></i>
                  <i className="fa-solid fa-star LightBlue"></i>
                  <i className="fa-solid fa-star LightBlue"></i>
                  <i className="fa-solid fa-star LightBlue"></i>
                </div>
                <div className="date LightBlue">23/2/2025</div>
              </div>

              <p className="Comment LightBlue textAlignLeft">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                quis tempora, reprehenderit dolor voluptatem voluptates.
              </p>
            </div>

            <div className="Review ">
              <div className="userImfo flex">
                <img
                  src="../../Graduation project assestst/Graduation project/user.png
                        "
                  alt=""
                />
                <h6 className="UserName LightBlue">Alaa Khaled</h6>
              </div>

              <div className="Stars&Date flex justContentSpaceArround">
                <div className="commentStars">
                  <i className="fa-solid fa-star LightBlue"></i>
                  <i className="fa-solid fa-star LightBlue"></i>
                  <i className="fa-solid fa-star LightBlue"></i>
                  <i className="fa-solid fa-star LightBlue"></i>
                  <i className="fa-solid fa-star LightBlue"></i>
                </div>
                <div className="date LightBlue">23/2/2025</div>
              </div>

              <p className="Comment LightBlue textAlignLeft">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                quis tempora, reprehenderit dolor voluptatem voluptates.
              </p>
            </div>

            <div className="Review ">
              <div className="userImfo flex">
                <img
                  src="../../Graduation project assestst/Graduation project/user.png
                        "
                  alt=""
                />
                <h6 className="UserName LightBlue">Alaa Khaled</h6>
              </div>

              <div className="Stars&Date flex justContentSpaceArround">
                <div className="commentStars">
                  <i className="fa-solid fa-star LightBlue"></i>
                  <i className="fa-solid fa-star LightBlue"></i>
                  <i className="fa-solid fa-star LightBlue"></i>
                  <i className="fa-solid fa-star LightBlue"></i>
                  <i className="fa-solid fa-star LightBlue"></i>
                </div>
                <div className="date LightBlue">23/2/2025</div>
              </div>

              <p className="Comment LightBlue textAlignLeft">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                quis tempora, reprehenderit dolor voluptatem voluptates.
              </p>
            </div>

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
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Fruits_Vegetables.png"
                  alt=""
                />
                <h5 className="LightBlue ">Fruits & Vegetables</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Meat_1.png"
                  alt=""
                />
                <h5 className="LightBlue">Meat & Poultry</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG5.png"
                  alt=""
                />
                <h5 className="LightBlue">Fish</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Bakery.png"
                  alt=""
                />
                <h5 className="LightBlue">Bakery</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Frozen_Food_3.png"
                  alt=""
                />
                <h5 className="LightBlue">Frozen Food</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG2.png"
                  alt=""
                />
                <h5 className="LightBlue">Cold Cuts</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Dairy_Eggs_Bread_1.png"
                  alt=""
                />
                <h5 className="LightBlue">Diary & Eggs</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG1.png"
                  alt=""
                />
                <h5 className="LightBlue">Cheese</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG0.png"
                  alt=""
                />
                <h5 className="LightBlue">Nuts & Seeds</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Cooking_Essentials_3.png"
                  alt=""
                />
                <h5 className="LightBlue">Groceries</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Water_Soda_Drinks.png"
                  alt=""
                />
                <h5 className="LightBlue">Beverages</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Canned_Food1.png"
                  alt=""
                />
                <h5 className="LightBlue">Canned Food</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG3.png"
                  alt=""
                />
                <h5 className="LightBlue">Herbs & Spices</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG4.png"
                  alt=""
                />
                <h5 className="LightBlue">Personal Care & Cosmetics</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
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
export default MarketProviderComp;
