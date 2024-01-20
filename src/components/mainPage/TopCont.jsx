import logo from '../../assets/logo.png'
import Aob from './Aob'


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
        <div className='AogSelector'>
            <Aob/>
        </div>
        {/* <Menu/> */}
    </div>)
}

export default TopCont