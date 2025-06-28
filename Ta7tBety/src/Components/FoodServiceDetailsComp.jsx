function FoodServiceDetailsComp() {
  return (
    <>
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
            <button className="ContactUs">
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
              <div className="date LightBlue">23/22025</div>
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
              <div className="date LightBlue">23/22025</div>
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
              <div className="date LightBlue">23/22025</div>
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
    </>
  );
}

export default FoodServiceDetailsComp;
