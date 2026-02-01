import React, { useState } from "react";
import contactBg from "../assets/backgrounds/aboutBg.jpg";
import ScrollToTopButton from "../components/ScrollToTopButton";

/* ================= CONTACT PAGE ================= */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill Name, Phone & Message ✅");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <ScrollToTopButton />

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen pt-[100px] flex items-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

        {/* Spotlight Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,193,7,0.12),transparent_60%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-white">
          <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm tracking-wide border border-white/20">
            ✨ We’d love to hear from you
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Let’s <span className="text-yellow-400">Connect</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-12 leading-relaxed">
            Whether it’s a celebration, collaboration, or career — we’re always
            ready to start a conversation. Drop us a message and we’ll get back
            to you soon.
          </p>

          <div className="flex items-center gap-3 text-sm text-gray-300 tracking-widest">
            <span className="animate-bounce">⬇</span> SCROLL
          </div>
        </div>
      </section>

      {/* ================= SLIDE 2 : CONTACT INFO (PREMIUM) ================= */}
      <section className="relative py-32 bg-gradient-to-b from-white to-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Heading */}
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.35em] text-yellow-400 font-semibold mb-4">
              Contact Channels
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Reach <span className="text-yellow-400">Us</span> Through
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose the best way to connect with our team. We’re quick to
              respond and always happy to assist.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Card */}
            {[
              {
                icon: "📁",
                title: "General Inquiries",
                text: "info@truppfest.com",
                sub: "+91 98203 44426",
                glow: "from-yellow-400/30 to-transparent",
              },
              {
                icon: "🤝",
                title: "Partnerships",
                text: "hr@truppfest.com",
                sub: "+91 91360 21212",
                glow: "from-yellow-300/30 to-transparent",
              },
              {
                icon: "💡",
                title: "Career",
                text: "hr@truppfest.com",
                sub: "HR: +91 93203 83801",
                glow: "from-yellow-500/30 to-transparent",
              },
              {
                icon: "📍",
                title: "Office Address",
                text: "Mumbai, Maharashtra",
                sub: "India",
                glow: "from-yellow-400/30 to-transparent",
              },
              {
                icon: "📞",
                title: "Call Us",
                text: "+91 98203 44426",
                sub: "Mon – Sat, 10am–7pm",
                glow: "from-yellow-300/30 to-transparent",
              },
              {
                icon: "✉️",
                title: "Email Us",
                text: "info@truppfest.com",
                sub: "We reply within 24 hrs",
                glow: "from-yellow-500/30 to-transparent",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group rounded-[28px] bg-white/80 backdrop-blur-xl
                     border border-gray-100 p-10 text-center
                     shadow-[0_25px_70px_-25px_rgba(0,0,0,0.15)]
                     hover:-translate-y-4 hover:shadow-[0_40px_90px_-30px_rgba(255,193,7,0.35)]
                     transition-all duration-500"
              >
                {/* Glow */}
                <div
                  className={`absolute -inset-6 bg-gradient-to-b ${item.glow}
                        blur-3xl opacity-0 group-hover:opacity-100
                        transition duration-500 -z-10`}
                ></div>

                {/* Icon */}
                <div className="text-5xl mb-6">{item.icon}</div>

                {/* Text */}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-900 font-medium">{item.text}</p>
                <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SLIDE 3 : GET IN TOUCH ================= */}
      <section className="relative py-32 bg-gradient-to-b from-white via-[#fffdf6] to-[#f6fbfb]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}
            <div className="relative">
              {/* Accent */}
              <div className="w-24 h-1 bg-yellow-400 rounded-full mb-8"></div>

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Get in <span className="text-yellow-400">Touch</span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-10">
                Tell us about your event, idea, or query. Our expert team will
                reach out with a thoughtfully crafted solution tailored just for
                you.
              </p>

              {/* Promise Card */}
              <div className="relative bg-yellow-50 border border-yellow-200 rounded-2xl p-6 max-w-md shadow-lg">
                <div className="absolute -inset-2 bg-yellow-400/20 blur-2xl rounded-2xl -z-10"></div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black text-lg font-bold">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      Quick Response Promise
                    </h3>
                    <p className="text-gray-700">
                      We usually reply within{" "}
                      <span className="font-semibold">24 hours</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form
              onSubmit={handleSubmit}
              className="relative bg-white/80 backdrop-blur-xl rounded-[36px]
                   shadow-[0_40px_100px_-30px_rgba(0,0,0,0.25)]
                   p-12 border border-gray-200"
            >
              {/* Glow */}
              <div className="absolute -inset-8 bg-yellow-400/10 blur-3xl rounded-full -z-10"></div>

              {submitted && (
                <div className="mb-6 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl text-sm">
                  ✅ Message sent successfully! We’ll contact you soon.
                </div>
              )}

              {/* INPUTS */}
              <div className="grid grid-cols-1 gap-6">
                <InputField
                  label="Your Name *"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />

                <InputField
                  label="Phone Number *"
                  name="phone"
                  type="tel"
                  placeholder="Enter your number"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <InputField
                  label="Email Address (optional)"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />

                {/* MESSAGE */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Your Message *
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-xl px-4 py-4
                         focus:outline-none focus:ring-2 focus:ring-yellow-400
                         focus:border-yellow-400 transition resize-none"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="relative overflow-hidden mt-4 rounded-full
                       bg-yellow-400 px-10 py-4 font-semibold tracking-widest
                       text-black transition-all duration-300
                       hover:bg-yellow-500 hover:shadow-[0_20px_50px_rgba(255,193,7,0.5)]"
                >
                  SEND MESSAGE 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ================= SLIDE 4 : VISIT OUR OFFICE ================= */}
      <section className="relative py-32 bg-gradient-to-b from-[#f6fbfb] via-white to-[#fffdf6]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-yellow-400 tracking-[0.35em] text-sm font-semibold mb-4">
              OUR LOCATION
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Visit Our <span className="text-yellow-400">Office</span>
            </h2>

            <p className="text-gray-600 text-lg">
              Find us in Mumbai, Maharashtra.
            </p>
          </div>

          {/* Map Card */}
          <div
            className="relative rounded-[36px] overflow-hidden
                    shadow-[0_40px_100px_-30px_rgba(0,0,0,0.35)]
                    border border-gray-200 bg-white"
          >
            {/* Glow */}
            <div className="absolute -inset-8 bg-yellow-400/20 blur-3xl rounded-full -z-10"></div>


            {/* Map */}
            <iframe
              title="Office Location"
              className="w-full h-[460px] grayscale-[20%] hover:grayscale-0 transition duration-500"
              src="https://www.google.com/maps?q=Mumbai,+Maharashtra&output=embed"
              loading="lazy"
            ></iframe>

            {/* Bottom Hint */}
            <div
              className="absolute bottom-6 right-6 z-20
                      bg-black/70 text-white text-xs px-4 py-2
                      rounded-full backdrop-blur-md"
            >
              Use <span className="font-semibold">Ctrl + Scroll</span> to zoom
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ================= COMPONENTS ================= */

const InfoCard = ({ icon, title, text, sub }) => (
  <div
    className="relative bg-white rounded-3xl p-10 text-center
               shadow-[0_25px_60px_-30px_rgba(0,0,0,0.3)]
               border border-gray-100
               hover:-translate-y-3 hover:shadow-yellow-400/30
               transition-all duration-500"
  >
    <div className="absolute -inset-4 bg-yellow-400/10 blur-3xl rounded-full -z-10"></div>
    <div className="text-5xl mb-5">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-900 font-medium">{text}</p>
    <p className="text-gray-500 text-sm mt-1">{sub}</p>
  </div>
);

const InputField = ({ label, name, type, placeholder, value, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-lg px-4 py-3
                 focus:outline-none focus:ring-2 focus:ring-yellow-400
                 focus:border-yellow-400 transition"
    />
  </div>
);

export default Contact;
