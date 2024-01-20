
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import spares from '../../assets/spares2.webp'

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

const Spares = () =>{
    return(
        <div className="aboutContainer companyList">
          <Reveal keyframes={customAnimationImg} delay={200} >
            <div className='columCompany part2'> 
              <img src={spares} alt="Spares department photo" />
            </div>
          </Reveal>
        <Reveal keyframes={customAnimation} >
        <div className='columCompany part1'>
            {/* <div>
                lalal
            </div>
            <div>
                lololo
            </div> */}
            
            <h2>
                Spares
            </h2>
            <p>
            Our Spares department has a wide range of parts available at competitive prices. We also have an extensive range of tooling and test equipment that can be rented on request 
             so contact our Spares team and we’ll do our best to provide you with what you need.
            </p>
            
        </div>
        </Reveal>
         
                {/* </Fade> */}

        </div>)

}
export default Spares