

// import TopCont from '../mainPage/TopCont';
// import MenuFunct from '../mainPage/MenuFunct';

import Footer from "../Footer/footer";
import TopCont from "../mainPage/TopCont";
import MenuFunct from "../mainPage/MenuFunct";
import TermsText from "./termsText";

const Terms = () =>{
    return(<div className='fullPage'>
        <div className='header'>
            <div className="headerInner">
                <TopCont/>
                <MenuFunct/>
            </div>
         </div>
        <div className='portada'>
        <div className='supportMenu'></div>
        <div className="terms">
            <h1>
                Terms and Conditions
            </h1>
            <TermsText/>
        </div>
        
    </div>
    <div className="bitMargin"></div>
  
            <Footer/>
    </div>)

}
export default Terms