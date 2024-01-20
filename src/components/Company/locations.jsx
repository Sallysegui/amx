
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

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



const Locations = () =>{
    return(<div className="approContainer companyList">
    <Reveal keyframes={customAnimation} >
       <div className='columCompany part1'>
         {/* <div> */}
           <h2 >
             Locations
           </h2>
           <p className="locationsP">
           Our headquarters and hangar are located in <span>Vienna Airport</span>, Austria and we also have a Line Stations
            at <span>Nice Cote d’Azur Airport</span>, France and <span>London Luton Airport</span>, United Kingdom. 
           </p>
         {/* </div> */}
       </div>
   </Reveal>
   <Reveal keyframes={customAnimationImg}delay={200} >
       {/* <Fade > */}
       <div className='columCompany part2'> 
       <iframe src="https://www.google.com/maps/d/embed?mid=1fzRdPhsjwLhryGIyqcAguIIAq-r9WBY&ehbc=2E312F"
                allowfullscreen="" loading="lazy"></iframe> 
       </div>
   </Reveal>
        </div>
    )

}
export default Locations