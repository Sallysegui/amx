

import TopCont from './components/mainPage/TopCont';
import MenuFunct from './components/mainPage/MenuFunct';

import Welcome from './components/mainPage/welcome'
import PhotoMain from './components/mainPage/photoMain'
import Company from './components/Company/company';

const App = () => {
  return (
  <div className='fullPage'>
    <div className='portada'>
      <TopCont/>
      <MenuFunct/>
      <PhotoMain/>
    </div>
    <Welcome/>
    <Company/>
  </div>
  )
}

export default App
