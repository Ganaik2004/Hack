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
// https://sabe.io/blog/javascript-format-numbers-commas#:~:text=The%20best%20way%20to%20format,format%20the%20number%20with%20commas.

export default function Listing() {
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
        const res = await fetch(`/api/listing/get/${params.listingId}`);
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
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url} >
                <div
                  className='h-[550px]'
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: 'cover',
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
            <p className='text-2xl font-semibold'>
              {listing.name}
            </p>
            <p className='flex items-center mt-3 gap-2 text-slate-600  text-sm'>
              <FaMapMarkerAlt className='text-green-700' />
              {listing.address}
            </p>
          
            <p className='text-slate-800'>
              <span className='font-semibold text-black'>Description - </span>
              {listing.description}
            </p>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                  <p className='font font-semibold'>Starting Date</p>
                  {listing.startdate.split("T")[0]}
                </div>
                <div>
                <div className='flex gap-2 items-center'>
                  <p className='font font-semibold'>Ending Date</p>
                  {listing.enddate.split("T")[0]}
                </div>
                </div>
            </div>
            <div className='flex gap-2'>
               <p className='font font-semibold'>Enrollement Fees: ₹</p>
               {listing.enrollemantfees===0?"Free":listing.enrollemantfees}
            </div>
            <div className='flex gap-2'>
               <p className='font font-semibold'>Sport:-</p>
               {listing.sportsname}
            </div>
            <div className='border p-6 rounded-lg'>
                <form action="" className='flex flex-col gap-6'>
                    <input type="text" 
                    placeholder='Your name'
                    className='border p-4 rounded-lg'

                    />
                     <input type="email" 
                    placeholder='Your email'
                    className='border p-4 rounded-lg'
                    
                    />
                    <textarea name="" id=""   className='border p-4 rounded-lg' placeholder='Your Description' cols="30" rows="10"></textarea>
                   
                    <button className='text-white  bg-black p-3 rounded-lg'>Enroll Now</button>
                </form>
            </div>
            
          </div>
        </div>
      )}
    </main>
  );
}