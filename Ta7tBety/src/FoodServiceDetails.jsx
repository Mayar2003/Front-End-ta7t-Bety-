import "./App.css";
import Header from "./Components/Header";
import FoodSectionOne from "./Components/FoodSectionOne";
import FoodServiceDetailsComp from "./Components/FoodServiceDetailsComp";
import Footer from "./Components/Footer";

function FoodServiceDetails() {
    return (
        <>
            <Header></Header>
            <FoodSectionOne />
            <FoodServiceDetailsComp />
            <Footer></Footer>
        </>
    )
}

export default FoodServiceDetails;