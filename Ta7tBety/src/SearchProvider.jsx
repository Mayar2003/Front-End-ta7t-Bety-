import "./App.css";
import Header from "./Components/Header";
import SearchProviderSectionOne from "./Components/SearchProviderSectionOne";
import SearchProviderComp from "./Components/SearchProviderComp";
import Footer from "./Components/Footer";

function SearchProvider() {
  return (
    <>
      <Header></Header>
      <SearchProviderSectionOne />
      <SearchProviderComp />
      <Footer></Footer>
    </>
  );
}

export default SearchProvider;
