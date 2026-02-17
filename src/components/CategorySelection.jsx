import { Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const CategorySelection = ({ filterByCategory }) => {
  const featuredCategories = [
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian",
    "Breakfast",
    "Pasta",
    "Goat",
    "Pork",
    "Lamb",
  ];

  return (
    <section className="mt-10 sm:mt-14 md:mt-16 lg:mt-20 px-3 sm:px-6 lg:px-10 max-w-7xl mx-auto">

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-100 mb-5 sm:mb-6 tracking-tight border-l-4 border-yellow-400 pl-3 sm:pl-4 flex items-center">
        <Utensils className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500" />
        Quick Filter by Primary Ingredient
      </h2>

      {/* Responsive Grid */}
      <div className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        gap-3
        sm:gap-4
        md:gap-5
        lg:gap-6
      ">
        {featuredCategories.map((cat, index) => (
          <Link
            to={`search/${cat}`}
            key={index}
            onClick={() => filterByCategory(cat)}
            className="
              bg-gray-800
              p-3 sm:p-4 md:p-5
              rounded-lg sm:rounded-xl
              shadow-lg shadow-black/40
              text-center
              font-semibold
              text-sm sm:text-base md:text-lg
              text-gray-100
              border border-gray-700
              hover:border-blue-500
              hover:text-blue-400
              transform hover:scale-105
              hover:bg-gray-700/50
              transition duration-300
            "
          >
            {cat}
          </Link>
        ))}
      </div>

    </section>
  );
};

export default CategorySelection;
