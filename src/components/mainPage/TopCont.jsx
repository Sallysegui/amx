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

const Flying = () =>{
    return(
        <div className='aobContactContainer flying'>
            <div className='aobContact'>
                We keep you flying
            </div>
        </div>
    )
}

const TopCont = () => {
    return(
    <div  className='containerTopCont'>
        <LogoTop/>
        <Flying />
        <Aob/>
        {/* <Menu/> */}
    </div>)
}

export default TopCont