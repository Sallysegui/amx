import working from '../../assets/working.png'
const AboutUs = () =>{
    return(
        <div className="aboutContainer companyList">
                <div className='columCompany'>
                    <h2 >
                        About Us
                    </h2>
                    <p>
                    We are an independent MRO specialising in maintenance and repairs for Bombardier and Embraer 
                    Business Aviation aircraft. Our Main Base is located at Vienna Airport, Austria and our hangar 
                    has the capacity to conduct multiple Base Maintenance inspections simultaneously. 
                    We also provide Line Maintenance support in Vienna and in Nice Cote d’Azur Airport, France. 
                    Additionally, we provide urgent AOG support for your aircraft which can be arranged via 
                    our MOC contact details.
                    </p>
                </div>
                <div className='columCompany'>
                    <img src={working} alt="working on an airplane" />
                </div>
        </div>)

}
export default AboutUs