import Title from "../homePage/header/Title";
import LastOnOurStore from "./storeSubFiles/latesonOurStore/LastOnOurStore";
import StoreHeader from "./storeSubFiles/ourStoreTitle/StoreHeader";
import StoreCards from "./storeSubFiles/cards/StoreCards";
import StoreMenu from "./storeSubFiles/storeMenu/StoreMenu";
import StoreAccessories from "./storeSubFiles/storeAccessories/StoreAccessories";
import {
  accessoriesData,
  appleExperieonce,
  latesOnStoreData,
  loadAndClear,
  specialStore,
} from "../../data/ourStoreDate";
import StoreTitle from "./storeSubFiles/storUtilitis/StoreTitle";
import AppleExperience from "./storeSubFiles/appleExperience/AppleExperience";
import StoreEndingPara from "./storeSubFiles/endPoint/StoreEndingPara";
import Footer from "../homePage/footer/Footer";
import MacService from "../Services/Service";
import { Link } from "react-router-dom";
export default function OurStore() {
  return (
    <div className="">
      <Title title="Am | Our Store" />
      <StoreHeader />
      <StoreMenu />
      <LastOnOurStore accessoriesSlide={latesOnStoreData} />
      <StoreCards />
      <StoreTitle
        dark="Accessories."
        light=" Essentials that pair perfectly with your favorite devices."
      />
      <div className="linkTo">
        <Link to="/accessories">
          <span className="link">more accessories </span>
          <span className="icon">
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </Link>
      </div>
      <StoreAccessories
        accessoriesData={accessoriesData}
        intoTitle="In with the new."
        text="Discover fresh new colors for your favorite accessories."
        image="/assets/store/accessoriesIntroBanner.png"
        exploreImage="/assets/store/seeAll.png"
        exploreTitle="explore all accessories"
      />

      <StoreTitle
        dark="Loud and clear."
        light="  Unparalleled choices for rich, high-quality sound."
      />
      <div className="linkTo">
        <Link to="/airpods">
          <span className="link">more ...</span>
          <span className="icon">
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </Link>
      </div>
      <StoreAccessories
        accessoriesData={loadAndClear}
        image="/assets/store/loud.jpg"
        intoTitle="Get for 6 month apple music for free"
        text="Included with purchase of select AirPods and Beats products, and HomePod mini.**"
        exploreImage="/assets/store/beat.jpg"
        exploreTitle="see all "
      />
      <StoreTitle
        dark="The Apple experience. "
        light="Do even more with Apple products and services."
      />
      <AppleExperience experience={appleExperieonce} />
      <StoreTitle
        dark="Special stores."
        light=" Exclusive savings for businesses, school, and more."
      />
      <AppleExperience experience={specialStore} />
      <MacService />
      <StoreEndingPara />
      <Footer pageName="our store" />
    </div>
  );
}
