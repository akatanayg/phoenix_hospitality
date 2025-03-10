import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home_light";
import InquiryPage from "./pages/Inquiry";
import FAQPage from "./pages/Faqs";
import Testimonials_light from "./pages/Testimonials";
import Gallery_light from "./pages/Gallery";
import Blogs_light from "./pages/Blogs";
import DeluxeRoom_light from "./pages/DeluxeRoom";
import SuperDeluxeRoom_light from "./pages/SuperDeluxeRoom";
import SuitRoom_light from "./pages/SuitRoom";
import AboutUs_light from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/faq" element={<FAQPage />} /> {/* Fixed the path */}
        <Route path="/Testimonials_light" element={<Testimonials_light />} />
        <Route path="/Gallery_light" element={<Gallery_light />} />
        <Route path="/Blogs_light" element={<Blogs_light />} />
        <Route path="/DeluxeRoom_light" element={<DeluxeRoom_light />} />
        <Route path="/SuperDeluxeRoom_light" element={<SuperDeluxeRoom_light />} />
        <Route path="/SuitRoom_light" element={<SuitRoom_light />} />
        <Route path="/AboutUs_light" element={<AboutUs_light />} />

      </Routes>
    </Router>
  );
}

export default App;
