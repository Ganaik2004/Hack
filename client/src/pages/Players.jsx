import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ListingItem1 from '../components/ListingItem1';
export default function Players() {
    const [loading, setLoading] = useState(false);
    const [listings, setListings] = useState([]);
    const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search1?${searchQuery}`);
  };
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
          setSearchTerm(searchTermFromUrl);
        }
        const fetchListings = async () => {
            setLoading(true);
            const res = await fetch('/api/user/getall');
            const data = await res.json();
            // console.log(data)
            setListings(data);
            setLoading(false);
          };
      
          fetchListings();
      }, [location.search]);
  return (
    <div className="max-w-6xl flex flex-col mx-auto p-3 overflow-y-auto h-[600px]">
      <h1 className="text-3xl font-bold mb-4">Connect</h1>
            <p className="text-lg font-bold mb-4">Connect with other sports enthusiasts and find the perfect partner to play with.</p>
            <p className="text-lg font-bold mb-4">You can also find sports events happening in your area.</p>
         <form
          onSubmit={handleSubmit}
          className=" p-3 rounded-lg flex items-center justify-center gap-4"
        >
            {/* bg-[#262626] */}
          <input
            type="text"
            placeholder="Search Sport name"
            className="bg-[#262626] text-[#fff] p-3 rounded-lg w-24 sm:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-[#262626] text-[#fff] p-3 rounded-lg">
            search
          </button>
        </form>
        <div>
        <div className='p-7 flex flex-wrap justify-center gap-5'>
          {!loading && listings.length === 0 && (
            <p className='text-xl text-slate-700'>No listing found!</p>
          )}
          {loading && (
            <p className='text-xl text-slate-700 text-center w-full'>
              Loading...
            </p>
          )}

          {!loading &&
            listings &&
            listings.map((listing) => (
              <ListingItem1 key={listing._id} listing={listing} />
            ))}
        </div>
        </div>
    </div>
  )
}