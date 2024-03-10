import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    if (
      
      
      e.target.id === 'admin'
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto' style={{backgroundImage: "url('https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
    <h1 className='text-3xl text-center font-semibold mt-7 text-white font-bold'>Sign Up</h1>
    <div className='flex gap-2 mb-5 mt-3 justify-center'>
      <p className='text-white'>Have an account?</p>
      <Link to={'/sign-in'}>
        <span className='text-blue-400'>Sign in</span>
      </Link>
    </div>
    {error && <p className='text-red-500 bg-red-200 p-3 my-5 rounded-lg text-center'>{error}</p>}
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input
        type='text'
        placeholder='Username'
        className='border p-3 rounded-lg'
        id='username'
        required
        onChange={handleChange}
      />
      <input
        type='email'
        placeholder='Email'
        className='border p-3 rounded-lg'
        id='email'
        required
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='Password'
        className='border p-3 rounded-lg'
        id='password'
        required
        onChange={handleChange}
      />
      <div className='flex justify-between flex-wrap gap-4'> 
      <input
        type='text'
        placeholder='Gender'
        className='border p-3 rounded-lg'
        id='gender'
        required
        onChange={handleChange}
      />
       <input
        type='number'
        placeholder='Age'
        min='5'
        max='50'
        className='border p-3 rounded-lg'
        id='age'
        required
        onChange={handleChange}
      />
      </div>
       <div className='flex justify-between flex-wrap gap-4'>
       <input
        type='text'
        placeholder='City'
        className='border p-3 rounded-lg'
        id='city'
        required
        onChange={handleChange}
      />
       <input
        type='text'
        placeholder='Sports'
        className='border p-3 rounded-lg'
        id='sports'
        required
        onChange={handleChange}
      />
       </div>
       <div className='flex justify-between flex-wrap gap-4'>
       <input
        type='Number'
        placeholder='Phone Number'
        className='border p-3 rounded-lg'
        id='number'
        required
        onChange={handleChange}
      />
      <div className='flex gap-2 items-center'>
        <p>Admin</p>
        <input
        type='checkbox'
        className='border p-3 rounded-lg w-7 h-7'
        id='admin'
         checked={formData.admin}
        onChange={handleChange}
      />
      </div>
       
       </div>
      <button
        disabled={loading}
        className='bg-black text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
      >
        {loading ? 'Loading...' : 'Sign Up'}
      </button>
    
    </form>
    
   
  </div>
  )
}
