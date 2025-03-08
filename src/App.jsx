import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home_light";
import InquiryPage from "./pages/Inquiry";
import FAQPage from "./pages/Faqs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/faq" element={<FAQPage />} /> {/* Fixed the path */}
        {/* Other routes like About, Rooms can be added */}
      </Routes>
    </Router>
  );
}

export default App;
