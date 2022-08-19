import React, { useEffect, useRef, useState } from "react";
import "./SearchBar.css";
import emailjs from '@emailjs/browser';

const SearchBar = (props) => {
  const form= useRef();
  const [date,setDate] =useState();

  useEffect(()=>{
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10){
      dd='0'+dd
    } 
    if(mm<10){
      mm='0'+mm
  } 

today = dd +'-' +mm+'-' + yyyy;
setDate(today);
console.log(date)
  },[])

  const addHandler = (event) => {
    event.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              form.current.reset();
              

          }, (error) => {
              console.log(error.text);
          });

  };

  return (
    <form
    ref={form}
      onSubmit={addHandler}
      className={`searchBar hidden sm:flex p-5 gap-5 justify-around sm:p-10 w-11/12  items-center mx-auto z-20 ${props.class}`}
      style={{ background: "rgb(1,155,167)" }}
    >
      <input
        type="text"
        name='user-name'
        placeholder="Your Name"
      />
      <input
        type="email"
        name='user-email'
        placeholder="Your E-mail"
      />
      <input
        type="text"
        name='user-phone'
        placeholder="Your Phone No."
      />
      <input type="date" name='travel-date' min={date}/>
      <input
        type="number"
        placeholder="0"
        min="1"
        name='user-numberOfPeople'
      />

      <button className="p-2 rounded-md w-20" type='submit'>Submit</button>
    </form>
  );
};

export default SearchBar;
