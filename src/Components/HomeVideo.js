import ReactPlayer from "react-player";
import HomeVid from '../Assets/HomeVideo.mp4'
const HomeVideo = ()=>{
    return(
        <ReactPlayer url={HomeVid} 
        playing={true}
        muted={true}
        width="100%"
        height="450px"
        loop={true}
        />
    )
}
export default HomeVideo;