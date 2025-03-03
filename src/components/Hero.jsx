
import React from 'react';

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center text-white overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/mainbg_v4.mp4" type="video/mp4" />
            </video>

            {/* Left Text Section (Center on Mobile, Left on Desktop) */}
            <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left px-6 md:px-12 lg:pl-16 py-24 md:py-0">
                {/* <h1
                    className="text-4xl md:text-6xl font-bold leading-tight"
                    style={{textShadow: '2px 2px 10px rgba(0,0,0,0.9)' }}
                >
                    Welcome to <br />Phoenix Residency
                </h1> */}
                {/* <p className="text-lg md:text-2xl mt-2">
                    Comfort in Living
                </p> */}
                {/* <div className="mt-6 flex space-x-4">
                    <button className="px-6 py-2 border border-white bg-white text-black hover:bg-transparent hover:text-white">
                        Learn More
                    </button>
                    <button className="px-6 py-2 border border-white bg-white text-black hover:bg-transparent hover:text-white">
                        Enquire Now
                    </button>
                </div> */}
            </div>

            {/* Right Animation Section */}
            <div className="relative z-10 w-full md:w-1/2 hidden md:flex items-center justify-center">
                {/* <div className="text-center space-y-4 animate-fadeIn">
                    <p className="text-xl md:text-2xl font-light italic opacity-80">"Experience luxury like never before"</p>
                    <p className="text-lg">Discover elegance, heritage, and comfort</p>
                </div> */}
            </div>
        </section>
    );
};

export default Hero;



