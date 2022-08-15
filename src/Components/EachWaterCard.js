import {Link} from 'react-router-dom';

const EachWaterCard = (props)=>{
     return(

        <div className='box-content	p-7 w-64 border border-gray-300 rounded-md text-center bg-white  hover:scale-90  transition-all gap-3'>

            <img className="h-40"src={props.item.url} />
            <div className='flex flex-col items-center  justify-between gap-2'>
                
                    <h3 className='text-2xl text-center font-semibold'>{props.item.heading}</h3>
                    <p className=''>{props.item.info}</p>
                    <Link to="/contactUs"><button className="p-1.5 rounded-md">Book Now</button></Link>
                
            </div>
        </div>
    )
}
export default EachWaterCard;