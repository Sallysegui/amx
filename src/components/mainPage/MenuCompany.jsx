import  { useState } from 'react';
import  { useRef } from "react";
import { HashLink } from 'react-router-hash-link';


const MenuCompany = () => {
    const dropdownRefComp = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    return (
        <div
          onMouseEnter={onClick}
          onMouseLeave={onClick}  
        className="menu-button-container">
          <button className="menu-trigger">
          <a href="/company"><span className='menu-word'>COMPANY</span></a>
            {/* <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" /> */}
          </button>
          <nav ref={dropdownRefComp} className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <ul>
              {/* <li><a href="/aboutus">About us</a></li> */}
              <li>  <HashLink smooth  to="/company#about"  >About us</HashLink ></li>
              <li>  <HashLink  to="/company#aprovals" smooth >Approvals</HashLink ></li>        
              <li>  <HashLink  to="/company#spares" smooth >Spares</HashLink ></li>
              <li>  <HashLink  smooth  to="/company#locations">Locations</HashLink ></li>
             
            </ul>
          </nav>
          {/* <HashLink  to="/company#sectionS" reloadPage >
              lalalaala
              </HashLink> */}
           
        </div>
      );
 };

    // const MenuCompany = () => {
    //     const renderList = optionsList.map((item, index) => 
    //         <div className = "menuOtions" key={index}>{item}</div>);
    //     return(
    //     <div className = "dropdown-menu">
    //         <div className="dropdownlistContainer">
    //                 {renderList}
    //         </div>
    //     </div>
    // )}

export default MenuCompany
