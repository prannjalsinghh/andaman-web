import {useState} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Services from '../Components/Services';
import CallIcon from '@mui/icons-material/Call';
import SimpleMap from '../Components/Map';
import { blue } from '@mui/material/colors';

import { TextField,Container,Button } from '@mui/material';
import ContactUsLeft from '../Components/ContactUsLeft';
import Banner from '../Components/Banner';
const styles = {
  "input-label": {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    color: "red",
  },

  input: {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "blue",
    },
  },
};



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
    return (
      <>
        <Header />
        <Banner url="https://img.freepik.com/premium-photo/bleak-stone-staircase-jungle-old-presbyterian-church-ruins-ross-island-port-blair-andaman-nicobar-india-old-abandoned-staircase-entrance-abandoned-building-dilapidated-house_431724-2549.jpg?w=2000"/>
        <Services
          item={{
            heading: "Contact Us",
            icon: <CallIcon  sx={{ fontSize: 80, color: blue[700] }} />,
            info: "Our team would love to create a package for you!",
          }}
        />
        <div className="flex flex-col items-center sm:flex-row gap-2">
          <ContactUsLeft/>
          <form
            className="flex flex-col sm:max-w-screen-md max-w-sm p-5"
            style={{width:"1000px"}}
            onSubmit={addHandler}
          >
            <TextField
              variant="filled"
              sx={{ mb: 2 }}
              type="text"
              value={enteredName}
              onChange={changeNameHandler}
              placeholder="Your Name"
              // make placeholder darker
              InputProps={{
                style: {
                    color: "black",
                },
              }}
            />
            <TextField
              variant="filled"
              sx={{ mb: 2 }}
              type="email"
              value={enteredEmail}
              onChange={changeEmailHandler}
              placeholder="Your E-mail"
            />
            <TextField
              variant="filled"
              sx={{ mb: 2 }}
              type="text"
              value={enteredPhoneno}
              onChange={changePhonenoHandler}
              placeholder="Your Phone No."
            />
            <TextField
              variant="filled"
              sx={{ mb: 2 }}
              type="date"
              value={enteredDate}
              onChange={changeDateHandler}
              placeholder="Date of Travel"
            />
            <TextField
              variant="filled"
              sx={{ mb: 2 }}
              type="number"
              placeholder="No of Person"
              value={enteredPerson}
              onChange={changePersonHandler}
            />

            <Button
              variant="contained"
              className="p-2 rounded-md w-20"
              fullWidth
              sx={{ backgroundColor: "#EA580C" }}
            >
              Submit
            </Button>
          </form>
          
          
        </div>

        <Footer />
      </>
    );
  

}
export default ContactUs;