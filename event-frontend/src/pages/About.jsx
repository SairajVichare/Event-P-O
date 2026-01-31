import React from "react";
import { Link } from "react-router-dom";
import aboutBg from "../assets/backgrounds/aboutBg.jpg";
import ownerImg from "../assets/ownerImg.png";
import { motion } from "framer-motion";
import ScrollToTopButton from "../components/ScrollToTopButton";

const About = () => {
  const stats = [
    { value: "15+", label: "Team Members" },
    { value: "425+", label: "Events Executed" },
    { value: "10+", label: "Years Experience" },
    { value: "300+", label: "Happy Clients" },
  ];

  const features = [
    {
      icon: "✨",
      title: "Premium Event Design",
      desc: "Luxury setups crafted to perfection.",
    },
    {
      icon: "🎯",
      title: "Flawless Planning",
      desc: "Every detail executed smoothly.",
    },
    {
      icon: "🤝",
      title: "Trusted Team",
      desc: "Professional, reliable, experienced.",
    },
    {
      icon: "📸",
      title: "Picture Perfect",
      desc: "Memories captured beautifully.",
    },
  ];

  const skills = [
    { title: "Create", percent: 100 },
    { title: "Design", percent: 100 },
    { title: "Produce", percent: 100 },
  ];

  return (
    <>
      <ScrollToTopButton />
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-white text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Crafting Celebrations,
            <span className="text-yellow-400"> Creating Memories</span>
          </h1>

          <p className="text-gray-200 text-lg mb-8">
            Turning your vision into unforgettable premium experiences.
          </p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold"
            >
              Contact Us 🚀
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ABOUT COMPANY */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-white flex items-center py-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={aboutBg}
            className="rounded-xl shadow-2xl"
          />

          <div>
            <h2 className="text-4xl font-bold mb-4">
              We build experiences, not events.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Trupp & Fest delivers luxury event planning with creativity,
              precision, and unforgettable style.
            </p>
          </div>
        </div>
      </motion.section>

      {/* WHY CHOOSE US + STATS */}
      <section className="min-h-screen bg-black text-white flex items-center py-24">
        <div className="max-w-7xl mx-auto px-6 w-full">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="uppercase text-yellow-400 tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-bold">
              Excellence Meets Creativity
            </h2>
          </motion.div>

          {/* Features */}
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white/10 border border-white/20 p-6 rounded-xl"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ scale: 1.05 }}
                className="bg-yellow-400 text-black p-6 rounded-xl text-center font-bold"
              >
                <p className="text-3xl">{s.value}</p>
                <p className="text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="min-h-screen bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Skills</h2>

          {skills.map((skill) => (
            <div key={skill.title} className="mb-8">
              <p className="font-semibold mb-2">{skill.title}</p>
              <div className="bg-gray-200 h-3 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  transition={{ duration: 1.5 }}
                  className="bg-yellow-400 h-3 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="min-h-screen bg-white flex items-center py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Founder Name</h2>
            <p className="text-gray-600">
              Passionate about turning dreams into reality through events.
            </p>
          </div>

          <motion.img
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            src={ownerImg}
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>
    </>
  );
};

export default About;
