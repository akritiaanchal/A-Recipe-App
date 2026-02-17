import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`} className="block h-full">
      <div
        className="
          relative
          bg-gray-900
          rounded-lg sm:rounded-xl
          shadow-lg shadow-black/40
          overflow-hidden
          group
          transform transition duration-500
          cursor-pointer
          border border-gray-800
          hover:shadow-blue-600/40
          hover:-translate-y-1 sm:hover:-translate-y-2
          h-full
        "
      >
        {/* Hover glow */}
        <div className="
          absolute inset-0
          rounded-lg sm:rounded-xl
          border border-transparent
          group-hover:border-blue-500/70
          transition duration-500
        "></div>

        {/* Image container */}
        <div className="
          flex justify-center items-center

          p-3 sm:p-4 md:p-5

          aspect-square
        ">
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            className="
              w-full
              h-full
              object-cover

              rounded-md sm:rounded-lg md:rounded-xl

              border border-yellow-400

              transition duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Content */}
        <div className="
          px-2 sm:px-3 md:px-4
          pb-3 sm:pb-4
          text-center
        ">
          <h3
            className="
              text-sm sm:text-base md:text-lg lg:text-xl

              font-bold
              text-gray-100

              group-hover:text-blue-400

              transition duration-300

              line-clamp-2
            "
          >
            {meal.strMeal}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
