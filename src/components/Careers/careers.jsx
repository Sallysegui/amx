import TopCont from '../mainPage/TopCont';
import MenuFunct from '../mainPage/MenuFunct';
import Footer from "../Footer/footer";

// const Sentence = ()=>{
//   return (<div>
//     Bring Your Expertise to AMX Support
//   </div>)

// }
// export default Sentemce

const Careers = () =>{
    return(<div className='fullPage'>
    <div className='header '>
       <div className="headerInner">
           <TopCont/>
           <MenuFunct/>
       </div>
       </div>
      <div className='portada'>
      <div className='supportMenu'></div>
      <div className="bitMargin"></div>
      <div className='careersContainer'>
    {/* <div> */}
      <h1>Careers</h1>
      <h2>Bring Your Expertise to AMX Support</h2>
      <div className='specialise'>
        <p >
        We specialise in worldwide AOG support to our customer aircraft and the most important success factors 
        are highly motivated employees.
        </p>
        <p>
        Best quality and continual training is our business philosophy. We operate in a highly professional 
        international team and offer many career prospects in all areas.
        </p>
      </div>
      <h3>Current Vacancies</h3>
      <div className="underline">
        <span></span>
      </div>
      <h4>
        CERTIFYING ENGINEER (B1 and/or B2) for AOG, Scheduled and Unscheduled Maintenance
      </h4>
      <p className='dutties'>
        Duties and responsibilities:
      </p>
      <ul>
        <li>Performing of troubleshooting, schedule and unscheduled maintenance according to the manufacturer’s 
          manuals</li>
        <li>Documentation of performed maintenance tasks according to MOE-standards</li>
        <li>Performing of complex repairs, inspections and maintenances</li>
        <li>Ensuring and maintaining a high quality- and safety Standard</li>
      </ul>
      <h4>
        MAINTENANCE PLANNER
      </h4>
      <p className='dutties'>
        Duties and responsibilities:
      </p>
      <ul>
        <li>Ensure requested work is within the approved scope</li>
        <li>Preparation of work documents for the engineer and our customer</li>
        <li>Maintenance of history files for customers</li>
        <li>Managing the company planning tool</li>
        <li>Tracking life limit parts/ consumables in our program</li>
        <li>Keep the maintenance data library up to date</li>
      </ul>



    {/* </div> */}
    </div>
    </div>
    <Footer/>
    </div>)

}
export default Careers