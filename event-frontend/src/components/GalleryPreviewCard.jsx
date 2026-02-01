import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GalleryPreviewCard = ({ data }) => {
  const coverImage = data.images[0];
  const previewImages = data.images.slice(1, 4);

  return (
    <Link to={`/gallery/${data.type}`}>
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="group relative rounded-3xl overflow-hidden
                   bg-white/90 backdrop-blur-xl
                   shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]
                   hover:shadow-[0_40px_120px_-30px_rgba(0,0,0,0.5)]"
      >
        {/* HERO IMAGE */}
        <div className="relative overflow-hidden">
          <img
            src={coverImage}
            alt={data.title}
            className="h-[280px] w-full object-cover
                       transition-transform duration-700
                       group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t
                          from-black/70 via-black/20 to-transparent"></div>

          {/* Title on image */}
          <h3 className="absolute bottom-5 left-6 text-xl font-semibold text-white tracking-wide">
            {data.title}
          </h3>
        </div>

        {/* PREVIEW STRIP */}
        <div className="grid grid-cols-3 gap-3 p-5 bg-white">
          {previewImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={img}
                alt="preview"
                className="h-24 w-full object-cover
                           transition-transform duration-500
                           hover:scale-110"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </Link>
  );
};

export default GalleryPreviewCard;
