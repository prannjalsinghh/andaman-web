import {Route,Routes} from 'react-router-dom'
import './App.css';
import FamilyPackages from './MainComponents/FamilyPackages'
import Home from './MainComponents/Home'
import ContactUs from './MainComponents/ContactUs';
import AboutUs from './MainComponents/AboutUs';
import Blog from './MainComponents/Blog';
import Hotels from './MainComponents/Hotels';
import HoneymoonPackages from './MainComponents/HoneymoonPackages';


function App() {
return(
  <Routes>
    <Route exact path='/' element={ <Home/>}></Route>
    <Route exact path='/aboutUs' element={<AboutUs/>}></Route>
    <Route exact path='/contactUs' element={<ContactUs/>}></Route>
    <Route exact path= '/Blog' element={<Blog/>}></Route>
    <Route exact path= '/hotels' element={<Hotels/>}></Route>
    <Route exact path='/FamilyPackages' element={<FamilyPackages/>}></Route>
    <Route exact path='/HoneymoonPackages' element={<HoneymoonPackages/>}></Route>
  </Routes>
  )
}
export default App;
