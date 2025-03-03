// import React, { useState } from 'react';

// const contentData = {
//   about: {
//     text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime eligendi repudiandae minima incidunt voluptates ea, magnam molestias eaque nesciunt impedit vitae harum quod, sequi, nihil quo hic natus obcaecati. Harum velit repellat atque quos deleniti voluptate, nulla, incidunt dolor minima laboriosam, libero recusandae fugiat eum. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
//     subText: `Today, the palace stands as a proud symbol of heritage and timeless architecture, attracting visitors from all over the world.`,
//     images: ['/image1.jpg', '/image2.png']
//   },
//   history: {
//     text: `The palace has witnessed numerous historical events over the centuries. It has been a residence for noble families, a meeting place for diplomats, and even a cultural center in the early 20th century.`,
//     subText: `Today, the palace stands as a proud symbol of heritage and timeless architecture, attracting visitors from all over the world.`,
//     images: ['/image1.jpg', '/image2.png']
//   },
//   location: {
//     text: `Located in the heart of the countryside, the palace offers scenic views and tranquil surroundings. Its proximity to key landmarks makes it an ideal destination for tourists.`,
//     subText: `Guests can enjoy the lush gardens, the serene lake, and the nearby charming village, making it a perfect getaway spot.`,
//     images: ['/image1.jpg', '/image2.png']
//   }
// };

// const AboutUs = () => {
//   const [activeTab, setActiveTab] = useState('about');
//   const [fade, setFade] = useState(true); // Controls the fade animation

//   // Handle tab click
//   const handleTabClick = (tab) => {
//     if (tab === activeTab) return; // Already active

//     setFade(false); // Start fade out
//     setTimeout(() => {
//       setActiveTab(tab);
//       setFade(true); // Start fade in after content change
//     }, 300); // This timing should match the fade duration
//   };

//   const { text, subText, images } = contentData[activeTab];

//   return (
//     <section
//       className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
//       style={{ backgroundImage: "url('/backgroundImage.png')" }}
//     >
//       {/* Semi-transparent overlay */}
//       <div className="absolute inset-0 bg-white bg-opacity-80"></div>

//       {/* Content Container */}
//       <div className="relative z-10 max-w-5xl w-full mx-auto px-6 transform -translate-y-16">
//         {/* Heading */}
//         <h2
//           className="text-center text-4xl tracking-wide text-gray-800 mb-2"
//           style={{ fontFamily: 'Times New Roman, serif' }}
//         >
//           ABOUT PHOENIX
//         </h2>
//           {/* Gap between heading and tabs */}
//           <div className="h-6"></div>

//         {/* Tabs */}
//         <div className="flex justify-center space-x-12 mb-8 text-gray-700 text-lg">
//           {['about', 'history', 'location'].map((tab) => (
//             <span
//               key={tab}
//               className={`cursor-pointer pb-1 transition-all ${
//                 activeTab === tab ? 'border-b-2 border-black' : 'hover:border-b-2 hover:border-black'
//               }`}
//               onClick={() => handleTabClick(tab)}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </span>
//           ))}
//         </div>

//         {/* Content Section with Fade Effect */}
//         <div
//           className={`flex items-start justify-between space-x-8 transition-opacity duration-400 ${fade ? 'opacity-100' : 'opacity-0'}`}
//         >
//           {/* Left Text */}
//           <div className="w-2/3 text-gray-700 leading-relaxed text-lg">
//             <p className="mb-4">{text}</p>
//             <p className="text-base">{subText}</p>
//           </div>

//           {/* Right Images (overlapping) */}
//           <div className="flex space-x-4">
//               {/* Left Image - Slightly lower */}
//               <img
//                 src="image2.png"
//                 alt="Palace Image 1"
//                 className="w-[240px] h-[240px] object-cover rounded-lg shadow-2xl transform translate-y-8"
//               />
//               {/* Right Image - Aligned normally */}
//               <img
//                 src="image1.jpg"
//                 alt="Palace Image 2"
//                 className="w-[240px] h-[240px] object-cover rounded-lg shadow-2xl"
//               />
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

// import React, { useState } from 'react';

// const AboutUs = () => {
//   const [activeTab, setActiveTab] = useState('about');

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <section className="relative w-full bg-cover bg-center py-16 px-4 md:px-16">
//       {/* <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/aboutus_v1.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video> */}
//       {/* Overlay */}
//       {/* <div className="absolute inset-0 bg-black bg-opacity-80"></div> */}

//       {/* Container */}
//       <div className="relative z-10 max-w-5xl mx-auto text-black text-center space-y-6">
//         <h2 className="text-4xl md:text-5xl"style={{ fontFamily: 'Shafarik' }}>PHOENIX </h2>

//         {/* Tabs */}
//         <div className="flex justify-center gap-6 md:gap-12">
//           <button 
//             onClick={() => handleTabChange('about')} 
//             className={`transition-all text-lg font-medium tracking-wider ${activeTab === 'about' ? 'text-black border-b-2 border-golden' : 'text-black-300'}`}
//           >
//             ABOUT US
//           </button>

