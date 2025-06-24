import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ApiManager from "../ApiManager/ApiManager";
import ProviderDetailsAndReviews from "./ProviderDetailsAndReviews";

function RepairsProviderComp({ provider }) {
  const navigate = useNavigate();

  const providerAvgRating = provider.avgRating
    ? provider.avgRating.toFixed(1)
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
        <ProviderDetailsAndReviews provider={provider} />

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

  const postFirstImage = post.images[0].startsWith("http")
    ? post.images[0]
    : "https://placehold.co/1200x500?text=No+Image";

  return (
    <div className="RepairProviderService">
      <img src={postFirstImage} alt="" />

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
