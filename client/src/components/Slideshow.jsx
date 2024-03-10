import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import '../components/style.css'
const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Slide 1'
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1677543938005-6e0eb736dc19?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1474224017046-182ece80b263?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhc2tldGJhbGx8ZW58MHx8MHx8fDA%3D',
    caption: 'Slide 3'
  },
  {
    url: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1663011107235-7cdc458bce48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const Slideshow = () => {
  return (
  <div className='max-w-6xl mx-auto'>
    <div className="slider relative mt-2 w-full md:w-[90%] lg:w-screen xl:w-[1150px] border-2 rounded-2xl border-white bg-blue-500 bg-opacity-65 drop-shadow-lg ">
      <Fade autoplay={true} duration={1000} transitionDuration={400}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="h-96">  
            <div
              className="h-[350px] mt-[15px] bg-cover bg-center rounded-2xl absolute ml-[22.5px] w-[1100px]"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              {/* <span className="block text-white bg-black bg-opacity-50 p-2">{slideImage.caption}</span> */}
            </div>
          </div>
        ))}
      </Fade>
    </div>
  </div>
    
  );
}

export default Slideshow;