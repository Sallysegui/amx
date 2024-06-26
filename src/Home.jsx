import TopCont from "./components/mainPage/TopCont";
import MenuFunct from "./components/mainPage/MenuFunct";

import Welcome from "./components/mainPage/welcome";
import PhotoMain from "./components/mainPage/photoMain";
import Locations from "./components/Company/locations";
import AircraftTypes from "./components/Company/aircraftTypes";
import AboutUs from "./components/Company/aboutus";
import Approvals from "./components/Company/approvals";
import Spares from "./components/Company/spares";
// import AboutUsPhoto from "./components/Company/abouUsPhotos";
import Footer from "./components/Footer/footer";
import CookieConsent from "react-cookie-consent";
// import ReactGA from "react-ga4";

const App = () => {
  // ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="fullPage">
      <div className="header ">
        <div className="headerInner">
          <TopCont />
          <MenuFunct />
        </div>
      </div>
      <div className="portada">
        {/* <div className='supportMenu'></div>
       
       <div className="bitMargin"></div> */}
        <PhotoMain />
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
      <CookieConsent
        location="bottom"
        cookieName="myAwesomeCookieName3"
        expires={999}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
};

export default App;
