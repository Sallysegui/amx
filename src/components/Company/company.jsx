import Locations from "./locations";
import AboutUs from "./aboutus";
import Approvals from "./approvals";
import Spares from "./spares";
// import AboutUsPhoto from "./abouUsPhotos";
import TopCont from '../mainPage/TopCont';
import MenuFunct from '../mainPage/MenuFunct';
import Welcome from '../mainPage/welcome';
// import AboutUsPhoto from './abouUsPhotos';
//AMX Support GmbH is an EASA Part 145 MRO specialising in Business aircraft maintenance. We specialise in AOG support, Line and Base Maintenance on Embraer Bombardier aircraft types and are able to support your aircraft requirements at out Base Maintenance facility in Vienna, Austria and provide AOG support globally.
const Company = () =>{
    return(
         <div className='fullPage'>
            {/* <div className='portada'> */}
            <div className='portada'>
            <TopCont/>
      <MenuFunct/>
      
                {/* <TopCont/>
                <MenuFunct/> */}
                <Welcome/>
                </div>
                <div className="companyContainer">
                <AboutUs/>
                {/* <AboutUsPhoto/> */}
                <Approvals/>
                <Spares/>
                <Locations/>
            </div>
        </div>
    // </div>
    )

}
export default Company