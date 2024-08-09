import { HashLink } from "react-router-hash-link";
import logo from "../../assets/amxWhite.png";

const Footer = () => {
  return (
    <div className="footerConainer">
      <div className="footerColumn imageFooter">
        <img src={logo} className="logoFooter" alt="AMX logo" />
      </div>
      <div className="footerColumn">
        <div>
          <div className="footerList">
            <HashLink smooth to="/whyamx">
              <p>Why choose AMX Support?</p>
            </HashLink>
          </div>
          <div className="footerList">
            <HashLink smooth to="/terms">
              <p>Terms and Conditions</p>
            </HashLink>
          </div>
          <div className="footerList">
            <p>&#169; copyright 2024</p>
          </div>
          {/* <div>
            <p>	&#169; copyright 2024</p>
            </div> */}
        </div>
      </div>
      <div className="footerColumn menuFooter">
        <div>
          <div className="footerList">
            <HashLink smooth to="/company">
              <p>Company</p>
            </HashLink>
          </div>
          <div className="footerList">
            <HashLink smooth to="/services">
              <p>Services</p>
            </HashLink>
          </div>
          <div className="footerList">
            <HashLink smooth to="/careers#top">
              <p>Careers</p>
            </HashLink>
          </div>
        </div>
      </div>
      <div className="footerColumn">
        <div>
          <div className="footerList">
            <HashLink smooth to="/services/#aogresponse">
              <p className="aogFooter">AOG Response</p>
            </HashLink>
          </div>
          <div className="footerList">
            <HashLink smooth to="/impressum#top">
              <p className="impressum">Impressum</p>
            </HashLink>
          </div>
          <div className="footerList">
            <HashLink smooth to="/contact">
              <p>Contact us</p>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
