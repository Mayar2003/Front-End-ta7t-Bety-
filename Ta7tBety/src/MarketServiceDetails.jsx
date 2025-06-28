import "./App.css";
import Header from "./Components/Header";
import MarketSectionOne from "./Components/MarketSectionOne";
import MarketServiceDetailsComp from "./Components/MarketServiceDetailsComp";
import Footer from "./Components/Footer";

function MarketServiceDetails() {
    return (
        <>

            <Header></Header>
            <MarketSectionOne />
            <MarketServiceDetailsComp/>
            <Footer></Footer>
        </>
    )
}

export default MarketServiceDetails;