import React from 'react';
import { FaInstagram } from 'react-icons/fa'; 
import { IoLogoYoutube } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from "./Navbar";
import Footer from './Footer';
import { motion } from 'framer-motion';

function Contact() {
  const handleExploreNow = () => {
    
    window.open('https://www.instagram.com/doonsisters_3/profilecard/?igsh=MW1xamlnNW5kMTFoZg==', '_blank');
  }
  return (
    <>
      <Navbar />
      
      <section id='contact' className="max-w-screen-xl mx-auto px-4 md:px-8 py-16 bg-white">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            We'd Love to Hear From You!
          </motion.h2>
          <p className="text-lg text-gray-500">
            Have any questions or feedback? Reach out to us below, and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
          <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <motion.div
              className="contact-info p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Let's Get in Touch</h3>
              <p className="text-gray-600 mb-6">We’re available via these channels. Feel free to reach out to us!</p>

           
              <div className="space-y-6">
                <div className="information flex items-center">
                  <FaMapMarkerAlt className="w-6 h-6 mr-3 text-teal-600 transition-transform duration-300 transform hover:scale-110" />
                  <p className="text-gray-700">Dharmawala, Herbertpur, Dehradun (UK) 248142, India</p>
                </div>
                <div className="information flex items-center">
                  <MdEmail className="w-6 h-6 mr-3 text-teal-600 transition-transform duration-300 transform hover:scale-110" />
                  <p className="text-gray-700">sakshigakhar16@gmail.com</p>
                </div>
                <div className="information flex items-center">
                  <FaPhoneAlt className="w-6 h-6 mr-3 text-teal-600 transition-transform duration-300 transform hover:scale-110" />
                  <p className="text-gray-700">+91+ 9720812364</p>
                </div>
              </div>

            
              <div className="social-media mt-6">
                <p className="text-gray-600 mb-2">Follow us on:</p>
                <div className="flex space-x-6" onClick={handleExploreNow}>
                  <a href="#" aria-label="Instagram">
                    <FaInstagram className="text-teal-600 hover:text-teal-800 transition-transform duration-300 transform hover:scale-125" />
                  </a>
                  <a href="#" aria-label="YouTube">
                    <IoLogoYoutube className="text-red-600 hover:text-red-800 transition-transform duration-300 transform hover:scale-125" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        
          <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <motion.div
              className="contact-form p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-semibold text-teal-600 mb-4">Send Us a Message</h3>
              <form action="index.html" autoComplete="off" className="space-y-6">
              
                <div className="relative">
                  <input type="text" name="name" className="border-b-2 w-full p-4 text-gray-900 bg-transparent outline-none transition duration-300 focus:border-teal-600" required />
                  <label className="absolute top-0 left-0 transform -translate-y-3 text-gray-500 transition-all duration-300">Your Name</label>
                </div>

                
                <div className="relative">
                  <input type="email" name="email" className="border-b-2 w-full p-4 text-gray-900 bg-transparent outline-none transition duration-300 focus:border-teal-600" required />
                  <label className="absolute top-0 left-0 transform -translate-y-3 text-gray-500 transition-all duration-300">Your Email</label>
                </div>

               
                <div className="relative">
                  <input type="tel" name="phone" className="border-b-2 w-full p-4 text-gray-900 bg-transparent outline-none transition duration-300 focus:border-teal-600" required />
                  <label className="absolute top-0 left-0 transform -translate-y-3 text-gray-500 transition-all duration-300">Your Phone</label>
                </div>

                <div className="relative">
                  <textarea name="message" className="border-b-2 w-full p-4 text-gray-900 bg-transparent outline-none transition duration-300 focus:border-teal-600 h-24" required></textarea>
                  <label className="absolute top-0 left-0 transform -translate-y-3 text-gray-500 transition-all duration-300">Your Message</label>
                </div>

              
                <input type="submit" value="Send Message" className="bg-teal-600 text-white w-full py-3 rounded-lg hover:bg-teal-700 transition duration-300 cursor-pointer" />
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