//           <button 
//             onClick={() => handleTabChange('history')} 
//             className={`transition-all text-lg font-medium tracking-wider ${activeTab === 'history' ? 'text-black border-b-2 border-white' : 'text-black-300'}`}
//           >
//             History
//           </button>

//           <button 
//             onClick={() => handleTabChange('location')} 
//             className={`transition-all text-lg font-medium tracking-wider ${activeTab === 'location' ? 'text-black border-b-2 border-white' : 'text-black-300'}`}
//           >
//             Location
//           </button>
//         </div>

//         {/* Content */}
//         <div className="mt-6 p-4 md:p-8 bg-white/10 rounded-xl backdrop-blur-md shadow-2xl transition-all duration-500 ease-in-out min-h-[200px] text-left">
//           {activeTab === 'about' && (
//             <div className="fade-in">
//               <p className="text-black text-lg leading-relaxed">
//                 Phoenix Residency is a luxurious retreat offering comfort, elegance, and modern amenities for our guests.
//                 Nestled in the heart of the city, we provide an unparalleled experience of hospitality and culture. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, omnis rem sit dicta nostrum, voluptatibus sunt voluptas illo quaerat, esse porro unde necessitatibus.
//               </p>
//               <div className="mt-4 flex flex-col md:flex-row gap-6">
//                 <img src="/image1.jpg" alt="About Us Image 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
//                 <img src="/image2.png" alt="About Us Image 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
//               </div>
//             </div>
//           )}

//           {activeTab === 'history' && (
//             <div className="fade-in">
//               <p className="text-black text-lg leading-relaxed">
//                 Established in 1990, Phoenix Residency has a rich legacy of welcoming travelers from all around the world, offering them comfort, luxury, and an authentic experience of the city’s culture.
//               </p>
//               <div className="mt-4 flex flex-col md:flex-row gap-6">
//                 <img src="/history1.jpg" alt="History Image 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
//                 <img src="/history2.jpg" alt="History Image 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
//               </div>
//             </div>
//           )}

//           {activeTab === 'location' && (
//             <div className="fade-in">
//               <p className="text-black text-lg leading-relaxed">
//                 Conveniently located near major landmarks and tourist attractions, Phoenix Residency offers easy access to all parts of the city, making it an ideal stay for both business and leisure travelers.
//               </p>
//               <div className="mt-4 flex flex-col md:flex-row gap-6">
//                 <img src="/location1.jpg" alt="Location Image 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
//                 <img src="/location2.jpg" alt="Location Image 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React, { useState } from 'react';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id = "about" className="relative w-full bg-cover bg-center py-16 px-4 md:px-16">
      {/* Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-black text-center space-y-6">
        
        {/* Heading with Orange Lines */}
        <div className="flex items-center justify-center space-x-4">
          <div className="flex-1 border-t-2 border-orange-500"></div>
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: 'Shafarik' }}>PHOENIX</h2>
          <div className="flex-1 border-t-2 border-orange-500"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 md:gap-12">
          {['about', 'history', 'location'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`transition-all text-lg font-medium tracking-wider relative pb-2 ${
                activeTab === tab
                  ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-orange-500'
                  : 'text-gray-500'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6 p-4 md:p-8 bg-white/10 rounded-xl backdrop-blur-md shadow-2xl transition-all duration-500 ease-in-out min-h-[200px] text-justify">
          {activeTab === 'about' && (
            <div className="fade-in space-y-4">
              <p className="text-black text-lg leading-relaxed">
                Phoenix Residency is a luxurious retreat offering comfort, elegance, and modern amenities for our guests.
                Nestled in the heart of the city, we provide an unparalleled experience of hospitality and culture. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, omnis rem sit dicta nostrum, voluptatibus sunt voluptas illo quaerat, esse porro unde necessitatibus.
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <img src="/image1.jpg" alt="About Us Image 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
                <img src="/image2.png" alt="About Us Image 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="fade-in space-y-4">
              <p className="text-black text-lg leading-relaxed">
                Established in 1990, Phoenix Residency has a rich legacy of welcoming travelers from all around the world, offering them comfort, luxury, and an authentic experience of the city’s culture.
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <img src="/history1.jpg" alt="History Image 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
                <img src="/history2.jpg" alt="History Image 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          )}

          {activeTab === 'location' && (
            <div className="fade-in space-y-4">
              <p className="text-black text-lg leading-relaxed">
                Conveniently located near major landmarks and tourist attractions, Phoenix Residency offers easy access to all parts of the city, making it an ideal stay for both business and leisure travelers.
              </p>
              <div className="flex flex-col md:flex-row gap-6">
                <img src="/location1.jpg" alt="Location Image 1" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
                <img src="/location2.jpg" alt="Location Image 2" className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;



