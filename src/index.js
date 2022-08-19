import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
        <Helmet>
            <meta
            name="description"
            content="Amazing Tours, Amazing Packages at Amazing price!"
            />
           <meta
        name="Keywords"
        content="tour,Andaman,ocean tours,ocean,tours, andaman tours, Andaman ocean tours,andaman packages , andamantourpackages , packages , portblair tour , portblair package , havelock tour ,havelock package , neil package , neil tours , andaman honeymoon package , andaman family package,portblair tour package , havelock tour package, neil tour package
        ,island tour  , honeymoon island,andaman beaches tuour,andaman island visit , andaman holidays,amdaman trip , beach trip ,  andaman beach trip ,  portblair trip , havelock trip , portblair trip , neil island trip ,
        "
        />
        </Helmet>
        <App />
        </BrowserRouter> 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
