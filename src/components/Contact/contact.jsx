
import ContactForm from "./contactForm";
import ContactUs from "./contactUs";
import TopCont from '../mainPage/TopCont';
import MenuFunct from '../mainPage/MenuFunct';
import Address from "./adress";
import Footer from "../Footer/footer";

const Contact = () =>{
    return(<div className='fullPage'>
        <div className='portada'>
            <div className='header'>
            <div className="headerInner">
                <TopCont/>
                <MenuFunct/>
            </div>
            </div>
        <div className='supportMenu'></div>
    </div>
    <div className="bitMargin"></div>
            <ContactUs/>
            Contact Form
            <ContactForm/>
            < Address />
            <Footer/>
    </div>)

}
export default Contact