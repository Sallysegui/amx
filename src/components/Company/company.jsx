import Locations from "./locations";
import AboutUs from "./aboutus";
import Approvals from "./approvals";
import Spares from "./spares";
//AMX Support GmbH is an EASA Part 145 MRO specialising in Business aircraft maintenance. We specialise in AOG support, Line and Base Maintenance on Embraer Bombardier aircraft types and are able to support your aircraft requirements at out Base Maintenance facility in Vienna, Austria and provide AOG support globally.
const Company = () =>{
    return(
        <div className="companyContainer">
            <AboutUs/>
            <Approvals/>
            <Spares/>
            <Locations/>
        </div>
    )

}
export default Company