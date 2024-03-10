import React from 'react';
import '../components/style.css'
function Gallery() {
  return (
    <section className='sec-2 max-w-6xl mx-auto p-3'>
      <div className="container mt-16">
        <h1 className='text-white' style={{ fontSize: 40 }}>
          <b>SPORTS GALLERY</b>
        </h1>
        <a className='text-white'>
          Know about different types of sports
        </a>
      </div>
      <div className="card-container">
        <div className="card-part">
          <Card imgSrc="https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=600" altText="Football" />
          <Card imgSrc="https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg?auto=compress&cs=tinysrgb&w=600" altText="Rugby" />
          <Card imgSrc="https://images.pexels.com/photos/1462364/pexels-photo-1462364.jpeg?auto=compress&cs=tinysrgb&w=600" altText="Horse Race" />
        </div>
        <div className="card-part">
          <Card imgSrc="https://images.pexels.com/photos/5740802/pexels-photo-5740802.jpeg?auto=compress&cs=tinysrgb&w=600" altText="Tennis" />
          <Card imgSrc="https://images.pexels.com/photos/54123/pexels-photo-54123.jpeg?auto=compress&cs=tinysrgb&w=600IMG/golf.jpg" altText="Golf" />
          <Card imgSrc="https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg?auto=compress&cs=tinysrgb&w=600" altText="Formula One" />
        </div>
        <div className="card-part">
          <Card imgSrc="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600" altText="Swimming" />
          <Card imgSrc="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600" altText="Weightlifting" />
          <Card imgSrc="https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&w=600" altText="Basketball" />
        </div>
      </div>
    </section>
  );
}

function Card({ imgSrc, altText }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={altText} />
      
    </div>
  );
}

export default Gallery;