import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import heroImage from "../assets/backgrounds/HomeBackground.jpg";
import aboutBg from "../assets/backgrounds/AboutInHome.jpeg";
import leftImage from "../assets/leftImage.jpeg";
import rightImage from "../assets/rightImage.jpeg";
import faqBg from "../assets/faq-bg.jpg";
import ScrollToTopButton from "../components/ScrollToTopButton";
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
import { motion } from "framer-motion";

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

/* ===================== SERVICES ===================== */
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

/* ===================== FAQ ===================== */
const faqs = [
  {
    question: "What is the minimum budget for event decoration?",
    answer:
      "Our decoration packages typically start from ₹25,000. However, the final cost depends on the event type, venue size, theme, and customization requirements.",
  },
  {
    question: "Do you provide end-to-end event management?",
    answer:
      "Yes, we offer complete end-to-end event management including planning, décor, vendors, coordination, and on-ground execution.",
  },
  {
    question: "How early should we book your services?",
    answer:
      "We recommend booking at least 3–4 weeks in advance to ensure availability and proper planning, especially during peak seasons.",
  },
  {
    question: "Can you customize events based on our theme?",
    answer:
      "Absolutely! Every event we create is fully customized to match your vision, theme, budget, and personal preferences.",
  },
  {
    question: "Do you handle corporate and private events both?",
    answer:
      "Yes, we specialize in weddings, private celebrations, and corporate events including conferences, product launches, and team outings.",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <>
      <ScrollToTopButton />

      {/* ===================== HERO ===================== */}
      <section
        className="min-h-screen pt-[105px] bg-scroll md:bg-fixed bg-cover bg-center flex items-center px-8 md:px-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${heroImage})`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="max-w-2xl p-8 backdrop-blur-sm"
        >
          <p className="text-yellow-400 uppercase tracking-[0.4em] text-sm font-semibold mb-6 flex items-center gap-3">
            <span className="h-[1px] w-10 bg-yellow-400"></span>
            Our Services
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-8 tracking-tight">
            Turns Your Celebrations Into <br />
            <span className="text-yellow-400">Unforgettable</span>{" "}
            <span className="text-white">Signature Events</span>
          </h1>

          <p className="text-gray-300 max-w-xl mb-12 leading-relaxed text-[15px]">
            At YB Event, every celebration begins with a story — yours. From
            birthdays to corporate events, we create unforgettable experiences
            through thoughtful planning and flawless execution.
          </p>

          <Link to="/contact">
            <button className="relative overflow-hidden border border-yellow-400 text-yellow-400 px-10 py-3 font-semibold tracking-widest uppercase text-sm transition duration-300 hover:text-black">
              <span className="absolute inset-0 bg-yellow-400 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
              <span className="relative">Contact Us</span>
            </button>
          </Link>
        </motion.div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section
        className=" min-h-screen bg-scroll md:bg-fixed bg-cover bg-center flex items-center md:items-center justify-end py-20 md:py-0 px-6 md:px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${aboutBg})`,
        }}
      >
        <div className="max-w-3xl bg-black/70 backdrop-blur-lg text-white p-12 rounded-2xl shadow-2xl">
          <p className="uppercase tracking-[0.35em] text-yellow-400 text-sm font-semibold mb-6 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-yellow-400"></span>
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            EVENT ORGANIZER IN <br />
            <span className="text-yellow-400">MUMBAI</span>
          </h2>

          <p className="text-gray-300 text-[16px] md:text-[17px] leading-relaxed mb-10">
            At We & You Events, we don’t just plan events — we craft experiences
            that tell your story. Every celebration is thoughtfully designed
            with emotion, elegance, and attention to detail. From intimate
            gatherings to grand occasions, we transform ideas into unforgettable
            moments. Our passion lies in creating memories that feel personal,
            timeless, and meaningful. Because for us, it’s not just an event —
            it’s a memory you’ll cherish forever.
          </p>

          <Link to="/about">
            <button className="bg-white text-black px-8 py-3 text-sm font-semibold tracking-widest uppercase rounded-full hover:bg-yellow-400 hover:text-black transition duration-300">
              Our Story
            </button>
          </Link>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="py-28 bg-[#f6fbfb] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm tracking-[0.35em] text-orange-500 font-semibold mb-3 flex justify-center gap-4">
              <span className="w-10 h-[1px] bg-orange-500 mt-2"></span>
              WE DO EVERYTHING
              <span className="w-10 h-[1px] bg-orange-500 mt-2"></span>
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
          </div>

          <div className="relative">
            <div
              id="services-scroll"
              className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-10"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group min-w-[260px] snap-center bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500 text-3xl transition-all duration-500 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed max-w-[220px] mx-auto">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="max-w-4xl mx-auto mt-16 text-center text-gray-600 text-sm leading-relaxed">
            YB Event Organisers offers end-to-end solutions for weddings,
            birthdays, corporate events, baby showers, and more — delivering
            seamless, unforgettable experiences tailored to your vision.
          </p>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="py-28 bg-[#f6fbfb] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          {/* LEFT IMAGE */}
          <div className="w-full md:w-[30%]">
            <img
              src={leftImage}
              alt="Luxury Event Decor"
              className="rounded-[32px] shadow-2xl object-cover h-[520px] w-full
                   transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* CENTER CARD */}
          <div className="relative w-full md:w-[40%]">
            {/* Gold Glow */}
            <div className="absolute -inset-6 bg-yellow-400/10 blur-3xl rounded-full"></div>

            <div
              className="relative bg-white/95 backdrop-blur-xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]
                      rounded-[36px] p-16 text-center border border-gray-100"
            >
              <h2 className="text-4xl font-extrabold leading-tight mb-10">
                Bringing Visions to Life
                <span className="block mt-2 text-gray-500 font-medium text-2xl">
                  with Precision & Passion
                </span>
              </h2>

              <div className="grid grid-cols-2 gap-y-12 gap-x-8 relative">
                <div>
                  <p className="text-5xl font-extrabold text-yellow-400">
                    <CountUp target={15} />
                  </p>
                  <p className="text-gray-700 font-medium">Team Members</p>
                </div>

                <div>
                  <p className="text-5xl font-extrabold text-yellow-400">
                    <CountUp target={225} />
                  </p>
                  <p className="text-gray-700 font-medium">Events Done</p>
                </div>

                <div>
                  <p className="text-5xl font-extrabold text-yellow-400">
                    <CountUp target={10} />
                  </p>
                  <p className="text-gray-700 font-medium">Years Experience</p>
                </div>

                <div>
                  <p className="text-5xl font-extrabold text-yellow-400">
                    <CountUp target={185} />
                  </p>
                  <p className="text-gray-700 font-medium">Happy Clients</p>
                </div>

                {/* Divider lines */}
                <span className="absolute inset-y-0 left-1/2 w-px bg-gray-200"></span>
                <span className="absolute inset-x-0 top-1/2 h-px bg-gray-200"></span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-[30%]">
            <img
              src={rightImage}
              alt="Luxury Wedding Setup"
              className="rounded-[32px] shadow-2xl object-cover h-[520px] w-full
                   transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section
        className="relative max-w-7xl mx-auto mt-24 rounded-[2.5rem] overflow-hidden bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage: `
      linear-gradient(
        120deg,
        rgba(0,0,0,0.75),
        rgba(0,0,0,0.55)
      ),
      url(${faqBg})
    `,
        }}
      >
        {/* Decorative glow */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl"></div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 px-10 md:px-16 py-24 text-white">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <p className="text-yellow-400 tracking-[0.3em] text-sm font-semibold mb-4">
              LET’S TALK
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
              Excited to Create Magic?
              <br />
              <span className="text-yellow-400">Let’s Start Planning.</span>
            </h2>

            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              Whether it’s a wedding, private celebration, or a corporate event
              — we transform ideas into unforgettable experiences crafted with
              elegance, precision, and passion.
            </p>
          </div>

          {/* CTA BUTTON */}
          <Link to="/contact" className="group relative mt-8 md:mt-0">
            <span className="absolute inset-0 rounded-full bg-yellow-400 blur-md opacity-40 group-hover:opacity-70 transition"></span>

            <button className="relative flex items-center gap-3 rounded-full border-2 border-yellow-400 px-10 py-4 text-sm md:text-base font-semibold text-yellow-400 transition-all duration-300 group-hover:bg-yellow-400 group-hover:text-black group-hover:scale-105">
              Contact Us
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="max-w-5xl mx-auto px-6 py-28">
        <p className="text-sm tracking-[0.3em] text-yellow-500 font-semibold mb-4">
          FAQ
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4"
                >
                  <span className="font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <span
                    className={`text-2xl transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-yellow-500" : "text-gray-400"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
