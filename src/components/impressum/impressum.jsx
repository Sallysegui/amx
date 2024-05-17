import TopCont from "../mainPage/TopCont";
import MenuFunct from "../mainPage/MenuFunct";
import Footer from "../Footer/footer";

const impre = (
  <div>
    <span>Responsible</span>
    <p>AMX Support GmbH - Aircraft Maintenance</p>
    <p>Hegelgasse 8</p>
    <p>1010 Vienna</p>

    <p>Phone: +43 (0) 664 604 34 100</p>
    <p>E-Mail: team@amxsupport.com</p>

    <span>Register Entry</span>
    <p>
      Entry in commercial register - Aircraft Mechanic - Location:
      Flughafenstrasse 1, 4063 Hoersching
    </p>
    <p>Register court: HG Wien</p>
    <p>Tax identification number: ATU74973978</p>
    <p>Registration number: FN 523580 x</p>

    <br />
    <p>Authority: Austro Control GmbH</p>
    <p>
      EASA Part-145 Maintenance Approval (No. AT.145.089) for Line Maintenance
    </p>
    <br />

    <p>
      General Terms and Conditions AMX Support - English - see Information Page
    </p>
    <p>
      Datenschutzerklärung Deutsch - Data Protection English - see Information
      Page
    </p>
    <p>
      Wiederrufsbelehrung Deutsch - Right of withdrawal English - see
      Information Page
    </p>
  </div>
);
const Impressum = () => {
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
          <p>Hegelgasse 8</p>
          <p>1010 Vienna</p>

          <p>Phone: +43 (0) 664 604 34 100</p>
          <p>E-Mail: team@amxsupport.com</p>
          <br />

          <span>Register Entry</span>
          <p>
            Entry in commercial register - Aircraft Mechanic - Location:
            Flughafenstrasse 1, 4063 Hoersching
          </p>
          <p>Register court: HG Wien</p>
          <p>Tax identification number: ATU74973978</p>
          <p>Registration number: FN 523580 x</p>

          <br />
          <p>Authority: Austro Control GmbH</p>
          <p>
            EASA Part-145 Maintenance Approval (No. AT.145.089) for Line
            Maintenance
          </p>
          <br />

          <span>
            <p>
              General Terms and Conditions AMX Support - English - see
              Information Page
            </p>
          </span>

          <span>
            <p>
              Datenschutzerklärung Deutsch - Data Protection English - see
              Information Page
            </p>
          </span>

          <span>
            <p>
              Wiederrufsbelehrung Deutsch - Right of withdrawal English - see
              Information Page
            </p>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Impressum;
