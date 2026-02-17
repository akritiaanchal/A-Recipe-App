import React from "react";
import { ChevronLeft, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const SearchView = ({ meals, loading }) => {
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

          mb-4 sm:mb-6 md:mb-8

          font-medium

          transition

          text-sm sm:text-base md:text-lg
        "
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-1" />
        Back to Dashboard
      </Link>

      {/* Loader */}
      {loading && (
        <div
          className="
            flex justify-center items-center

            py-10 sm:py-14 md:py-16

            text-gray-300

            text-sm sm:text-base md:text-lg
          "
        >
          <Loader className="animate-spin mr-2 text-blue-400" />
          Searching the database...
        </div>
      )}

      {/* Results */}
      {!loading && meals.length > 0 && (
        <div
          className="
            grid

            grid-cols-1
            xs:grid-cols-2
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6

            gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7
          "
        >
          {meals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}

      {/* Empty state */}
      {!loading && meals.length === 0 && (
        <div
          className="
            text-center

            text-gray-400

            py-10 sm:py-14 md:py-16

            text-sm sm:text-base md:text-lg
          "
        >
          No recipes found. Try another search.
        </div>
      )}
    </main>
  );
};

export default SearchView;
