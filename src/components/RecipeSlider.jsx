import React from "react";
import Slider from "react-slick";

import { useFetch } from "../hooks/useFetch";
import RecipeCard from "./RecipeCard";

import { Clock, Loader } from "lucide-react";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);

  const meals = data?.meals || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",

    responsive: [
      {
        breakpoint: 1536, // xl
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280, // lg
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // md
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // sm
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading)
    return (
      <div className="flex justify-center items-center py-8 text-gray-300 text-sm sm:text-base">
        <Loader className="animate-spin mr-2 text-blue-400" />
        Loading {title}...
      </div>
    );

  return (
    <section
      className="
        w-full

        mt-4 sm:mt-6 md:mt-8

        px-1 sm:px-2 md:px-4
      "
    >
      {/* Title */}
      <h2
        className="
          text-lg sm:text-xl md:text-2xl lg:text-3xl

          font-extrabold

          text-gray-100

          mb-4 sm:mb-6

          flex items-center
        "
      >
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500" />
        {title}
      </h2>

      {/* Slider */}
      <div
        className="
          w-full
          mx-auto
        "
      >
        <Slider {...settings}>
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="
                px-2 sm:px-3 md:px-4
              "
            >
              <RecipeCard meal={meal} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecipeSlider;
