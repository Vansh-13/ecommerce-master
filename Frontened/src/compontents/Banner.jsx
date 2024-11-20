
import React from 'react';
import { FaShoppingCart, FaTshirt } from 'react-icons/fa';  
import clothesImage from '/public/ii.jpg';  
import { motion } from 'framer-motion';  
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate();
  
  const handleShopNow = () => {
    navigate("/course");
  }

  const handleExploreNow = () => {
  
    window.open('https://www.instagram.com/doonsisters_3/profilecard/?igsh=MW1xamlnNW5kMTFoZg==', '_blank');
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6 md:px-16 z-10">
        <div className="space-y-8 md:space-y-12 max-w-2xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold tracking-wide leading-tight md:leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Unveil Your Style with <span className="text-yellow-400">FashionHub</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Discover the latest trends in fashion with our exclusive collection designed for style enthusiasts like you. Upgrade your wardrobe with the best in modern fashion, comfort, and quality.
          </motion.p>

          <div className="flex justify-center items-center space-x-6">
            <motion.button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-full text-lg transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              onClick={handleShopNow}
            >
              <FaShoppingCart className="inline-block mr-2" />
              Shop Now
            </motion.button>

            <motion.button 
              className="border-2 border-white hover:border-yellow-500 text-white py-3 px-6 rounded-full text-lg transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              onClick={handleExploreNow}
            >
              <FaTshirt className="inline-block mr-2" />
              Explore Now
            </motion.button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <img
          src={clothesImage}
          alt="Clothing Collection"
          className="w-full h-full object-cover object-center opacity-30 transition duration-500 transform hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-40"></div>
    </div>
  );
}

export default Banner;
