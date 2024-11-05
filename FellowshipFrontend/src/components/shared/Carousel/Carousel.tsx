import React, { useState } from "react";

const images = [
  "https://cmogujarat.gov.in/sites/default/files/2024-10/tata-aircraft-complex-inauguration.jpg",
  "https://cmogujarat.gov.in/sites/default/files/2024-10/development-projects-amreli-pm.jpg",
  "https://cmogujarat.gov.in/sites/default/files/2024-10/provide-relief-for-landowners.jpg",
  "https://cmogujarat.gov.in/sites/default/files/2024-10/17th-urban-mobility-india-conference.jpg",
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full md:h-full h-[500px] md:p-2 p-2">
      <div className="overflow-hidden rounded-lg h-full">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform"
        />
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-white p-2 rounded-l"
        >
          &#10094;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="bg-gray-800 text-white p-2 rounded-r"
        >
          &#10095;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
