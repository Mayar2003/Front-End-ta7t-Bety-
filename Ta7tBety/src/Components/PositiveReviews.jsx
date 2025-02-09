function PositiveReviews() {
  return (
    <>
      <div className="HappyReviews">
        <div className="PReviewHeadings-button">
          <div className="PReviewHeadings">
            <h5 className="CSays">what clients says</h5>
            <h2 className="happyCients">Reviews From Happy Customers</h2>
          </div>
          <div className="PComment">
            <button className="PComment-LeftButton">
              <i class="fa-solid fa-chevron-left"></i>
            </button>

            <button className="PComment-RightButton">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>



        <div className="Comments flex wrap justContentSpaceArround">

          <div className="comment alignItemsCenter  flex wrap">

            <div className="commentIcons flex justContentSpaceBet alignItemsCenter">
            <i class="fa-sharp fa-solid fa-quote-right"></i>
            <div className="stars flex">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            </div>
            <h6 className="reviewComment">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptas! Possimus aspernatur ipsum blanditiis nulla id tempora minus perferendis voluptates!"
            </h6>
            <div className="custName">
            <h6>Naomi Violet</h6>
            <p>Customer</p>
            </div>
            <img className="custImage" src="/Graduation project assestst/Graduation project/OIP.jpg" alt="" />
          </div>




          <div className="comment alignItemsCenter  flex wrap">

            <div className="commentIcons flex justContentSpaceBet alignItemsCenter">
            <i class="fa-sharp fa-solid fa-quote-right"></i>
            <div className="stars flex">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            </div>
            <h6 className="reviewComment">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptas! Possimus aspernatur ipsum blanditiis nulla id tempora minus perferendis voluptates!"
            </h6>
            <div className="custName">
            <h6>Naomi Violet</h6>
            <p>Customer</p>
            </div>
            <img className="custImage" src="/Graduation project assestst/Graduation project/OIP.jpg" alt="" />
          </div>

          </div>
        </div>
    </>
  );
}

export default PositiveReviews;
