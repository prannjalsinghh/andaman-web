import React, { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./QueryForm.css";
import { TextField,Button } from "@mui/material";
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'notistack';

const QueryForm = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const form = useRef()
  const addHandler = (event) => {
    event.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
          enqueueSnackbar("success" , {variant:"success"});
          console.log(result.text);
          form.current.reset();

          
      }, (error) => {
          console.log(error.text);
      });

  };


const typeChangeHandler = (event)=>{

}
  return (
    <>
      <div className="backdrop" onClick={props.closeHandler} />
    
      <form
      ref={form}
        onSubmit={addHandler}
        style={{ width:'640px' }}
        className="modal fixed h-full max-w-sm top-0 bg-white flex flex-col gap-6  p-8 pt-0 pb-0 right-0 z-100">
      
        <div className="flex justify-center" onClick={props.closeHandler}>
          <CloseIcon />
          </div>
        <h2 className="text-center text-xl font-bold text-orange-700">Send us your requirements, We'll get back to you in 30 minutes!</h2>
        <div className="flex gap-3">
          <TextField  required={true}
            fullWidth
            label="Name"
            type="text"
            name='user-name'
            placeholder="Your Name"
          />
        </div>
        <div className="flex gap-3">
          <TextField  required={true}
            fullWidth
            label="Email"
            type="email"
            name='user-email'
            placeholder="Your E-mail"
          />
        </div>
        <div className="flex gap-3">
          <TextField  required={true}
            fullWidth
            label="Phone"
            type="text"
            name='user-phone'
            placeholder="Your Phone No."
          />
        </div>
        <div className="flex gap-3">
          <TextField  required={true}
            fullWidth
            type="text"
            name='travel-date'
            placeholder="Date of Travel"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
           
          />
        </div>
        <div className="flex gap-3">
          <TextField  required={true}
            fullWidth
            label="Number of People"
            type="number"
            placeholder="0"
            InputProps={{ inputProps: { min: 1 } }}
            name='user-numberOfPeople'
          />
        </div>
        <Button variant="contained" type='submit' sx={{ backgroundColor: "#EA580C" }}>
          Submit
        </Button>
      </form>
      
    </>
  );
};

export default QueryForm;
