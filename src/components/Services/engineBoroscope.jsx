import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import boroscope from "../../assets/boroscope0457.png";
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
const EngineBoroscope = () => {
  return (
    <div className="borosContainer companyList" id="engborescope">
      <Reveal keyframes={customAnimationImg} delay={200} triggerOnce>
        <div className="columCompany part2 boroscopePhotoCont">
          <img src={boroscope} alt="plane engine photo" />
        </div>
      </Reveal>

      <Reveal keyframes={customAnimation} triggerOnce>
        <div className="columCompany part1">
          <h2>Engine Borescope Inspections</h2>
          <p>
            We have factory trained engineers and industry leading equipment to
            perform routine and non-routine Engine Borescope inspections.
            <Link smooth to="/contact#top">
              &nbsp;Contact us&nbsp;
            </Link>
            today for a quote.
          </p>
        </div>
      </Reveal>
    </div>
  );
};
export default EngineBoroscope;
