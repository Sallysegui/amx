

import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import controlPlane from '../../assets/controlPlane.jpg';


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
const Approvals = () =>{
    return(
        <div className="approContainer companyList" id="aprovals">
             <Reveal keyframes={customAnimation}  triggerOnce>
                <div className='columCompany part1'>
                  {/* <div> */}
                    <h2 >
                      Approvals
                    </h2>
                    <p>
                    We are an EASA approved Part 145 Maintenance Organisation (AT.145.089) and 
                    additionally hold approvals to maintain aircraft operating under Aruba, 
                    Cayman Islands, and Isle of Man authorities.
                    </p>
                  {/* </div> */}
                </div>
            </Reveal>
            <Reveal keyframes={customAnimationImg}delay={200}  triggerOnce >
                {/* <Fade > */}
                <div className='columCompany part2'> 
                  <img src={controlPlane} alt="control panel on an airplane" />
                </div>
            </Reveal>
         
        </div>)

}


export default Approvals
