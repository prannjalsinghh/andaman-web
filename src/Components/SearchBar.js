import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = () => {
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
        <form onSubmit={addHandler} className='searchBar flex flex-row justify-around h-32 w-11/12 rounded-xl items-center mx-auto mt-[-5%] z-20' style={{background:"rgb(1,155,167)"}}>
            
                
                <input type ="text" value={enteredName} onChange={changeNameHandler} placeholder='Your Name'/>
                <input type="email" value={enteredEmail} onChange={changeEmailHandler} placeholder='Your E-mail'/>
                <input type="text" value={enteredPhoneno} onChange={changePhonenoHandler} placeholder='Your Phone No.'/>
                <input type="date"  value={enteredDate} onChange={changeDateHandler}/>
                <input type="number" placeholder='0' value={enteredPerson} onChange={changePersonHandler}/>
           
            <button className='p-2 rounded-md w-20'>Submit</button>
        </form>
    )

};

export default SearchBar;