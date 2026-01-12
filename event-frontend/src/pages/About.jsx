import React from "react";
import { Link } from "react-router-dom";
import aboutBg from "../assets/aboutBg.jpg";
import ownerImg from "../assets/ownerImg.png"; // owner image

const About = () => {
  return (
    <>
      {/* ================= SLIDE 1 : HERO ================= */}
      <section
        className="relative min-h-screen pt-[100px] flex items-center"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-3xl">
              <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">
                About Us
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Crafting Celebrations,
                <br />
                <span className="text-yellow-400">
                  Creating Lifelong Memories
                </span>
              </h1>

              <p className="text-gray-200 text-lg leading-relaxed">
                We design unforgettable experiences with creativity,
                precision and passion.
              </p>
            </div>

            <Link to="/contact">
              <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 font-medium hover:bg-yellow-400 hover:text-black transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SLIDE 2 : ABOUT COMPANY ================= */}
      <section className="min-h-screen bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={aboutBg}
            alt="About Company"
            className="rounded-lg shadow-lg"
          />

          <div>
            <p className="text-yellow-500 uppercase tracking-widest mb-3">
              About the Company
            </p>
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Trupp & Fest
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Trupp & Fest is a one-stop solution for premium event
              planning. From conceptualizing to execution, we bring
              innovation, elegance, and perfection to every event.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SLIDE 3 : SKILLS / CREATIVE ================= */}
      <section className="min-h-screen bg-black text-white flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="uppercase tracking-widest text-gray-400 mb-4">
            Our Skills
          </p>
          <h2 className="text-4xl font-bold mb-10">
            Experience is great wealth for you.
          </h2>

          {["Create", "Design", "Produce"].map((skill) => (
            <div key={skill} className="mb-6">
              <div className="flex justify-between mb-1">
                <span>{skill}</span>
                <span>100%</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded">
                <div className="bg-yellow-400 h-2 w-full rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SLIDE 4 : FOUNDER ================= */}
      <section className="min-h-screen bg-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-widest text-yellow-500 mb-3">
              The Founder
            </p>
            <h2 className="text-4xl font-bold mb-6">
              Utsav cha Aasiq
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A passionate event planner with a vision to transform
              moments into lifelong memories. Creativity and sincerity
              define her journey.
            </p>
            <p className="italic text-gray-500">
              Founder, Trupp & Fest
            </p>
          </div>

          <img
            src={ownerImg}
            alt="Founder"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* ================= SLIDE 5 : STATS + VISION (KALAKARI VERSION) ================= */}
      <section className="relative min-h-screen bg-gradient-to-b from-gray-100 to-white py-24 overflow-hidden">

        {/* Background Text (Design Element) */}
        <h1 className="absolute top-20 left-1/2 -translate-x-1/2 text-[120px] font-bold text-gray-200 opacity-20 select-none">
          TRUPP & FEST
        </h1>

        <div className="relative max-w-7xl mx-auto px-6 md:px-16">

          {/* ===== STAT BOXES ===== */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
            {[
              ["15+", "Team Members"],
              ["425+", "Events Executed"],
              ["10+", "Years of Excellence"],
              ["300+", "Happy Clients"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="backdrop-blur-md bg-white/70 border border-gray-200
                     rounded-xl p-8 text-center shadow-lg
                     hover:-translate-y-2 hover:shadow-2xl
                     transition-all duration-300"
              >
                <h3 className="text-5xl font-extrabold text-yellow-500 mb-3">
                  {num}
                </h3>
                <p className="text-gray-700 font-medium tracking-wide">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* ===== VISION / MISSION BLOCK ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

            {/* LEFT */}
            <div className="space-y-14">
              <div className="relative pl-8">
                <span className="absolute left-0 top-1 h-full w-[3px] bg-yellow-400"></span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To become the most trusted event planning brand by
                  transforming dreams into extraordinary real-life
                  experiences with elegance and creativity.
                </p>
              </div>

              <div className="relative pl-8">
                <span className="absolute left-0 top-1 h-full w-[3px] bg-yellow-400"></span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Philosophy
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Every celebration deserves detail, emotion, and soul.
                  We believe perfection lies in the smallest elements.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-14">
              <div className="relative pl-8">
                <span className="absolute left-0 top-1 h-full w-[3px] bg-yellow-400"></span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To deliver stress-free, seamless events by managing
                  everything from ideation to execution with passion
                  and professionalism.
                </p>
              </div>

              <div className="relative pl-8">
                <span className="absolute left-0 top-1 h-full w-[3px] bg-yellow-400"></span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Promise
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  We promise unforgettable moments, transparent
                  communication, and experiences that live forever.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  );
};

export default About;
