import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { productsCreate } from "../../Store/Slices/adminSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const AdminData = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "", 
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result); 
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.description || !formData.image) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    const priceValue = parseFloat(formData.price);
    if (isNaN(priceValue)) {
      toast.error("Please enter a valid price.");
      return;
    }

    const productData = {
      ...formData,
      price: priceValue, 
    };

    dispatch(productsCreate(productData));

    toast.success("Product added successfully!");

    setFormData({ name: "", price: "", description: "", image: "", category: "" });
    setImagePreview(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="w-full max-w-2xl p-8 bg-white rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Add New Product</h2>
        
        <form onSubmit={handleSubmit}>
      
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Enter product name"
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-lg font-medium text-gray-700">Price (INR)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              placeholder="Enter product price"
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-lg font-medium text-gray-700">Product Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              placeholder="Write a product description"
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-lg font-medium text-gray-700">Product Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-4 border border-gray-300 rounded-lg mt-2 cursor-pointer"
              required
            />
          </div>

          <div className="mb-4 text-center">
            {imagePreview ? (
              <img src={imagePreview} alt="Product Preview" className="w-full h-64 object-cover rounded-lg shadow-md transition duration-300 transform hover:scale-105" />
            ) : (
              <p className="text-gray-500">Image will appear here after upload.</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-lg font-medium text-gray-700">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kids">Kids</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gradient-to-l transition-all duration-300 transform hover:scale-105"
            >
              Add Product
            </button>
          </div>
        </form>

        
        <ToastContainer position="bottom-left" autoClose={3000} />
      </div>
    </div>
  );
};

export default AdminData;
