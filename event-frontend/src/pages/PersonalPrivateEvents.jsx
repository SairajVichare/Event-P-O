import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";
import heroImg from "../assets/personal-privateEvents/1.jpg";
import img2 from "../assets/personal-privateEvents/2.jpg";
import img3 from "../assets/personal-privateEvents/3.jpg";
import img4 from "../assets/personal-privateEvents/4.jpg";
import img5 from "../assets/personal-privateEvents/5.jpg";
import img6 from "../assets/personal-privateEvents/6.jpg";
import img7 from "../assets/personal-privateEvents/7.jpg";
import img8 from "../assets/personal-privateEvents/8.jpg";
import img9 from "../assets/personal-privateEvents/9.jpg";

const PersonalPrivateEvents = () => {
  const services = [
    { name: "Private Party Decoration", img: img2 },
    { name: "Theme Setup", img: img3 },
    { name: "Lighting & Ambience", img: img4 },
    { name: "Music & DJ", img: img5 },
    { name: "Catering", img: img6 },
    { name: "Photography", img: img7 },
    { name: "Surprise Planning", img: img8 },
    { name: "Complete Coordination", img: img9 }
  ];

  const galleryImages = [img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="w-full min-h-screen">
      <ScrollToTopButton />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-[20s] ease-out hover:scale-100"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-indigo-800/60 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-white"
          style={{ transform: "perspective(1000px)" }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-purple-300 uppercase tracking-[0.3em] mb-4 text-sm font-light"
          >
            Personal & Private Event Planning
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "backOut" }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ textShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
          >
            Intimate Celebrations <br />
            <span className="bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent">
              Made Special
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl text-purple-100 mb-8 max-w-2xl leading-relaxed"
          >
            From private parties to exclusive gatherings, we design elegant and personalized events that reflect your style, emotions, and unforgettable moments.
          </motion.p>

          <Link to="/contact">
            <motion.button
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)",
                rotateX: 5
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl transform transition-all duration-300"
              style={{ transform: "perspective(1000px)" }}
            >
              Contact Us ✨
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-800 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(147, 51, 234, 0.2)"
                }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500"
                style={{ transform: "perspective(1000px)" }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-purple-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Private Events Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-white mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.4)"
                }}
                className="group relative overflow-hidden rounded-2xl transform transition-all duration-500 cursor-pointer"
                style={{ transform: "perspective(1000px)" }}
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="font-semibold">Private Event {i + 1}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-20 bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Let's Create Something Personal ✨
          </motion.h2>
          
          <Link to="/contact">
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                rotateX: 5
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transform transition-all duration-300"
              style={{ transform: "perspective(1000px)" }}
            >
              Call Us Now
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default PersonalPrivateEvents;