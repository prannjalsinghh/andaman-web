import Header from "../Components/Header";
import Footer from "../Components/Footer";
import EachPackageCard from "../Components/EachPackageCard";

const Ferries = () => {
  const items = [
    {
      url: "https://outpostgeographic.com/wp-content/uploads/2021/11/delhi-to-maldives-honeymoon-packages-all-inclusive-price-1200x800-2.jpg",
      heading: "Andaman Honeymoon Package",
      info: "4 Nights 3 Days",
    },
    {
        url: "https://outpostgeographic.com/wp-content/uploads/2021/11/delhi-to-maldives-honeymoon-packages-all-inclusive-price-1200x800-2.jpg",
        heading: "Andaman Honeymoon Package",
        info: "4 Nights 3 Days",
    }
  ];
  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex sm:flex-row sm:justify-around">
        <EachPackageCard item={items[0]} />
        <EachPackageCard item={items[1]} />
      </div>
      <Footer />
    </>
  );
};
export default Ferries;
