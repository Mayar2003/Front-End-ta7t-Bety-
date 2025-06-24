import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import ProviderDetailsAndReviews from "./ProviderDetailsAndReviews";
import ApiManager from "../ApiManager/ApiManager";
function HealthCareProviderComp({ provider }) {
  const navigate = useNavigate();

  function handlePostSelection(service, postAvgRating) {
    console.log("Selected service:", service);
    ApiManager.getPostById(service._id)
      .then((res) => {
        const response = res.data;
        console.log("Post details:", response.data);
        navigate("/HealthCareServiceDetails", {
          state: {
            provider,
            post: response.data.doc,
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
          {provider.posts.map((post) => (
            <ServiceItem
              provider={provider}
              post={post}
              key={post._id}
              handlePostSelection={handlePostSelection}
            />
          ))}

          <div className="RepairProviderService">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/33-746x1024.png"
              alt=""
            />

            <div className="morePhotos"> </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <Link className="decorationNone" to="/HealthCareServiceDetails">
                  <h5 className="Providername">
                    Dr. Mustafa Ahmed Abdel Sattar
                  </h5>
                </Link>
              </div>

              <p>Internal medicine specialist </p>

              <div className="DoctorDetails flex justContentSpaceBet">
                <div className="textAlignCenter">
                  <i className="fa-solid fa-star"></i>
                  <p>2.8</p>
                </div>
                <div className="textAlignCenter">
                  <i className="fa-solid fa-phone"></i>
                  <p>012345678910</p>
                </div>
                <div className="textAlignCenter">
                  <i class="fa-regular fa-dollar-sign"></i>
                  <p>350 EGP</p>
                </div>
              </div>
              <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  {" "}
                  <Link to="/HealthCareServiceDetails">
                    <i className="fa-solid fa-plus"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="RepairProviderService">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/33-746x1024.png"
              alt=""
            />

            <div className="morePhotos"> </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <Link className="decorationNone" to="/HealthCareServiceDetails">
                  <h5 className="Providername">
                    Dr. Mustafa Ahmed Abdel Sattar
                  </h5>
                </Link>
              </div>

              <p>Internal medicine specialist </p>

              <div className="DoctorDetails flex justContentSpaceBet">
                <div className="textAlignCenter">
                  <i className="fa-solid fa-star"></i>
                  <p>2.8</p>
                </div>
                <div className="textAlignCenter">
                  <i className="fa-solid fa-phone"></i>
                  <p>012345678910</p>
                </div>
                <div className="textAlignCenter">
                  <i class="fa-regular fa-dollar-sign"></i>
                  <p>350 EGP</p>
                </div>
              </div>
              <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  {" "}
                  <Link to="/HealthCareServiceDetails">
                    <i className="fa-solid fa-plus"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="RepairProviderService">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/33-746x1024.png"
              alt=""
            />

            <div className="morePhotos"> </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <Link className="decorationNone" to="/HealthCareServiceDetails">
                  <h5 className="Providername">
                    Dr. Mustafa Ahmed Abdel Sattar
                  </h5>
                </Link>
              </div>

              <p>Internal medicine specialist </p>

              <div className="DoctorDetails flex justContentSpaceBet">
                <div className="textAlignCenter">
                  <i className="fa-solid fa-star"></i>
                  <p>2.8</p>
                </div>
                <div className="textAlignCenter">
                  <i className="fa-solid fa-phone"></i>
                  <p>012345678910</p>
                </div>
                <div className="textAlignCenter">
                  <i class="fa-regular fa-dollar-sign"></i>
                  <p>350 EGP</p>
                </div>
              </div>
              <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  {" "}
                  <Link to="/HealthCareServiceDetails">
                    <i className="fa-solid fa-plus"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="RepairProviderService">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/33-746x1024.png"
              alt=""
            />

            <div className="morePhotos"> </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <Link className="decorationNone" to="/HealthCareServiceDetails">
                  <h5 className="Providername">
                    Dr. Mustafa Ahmed Abdel Sattar
                  </h5>
                </Link>
              </div>

              <p>Internal medicine specialist </p>

              <div className="DoctorDetails flex justContentSpaceBet">
                <div className="textAlignCenter">
                  <i className="fa-solid fa-star"></i>
                  <p>2.8</p>
                </div>
                <div className="textAlignCenter">
                  <i className="fa-solid fa-phone"></i>
                  <p>012345678910</p>
                </div>
                <div className="textAlignCenter">
                  <i class="fa-regular fa-dollar-sign"></i>
                  <p>350 EGP</p>
                </div>
              </div>
              <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  {" "}
                  <Link to="/HealthCareServiceDetails">
                    <i className="fa-solid fa-plus"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="RepairProviderService">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/33-746x1024.png"
              alt=""
            />

            <div className="morePhotos"> </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <Link className="decorationNone" to="/HealthCareServiceDetails">
                  <h5 className="Providername">
                    Dr. Mustafa Ahmed Abdel Sattar
                  </h5>
                </Link>
              </div>

              <p>Internal medicine specialist </p>

              <div className="DoctorDetails flex justContentSpaceBet">
                <div className="textAlignCenter">
                  <i className="fa-solid fa-star"></i>
                  <p>2.8</p>
                </div>
                <div className="textAlignCenter">
                  <i className="fa-solid fa-phone"></i>
                  <p>012345678910</p>
                </div>
                <div className="textAlignCenter">
                  <i class="fa-regular fa-dollar-sign"></i>
                  <p>350 EGP</p>
                </div>
              </div>
              <div className="addToCart">
                <button className="addToCartbtn LightBlue ">
                  {" "}
                  <Link to="/HealthCareServiceDetails">
                    <i className="fa-solid fa-plus"></i>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ServiceItem({ provider, post, handlePostSelection }) {
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

      <div className="morePhotos"> </div>

      <div className="ProviderInfo">
        <div className="Rating flex justContentSpaceBet">
          <h5
            className="Providername"
            style={{ cursor: "pointer" }}
            onClick={() => handlePostSelection(post, postAvgRating)}
          >
            {post.title}
          </h5>
        </div>

        <p>{post.content}</p>

        <div className="DoctorDetails flex justContentSpaceBet">
          <div className="textAlignCenter">
            <i className="fa-solid fa-star"></i>
            <p>{postAvgRating}</p>
          </div>
          <div className="textAlignCenter">
            <i className="fa-solid fa-phone"></i>
            <p>{provider.phone}</p>
          </div>
          <div className="textAlignCenter">
            <i class="fa-regular fa-dollar-sign"></i>
            <p>{post.price} EGP</p>
          </div>
        </div>
        <div className="addToCart">
          <button className="addToCartbtn LightBlue ">
            {" "}
            <Link to="/HealthCareServiceDetails">
              <i className="fa-solid fa-plus"></i>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HealthCareProviderComp;
