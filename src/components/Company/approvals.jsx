import controlPlane from '../../assets/controlPlane.jpg'
const Approvals = () =>{
    return(
    <div className="approContainer companyList">
      <div className='columCompany'>
        <img src={controlPlane} alt="control panel on an airplane" />
      </div>
    <div className='columCompany'>
        <h2 >
        Approvals
        </h2>
        <p>
            Our Spares department has a wide range of parts available to purchase for your aircraft and 
            we are happy to supply you with what you need. We also have an extensive range of tooling and 
            test equipment that can be rented on request so let us know what you require and 
            we’ll do our best to provide you with what you need.
        </p>
    </div>
  
</div>)

}
export default Approvals