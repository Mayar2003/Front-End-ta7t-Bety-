import { useContext, useState } from "react";
// import { AuthContext } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import ApiManager from "../ApiManager/ApiManager";
import Review from "./Review";
import ProviderDetailsAndReviews from "./ProviderDetailsAndReviews";

function FoodProviderComp({ provider }) {
  const [changePasswordPopUp, setchangePasswordPopUp] = useState(false);
  const [choosedPost, setChoosedPost] = useState({});

  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev <= 0 ? 0 : prev - 1));

  function passwordToggleModal(e) {
    setchangePasswordPopUp(!changePasswordPopUp);
    e.preventDefault();
  }

  return (
    <>
      <div className="ProviderPage flex ">
        <ProviderDetailsAndReviews provider={provider} />

        <div className="ProviderServices flex simpleBoxShadow Wrap justifyContentSpaceBet">
          {provider.posts.map((post) => (
            <ServiceItem
              post={post}
              key={post._id}
              passwordToggleModal={passwordToggleModal}
              setChoosedPost={setChoosedPost}
            />
          ))}

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
                  <a href="" onClick={passwordToggleModal}>
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
                  <i className="fa-solid fa-plus"></i>
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
                  <i className="fa-solid fa-plus"></i>
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
                  <i className="fa-solid fa-plus"></i>
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
                  <i className="fa-solid fa-plus"></i>
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
                <h5 className="ChangeEmail">Add item Choices</h5>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => setchangePasswordPopUp(false)}
                ></i>
              </div>

              <div className="OrderDetails mrgn-1">
                <div className="TotalPrice-counterbtn flex justContentSpaceArround">
                  <h5 className="OrderName">{choosedPost.title}</h5>
                  <button className="OrderCounterbtn flex">
                    <a onClick={decrement}>-</a>
                    <p className="orderNumber"> {count} </p>
                    <a onClick={increment}>+</a>
                  </button>
                  <p>Price:</p>
                  <p> {count * choosedPost.price} EGP</p>
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
                      {choosedPost.content || "No description available."}
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

              <div className="ExtraOrder w-75 m-auto">
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
              </div>

              <button className="AddToCartBttn BookAppointmentbttn">
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

  // TODO: Calculate it in backend
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
