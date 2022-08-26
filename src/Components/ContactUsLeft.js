import './ContactUsLeft.css'
const ContactUsLeft = ()=>{
    return(<div className="ContactUsBox">
            <div className="ContactUsBoxLeft">
               
                <h1>Feel Free To Contact & Reach Us!</h1>
                <p>Just send us your requirements by filling the below form or contact us from the below details for all your queries related to Andaman Island</p>
                <div className="contactAdress">
                    <i class="fa-solid fa-location-dot"></i>
                    <div className="desc">
                        <h4>Head Office Address:</h4>
                        <p>Shop no 21 Ground Floor RK Complex, Gunglighat, Port Blair
</p>
                    </div>
                </div>
                <div className="contactAdress">
                <i class="fa-solid fa-phone-volume"></i>
                    <div className='desc'>
                        <h4>Contact Number:</h4>
                        <p>+91 9971750170</p>
                    </div>
                </div>
                <div className="contactAdress">
                <i class="fa-solid fa-envelope-open-text"></i>
                    <div className='desc'>
                        <h4>Email Address:</h4>
                        <p>sales@andamanoceantours.com</p>
                    </div>
                </div>
            </div>
        </div>)
}
export default ContactUsLeft

