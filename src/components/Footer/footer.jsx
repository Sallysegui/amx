import { HashLink } from 'react-router-hash-link';

const Footer = () =>{
    return(<div className='footerConainer'>
        <a href="/contact" className='footerList'><p>
            Contact us
        </p></a>
        <div className='footerList'><HashLink smooth  to="/services#aog"><p>
            AOG Response
        </p></HashLink ></div>
        <li>  <HashLink smooth  to="/services#aog"  >AOG Respons lalalaale</HashLink ></li>
        <p>
            copyright 2024
        </p>
        <div className='footerList'><HashLink smooth  to="/careers"><p>
            Careers
        </p></HashLink ></div>
    </div>)

}
export default Footer