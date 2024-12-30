import React, { useState } from "react";

const SliderComponent = () => {
  const sliderData = [
    { id: 1, name: "Claude Sonnet 3.5", icon: "/icon1.jpg" },
    { id: 2, name: "Llama-3.1 405B", icon: "/icon2.jpg" },
    { id: 3, name: "Abacus.AI Smaug", icon: "/icon4.jpg" },
    { id: 4, name: "Gemini 1.5 Pro", icon: "/icon3.jpg" },
    { id: 5, name: "o1", icon: "/icon5.jpg" },
    { id: 6, name: "o1 Mini", icon: "/icon6.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === sliderData.length - 1 ? 0 : prev + 1
    );
  };

  const getSlideStyle = (index) => {
    if (index === currentIndex) {
      return "scale-100 opacity-100 z-10"; // Centered slide
    } else if (
      index === (currentIndex - 1 + sliderData.length) % sliderData.length
    ) {
      return "scale-75 opacity-75 -translate-x-20 z-0"; // Left slide
    } else if (
      index === (currentIndex + 1) % sliderData.length
    ) {
      return "scale-75 opacity-75 translate-x-20 z-0"; // Right slide
    } else {
      return "scale-50 opacity-50"; // Hidden slides
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto h-[400px] md:h-[500px] lg:h-[600px] shadow-lg rounded-lg p-4">
      
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Experience The Fundamentals
      </h1>

      
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        <div className="flex w-full h-full justify-center items-center relative">
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute transform transition-all duration-500 ${getSlideStyle(index)}`}
            >
              <img
                src={slide.icon}
                alt={slide.name}
                className="rounded-lg shadow-md w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
              />
              {index === currentIndex && (
                <p className="text-center mt-4 text-lg font-semibold text-gray-700">
                  {slide.name}
                </p>
              )}
            </div>
          ))}

        </div>
      </div>

      
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300"
      >
        ◀
      </button>

     
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-all duration-300"
      >
        ▶
      </button>

      {/* pagination */}
      <div className="flex justify-center mt-4 gap-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 w-4 transition ${
              index === currentIndex
                ? "bg-pink-500 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
         ))}
        </div>
    </div>
  );
};

export default SliderComponent;





