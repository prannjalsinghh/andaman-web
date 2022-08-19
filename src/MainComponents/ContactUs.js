import {useState,useRef} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Services from '../Components/Services';
import CallIcon from '@mui/icons-material/Call';
import SimpleMap from '../Components/Map';
import { blue } from '@mui/material/colors';
import { useSnackbar } from 'notistack';
import { TextField,Container,Button } from '@mui/material';
import ContactUsLeft from '../Components/ContactUsLeft';
import Banner from '../Components/Banner';
import emailjs from '@emailjs/browser';

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
  const form = useRef();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();


    const addHandler = (event) => {
        event.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
          .then((result) => {
              enqueueSnackbar("Your response has been submitted!" , {variant:"success"});
              console.log(result.text);
              form.current.reset();

              
          }, (error) => {
              console.log(error.text);
          });



    };
    return (
      <>
        <Header />
        {/* <Banner url="https://img.freepik.com/premium-photo/bleak-stone-staircase-jungle-old-presbyterian-church-ruins-ross-island-port-blair-andaman-nicobar-india-old-abandoned-staircase-entrance-abandoned-building-dilapidated-house_431724-2549.jpg?w=2000"/> */}
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
            ref={form}
            onSubmit={addHandler}
          >
            <TextField
              required={true}
              variant="filled"
              sx={{ mb: 2 }}
              type="text"
              name='user-name'
              placeholder="Your Name"
              // make placeholder darker
              InputProps={{
                style: {
                    color: "black",
                },
              }}
            />
            <TextField required={true}
              variant="filled"
              sx={{ mb: 2 }}
              type="email"
              name='user-email'
              placeholder="Your E-mail"
            />
            <TextField  required={true}
              variant="filled"
              sx={{ mb: 2 }}
              type="text"
              name='user-phone'
              placeholder="Your Phone No."
            />
            <TextField  required={true}
              variant="filled"
              sx={{ mb: 2 }}
              type="date"
              name='travel-date'
              placeholder="Date of Travel"
            />
            <TextField  required={true}
              variant="filled"
              sx={{ mb: 2 }}
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
              placeholder="No of Person"
              name='user-numberOfPeople'
            />

            <Button
              variant="contained"
              type='submit'
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