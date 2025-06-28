import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiManager from "../ApiManager/ApiManager";

function RepairsProviderComp({ provider }) {
  const [rating, setRating] = useState(0); // selected stars
  const [hover, setHover] = useState(0); // hovered stars

  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [changePasswordPopUp, setchangePasswordPopUp] = useState(false);

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
                "../../Graduation project assestst/Graduation project/نجار-من-إدلب-فوكس-حلب-6.jpg"
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
                  <button type="submit">Submit Review</button>
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
                {" "}
                {/* // TODO: make it show all reviews */}
                See All Reviews
              </a>
            </h6>
          </div>
        </div>

        <div className="ProviderServices flex simpleBoxShadow Wrap justifyContentSpaceBet">
          <h5 className="textAlignLeft W100 RepairServices ">Services</h5>

          {provider.posts.map((post) => (
            <ServiceItem post={post} provider={provider} key={post._id} />
          ))}
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

function ServiceItem({ post, provider }) {
  const navigate = useNavigate();
  console.log("Post:", post);
  const postAvgRating =
    post.reviews && post.reviews.length > 0
      ? (
          post.reviews.reduce((sum, review) => sum + review.rating, 0) /
          post.reviews.length
        ).toFixed(1)
      : "0.0";

  function handleServieceSelection() {
    ApiManager.getPostById(post._id)
      .then((res) => {
        navigate(`/RepairServiceDetails`, {
          state: { provider, post: res.data.data.doc, postAvgRating },
        });
        console.log("Post details:", res.data);
      })
      .catch((err) => {
        console.error("Error fetching post details:", err);
      });
  }

  return (
    <div className="RepairProviderService">
      <img
        src={
          post.images[0] ||
          "../../Graduation project assestst/Graduation project/Romania Modern Bed Room-20180819092202913.jpg"
        }
        alt=""
      />

      <div className="morePhotos">
        {" "}
        <Link className="decorationNone" to="/RepairServiceDetails">
          <h4>+{post.images ? post.images.length - 1 : 0}</h4>
        </Link>
      </div>

      <div className="ProviderInfo">
        <div className="Rating flex justContentSpaceBet">
          <h5
            className="Providername"
            style={{ cursor: "pointer" }}
            onClick={handleServieceSelection}
          >
            {post.title}
          </h5>
          <p className="ServiceRating">
            {postAvgRating} <i className="fa-solid fa-star"></i>
          </p>
        </div>

        <p>{post.content}</p>
        <div className="moreimgs">
          {" "}
          <p>{post.price} EGP</p>
        </div>
      </div>
    </div>
  );
}

export default RepairsProviderComp;
