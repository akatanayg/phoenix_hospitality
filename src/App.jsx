import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar_light.jsx";

import Home from "./pages/Home_light";
import InquiryPage from "./pages/Inquiry";
import FAQPage from "./pages/Faqs";
import Testimonials from "./pages/Testimonials";
import Gallery_light from "./pages/Gallery";
import Blogs_light from "./pages/Blogs";
import DeluxeRoom_light from "./pages/DeluxeRoom";
import SuperDeluxeRoom_light from "./pages/SuperDeluxeRoom";
import SuitRoom_light from "./pages/SuitRoom";
import AboutUs from "./pages/AboutUs";
import { DarkModeProvider, useDarkMode } from "./DarkModeContext.jsx";
import BlogPage from "./pages/BlogPage.jsx";

function AppContent() {
  const { darkMode } = useDarkMode(); // Ensure darkMode is accessed

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery_light />} />
        <Route path="/blogs" element={<Blogs_light />} />
        <Route path="/deluxeroom" element={<DeluxeRoom_light />} />
        <Route path="/superdeluxeroom" element={<SuperDeluxeRoom_light />} />
        <Route path="/suiteroom" element={<SuitRoom_light />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />  {/* ✅ Fixed path */}
      </Routes>
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <AppContent />
      </Router>
    </DarkModeProvider>
  );
}

export default App;
