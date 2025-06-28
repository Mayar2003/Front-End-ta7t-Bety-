function Footer() {
  return (
    <>
      <div className="container-fluid Footer">
        <div className="container FooterContent">
          <div className="hotline">
            <h3 className="lobster-regular">Taht Bety</h3>
            <p>
              {" "}
              <i className="fa-solid fa-phone"></i> Hotline :
            </p>
            <p>+0123456789</p>
          </div>

          <div className="FollowUsOn">
            <h5>Follow Us on</h5>
            <div className="FooterIcons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-x-twitter"></i>
            </div>
          </div>
          <div className="CopyRights">
            <p>
              Copyright <i className="fa-regular fa-copyright"></i> 2024{" "}
              <span className="lobster-regular TBfooter">Taht Bety</span> , All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
