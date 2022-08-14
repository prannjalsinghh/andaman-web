import EachPackageCard from "../Components/EachPackageCard";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Packages = ()=>{
    const items = [{url:'https://media.istockphoto.com/photos/family-vacation-holiday-happy-family-running-on-the-beach-in-the-picture-id1299265795?k=20&m=1299265795&s=612x612&w=0&h=kKrVYwdoNvKti2dq9xP5fnoktnLFLgwc5HMeqRixyE4=',heading:'Andaman Family Tour Package',info:"4 Nights 3 Days"},{url:'https://media.istockphoto.com/photos/family-vacation-holiday-happy-family-running-on-the-beach-in-the-picture-id1299265795?k=20&m=1299265795&s=612x612&w=0&h=kKrVYwdoNvKti2dq9xP5fnoktnLFLgwc5HMeqRixyE4=',heading:'Andaman Family Tour Package',info:"4 Nights 3 Days"}]
    return(
        <>
            <Header/>
            <div className="flex flex-col justify-around sm:flex-row">
            <EachPackageCard item={items[0]}/>
            <EachPackageCard item={items[1]}/>
            </div>
            <Footer/>
        </>
    )
}
export default Packages;