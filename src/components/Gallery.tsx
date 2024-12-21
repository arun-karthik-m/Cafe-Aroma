import { useState } from "react";

const images = [
  { src: "/placeholder.svg", alt: "Coffee shop interior" },
  { src: "/placeholder.svg", alt: "Latte art" },
  { src: "/placeholder.svg", alt: "Coffee beans" },
  { src: "/placeholder.svg", alt: "Pastries" },
  { src: "/placeholder.svg", alt: "Barista at work" },
  { src: "/placeholder.svg", alt: "Coffee brewing" },
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-coffee-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-coffee-secondary text-center mb-16">
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              <div
                className={`absolute inset-0 bg-coffee-primary/60 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-coffee-secondary text-lg font-medium">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;