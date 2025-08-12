import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketSectors from './components/MarketSectors';
import TrustedFactorySection from './components/TrustedFactorySection';
import ProductCardsSection from './components/ProductCardsSection';
import OurServices from './components/OurServices';
import WhyChooseUs from './components/WhyChooseUs';
import SponsorsSection from './components/SponsorsSection';
import FooterSection from './components/FooterSection';
import AboutUsPage from './pages/AboutUsPage';
import SpecializingPage from './pages/SpecializingPage';
import QualityPage from './pages/QualityPage';
import WorkingWithPage from './pages/WorkingWithPage';
import ContactPage from './pages/ContactPage';

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <MarketSectors />
    <TrustedFactorySection />
    <ProductCardsSection />
    <OurServices />
    <WhyChooseUs />
    <SponsorsSection />
    <FooterSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/specializing" element={<SpecializingPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/workingwith" element={<WorkingWithPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
