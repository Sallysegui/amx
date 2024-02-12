////https://www.geeksforgeeks.org/how-to-create-a-read-more-component-in-reactjs/
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import AboutUsPhoto from "./abouUsPhotos";
import  { useState } from "react";
import PropTypes from 'prop-types';

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

const paragraph = "Situated in Vienna, we are an independent aviation MRO specialising in Bombardier and Embraer Business Aviation aircraft. Established by aviation professionals with extensive experience in engineering and quality assurance, sales and marketing, flight support and operations within the Business Aviation market, AMX Support continues to grow in to one of Europe’s leading MRO’s. Our aviation specialists are dedicated to providing an exceptional service with a rewarding customer experience 7 days a week. Fly with confidence, and with AMX Support we keep you flying!"
const ReadMore = ({ children }) => {
 
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
  };
  ReadMore.propTypes = {
    children: PropTypes.node.isRequired,
    };
  return (
      <p className="textSmall">
          {isReadMore ? text.slice(0, 213) : text}
          <span
              onClick={toggleReadMore}
              className="read-or-hide"
          >
              {isReadMore ? "...read more" : " show less"}
          </span>
      </p>
  );
};


const AboutUs = () =>{

    return(
        <div className="aboutContainer" >
        
            <Reveal keyframes={customAnimation} >
            <div className="longText">
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
            <ReadMore>
              {paragraph}
            </ReadMore>
            
            </Reveal>
            <AboutUsPhoto/>
        </div>)

}
export default AboutUs