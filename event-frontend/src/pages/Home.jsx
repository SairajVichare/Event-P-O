import React from "react";
import heroImage from "../assets/HomeBackground.jpg";
import aboutBg from "../assets/AboutInHome.jpeg";
import leftImage from "../assets/leftImage.jpeg";
import rightImage from "../assets/rightImage.jpeg";
import {
  FaRing,
  FaBirthdayCake,
  FaHeart,
  FaBuilding,
  FaBaby,
  FaCamera,
  FaPalette,
} from "react-icons/fa";
import { MdCelebration, MdEvent } from "react-icons/md";
import { motion } from "framer-motion"; // for card animation

// Service data
const services = [
  {
    title: "Wedding Events",
    desc: "Complete wedding planning & execution.",
    icon: <FaRing />,
  },
  {
    title: "Birthday Parties",
    desc: "Fun-filled birthday celebrations.",
    icon: <FaBirthdayCake />,
  },
  {
    title: "Anniversary Events",
    desc: "Celebrate love & milestones.",
    icon: <FaHeart />,
  },
  {
    title: "Corporate Events",
    desc: "Professional corporate gatherings.",
    icon: <FaBuilding />,
  },
  {
    title: "Baby Shower",
    desc: "Beautiful baby shower setups.",
    icon: <FaBaby />,
  },
  {
    title: "Engagement Ceremony",
    desc: "Elegant engagement celebrations.",
    icon: <MdCelebration />,
  },
  {
    title: "Theme Parties",
    desc: "Creative themed events.",
    icon: <MdEvent />,
  },
  {
    title: "Photography",
    desc: "Capture unforgettable moments.",
    icon: <FaCamera />,
  },
  {
    title: "Decorations",
    desc: "Premium décor & styling.",
    icon: <FaPalette />,
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="h-screen bg-fixed bg-cover bg-center flex items-center px-8 md:px-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroImage})`,
        }}
      >
        <div className="max-w-2xl p-8">
          <p className="text-yellow-400 tracking-widest font-semibold mb-3">
            OUR SERVICES
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Turns Your Celebrations Into <br />
            <span className="text-white">Unforgettable Signature Events</span>
          </h1>

          <p className="text-gray-200 mb-8 leading-relaxed">
            At YB Event, every celebration begins with a story — yours. From
            birthdays to corporate events, we create unforgettable experiences
            through thoughtful planning and flawless execution.
          </p>

          <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 font-medium hover:bg-yellow-400 hover:text-black transition duration-300">
            Contact Us
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        className="h-screen bg-fixed bg-cover bg-center flex items-center justify-end px-6 md:px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${aboutBg})`,
        }}
      >
        <div className="max-w-xl bg-black/60 backdrop-blur-md text-white p-10 rounded-xl shadow-xl">
          <p className="uppercase tracking-widest text-sm mb-3">About us</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider">
            EVENT ORGANIZER IN <br />
            <span className="text-white">MUMBAI</span>
          </h2>

          <p className="text-gray-200 leading-relaxed mb-8">
            At We & You Events, we do not believe in events, we believe in
            creating memories with you that stays with you and your loved ones
            forever.
          </p>

          <button className="bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-gray-200 transition">
            OUR STORY
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#f6fbfb]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="text-sm tracking-widest text-orange-500 font-semibold mb-2">
              WE DO EVERYTHING
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
          </div>

          {/* Horizontal Scroll with Motion Cards */}
          <div className="relative">
            {/* Optional Scroll Arrows */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-10 hidden md:block"
              onClick={() => {
                document
                  .getElementById("services-scroll")
                  .scrollBy({ left: -300, behavior: "smooth" });
              }}
            >
              &#8592;
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-10 hidden md:block"
              onClick={() => {
                document
                  .getElementById("services-scroll")
                  .scrollBy({ left: 300, behavior: "smooth" });
              }}
            >
              &#8594;
            </button>

            <div
              id="services-scroll"
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 focus:outline-none"
              tabIndex={0} // keyboard accessible
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="group min-w-[260px] snap-center bg-white rounded-2xl p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className="text-4xl text-orange-500 mb-4 transition-colors duration-300 group-hover:text-orange-600"
                    aria-label={service.title}
                  >
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-orange-600">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="max-w-4xl mx-auto mt-12 text-center text-gray-600 text-sm leading-relaxed">
            YB Event Organisers offers end-to-end solutions for weddings,
            birthdays, corporate events, baby showers, and more — delivering
            seamless, unforgettable experiences tailored to your vision.
          </p>
        </div>
      </section>

      {/* Stats / Achievements Section with Images */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 items-stretch">
          {/* Left Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={leftImage}
              alt="Birthday Event"
              className="rounded-xl shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Stats Card */}
          <div className="w-full md:w-1/3 bg-white shadow-xl rounded-xl p-10 flex flex-col justify-center items-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bringing Visions to Life <br />
              <span className="text-gray-600 font-medium">
                with Precision and Passion
              </span>
            </h2>
            <p className="text-gray-500 mb-8">
              Crafting unforgettable events where every detail tells your story.
            </p>

            <div className="grid grid-cols-2 gap-6 w-full">
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-yellow-400">15+</p>
                <p className="text-gray-700 font-medium">Team Members</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-yellow-400">425+</p>
                <p className="text-gray-700 font-medium">Number of Events</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-yellow-400">10+</p>
                <p className="text-gray-700 font-medium">Years of Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-4xl font-bold text-yellow-400">300+</p>
                <p className="text-gray-700 font-medium">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={rightImage}
              alt="Decor Event"
              className="rounded-xl shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
