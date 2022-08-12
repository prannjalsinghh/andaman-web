
import Header from './Components/Header';
import './App.css';
import HomeVideo from './Components/HomeVideo';
import Footer from './Components/Footer';
import PackageCard from './Components/PackageCard';
import NewsLetter from './Components/NewsLetter';



function App() {
 const arr = [{
  heading:"FAMILY PACKAGES",
  url:"https://media.istockphoto.com/photos/happy-family-running-on-beach-picture-id1137373430?k=20&m=1137373430&s=612x612&w=0&h=RnzI-4Yx1eD-YDolsCFxWZ2TVIOHWL-ecNoOrQj7Yp8=",
  info:"In the end, kids won’t remember that fancy toy you bought them, they will remember the time you spent with them."
 },{
  heading:"HONEYMOON PACKAGES",
  url:"https://www.jaisuntourism.com/images/international-honeymoon-packages-from-coimbatore.jpg",
  info:"Love is the food of life. Travel is dessert"
 }]
  return (
    <div className="App">

      <Header/>
      <HomeVideo/>
      <div className='flex flex-col items-center sm:flex sm:flex-row justify-around'>
        <PackageCard item={arr[0]} />
        <PackageCard item={arr[1]} />
      </div>
      <div style={{backgroundImage: `url(https://wallpaperaccess.com/full/1921683.jpg)`,backgroundRepeat:"no-repeat"}} >
      <NewsLetter/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
