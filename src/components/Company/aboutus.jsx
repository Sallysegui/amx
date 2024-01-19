
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
// import working from '../../assets/working.png'


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
const AboutUs = () =>{
    return(
        <div>
        
            <Reveal keyframes={customAnimation} >
            <div className="aboutContainer">
                <p>
                Situated in the classical music heart of Europe, we are an independent aviation MRO 
                specialising in Bombardier and Embraer Business Aviation aircraft. Established by 
                aviation professionals with extensive experience in engineering and quality assurance, 
                sales and marketing, flight support and operations within the Business Aviation market,
                 AMX Support continues to grow in to one of Europe’s leading MRO’s. Our aviation specialists 
                 are dedicated to providing an exceptional service with a rewarding customer experience 7 
                 days a week. Fly with confidence, and with AMX Support we keep you flying!
                </p>
            </div>
            </Reveal>
                {/* <Reveal keyframes={customAnimationImg}delay={200} >
                    <img src={working} alt="working on an airplane" />
                </Reveal> */}
        </div>)

}
export default AboutUs