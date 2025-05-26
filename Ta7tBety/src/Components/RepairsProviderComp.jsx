import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiManager from "../ApiManager/ApiManager";

function RepairsProviderComp({ provider }) {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0); // selected stars
  const [hover, setHover] = useState(0); // hovered stars

  const providerAvgRating =
    provider.reviews && provider.reviews.length > 0
      ? (
          provider.reviews.reduce((sum, review) => sum + review.rating, 0) /
          provider.reviews.length
        ).toFixed(1)
      : "0.0";

  function handlePostSelection(service, postAvgRating) {
    ApiManager.getPostById(service._id)
      .then((res) => {
        const response = res.data;
        console.log("Post details:", response.data);
        navigate("/RepairServiceDetails", {
          state: {
            provider,
            post: response.data.doc,
            providerAvgRating,
            postAvgRating,
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching post details:", error);
      });
  }

  return (
    <>
      <div className="ProviderPage flex ">
        <div className="ProviderReview ">
          <div className="ProviderInfoDiv simpleBoxShadow">
            <img src={provider.providerID.photo} alt="" />

            <div className="Rating flex justContentSpaceEvenly">
              <h3 className="Providername">{provider.providerID.name}</h3>
              <p className="ServiceRating">
                {providerAvgRating} <i className="fa-solid fa-star"></i>
              </p>
            </div>

            <h5 className="ProviderAddress">
              <i class="fa-solid fa-map-location"></i>{" "}
              {/* //? <provider.locations[0]> should there be a location */}
            </h5>

            <div>
              <button className="ContactUsbttn">
                <i class="fa-solid fa-comments"></i> Contact Us
              </button>
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
          <h5 className="textAlignLeft W100 RepairServices ">Services</h5>

          <div className="RepairProviderService">
            <img
              src="../../Graduation project assestst/Graduation project/Romania Modern Bed Room-20180819092202913.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <Link className="decorationNone" to="/RepairServiceDetails">
                <h4>+20</h4>
              </Link>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">
                  <Link className="decorationNone" to="/RepairServiceDetails">
                    Service
                  </Link>
                </h5>
                <p className="ServiceRating">
                  2.8 <i className="fa-solid fa-star"></i>
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quod alias facere nisi amet culpa?{" "}
              </p>
              <div className="moreimgs">
                {" "}
                <p>200-3000EGP</p>
              </div>
            </div>
          </div>

          {provider.posts.map((post) => (
            <ServiceItem
              key={post._id}
              post={post}
              handleOnClick={handlePostSelection}
            />
          ))}

          <div className="RepairProviderService">
            <img
              src="../../Graduation project assestst/Graduation project/Romania Modern Bed Room-20180819092202913.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <Link className="decorationNone" to="/RepairServiceDetails">
                <h4>+20</h4>
              </Link>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">
                  <Link className="decorationNone" to="/RepairServiceDetails">
                    Service
                  </Link>
                </h5>
                <p className="ServiceRating">
                  2.8 <i className="fa-solid fa-star"></i>
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quod alias facere nisi amet culpa?{" "}
              </p>
              <div className="moreimgs">
                {" "}
                <p>200-3000EGP</p>
              </div>
            </div>
          </div>

          <div className="RepairProviderService">
            <img
              src="../../Graduation project assestst/Graduation project/Romania Modern Bed Room-20180819092202913.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <Link className="decorationNone" to="/RepairServiceDetails">
                <h4>+20</h4>
              </Link>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">
                  <Link className="decorationNone" to="/RepairServiceDetails">
                    Service
                  </Link>
                </h5>
                <p className="ServiceRating">
                  2.8 <i className="fa-solid fa-star"></i>
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quod alias facere nisi amet culpa?{" "}
              </p>
              <div className="moreimgs">
                {" "}
                <p>200-3000EGP</p>
              </div>
            </div>
          </div>

          <div className="RepairProviderService">
            <img
              src="../../Graduation project assestst/Graduation project/Romania Modern Bed Room-20180819092202913.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <Link className="decorationNone" to="/RepairServiceDetails">
                <h4>+20</h4>
              </Link>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">
                  <Link className="decorationNone" to="/RepairServiceDetails">
                    Service
                  </Link>
                </h5>
                <p className="ServiceRating">
                  2.8 <i className="fa-solid fa-star"></i>
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quod alias facere nisi amet culpa?{" "}
              </p>
              <div className="moreimgs">
                {" "}
                <p>200-3000EGP</p>
              </div>
            </div>
          </div>

          <div className="RepairProviderService">
            <img
              src="../../Graduation project assestst/Graduation project/Romania Modern Bed Room-20180819092202913.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <Link className="decorationNone" to="/RepairServiceDetails">
                <h4>+20</h4>
              </Link>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">
                  <Link className="decorationNone" to="/RepairServiceDetails">
                    Service
                  </Link>
                </h5>
                <p className="ServiceRating">
                  2.8 <i className="fa-solid fa-star"></i>
                </p>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quod alias facere nisi amet culpa?{" "}
              </p>
              <div className="moreimgs">
                {" "}
                <p>200-3000EGP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ServiceItem({ post, handleOnClick }) {
  // Calculate average rating
  const postAvgRating =
    post.reviews && post.reviews.length > 0
      ? (
          post.reviews.reduce((sum, review) => sum + review.rating, 0) /
          post.reviews.length
        ).toFixed(1)
      : "0.0";

  return (
    <div className="RepairProviderService">
      <img
        src="../../Graduation project assestst/Graduation project/Romania Modern Bed Room-20180819092202913.jpg"
        alt=""
      />

      <div
        className="morePhotos"
        style={{ cursor: "pointer" }}
        onClick={() => handleOnClick(post, postAvgRating)}
      >
        {" "}
        <h4>
          {post.images.length > 10
            ? `+${post.images.length - (post.images.length % 10)}`
            : post.images.length}
        </h4>
      </div>

      <div className="ProviderInfo">
        <div className="Rating flex justContentSpaceBet">
          <h5
            className="Providername"
            style={{ cursor: "pointer" }}
            onClick={() => handleOnClick(post, postAvgRating)}
          >
            {" "}
            {post.title}
          </h5>
          <p className="ServiceRating">
            {postAvgRating} <i className="fa-solid fa-star"></i>
          </p>
        </div>

        <p>{post.content} </p>
        <div className="moreimgs">
          {" "}
          <p>{post.price} EGP</p>
        </div>
      </div>
    </div>
  );
}
export default RepairsProviderComp;
