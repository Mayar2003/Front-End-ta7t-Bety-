import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BookAppointmentCalendar from "./BookAppointmentCalendar";
import ApiManager from "../ApiManager/ApiManager";
import useUser from "../Hooks/useUser";
import Review from "./Review";

function RepairServiceDetailsComp() {
  const location = useLocation();
  const { provider, post, providerAvgRating, postAvgRating } =
    location.state || { provider: null, post: null };
  const user = useUser();

  const [BookingPopUp, setchangeBookingPopUp] = useState(false);
  const [rating, setRating] = useState(0); // selected stars
  const [hover, setHover] = useState(0); // hovered stars
  const [reviews, setReviews] = useState(post?.reviews || []);

  function BookingToggleModal(e) {
    setchangeBookingPopUp(!BookingPopUp);
    e.preventDefault();
  }

  // function addRating(rating) {
  //   setRating(rating);

  //   ApiManager.createReview({
  //     user: user._id,
  //     provider: provider._id,
  //     post: post._id,
  //     rating,
  //     review: "Great service!",
  //   })
  //     .then((res) => {
  //       const response = res.data;
  //       console.log("Rating updated successfully:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error updating rating:", error);
  //     });
  // }

  function handlePostRating(rating) {
    setRating(rating);
    const reviewData = {
      review: "User's comment here",
      rating: rating,
    };

    ApiManager.createPostReview(post._id, reviewData)
      .then((res) => {
        console.log("Review submitted successfully:", res.data);

        // TODO: dates aren't returned from the API
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
  }

  return (
    <>
      <div className="ProviderPage flex ">
        <div className="ProviderReview ">
          <div className="ProviderInfoDiv simpleBoxShadow">
            <img src={provider?.providerID?.photo} alt="" />

            <div className="Rating flex justContentSpaceEvenly">
              <h3 className="Providername">
                {provider?.providerID.name || "Unknown Provider"}
              </h3>
              <p className="ServiceRating">
                {provider.avgRating} <i className="fa-solid fa-star"></i>
              </p>
            </div>

            <h5 className="ProviderAddress">
              <i class="fa-solid fa-map-location"></i> Street 306 - Saqr Quraish
              District
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
                    onClick={() => handlePostRating(star)}
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
                    {post?.images?.map((image, index) => {
                      if (index >= 3) return null; // Limit to first 3 images
                      image =
                        image.startsWith("http") ||
                        "https://placehold.co/300x500?text=No+Image";
                      return (
                        <img
                          key={index}
                          src={image}
                          class="d-block w-100"
                          alt="..."
                        />
                      );
                    })}
                    {/* <img
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
                    /> */}
                  </div>
                </div>

                <div class="carousel-item">
                  <div className="imgaSlide flex">
                    {post?.images?.map((image, index) => {
                      if (index >= 3 && index < 6) return null; // Limit to second 3 images
                      image =
                        image.startsWith("http") ||
                        "https://placehold.co/300x500?text=No+Image";
                      return (
                        <img
                          key={index}
                          src={image}
                          class="d-block w-100"
                          alt="..."
                        />
                      );
                    })}
                    {/* <img
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
                    /> */}
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="imgaSlide flex">
                    {post?.images?.map((image, index) => {
                      if (index >= 6 && index < 9) return null; // Limit to third 3 images
                      image =
                        image.startsWith("http") ||
                        "https://placehold.co/300x500?text=No+Image";
                      return (
                        <img
                          key={index}
                          src={image}
                          class="d-block w-100"
                          alt="..."
                        />
                      );
                    })}
                    {/* <img
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
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ServiceDescriptionDetails ">
            <div className="ProviderServiceinfo  alignItemsBaseline flex justContentSpaceBet W80">
              <h5 className="textAlignLeft  RepairServices defaultBlue ">
                {post?.title || "Unknown Service"}
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
            <i className="fa-regular fa-calendar-days"></i> Book an appointment
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
                  {/* // TODO: Implement booking functionality */}
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

// TODO: Make it a separate component

export default RepairServiceDetailsComp;
