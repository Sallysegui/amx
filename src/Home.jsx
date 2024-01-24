

import TopCont from './components/mainPage/TopCont';
import MenuFunct from './components/mainPage/MenuFunct';

import Welcome from './components/mainPage/welcome';
import PhotoMain from './components/mainPage/photoMain'
import Locations from "./components/Company/locations";
import AboutUs from "./components/Company/aboutus";
import Approvals from "./components/Company/approvals";
import Spares from "./components/Company/spares";
// import AboutUsPhoto from "./components/Company/abouUsPhotos";
import Footer  from './components/Footer/footer';

const App = () => {
  return (<div className='fullPage'>
    <div className='portada'>
      <div className='header'>
      <div className="headerInner">
        <TopCont/>
        <MenuFunct/>
        </div>
      </div>
      <PhotoMain/>
    </div> 
      <Welcome/>
    <div className="companyContainer">
      <AboutUs/>
      <Approvals/>
      <Spares/>
      <Locations/>
    </div>
    <Footer/>    
  </div>)
}

export default App
