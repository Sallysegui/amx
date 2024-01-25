

// import TopCont from '../mainPage/TopCont';
// import MenuFunct from '../mainPage/MenuFunct';

import Footer from "../Footer/footer";
import TopCont from "../mainPage/TopCont";
import MenuFunct from "../mainPage/MenuFunct";

const Terms = () =>{
    return(<div className='fullPage'>
        <div className='portada'>
            <div className='header'>
            <div className="headerInner">
                <TopCont/>
                <MenuFunct/>
            </div>
            </div>
        <div className='supportMenu'></div>
        <h1>
            Terms and Conditions
        </h1>
    </div>
    <div className="bitMargin"></div>
  
            <Footer/>
    </div>)

}
export default Terms