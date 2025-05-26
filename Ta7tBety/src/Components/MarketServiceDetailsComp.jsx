import { useContext, useState } from "react";
import { Link } from "react-router-dom";

function MarketServiceDetailsComp() {
  const [rating, setRating] = useState(0); // selected stars
  const [hover, setHover] = useState(0); // hovered stars

  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <>
      <div className="ProviderPage flex ">
        <div className="ProviderReview ">
          <div className="ProviderInfoDiv simpleBoxShadow">
            <img
              src="../../Graduation project assestst/Graduation project/imresizer-1727387237741.jpg"
              alt=""
            />

            <div className="Rating flex justContentSpaceEvenly">
              <h3 className="Providername">Family Market</h3>
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
        </div>

        <div className="ProviderServices flex simpleBoxShadow Wrap justifyContentSpaceBet">
          <h4 className="ShopByCategory LightBlue textAlignLeft W100">
            Dairy & Eggs
          </h4>

          <div className="RepairProviderService MarketProduct">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/download__1_-removebg-preview.png"
              alt=""
            />

            <div className="ProviderInfo">
              <h5>Almarai plain milk 1L Skimmed</h5>
              <div className="Price">
                {" "}
                <h5 className="defaultBlue">{count * 76.5} EGP</h5>
                <div className="justContentFlexEnd flex">
                  <button className="OrderCounterbtn flex">
                    <a onClick={decrement}>-</a>
                    <p className="orderNumber"> {count} </p>
                    <a onClick={increment}>+</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="RepairProviderService MarketProduct">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/download__1_-removebg-preview.png"
              alt=""
            />

            <div className="ProviderInfo">
              <h5>Almarai plain milk 1L Skimmed</h5>
              <div className="Price">
                {" "}
                <h5 className="defaultBlue">{count * 76.5} EGP</h5>
                <div className="justContentFlexEnd flex">
                  <button className="OrderCounterbtn flex">
                    <a onClick={decrement}>-</a>
                    <p className="orderNumber"> {count} </p>
                    <a onClick={increment}>+</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="RepairProviderService MarketProduct">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/download__1_-removebg-preview.png"
              alt=""
            />

            <div className="ProviderInfo">
              <h5>Almarai plain milk 1L Skimmed</h5>
              <div className="Price">
                {" "}
                <h5 className="defaultBlue">{count * 76.5} EGP</h5>
                <div className="justContentFlexEnd flex">
                  <button className="OrderCounterbtn flex">
                    <a onClick={decrement}>-</a>
                    <p className="orderNumber"> {count} </p>
                    <a onClick={increment}>+</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="RepairProviderService MarketProduct">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/download__1_-removebg-preview.png"
              alt=""
            />

            <div className="ProviderInfo">
              <h5>Almarai plain milk 1L Skimmed</h5>
              <div className="Price">
                {" "}
                <h5 className="defaultBlue">{count * 76.5} EGP</h5>
                <div className="justContentFlexEnd flex">
                  <button className="OrderCounterbtn flex">
                    <a onClick={decrement}>-</a>
                    <p className="orderNumber"> {count} </p>
                    <a onClick={increment}>+</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="RepairProviderService MarketProduct">
            <img
              src="../../G.Project assets2.png (2)/converted-files.png/download__1_-removebg-preview.png"
              alt=""
            />

            <div className="ProviderInfo">
              <h5>Almarai plain milk 1L Skimmed</h5>
              <div className="Price">
                {" "}
                <h5 className="defaultBlue">{count * 76.5} EGP</h5>
                <div className="justContentFlexEnd flex">
                  <button className="OrderCounterbtn flex">
                    <a onClick={decrement}>-</a>
                    <p className="orderNumber"> {count} </p>
                    <a onClick={increment}>+</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketServiceDetailsComp;
