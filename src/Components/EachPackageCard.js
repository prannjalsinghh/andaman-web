import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { red } from '@mui/material/colors';
const EachPackageCard = (props)=>{

    return(

        <div className='p-5 '>

            <img src={props.item.url} />
            <div className='flex flex-row  justify-between'>
                <div>
                    <h3 className='text-2xl font-semibold'>{props.item.heading}</h3>
                    <p>{props.item.info}</p>
                </div>
                <div>
                    <ArrowCircleRightRoundedIcon className='hover:scale-125' sx={{fontSize:45}} style={{color:"red"}}/>
                </div>
            </div>
        </div>
    )
}
export default EachPackageCard;