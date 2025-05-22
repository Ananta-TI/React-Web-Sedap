import React, { useEffect, useState } from "react";
export default function TopCollection() {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=8") // ambil 8 resep untuk ditampilkan
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.recipes.map((recipe, index, arr) => {
          const otherImages = arr
            .filter((r) => r.image !== recipe.image)
            .map((r) => r.image);
          const shuffled = otherImages.sort(() => 0.5 - Math.random());
          const smallImgs = shuffled.slice(0, 3);

          return {
            title: recipe.name,
            items: `${recipe.ingredients.length} Ingredients`,
            bigImg: recipe.image,
            smallImgs,
            profileImg: `https://i.pravatar.cc/150?img=${index + 10}`,
          };
        });
        setCollections(mapped);
      });
  }, []);

  return (
    <section id="Top Recipes" className="relative text-white py-16 px-4 bg-[#0f0e13] overflow-hidden">
      {/* Noise layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/bg/noise.gif')",
          backgroundSize: "160px",
          backgroundRepeat: "repeat",
          opacity: 0.08,
        }} />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl font-bold mb-6 md:mb-0">🔥 Top Recipes</h2>
          <a
            href="/Food"
            className="text-sm text-blue-400 hover:text-white border border-blue-400 px-4 py-2 rounded-lg transition duration-300">
            View All →
          </a>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {collections.map((col, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-4
                         hover:scale-[1.02] transition-transform duration-300 shadow-xl">
              <div className="relative rounded-lg overflow-hidden mb-3">
                <img
                  src={col.bigImg}
                  alt={col.title}
                  className="w-full h-48 object-cover rounded-xl" />
              </div>
              <div className="flex justify-between mb-3 gap-1">
                {col.smallImgs.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="w-1/3 h-20 object-cover rounded-md"
                    alt={`thumb-${i}`} />
                ))}
              </div>
              <div className="flex items-center mt-4">
                <img
                  src={col.profileImg}
                  className="w-10 h-10 rounded-full border-2 border-white mr-3"
                  alt="profile" />
                <div>
                  <h4 className="text-base font-semibold">{col.title}</h4>
                  <p className="text-sm text-gray-300">{col.items}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
