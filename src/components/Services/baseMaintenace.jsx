import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import baseMaintenance from "../../assets/baseMaintenance.jpg";

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
const BaseMaintenance = () => {
  return (
    <div className="aboutContainer companyList" id="basemaintenance">
      <Reveal keyframes={customAnimation} triggerOnce>
        <div className="columCompany part1">
          <h2>Base Maintenance</h2>
          <p>
            Our hangars are fully equipped to accommodate inspections on
            Bombardier aircraft and Embraer aircraft. From scheduled maintenance
            to structural modifications/repairs and avionics upgrades we can
            accommodate your requirements. Contact us for further information
            and to book your slot.
          </p>
        </div>
      </Reveal>
      <Reveal keyframes={customAnimationImg} delay={200} triggerOnce>
        <div className="columCompany part2">
          <img
            src={baseMaintenance}
            alt="baseMaintenance working on airplane photo"
          />
        </div>
      </Reveal>
    </div>
  );
};
export default BaseMaintenance;
