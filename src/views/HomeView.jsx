import React from "react";

import RecipeSlider from "../components/RecipeSlider";
import TredingRecipe from "../components/TredingRecipe";
import CategorySection from "../components/CategorySelection";

import { API_URL } from "../hooks/useFetch";

const HomeView = ({ filterByCategory }) => {
  return (
    <main
      className="
        w-full
        max-w-7xl
        mx-auto

        px-3
        sm:px-5
        md:px-6
        lg:px-8
        xl:px-10

        py-4
        sm:py-6
        md:py-8
        lg:py-10

        space-y-8
        sm:space-y-10
        md:space-y-12
        lg:space-y-16
      "
    >
      {/* Slider Section */}
      <section>
        <RecipeSlider
          title="Staff Curated Picks"
          fetchUrl={`${API_URL}search.php?f=c`}
        />
      </section>

      {/* Trending Section */}
      <section>
        <TredingRecipe
          title="Quick & Easy Meals"
          fetchUrl={`${API_URL}filter.php?a=Canadian`}
        />
      </section>

      {/* Category Section */}
      <section>
        <CategorySection filterByCategory={filterByCategory} />
      </section>
    </main>
  );
};

export default HomeView;
