import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./QueryForm.css";
import { TextField,Button } from "@mui/material";
import { Container } from "postcss";
const QueryForm = (props) => {
  const [enteredName, setenteredName] = useState("");

  const changeNameHandler = (event) => {
    setenteredName(event.target.value);
  };

  const [enteredEmail, setenteredEmail] = useState("");

  const changeEmailHandler = (event) => {
    setenteredEmail(event.target.value);
  };

  const [enteredPhoneno, setenteredPhoneno] = useState("");

  const changePhonenoHandler = (event) => {
    setenteredPhoneno(event.target.value);
  };

  const [enteredDate, setenteredDate] = useState("");

  const changeDateHandler = (event) => {
    setenteredDate(event.target.value);
  };

  const [enteredPerson, setenteredPerson] = useState("");

  const changePersonHandler = (event) => {
    setenteredPerson(event.target.value);
  };

  const addHandler = (event) => {
    event.preventDefault();

    const submitObj = {
      Name: enteredName,
      Email: enteredEmail,
      phoneno: enteredPhoneno,
      Date: enteredDate,
      Person: enteredPerson,
    };
  };

  return (
    <>
      <div className="backdrop" onClick={props.closeHandler} />
    
      <form
        onSubmit={addHandler}
        style={{ width:'640px' }}
        className="modal fixed h-screen max-w-sm top-0 bg-white flex flex-col justify-center  gap-10 p-8 right-0 z-100"
      >
        <div className="flex justify-center" onClick={props.closeHandler}>
          <CloseIcon />
          </div>
        <div className="flex gap-3">
          <TextField
            fullWidth
            label="Name"
            type="text"
            value={enteredName}
            onChange={changeNameHandler}
            placeholder="Your Name"
          />
        </div>
        <div className="flex gap-3">
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={enteredEmail}
            onChange={changeEmailHandler}
            placeholder="Your E-mail"
          />
        </div>
        <div className="flex gap-3">
          <TextField
            fullWidth
            label="Phone"
            type="text"
            value={enteredPhoneno}
            onChange={changePhonenoHandler}
            placeholder="Your Phone No."
          />
        </div>
        <div className="flex gap-3">
          <TextField
            fullWidth
            type="date"
            value={enteredDate}
            onChange={changeDateHandler}
            placeholder="Date of Travel"
          />
        </div>
        <div className="flex gap-3">
          <TextField
            fullWidth
            label="Number of People"
            type="number"
            placeholder="0"
            value={enteredPerson}
            onChange={changePersonHandler}
          />
        </div>
        <Button variant="contained" sx={{ backgroundColor: "#EA580C" }}>
          Submit
        </Button>
      </form>
      
    </>
  );
};

export default QueryForm;
