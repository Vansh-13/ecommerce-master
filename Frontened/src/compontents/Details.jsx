import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Store/Slices/cartSlices';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import pre from "/public/pre.png";
import { toast } from 'react-toastify';

const Details = () => {
  const location = useLocation();
  const [item, setItem] = useState(null); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartTotalQuantity } = useSelector(state => state.cart);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  
  useEffect(() => {
    if (location.state?.item) {
      setItem(location.state.item); 
    } else {
      const storedItem = sessionStorage.getItem('item');
      if (storedItem) {
        setItem(JSON.parse(storedItem)); 
      }
    }
  }, [location.state]);

  
  const handleAddToCart = () => {
    if (item) {
      dispatch(addToCart(item));
      toast.success(`${item.title} added to cart`, { position: "bottom-left" });
      navigate("/cartpage");
    } else {
      toast.error('Item data is missing');
    }
  };

  // Format price in INR
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  };

  return (
    <>
      <div className={`navbar h-16 ${theme === "dark" ? "bg-gray-900" : "bg-white"} px-6 shadow-lg`}>
        <div className="navbar-start flex items-center space-x-4">
          <button
            className="text-white text-xl"
            onClick={() => navigate('/course')}
          >
            <FontAwesomeIcon icon={faCircleArrowLeft} className="text-lg" />
          </button>

          <Link to="/" className="text-2xl font-extrabold cursor-pointer text-pink-600">
            <span className="text-blue-500">Cloth</span>
            <span className="text-yellow-500">Haven</span>
          </Link>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          <Link to="/cartpage" className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" height={25} width={25} fill="currentColor">
              <path d="M0 24C0 10.7 10.7 0 24 0h69.5c22 0 41.5 12.8 50.6 32H536c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H202.6l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488a24 24 0 1 1 0 48H202.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5H24a24 24 0 1 1 0-48zM128 464a48 48 0 1 1 96 0 48 48 0 1 1-96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            {cartTotalQuantity > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                {cartTotalQuantity}
              </span>
            )}
          </Link>

          <img
            src={pre}
            alt="Pre Image"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-all duration-300"
            onClick={() => navigate("/course")}
          />
        </div>
      </div>

      <div className="container mx-auto p-6 mt-24">
        {item ? (
          <div className="flex flex-wrap justify-center md:justify-start">
            <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
              <img
                src={item?.image || 'https://via.placeholder.com/300'}
                alt={item?.name || 'Product Image'}
                className="object-cover w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>

            <div className="w-full md:w-2/3 md:pl-8 flex flex-col justify-start">
              <h1 className="text-2xl font-bold text-gray-800">{item?.name || 'Product Name'}</h1>
              <div className="text-yellow-500 mt-2">
                
              </div>
              <p className="text-lg text-gray-600 mt-4">{item?.description || 'No description available'}</p>
              <p className="text-xl font-semibold mt-6">{formatPrice(item?.price)}</p>

              <button
                onClick={handleAddToCart}
                className="mt-6 py-3 px-8 bg-gradient-to-r from-orange-400 to-red-500 text-white text-lg font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <p>Loading product details...</p> 
        )}
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Details;
