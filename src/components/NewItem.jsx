import React, { useEffect, useState } from "react";
import ShapeBlur from './VertexShader';
import SpotlightCard from './SpotLightCard';


const NewItems = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes.slice(0, 4)))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <section
      id="about-section"
      className="relative bg-[#0f0e13] text-white py-16 px-6 overflow-hidden">

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/bg/noise.gif')",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
          opacity: 0.08,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold mb-6 md:mb-0">New Recipes</h2>
          <a
            href="#"
            className="text-sm text-blue-400 hover:text-white border border-blue-400 px-4 py-2 rounded-lg transition duration-300"
          >
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <SpotlightCard
              key={recipe.id}
              className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-4 hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{recipe.name}</span>
                  <span className="text-sm  font-bold text-green-500">{recipe.cuisine}</span>
                </div>
                <div className="text-sm text-white line-clamp-2">
                  {recipe.instructions}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-white/70">
                    Calories: <span className="font-bold text-yellow-500">{recipe.caloriesPerServing}</span>
                  </span>
                  <span className="text-sm font-bold text-blue-500">{recipe.difficulty}</span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
