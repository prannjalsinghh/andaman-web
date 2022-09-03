import { useNavigate } from "react-router-dom";
import Banner from "../Components/Banner";
const EachPackageHomeDiv = (props) => {
  const navigate = useNavigate();

  const renderNewPackages = () => {
    navigate("/TypePackages", { state: { id: props.heading } });
  };

  return (
    <>
      <div className="box-content mr-2 p-7 w-64 border border-gray-300 rounded-md text-center bg-white flex flex-col gap-4 items-center  hover:scale-90  transition-all">
        <img className="h-40" src={props.url} />
        <h3 className="text-2xl text-center font-semibold">{props.heading}</h3>
        <button className="p-2 rounded-md" onClick={renderNewPackages}>
          View Details
        </button>
      </div>
    </>
  );
};
export default EachPackageHomeDiv;
