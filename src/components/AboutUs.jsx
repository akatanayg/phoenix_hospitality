import React, { useState } from 'react';

const contentData = {
  about: {
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eligendi repudiandae minima incidunt voluptates ea, magnam molestias eaque nesciunt impedit vitae harum quod, sequi, nihil quo hic natus obcaecati. Harum velit repellat atque quos deleniti voluptate, nulla, incidunt dolor minima laboriosam, libero recusandae fugiat eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    subText: `Today, the palace stands as a proud symbol of heritage and timeless architecture, attracting visitors from all over the world.`,
    images: ['/image1.jpg', '/image2.png'] 
  },
  history: {
    text: `The palace has witnessed numerous historical events over the centuries. It has been a residence for noble families, a meeting place for diplomats, and even a cultural center in the early 20th century.`,
    subText: `Today, the palace stands as a proud symbol of heritage and timeless architecture, attracting visitors from all over the world.`,
    images: ['/image1.jpg', '/image2.png']
  },
  location: {
    text: `Located in the heart of the countryside, the palace offers scenic views and tranquil surroundings. Its proximity to key landmarks makes it an ideal destination for tourists.`,
    subText: `Guests can enjoy the lush gardens, the serene lake, and the nearby charming village, making it a perfect getaway spot.`,
    images: ['/image1.jpg', '/image2.png']
  }
};

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [fade, setFade] = useState(true); // Controls the fade animation

  // Handle tab click
  const handleTabClick = (tab) => {
    if (tab === activeTab) return; // Already active

    setFade(false); // Start fade out
    setTimeout(() => {
      setActiveTab(tab);
      setFade(true); // Start fade in after content change
    }, 300); // This timing should match the fade duration
  };

  const { text, subText, images } = contentData[activeTab];

  return (
    <section
      className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/backgroundImage.png')" }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl w-full mx-auto px-6 transform -translate-y-16">
        {/* Heading */}
        <h2
          className="text-center text-4xl tracking-wide text-gray-800 mb-2"
          style={{ fontFamily: 'Times New Roman, serif' }}
        >
          ABOUT PHOENIX
        </h2>
          {/* Gap between heading and tabs */}
          <div className="h-6"></div>

        {/* Tabs */}
        <div className="flex justify-center space-x-12 mb-8 text-gray-700 text-lg">
          {['about', 'history', 'location'].map((tab) => (
            <span
              key={tab}
              className={`cursor-pointer pb-1 transition-all ${
                activeTab === tab ? 'border-b-2 border-black' : 'hover:border-b-2 hover:border-black'
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </span>
          ))}
        </div>

        {/* Content Section with Fade Effect */}
        <div
          className={`flex items-start justify-between space-x-8 transition-opacity duration-400 ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Left Text */}
          <div className="w-2/3 text-gray-700 leading-relaxed text-lg">
            <p className="mb-4">{text}</p>
            <p className="text-base">{subText}</p>
          </div>

          {/* Right Images (overlapping) */}
          <div className="flex space-x-4">
              {/* Left Image - Slightly lower */}
              <img
                src="image2.png"
                alt="Palace Image 1"
                className="w-[240px] h-[240px] object-cover rounded-lg shadow-2xl transform translate-y-8"
              />
              {/* Right Image - Aligned normally */}
              <img
                src="image1.jpg"
                alt="Palace Image 2"
                className="w-[240px] h-[240px] object-cover rounded-lg shadow-2xl"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
