import React from 'react';
import { FaShoppingBag, FaHandsHelping, FaTshirt } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

function About() {
  return (
    <>
      <Navbar />


      <section
        id="about"
        className="relative bg-gradient-to-r from-blue-50 to-teal-50 py-20"
      >
        <div className="max-w-screen-xl mx-auto px-6 sm:px-10 text-center">
          <motion.h2
            className="text-5xl font-extrabold text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Essence
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            At ClothHaven, we don’t just sell clothes, we curate an experience of self-expression. Our passion is to provide trendy, stylish, and comfortable clothing that makes you feel confident in any situation.
          </motion.p>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            What began with a single idea—to make affordable, high-quality fashion for all—has now turned into a journey of creativity and self-expression. Our mission is simple: empower people through clothing that feels as good as it looks.
          </motion.p>
        </div>
       
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('https://your-image-url.com/brand-story-image.jpg')",
          }}
        ></div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-semibold text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            What Makes Us Different
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We’re committed to creating a premium shopping experience that is accessible to everyone. Whether it’s top-notch fabrics, affordable pricing, or exceptional service, our values shine through in everything we do.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 px-6 sm:px-10">
          
          <motion.div
            className="flex flex-col items-center p-8 bg-white rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaShoppingBag className="text-5xl text-indigo-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Affordable Fashion</h4>
            <p className="text-gray-600 text-sm">
              Fashion should be for everyone. We believe in making stylish, high-quality clothing available to all without breaking the bank.
            </p>
          </motion.div>

         
          <motion.div
            className="flex flex-col items-center p-8 bg-white rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaTshirt className="text-5xl text-pink-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h4>
            <p className="text-gray-600 text-sm">
              Only the best fabrics make it to our collections, ensuring that every piece you wear feels luxurious and lasts for years to come.
            </p>
          </motion.div>

          
          <motion.div
            className="flex flex-col items-center p-8 bg-white rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaHandsHelping className="text-5xl text-yellow-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">Customer-Focused</h4>
            <p className="text-gray-600 text-sm">
              We prioritize our customers at every step—ensuring a seamless shopping experience from your first click to the final delivery.
            </p>
          </motion.div>
        </div>
      </section>

    
      <section
        id="mission"
        className="py-20 bg-gradient-to-r from-indigo-200 via-pink-100 to-yellow-100"
      >
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our mission is to empower individuals to feel beautiful and confident in their clothing. By embracing diversity, sustainability, and top-tier craftsmanship, we aim to bring everyone the fashion they deserve.
          </p>
        </div>
        <div className="text-center">
          <motion.a
            href="#shop"
            className="inline-block px-8 py-3 bg-pink-600 text-white font-semibold rounded-full text-lg hover:bg-pink-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Explore Our Collections
          </motion.a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
