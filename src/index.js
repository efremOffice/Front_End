import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./AllPages/Home";
import Login from "./AllPages/Login";
import Registration from "./AllPages/Registration";
import SearchHouse from "./AllPages/SearchHouse";
import AddHouse from "./AllPages/AddHouse";
import AboutUs from "./AllPages/AboutUs";
import ContactUs from "./AllPages/ContactUs";
import ViewHouse from "./AllPages/ViewHouse";
import ResetPassword from "./AllPages/ResetPassword"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/sigup" element={<Registration />}/>
        <Route path="/searchHouse" element={<SearchHouse />}/>
        <Route path="/addHouse" element={<AddHouse />}/>
        <Route path="/aboutUs" element={<AboutUs />}/>
        <Route path="/contactUs" element={<ContactUs />}/>
        <Route path="/houseDetail" element={<ViewHouse />}/>
        <Route path="/resetPassword" element={<ResetPassword />}/>
        
       </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
