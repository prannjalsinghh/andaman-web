import {Route,Routes} from 'react-router-dom'
import './App.css';
import Packages from './MainComponents/Packages'
import Home from './MainComponents/Home'
import ContactUs from './MainComponents/ContactUs';
import AboutUs from './MainComponents/AboutUs';
import Activities from './MainComponents/Activities';
import Ferries from './MainComponents/Ferries';
import { useEffect } from 'react';
import TypesPackages from './Components/TypesPackages';
import { Helmet } from 'react-helmet';

function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
return(
  <Routes>
    <Route exact path='/' element={ <Home/>}></Route>
    <Route exact path='/aboutUs' element={<AboutUs/>}></Route>
    <Route exact path='/contactUs' element={<ContactUs/>}></Route>
    <Route exact path= '/ferries' element={<Ferries/>}></Route>
    <Route exact path='/packages' element={<Packages/>}></Route>
    <Route exact path='/activities' element={<Activities/>}></Route>
    <Route exact path='/TypePackages' element={<TypesPackages/>}></Route>
  </Routes>
  )
}
export default App;
