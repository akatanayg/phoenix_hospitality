import React from 'react';

const Benefits = () => {
  return (
    <section className="w-full bg-orange-100 shadow-2xl py-16 px-4 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Left - Heading with Left Orange Line */}
        <div className="w-full md:w-1/3 flex items-center">
          <div className="flex-1 border-t-2 border-orange-500 mr-4"></div>
          <h2 className="text-4xl md:text-5xl whitespace-nowrap" style={{ fontFamily: 'Shafarik' }}>
            BENEFITS
          </h2>
        </div>

        {/* Right - Short Text */}
        <div className="w-full md:w-2/3 text-justify text-black text-lg leading-relaxed">
          <p>
            Phoenix Residency offers exceptional amenities designed for both leisure and business travelers. From spacious, well-appointed rooms to seamless connectivity and personalized services, we ensure a comfortable and enriching stay for every guest.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
