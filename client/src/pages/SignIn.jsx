import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from '../redux/user/userSlice.js';


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('/api/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto mt-16' style={{ backgroundImage: "url('https://images.pexels.com/photos/754444/pexels-photo-754444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
      <h1 className='text-3xl text-center font-semibold my-7 text-white font-bold'>🥅Sign In🥅</h1>
      <div className='flex gap-2 mb-5 mt-3 justify-center'>
        <p className='text-white'>Dont have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-400'>Sign up ⚽</span>
        </Link>
      </div>
      {error && <p className='text-red-500 bg-red-200 p-3 my-5 rounded-lg text-center'>{error}</p>}
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className='bg-black text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>

      </form>
     
    </div>
  );
}