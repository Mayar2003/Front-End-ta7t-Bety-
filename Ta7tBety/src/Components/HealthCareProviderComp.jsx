import { useContext, useState } from "react";

import { Link } from "react-router-dom";
function HealthCareProviderComp() {
  const [rating, setRating] = useState(0); // selected stars
  const [hover, setHover] = useState(0); // hovered stars

  return (
    <>
      <div className="ProviderPage flex ">
        <div className="ProviderReview ">
          <div className="ProviderInfoDiv simpleBoxShadow">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/images (1).jpg"
              alt=""
            />

            <div className="Rating flex justContentSpaceEvenly W90 marginauto">
              <div className="ReviewProviderName textAlignLeft ">
                {" "}
                <h3 className="Providername">
                  Beit Al-Tib Specialized Clinics
                </h3>
              </div>
              <p className="ServiceRating W30">
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
export default HealthCareProviderComp;
