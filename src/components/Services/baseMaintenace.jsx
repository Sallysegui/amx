
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import baseMaintenance from '../../assets/baseMaintenance.jpeg';

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
const BaseMaintenance = () =>{
    return(
        <div className="aboutContainer companyList"  id="baseMainte">
        <Reveal keyframes={customAnimation} >
        <div className='columCompany part1'>
   
            <h2>
            Base Maintenance
            </h2>
            <p>
            Our hangar in Vienna, Austria is fully equipped to accommodate Base Maintenance inspections of 
            up to 9600hr/192/180 month inspections on Bombardier aircraft and 1000hr/24 month on Embraer
             aircraft. From scheduled maintenance to structural modifications and avionics upgrades we can
              accommodate your requirements. Contact us for further information and to book your slot. 

            </p>

        </div>
        </Reveal>
        <Reveal keyframes={customAnimationImg} delay={200} >
                <div className='columCompany part2'> 
                    <img src={baseMaintenance} alt="baseMaintenance working on airplane photo" />
                </div>
        </Reveal>

        </div>)

}
export default BaseMaintenance