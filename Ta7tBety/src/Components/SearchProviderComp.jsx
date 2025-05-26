import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SearchProviderComp() {
  const { providerName } = useParams();

  return (
    <>
      <div className="searchProvider">
        <div className="RepairComponent">
          <img
            src="../../Graduation project assestst/Graduation project/نجار-من-إدلب-فوكس-حلب-6.jpg"
            alt=""
          />
          <div className="ProviderInfo">
            <Link to="/" className="decorationNone">
              <h5 className="SearchProviderComponent-catg-name textAlignLeft">
                {decodeURIComponent(providerName)}
              </h5>
            </Link>{" "}
            <p>
              <i class="fa-solid fa-street-view"></i> 2 Km
            </p>
            <div className="Rating flex justContentSpaceBet">
              <p className="WishListRating">
                4.9(+100) <i className="fa-solid fa-star"></i>
              </p>
              <div className="RepairHeartIcon">
                <label class="heart-toggle">
                  <input type="checkbox" />
                  <i class="fa-heart fa-regular"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchProviderComp;
