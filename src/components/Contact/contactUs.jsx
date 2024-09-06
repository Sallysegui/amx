const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <p className="inquiries">
        Contact Us: For inquiries, urgent needs, or to request a quote, reach
        out to us at moc@amxsupport.com. Trust AMX Support to elevate your
        aircraft maintenance experience – where precision meets passion. Fly
        with confidence, fly with AMX Support!
      </p>

      <div className="contacts">
        {/* <p className="firstContact"> */}
        <p className="contactTitle">For MOC:</p>
        {/* <img className='contactIcon' src="https://si.nccdn.net/pictograms-gray/48/icon_02.png"></img> */}
        <p className="phone">+43 (0) 664 604 34 333</p>
        {/* <img className='contactIcon' src="https://si.nccdn.net/pictograms-gray/48/icon_04.png"></img> */}
        <p className="email">moc@amxsupport.com</p>
        {/* </p> */}
        {/* <p className="secondContact"> */}
        <p className="contactTitle">For Spares:</p>
        {/* <img className='contactIcon' src="https://si.nccdn.net/pictograms-gray/48/icon_02.png"></img> */}
        <p className="phone">+43 (0) 1 386 0 888 (option 2)</p>
        {/* <img className='contactIcon' src="https://si.nccdn.net/pictograms-gray/48/icon_04.png"></img> */}
        <p className="email">spares@amxsupport.com</p>

        {/* <p className="thirdContact"> */}
        <p className="contactTitle">For general enquiries:</p>
        {/* <img className='contactIcon' src="https://si.nccdn.net/pictograms-gray/48/icon_02.png"></img> */}
        <p className="phone">+43 (0) 1 386 0 888</p>
        {/* <img className='contactIcon' src="https://si.nccdn.net/pictograms-gray/48/icon_04.png"></img> */}
        <p className="email">team@amxsupport.com</p>
      </div>
    </div>
  );
};
export default ContactUs;
