
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Background Video */}
      <video
        // className="absolute top-0 left-0 w-full h-full object-cover"
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/mainbg_v1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 flex w-full h-full items-center justify-between px-12 shadow-5xl backdrop-blur-md">
      <div className="relative z-10 flex flex-col items-start justify-center h-full pl-12">
      {/* <div className="w-1/2 flex flex-col justify-center space-y-5 bg-black/30 rounded-2xl p-6 shadow-2xl backdrop-blur-md"> */}
        <h1 className="text-7xl font-bold text-white drop-shadow-lg" style={{ fontFamily: "'Averia Serif Libre', serif" }}>Welcome to </h1><br />
        <h1 className="text-7xl font-bold text-white drop-shadow-lg" style={{ fontFamily: "'Averia Serif Libre', serif" }}>Phoenix Residency</h1>
        <p className="text-lg text-black-300 mt-4 max-w-2xl" style={{ fontFamily: "'Averia Serif Libre', serif" }}>
          Comfort in Living
        </p>
      </div>

      {/* Right Side - Carousel */}
      <div className="w-1/2 flex items-center justify-center">
          <div className="w-[90%] h-[450px] overflow-hidden rounded-xl shadow-xl">
            <Slider {...settings} className="w-full h-full">
              <div className="w-full h-full">
                <img src="/image2.png" alt="Carousel 1" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-full">
                <img src="/c1.jpg" alt="Carousel 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-full">
                <img src="/c3.jpg" alt="Carousel 3" className="w-full h-full object-cover" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
