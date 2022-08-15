import {useState} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Services from '../Components/Services';
import CallIcon from '@mui/icons-material/Call';
import SimpleMap from '../Components/Map';
import { blue } from '@mui/material/colors';

const ContactUs = ()=>{
    const[enteredName , setenteredName] = useState('');

    const changeNameHandler = (event) => {
        setenteredName(event.target.value);
    };

    const[enteredEmail , setenteredEmail] = useState('');

    const changeEmailHandler = (event) => {
        setenteredEmail(event.target.value);
    };

    const[enteredPhoneno , setenteredPhoneno] = useState('');

    const changePhonenoHandler = (event) => {
        setenteredPhoneno(event.target.value);
    };

    const[enteredDate , setenteredDate] = useState('');

    const changeDateHandler = (event) => {
        setenteredDate(event.target.value);
    };

    const[enteredPerson , setenteredPerson] = useState('');

    const changePersonHandler = (event) => {
        setenteredPerson(event.target.value);
    };

    const addHandler = (event) => {
        event.preventDefault();

        const submitObj = {

            Name:enteredName,
            Email:enteredEmail,
            phoneno:enteredPhoneno,
            Date:enteredDate,
            Person:enteredPerson
        };

    };
    return(
        <>
            <Header/>
            <Services item={{heading:"Contact Us" , icon:<CallIcon sx={{ fontSize: 80, color: blue[700] }}/> , info:"Our team would love to create a package for you!"}} />
            <div className='flex mt-10'>
                <form className="flex flex-col" onSubmit={addHandler}>
                    <input type ="text" value={enteredName} onChange={changeNameHandler} placeholder='Your Name'/>
                    <input type="email" value={enteredEmail} onChange={changeEmailHandler} placeholder='Your E-mail'/>
                    <input type="text" value={enteredPhoneno} onChange={changePhonenoHandler} placeholder='Your Phone No.'/>
                    <input type="date"  value={enteredDate} onChange={changeDateHandler}/>
                    <input type="number" placeholder='0' value={enteredPerson} onChange={changePersonHandler}/>
            
                    <button className='p-2 rounded-md w-20'>Submit</button>

                </form>
                <SimpleMap/>
            </div>
            
            <Footer/>
        </>
    )

}
export default ContactUs;