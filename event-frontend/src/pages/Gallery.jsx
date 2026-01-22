import galleryData from "../data/galleryData";
import GalleryPreviewCard from "../components/GalleryPreviewCard";
import galleryBg from "../assets/backgrounds/gallery-bg.jpg";

const Gallery = () => {
  return (
    <section
      className="relative min-h-screen pt-32 pb-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${galleryBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center mb-16">
            Client Photo Galleries
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {galleryData.map((item, index) => (
              <GalleryPreviewCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
