import React from 'react'
import Slideshow from '../components/Slideshow'
// import Slideshow from './Slideshow';   
export default function Home() {
  return (
    <div className="flex bg-slate-50 h-screen" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1675662138450-407093b95818?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
    {/* Courousel */}
    <Slideshow />
    {/* Content Section */}
    <div className="container mx-auto mt-8 w-30">
        <h1 className="text-6xl text-center font-arial font-extrabold flex flex-row italic text-yellow-400 drop-shadow-xl">
            Find Peers. Find Events. Find Passion
        </h1>
    </div>
</div>
  )
}




       
