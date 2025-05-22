import React, { useEffect, useState } from "react";
import { useBreadcrumb } from "../context/BreadcrumbContext";

export default function Food() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("7 Day's");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 12;
  const { breadcrumb } = useBreadcrumb();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setRecipes(data.recipes);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const filterOptions = ["1 Day", "7 Day's", "15 Day's", "30 Day's"];

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  if (loading) {
    return <div className="text-center py-10 text-white">Loading...</div>;
  }

  return (
    <section className="relative min-h-screen bg-[#0f0e13] text-white py-16 px-6 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/bg/noise.gif')",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
          opacity: 0.08,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-3xl font-semibold mt-4">
          Top Recipes in <span className="text-blue-500">{selectedFilter}</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="bg-white/5 text-white/80 text-sm border border-white/10 px-4 py-2 rounded-md backdrop-blur-md"
          >
            {filterOptions.map((option, idx) => (
              <option key={idx} value={option} className="text-black">
                {option}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search recipe..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-white/5 text-white/80 text-sm border border-white/10 px-4 py-2 rounded-md backdrop-blur-md"
          />
        </div>
      </div>

      <div className="relative z-10 grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentRecipes.map((recipe, index) => (
          <div
            key={recipe.id}
            className="relative backdrop-blur-md px-4 py-6 rounded-lg border border-white/10 transition hover:scale-[1.02]"
          >
            <div className="absolute right-3 top-2 text-[64px] font-bold text-white/5 z-0">
              {indexOfFirstRecipe + index + 1}
            </div>

            <div className="relative z-10 flex items-center gap-4 mb-4">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{recipe.name}</h3>
                <p className="text-sm text-white/70 capitalize">
                  Cuisine: {recipe.cuisine}
                </p>
              </div>
            </div>

            <div className="relative z-10 text-sm space-y-1">
              <p className="text-white/60">Prep Time: {recipe.prepTimeMinutes} mins</p>
              <p className="text-white/60">Cook Time: {recipe.cookTimeMinutes} mins</p>
              <p className="text-white/60">Servings: {recipe.servings}</p>
              <p className="text-white/70 truncate">Calories: {recipe.caloriesPerServing}</p>
              <p className="text-white/50">Rating: ⭐ {recipe.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>

      {filteredRecipes.length > 0 && (
        <div className="relative z-10 flex justify-center items-center mt-12 gap-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md text-sm transition ${
              currentPage === 1
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            Previous
          </button>
          <span className="text-white/80 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md text-sm transition ${
              currentPage === totalPages
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
