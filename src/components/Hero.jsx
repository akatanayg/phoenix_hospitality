// import React, { useEffect, useState } from "react";

// const words = [
//   "Guest House",
//   "Restaurant",
//   "Corporate Bookings",
//   "Gravy Gram Restaurant",
//   "Conference Hall",
//   "Events & Kitty Parties",
// ];

// const Hero = () => {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentText, setCurrentText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = words[currentWordIndex];
//     let typingSpeed = isDeleting ? 50 : 100;

//     const type = () => {
//       setCurrentText((prevText) => {
//         if (!isDeleting) {
//           if (prevText === currentWord) {
//             setTimeout(() => setIsDeleting(true), 1000);
//             return prevText;
//           }
//           return currentWord.substring(0, prevText.length + 1);
//         } else {
//           if (prevText === "") {
//             setIsDeleting(false);
//             setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//             return "";
//           }
//           return prevText.substring(0, prevText.length - 1);
//         }
//       });
//     };

//     const typingInterval = setInterval(type, typingSpeed);
//     return () => clearInterval(typingInterval);
//   }, [currentWordIndex, isDeleting]);

//   return (
//     <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center text-white overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src="/mainbg_v4.mp4" type="video/mp4" />
//       </video>

//       {/* Centered Heading & Animation (Takes Full Width) */}
//       <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-10">
//         <h1
//           className="text-5xl md:text-7xl font-bold"
//           style={{
//             fontFamily: "shafarik",
//             textShadow: "12px 12px 15px rgba(0,0,0,0.8)",
//           }}
//         >
//           PHOENIX RESIDENCY
//         </h1>
//         <h2 className="text-2xl md:text-4xl mt-4 font-medium h-12"style={{
//             fontFamily: "shafarik",
//             textShadow: "12px 12px 10px rgba(0,0,0,0.8)",
//           }} >
//           {currentText}
//           <span className="animate-blink">|</span>
//         </h2>
//       </div>

//       {/* Optional Left Text Section (If needed in future) */}
//       <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left px-6 md:px-12 lg:pl-16 py-24 md:py-0 hidden">
//         {/* Placeholder - you can uncomment and modify if required */}
//       </div>

//       {/* Optional Right Animation Section (If needed in future) */}
//       <div className="relative z-10 w-full md:w-1/2 hidden md:flex items-center justify-center">
//         {/* Placeholder - you can uncomment and modify if required */}
//       </div>

//       {/* Typing Cursor Animation */}
//       <style>{`
//                 @keyframes blink {
//                     50% { opacity: 0; }
//                 }
//                 .animate-blink {
//                     display: inline-block;
//                     animation: blink 1s infinite;
//                 }
//             `}</style>
//     </section>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const fullText =
    "Experience luxury, comfort, and warmth at Phoenix Residency — your home away from home.";

  useEffect(() => {
    // Typing animation
    let timer;
    setTypedText("");
    setTimeout(() => {
      let index = 0;
      timer = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        if (index >= fullText.length) clearInterval(timer);
      }, 40);
    }, 1200);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video for Mobile */}
      {isMobile && (
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <video
            className="w-[90%] h-[50%] object-cover opacity-50"
            autoPlay
            loop
            muted
            playsInline
            src="/v1.mov"
            ref={(video) => {
              if (video) video.playbackRate = 1.5;
            }}
          />
        </div>
      )}

      {/* Content Wrapper */}
      <div
        className={`relative z-10 w-full h-full flex ${
          isMobile
            ? "flex-col items-center justify-center text-center"
            : "flex-row"
        }`}
      >
        {/* Left Side Text */}
        <div
          className={`flex flex-col justify-center ${
            isMobile ? "w-full p-4" : "w-[50%] pl-16"
          }`}
        >
          {/* Animated Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={`uppercase font-bold text-transparent bg-clip-text animate-gradient ${
              isMobile ? "text-5xl" : "text-5xl"
            }`}
            style={{
              fontFamily: "open-serif",
              backgroundImage:
                "linear-gradient(270deg, #f97316, #fbbf24, #f97316)",
              backgroundSize: "400% 400%",
            }}
          >
            Phoenix
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className={`font-sans font-bold uppercase text-orange-500 ${
              isMobile ? "text-5xl" : "text-5xl"
            }`}
            style={{ fontFamily: "open-serif" }}
          >
            Hospitality
          </motion.h1>

          {/* Typing Subtext */}
          <p
            className={`mt-4 font-sans text-white leading-relaxed tracking-wide ${
              isMobile ? "text-base" : "text-xl"
            } max-w-md`}
          >
            {typedText}
            <span className="animate-blink">|</span>
          </p>

          {/* Enquire Now Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-6 px-6 py-3 rounded-full bg-black text-orange-500 border-2 border-orange-500 font-bold uppercase tracking-wider hover:bg-orange-500 hover:text-white transition duration-300"
            onClick={() => (window.location.href = "#enquiry")}
          >
            Enquire Now
          </motion.button>
        </div>

        {/* Right Side - Video (Desktop Only) */}
        {!isMobile && (
          <div className="relative w-[50%] h-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="relative w-[650px] h-[500px] overflow-hidden rounded-xl shadow-xl"
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                src="/v1.mov"
                ref={(video) => {
                  if (video) video.playbackRate = 1;
                }}
              />
            </motion.div>
          </div>
        )}
      </div>

      {/* Gradient Animation CSS */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradient {
            animation: gradientMove 5s ease infinite;
          }

          .animate-blink {
            animation: blink 1s step-end infinite;
          }

          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
