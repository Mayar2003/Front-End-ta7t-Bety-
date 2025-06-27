import { useState } from "react";
import BookAppointmentCalendar from "./BookAppointmentCalendar";

function HouseWorkServiceDetailsComp() {
  const [BookingPopUp, setchangeBookingPopUp] = useState(false);

  function BookingToggleModal(e) {
    setchangeBookingPopUp(!BookingPopUp);
    e.preventDefault();
  }

  const [rating, setRating] = useState(0); // selected stars
  const [hover, setHover] = useState(0); // hovered stars

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
                    <img
                      src="../../Graduation project assestst/Graduation project/Air conditioner.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                    <img
                      src="../../Graduation project assestst/Graduation project/carpentry.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                    {/* <img
                      src="../../Graduation project assestst/Graduation project/electricians.jpg"
                      class="d-block w-100"
                      alt="..."
                    /> */}
                  </div>
                </div>

                <div class="carousel-item">
                  <div className="imgaSlide flex">
                    <img
                      src="../../Graduation project assestst/Graduation project/house keeper.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                    <img
                      src="../../Graduation project assestst/Graduation project/imresizer-1727387486192.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                    {/* <img
                      src="../../Graduation project assestst/Graduation project/imresizer-1727387324419.jpg"
                      class="d-block w-100"
                      alt="..."
                    /> */}
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="imgaSlide flex">
                    <img
                      src="../../Graduation project assestst/Graduation project/stander cleaning.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                    <img
                      src="../../Graduation project assestst/Graduation project/plumber.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                    {/* <img
                      src="../../Graduation project assestst/Graduation project/dry cleaning.jpg"
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
                Service
              </h5>
              <h5>
                2.8 <i className="fa-solid fa-star"></i>
              </h5>
            </div>

            <div className="ServiceDetaials textAlignLeft ">
              <input
                type="checkbox"
                id="Seemoretoggle toggle"
                className=" Seemoretoggle toggle"
              />

              <p className="ServiceDetailsDescription text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                velit ut in animi nulla. Vel tenetur eius dolorum nostrum
                voluptate, possimus aliquam vero nemo exercitationem in amet
                suscipit quos cupiditate doloribus quas soluta. Iusto, magni
                veritatis quas itaque illum quod deserunt praesentium adipisci
                nihil consectetur perspiciatis eius aliquid odio repellendus
                expedita eveniet eaque incidunt. Beatae labore iure, eligendi
                sint alias iste maiores, modi excepturi corrupti, doloremque
                animi quod aperiam velit! Amet eligendi expedita ea animi,
                consequuntur tempore asperiores dolorum illo, dolores enim ad
                laborum, dolore voluptates quas consequatur a. Dolorum commodi
                velit molestias cum beatae quia deserunt dicta, iste blanditiis.
              </p>

              <label
                htmlFor="Seemoretoggle toggle"
                className="Seemoretogglelabel "
              >
                Read More
              </label>
              <h5 className="price defaultBlue mrgntb-1">200 - 3000 EGP</h5>
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

// TODO: add appointment booking functionality

export default HouseWorkServiceDetailsComp;
