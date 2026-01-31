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
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-6"
      >
        <p className="uppercase text-yellow-400 tracking-widest mb-3">
          Client Testimonials
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">
          What Our Clients Say 💬
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Real experiences from our happy clients who trusted us with their
          special moments.
        </p>
      </motion.div>

      {/* REVIEWS GRID */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl hover:shadow-yellow-500/20"
          >
            {/* Stars */}
            <div className="flex mb-3 text-yellow-400">
              {"★★★★★".split("").map((star, index) => (
                <span key={index}>★</span>
              ))}
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              "{review.message}"
            </p>

            <div>
              <p className="font-bold">{review.name}</p>
              <p className="text-sm text-gray-400">{review.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-20"
      >
        <h2 className="text-3xl font-bold mb-4">
          Let’s Create Your Perfect Event 🎉
        </h2>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500"
        >
          Book Your Event
        </motion.button>
      </motion.div>

    </div>
  );
};

export default ClientReviews;
