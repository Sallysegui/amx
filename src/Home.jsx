

import TopCont from './components/mainPage/TopCont';
import MenuFunct from './components/mainPage/MenuFunct';

import Welcome from './components/mainPage/welcome'
import PhotoMain from './components/mainPage/photoMain'

const App = () => {
  return (
  <div className='fullPage'>
      {/* <video className="background-video"  autoPlay={true}
      onMouseOver={event => event.target.play()}
      >
        <source src="../clouds.mp4" type="video/mp4"/>
      </video> */}
    <TopCont/>
    <MenuFunct/>
    <PhotoMain/>
    <Welcome/>
  </div>
  )
}

export default App
