import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseCart, getTotal, removeFromCart } from "../../Store/Slices/cartSlices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import pre from "/public/pre.png";
import images from "/public/images.png";
import Footer from "./Footer";

function CartPage() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleBuy = () => {
    navigate("/payment");
    toast.info("Proceeding to payment", {
      position: "top-right",
    });
  };

  const handleContinue = () => {
    navigate("/course");
  };

  return (
    <>
      <div className="navbar py-3 px-6 shadow-lg text-white bg-gradient-to-r">
        <div className="navbar-start flex items-center space-x-4">
          <button
            className="text-white text-xl"
            onClick={() => navigate('/course')}
          >
            <i className="fas fa-arrow-left text-lg"></i>
          </button>
          <span className="text-3xl font-bold cursor-pointer text-gray-800">
            <span className="text-blue-500">Cloth</span>
            <span className="text-yellow-500">Haven</span>
          </span>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          <img
            src={images}
            alt="Cloth Haven"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => navigate("/course")}
          />
          <img
            src={pre}
            alt="Cloth Haven"
            className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => navigate("/course")}
          />
        </div>
      </div>

      <div className="font-sans max-w-6xl mx-auto p-4 mt-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2 space-y-6">
            {cart.cartItems?.map((cartItem) => (
              <div className="flex gap-6 bg-white p-4 rounded-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
                <div className="flex gap-6 w-full">
                  <div className="w-32 h-32">
                    <img src={cartItem.image} className="w-full h-full object-cover rounded-md" alt={cartItem.title} />
                  </div>

                  <div className="flex flex-col justify-between w-full">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{cartItem.name}</h3>
                      <p className="text-sm text-gray-500 mt-2">Color: <span className="inline-block w-5 h-5 rounded-full" style={{ backgroundColor: cartItem.color }}></span></p>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4">
                        <button
                          className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full"
                          onClick={() => handleDecreaseCart(cartItem)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-white" viewBox="0 0 24 24">
                            <path d="M19 12H5V10H19V12Z"></path>
                          </svg>
                        </button>
                        <span className="font-bold text-lg">{cartItem.cartQuantity}</span>
                        <button
                          className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full"
                          onClick={() => handleIncreaseCart(cartItem)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-white" viewBox="0 0 24 24">
                            <path d="M19 12H5V10H19V12ZM19 8H5V6H19V8ZM19 16H5V14H19V16Z"></path>
                          </svg>
                        </button>
                      </div>

                      <div className="flex flex-col items-end">
                        <button
                          onClick={() => handleRemoveFromCart(cartItem)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                        <p className="text-lg font-semibold text-gray-800 mt-2">₹{cartItem.cartQuantity * cartItem.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 shadow-xl sticky top-20">
            <h3 className="text-xl font-semibold text-gray-800">Cart Summary</h3>
            <ul className="text-gray-700 mt-6 space-y-4">
              <li className="flex justify-between text-sm">Subtotal: <span className="font-bold">₹{cart.cartTotalAmount}</span></li>
              <li className="flex justify-between text-sm">Shipping: <span className="font-bold">₹2.00</span></li>
              <li className="flex justify-between text-sm">Tax: <span className="font-bold">₹4.00</span></li>
              <hr className="border-gray-300" />
              <li className="flex justify-between text-sm font-bold">Total: <span className="font-bold">₹{(cart.cartTotalAmount + 2 + 4).toFixed(2)}</span></li>
            </ul>

            <div className="mt-8 space-y-2">
              <button
                onClick={handleBuy}
                className="w-full py-3 text-lg font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Buy Now
              </button>
              <button
                onClick={handleContinue}
                className="w-full py-3 text-lg font-semibold bg-gray-100 text-gray-800 border border-gray-300 rounded-md hover:bg-gray-200 transition-colors"
              >
                Continue Shopping
              </button>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <img src="https://readymadeui.com/images/master.webp" alt="MasterCard" className="w-10" />
              <img src="https://readymadeui.com/images/visa.webp" alt="Visa" className="w-10" />
              <img src="https://readymadeui.com/images/american-express.webp" alt="American Express" className="w-10" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CartPage;
