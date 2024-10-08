import logo from '../../assets/logo.png'
import Aob from './Aog'
// import Hamburger from './topMenu/hamburger.Icon'



const LogoTop = () => {
    return(
            <div className='logoContainer' >
                <a href={'/'}>
                    <img src={logo} className="logo" alt="AMX logo" />
                </a>
            </div>
    )
}



const TopCont = () => {
    return(
    <div  className='containerTopCont'>
        <div className='logoBox'>
            <LogoTop/>
        </div>
        {/* <div>
            <Hamburger/>
        </div> */}
        <div className='AogSelector'>
            <Aob/>
        </div>
        {/* <Menu/> */}
    </div>)
}

export default TopCont