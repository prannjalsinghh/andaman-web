const EachPackageHomeDiv = ()=>{

    return(
        <div className="flex flex-col items-center">
            <img src={props.url} />
            <h3>{props.heading}</h3>
            <button>View Details</button>
        </div>
    )
}
export default EachPackageHomeDiv