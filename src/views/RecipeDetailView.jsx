import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch, API_URL } from "../hooks/useFetch";

import {
  Loader,
  ChevronLeft,
  Utensils,
  BookOpen,
} from "lucide-react";

const RecipeDetailView = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `${API_URL}lookup.php?i=${id}`
  );

  const meal = data?.meals?.[0];

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-gray-300 text-sm sm:text-base">
        <Loader className="animate-spin mr-2 text-blue-400" />
        Preparing your recipe card...
      </div>
    );

  if (!meal) return null;

  // ingredients
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      });
    }
  }

  // instructions
  const instructions = meal.strInstructions
    ? meal.strInstructions
        .split(".")
        .map((step) => step.trim())
        .filter((step) => step.length > 0)
    : [];

  return (
    <main
      className="
        max-w-7xl mx-auto

        px-3 sm:px-5 md:px-6 lg:px-8 xl:px-10

        py-6 sm:py-8 md:py-10 lg:py-12
      "
    >
      {/* Back button */}
      <Link
        to="/"
        className="
          text-yellow-400 hover:text-yellow-300
          flex items-center
          mb-4 sm:mb-6
          font-medium
          transition
          text-sm sm:text-base md:text-lg
        "
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-1" />
        Back to Dashboard
      </Link>

      {/* Card */}
      <div
        className="
          bg-gray-900

          p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12

          rounded-xl sm:rounded-2xl lg:rounded-3xl

          shadow-xl shadow-black/50

          border border-gray-800
        "
      >
        {/* Top section */}
        <div
          className="
            flex flex-col
            lg:flex-row

            gap-6 sm:gap-8 md:gap-10 lg:gap-12
          "
        >
          {/* Left */}
          <div className="lg:w-1/2">
            <h1
              className="
                text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                font-black
                text-gray-100
                mb-4 sm:mb-6
                leading-tight
              "
            >
              {meal.strMeal}
            </h1>

            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="
                w-full
                max-w-sm sm:max-w-md md:max-w-lg
                lg:max-w-full

                aspect-square

                object-cover

                rounded-lg sm:rounded-xl lg:rounded-2xl

                shadow-lg shadow-black/40

                border border-gray-800

                ring-2 ring-blue-500/40

                mx-auto lg:mx-0
              "
            />
          </div>

          {/* Right */}
          <div
            className="
              lg:w-1/2

              bg-gray-800

              rounded-lg sm:rounded-xl

              border border-gray-700

              shadow-inner shadow-black/30

              p-4 sm:p-5 md:p-6
            "
          >
            <h2
              className="
                text-lg sm:text-xl md:text-2xl lg:text-3xl
                font-bold
                text-yellow-400
                mb-4 sm:mb-6
                flex items-center
                border-b border-gray-700
                pb-2 sm:pb-3
              "
            >
              <Utensils className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500" />
              Key Ingredients
            </h2>

            {/* Ingredients */}
            <ul
              className="
                grid
                grid-cols-1
                sm:grid-cols-2

                gap-x-4 sm:gap-x-6
                gap-y-2 sm:gap-y-3
              "
            >
              {ingredients.map((item, index) => (
                <li
                  key={index}
                  className="
                    flex items-start
                    text-gray-300
                    text-sm sm:text-base
                  "
                >
                  <span className="text-blue-400 font-bold mr-2">
                    ›
                  </span>

                  <span className="font-semibold text-white mr-1">
                    {item.measure}
                  </span>

                  {item.ingredient}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
              <span
                className="
                  bg-blue-600 text-white
                  px-3 sm:px-4
                  py-1 sm:py-1.5
                  rounded-full
                  text-xs sm:text-sm
                  font-semibold
                "
              >
                {meal.strCategory}
              </span>

              <span
                className="
                  bg-green-600 text-white
                  px-3 sm:px-4
                  py-1 sm:py-1.5
                  rounded-full
                  text-xs sm:text-sm
                  font-semibold
                "
              >
                {meal.strArea}
              </span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
          <h2
            className="
              text-lg sm:text-xl md:text-2xl lg:text-3xl
              font-bold
              text-gray-100
              mb-6 sm:mb-8
              flex items-center
            "
          >
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500" />
            Detailed Preparation Steps
          </h2>

          <ol className="space-y-3 sm:space-y-4 md:space-y-6">
            {instructions.map((step, index) => (
              <li
                key={index}
                className="
                  text-sm sm:text-base md:text-lg

                  bg-gray-800

                  p-3 sm:p-4 md:p-5

                  rounded-lg sm:rounded-xl

                  border border-blue-500/30

                  hover:bg-gray-700/50

                  transition
                "
              >
                <span className="font-bold text-yellow-400 mr-2">
                  {index + 1}.
                </span>

                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
};

export default RecipeDetailView;
