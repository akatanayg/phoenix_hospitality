            
import React from 'react';

const Hero = () => {
  return (
    <div 
      className="h-screen bg-cover bg-center relative flex items-center"
      style={{ backgroundImage: "url('/backgroundImage.png')" }}
    >
      <div className="text-left text-black pl-10 max-w-2xl">
        <h1 className="text-6xl font-bold leading-tight">
          Phoenix<br></br>Residency
        </h1>
        <p className="mt-4 text-xl">
          Experience luxury like never before at our serene hotel, nestled in the heart of nature.
        </p>
      </div>
    </div>
  );
};

export default Hero;
