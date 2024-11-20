import React from 'react';
import Home from './Home/Home';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Couress from './courses/Couress';
import Signup from './compontents/Signup';
import { useAuth } from './context/Authprovider';
import Details from './compontents/Details';
import Example from './compontents/cartPage';
import Contact from './compontents/Contact';
import About from './compontents/About';
import PaymentGateway from './compontents/payment';
import { ToastContainer } from 'react-toastify';
import TST from './compontents/toast';
import TST2 from './compontents/ts2';
import AdminData from './compontents/admin';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
    {/* <BrowserRouter> */}
    <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser ? <Couress /> : <Navigate to="/signup" />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/details" element={<Details />} />
        <Route path='/cartpage' element={<Example />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/admin' element={<AdminData/>} />
        <Route path='/payment' element={<PaymentGateway/>} />
        <Route path='/toast' element={<TST/>} />
        <Route path='/ts2' element={<TST2/>} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
