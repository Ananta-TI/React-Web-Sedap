import React, { useEffect, useState } from "react";

export default function LiveBidding() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes");
        const data = await res.json();
        setRecipes(data.recipes.slice(0, 4)); // Ambil 8 item pertama
        setLoading(false);
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return <div className="text-white text-center py-10">Loading Live Bidding...</div>;
  }

  return (
    <section
      id="LiveBidding"
      className="relative bg-[#0f0e13] text-white py-16 px-6 overflow-hidden"
    >
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
        <h3 className="text-3xl font-bold mb-10 text-white">Live Bidding</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {recipes.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 border border-white/20 rounded-2xl backdrop-blur-md p-4 hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-xl h-48 w-full object-cover mb-4"
              />
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold truncate">{item.name}</h4>
                <span className="text-white/60 text-sm">{item.cuisine}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-white/70 mb-2">
                <span>🔥 {item.rating} ⭐</span>
                <span>🍽 {item.servings} servings</span>
              </div>
              <div className="flex justify-between items-center text-sm text-white/60">
                <span>Prep: {item.prepTimeMinutes}m</span>
                <span>Cook: {item.cookTimeMinutes}m</span>
              </div>
              <div className="mt-4 text-white/50 text-xs">
                Calories: {item.caloriesPerServing}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
