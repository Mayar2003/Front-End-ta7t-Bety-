import "./App.css";
import Header from "./Components/Header";
import RepairSectionOne from "./Components/RepairSectionOne";
import RepairServiceDetailsComp from "./Components/RepairServiceDetailsComp";
import Footer from "./Components/Footer";

function RepairServiceDetails() {
    return (
        <>
            <Header></Header>
            <RepairSectionOne />
            <RepairServiceDetailsComp />
            <Footer></Footer>
        </>
    )
}

export default RepairServiceDetails;