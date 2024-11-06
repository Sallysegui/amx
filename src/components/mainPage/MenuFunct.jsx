////https://khuang159.medium.com/creating-a-hamburger-menu-in-react-f22e5ae442cb
import MenuCompany from "./MenuCompany";
import MenuServices from "../Services/MenuServices";
import MenuContact from "../Contact/MenuContact";
import { useState } from "react";
import Hamburger from "./topMenu/hamburger.Icon";
import starlinklogo from "/Starlinkogo.png";
import { HashLink } from "react-router-hash-link";

const MenuFunct = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    console.log(hamburgerOpen);
  };
  const hamburgerNavSyle = !hamburgerOpen
    ? "hamburgerStyleClose"
    : "hamburgerStyleOpen";
  const navstyle = hamburgerOpen ? "navstyleClose" : "navstyleOpen";
  const navStalink = hamburgerOpen ? "navStarlinkOpen" : "navStarlinkClose";
  return (
    <div>
      <div className="menuPlusStarCont">
        <div className={navstyle}>
          <div className="menu-container">
            <MenuCompany />
            <MenuServices />
            <MenuContact />
          </div>
        </div>
        <div className={`starLinkTopContainer ${navStalink}`}>
          Authorised&nbsp;&nbsp;
          <HashLink to="/starlink/installation#top" smooth>
            <img src={starlinklogo} alt="Starlink Logo" />
          </HashLink>
          &nbsp;&nbsp;dealer
        </div>
      </div>
      <div className={hamburgerNavSyle} onClick={toggleHamburger}>
        {/* <div  onClick={toggleHamburger}>   */}
        <Hamburger />
      </div>
    </div>
  );
};

export default MenuFunct;
