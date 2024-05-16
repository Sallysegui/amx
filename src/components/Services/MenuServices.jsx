import { useState } from "react";
import { useRef } from "react";
import { HashLink } from "react-router-hash-link";

const MenuServices = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(true);
  const onClickB = () => setIsActive(false);
  return (
    <div
      onMouseEnter={onClick}
      onMouseLeave={onClickB}
      className="menu-button-container"
    >
      <button className="menu-trigger">
        <a href="/services">
          <span>SERVICES</span>
        </a>
        {/* <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" /> */}
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul>
          <li>
            {" "}
            <HashLink smooth to="/services#aogres">
              AOG Response
            </HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/services#lineMainte" smooth>
              Line Maintenance
            </HashLink>
          </li>
          <li>
            {" "}
            <HashLink to="/services#baseMainte" smooth>
              Base Maintenance
            </HashLink>
          </li>

          <li>
            {" "}
            <HashLink smooth to="/services#boroscope">
              Engine Borescope
            </HashLink>
          </li>
          <li>
            <HashLink to="/services#bateryShop">Battery Shop</HashLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuServices;
