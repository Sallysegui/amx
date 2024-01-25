import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/amxWhite.png';

const Footer = () =>{
    return(<div className='footerConainer'>
        <img src={logo} className='logoFooter' alt="AMX logo" />
        
        <div className='footerList'><HashLink smooth  to="/whyamx"><p>
            Why choose AMX support?
        </p></HashLink ></div>
        <p>	&#169; copyright 2024</p>
        <div className='footerList'><HashLink smooth  to="/company"><p>
            Company
        </p></HashLink ></div>
        <div className='footerList'><HashLink smooth  to="/services"><p>
            Services
        </p></HashLink ></div>
        <div className='footerList'><HashLink smooth  to="/careers"><p>
            Careers
        </p></HashLink ></div>
     
        <div className='footerList'><HashLink smooth  to="/services#aog"><p>
            AOG Response
        </p></HashLink ></div>
        <div className='footerList'><HashLink smooth  to="/services#aog"><p>
            AOG Response
        </p></HashLink ></div>
        <a href="/contact" className='footerList'><p>
            Contact us
        </p></a>
        <a href="/terms" className='footerList'><p>
            Terms and Conditions
        </p></a>
    </div>)

}
export default Footer