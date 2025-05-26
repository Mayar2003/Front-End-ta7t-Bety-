import "./App.css";
import Header from "./Components/Header";
import HealthCareSectionOne from './Components/HealthCareSectionOne';
import HealthCareServiceDetailsComp from "./Components/HelathCareServiceDetailsComp";
import Footer from "./Components/Footer";

function HealthCareServiceDetails() {
    return (
        <>
            <Header></Header>
            <HealthCareSectionOne />
            <HealthCareServiceDetailsComp />
            <Footer></Footer>
        </>
    )
}

export default HealthCareServiceDetails;