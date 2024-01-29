
import ContactForm from "./contactForm";
import ContactUs from "./contactUs";
import TopCont from '../mainPage/TopCont';
import MenuFunct from '../mainPage/MenuFunct';
import Address from "./adress";
import Footer from "../Footer/footer";

const Contact = () =>{
    return(<div className='fullPage'>
          <div className='header'>
            <div className="headerInner">
                <TopCont/>
                <MenuFunct/>
            </div>
            </div>
        <div className='portada'>
          
        <div className='supportMenu'></div>

    <div className="bitMargin"></div>
            <ContactUs/>
            <ContactForm/>
            < Address />
            </div>
            <Footer/>
         
    </div>)

}
export default Contact