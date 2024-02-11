
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import AboutUsPhoto from "./abouUsPhotos";

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
  // console.log('about us')
    return(
        <div className="aboutContainer" >
        
            <Reveal keyframes={customAnimation} >
            <div >
                <p>
                Situated in the classical music heart of Europe, we are an independent aviation MRO 
                specialising in Bombardier and Embraer Business Aviation aircraft. Established by 
                aviation professionals with extensive experience in engineering and quality assurance, 
                sales and marketing, flight support and operations within the Business Aviation market,
                 AMX Support continues to grow in to one of Europe’s leading MRO’s. Our aviation specialists 
                 are dedicated to providing an exceptional service with a rewarding customer experience 7 
                 days a week. <span>Fly with confidence, and with AMX Support we keep you flying!</span>
                </p>
            </div>
            
            </Reveal>
            <AboutUsPhoto/>
        </div>)

}
export default AboutUs