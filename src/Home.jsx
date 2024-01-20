

import TopCont from './components/mainPage/TopCont';
import MenuFunct from './components/mainPage/MenuFunct';

import Welcome from './components/mainPage/welcome';
import PhotoMain from './components/mainPage/photoMain'
import Locations from "./components/Company/locations";
import AboutUs from "./components/Company/aboutus";
import Approvals from "./components/Company/approvals";
import Spares from "./components/Company/spares";
import AboutUsPhoto from "./components/Company/abouUsPhotos";

const App = () => {
  return (
  <div className='fullPage'>
    <div className='portada'>
      <TopCont/>
      <MenuFunct/>
      <PhotoMain/> 
      <Welcome/>
      </div>
      <div className="companyContainer">
        <AboutUs/>
        <AboutUsPhoto/>
        <Approvals/>
        <Spares/>
        <Locations/>
      </div>
      
 
  </div>
  )
}

export default App
