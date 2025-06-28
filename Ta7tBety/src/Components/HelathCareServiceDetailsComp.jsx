import { useState } from "react";
import { Link } from "react-router-dom";
import BookAppointmentCalendar from "./BookAppointmentCalendar";

function HealthCareServiceDetailsComp() {
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
              src="../../Graduation project assestst/Graduation project/نجار-من-إدلب-فوكس-حلب-6.jpg"
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
          <div className="ServiceDescriptionDetails W100 marginauto">
            <img
              className="ServiceDoctorPhoto"
              src="../../G.Project assets2.png (2)/converted-files.png/33-746x1024.png"
              alt=""
            />
            <div className="ProviderServiceinfo  alignItemsBaseline flex justContentSpaceBet W80">
              <h5 className="textAlignLeft  RepairServices defaultBlue ">
                Dr. Mustafa Ahmed Abdel Sattar
              </h5>
              <h5>
                2.8 <i className="fa-solid fa-star"></i>
              </h5>
            </div>

            <div className="ServiceDetaials textAlignLeft AboutDoctor ">
              <input
                type="checkbox"
                id="Seemoretoggle toggle"
                className=" Seemoretoggle toggle"
              />
              <h5 className="defaultBlue textAlignLeft">About Doctor</h5>
              <p className="ServiceDetailsDescription text">
                Internal medicine specialist at Sidnawi Hospitals, health
                insurance, ultrasound examination, treatment of digestive system
                diseases, treatment of chronic diabetes, treatment of blood
                pressure{" "}
              </p>

              <label
                htmlFor="Seemoretoggle toggle"
                className="Seemoretogglelabel "
              >
                Read More
              </label>
            </div>
            <div className="AcademicQualifications textAlignLeft W90 marginauto">
              <h5 className="defaultBlue textAlignLeft">
                Academic Qualifications
              </h5>
              <p className="ServiceDetailsDescription text">
                Bachelor of Medicine and Surgery - Ain Shams University -
                Egyptian Fellowship for Internal Medicine, Fever and Infectious
                Diseases
              </p>
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

export default HealthCareServiceDetailsComp;
