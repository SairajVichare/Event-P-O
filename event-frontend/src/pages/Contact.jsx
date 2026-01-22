import React from "react";
import contactBg from "../assets/aboutBg.jpg";

const Contact = () => {
  return (
    <>
      {/* ================= SLIDE 1 : HERO (UPGRADED) ================= */}
      <section
        className="relative bg-fixed min-h-screen pt-[100px] flex items-center"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-white">
          <span className="inline-block mb-6 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm tracking-wide">
            We’d love to hear from you
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let’s Connect</h1>

          <p className="text-lg text-gray-200 max-w-2xl mb-12">
            Whether it’s a celebration, collaboration, or career — we’re always
            ready to start a conversation.
          </p>

          <div className="text-sm text-gray-300 tracking-widest">SCROLL ↓</div>
        </div>
      </section>

      {/* ================= SLIDE 2 : CONTACT INFO (UPGRADED) ================= */}
      <section className="min-h-screen bg-gray-50 flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
          <h2 className="text-4xl font-bold text-center mb-16">
            Reach Us Through
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* BUSINESS */}
            <InfoCard
              icon="📁"
              title="General Inquiries"
              text="info@truppfest.com"
              sub="+91 98203 44426"
            />

            {/* PARTNERSHIP */}
            <InfoCard
              icon="🤝"
              title="Partnerships"
              text="hr@truppfest.com"
              sub="+91 91360 21212"
            />

            {/* CAREER */}
            <InfoCard
              icon="💡"
              title="Career"
              text="hr@truppfest.com"
              sub="HR: +91 93203 83801"
            />

            {/* ADDRESS */}
            <InfoCard
              icon="📍"
              title="Office Address"
              text="Mumbai, Maharashtra"
              sub="India"
            />

            {/* PHONE */}
            <InfoCard
              icon="📞"
              title="Call Us"
              text="+91 98203 44426"
              sub="Mon – Sat, 10am–7pm"
            />

            {/* EMAIL */}
            <InfoCard
              icon="✉️"
              title="Email Us"
              text="info@truppfest.com"
              sub="We reply within 24 hrs"
            />
          </div>
        </div>
      </section>

      {/* ================= SLIDE 3 : GET IN TOUCH (MODERNIZED) ================= */}
      <section className="min-h-screen bg-white flex items-center py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* LEFT TEXT */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Tell us about your event, idea, or query. Our team will reach
                out to you with the best possible solution.
              </p>
            </div>

            {/* RIGHT FORM */}
            <form className="bg-gray-50 rounded-2xl shadow-xl p-10 grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
              />

              <input
                type="email"
                placeholder="Email Address (optional)"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-400"
              ></textarea>

              <button
                type="submit"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 font-medium
                           hover:bg-yellow-400 hover:text-black transition duration-300 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

const InfoCard = ({ icon, title, text, sub }) => (
  <div
    className="bg-white rounded-xl shadow-lg p-8 text-center
                  hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700 font-medium">{text}</p>
    <p className="text-gray-500 text-sm mt-1">{sub}</p>
  </div>
);

export default Contact;
