import { useContext, useState } from "react";
// import { AuthContext } from "../Contexts/AuthContext";

import { Link } from "react-router-dom";
import ApiManager from "../ApiManager/ApiManager";
import Review from "./Review";
import ProviderDetailsAndReviews from "./ProviderDetailsAndReviews";
import useCart from "../Hooks/useCart";

function FoodProviderComp({ provider }) {
  const { cart, updateCart } = useCart();
  const [changePasswordPopUp, setchangePasswordPopUp] = useState(false);
  const [rating, setRating] = useState(0); // selected stars
  const [hover, setHover] = useState(0); // hovered stars

  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev <= 1 ? 1 : prev - 1));

  function PasswordToggleModal(e) {
    setchangePasswordPopUp(!changePasswordPopUp);
    e.preventDefault();
  }

  function handleAddToCart(e) {
    e.preventDefault();
    console.log("Adding to cart:", choosedPost);
    let updatedCart = [];
    if (cart.some((item) => item._id === choosedPost._id)) {
      updatedCart = cart.map((item) =>
        item._id === choosedPost._id
          ? { ...item, quantity: item.quantity + count }
          : item
      );
    } else {
      updatedCart = [...cart, { ...choosedPost, quantity: count }];
    }

    updateCart(updatedCart);
  }

  function handleCloseAddToCart() {
    setchangePasswordPopUp(false);
    setChoosedPost({});
    setCount(1);
  }

  return (
    <>
      <div className="ProviderPage flex ">
        <div className="ProviderReview ">
          <div className="ProviderInfoDiv simpleBoxShadow">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/logo_2638703879160288577.webp"
              alt=""
            />

            <div className="Rating flex justContentSpaceEvenly">
              <h3 className="Providername">Buona Pizza</h3>
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

        <div className="ProviderServices flex simpleBoxShadow Wrap justifyContentSpaceBet">
          <div className="RepairProviderService">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/d94b2c3e-b169-4226-930a-7794de0dde12.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <Link className="decorationNone" to="/RepairServiceDetails">
                <h4></h4>
              </Link>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">Pizza</h5>
                <p className="ServiceRating">
                  2.8 <i className="fa-solid fa-star"></i>
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quod alias facere nisi amet culpa?{" "}
              </p>
              <div className="Price">
                {" "}
                <p>200 EGP</p>
              </div>
              <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  {" "}
                  <a href="" onClick={PasswordToggleModal}>
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="RepairProviderService">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/d94b2c3e-b169-4226-930a-7794de0dde12.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <h4></h4>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">Pizza</h5>
                <p className="ServiceRating">
                  2.8 <i className="fa-solid fa-star"></i>
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quod alias facere nisi amet culpa?{" "}
              </p>
              <div className="Price">
                {" "}
                <p>200 EGP</p>
              </div>
              <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  <a href="" onClick={PasswordToggleModal}>
                    <i className="fa-solid fa-plus"></i>
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="RepairProviderService">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/d94b2c3e-b169-4226-930a-7794de0dde12.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <h4></h4>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">Pizza</h5>
                <p className="ServiceRating">
                  2.8 <i className="fa-solid fa-star"></i>
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quod alias facere nisi amet culpa?{" "}
              </p>
              <div className="Price">
                {" "}
                <p>200 EGP</p>
              </div>
              <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  <a href="" onClick={PasswordToggleModal}>
                    <i className="fa-solid fa-plus"></i>
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="RepairProviderService">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/d94b2c3e-b169-4226-930a-7794de0dde12.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <h4></h4>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">Pizza</h5>
                <p className="ServiceRating">
                  2.8 <i className="fa-solid fa-star"></i>
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quod alias facere nisi amet culpa?{" "}
              </p>
              <div className="Price">
                {" "}
                <p>200 EGP</p>
              </div>
              <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  <a href="" onClick={PasswordToggleModal}>
                    <i className="fa-solid fa-plus"></i>
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="RepairProviderService">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/d94b2c3e-b169-4226-930a-7794de0dde12.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <h4></h4>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">Pizza</h5>
                <p className="ServiceRating">
                  2.8 <i className="fa-solid fa-star"></i>
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quod alias facere nisi amet culpa?{" "}
              </p>
              <div className="Price">
                {" "}
                <p>200 EGP</p>
              </div>
              <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  <a href="" onClick={PasswordToggleModal}>
                    <i className="fa-solid fa-plus"></i>
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {changePasswordPopUp && (
        <div className="PasswordPopUp ">
          <div className="lightOverlay">
            <div className="popUp AddItemPopUp">
              <div className="popUpHeader flex justContentSpaceBet">
                <h5 className="ChangeEmail">Add item </h5>
                <i
                  className="fa-solid fa-xmark"
                  onClick={handleCloseAddToCart}
                ></i>
              </div>

              <div className="OrderDetails mrgn-1">
                <div className="TotalPrice-counterbtn flex justContentSpaceArround">
                  <h5 className="OrderName">Pizza</h5>
                  <button className="OrderCounterbtn flex">
                    <a onClick={decrement}>-</a>
                    <p className="orderNumber"> {count} </p>
                    <a onClick={increment}>+</a>
                  </button>
                  <p>Price:</p>
                  <p> {count * 200} EGP</p>
                </div>
              </div>
              <div className="OrderDescription">
                <p className="Decription LightBlue">
                  <div className="ServiceDetaials textAlignLeft ">
                    <input
                      type="checkbox"
                      id="Seemoretoggle toggle"
                      className=" Seemoretoggle toggle"
                    />

                    <p className="ServiceDetailsDescription text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Soluta velit ut in animi nulla. Vel tenetur eius dolorum
                      nostrum voluptate, possimus aliquam vero nemo
                      exercitationem in amet suscipit quos cupiditate doloribus
                      quas soluta. Iusto, magni veritatis quas itaque illum quod
                      deserunt praesentium adipisci
                    </p>

                    <label
                      htmlFor="Seemoretoggle toggle"
                      className="Seemoretogglelabel "
                    >
                      Read More
                    </label>
                  </div>
                </p>
              </div>

              {/* <div className="ExtraOrder w-75 m-auto">
                <div className="TotalPrice-counterbtn flex Wrap justContentSpaceBet">
                  <h5 className="OrderName">Extras:</h5>
                  <div className="Optional">
                    <p className="Mbot-0">Optional</p>
                  </div>
                </div>
                <p className="OptionalChoose">Choose Up To 1 Item</p>
                <div className="Choose flex justContentSpaceArround">
                  <p className="OptionalChoose">Cill Oil</p>

                  <input type="checkbox" />
                </div>
              </div> */}

              <button
                className="AddToCartBttn BookAppointmentbttn"
                onClick={handleAddToCart}
              >
                <i class="fa-solid fa-cart-plus"></i>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ServiceItem({ post, passwordToggleModal, setChoosedPost }) {
  function handleChoosePost(e) {
    e.preventDefault();
    setChoosedPost(post);
    passwordToggleModal(e);
  }

  const postAvgRating =
    post.reviews && post.reviews.length > 0
      ? (
          post.reviews.reduce((sum, review) => sum + review.rating, 0) /
          post.reviews.length
        ).toFixed(1)
      : "0.0";

  const postFirstImage = post.images[0].startsWith("http")
    ? post.images[0]
    : "https://placehold.co/1200x500?text=No+Image";
  return (
    <div className="RepairProviderService">
      <img src={postFirstImage} alt="" />

      <div className="morePhotos">
        {" "}
        <h4></h4>
      </div>

      <div className="ProviderInfo">
        <div className="Rating flex justContentSpaceBet">
          <h5 className="Providername">{post.title}</h5>
          <p className="ServiceRating">
            {postAvgRating} <i className="fa-solid fa-star"></i>
          </p>
        </div>

        <p>{post.content} </p>
        <div className="Price">
          {" "}
          <p>{post.price} EGP</p>
        </div>
        <div className="addToCart">
          <button className="addToCartbtn LightBlue ">
            {" "}
            <a href="" onClick={handleChoosePost}>
              <i className="fa-solid fa-plus"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodProviderComp;
