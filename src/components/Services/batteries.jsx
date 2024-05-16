import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import battery from "../../assets/battery1.png";

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
    <div className="batteryContainer companyList" id="bateryShop">
      <Reveal keyframes={customAnimation} triggerOnce>
        <div className="columCompany part1">
          <h2>Battery Shop</h2>
          <div className="comingSoon">
            <p>Coming very soon ...</p>
          </div>
        </div>
      </Reveal>
      <Reveal keyframes={customAnimationImg} delay={200} triggerOnce>
        <div className="columCompany part2 batteryPart2">
          <img src={battery} alt="Battery icon" />
        </div>
      </Reveal>
    </div>
  );
};
export default BatteryShop;
