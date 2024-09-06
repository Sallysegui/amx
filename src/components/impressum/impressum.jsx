import TopCont from "../mainPage/TopCont";
import MenuFunct from "../mainPage/MenuFunct";
import Footer from "../Footer/footer";
import { HashLink } from "react-router-hash-link";
import iconPDF from "../../assets/iconpdf.svg";

const Impressum = () => {
  const address = "AMXGeneralTermsandConditionsREV315.08.2023.pdf";
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
        <div className="whyAmxText impressum">
          <h2 className="whyAmxTextTitle">IMPRESSUM</h2>
          <span>Responsible</span>
          <p>AMX Support GmbH - Aircraft Maintenance</p>
          <p>Managing Director: Michael Vrablik</p>
          <p>Hegelgasse 8 / Top 14 1010 Wien, Austria</p>
          <p>Flughafenstrasse 1, 4063 H&#246;rsching, Austria</p>
          <p>Niki Lauda Allee, Hangar 6 Floor 2 1300 Schwechat, Austria</p>
          {/* <p>1010 Vienna</p> */}
          <p>Phone: +43 (0) 664 604 34 100</p>
          <p>E-Mail: team@amxsupport.com</p>
          <br />
          {/* <span>Register Entry</span> */}{" "}
          {/* <p>
            Entry in commercial register - Aircraft Mechanic - Location:
            Flughafenstrasse 1, 4063 Hoersching
          </p> */}
          {/* <p>
            Commercial register is also for Location: Niki Lauda Allee 1, Hangar
            6, 1300 Flughafen Wien
          </p> */}
          {/* <p>Hegelgasse 8 / Top 14 1010 Wien Austria</p> */}
          <p>Register court: HG Wien</p>
          <p>VAT identification number: ATU74973978</p>
          <p>Registration number: FN 523580 x</p>
          <br />
          <p>Authority: Austro Control GmbH</p>
          <p>EASA Part-145 Maintenance Approval (AT.145.089)</p>
          <br />
          <span className="termsLink">
            <p className="textTerms">
              General Terms and Conditions AMX Support - English
            </p>
            <p className="linkContainer">
              <HashLink
                to={{
                  pathname: "/AMXGeneralTermsandConditionsREV315.08.2023.pdf",
                }}
                target="_blanc"
              >
                <img src={iconPDF} className="iconPdf" alt="logo" />
              </HashLink>
            </p>
          </span>
          <span className="termsLink">
            <p className="textTerms">Data Protection - English </p>
            <p className="linkContainer">
              <HashLink
                to={{
                  pathname: "/DataProtectionEnglish.pdf",
                }}
                target="_blanc"
              >
                <img src={iconPDF} className="iconPdf" alt="logo" />
              </HashLink>
            </p>
          </span>
          <span className="termsLink">
            <p className="textTerms">Datenschutzerklärung - Deutsch </p>
            <p className="linkContainer">
              <HashLink
                to={{
                  pathname: "/DatenschutzerklärungDeutsch.pdf",
                }}
                target="_blanc"
              >
                <img src={iconPDF} className="iconPdf" alt="logo" />
              </HashLink>
            </p>
          </span>
          <span className="termsLink">
            <p className="textTerms">Right of withdrawal - English</p>
            <p className="linkContainer">
              <HashLink
                to={{
                  pathname: "/RightofwithdrawelEnglish.pdf",
                }}
                target="_blanc"
              >
                <img src={iconPDF} className="iconPdf" alt="logo" />
              </HashLink>
            </p>
          </span>{" "}
          <span className="termsLink">
            <p className="textTerms"> Wiederrufsbelehrung - Deutsch</p>
            <p className="linkContainer">
              <HashLink
                to={{
                  pathname: "/WiederrufsrechtDeutsch.pdf",
                }}
                target="_blanc"
              >
                <img src={iconPDF} className="iconPdf" alt="logo" />
              </HashLink>
            </p>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Impressum;
