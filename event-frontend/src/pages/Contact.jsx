import React, { useState } from "react";
import contactBg from "../assets/aboutBg.jpg";
import ScrollToTopButton from "../components/ScrollToTopButton";

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

    // ✅ Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill Name, Phone & Message ✅");
      return;
    }

    // ✅ Simulated success
    setSubmitted(true);

    // ✅ Clear form
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
      {/* ================= SLIDE 1 : HERO ================= */}
      <section
        className="relative min-h-screen pt-[100px] flex items-center bg-fixed"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-white">
          <span className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm tracking-wide border border-white/20">
            ✨ We’d love to hear from you
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
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

      {/* ================= SLIDE 2 : CONTACT INFO ================= */}
      <section className="min-h-screen bg-gray-50 flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16 w-full">
          <h2 className="text-4xl font-bold text-center mb-4">
            Reach Us Through
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Choose the best way to connect with our team. We’re quick to respond
            and happy to assist.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <InfoCard
              icon="📁"
              title="General Inquiries"
              text="info@truppfest.com"
              sub="+91 98203 44426"
            />

            <InfoCard
              icon="🤝"
              title="Partnerships"
              text="hr@truppfest.com"
              sub="+91 91360 21212"
            />

            <InfoCard
              icon="💡"
              title="Career"
              text="hr@truppfest.com"
              sub="HR: +91 93203 83801"
            />

            <InfoCard
              icon="📍"
              title="Office Address"
              text="Mumbai, Maharashtra"
              sub="India"
            />

            <InfoCard
              icon="📞"
              title="Call Us"
              text="+91 98203 44426"
              sub="Mon – Sat, 10am–7pm"
            />

            <InfoCard
              icon="✉️"
              title="Email Us"
              text="info@truppfest.com"
              sub="We reply within 24 hrs"
            />
          </div>
        </div>
      </section>

      {/* ================= SLIDE 3 : GET IN TOUCH ================= */}
      <section className="min-h-screen bg-white flex items-center py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-16 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* LEFT TEXT */}
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Tell us about your event, idea, or query. Our team will reach
                out to you with the best possible solution.
              </p>

              {/* Extra highlight box */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-2">
                  ✅ Quick Response Promise
                </h3>
                <p className="text-gray-700">
                  We usually reply within{" "}
                  <span className="font-semibold">24 hours</span>.
                </p>
              </div>
            </div>

            {/* RIGHT FORM */}
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-2xl shadow-xl p-10 grid grid-cols-1 gap-6 border border-gray-200"
            >
              {submitted && (
                <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg text-sm">
                  ✅ Message sent successfully! We’ll contact you soon.
                </div>
              )}

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
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-yellow-400 text-black px-8 py-3 font-semibold
                           hover:bg-yellow-500 transition duration-300 rounded-lg shadow-md"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= SLIDE 4 : MAP (OPTIONAL) ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Visit Our Office
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Find us in Mumbai, Maharashtra.
          </p>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Office Location"
              className="w-full h-[400px]"
              src="https://www.google.com/maps?q=Mumbai,+Maharashtra&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

const InfoCard = ({ icon, title, text, sub }) => (
  <div
    className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100
               hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-800 font-medium">{text}</p>
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
      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
    />
  </div>
);

export default Contact;
