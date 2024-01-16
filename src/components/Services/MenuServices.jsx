import  { useState } from 'react';
import  { useRef } from "react";


// const optionsList = [
//     'lalalaal',
//     'Services',
//     'Spares',
//     'Contact'

// ]


const MenuServices = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(true);
    const onClickB = () => setIsActive(false);
    return (
        <div 
            onMouseEnter={onClick}
            onMouseLeave={onClickB } 
        className="menu-button-container">
          <button className="menu-trigger">
          <a href="/services"><span>SERVICES</span></a>
            {/* <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" /> */}
          </button>
          <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <ul>
              <li><a href="/messages">AOG Response</a></li>
              <li><a href="/trips">Line Maintenance</a></li>
              <li><a href="/saved">Base Maintenance</a></li>
              <li><a href="/saved">Engine Boroscope</a></li>
            </ul>
          </nav>
        </div>
      );




}

export default MenuServices
