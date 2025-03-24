import { Helmet } from "react-helmet-async";
import Hero_light from "../components/Hero_light";
import Navbar_light from "../components/Navbar_light";
import AboutUsLight from "../components/Aboutus_light";
import Benefits_Light from "../components/Benefits_light";
import Testimonials_light from "../components/Testimonials_light";
import Gallery_light from "../components/Gallery_light";
import Blogs_light from "../components/Blogs_light";
import Footer_light from "../components/Footer_light";

const Home = () => (
  <>
    {/* Meta Tags for SEO */}
    {/* <Helmet>
      <title>Phoenix Hospitality - Premium Stays & Comfort</title>
      <meta 
        name="description" 
        content="Experience luxury and comfort at Phoenix Hospitality. Book your premium stay with us and enjoy top-notch services." 
      />
      <meta 
        name="keywords" 
        content="Phoenix Hospitality, luxury stays, best hotels, premium hospitality, hotel booking" 
      />
      <meta name="author" content="Phoenix Hospitality" />
      <meta name="robots" content="index, follow" />
    </Helmet> */}

    {/* Page Components */}
    <Hero_light />
    <Navbar_light />
    <AboutUsLight />
    <Benefits_Light />
    <Testimonials_light />
    <Gallery_light />
    <Blogs_light />
    <Footer_light />
  </>
);

export default Home;
