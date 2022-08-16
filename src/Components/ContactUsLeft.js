import './ContactUsLeft.css'
const ContactUsLeft = ()=>{
    return(<div className="ContactUsBox">
            <div className="ContactUsBoxLeft">
               
                <h1>Feel Free To Contact & Reach Us!</h1>
                <p>Just send us your questions or concerns by filling out the form and we will give you the help you need.<br></br> Or contact us from below details for all general queries or donation related queries</p>
                <div className="contactAdress">
                    <i class="fa-solid fa-location-dot"></i>
                    <div className="desc">
                        <h4>Head Office Address:</h4>
                        <p>Shop No 21 radhakrishna temple complex,JungliGhat,Port Blair, Andaman & Nicobar Islands 744103
</p>
                    </div>
                </div>
                <div className="contactAdress">
                <i class="fa-solid fa-phone-volume"></i>
                    <div className='desc'>
                        <h4>Contact Number:</h4>
                        <p>+91 9958377493</p>
                    </div>
                </div>
                <div className="contactAdress">
                <i class="fa-solid fa-envelope-open-text"></i>
                    <div className='desc'>
                        <h4>Email Address:</h4>
                        <p>Info@andamanoceantour.com</p>
                    </div>
                </div>
            </div>
        </div>)
}
export default ContactUsLeft

