import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Aarav Sharma",
    role: "Wedding Client",
    message:
      "Absolutely amazing experience! Every detail was perfect and the team made our wedding unforgettable.",
  },
  {
    name: "Neha Patel",
    role: "Birthday Event",
    message:
      "Professional team and beautiful decoration. Guests were impressed and we enjoyed stress-free planning.",
  },
  {
    name: "Rohit Verma",
    role: "Corporate Event",
    message:
      "Highly recommended! Smooth execution, great creativity, and timely delivery.",
  },
  {
    name: "Sneha Iyer",
    role: "Baby Shower",
    message:
      "The setup was magical and exceeded expectations. Thank you for creating beautiful memories!",
  },
];

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const ClientReviews = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white py-24">
      {/* Decorative Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-20 px-6"
      >
        <p className="uppercase text-yellow-400 tracking-[0.35em] mb-4 text-sm font-semibold">
          Client Testimonials
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          What Our Clients Say
        </h1>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-relaxed">
          Real experiences from our happy clients who trusted us with their most
          important moments.
        </p>
      </motion.div>

      {/* REVIEWS GRID */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="group relative bg-white/10 backdrop-blur-xl border border-white/20
                       rounded-3xl p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]
                       hover:shadow-yellow-500/30 transition-all duration-500"
          >
            {/* Gold Accent */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-t-3xl"></div>

            {/* Stars */}
            <div className="flex mb-4 text-yellow-400 text-lg">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <motion.span
                    key={index}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: index * 0.2,
                    }}
                  >
                    ★
                  </motion.span>
                ))}
            </div>

            {/* Message */}
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              “{review.message}”
            </p>

            {/* Client Info */}
            <div className="border-t border-white/10 pt-4">
              <p className="font-semibold tracking-wide">{review.name}</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                {review.role}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mt-24 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Let’s Create Your Perfect Event
        </h2>

        <motion.button
          whileHover={{ scale: 1.08 }}
          className="relative overflow-hidden rounded-full border-2 border-yellow-400
                     px-10 py-4 font-semibold text-yellow-400
                     transition-all duration-300 hover:bg-yellow-400 hover:text-black"
        >
          Book Your Event
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ClientReviews;
