import TopCont from '../mainPage/TopCont'
import MenuFunct from '../mainPage/MenuFunct';
import AogResponse from './AOGresponse';
import LineMaintenace from './lineMaintenace';
import BaseMaintenace from './baseMaintenace';
import EngineBoroscope from './engineBoroscope';
import Footer from '../Footer/footer';
const Services = () =>{
    return(<div className='fullPage'>
        <div className='portada'>
            <div className='header'>
            <div className="headerInner">
            <TopCont/>
            <MenuFunct/>
            </div>
            </div>
            {/* <PhotoMain/> */}
            <div className='supportMenu'></div>
        </div>
        {/* <div className="bitMargin"></div> */}
        <div className="bitMargin"></div>
        <div className="companyContainer">
            <AogResponse/>
            <LineMaintenace/>
            <BaseMaintenace/>
            <EngineBoroscope/>
        </div>
        <Footer/>
    </div>)

}
export default Services