import Header from '../Components/Header';
import HomeVideo from '../Components/HomeVideo';
import Footer from '../Components/Footer';
import PackageCard from '../Components/PackageCard';
import NewsLetter from '../Components/NewsLetter';
import QueryForm from '../Components/QueryForm;js';
import EachPackageCard from '../Components/EachPackageCard';

const Home = ()=>{
    const arr = [{
        heading:"FAMILY PACKAGES",
        url:"https://media.istockphoto.com/photos/happy-family-running-on-beach-picture-id1137373430?k=20&m=1137373430&s=612x612&w=0&h=RnzI-4Yx1eD-YDolsCFxWZ2TVIOHWL-ecNoOrQj7Yp8=",
        info:"In the end, kids won’t remember that fancy toy you bought them, they will remember the time you spent with them."
       },{
        heading:"HONEYMOON PACKAGES",
        url:"https://www.jaisuntourism.com/images/international-honeymoon-packages-from-coimbatore.jpg",
        info:"Love is the food of life. Travel is dessert"
       }]

    const items = [{
      heading:"4 NIGHTS-5 DAYS",
      url:"https://static.toiimg.com/photo/68814397.cms",
      info:"(2 N Port Blair+1 N Havelock+1N Neil (Shaheed Dweep))",
      TourCode:"TOUR CODE :- MTG 003"
    }]
        return (
          <div className="App">
      
            <Header/>
            <HomeVideo/>
            <div className='flex flex-col items-center sm:flex sm:flex-row justify-around'>
              <PackageCard item={arr[0]} />
              <PackageCard item={arr[1]} />
            </div>
            <div className='flex flex-col items-center sm:flex sm:flex-row justify-center gap-2'>
              <EachPackageCard item={items[0]} />
              <EachPackageCard item={items[0]} />
              <EachPackageCard item={items[0]} />

            </div>
            {/* <QueryForm/> */}
            <Footer/>
          </div>
        );
      }

export default Home;