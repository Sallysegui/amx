
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import aog from '../../assets/AOG.png';

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
const AogResponse = () =>{
    return(
        <div className="aboutContainer companyList">
        <Reveal keyframes={customAnimation} >
        <div className='columCompany part1'>
   
            <h2>
            AOG Response
            </h2>
            <p>
            AMX Support provides 24/7 urgent AOG response worldwide to get your aircraft back in the air. 
            From many years of experience in this field we understand the difficulty of unexpected technical
             issues so contact our MOC for AOG response services.

            </p>

        </div>
        </Reveal>
        <Reveal keyframes={customAnimationImg} delay={200} >
                <div className='columCompany part2'> 
                    <img src={aog} alt="Spares department photo" />
                </div>
        </Reveal>

        </div>)

}
export default AogResponse