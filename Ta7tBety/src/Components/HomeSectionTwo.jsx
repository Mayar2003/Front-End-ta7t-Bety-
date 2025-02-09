function HomeSectionTwo() {
  return (
    <>
      <section className="HomeSectionTwo">
        <div className="container">
          <div className="Certified-Services">
            <div className="Headings">
              <h6 className="inter">CERTIFIED SERVICES</h6>
              <h2 className="inter">Our Unique & Exceptional Services</h2>
            </div>
            <div className="view-bttn">
              <button className="view-all-services inter">
                View All Services
              </button>
            </div>
          </div>

          <div className="Categories">

            <div className="category">
              <img src="../../Graduation project assestst/Graduation project/imresizer-1727387431846.jpg" alt="" /> 
              <h6 className="catg-name">Repairs</h6>
              <button className="viewbtn"><i class="fa-solid fa-chevron-right"></i></button>
            </div>

            <div className="category">
            <img src="../../Graduation project assestst/Graduation project/imresizer-1727387275830.jpg" alt="" /> 
            <h6 className="catg-name">Food</h6>
            {/* <div className="invrtRadius"><p></p></div> */}
            <button className="viewbtn"><i class="fa-solid fa-chevron-right"></i></button>
            </div>

            <div className="category">
            <img src="../../Graduation project assestst/Graduation project/imresizer-1727387237741.jpg" alt="" />
              <h6 className="catg-name">Market</h6>
              <button className="viewbtn"><i class="fa-solid fa-chevron-right"></i></button>
              </div>

            <div className="category">
            <img src="../../Graduation project assestst/Graduation project/imresizer-1727387385436.jpg" alt="" /> 
              <h6 className="catg-name">House Work</h6>
              <button className="viewbtn"><i class="fa-solid fa-chevron-right"></i></button>
            </div>

            <div className="category">
            <img src="../../Graduation project assestst/Graduation project/imresizer-1727387091980.jpg" alt="" /> 
              <h6 className="catg-name">Health & Care</h6>
              <button className="viewbtn"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </section>





      <section className="BestProvider">
      <div className="container">
        <div>
         <h3 className="bestProvider">Best Provider For Last Month</h3>
</div>

<div className="BesProviderSlider">
  
<div className="slide">
    <img src="../../Graduation project assestst/Graduation project/super market.jpg" alt="" />
    <h5>Family Market</h5>
    <h6><i class="fa-solid fa-star"></i> 4.9 (+100)</h6>
  </div> 
  
  <div className="slide">
    <img src="../../Graduation project assestst/Graduation project/super market.jpg" alt="" />
    <h5>Family Market</h5>
    <h6><i class="fa-solid fa-star"></i> 4.9 (+100)</h6>
  </div> 
  
  <div className="slide">
    <img src="../../Graduation project assestst/Graduation project/super market.jpg" alt="" />
    <h5>Family Market</h5>
    <h6><i class="fa-solid fa-star"></i> 4.9 (+100)</h6>
  </div> 
  
  <div className="slide">
    <img src="../../Graduation project assestst/Graduation project/super market.jpg" alt="" />
    <h5>Family Market</h5>
    <h6><i class="fa-solid fa-star"></i> 4.9 (+100)</h6>
  </div> 
</div>


      </div>
      </section>

<div className="ChatbotIcon"><i class="fa-regular fa-comment"></i></div>

    </>
  );
}

export default HomeSectionTwo;
