import { useState } from "react";
import { Link } from "react-router-dom";

function HouseWorkProviderComp() {
  const [rating, setRating] = useState(0); // selected stars
  const [hover, setHover] = useState(0); // hovered stars


   const [review, setReview] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [changePasswordPopUp, setchangePasswordPopUp] = useState(false);
  
    const LeavReviewALert = () => {
        alert("Thank you for Your Review!"); // Alert on click
    }; 

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
              src="../../Graduation project assestst/Graduation project/_ca2ed1d7-cfee-4a1e-b600-6136ffdc5f6b.jpg"
              alt=""
            />

            <div className="Rating flex justContentSpaceEvenly">
              <h3 className="Providername">Arabian Country</h3>
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
                  <button onClick={LeavReviewALert} type="submit">Submit Review</button>
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
          <h5 className="textAlignLeft W100 RepairServices ">Services</h5>

          <div className="RepairProviderService">
            <img
              src="../../Graduation project assestst/Graduation project/deep cleaning.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <Link className="decorationNone" to="/HouseWorkServiceDetails">
                <h4>+20</h4>
              </Link>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">
                  <Link
                    className="decorationNone"
                    to="/HouseWorkServiceDetails"
                  >
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
              src="../../Graduation project assestst/Graduation project/deep cleaning.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <Link className="decorationNone" to="/HouseWorkServiceDetails">
                <h4>+20</h4>
              </Link>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">
                  <Link
                    className="decorationNone"
                    to="/HouseWorkServiceDetails"
                  >
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
              src="../../Graduation project assestst/Graduation project/deep cleaning.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <Link className="decorationNone" to="/HouseWorkServiceDetails">
                <h4>+20</h4>
              </Link>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">
                  <Link
                    className="decorationNone"
                    to="/HouseWorkServiceDetails"
                  >
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
              src="../../Graduation project assestst/Graduation project/deep cleaning.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <Link className="decorationNone" to="/HouseWorkServiceDetails">
                <h4>+20</h4>
              </Link>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">
                  <Link
                    className="decorationNone"
                    to="/HouseWorkServiceDetails"
                  >
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
              src="../../Graduation project assestst/Graduation project/deep cleaning.jpg"
              alt=""
            />

            <div className="morePhotos">
              {" "}
              <Link className="decorationNone" to="/HouseWorkServiceDetails">
                <h4>+20</h4>
              </Link>
            </div>

            <div className="ProviderInfo">
              <div className="Rating flex justContentSpaceBet">
                <h5 className="Providername">
                  <Link
                    className="decorationNone"
                    to="/HouseWorkServiceDetails"
                  >
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

export default HouseWorkProviderComp;
