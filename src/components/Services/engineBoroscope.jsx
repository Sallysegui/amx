
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import boroscope from '../../assets/enginefoto.jpg';

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
const EngineBoroscope = () =>{
    return(
        <div className="borosContainer companyList" id="boroscope">
            <Reveal keyframes={customAnimationImg} delay={200} >
                <div className='columCompany part2 boroscopePhotoCont'> 
                    <img src={boroscope} alt="plane engine photo" />
                </div>
            </Reveal>

        <Reveal keyframes={customAnimation} >
        <div className='columCompany part1'>
   
            <h2>
            Engine Borescope Inspections
            </h2>
            <p>
            We have factory trained engineers and industry leading equipment to perform routine and 
            non-routine Engine Borescope inspections. Contact us today for a quote.

            </p>

        </div>
        </Reveal>
    
        </div>)

}
export default EngineBoroscope