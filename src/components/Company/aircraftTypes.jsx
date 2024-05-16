import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import planeIcon from "../../assets/planeIcon.png";

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
const AircraftTypes = () => {
  return (
    <div className="aircraftTypesCont">
      <Reveal keyframes={customAnimation} triggerOnce>
        <div>
          {/* <div> */}
          <div className="aircraftTypesHeading">
            <img src={planeIcon} alt="" />
            <h2>Aircraft Types</h2>
          </div>

          <p>
            Bombardier Global Express/XRS/5000/5500/6000/6500 (BD700-1A10/1A11)
          </p>
          <p>Bombardier Global 7500 (BD700-2A10)</p>
          <p>Bombardier Challenger 300/350 (BD100-1A10)</p>
          <p>Bombardier Challenger 604/605/650 (CL-604-2B16)</p>
          <p>Bombardier Challenger 850 / CRJ-200 (CL-604-2B19)</p>
          <p>Embraer Legacy 600/650 (ERJ-135)</p>

          {/* </div> */}
        </div>
      </Reveal>
    </div>
  );
};

export default AircraftTypes;
