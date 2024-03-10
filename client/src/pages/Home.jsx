import React from 'react';
import Slideshow from '../components/Slideshow';        
import Gallery from '../components/Gallery';
function Home() {
    return (
        <div className="overflow-y-auto bg-slate-50 h-[1097px] " style = {{backgroundImage: "url('https://t3.ftcdn.net/jpg/04/75/61/48/240_F_475614851_l1RRxP4QuZN57jBetpvP7mp8u2Qyz5JK.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed"}}>
            
            <Slideshow />
            {/* Content Section */}
        <Gallery  />
        </div>
    );
}

export default Home;