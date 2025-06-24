import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProviderDetailsAndReviews from "./ProviderDetailsAndReviews";

// TODO: Market categories are not handled in backend
function MarketProviderComp({ provider }) {
  return (
    <>
      <div className="ProviderPage flex ">
        <ProviderDetailsAndReviews provider={provider} />

        <div className="FoodCategories simpleBoxShadow borderRadius-1rem W70">
          <h4 className="ShopByCategory LightBlue textAlignLeft ">
            Shop by Category
          </h4>
          <div className="FoodCategoriesPhotos flex wrap">
            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Fruits_Vegetables.png"
                  alt=""
                />
                <h5 className="LightBlue ">Fruits & Vegetables</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Meat_1.png"
                  alt=""
                />
                <h5 className="LightBlue">Meat & Poultry</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG5.png"
                  alt=""
                />
                <h5 className="LightBlue">Fish</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Bakery.png"
                  alt=""
                />
                <h5 className="LightBlue">Bakery</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Frozen_Food_3.png"
                  alt=""
                />
                <h5 className="LightBlue">Frozen Food</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG2.png"
                  alt=""
                />
                <h5 className="LightBlue">Cold Cuts</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Dairy_Eggs_Bread_1.png"
                  alt=""
                />
                <h5 className="LightBlue">Diary & Eggs</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG1.png"
                  alt=""
                />
                <h5 className="LightBlue">Cheese</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG0.png"
                  alt=""
                />
                <h5 className="LightBlue">Nuts & Seeds</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Cooking_Essentials_3.png"
                  alt=""
                />
                <h5 className="LightBlue">Groceries</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Water_Soda_Drinks.png"
                  alt=""
                />
                <h5 className="LightBlue">Beverages</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Canned_Food1.png"
                  alt=""
                />
                <h5 className="LightBlue">Canned Food</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG3.png"
                  alt=""
                />
                <h5 className="LightBlue">Herbs & Spices</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/ConvertedPNG4.png"
                  alt=""
                />
                <h5 className="LightBlue">Personal Care & Cosmetics</h5>
              </Link>
            </div>

            <div className="Category">
              <Link className="decorationNone" to="/MarketServiceDetails">
                <img
                  src="../../G.Project assets2.png (2)/converted-files.png/Cleaning_Products_Subcat.png"
                  alt=""
                />
                <h5 className="LightBlue">Cleaning Supplies</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MarketProviderComp;
