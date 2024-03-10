import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
export default function Contact({ listing }) {
  const { currentUser } = useSelector((state) => state.user);
  const [message, setMessage] = useState('');
  const onChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      {currentUser && (
        <div className='flex flex-col gap-2'>
          <p>
            Send the message from <span className='font-semibold'>{currentUser.username}</span>{' '}
            to{' '}
            <span className='font-semibold'>{listing.username}</span>
          </p>
          <textarea
            name='message'
            id='message'
            rows='2'
            value={message}
            onChange={onChange}
            placeholder='Enter your message here...'
            className='w-full border p-3 rounded-lg'
          ></textarea>

          <Link
          to={`mailto:${listing.email}?subject=To contact  ${listing.username}&body=${message}`}
          className='bg-black text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
          >
            Send Message          
          </Link>
        </div>
      )}
    </>
  );
}