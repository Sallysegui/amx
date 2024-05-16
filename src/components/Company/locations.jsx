import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

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

const Locations = () => {
  return (
    <div className="approContainer companyList" id="locations">
      <Reveal keyframes={customAnimation} triggerOnce>
        <div className="columCompany part1">
          {/* <div> */}
          <h2>Locations</h2>
          <p className="locationsP">
            Our headquarters and hangar are located in <span>Vienna</span>,
            Austria. We also have Line Stations at{" "}
            <span>Nice Cote d’Azur Airport</span>, France and{" "}
            <span>London Luton Airport</span>, United Kingdom.
          </p>
          {/* </div> */}
        </div>
      </Reveal>
      <Reveal keyframes={customAnimationImg} delay={200} triggerOnce>
        {/* <Fade > */}
        <div className="columCompany part2">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1Tx_7KT7l4v6b56oypRO6CrDyKPraRpg&ehbc=2E312F&noprof=1"
            loading="lazy"
          ></iframe>
        </div>
      </Reveal>
    </div>
  );
};
export default Locations;
