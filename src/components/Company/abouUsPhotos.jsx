import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import AboutUs1 from "../../assets/AboutUs1.png";
import AboutUs2 from "../../assets/Abouts2.jpg";
import AboutUs3 from "../../assets/AboutUs3.jpg";

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

// const customAnimationImg = keyframes`
//   from {
//     opacity: 0;
//     transform: translate(0, 80px);
//   }

//   to {
//     opacity: 1;
//     transform: translate(0, 0);
//   }
// `;

const AboutUsPhoto = () => {
  return (
    <div className="aboutUsPhoto">
      <Reveal keyframes={customAnimation} triggerOnce>
        <img className="aboutUs1" src={AboutUs1} alt="working on an airplane" />
        <img className="aboutUs2" src={AboutUs2} alt="working on an airplane" />
        <img className="aboutUs3" src={AboutUs3} alt="working on an airplane" />
      </Reveal>
    </div>
  );
};
export default AboutUsPhoto;
