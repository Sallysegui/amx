import Locations from "./locations";
import AboutUs from "./aboutus";
import Approvals from "./approvals";
import Spares from "./spares";
// import AboutUsPhoto from "./abouUsPhotos";
import TopCont from "../mainPage/TopCont";
import MenuFunct from "../mainPage/MenuFunct";
import Welcome from "../mainPage/welcome";
import AircraftTypes from "./aircraftTypes";
import Footer from "../Footer/footer";
const Company = () => {
  return (
    <div className="fullPage">
      <div className="header ">
        <div className="headerInner">
          <TopCont />
          <MenuFunct />
        </div>
      </div>
      <div className="portada">
        <div className="supportMenu"></div>

        <div className="bitMargin"></div>
        <div className="gapBeforeWelcome"></div>
        <Welcome />
        <AboutUs />
        <div className="companyContainer">
          <AircraftTypes />
          <Approvals />
          <Spares />
          <Locations />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Company;
