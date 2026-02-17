import React from "react";
import Slider from "react-slick";

import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { Clock, Loader } from "lucide-react";

const TredingSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    // 👇 responsive breakpoints
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1536, // 2xl
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1280, // xl
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024, // lg
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // md
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // sm
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (loading)
    return (
      <div className="text-center py-8 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Loading {title}...
      </div>
    );

  if (error)
    return (
      <div className="text-center py-8 text-red-400">
        Failed to load {title}
      </div>
    );

  return (
    <section className="mt-6 w-full">
      
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-100 mb-4 sm:mb-6 tracking-tight border-l-4 border-yellow-400 pl-3 sm:pl-4 flex items-center">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500" />
        {title}
      </h2>

      {/* Slider */}
      <div className="w-full">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="px-2 sm:px-3 md:px-4 flex justify-center"
            >
              <Link to={`/recipe/${meal.idMeal}`}>
                <div className="relative bg-gray-900 rounded-xl shadow-lg sm:shadow-xl shadow-black/50 overflow-hidden group transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50">

                  {/* Hover border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/80 transition duration-500"></div>

                  {/* Image */}
                  <div className="flex justify-center items-center p-3 sm:p-4 md:p-5">
                    <img
                      src={meal?.strMealThumb}
                      alt={meal?.strMeal}
                      className="
                        h-[90px] w-[90px]
                        sm:h-[110px] sm:w-[110px]
                        md:h-[120px] md:w-[120px]
                        lg:h-[130px] lg:w-[130px]
                        rounded-xl border border-yellow-400
                        transition duration-500 group-hover:scale-105
                        object-cover
                      "
                    />
                  </div>

                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

    </section>
  );
};

export default TredingSlider;
