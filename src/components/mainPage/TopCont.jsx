import logo from '../../assets/logo.png'
//import hangar from '../../assets/hungerFullCapacity.jpeg'
//import Menu from './Menu'
import Aob from './Aob'

const LogoTop = () => {
    return(
            <div className='logoContainer'>
                <img src={logo} className="logo" alt="AMX logo" />
            </div>
    )
}



const TopCont = () => {
    return(
    <div  className='containerTopCont'>
        <div className='logoBox'>
            <LogoTop/>
        </div>
        <div className='AogSelector'>
            <Aob/>
        </div>
        {/* <Menu/> */}
    </div>)
}

export default TopCont