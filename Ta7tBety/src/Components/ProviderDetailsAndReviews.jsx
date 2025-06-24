import { useState } from "react";
import Review from "./Review";
import ApiManager from "../ApiManager/ApiManager";

export default function ProviderDetailsAndReviews({ provider, post }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviews, setReviews] = useState(
    post ? post.reviews : provider.reviews || []
  );

  function handleProviderRating(rating) {
    setRating(rating);
    const reviewData = {
      review: "User's comment here",
      rating: rating,
    };
    if (post) {
      ApiManager.createPostReview(post._id, reviewData)
        .then((res) => {
          console.log("Review submitted successfully:", res.data);

          ApiManager.getPostReviews(post._id)
            .then((res) => {
              console.log("Fetched post reviews:", res.data);
              const Response = res.data;
              const reviews = Response.data.reviews;
              setReviews(reviews);
              console.log("Post reviews:", reviews);
            })
            .catch((error) => {
              console.error("Error fetching post reviews:", error);
            });
        })
        .catch((error) => {
          console.error("Error submitting review:", error);
        });
    } else {
      ApiManager.createProviderReview(provider.providerID._id, reviewData)
        .then((res) => {
          console.log("Review submitted successfully:", res.data);

          ApiManager.getProviderReviews(provider.providerID._id)
            .then((res) => {
              console.log("Fetched provider reviews:", res.data);
              const Response = res.data;
              const reviews = Response.data.reviews;
              setReviews(reviews);
              console.log("Provider reviews:", reviews);
            })
            .catch((error) => {
              console.error("Error fetching provider reviews:", error);
            });
        })
        .catch((error) => {
          console.error("Error submitting review:", error);
        });
    }
  }

  return (
    <div className="ProviderReview ">
      <div className="ProviderInfoDiv simpleBoxShadow">
        <img src={provider.providerID.photo} alt="" />

        <div className="Rating flex justContentSpaceEvenly">
          <h3 className="Providername">{provider.providerID.name}</h3>
          <p className="ServiceRating">
            {provider.avgRating} <i className="fa-solid fa-star"></i>
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
                onClick={() => handleProviderRating(star)}
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

        {reviews
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
          .map((review) => (
            <Review review={review} key={review._id} />
          ))}

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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quis
            tempora, reprehenderit dolor voluptatem voluptates.
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quis
            tempora, reprehenderit dolor voluptatem voluptates.
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quis
            tempora, reprehenderit dolor voluptatem voluptates.
          </p>
        </div>

        <h6 className="moreReviews">
          <a href="" className="decorationNone moreReviews">
            See All Reviews
          </a>
        </h6>
      </div>
    </div>
  );
}
