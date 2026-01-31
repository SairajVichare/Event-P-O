import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const PersonalPrivateEvents = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <ScrollToTopButton />

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/images/private-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-white"
        >
          <p className="text-purple-300 uppercase tracking-widest mb-3">
            Personal & Private Event Planning
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Intimate Celebrations <br />
            Made Truly Special
          </h1>

          <p className="mt-4 max-w-2xl text-gray-200">
            From private parties to exclusive gatherings, we design
            elegant and personalized events that reflect your style,
            emotions, and unforgettable moments.
          </p>

          <Link to="/contact">
            <motion.button
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-6 bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-md font-semibold"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* INTRO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-[70vh] flex items-center"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Personal & Private Events Management
          </h2>

          <p className="text-gray-600 leading-8">
            We specialize in planning private celebrations such as house
            parties, anniversaries, surprise events, and intimate gatherings
            with complete attention to detail and privacy.
          </p>
        </div>
      </motion.section>

      {/* SERVICES GRID */}
      <section className="bg-gray-50 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Services
          </h2>

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 sm:grid-cols-2 gap-6"
          >
            {[
              "Private Party Decoration",
              "Theme Setup",
              "Lighting & Ambience",
              "Music & DJ",
              "Catering",
              "Photography",
              "Surprise Planning",
              "Complete Coordination",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariant}
                whileHover={{ scale: 1.05 }}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={`/images/private-service${i + 1}.jpg`}
                  alt=""
                  className="h-40 w-full object-cover"
                />
                <div className="p-4 text-center font-semibold">
                  {item}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="min-h-screen flex items-center"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
          <h2 className="text-3xl font-bold text-center mb-10">
            Private Events Gallery
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
              <motion.img
                key={img}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src={`/images/private-gallery${img}.jpg`}
                alt=""
                className="rounded-lg shadow-md cursor-pointer"
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 min-h-[70vh] flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-16 w-full">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>

          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              "Personalized Planning",
              "Privacy & Trust",
              "Premium Experience",
            ].map((title, i) => (
              <motion.div
                key={i}
                variants={itemVariant}
                className="bg-white p-6 rounded-lg shadow text-center"
              >
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">
                  We focus on exclusivity, privacy, and customized
                  experiences that make your event truly special.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-purple-500 text-white py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Let’s Create Something Personal ✨
        </h2>

        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-black px-6 py-3 rounded-md font-semibold hover:bg-gray-800"
          >
            Call Us Now
          </motion.button>
        </Link>
      </motion.section>

    </div>
  );
};

export default PersonalPrivateEvents;
