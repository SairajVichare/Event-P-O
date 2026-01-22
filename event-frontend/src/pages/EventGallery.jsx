import { useParams } from "react-router-dom";
import galleryData from "../data/galleryData";
import { motion } from "framer-motion";

const EventGallery = () => {
  const { eventType } = useParams();

  const event = galleryData.find((item) => item.type === eventType);

  if (!event) {
    return <p className="text-center mt-40 text-xl">Gallery not found</p>;
  }

  const heroImage = event.images[0];
  const galleryImages = event.images.slice(1);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
            {event.title}
          </h1>

          <p className="tracking-widest text-sm uppercase opacity-90">
            {event.date}
          </p>

          <div className="mt-12 text-xs tracking-widest opacity-70">
            SCROLL ↓
          </div>
        </motion.div>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-[280px] object-cover hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default EventGallery;
