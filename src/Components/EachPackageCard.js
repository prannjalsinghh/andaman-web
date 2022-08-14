import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { red } from '@mui/material/colors';
const EachPackageCard = (props)=>{

    return(

        <div className='p-7 w-64 border border-gray-300 rounded-md text-center bg-white  hover:scale-90  transition-all gap-3'>

            <img src={props.item.url} />
            <div className='flex flex-col items-center  justify-between gap-2'>
                
                    <h3 className='text-2xl text-center font-semibold'>{props.item.heading}</h3>
                    <p>{props.item.info}</p>
                    <p>{props.item.TourCode}</p>
                    <button className='p-1.5 rounded-md'>View Details</button>
                
            </div>
        </div>
    )
}
export default EachPackageCard;