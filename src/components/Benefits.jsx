import React, { useState } from 'react';

const Benefits = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const initialImages = [
    '/image1.jpg',
    '/image2.png',
    '/c1.jpg',
    '/c3.jpg'
  ];

  const hoverImages = [
    '/c1.jpg',
    '/hover2.jpg',
    '/hover3.jpg',
    '/hover4.jpg'
  ];

  const captions = [
    { title: 'TIMELESS', description: 'A legacy of timeless elegance and luxury hospitality.' },
    { title: 'ICONIC', description: 'An iconic destination known for its impeccable service.' },
    { title: 'AUTHENTIC', description: 'Experience the authenticity of local culture & charm.' },
    { title: 'SOULFUL', description: 'A soulful retreat that touches your spirit and senses.' }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-16 bg-orange-100 shadow-2xl">
      <div className="max-w-6xl mx-auto">

        {/* Benefits Header */}
        <div className="flex flex-col justify-center items-center text-center mb-8">
          <div className="relative w-fit">
            <h2 className="text-4xl font-[Shafarik] relative uppercase tracking-wider">
              Benefits
              <div className="absolute left-0 bottom-[-8px] w-[50px] h-[3px] bg-orange-500"></div>
            </h2>
          </div>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
            Experience a range of exceptional benefits that redefine your stay, blending luxury, authenticity, and timeless comfort.
          </p>
        </div>

        {/* 4 Panel Carousel */}
        <div className="relative w-full h-[450px] grid grid-cols-4 cursor-pointer overflow-hidden">

          {initialImages.map((img, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                className="relative h-full group overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image (Switches to hover image when hovered) */}
                <img
                  src={isHovered ? hoverImages[index] : img}
                  alt={`Panel ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Divider Line (White line between panels) */}
                {index > 0 && (
                  <div className="absolute left-0 top-0 h-full w-[1px] bg-white"></div>
                )}

                {/* Grey Overlay + Text (only when hovered) */}
                {isHovered && (
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white p-6 transition-all duration-300">
                    <h3 className="text-2xl font-serif uppercase tracking-wide mb-2">
                      {captions[index].title}
                    </h3>
                    <p className="text-sm leading-relaxed">
                      {captions[index].description}
                    </p>
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
