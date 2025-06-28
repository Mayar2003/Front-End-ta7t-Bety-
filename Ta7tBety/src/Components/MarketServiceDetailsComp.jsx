import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useCart from "../Hooks/useCart";

function MarketServiceDetailsComp() {
  const location = useLocation();
  const { provider, category } = location.state || {
    provider: null,
    category: null,
  };
  const { cart, updateCart } = useCart();

  const [count, setCount] = useState(1);
  const [changePasswordPopUp, setchangePasswordPopUp] = useState(false);
  const [choosedPost, setChoosedPost] = useState({});

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev <= 1 ? 1 : prev - 1));

  function passwordToggleModal(e) {
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
              src={
                provider?.providerID?.photo ||
                "../../Graduation project assestst/Graduation project/imresizer-1727387237741.jpg"
              }
              alt=""
            />

            <div className="Rating flex justContentSpaceEvenly">
              <h3 className="Providername">
                {provider?.providerID?.name || "Family Market"}
              </h3>
              <p className="ServiceRating">
                {provider?.avgRating || "3.9"}{" "}
                <i className="fa-solid fa-star"></i>
              </p>
            </div>

            <h5 className="ProviderAddress">
              <i class="fa-solid fa-map-location"></i>{" "}
              {provider?.locations?.[0]?.address ||
                "Street 306 - Saqr Quraish District"}
            </h5>

            <div>
              <Link to="/ContactUs">
                <button className="ContactUsbttn">
                  <i class="fa-solid fa-comments"></i> Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="ProviderServices flex simpleBoxShadow Wrap justifyContentSpaceBet">
          <h4 className="ShopByCategory LightBlue textAlignLeft W100">
            {category || "Dairy & Eggs"}
          </h4>

          {provider?.posts?.map((post) => (
            <ProductItem
              post={post}
              key={post._id}
              passwordToggleModal={passwordToggleModal}
              setChoosedPost={setChoosedPost}
            />
          ))}
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
                      {choosedPost.content}
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

function ProductItem({ post, passwordToggleModal, setChoosedPost }) {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev <= 1 ? 1 : prev - 1));

  function handleChoosePost(e) {
    e.preventDefault();
    setChoosedPost({ ...post, quantity: count });
    passwordToggleModal(e);
  }

  return (
    <div className="RepairProviderService MarketProduct">
      <img
        src={
          post.images?.[0] ||
          "../../G.Project assets2.png (2)/converted-files.png/download__1_-removebg-preview.png"
        }
        alt=""
      />

      <div className="ProviderInfo">
        <h5>{post.title}</h5>
        <div className="Price">
          {" "}
          <h5 className="defaultBlue">{count * post.price} EGP</h5>
          <div className="justContentSpaceBet flex ">
            <div className="addToCart">
              <button className="addToCartbtn LightBlue ">
                {" "}
                <a href="" onClick={handleChoosePost}>
                  <i className="fa-solid fa-plus"></i>
                </a>
              </button>
            </div>
            <button className="OrderCounterbtn flex">
              <a onClick={decrement}>-</a>
              <p className="orderNumber"> {count} </p>
              <a onClick={increment}>+</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketServiceDetailsComp;
