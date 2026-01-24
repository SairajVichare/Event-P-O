import React from "react";
import { Link } from "react-router-dom";
import aboutBg from "../assets/aboutBg.jpg";
import ownerImg from "../assets/ownerImg.png";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { value: "15+", label: "Team Members" },
    { value: "425+", label: "Events Executed" },
    { value: "10+", label: "Years of Excellence" },
    { value: "300+", label: "Happy Clients" },
  ];

  const features = [
    {
      icon: "✨",
      title: "Premium Event Design",
      desc: "We create events that feel luxurious, elegant, and unforgettable.",
    },
    {
      icon: "🎯",
      title: "Perfect Planning",
      desc: "Smooth execution with zero stress — from concept to final moment.",
    },
    {
      icon: "🤝",
      title: "Trusted Team",
      desc: "Professional crew, transparent communication, and reliable delivery.",
    },
    {
      icon: "📸",
      title: "Picture-Perfect Moments",
      desc: "Aesthetic setups and detail-driven experiences your guests will love.",
    },
  ];

  const skills = [
    { title: "Create", percent: 100 },
    { title: "Design", percent: 100 },
    { title: "Produce", percent: 100 },
  ];

  return (
    <>
      {/* ================= SECTION 1 : HERO ================= */}
      <section
        className="relative min-h-screen pt-[100px] flex items-center bg-fixed"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-sm tracking-wide mb-6"
              >
                ⭐ About Trupp & Fest
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
              >
                Crafting Celebrations,
                <br />
                <span className="text-yellow-400">
                  Creating Lifelong Memories
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
              >
                We turn your vision into a premium experience — with creativity,
                precision, and flawless execution.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-yellow-400 text-black px-8 py-3 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
                  >
                    Contact Us 🚀
                  </motion.button>
                </Link>

                <a href="#about-company">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto border-2 border-white/70 text-white px-8 py-3 font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
                  >
                    Explore More ↓
                  </motion.button>
                </a>
              </motion.div>
            </div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">
                Why People Choose Us 💛
              </h3>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.12 },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {features.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      show: { opacity: 1, y: 0 },
                    }}
                  >
                    <FeatureCard
                      icon={item.icon}
                      title={item.title}
                      desc={item.desc}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mini Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((s) => (
              <StatMini key={s.label} value={s.value} label={s.label} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2 : ABOUT COMPANY ================= */}
      <section
        id="about-company"
        className="min-h-screen bg-white flex items-center py-24"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <SectionHeading
            tag="About the Company"
            title="Trupp & Fest"
            desc="A one-stop premium solution for event planning — designed with taste, planned with strategy, executed with perfection."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={aboutBg}
                alt="About Company"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 left-6 bg-yellow-400 text-black px-6 py-4 rounded-xl shadow-xl font-semibold">
                Premium Event Planning ✨
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-5">
                We don’t just plan events.
                <span className="text-yellow-500"> We build experiences.</span>
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                Trupp & Fest is built for people who want celebrations that feel
                effortless, stylish, and unforgettable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <MiniCard
                  title="End-to-End Execution"
                  desc="From ideation to final closing — everything under one roof."
                />
                <MiniCard
                  title="Detail-Driven Setup"
                  desc="Small details matter. We perfect every angle & element."
                />
                <MiniCard
                  title="Modern Aesthetic"
                  desc="Luxury décor, trending designs and beautiful staging."
                />
                <MiniCard
                  title="Reliable Delivery"
                  desc="Timely, transparent, and professional event operations."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3 : SKILLS ================= */}
      <section className="min-h-screen bg-black text-white flex items-center py-24">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <SectionHeading
            dark
            tag="Our Skills"
            title="Experience is the greatest wealth."
            desc="Creative direction + flawless execution = unforgettable celebrations."
          />

          <div className="mt-12 space-y-8">
            {skills.map((skill) => (
              <SkillBar
                key={skill.title}
                title={skill.title}
                percent={skill.percent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4 : FOUNDER ================= */}
      <section className="min-h-screen bg-white flex items-center py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Founder Text */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="uppercase tracking-widest text-yellow-500 mb-3 font-semibold">
                The Founder
              </p>

              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Founder Name
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                A passionate event planner with a vision to transform moments
                into lifelong memories.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-gray-700 text-lg italic leading-relaxed">
                  “A successful event is not just organized — it is felt.”
                </p>
                <p className="mt-4 text-gray-500 font-medium">
                  — Founder, Trupp & Fest
                </p>
              </div>
            </motion.div>

            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              animate={{ y: [0, -8, 0] }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-yellow-400/20 blur-2xl rounded-full" />

              <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl p-6">
                <img
                  src={ownerImg}
                  alt="Founder"
                  className="rounded-xl w-full object-cover"
                />

                <div className="mt-6 flex items-center justify-between">
                  <p className="font-bold text-gray-900 text-lg">
                    Founder Name
                  </p>
                  <span className="text-sm px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
                    Visionary 💡
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ===================== COMPONENTS ===================== */

const SectionHeading = ({ tag, title, desc, dark }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center max-w-3xl mx-auto"
  >
    <p
      className={`uppercase tracking-[0.25em] mb-3 font-semibold ${
        dark ? "text-gray-400" : "text-yellow-500"
      }`}
    >
      {tag}
    </p>

    <h2
      className={`text-3xl md:text-4xl font-extrabold ${
        dark ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
    </h2>

    <p
      className={`mt-4 text-lg leading-relaxed ${
        dark ? "text-gray-300" : "text-gray-600"
      }`}
    >
      {desc}
    </p>
  </motion.div>
);

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white/10 border border-white/15 rounded-xl p-5 hover:bg-white/15 transition duration-300">
    <div className="text-2xl mb-3">{icon}</div>
    <h4 className="font-bold text-white">{title}</h4>
    <p className="text-gray-200 text-sm mt-2 leading-relaxed">{desc}</p>
  </div>
);

const MiniCard = ({ title, desc }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition"
  >
    <p className="font-bold text-gray-900">{title}</p>
    <p className="text-gray-600 text-sm mt-2 leading-relaxed">{desc}</p>
  </motion.div>
);

const SkillBar = ({ title, percent }) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <p className="font-semibold">{title}</p>
      <p className="text-gray-300">{percent}%</p>
    </div>

    <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-3 bg-yellow-400 rounded-full"
      />
    </div>
  </div>
);

const StatMini = ({ value, label }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-5 text-center hover:bg-white/15 transition"
  >
    <p className="text-3xl font-extrabold text-yellow-400">{value}</p>
    <p className="text-sm text-gray-200 mt-1">{label}</p>
  </motion.div>
);

export default About;
