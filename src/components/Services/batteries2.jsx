import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import battery from "../../assets/battery2.png";
import { Link } from "react-router-dom";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 80px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
const customAnimationImg = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 80px);
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;
const BatteryShop = () => {
  return (
    <div className=" batteryContainer companyList" id="batteryshop">
      <Reveal keyframes={customAnimation} triggerOnce>
        <div className="columCompany part1">
          <h2>Battery Shop</h2>
          <div>
            <p>
              <span>
                Welcome to AMX Support Battery Shop – Your Premier Source for
                Aircraft Batteries
              </span>
            </p>
            <p>
              To minimise your downtime during routine battery servicing we have
              opened a first class Battery Shop onsite at our hangar in Vienna.
              We hold approvals to test, repair and overhaul a variety of
              batteries from the aircraft we specialise in.
              <Link smooth to="/contact#top">
                &nbsp;Contact us&nbsp;
              </Link>
              to find out more about our Battery Shop capabilities.
            </p>
            {/* <p>
              <span>Contact Us</span> Experience the best in aircraft battery
              maintenance. Contact us today!
            </p> */}
            {/* <p>
              <ul>
                <span>Why Choose Us?</span>
              </ul>
            </p> */}
          </div>
        </div>
      </Reveal>
      <Reveal keyframes={customAnimationImg} delay={200} triggerOnce>
        <div className="columCompany part2">
          <img src={battery} alt="Battery icon" />
        </div>
      </Reveal>
    </div>
  );
};
export default BatteryShop;
