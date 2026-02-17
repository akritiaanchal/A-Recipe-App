import React from "react";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Cuisine = ({ filterByArea }) => {
  const featuredAreas = [
    "American",
    "British",
    "Canadian",
    "Chinese",
    "Indian",
    "Italian",
    "Mexican",
    "Russian",
    "Thai",
  ];

  return (
    <div className="
      bg-gray-900/80
      border-b border-gray-800
      shadow-inner shadow-black/20
      sticky top-0 z-40
    ">

      <div className="
        max-w-7xl mx-auto
        px-2 sm:px-4 md:px-6 lg:px-8
        overflow-x-auto
        scrollbar-hide
      ">

        <div className="
          flex items-center
          gap-2 sm:gap-3 md:gap-4
          py-2 sm:py-3 md:py-4
          min-w-max
        ">

          {/* Title */}
          <div className="
            flex items-center
            text-sm sm:text-base md:text-lg lg:text-xl
            font-bold text-yellow-400
            pr-2 sm:pr-3 md:pr-4
            whitespace-nowrap
          ">
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            Global Cuisines:
          </div>

          {/* Cuisine Buttons */}
          {featuredAreas.map((area) => (
            <Link
              to={`search/${area}`}
              onClick={() => filterByArea(area)}
              key={area}
              className="
                whitespace-nowrap
                text-xs sm:text-sm md:text-base
                font-medium
                text-gray-200
                bg-gray-800
                border border-gray-700

                px-3 sm:px-4 md:px-5
                py-1 sm:py-1.5 md:py-2

                rounded-full

                hover:text-white
                hover:bg-blue-600
                hover:border-blue-500
                hover:shadow-lg hover:shadow-blue-800/40

                transform hover:scale-105
                transition duration-300
              "
            >
              {area}
            </Link>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Cuisine;
