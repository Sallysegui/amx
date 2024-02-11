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
          <a href="/contact"><span>CONTACT US</span></a>
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
