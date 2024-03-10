
import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ListingItem from '../components/ListingItem';
export default function Event() {
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
    navigate(`/search?${searchQuery}`);
  };
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
          setSearchTerm(searchTermFromUrl);
        }
        const fetchListings = async () => {
            setLoading(true);
            const res = await fetch('/api/listing/allevents');
            const data = await res.json();
            // console.log(data)
            setListings(data);
            setLoading(false);
          };
      
          fetchListings();
      }, [location.search]);
  return (
    <div className="max-w-6xl flex flex-col mx-auto p-3 overflow-y-auto h-[600px]">
         <form
          onSubmit={handleSubmit}
          className=" p-3 rounded-lg flex items-center justify-center gap-4"
        >
            {/* bg-[#262626] */}
          <input
            type="text"
            placeholder="Search..."
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
              <ListingItem key={listing._id} listing={listing} />
            ))}
        </div>
        </div>
    </div>
  )
}
