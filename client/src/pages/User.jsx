import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from 'react-icons/fa';
import Contact from '../components/Contact';
// https://sabe.io/blog/javascript-format-numbers-commas#:~:text=The%20best%20way%20to%20format,format%20the%20number%20with%20commas.

export default function User() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
//   const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/user/user/${params.userId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main>
      {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && (
        <p className='text-center my-7 text-2xl'>Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div className='max-w-6xl mx-auto p-3'>
         
                <div
                  className='h-[550px] rounded-lg'
                  style={{
                    background: `url(${listing.avatar}) center no-repeat`,
                    backgroundSize: 'cover',
                  }}
                ></div>
          
          <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
            <p className='text-2xl font-semibold'>
              {listing.username}
            </p>
            <p className='flex items-center mt-3 gap-2 text-slate-600  text-sm'>
              <FaMapMarkerAlt className='text-green-700' />
              {listing.city}
            </p>
            <p className='text-slate-800'>
              <span className='font-semibold text-black'>Email - </span>
              {listing.email}
            </p>
            <p className='text-slate-800'>
              <span className='font-semibold text-black'>Gender - </span>
              {listing.gender}
            </p>
            <p className='text-slate-800'>
              <span className='font-semibold text-black'>Age - </span>
              {listing.age}
            </p>
            <p className='text-slate-800'>
              <span className='font-semibold text-black'>Phone Number - </span>
              {listing.number}
            </p>
            <p className='text-slate-800'>
              <span className='font-semibold text-black'>Sports - </span>
              {listing.sports}
            </p>
            {currentUser && listing._id!=currentUser._id && !contact &&  <button onClick={()=>setContact(true)} className='text-white bg-black rounded-lg p-3 uppercase hover:opacity-80'>Contact {listing.username}</button>}
          {contact && <Contact listing={listing}/>}
          </div>
        </div>
      )}
    </main>
  );
}