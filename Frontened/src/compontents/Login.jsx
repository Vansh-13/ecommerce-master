import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {
  const [isOpen, setIsOpen] = useState(true); 
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      console.log(res.data);
      if (res.data) {
        // alert("Login successful");
        toast.success("Login successful",{
          position: "top-center",
        });
        localStorage.setItem("User", JSON.stringify(res.data));
        setIsOpen(false); 
      }
    } catch (error) {
      // setErrorMessage(error.response?.data?.message || "An error occurred"); // Set error message
      toast.error(`${error.response?.data?.message}`,{
        position:"top-center",
      })
    }
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className='dark:bg-slate-900 dark:text-black'>
      {isOpen && (
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box p-7 h-120">
            <form onSubmit={handleSubmit(onSubmit)}>
              <button type="button" onClick={closeDialog} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              <h3 className="font-bold text-lg">Login</h3>
              <br />
              {errorMessage && <span className="text-red-500">{errorMessage}</span>} {/* Display error message */}
              <label htmlFor="email">Email</label>
              <br />
              <input 
                type='email' 
                id="email" 
                placeholder='Enter your email...' 
                className='input input-bordered w-full' 
                {...register('email', { required: true })} 
              />
              {errors.email && <span className="text-red-500">Email is required</span>}
              <br /><br />
              <label htmlFor="password">Password</label>
              <br />
              <input 
                type='password' 
                id="password" 
                placeholder='Enter your password...' 
                className='input input-bordered w-full' 
                {...register('password', { required: true })} 
              />
              {errors.password && <span className="text-red-500">Password is required</span>}
              <br /><br />
              <div className='flex-row md:flex justify-between'>
                <button type="submit" className="btn w-35 bg-blue-600 text-white rounded-md p-3">LOG IN</button>
                <p className='m-3 p-2'>Not registered? <a href='/signup' className='text-blue-700 font-semibold underline'>Signup</a></p>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Login;