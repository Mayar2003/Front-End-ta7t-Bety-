import { useParams } from "react-router-dom";

function SearchProviderSectionOne() {
  const { providerName } = useParams();

  return (
    <>
      <div className="sectionOne">
        <div className="bgimg">
          <img
            src="../../Graduation project assestst//Graduation project//pikaso_edit.jpeg"
            alt=""
          />
        </div>
        <div className="sectionOneHeadings">
          <h2>Search</h2>
          <h4>
            <span className="lobster-regular TBAboutUS">Ta7t Bety</span>
            <i className="fa-solid fa-chevron-right"></i>Search
            <i className="fa-solid fa-chevron-right"></i>
            {decodeURIComponent(providerName)}
          </h4>
        </div>
      </div>
    </>
  );
}

export default SearchProviderSectionOne;
