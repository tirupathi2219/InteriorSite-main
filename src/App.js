import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Aboutus from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import OurServices from './components/OurServices';
import Slider from './components/Slider';
import TestimonialSlider from './components/Testimonails';
import { FaWhatsapp } from 'react-icons/fa';
import ServicePage from './pages/ServicePage';

function App() {
  return (
    <Router>
      <div className="app flex flex-col  m-auto">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Slider />
                <OurServices />
                <Aboutus />
                <TestimonialSlider />
              </>
            }
          />
          <Route path="contact" element={<ContactUs />} />
          <Route path="services" element={<ServicePage />} />
        </Routes>
        <div className="whatsapp-icon">
          <FaWhatsapp size={60} className="text-white" />
        </div>
      </div>
    </Router>
  );
}

export default App;