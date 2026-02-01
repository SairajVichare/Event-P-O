import galleryData from "../data/galleryData";
import GalleryPreviewCard from "../components/GalleryPreviewCard";
import galleryBg from "../assets/backgrounds/gallery-bg.jpg";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <>
      <ScrollToTopButton />

      <section
        className="relative min-h-screen pt-32 pb-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${galleryBg})` }}
      >
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-md"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-yellow-500 tracking-[0.35em] text-sm font-semibold mb-4">
              OUR WORK
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold">
              Client Photo Galleries
            </h1>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              A glimpse into the unforgettable moments we’ve crafted —
              weddings, celebrations, and memories that last forever.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {galleryData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GalleryPreviewCard data={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
