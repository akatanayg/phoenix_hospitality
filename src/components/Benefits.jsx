import React, { useState } from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: 'TIMELESS',
      description: 'A legacy of timeless elegance and luxury hospitality.',
      image: '/image1.jpg',
      backgroundImage: '/image2.png'
    },
    {
      title: 'ICONIC',
      description: 'An iconic destination known for its impeccable service.',
      image: '/image2.png',
      backgroundImage: '/hover-bg2.jpg'
    },
    {
      title: 'AUTHENTIC',
      description: 'Experience the authenticity of local culture & charm.',
      image: '/c3.jpg',
      backgroundImage: '/hover-bg3.jpg'
    },
    {
      title: 'SOULFUL',
      description: 'A soulful retreat that touches your spirit and senses.',
      image: '/c1.jpg',
      backgroundImage: '/hover-bg4.jpg'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full py-16 px-4 md:px-16 shadow-2xl" style={{ backgroundImage: "url('/benefitsbg_1.png')" }}>
      <div className="max-w-6xl mx-auto">

        {/* Benefits Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div className="relative">
            <h2 className="text-4xl font-[Shafarik] uppercase tracking-wider relative">
              Benefits
              <div className="absolute left-0 bottom-[-8px] w-[50px] h-[3px] bg-orange-500"></div>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 md:ml-8 text-gray-700 leading-relaxed max-w-2xl">
            Experience a range of exceptional benefits that redefine your stay, blending luxury, authenticity, and timeless comfort.
          </p>
        </div>

        {/* Desktop - 4 Column Grid with Hover Effect */}
        <div className="hidden md:grid grid-cols-4 gap-0 w-full h-[450px]">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative h-full overflow-hidden group cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

              {index > 0 && <div className="absolute left-0 top-0 h-full w-[1px] bg-white"></div>}

              {/* Only show heading when NOT hovered */}
              {activeIndex !== index && (
                <div className="absolute bottom-4 left-0 w-full text-center text-white text-lg font-serif uppercase tracking-wide bg-black/30 py-2">
                  {benefit.title}
                </div>
              )}

              {/* Hover Overlay with Description */}
              {activeIndex === index && (
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4 transition-opacity duration-300">
                  <h3 className="text-2xl font-serif uppercase">{benefit.title}</h3>
                  <p className="text-sm mt-2">{benefit.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile - Horizontal Carousel with Tap Effect */}
        <div className="md:hidden flex overflow-x-auto space-x-4 snap-x snap-mandatory">
          {benefits.map((benefit, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="relative w-[80%] shrink-0 snap-center h-[400px] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <img
                  src={isActive ? benefit.backgroundImage : benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />

                {/* Heading (Only if not tapped) */}
                {!isActive && (
                  <div className="absolute bottom-4 left-0 w-full text-center text-white text-lg font-serif uppercase tracking-wide bg-black/30 py-2">
                    {benefit.title}
                  </div>
                )}

                {/* On Tap - Show Full Overlay with Description */}
                {isActive && (
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center p-4">
                    <h3 className="text-2xl font-serif uppercase">{benefit.title}</h3>
                    <p className="text-sm mt-2">{benefit.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
