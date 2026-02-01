import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import aboutBg from "../assets/backgrounds/aboutBg.jpg";
import ownerImg from "../assets/ownerImg.png";
import { motion } from "framer-motion";
import ScrollToTopButton from "../components/ScrollToTopButton";

/* ===================== COUNT UP ===================== */
const CountUp = ({ target, duration = 1200 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.6 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {count === target && "+"}
    </span>
  );
};

/* ===================== ABOUT ===================== */
const About = () => {
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

  const stats = [
    { value: 15, label: "Team Members" },
    { value: 225, label: "Events Done" },
    { value: 10, label: "Years Experience" },
    { value: 185, label: "Happy Clients" },
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
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Background Image */}
        <img
          src={aboutBg}
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-white text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6">
            Crafting Celebrations,
            <span className="text-yellow-400"> Creating Memories</span>
          </h1>

          <p className="text-gray-200 text-base sm:text-lg mb-8">
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
      <section className="min-h-screen bg-[#f6fbfb] flex items-center py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <img
            src={aboutBg}
            alt="About YB Events"
            className="rounded-[32px] shadow-2xl"
          />

          <div className="bg-white/90 rounded-[32px] shadow-2xl p-6 sm:p-10 md:p-14 border">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              We build experiences,
              <br />
              <span className="text-yellow-400">not just events.</span>
            </h2>

            <p className="text-gray-600 mb-6">
              At YB Event Organizers, we believe every celebration should feel
              personal, elegant, and unforgettable.
            </p>

            <p className="text-gray-600 mb-10">
              From intimate gatherings to grand-scale celebrations, we curate
              every detail with care.
            </p>

            <Link to="/contact">
              <button className="border-2 border-yellow-400 px-10 py-3 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                WORK WITH US
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US + STATS */}
      <section className="min-h-screen bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase text-yellow-400 tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-bold">Excellence Meets Creativity</h2>
          </div>

          {/* FEATURES */}
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            {features.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 p-8 rounded-2xl border border-white/20"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-5xl font-extrabold text-yellow-400">
                  <CountUp target={s.value} />
                </p>
                <p className="text-gray-300 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="relative py-28 bg-gradient-to-b from-white to-[#f6fbfb]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-yellow-400 tracking-[0.35em] text-sm font-semibold mb-3">
              OUR EXPERTISE
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Our <span className="text-yellow-400">Skills</span>
            </h2>
          </motion.div>

          {/* Skills Card */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-[36px] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] p-14 border border-gray-100">
            {/* Glow */}
            <div className="absolute -inset-6 bg-yellow-400/10 blur-3xl rounded-full -z-10"></div>

            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="mb-12 last:mb-0"
              >
                {/* Title + Percent */}
                <div className="flex justify-between items-center mb-3">
                  <p className="text-lg font-semibold text-gray-800">
                    {skill.title}
                  </p>
                  <span className="text-sm font-bold text-yellow-500">
                    {skill.percent}%
                  </span>
                </div>

                {/* Progress Track */}
                <div className="relative h-4 rounded-full bg-gray-200 overflow-hidden">
                  {/* Animated Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    className="absolute left-0 top-0 h-full rounded-full
                         bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                         shadow-[0_0_20px_rgba(255,193,7,0.6)]"
                  />

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="relative py-32 bg-gradient-to-b from-white to-[#f6fbfb]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Accent line */}
            <div className="w-20 h-1 bg-yellow-400 mb-6 rounded-full"></div>

            <p className="uppercase tracking-[0.35em] text-yellow-500 text-sm font-semibold mb-4">
              Founder & Visionary
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Aashish and Sairaj
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Passionate about transforming ideas into unforgettable
              experiences, Founder Name brings creativity, precision, and
              leadership to every celebration crafted by the team.
            </p>

            <p className="text-gray-600 leading-relaxed mb-10">
              With a deep understanding of design, execution, and human
              emotions, the vision is simple — create moments that don’t just
              impress, but stay with people forever.
            </p>

            {/* CTA */}
            <Link to="/contact">
              <button className="relative overflow-hidden rounded-full border-2 border-yellow-400 px-10 py-3 text-sm font-semibold tracking-widest text-yellow-500 transition-all duration-300 hover:text-black">
                <span className="absolute inset-0 bg-yellow-400 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
                <span className="relative">CONNECT WITH US</span>
              </button>
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-8 bg-yellow-400/20 blur-3xl rounded-full"></div>

            {/* Image Card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative bg-white/90 backdrop-blur-xl rounded-[36px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.3)] p-6"
            >
              <img
                src={ownerImg}
                alt="Founder"
                className="rounded-[28px] object-cover w-full h-[320px] sm:h-[420px] md:h-[520px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
