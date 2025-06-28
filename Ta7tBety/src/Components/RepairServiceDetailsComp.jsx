import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BookAppointmentCalendar from "./BookAppointmentCalendar";
import ApiManager from "../ApiManager/ApiManager";

function RepairServiceDetailsComp() {
  const location = useLocation();
  const { provider, post, providerAvgRating, postAvgRating } =
    location.state || { provider: null, post: null };
  const [BookingPopUp, setchangeBookingPopUp] = useState(false);

  function BookingToggleModal(e) {
    setchangeBookingPopUp(!BookingPopUp);
    e.preventDefault();
  }

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
            <img src={provider.providerID.photo} alt="" />

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
                See All Reviews
              </a>
            </h6>
          </div>
        </div>

        <div className="ProviderServices flex simpleBoxShadow Wrap justifyContentSpaceBet FitContentHeight">
          <div className="ServicePhotosSlider W100">
            <div
              id="carouselExampleIndicators"
              class="carousel slide ServicePhotoscarousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="imgaSlide flex">
                    {/* // TODO: user post's photos instead */}
                    <img
                      src="../../Graduation project assestst/Graduation project/صور-اثاث-منزلي-مودرن-2025-بتصميمات-راقية-13.png"
                      class="d-block w-100"
                      alt="..."
                    />
                    <img
                      src="../../Graduation project assestst/Graduation project/صور-اثاث-منزلي-مودرن-2025-بتصميمات-راقية-3.png"
                      class="d-block w-100"
                      alt="..."
                    />
                    <img
                      src="../../Graduation project assestst/Graduation project/صور-اثاث-منزلي-مودرن-2025-بتصميمات-راقية-19.png"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>

                <div class="carousel-item">
                  <div className="imgaSlide flex">
                    <img
                      src="../../Graduation project assestst/Graduation project/صور-اثاث-منزلي-مودرن-2025-بتصميمات-راقية-27.png"
                      class="d-block w-100"
                      alt="..."
                    />
                    <img
                      src="../../Graduation project assestst/Graduation project/صور-اثاث-منزلي-مودرن-2025-بتصميمات-راقية-3.png"
                      class="d-block w-100"
                      alt="..."
                    />
                    <img
                      src="../../Graduation project assestst/Graduation project/صور-اثاث-منزلي-مودرن-2025-بتصميمات-راقية-27.png"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="imgaSlide flex">
                    <img
                      src="../../Graduation project assestst/Graduation project/صور-اثاث-منزلي-مودرن-2025-بتصميمات-راقية-27.png"
                      class="d-block w-100"
                      alt="..."
                    />
                    <img
                      src="../../Graduation project assestst/Graduation project/صور-اثاث-منزلي-مودرن-2025-بتصميمات-راقية-3.png"
                      class="d-block w-100"
                      alt="..."
                    />
                    <img
                      src="../../Graduation project assestst/Graduation project/صور-اثاث-منزلي-مودرن-2025-بتصميمات-راقية-19.png"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ServiceDescriptionDetails ">
            <div className="ProviderServiceinfo  alignItemsBaseline flex justContentSpaceBet W80">
              <h5 className="textAlignLeft  RepairServices defaultBlue ">
                Service
              </h5>
              <h5>
                {postAvgRating} <i className="fa-solid fa-star"></i>
              </h5>
            </div>

            <div className="ServiceDetaials textAlignLeft ">
              <input
                type="checkbox"
                id="Seemoretoggle toggle"
                className=" Seemoretoggle toggle"
              />

              <p className="ServiceDetailsDescription text">{post.content}</p>

              <label
                htmlFor="Seemoretoggle toggle"
                className="Seemoretogglelabel "
              >
                Read More
              </label>
              <h5 className="price defaultBlue mrgntb-1">{post.price} EGP</h5>
            </div>
          </div>

          <button
            className=" BookAppointmentbttn marginauto"
            onClick={BookingToggleModal}
          >
            <i className="fa-regular fa-calendar-days"></i> Book an appointment{" "}
            {/* // TODO: booking */}
          </button>
        </div>

        {BookingPopUp && (
          <div className="BookingPopUp">
            <div className="lightOverlay">
              <div className="popUp BookingPopUp">
                <div className="popUpHeader flex justContentSpaceBet">
                  <h5 className="ChangeEmail">Book an appointment</h5>
                  <i
                    class="fa-solid fa-xmark"
                    onClick={() => setchangeBookingPopUp(false)}
                  ></i>
                </div>

                <div className="BookingCalendar W80">
                  {/* <h5 className=" BookPopUpH textAlignLeft mrgntb-1">
                    Select a Day
                  </h5> */}

                  {/* <div className=" CalendarDiv W80">
                    <p className="month-yearP  W80 marginauto"></p>
                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">MON</th>
                          <th scope="col">TUE</th>
                          <th scope="col">WED</th>
                          <th scope="col">THU</th>
                          <th scope="col">FRI</th>
                          <th scope="col">SAT</th>
                          <th scope="col">SUN</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                          <td>2</td>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>5</td>
                          <td>5</td>
                          <td>5</td>
                          <td>5</td>
                          <td>6</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>5</td>
                          <td>5</td>
                          <td>5</td>
                          <td>6</td>
                          <td>7</td>
                          <td>9</td>
                        </tr>

                        <tr>
                          <td>5</td>
                          <td>5</td>
                          <td>5</td>
                          <td>5</td>
                          <td>1</td>
                          <td>3</td>
                          <td>7</td>
                        </tr>

                        <tr>
                          <td>5</td>
                          <td>5</td>
                          <td>5</td>
                          <td>5</td>
                          <td>6</td>
                          <td>7</td>
                          <td>9</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="selectDateBttns ">
                    <h5 className=" BookPopUpH textAlignLeft mrgntb-1">
                      Select a Time
                    </h5>

                    <div className="Dates flex">
                      <button className="Date LightBlue">
                        8:00 AM 10:00 AM
                      </button>
                      <button className="Date LightBlue">
                        8:00 AM 10:00 AM
                      </button>
                    </div>
                  </div>


 */}

                  <BookAppointmentCalendar></BookAppointmentCalendar>

                  <button className=" BookthisAppbttn ">
                    <i className="fa-regular fa-calendar-days"></i> Book This
                    appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
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

export default RepairServiceDetailsComp;
