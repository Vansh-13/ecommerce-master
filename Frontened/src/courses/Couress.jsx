import React from 'react'
import Navbar from '../compontents/Navbar'
import Footer from '../compontents/Footer'
import Course from '../compontents/Course'

function Couress() {
  return (
    <div>
      <Navbar/>
      <div className=' min-h-screen mt-'>  <Course/></div>
    
      <Footer/>
    </div>
  )
}

export default Couress
