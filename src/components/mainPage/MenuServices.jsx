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
          <a href="/services"><span> Services</span></a>
            {/* <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" /> */}
          </button>
          <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <ul>
              <li><a href="/messages">Mdsfsdf</a></li>
              <li><a href="/trips">Trsdfdsf</a></li>
              <li><a href="/saved">Savsdfdsfed</a></li>
            </ul>
          </nav>
        </div>
      );




}

export default MenuServices
