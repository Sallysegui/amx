import { useState } from "react";
// import  { useRef } from "react";
import { HashLink } from "react-router-hash-link";

const MenuContact = () => {
  // const dropdownRefComp = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  return (
    <div
      onMouseEnter={onClick}
      onMouseLeave={onClick}
      className="menu-button-container"
    >
      <button className="menu-trigger">
        {/* <a href="/contact"></span></a> */}
        <HashLink smooth to="/contact#top">
          <span>CONTACT US</span>
        </HashLink>
      </button>
    </div>
  );
};

export default MenuContact;
