// import React, { useState, useEffect } from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import axios from 'axios';
// import Cards from './Cards';
// import { FaRocket } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion'; 

// function FreeBook() {
//     const [book, setBook] = useState([]);
//     const navigate = useNavigate();  

//     useEffect(() => {
//         const getBook = async () => {
//             try {
//                 const res = await axios.get("https://fakestoreapi.com/products");
//                 setBook(res.data.filter((data) => data.category === "men's clothing"));
//             } catch (error) {
//                 console.log("Error fetching books: ", error);
//             }
//         };
//         getBook();
//     }, []);

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true,
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             }
//         ]
//     };

  
//     const handleCardClick = (id) => {
//         navigate(`/details/${id}`);  
//     };

//     return (
//         <div className="bg-gray-50 py-20 px-8">
//             <div className="max-w-screen-xl mx-auto text-center">
              
//                 <motion.div
//                     initial={{ opacity: 0, y: -50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="mb-8"
//                 >
//                     <FaRocket className="text-6xl mb-4 text-indigo-500 animate__animated animate__bounceIn" />
//                     <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider leading-tight">Explore the Latest Fashion Collections!</h1>
//                     <p className="text-lg md:text-xl mt-4 opacity-80">
//                         Discover a curated selection of products that bring comfort, style, and affordability into your wardrobe.
//                     </p>
//                 </motion.div>

              
//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1 }}
//                     className="mt-0" 
//                 >
//                     <Slider {...settings}>
//                         {book.map((item) => (
//                             <div className="px-4" key={item.id} onClick={() => handleCardClick(item.id)}>
//                                 <Cards item={item} />
//                             </div>
//                         ))}
//                     </Slider>
//                 </motion.div>
//             </div>
//         </div>
//     );
// }

// export default FreeBook;
import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import { FaRocket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import clothesData from './list.json';  // Import the JSON data

function FreeBook() {
    const [clothes, setClothes] = useState([]);  // Use local state
    const navigate = useNavigate();  

    useEffect(() => {
        // Set the local data to the state
        setClothes(clothesData);
    }, []);  // Empty array ensures this runs only once on mount

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const handleCardClick = (id) => {
        navigate(`/details/${id}`);  
    };

    return (
        <div className="bg-gray-50 py-20 px-8">
            <div className="max-w-screen-xl mx-auto text-center">
              
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <FaRocket className="text-6xl mb-4 text-indigo-500 animate__animated animate__bounceIn" />
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider leading-tight">Explore the Latest Fashion Collections!</h1>
                    <p className="text-lg md:text-xl mt-4 opacity-80">
                        Discover a curated selection of products that bring comfort, style, and affordability into your wardrobe.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-0" 
                >
                    <Slider {...settings}>
                        {clothes.map((item) => (
                            <div className="px-4" key={item.id} onClick={() => handleCardClick(item.id)}>
                                <Cards item={item} />
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </div>
    );
}

export default FreeBook;
