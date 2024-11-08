import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import lineMaintenance from "../../assets/lineMaintenance.png";
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
const LineMaintenace = () => {
  return (
    <div className="lineContainer companyList" id="linemaintenance">
      <Reveal keyframes={customAnimationImg} delay={200} triggerOnce>
        <div className="columCompany part2">
          <img src={lineMaintenance} alt="fullHangar photo" />
        </div>
      </Reveal>

      <Reveal keyframes={customAnimation} triggerOnce>
        <div className="columCompany part1">
          <h2>Line Maintenance</h2>
          <p>
            We provide Line Maintenance services at our main base in Vienna,
            Austria and at our Line Stations at Nice Cote d’Azur Airport, France
            and London Luton Airport, United Kingdom. Whether it is servicing
            between flights or an unexpected issue
            <Link smooth to="/contact#top">
              &nbsp;contact us&nbsp;
            </Link>
            now.
          </p>
        </div>
      </Reveal>
    </div>
  );
};
export default LineMaintenace;
