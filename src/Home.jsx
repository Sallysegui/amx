

import TopCont from './components/mainPage/TopCont';
import MenuFunct from './components/mainPage/MenuFunct';

import Welcome from './components/mainPage/welcome'
import PhotoMain from './components/mainPage/photoMain'

const App = () => {
  return (
  <div className='fullPage'>
    <TopCont/>
    <MenuFunct/>
    <PhotoMain/>
    <Welcome/>
  </div>
  )
}

export default App
