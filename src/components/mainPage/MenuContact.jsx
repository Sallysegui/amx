import  { useState } from 'react';
// import  { useRef } from "react";



const MenuContact = () => {
    // const dropdownRefComp = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    return (
        <div
          onMouseEnter={onClick}
          onMouseLeave={onClick}  
        className="menu-button-container">
          <button className="menu-trigger">
          <a href="/contact"><span> Contact us</span></a>
            {/* <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" /> */}
          </button>
          {/* <nav ref={dropdownRefComp} className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <ul>
              <li><a href="/aboutus">About us</a></li>
              <li><a href="/aprovals">Approvals</a></li>
              <li><a href="/spares">Spares</a></li>
              <li><a href="/locations">Locations</a></li>
            </ul>
          </nav> */}
        </div>
      );
 };

export default MenuContact
