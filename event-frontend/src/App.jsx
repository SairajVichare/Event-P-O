import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import EventGallery from "./pages/EventGallery";
import ClientReview from "./pages/ClientReview";
import BabyEvents from "./pages/BabyEvents";
import BirthdayEvents from "./pages/BirthdayEvents"
import FestivalCultural from "./pages/FestivalCulturalEvents"
import PersonalPrivate from "./pages/PersonalPrivateEvents"
import Wedding from "./pages/WeddingEvents"


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:eventType" element={<EventGallery />} />
        <Route path="/reviews" element={<ClientReview />} />
        <Route path="/services/baby-events" element={<BabyEvents />} />
        <Route path="/services/birthday-events" element={<BirthdayEvents />} />
        <Route path="/services/festivalCultural-events" element={<FestivalCultural />} />
        <Route path="/services/personalprivate-events" element={<PersonalPrivate />} />
        <Route path="/services/wedding-events" element={<Wedding />} />

      </Routes>

      <Footer />
    </>
  );
};

export default App;
