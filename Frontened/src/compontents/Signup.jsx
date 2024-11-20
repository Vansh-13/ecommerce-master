import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        setLoading(true);

        try {
            const res = await axios.post("http://localhost:4001/user/signup", userInfo);
            console.log(res.data);
            // alert("Signup successful");
            toast.success("Signup successful",{
                position:"top-center",
            })
            localStorage.setItem("User", JSON.stringify(res.data));
            navigate('/'); 
        } catch (error) {
          console.log(error);
            toast.error(`${error}`,{
                position:"top-center",
            })
            // alert(error.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className='flex h-screen items-center justify-center border-2'>
            <div className="modal-box p-7 h-120">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    <h3 className="font-bold text-lg">Signup</h3>
                    <br />
                    <label htmlFor="name">Name</label>
                    <br />
                    <input 
                        type='text' 
                        id="name" 
                        placeholder='Enter your name...' 
                        className='input input-bordered w-full' 
                        {...register('fullname', { required: true })} 
                    />
                    {errors.fullname && <span className="text-red-700">Name is required</span>}
                    <br /><br />

                    <label htmlFor="email">Email</label>
                    <br />
                    <input 
                        type='email' 
                        id="email" 
                        placeholder='Enter your email...' 
                        className='input input-bordered w-full' 
                        {...register('email', { required: true })} 
                    />
                    {errors.email && <span className="text-red-700">Email is required</span>}
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
                    {errors.password && <span className="text-red-700">Password is required</span>}
                    <br /><br />

                    <div className='flex-row md:flex justify-between'>
                        <button type="submit" className="btn w-35 bg-blue-600 text-white rounded-md p-3" disabled={loading}>
                            {loading ? 'Signing up...' : 'Signup'}
                        </button>
                        <p className='m-3 p-2'>Have an account? <Link to='/' className='text-blue-700 font-semibold underline'>Log in</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Signup;