import starlinklogo from "../../../public/Starlinkogo.png";
import TopCont from "../mainPage/TopCont";
import MenuFunct from "../mainPage/MenuFunct";
import Footer from "../Footer/footer";
import satellateplane from "/satelliteaeroplane.jpg";
import { Link } from "react-router-dom";

// import satellateplane from "../../satelliteaeroplane.jpg";
// satelliteplane.jpg;

const StarlinkMain = () => {
  return (
    <div className="fullPage">
      <div className="header">
        <div className="headerInner">
          <TopCont />
          <MenuFunct />
        </div>
      </div>
      <div className="portada">
        <div className="supportMenu"></div>
        <div className="starlinkMain">
          <div className="starlinkIntro">
            <div className="starlinkLogo">
              <img src={starlinklogo} alt="Starlink Logo" />
            </div>
            <p>
              Do you want the fastest internet in the sky?&nbsp;
              <spam>AMX Support</spam> is now an Authorised Starlink Dealer and
              we are proud to promote our association with Starlink by SpaceX.
              Together with Starlink, our highly experienced team can upgrade
              your aircraft with minimal downtime to get you connected.
              Currently we are supporting this modification on Bombardier Global
              Express/XRS/5000/5500/6000/6500/7500 (BD-700-1A10/1A11/2A12)
              business jets with more aircraft types to come in the future.
              <Link smooth to="/contact#top">
                &nbsp;Contact us&nbsp;
              </Link>
              today to book your slot and get online fast.
              <spam>
                &nbsp;The days of slow, unreliable in-flight Wi-Fi a re coming
                to an end …
              </spam>
            </p>
          </div>
        </div>

        <div className="starlinkInfoContainer">
          <div className="aboutStarlink">
            <h2>About Starlink by SpaceX</h2>
            <p>
              Starlink delivers high-speed, low-latency internet to users all
              over the world. As the world's first and largest satellite
              constellation using a low Earth orbit, Starlink delivers broadband
              internet capable of supporting streaming, online gaming, video
              calls and more.{" "}
              <a href="https://www.starlink.com/business/aviation">
                Starlink&nbsp;
              </a>
              is engineered and operated by SpaceX. As the world’s leading
              provider of launch services, SpaceX is leveraging its deep
              experience with both spacecraft and on-orbit operations to deploy
              the world’s most advanced broadband internet system.
            </p>
          </div>
          <div className="satelliteplane">
            <img src={satellateplane} alt="Starlink Logo" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StarlinkMain;
