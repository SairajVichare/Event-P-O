import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GalleryPreviewCard = ({ data }) => {
  const coverImage = data.images[0];           // hero
  const previewImages = data.images.slice(1, 4); // small previews

  return (
    <Link to={`/gallery/${data.type}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl"
      >
        {/* BIG IMAGE */}
        <img
          src={coverImage}
          alt={data.title}
          className="w-full h-[260px] object-cover"
        />

        {/* SMALL IMAGES */}
        <div className="grid grid-cols-3 gap-2 p-3">
          {previewImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="preview"
              className="h-20 w-full object-cover rounded-md"
            />
          ))}
        </div>

        {/* TEXT */}
        <div className="px-4 pb-4">
          <h3 className="text-lg font-semibold">{data.title}</h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default GalleryPreviewCard;
