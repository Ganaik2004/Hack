import React from "react";
import { Link } from "react-router-dom";
import mouseclick from "../assets/rclick-13693.mp3"
export default function SideBar(){
    const playClickSound = () => {
        const audio = new Audio(mouseclick);
        audio.play();
    };
    return (
        <>
            {/* Sidebar */}
            <div className="flex flex-col  h-[130vh] items-center bg-slate-900  w-[68px] py-16 ">
            {/* <span className='text-white font-bold underline '>Connect</span> */}
                <hr className="w-24" ></hr>
                <Link to="/players" className="text-white hover:text-blue-300 py-8">
                    <svg className="h-6 w-6 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={playClickSound}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </Link>
                {/* <span className='text-white font-bold underline'>Accessories</span> */}
                <hr className="w-24"></hr>
                <Link to="/accessories" className="text-white hover:text-blue-300 py-8">
                    <svg className="h-6 w-6 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={playClickSound}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
                {/* <span className='text-white font-bold underline'>Categories</span> */}
                <hr className="w-24"></hr>
                <Link to="/categories" className="text-white hover:text-blue-300 py-8">
                    <svg className="h-6 w-6 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={playClickSound}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                </Link>
                    <hr className="w-24"></hr>
            </div>
        </>
    );
    
}