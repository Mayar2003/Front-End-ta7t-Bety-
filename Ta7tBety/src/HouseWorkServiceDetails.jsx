import "./App.css";
import Header from "./Components/Header";
import HouseWorkSectionOne from "./Components/HouseWorkSectionOne";
import HouseWorkServiceDetailsComp from "./Components/HouseWorkServiceDetailsComp";
import Footer from "./Components/Footer";


function HouseWorkServiceDetails() {
    return (
        <>

            <Header></Header>
            <HouseWorkSectionOne />                                                                 
            <HouseWorkServiceDetailsComp />
            <Footer></Footer>
        </>
    )
}

export default HouseWorkServiceDetails;