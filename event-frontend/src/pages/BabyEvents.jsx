import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";
import heroImg from "../assets/babyEvents/2.jpg";
import img2 from "../assets/babyEvents/2.jpg";
import img3 from "../assets/babyEvents/3.jpg";
import img4 from "../assets/babyEvents/4.jpg";
import img5 from "../assets/babyEvents/5.jpg";
import img6 from "../assets/babyEvents/6.jpg";
import img7 from "../assets/babyEvents/7.jpg";
import img8 from "../assets/babyEvents/8.jpg";
import img9 from "../assets/babyEvents/9.jpg";

const BabyEvents = () => {
  const services = [
    { name: "Baby Shower Decoration", img: img2 },
    { name: "Naming Ceremony Setup", img: img3 },
    { name: "Theme Décor", img: img4 },
    { name: "Games & Activities", img: img5 },
    { name: "Return Gifts", img: img6 },
    { name: "Photography", img: img7 },
    { name: "Catering", img: img8 },
    { name: "Invitations", img: img9 }
  ];

  const galleryImages = [img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <div className="w-full min-h-screen">
      <ScrollToTopButton />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
          animate={{ 
            scale: [1.1, 1.15, 1.1],
            rotate: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-pink-300/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/90 via-pink-800/70 to-purple-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-white"
          style={{ transform: "perspective(1000px)" }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "backOut" }}
            className="text-pink-300 uppercase tracking-[0.3em] mb-4 text-sm font-light"
          >
            Baby Event Planning
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: -45 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "backOut" }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            style={{ 
              textShadow: "0 15px 35px rgba(0,0,0,0.7), 0 5px 15px rgba(236,72,153,0.4)" 
            }}
          >
            <motion.span
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(236,72,153,0.5)",
                  "0 0 40px rgba(236,72,153,0.8)",
                  "0 0 20px rgba(236,72,153,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Creating Precious
            </motion.span> <br />
            <span className="bg-gradient-to-r from-pink-300 via-white to-pink-200 bg-clip-text text-transparent">
              Memories
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="text-xl text-pink-100 mb-8 max-w-2xl leading-relaxed"
          >
            We specialize in baby showers, naming ceremonies, and themed celebrations with beautiful décor and joyful experiences.
          </motion.p>

          <Link to="/contact">
            <motion.button
              initial={{ opacity: 0, y: 50, scale: 0.7, rotateX: -45 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ delay: 1.5, duration: 1, ease: "backOut" }}
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 25px 50px rgba(236, 72, 153, 0.6)",
                rotateX: 8,
                y: -5
              }}
              whileTap={{ scale: 0.92, rotateX: -5 }}
              className="bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl transform transition-all duration-500 hover:shadow-pink-500/50"
              style={{ transform: "perspective(1000px)" }}
            >
              Contact Us ✨
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-pink-200/20 rounded-full blur-xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_60%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-pink-700 to-purple-600 bg-clip-text text-transparent mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Our Services
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  y: 80, 
                  rotateX: -30,
                  scale: 0.8
                }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0, 
                  rotateX: 0,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.15,
                  ease: "backOut"
                }}
                whileHover={{ 
                  y: -15, 
                  rotateX: 8,
                  rotateY: 8,
                  scale: 1.05,
                  boxShadow: "0 30px 60px rgba(236, 72, 153, 0.25)",
                  transition: { duration: 0.3 }
                }}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl border border-pink-100/50"
                style={{ transform: "perspective(1000px)" }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={service.img}
                    alt={service.name}
                    className="w-full h-48 object-cover transition-all duration-700"
                    whileHover={{ scale: 1.15, rotate: 2 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-purple-900/30 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Floating Icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <span className="text-white text-sm">✨</span>
                  </motion.div>
                </div>
                <motion.div 
                  className="p-6"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 text-center">
                    {service.name}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-pink-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(236,72,153,0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(147,51,234,0.4) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, rgba(236,72,153,0.4) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-pink-300/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, -30, -10],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              animate={{
                textShadow: [
                  "0 0 20px rgba(236,72,153,0.5)",
                  "0 0 40px rgba(236,72,153,0.8)",
                  "0 0 20px rgba(236,72,153,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Baby Events Gallery
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-pink-400 to-white mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  scale: 0.6, 
                  rotateY: -45,
                  z: -100
                }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotateY: 0,
                  z: 0
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: "backOut"
                }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 10,
                  rotateX: 10,
                  z: 50,
                  boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
                  transition: { duration: 0.4 }
                }}
                className="group relative overflow-hidden rounded-3xl transform transition-all duration-500 cursor-pointer"
                style={{ transform: "perspective(1000px)" }}
              >
                <motion.img
                  src={img}
                  alt="Gallery"
                  className="w-full h-64 object-cover transition-all duration-700"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 3,
                    filter: "brightness(1.1) contrast(1.1)"
                  }}
                />
                {/* Animated Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-purple-900/50 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Floating Label */}
                <motion.div 
                  className="absolute bottom-4 left-4 text-white"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-bold text-lg">Baby Event {i + 1}</p>
                  <motion.div
                    className="w-8 h-0.5 bg-pink-400 mt-1"
                    initial={{ width: 0 }}
                    whileHover={{ width: 32 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  />
                </motion.div>
                {/* Corner Decoration */}
                <motion.div
                  className="absolute top-4 right-4 w-6 h-6 border-2 border-white/50 rounded-full"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  whileHover={{ scale: 1.3, rotate: 180 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-20 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 relative overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        {/* Floating Hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              rotate: [0, 360, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            ♥
          </motion.div>
        ))}
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.8, rotateX: -30 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 30px rgba(255,255,255,0.5)",
                  "0 0 50px rgba(255,255,255,0.8)",
                  "0 0 30px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Let's Celebrate Your Baby's Special Day 🎈
            </motion.span>
          </motion.h2>
          
          <Link to="/contact">
            <motion.button
              initial={{ opacity: 0, y: 50, scale: 0.7, rotateX: -45 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "backOut" }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
                rotateX: 10,
                y: -8
              }}
              whileTap={{ scale: 0.9, rotateX: -10 }}
              className="bg-white text-pink-600 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl transform transition-all duration-500 hover:shadow-white/20"
              style={{ transform: "perspective(1000px)" }}
            >
              <motion.span
                animate={{ 
                  color: ["#ec4899", "#be185d", "#ec4899"]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Call Us Now
              </motion.span>
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default BabyEvents;