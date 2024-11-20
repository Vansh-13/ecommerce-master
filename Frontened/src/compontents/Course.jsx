import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Course() {
  const [book, setBook] = useState([]);
  const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   const getBook = async () => {
  //     try {
  //       const res = await axios.get("https://fakestoreapi.com/products");
  //       console.log("Data fetched:", res.data);
  //       setBook(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBook();
  // }, []);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:4001/api/admindata");
        setProduct(response.data);
      } catch (err) {
        console.error("error fetching data", err);
      }
    };
    fetchProduct();
  }, []);
  console.log("yeh ", product[0]);


  return (
    <div className='mt-20 max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
    
      <div className='flex flex-col items-center justify-center text-center'>
        <h1 className='hero-heading'>
          Welcome to ClothHaven! <span className='text-red-900'>Explore Fashion Like Never Before!</span>
        </h1>
        <p className='mt-4 text-gray-700 md:text-lg text-center max-w-xl mx-auto'>
          Discover your perfect style with our curated collection of trendy clothes. Shop now and elevate your wardrobe!
        </p>
        <Link to="/collections">
          <button className='mt-6 bg-green-600 text-white rounded-md px-6 py-2 hover:bg-green-900 transition duration-200'>
            Explore Our Collection
          </button>
        </Link>
      </div>

     
      <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {product.map((item) => (
          <div className="flex justify-center" key={item.id}>
            <Cards item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
