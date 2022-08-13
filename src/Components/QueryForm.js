import React, { useState } from 'react';

const QueryForm = () => {
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
        <form onSubmit={addHandler}>
            <div>
                <label>Name</label>
                <input type ="text" value={enteredName} onChange={changeNameHandler} placeholder='Your Name'/>
            </div>
            <div>
                <label>E-Mail</label>
                <input type="email" value={enteredEmail} onChange={changeEmailHandler} placeholder='Your E-mail'/>
            </div>
            <div>
                <label>Phone No.</label>
                <input type="text" value={enteredPhoneno} onChange={changePhonenoHandler} placeholder='Your Phone No.'/>
            </div>
            <div>
                <label>Date of Travel</label>
                <input type="date"  value={enteredDate} onChange={changeDateHandler}/>
            </div>
            <div>
                <label>No. of People</label>
                <input type="number" placeholder='0' value={enteredPerson} onChange={changePersonHandler}/>
            </div>
            <button>Submit</button>
        </form>
    )

};

export default QueryForm;